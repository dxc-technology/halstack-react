pipeline {
    agent {
      dockerfile {
        args '-u root:root'
        filename 'docker/Dockerfile'
        reuseNode true
      }
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh '''
                    npm install
                '''
            }
        }
        stage('Running rollup') {
            steps {
                sh '''
                    rollup -c
                '''
            }
        }
        stage('Push UX-Web library artifact to master') {
            when { branch 'master' }
            steps {
                script {
                    def doPromote=true;
                    try {
                        timeout(time: 10, unit: 'MINUTES') {
                                env.RELEASE_NUMBER = input message: 'Do you want to publish this new package?', ok: 'Release!',
                                    parameters: [string(defaultValue: env.PACKAGE_VERSION, description: 'package version', name: 'version')]
                        }
                    } catch(err) {
                        doPromote=false;
                    }
                    if(doPromote){
                        isStable=false;
                        try {
                             timeout(time: 2, unit: 'MINUTES') {
                                 input (message: 'Do you want to tag this package as stable?', ok: 'Yes')
                             }
                             isStable=true;
                        } catch(err) {
                         echo "This build was published to NPM but not tagged as stable"
                        }

                        // ADD HERE NEW VERSION ON PACKAGE.JSON
                        sh "sed -i -e 's/1.0.0/'${env.RELEASE_NUMBER}'/g' ./package.json"
                        sh "sed -i -e s+./dist/index.js+./index.js+ ./package.json"
                        sh "sed -i -e s+./dist/index.es.js+./index.es.js+ ./package.json"
                        sh "cat ./package.json"

                        // TAG IF IS STABLE
                        if (isStable) {

                          currentBuild.description = "published: ${env.RELEASE_NUMBER} (stable tag:${isStable})"
                          echo "Create Git tag ${env.RELEASE_NUMBER}"
                          withCredentials ([
                            usernamePassword(credentialsId: 'pdxc-jenkins', usernameVariable: 'GIT_USER', passwordVariable: 'GIT_PASSWORD')])
                                { sh '''
                                  gitUrlWithCreds="$(echo "${GIT_URL}" | sed -e 's!://!://'${GIT_USER}:${GIT_PASSWORD}'@!')"
                                  git tag "${RELEASE_NUMBER}" "${GIT_COMMIT}"
                                  git push "${gitUrlWithCreds}" "${RELEASE_NUMBER}"
                                ''' }
                          }
                    }

                    // Insert .npmrc
                    withCredentials([file(credentialsId: 'npmrc', variable: 'CONFIG')]) {
                      sh '''
                      cat ${CONFIG} > ~/.npmrc
                      cp ./package.json ./dist/package.json
                      cd ./dist
                      npm config set @diaas:registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm
                      npm publish --registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm
                      '''
                    }
                }
            }
        }
        stage('Push UX-Web library artifact to development') {
            when { branch 'development' }
            steps {
                // Insert .npmrc
                withCredentials([file(credentialsId: 'npmrc', variable: 'CONFIG')]) {
                    // ADD HERE NEW VERSION ON PACKAGE.JSON
                    sh "sed -i -e 's/1.0.0/'0.0.0-beta.${BUILD_ID}'/g' ./package.json"
                    sh "sed -i -e s+./dist/index.js+./index.js+ ./package.json"
                    sh "sed -i -e s+./dist/index.es.js+./index.es.js+ ./package.json"
                    sh "cat ./package.json"
                    sh '''
                    cat ${CONFIG} > ~/.npmrc
                    cp ./package.json ./dist/package.json
                    cd ./dist
                    npm config set @diaas:registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm
                    npm publish --registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm --tag beta
                    '''
                }
            }
        }
    }
}

pipeline {
    agent {
        dockerfile {
            filename 'docker/Dockerfile'
        }
    }
    stages {
        stage('Git') {
            steps {
                    withCredentials([usernamePassword(credentialsId:"pdxc-jenkins", passwordVariable:"GIT_PASSWORD", usernameVariable:"GIT_USER")]) {
                        sh "touch ~/.netrc"
                        sh "echo 'machine github.dxc.com' >> ~/.netrc"
                        sh "echo 'login ${GIT_USER}' >> ~/.netrc"
                        sh "echo 'password ${GIT_PASSWORD}' >> ~/.netrc"
                        sh "git config --global user.email 'jenkins@dxc.com'"
                        sh "git config --global user.name 'Jenkins User'"
                    }
                    script {
                        env.OLD_RELEASE_NUMBER = sh (
                            script: "grep 'version' package.json | grep -o '[0-9.].*[^\",]'",
                            returnStdout: true
                        ).trim()
                    }
            }
        }
        stage('Release type') {
            when {
                expression { BRANCH_NAME ==~ /^.*\b(release)\b.*$/ } 
            }
            steps {
                script {
                    try {
                        timeout(time: 10, unit: 'MINUTES') {
                            env.RELEASE_OPTION = input message: 'Select a release option', ok: 'Continue',
                                parameters: [
                                    choice(
                                        name: 'type',
                                        choices: "major\nminor\npatch\npremajor\npreminor\nprepatch\nprerelease\nno-release",
                                        description: "Version to bump from: ${OLD_RELEASE_NUMBER}. If release is selected, a new release will be released. When you select release option, a tag is created in GitHub with that version, the release is pointed to that tag and release notes will be added. Also is important to note that the created package for the release is going to be uploaded to Artifactory. To continue without releasing, select no-release. After 10 minutes, if you don`t select any choice the default selected option will be `no-release`"
                                    )
                                ]
                        }
                    } catch(err) {
                        env.RELEASE_OPTION = 'no-release'
                    }
                }
            }
        }
        stage('Password to continue') {
            when {
                expression { env.RELEASE_OPTION == 'major' | env.RELEASE_OPTION == 'minor' | env.RELEASE_OPTION == 'patch' | env.RELEASE_OPTION == 'premajor' | env.RELEASE_OPTION == 'preminor' | env.RELEASE_OPTION == 'prepatch' |env.RELEASE_OPTION == 'prerelease' } 
            }
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId:"diaas-rw", passwordVariable:"ARTIF_PASSWORD", usernameVariable:"ARTIF_USER")]) {
                        env.PASSWORD = input message: 'Enter password to continue', ok: 'Continue',
                            parameters: [string(defaultValue: '', description: 'Password required', name: 'password')]
                        if (env.PASSWORD == ARTIF_PASSWORD) {
                            env.RELEASE_VALID = 'valid';
                        } else {
                            env.RELEASE_VALID = 'invalid';
                            env.RELEASE_TYPE = 'no-release'
                            echo 'Invalid password. The version will not be released.'
                        }
                    }
                }
            }
        }
        stage('Release versioning') {
            when {
                expression { env.RELEASE_VALID == 'valid' } 
            }
            steps {
                script {
                    if (env.RELEASE_OPTION == 'premajor' | env.RELEASE_OPTION == 'preminor' | env.RELEASE_OPTION == 'prepatch' | env.RELEASE_OPTION == 'prerelease') {
                        env.RELEASE_TYPE = input message: 'Select a pre-release type', ok: 'Continue',
                        parameters: [
                            choice(
                                name: 'type',
                                choices: "beta\nrc",
                                description: 'BETA when the version could have some errors. RC if the version is completely ready to release.' 
                            )
                        ]
                    }
                }
            }
        }
        stage('Install dependencies') {
            steps {
                sh '''
                    npm install
                '''
            }
        }
        stage('Build dxc-react-cdk library') {
            steps {
                sh '''
                    npm run build
                '''
            }
        }
        stage('Build dxc-react-cdk storybook') {
            steps {
                sh '''
                    npm run build-storybook
                '''
            }
        }
        stage('Test library') {
            steps {
                sh '''
                    echo 'Add tests'
                '''
            }
        }
        stage('.npmrc') {
            when {
                expression { env.RELEASE_VALID == 'valid' | env.BRANCH_NAME == 'master' } 
            }
            steps {
                withCredentials([file(credentialsId: 'npmrc', variable: 'CONFIG')]) {
                    sh '''
                        cat ${CONFIG} > ~/.npmrc
                        npm config set @diaas:registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm
                    '''
                }
            }
        }
        stage('Publish dxc-react-cdk alpha version to Artifactory ') {
            when { branch 'master' }
            steps {
                // Publish library to npm repository
                sh "sed -i -e 's/${OLD_RELEASE_NUMBER}/'${OLD_RELEASE_NUMBER}-alpha.${BUILD_ID}'/g' ./dist/package.json"
                sh '''
                    npm publish --registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm --tag alpha
                '''
            }
        }
        stage('Deploy storybook to dev and publish to Artifactory') {
            when { branch 'master' }
            steps {
                // Deploying storybook to dev-diaas-react-storybook environment
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'DIAAS-AWS-CLI',
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
                ]]) {
                    withAWS(role:"arn:aws:iam::665158502186:role/ISS_DIAAS_PowerUser"){
                        sh '''
                            aws s3 rm s3://dev-diaas-react-storybook/ --recursive
                            aws s3 cp ./storybook-static/ s3://dev-diaas-react-storybook/ --recursive
                        '''
                    }
                }
                // Zipping storybook
                sh '''
                    rm -rf storybook.zip
                '''
                zip zipFile: 'storybook.zip', archive: false, dir: './storybook-static'
                // Uploading storybook to Artifactory (diaas-generic)
                withCredentials([usernamePassword(credentialsId:"diaas-rw", passwordVariable:"ARTIF_PASSWORD", usernameVariable:"ARTIF_USER")]) {
                  sh '''
                        curl -u${ARTIF_USER}:${ARTIF_PASSWORD} -T ./storybook.zip "https://artifactory.csc.com/artifactory/diaas-generic/dxc-react-cdk/storybook/storybook-bundle.${BRANCH_NAME}.${BUILD_ID}.zip"
                  '''
                }
            }
        }
        stage('Tagging version') {
            when {
                expression { env.RELEASE_VALID == 'valid' } 
            }
            steps {
                script {
                    if (env.BUILD_ID == 1) {
                        sh "git checkout -b ${GIT_BRANCH}"
                    } else {
                        sh "git checkout ${GIT_BRANCH}"
                        sh "git reset --hard origin/${GIT_BRANCH}"
                        sh "git tag | xargs git tag -d"
                    }
                    sh "git pull origin ${GIT_BRANCH}"
                    if (env.RELEASE_OPTION == 'major') {
                        sh "npm version major"
                    } else if (env.RELEASE_OPTION == 'minor') {
                        sh "npm version minor"
                    } else if (env.RELEASE_OPTION == 'patch') {
                        sh "npm version patch"
                    } else if (env.RELEASE_OPTION == 'premajor') {
                        sh "npm version premajor --preid=${RELEASE_TYPE}"
                    } else if (env.RELEASE_OPTION == 'preminor') {
                        sh "npm version preminor --preid=${RELEASE_TYPE}"
                    } else if (env.RELEASE_OPTION == 'prepatch') {
                        sh "npm version prepatch --preid=${RELEASE_TYPE}"
                    } else if (env.RELEASE_OPTION == 'prerelease') {
                        sh "npm version prerelease --preid=${RELEASE_TYPE}"
                    }
                    env.RELEASE_NUMBER = sh (
                            script: "grep 'version' package.json | grep -o '[0-9.].*[^\",]'",
                            returnStdout: true
                        ).trim()
                    sh "sed -i -e 's/${OLD_RELEASE_NUMBER}/'${RELEASE_NUMBER}'/g' dist/package.json"
                    sh "git push --tags"
                }
            }
        }
        stage('Generating release notes') {
            when {
                expression { env.RELEASE_VALID == 'valid' } 
            }
            steps {
                script {
                    try {
                        sh "github_changelog_generator --github-site='https://github.dxc.com' --github-api='https://github.dxc.com/api/v3/' --token d53a75471da39b66fafb25dfcc9613c069de337e"
                        sh "cat CHANGELOG.md"
                        sh "git add CHANGELOG.md package.json"
                        sh "git commit -m 'New release: ${RELEASE_NUMBER}'"
                        sh "git push origin ${GIT_BRANCH}"
                        sh "showdown makehtml -i CHANGELOG.md -o CHANGELOG.html"
                        sh "gren release --api-url=https://github.dxc.com/api/v3 --token=d53a75471da39b66fafb25dfcc9613c069de337e --override"
                    } catch(err) {
                        echo "GREN Release Notes failed!"
                    }
                }
            }
        }
        stage('Publish dxc-react-cdk version to Artifactory ') {
            when {
                expression { env.RELEASE_VALID == 'valid' } 
            }
            steps {
                script {
                    // Publish library to npm repository
                    try {
                        env.RELEASE_TYPE = sh (
                            script: "grep 'version' package.json | grep -o '[0-9.].*[^\",]' | grep -o '[a-z].*[^.0-9]'",
                            returnStdout: true
                        ).trim()
                    } catch(err) {
                        env.RELEASE_TYPE = ''
                    }
                    
                    if (env.RELEASE_TYPE == 'beta' | env.RELEASE_TYPE == 'rc') {
                        sh '''
                            cd ./dist
                            npm publish --registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm --tag ${RELEASE_TYPE}
                        '''
                    } else {
                        sh '''
                            cd ./dist
                            npm publish --registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm
                        '''
                    }
                    
                }
            }
        }
        stage('Deploy storybook to demo and publish to Artifactory') {
            when {
                expression { env.RELEASE_VALID == 'valid' } 
            }
            steps {
                // Deploying storybook to dev-diaas-react-storybook environment
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: 'DIAAS-AWS-CLI',
                    accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                    secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
                ]]) {
                    withAWS(role:"arn:aws:iam::665158502186:role/ISS_DIAAS_PowerUser"){
                        sh '''
                            aws s3 rm s3://diaas-react-storybook/${RELEASE_NUMBER}/ --recursive
                            aws s3 cp ./storybook-static/ s3://diaas-react-storybook/${RELEASE_NUMBER}/ --recursive
                        '''
                    }
                }
                // Zipping storybook
                sh '''
                    rm -rf storybook.zip
                '''
                zip zipFile: 'storybook.zip', archive: false, dir: './storybook-static'
                // Uploading storybook to Artifactory (diaas-generic)
                withCredentials([usernamePassword(credentialsId:"diaas-rw", passwordVariable:"ARTIF_PASSWORD", usernameVariable:"ARTIF_USER")]) {
                  sh '''
                        curl -u${ARTIF_USER}:${ARTIF_PASSWORD} -T ./storybook.zip "https://artifactory.csc.com/artifactory/diaas-generic/dxc-react-cdk/storybook/storybook-bundle.${BRANCH_NAME}.${BUILD_ID}.zip"
                  '''
                }
            }
        }
    }
    post { 
        failure {
            script {
                env.GIT_USER = sh (
                    script: 'git --no-pager show -s --format=\'%ae\'',
                    returnStdout: true
                ).trim()
                if (BRANCH_NAME ==~ /^.*\b(release)\b.*$/ | BRANCH_NAME == 'master') {
                    emailext subject: 'The pipeline failed! Please fix this error ASAP :)', body: "Commit: ${GIT_COMMIT}\n Url: ${GIT_URL}\n Branch: ${GIT_BRANCH}", to: 'gvigilrodrig@dxc.com; jsuarezardid@dxc.com',from: 'gvigilrodrig@dxc.com'
                } else {
                    emailext subject: 'The pipeline failed! Your changes are breaking the project, please fix this error ASAP :)', body: "Commit: ${GIT_COMMIT}\n Url: ${GIT_URL}\n Branch: ${GIT_BRANCH}", to: "${GIT_USER}",from: 'gvigilrodrig@dxc.com'
                }
            }
        }
        success {
            script {
                env.GIT_USER = sh (
                    script: 'git --no-pager show -s --format=\'%ae\'',
                    returnStdout: true
                ).trim()
                if (BRANCH_NAME ==~ /^.*\b(release)\b.*$/ && env.RELEASE_VALID == 'valid') {
                    emailext mimeType: 'text/html', subject: "New DXC react CDK Release! Check out the new changes in this version: ${env.RELEASE_NUMBER} :)", body: '${FILE,path="./CHANGELOG.html"}', to: 'gvigilrodrig@dxc.com; jsuarezardid@dxc.com',from: 'gvigilrodrig@dxc.com'
                } else if (GIT_USER != 'jenkins@dxc.com') {
                    emailext subject: 'Your changes passed succesfully all the stages, you are a really good developer! YES, YOU ARE :)', body: "Commit: ${GIT_COMMIT}\n Url: ${GIT_URL}\n Branch: ${GIT_BRANCH}", to: "${GIT_USER}",from: 'gvigilrodrig@dxc.com'
                }
            }
        }
    }
}

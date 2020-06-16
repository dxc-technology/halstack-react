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
                            script: "grep 'version' lib/package.json | grep -o '[0-9.].*[^\",]'",
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
        stage('Install App dependencies') {
            steps {
                sh '''
                    cd app
                    npm install
                '''
            }
        }
        stage('Install Lib dependencies') {
            steps {
                sh '''
                    cd lib
                    npm install
                '''
            }
        }
       
        stage('Build dxc-react-cdk library') {
            steps {
                sh '''
                    cd lib
                    npm run build
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
                    '''
                }
            }
        }
        stage('Publish dxc-react-cdk alpha version to Artifactory ') {
            when { branch 'master' }
            steps {                
                sh "sed -i -e 's/${OLD_RELEASE_NUMBER}/'${OLD_RELEASE_NUMBER}-alpha.${BUILD_ID}'/g' ./lib/package.json"
                sh '''
                    cd lib
                    npm publish --registry https://artifactory.csc.com/artifactory/api/npm/diaas-npm-local/ --tag alpha

                '''
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
Boolean checkRepoName(repoName, hardcodeRepoName){
    if (hardcodeRepoName == repoName){
        return true
    }
    return false
}

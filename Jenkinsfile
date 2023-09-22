pipeline {
    agent any

    tools {nodejs "NodeJS"}

    stages {
        stage('Hello') {
            steps {
                echo 'Hello..'
            }
        }
        stage('Build') {
            when {
                branch "rollup*"
            }
            steps {
                sh 'yarn install'
                sh 'yarn run build'
                echo "Building $BRANCH_NAME"
            }
        }
        stage('Publish') {
            steps {
               load "$JENKINS_HOME/jobvars.env"

                withEnv(["TOKEN=${NPM_TOKEN}"]) {

                    sh 'echo "//registry.npmjs.org/:_authToken=${TOKEN}" >> ~/.npmrc'
                    sh 'npm publish' 

                }
            }
        }
    }
}
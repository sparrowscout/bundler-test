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
             when {
                tag "release-*"
            }
            steps {
                 sh 'yarn install'
                sh 'yarn run build'
                echo "Building $BRANCH_NAME"
                    sh 'echo //registry.npmjs.org/:_authToken=${NPM_TOKEN}'
                    sh 'npm publish' 
            }
        }        
        stage('test') {
             when {
                tag "release-*"
            }
            steps {
                echo "Building $TAG_NAME"
            }
        }
    }
}
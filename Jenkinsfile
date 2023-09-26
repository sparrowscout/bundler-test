pipeline {
    agent any

    tools {nodejs "NodeJS"}
  
    stages {
        stage('Hello') {
            steps {
                echo 'Hello...'
            }
        }
        stage('Build') {
            when {
                branch "rollup*"
            }
            steps {
                sh 'npm install'
                sh 'yarn run build'
            }
        }
        stage('Publish') {
            when {
                branch "rollup*"
            }
            steps {
                sh 'npm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"'
                sh 'npm publish' 
              
            }
        }

    }
}
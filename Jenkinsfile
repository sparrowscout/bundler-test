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
                branch "esbuild-*"
            }
            steps {
               sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('for the PR branch') {
            when {
                branch "PR-*"
            }
            steps {
                echo 'this only runs for the PRs'
            }
        }
    }
}

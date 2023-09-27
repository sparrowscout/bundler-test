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
            steps {
                script {
                    def commitMsg = commit.substring( commit.indexOf(' ') ).trim()
                    echo commitMsg
                }
            }
        }


    }
}
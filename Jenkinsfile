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
                scripts{
                    def commitMsg = commit.substring( commit.indexOf(' ') ).trim()
                    echo commitMsg
                }
            }
        }


    }
}
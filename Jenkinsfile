pipeline {
    agent any

    tools {nodejs "NodeJS"}

    environment {
        GIT_MESSAGE = powershell (returnStdout: true, script: 'git log -1 --format=%B ${GIT_COMMIT}').trim()
    }
  
    stages {
        stage('Hello') {
            steps {
                echo 'Hello...'
            }
        }
        stage('Build') {
            steps {
                echo '${env.GIT_MESSAGE}'
                echo '${env.GIT_COMMIT}'
                sh "git log -1"
                script {
                    def commitMsg = commit
                    echo 'commitMsg'
                }
            }
        }


    }
}
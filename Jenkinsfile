pipeline {
    agent any

    environment {
    GIT_MESSAGE = get_commit_msg()
    }

    tools {nodejs "NodeJS"}
  
    stages {
        stage('Hello') {
            steps {
                echo 'Hello...'
            }
        }
        stage('Build') {
            steps {   echo '${env.GIT_COMMIT}'
                      sh "git log -1"
                echo '${env.GIT_MESSAGE}'
             
      
                // script {
                //     def commitMsg = commit
                //     echo 'commitMsg'
                // }
            }
        }


    }
}

def get_commit_msg(){
    script{
        return sh(script:"git show -s --format=%B ${env.GIT_COMMIT}", returnStdout:true).trim()
    }
}
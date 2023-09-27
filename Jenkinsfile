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
            steps {   
                      sh "git log -1"
              
             
      
                script {
               echo "${env.GIT_MESSAGE}"
                   echo "${env.GIT_COMMIT}"
               echo "${GIT_COMMIT}"
                echo $GIT_COMMIT
                }
            }
        }


    }
}

def get_commit_msg(){
    script{
        return sh(script:"git show -s --format=%B ${env.GIT_COMMIT}", returnStdout:true).trim()
    }
}
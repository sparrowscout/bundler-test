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
                    def npmVersion = get_npm_version()
                    echo 'npmVersion'
               echo "${env.GIT_MESSAGE}"
                   echo "${env.GIT_COMMIT}"
               echo "${GIT_COMMIT}"
                    echo "${NPM_VERSION}"
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

def get_commit_author(){
    script{
        return sh(script:"git --no-pager show -s --format=%an ${env.GIT_COMMIT}",returnStdout:true).trim()
    }
}


def get_npm_version(){
    script{
        return sh(script:"npm show dummy-jenkins version",returnStdout:true)
    }
}
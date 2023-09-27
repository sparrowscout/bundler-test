pipeline {
    agent any

    environment {
    GIT_MESSAGE = get_commit_msg()
    GIT_SUBJECT = 
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
                    echo "${npmVersion}"
               echo "${env.GIT_MESSAGE}"
               def isUpdate = get_commit_subject('Update')
                    echo "${env.GIT_MESSAGE}"
                    echo "${isUpdate}"
                   echo "${env.GIT_COMMIT}"
               echo "${GIT_COMMIT}"
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
def get_commit_subject(step){
        script{
        return sh(script:"git show -s --format=%B ${env.GIT_COMMIT}", returnStdout:true).trim().indexOf(step)
    }
}

def get_commit_author(){
    script{
        return sh(script:"git --no-pager show -s --format=%an ${env.GIT_COMMIT}",returnStdout:true).trim()
    }
}


def get_npm_version(){
    script{
        return sh(script:"npm show dummy-jenkins version",returnStdout:true).trim()
    }
}
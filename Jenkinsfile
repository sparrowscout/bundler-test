pipeline {
    agent any

    tools {nodejs "NodeJS"}
    parameters {
      gitParameter name: 'BRANCH_TAG',
                     type: 'PT_BRANCH_TAG',
                     defaultValue: 'master'
    }   
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
                  echo "${params.BRANCH_TAG}"
                echo "Building $BRANCH_NAME"
                echo "$tag_name"
                sh 'echo //registry.npmjs.org/:_authToken=${NPM_TOKEN}'
                sh 'git stash'
                sh 'npm version patch'
                sh 'npm publish' 
              
            }
        }

    }
}
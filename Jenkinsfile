pipeline {
    agent any

    tools {nodejs "NodeJS"}
    parameters {
      gitParameter name: 'TAG',
                     type: 'PT_TAG',
                     defaultValue: 'master'
    }   
    stages {
        stage('Hello') {
            steps {
                echo 'Hello......'
            }
        }
        stage('Build') {
            when {
                branch "rollup*"
            }
            steps {
                sh 'yarn install'
                sh 'yarn run build'
                sh 'git add .'
                sh 'git commit -m "publish test"'
                sh 'git push origin $env.BRANCH_NAME'
                  echo "${params.TAG}"
                echo "Building $env.BRANCH_NAME"
                echo "$env.TAG_NAME"
                sh 'echo //registry.npmjs.org/:_authToken=${NPM_TOKEN}'
                sh 'npm version patch'
                sh 'npm publish' 
              
            }
        }

    }
}
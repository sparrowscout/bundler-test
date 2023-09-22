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
                branch "rollUp*"
            }
            steps {
                sh 'yarn install'
                sh 'yarn run build'
            }
        }
        stage('Publish') {
            when {
                tag "release-*"
            }
            steps {
                echo "Building $BRANCH_NAME"
                echo "Building $TAG_NAME"
            }
        }
    }
}
pipeline {
    agent any
    stages {
        stage('Hello') {
            steps {
                echo 'Hello..'
            }
        }
        stage('for the esbuild branch') {
            when {
                branch "esbuild-*"
            }
            steps {
                sh '''
                    cat README.md
                '''
            }
        }
        stage('for the PR branch') {
            when {
                branch "PR-*"
            }
            steps {
                echo 'this only runs for the PRs'
            }
        }
    }
}

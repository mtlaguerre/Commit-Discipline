pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Test') {
            steps {
                bat 'npm install -D vitest'
                bat 'npm run test'
            }
            post {
                always {
                    archiveArtifact artifacts: 'dist/*', allowEmptyArchive: true
                }
            }
        }
    }
}
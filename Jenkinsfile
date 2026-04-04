pipeline {
    agent any

    stages {
        stage('Checkout') {
            checkout scm
        }
    }

    stage('Build and Test') {
        steps {
            bat 'npm run test'
        }
        post {
            always {
                archiveArtifact artifacts: 'dist/*', allowEmptyArchive: true
            }
        }
    }
}
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                // ensures dependencies are in package
                bat 'npm ci'
            }
        }

        stage('Test') {
            steps {
                bat 'npx vitest run --reporter=default --reporter=junit --outputFile=test-results.xml'
            }
        }
    }
    post {
        always {
            junit testResults: 'test-results.xml', allowEmptyResults: true
        }
    }
}
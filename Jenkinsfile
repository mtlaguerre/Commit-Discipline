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
                bat 'npm install -D vitest-browser-react @vitest/browser-playwright'
                bat 'npx vitest run --reporter=default --reporter=junit --outputFile=test-results.xml'
                bat 'npm run test'
            }
        }
    }
    post {
        always {
            junit testResults: 'test-results.xml', allowEmptyResults: true
        }
    }
}
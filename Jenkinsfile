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
                bat 'npm run test'
            }
        }
    }
}
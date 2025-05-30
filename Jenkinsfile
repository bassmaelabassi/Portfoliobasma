pipeline {
    agent any

    environment {
        DOCKER_COMPOSE = 'docker-compose'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('frontend') {
                    sh 'npm test'
                }
                dir('backend') {
                    sh 'npm test'
                }
            }
        }

        stage('Build and Deploy') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose build --no-cache'
                sh 'docker-compose up -d'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
} 
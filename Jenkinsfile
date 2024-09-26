pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'https://registry.hub.docker.com'
        DOCKERHUB_CREDENTIALS = 'dockerhub'  
        CLIENT_IMAGE = 'shreyas3557/client'
        SERVER_IMAGE = 'shreyas3557/server'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/RealGT1/Wealthify.git', branch: 'main'
            }
        }

        stage('Build Client Docker Image') {
            steps {
                script {
                    docker.build("${CLIENT_IMAGE}:latest", "./client")
                }
            }
        }

        stage('Build Server Docker Image') {
            steps {
                script {
                    docker.build("${SERVER_IMAGE}:latest", "./server")
                }
            }
        }

        stage('Push Client Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry(DOCKER_REGISTRY, DOCKERHUB_CREDENTIALS) {
                        docker.image("${CLIENT_IMAGE}:latest").push("${env.BUILD_NUMBER}")
                    }
                }
            }
        }

        stage('Push Server Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry(DOCKER_REGISTRY, DOCKERHUB_CREDENTIALS) {
                        docker.image("${SERVER_IMAGE}:latest").push("${env.BUILD_NUMBER}")
                    }
                }
            }
        }
        
        stage('Trigger ManifestUpdate') {
            steps {
                echo "triggering updatemanifest job"
                build job: 'updatemanifest', parameters: [string(name: 'DOCKERTAG', value: env.BUILD_NUMBER)]
            }
        }
    }

    post {
        always {
            sh 'docker system prune -f'
        }
        success {
            echo 'Build and Push succeeded!'
        }
        failure {
            echo 'Build or Push failed!'
        }
    }
}

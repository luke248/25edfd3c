pipeline {
    agent any
	def app

    stages {
        stage('Build App') {
            steps {
                echo 'building app ' 
				checkout scm
            }
        }
        stage('Test App') {
            steps {
                echo 'testing app'
            }
        }
		stage('Build Image') {
            steps {
                echo 'building image'
                app = docker.build("luke248/request-counter:${env.BUILD_NUMBER}", "./http/Dockerfile")
            }
        }
        stage('Test Image') {
            steps {
                echo 'testing image'                
            }
        }
		stage('Publish Image') {
            steps {
                echo 'publishing image'
            }
        }
        stage('Deploy Image') {
            steps {
                echo 'deploying image'
            }
        }
    }
}

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
	stage('Dockerize') {
            steps {
                echo 'Dockerizing'
            }
        }
	stage('Publish') {
            steps {
                echo 'Publishing'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}

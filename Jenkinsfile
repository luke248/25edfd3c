node {
	def app

    stage('Build App') {
		echo 'building app ' 
		checkout scm
	}
	
	stage('Test App') {
		echo 'testing app'
	}
	
	stage('Build Image') {
		echo 'building image'
		app = docker.build("luke248/request-counter:${env.BUILD_NUMBER}", "./http")		
	}
	
	stage('Test Image') {
		echo 'testing image'                
	}
	
	stage('Publish Image') {
		echo 'publishing image'
	}
	
	stage('Deploy Image') {
		echo 'deploying image'
	}
}

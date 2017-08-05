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
		docker.withRegistry('https://hub.docker.com/r/luke248/private/', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
	}
	
	stage('Deploy Image') {
		echo 'deploying image'
	}
}

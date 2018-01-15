node {
	def image

    stage('Build App') {
		echo 'building app ' 
		checkout scm
	}
	
	stage('Test App') {
		echo 'testing app'
	}
	
	stage('Build Image') {
		echo 'building image'
		image = docker.build("luke248/request-counter:0.0.${env.BUILD_NUMBER}", "./http")		
	}
	
	stage('Test Image') {
		echo 'testing image'                
	}
	
	stage('Publish Image') {
		echo 'publishing image'
		docker.withRegistry('https://registry.hub.docker.com/v1/repositories/', 'docker-credentials') {
			image.push("0.0.${env.BUILD_NUMBER}");
            		image.push("latest")
		}       
	}
	
	stage('Deploy Image') {
		echo 'deploying image'
	}
}

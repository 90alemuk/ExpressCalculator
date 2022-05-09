pipeline {
	agent any
	stages {
		stage ('build') {
			steps {
		  	sh 'npm install'
			 }
		}
		stage ('unit-tests') {
		 	steps {
		  	sh 'npm run unit-test'
			 }
		}
		stage ('integration-tests') {
                 when {
                        anyOf {
                        branch 'develop'
                        branch 'main'
                        }
                 }
                        steps {
                        sh 'npm run integration-test'
                         }
                }
		stage ('e2e-tests') {
		 when {
		 	anyOf {
			branch 'main'
			}
		 }		
			steps {
			echo "Simulating e2e Tests..."
			}

		}
		stage ('Push-Image') {
		 when {
                        anyOf {
                        branch 'main'
                        }
		 }
		 steps {
		  script { 
			   def dockerHome = tool 'myDocker'
			   env.PATH = "${dockerHome}/bin:${env.PATH}"
			   
			   docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {				def image = myDocker.build("90alemuk/express-calculator:${env.BUILD_ID}")
			   image.push()
			}
		  }
		 }
		}
}
}		

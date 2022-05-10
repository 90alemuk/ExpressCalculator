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
			    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
			def image = docker.build("90alemuk/express-calculator:${env.BUILD_ID}")
			   image.push()
			}
		  }
		 }
		}
		 stage ('deploy-to-heroku') {
                 when {
                        anyOf {
                        branch 'main'
                        }
                 }
	 	 environment {
			HEROKU_API_KEY = credentials('heroku-token')
		 }                        

			steps {
			sh 'docker login --username=username --password=$HEROKU_API_KEY registry.heroku.com'
                       	sh 'heroku container:push web --app=floating-savannah-51290'
			sh 'heroku container:release web --app=floating-savannah-51290'
			}

                }
}
}		

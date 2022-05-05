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
                        anyof {
                        branch 'develop'
                        branch 'main'
                        }
                 }
                        steps {
                        sh 'npm run integration-test'
                         }
                }
		stage {'e2e-tests') {
		 when {
		 	anyof {
			branch 'main'
			}
		 }		
			steps {
			echo "Simulating e2e Tests..."
			}

		}
	}
}		

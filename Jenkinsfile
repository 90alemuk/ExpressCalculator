pipeline {
	agent none
	stages {
		stage ('build') {
		 steps {
		  npm install
		 }
		}
		stage ('integration-tests') {
		 steps {
		  npm run integration-test
		 }
		}
		stage ('unit-tests') {
		 steps {
		  npm run unit-test
		 }
		}
	}
}		

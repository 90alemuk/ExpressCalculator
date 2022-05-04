pipeline {
	agent any
	stages {
		stage ('build') {
		 steps {
		  sh 'npm install'
		 }
		}
		stage ('integration-tests') {
		 steps {
		  sh 'npm run integration-test'
		 }
		}
		stage ('unit-tests') {
		 steps {
		  sh 'npm run unit-test'
		 }
		}
	}
}		

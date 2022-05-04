pipeline {
	agent none
		stages ('build') {
		 steps {
		  npm install
		 }
		}
		stages ('integration-tests') {
		 steps {
		  npm run unit-test
		 }
		}
		stages ('unit-tests') {
		 steps {
		  npm run integration-test
		 }
		}
			
		}


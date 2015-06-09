### Instructions

####Structure

Branch **e2e-tests**, contains all the tests implemented using protractor api.

Branch **e2e-tests-page-objects**, contains all tests implemented using page objects.

````
  npm install -g protractor
````

**Frontend**

````
  cd todo
  npm install
  bower install
  ./node_modules/protractor/bin/webdriver-manager update
  grunt serve
````
  
**Todo server**
  
````
  cd todo-server
  npm install
  node index.js
````

####Access: http://localhost:9000

####To run tests

You need to have both todo and todo-server running.

````
protractor protractor_conf.js
````


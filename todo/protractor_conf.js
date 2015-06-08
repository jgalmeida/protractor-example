exports.config = {
  directConnect: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver',

  capabilities: {
    browserName: 'chrome',
  },

  onPrepare: function() {
    global.basePath = 'http://127.0.0.1:9000';
    browser.driver.manage().window().setSize(1440, 900);
  },

  framework: 'jasmine2',

  //specs: ['test/e2e/**/*test.js'],
  suites: {
    layout: 'test/e2e/layout.test.js',
    signin: 'test/e2e/signin.test.js',
    todos:  'test/e2e/todos.test.js'
  },

  getPageTimeout: 10000,
  allScriptsTimeout: 500000,



  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 150000
  }
};

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

  specs: ['test/e2e/**/*test.js'],
    getPageTimeout: 10000,
    allScriptsTimeout: 500000,

    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 150000
    }
};

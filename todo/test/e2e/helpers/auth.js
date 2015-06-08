module.exports = {
  signin: signin
}

function signin(username) {
  var signinPage = require('../page_objects/signin.po');

  browser.get(global.basePath + '#/signin');

  signinPage.setUsername(username);
  signinPage.submit();
}

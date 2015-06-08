describe('Signin', function() {
  var layoutPage = require('./page_objects/layout.po');
  var homePage   = require('./page_objects/home.po');
  var signinPage = require('./page_objects/signin.po');

  beforeAll(function() {
    browser.get(global.basePath);
  });

  it('navigate to signin page', function() {
    layoutPage.getTab('Sign in').click();

    expect(signinPage.getUsername.isPresent()).toBeTruthy();
    expect(signinPage.getSubmitBtn().isPresent()).toBeTruthy();
  });

  it('sign in a user', function() {
    signinPage.setUsername('Jony yld');
    signinPage.submit();

    expect(browser.getCurrentUrl()).toBe(global.basePath + '/#/');
    expect(layoutPage.getCurrentUsername()).toBe('Jony yld');
    expect(homePage.getGreetings()).toBe('Hello Jony yld');
  });

  it('log out a user', function() {
    var logout = layoutPage.getTab('Logout');

    expect(logout.isPresent()).toBeTruthy();
    logout.click()
    expect(layoutPage.getCurrentUser.isPresent()).toBeFalsy();
  });
});

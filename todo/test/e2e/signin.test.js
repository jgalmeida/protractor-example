describe('Signin', function() {
  beforeAll(function() {
    browser.get(global.basePath);
  });

  it('navigate to signin page', function() {
    var navigationBar = element(by.css('.nav.navbar-nav'));
    navigationBar.element(by.cssContainingText('a', 'Sign in')).click();

    expect(element(by.model('user.username')).isPresent()).toBeTruthy();
    expect(element(by.css("input[type='submit']")).isPresent()).toBeTruthy();
  });

  it('sign in a user', function() {
    var navigationBar = element(by.css('.nav.navbar-nav'));
    navigationBar.element(by.cssContainingText('a', 'Sign in')).click();

    element(by.model('user.username')).sendKeys('Jony yld');
    element(by.css("input[type='submit']")).click();

    expect(browser.getCurrentUrl()).toBe(global.basePath + '/#/');
    expect(element(by.binding('currentUser.name')).getText()).toBe('Jony yld');
    expect(element(by.css('#welcomeMessage')).getText()).toBe('Hello Jony yld');
  });

  it('log out a user', function() {
    var navigationBar = element(by.css('.nav.navbar-nav'));
    var logout = navigationBar.element(by.cssContainingText('a', 'Logout'));

    expect(logout.isPresent()).toBeTruthy();
    logout.click()
    expect(element(by.binding('currentUser.name')).isPresent()).toBeFalsy();
  });
});

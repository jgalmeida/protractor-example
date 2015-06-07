describe('Layout', function() {
  beforeAll(function() {
    browser.get(global.basePath);
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Todo Protractor');
  });

  it('should have a navigation bar', function() {
    expect(element(by.css('.nav.navbar-nav')).isDisplayed()).toBeTruthy();
  });

  it('should have a navigation bar elements', function() {
    var navigationBar = element(by.css('.nav.navbar-nav'));

    expect(navigationBar.element(by.cssContainingText('a', 'Home')).isDisplayed()).toBeTruthy();
    expect(navigationBar.element(by.cssContainingText('a', 'Sign in')).isDisplayed()).toBeTruthy();
    expect(navigationBar.element(by.cssContainingText('a', 'About')).isDisplayed()).toBeTruthy();
  });
});

describe('Layout', function() {
  var layoutPage = require('./page_objects/layout.po');

  beforeAll(function() {
    browser.get(global.basePath);
  });

  it('should have a title', function() {
    expect(layoutPage.getTitle()).toEqual('Todo Protractor');
  });

  it('should have a navigation bar', function() {
    expect(layoutPage.getNavigationBar().isDisplayed()).toBeTruthy();
  });

  it('should have a navigation bar elements', function() {
    expect(layoutPage.getTab('Home').isDisplayed()).toBeTruthy();
    expect(layoutPage.getTab('Sign in').isDisplayed()).toBeTruthy();
    expect(layoutPage.getTab('About').isDisplayed()).toBeTruthy();
  });
});

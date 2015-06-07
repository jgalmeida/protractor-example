describe('Todos', function() {
  beforeAll(function() {
    browser.get(global.basePath);
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript("window.sessionStorage.username = 'Jony yld';");
    browser.executeScript("window.sessionStorage.token = 'magictoken';");
    browser.get(global.basePath);
  });

  it('navigate to todos page', function() {
    var navigationBar = element(by.css('.nav.navbar-nav'));
    navigationBar.element(by.cssContainingText('a', 'Todos')).click();
  });

});

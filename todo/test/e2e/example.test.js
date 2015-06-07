describe('Todo Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get(global.basePath);

    expect(browser.getTitle()).toEqual('Todo Protractor');
  });
});

'use strict';

function LayoutPage() {
  var navBar = element(by.css('.nav.navbar-nav'));

  function getTitle() {
    return browser.getTitle();
  }

  function getNavigationBar() {
    return navBar;
  }

  function getTab(name) {
    return navBar.element(by.cssContainingText('a', name));
  }

  return {
    getTitle: getTitle, 
    getNavigationBar: getNavigationBar,
    getTab: getTab
  }
}

module.exports = new LayoutPage();

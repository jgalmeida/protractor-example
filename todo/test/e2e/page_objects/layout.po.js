'use strict';

function LayoutPage() {
  var navBar = element(by.css('.nav.navbar-nav'));
  var currentUser = navBar.element(by.binding('currentUser.name'));

  function getTitle() {
    return browser.getTitle();
  }

  function getNavigationBar() {
    return navBar;
  }

  function getTab(name) {
    return navBar.element(by.cssContainingText('a', name));
  }

  function getCurrentUserName() {
    return currentUser.getText();
  }

  return {
    getTitle: getTitle, 
    getNavigationBar: getNavigationBar,
    getTab: getTab,
    getCurrentUsername: getCurrentUserName,
    getCurrentUser: currentUser
  }
}

module.exports = new LayoutPage();

'use strict';

function HomePage() {
  var greetings  = element(by.id('welcomeMessage'));

  function getGreetings() {
    return greetings.getText();
  }

  return {
    getGreetings: getGreetings
  }
}

module.exports = new HomePage();


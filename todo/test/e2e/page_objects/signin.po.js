'use strict';

function SigninPage() {
  var nameInput  = element(by.model('user.username'));
  var submitBtn = element(by.css("input[type='submit']"));

  function getUsernameInput() {
    return nameInput;
  }

  function setUsername(name) {
    nameInput.sendKeys(name);
  }

  function getSubmitBtn() {
    return submitBtn;
  }

  function submit() {
    submitBtn.click();
  }

  return {
    getUsername: nameInput,
    setUsername: setUsername,
    getSubmitBtn: getSubmitBtn,
    submit: submit
  }
}

module.exports = new SigninPage();

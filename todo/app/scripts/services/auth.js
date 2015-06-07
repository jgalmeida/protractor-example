'use strict';

angular.module('todoApp')
.service('AuthService', function ($http, $location, $window) {
  var baseUrl = 'http://localhost:8080/auth';
  var currentUser = {};

  currentUser.name = $window.sessionStorage.username;

  return {
    currentUser: currentUser,
    authenticate: authenticate,
    isAuthenticated: isAuthenticated,
    logout: logout
  }

  function authenticate(user) {
    $http.post(baseUrl, user)
      .success(success);

    function success(res) {
      $window.sessionStorage.token = res.token;
      $window.sessionStorage.username = res.username;
      currentUser.name = res.username;
      $location.path('');
    }
  }

  function isAuthenticated() {
    return $window.sessionStorage.token;
  }

  function logout() {
    currentUser.name = '';
    delete $window.sessionStorage.username;
    delete $window.sessionStorage.token;
    $location.path('signin');
  }

});

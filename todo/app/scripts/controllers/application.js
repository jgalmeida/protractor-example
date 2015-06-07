'use strict';

angular.module('todoApp')
.controller('ApplicationCtrl', function ($scope, AuthService) {
  $scope.currentUser     = AuthService.currentUser;
  $scope.logout          = AuthService.logout;
  $scope.isAuthenticated = AuthService.isAuthenticated;
});

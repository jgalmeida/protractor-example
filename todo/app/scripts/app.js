'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/todos', {
        templateUrl: 'views/todos.html',
        controller: 'TodosCtrl',
        reloadOnSearch: false,
        resolve: {
          todos: function (TodosService, $route) {
            return TodosService.fetch($route.current.params);
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
  });

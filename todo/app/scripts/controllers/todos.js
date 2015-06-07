'use strict';

angular.module('todoApp')
  .controller('TodosCtrl', function ($scope, $location, $filter, TodosService, todos) {
    $scope.todos = todos || [];
    $scope.statusFilter = {};
    $scope.remainingCount = $filter('filter')($scope.todos, {status: 'active'}).length;
    $scope.completedCount = $scope.todos.length - $scope.remainingCount;

    $scope.filter = function (status) {
      if(status.length === 0) status = null;

      $scope.statusFilter =  (status === 'active') ?
        { status: 'active' } : (status === 'completed') ?
        { status: 'completed' }  : {};
      $location.search('status', status);
    };

    $scope.addTodo = function () {
      TodosService.add($scope.todo)
        .success(success)
        .error(error);

      function success(res) {
        $scope.todos.push(res);
        $scope.remainingCount++;
        $scope.todo = {};
      }

      function error(res) {
        console.log('Error when adding todo');
      }
    };

    $scope.markComplete = function (todo) {
      TodosService.complete(todo)
        .success(success)
        .error(error);

      function success(res) {
        todo.status = 'completed';
        $scope.remainingCount--;
        $scope.completedCount++;
      }

      function error(res) {
        console.log('Error when marking complete todo');
      }
    };

    $scope.removeTodo = function (todo) {
      TodosService.remove(todo)
        .success(success)
        .error(error);

      function success(res) {
        if(todo.status === 'completed') $scope.completedCount--;
        if(todo.status === 'active') $scope.remainingCount--;
        $scope.todos.splice($scope.todos.indexOf(todo), 1);
      }

      function error(res) {
        console.log('Error when removing todo');
      }
    };

    $scope.markAllDone = function() {
      $scope.todos
        .filter(filter)
        .forEach($scope.markComplete)

      function filter(todo) {
        return todo.status !== 'completed';
      }
    }

    $scope.clearDone = function() {
      for(var i = 0; i < $scope.todos.length; i++) {
        var todo = $scope.todos[i];

        if(todo.status === 'completed')
          $scope.removeTodo(todo);
      }
    }
  });

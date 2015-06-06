'use strict';

angular.module('todoApp')
  .service('TodosService', function ($http, $q) {
    var baseUrl = 'http://localhost:8080/todos';

    return {
      fetch: fetch,
      add: add,
      complete: complete,
      remove: remove
    }

    function fetch(params) {
      var deferred = $q.defer();
      params.status = params.status;

      var options = {
        method: 'GET',
        url: baseUrl,
        params: params
      }

      $http(options).then(success, error);

      return deferred.promise;

      function success(res) {
        deferred.resolve(res.data);
      }

      function error(err) {
        deferred.reject(res);
      }
    }

    function add(todo) {
      return $http.post(baseUrl, todo);
    }

    function complete(todo) {
      return $http.put(baseUrl + '/' + todo.id + '/complete');
    }

    function remove(todo) {
      return $http.delete(baseUrl + '/' + todo.id);
    }
  });

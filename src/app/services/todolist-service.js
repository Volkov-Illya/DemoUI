(function () {
  'use strict';

  angular
    .module('todoListUi')
    .factory('elTodoListService', elTodoListService);

  function elTodoListService(Restangular) {

    function getAll() {
      return Restangular.all('todo').getList();

    }

    function create(data) {
      return Restangular.all('todo').post(data).then(function () {
        data.name = "";
        data.description = "";
      })
    }

    return {
      getAll: getAll,
      create: create
    }
  }
})();

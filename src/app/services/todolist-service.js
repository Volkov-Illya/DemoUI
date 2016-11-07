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
      return Restangular.all('todo').post(data)
        .then(function () {
          data.name = "";
          data.description = "";
        })
    }

    function remove(data) {
      return Restangular.one('todo', data).remove()
    }

    function edit(task) {
      return Restangular.all('todo').one(task._id).customPUT(task);
    }

    return {
      getAll: getAll,
      create: create,
      remove: remove,
      edit: edit

    }
  }
})();

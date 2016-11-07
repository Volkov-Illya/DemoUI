(function () {
  'use strict';

  angular
    .module('todoListUi')
    .controller('TodoListCtrl', TodoListCtrl);

  /** @ngInject */
  function TodoListCtrl(elTodoListService) {

    var vm = this;
    vm.getAll = getAll();
    vm.addTask = addTask;
    vm.remove = remove;
    vm.edit = edit;


    function getAll() {
      elTodoListService.getAll().then(function (result) {
        vm.getAll = result;
      });
    }

    function addTask(task) {
      elTodoListService.create(task)
        .then(function () {
          return getAll();
        });
    }

    function remove(id) {
      elTodoListService.remove(id)
        .then(function () {
          return getAll();
        })
    }

    function edit(task) {
      elTodoListService.edit(task)
        .then(function () {
          return getAll();
        })
    }

  }
})();

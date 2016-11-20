(function () {
  'use strict';

  angular
    .module('todoListUi')
    .controller('TodoListCtrl', TodoListCtrl);

  /** @ngInject */
  function TodoListCtrl(elTodoListService) {

    var vm           = this;
    vm.getAll        = getAll();
    vm.doneAll       = doneAll;
    vm.addTask       = addTask;
    vm.remove        = remove;
    vm.isDone        = isDone;
    vm.editSub       = editSub;
    vm.editName      = editName;
    vm.removeSub     = removeSub;
    vm.isFavourite   = isFavourite;
    vm.createSubtask = createSubtask;
    vm.showEdit      = true;
    vm.saveName      = saveName;


    function isFavourite(task) {
      elTodoListService.isFavourite(task)
        .then(function () {
          return getAll();
        });
    }

    function isDone(task) {
      elTodoListService.isDone(task)
        .then(function () {
          return getAll();
        });
    }

    function doneAll(change) {
      elTodoListService.doneAll(change)
        .then(function () {
          return getAll();
        })
    }


    function getAll() {
      elTodoListService.getAll()
        .then(function (result) {
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

    function editName(task, index) {
      vm.showEdit = false;
      vm.current  = index;
      //onsubmit change value of vm.showEdit to true
      // vm.canChangeName == false ? vm.canChangeName = true: vm.canChangeName = false;
    }

    function saveName(task) {
      elTodoListService.edit(task)
        .then(function () {
          vm.showEdit = true;
          vm.current = '';
          return getAll();
        })
    }


    function createSubtask(task) {
      elTodoListService.createSubtask(task)
        .then(function () {
          return getAll();
        })
    }

    function removeSub(task, sub) {
      elTodoListService.removeSub(task, sub)
        .then(function () {
          return getAll();
        })
    }

    function editSub(id, sub, isDone) {
      sub.changeIsDone = isDone;
      elTodoListService.editSub(id, sub)
        .then(function () {
          return getAll();
        })
    }

  }


})();

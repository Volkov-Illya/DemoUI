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
    vm.isDone = isDone;
    vm.isFavourite = isFavourite;
    vm.meow = meow;
    vm.findOne = findOne;
    vm.createSubtask = createSubtask;
    vm.getAllSubtask = getAllSubtask;
    vm.isSubDone = isSubDone;
    vm.removeSub = removeSub;
    vm.editSub = editSub;



    function meow() {
      alert('MEOW BLYJAT')
    }

    function findOne(task) {
      elTodoListService.findOne(task)
    }

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

    function edit(task) {
      elTodoListService.edit(task)
        .then(function () {
          return getAll();
        })
    }


    function getAllSubtask(task) {
      console.log(task);
      elTodoListService.getAllSubtask(task)
        .then(function (result) {
         return  result;
        });
    }

    function createSubtask(task) {
      elTodoListService.createSubtask(task)
        .then(function (task) {
          console.log('create');
          return getAllSubtask(task);
        })
    }

    function isSubDone(task, sub) {
      elTodoListService.isSubDone(task, sub)
        .then(function (task) {
          return getAllSubtask(task);
        });
    }

    function removeSub(task, sub) {
      elTodoListService.removeSub(task, sub)
        .then(function (task) {
          console.log(task._id);
          return getAllSubtask(task);
        })
    }

    function editSub(task,sub) {
      elTodoListService.editSub(task, sub)


    }

  }


})();

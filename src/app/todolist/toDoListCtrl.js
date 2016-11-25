(function () {
  'use strict';

  angular
    .module('todoListUi')
    .controller('TodoListCtrl', TodoListCtrl);

  /** @ngInject */
  function TodoListCtrl(elTodoListService, toastr, $scope) {

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
    vm.clearIsDone   = clearIsDone;


    function clearIsDone() {
      elTodoListService.clearIsDone()
        .then(function () {
          toastr.info('All completed tasks removed');
          return getAll();
        })
    }

    function isFavourite(task) {
      elTodoListService.isFavourite(task)
        .then(function (task) {
          if (task.isFavourite) {
            toastr.info('Task is favourite');
          } else {
            toastr.info('Not favourite');
          }
          return getAll();
        });
    }

    function isDone(task) {
      elTodoListService.isDone(task)
        .then(function (task) {
          if (task.isDone) {
            toastr.info('Task is done');
          } else {
            toastr.info('Not completed');
          }
          return getAll();
        });
    }

    function doneAll(change) {
      elTodoListService.doneAll(change)
        .then(function () {
          if (change) {
            toastr.info('All tasks is Done');
          } else {
            toastr.info('No task is not completed');
          }
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
          toastr.success('Created a new task');
           return getAll();
        });
    }


    function remove(id) {
      elTodoListService.remove(id)
        .then(function () {
          toastr.info('Task removed');
          return getAll();
        }).catch(function () {
        toastr.warning('Error');
      })
    }

    function editName(index) {
      vm.showEdit = false;
      vm.current  = index;
    }

    function saveName(task) {
      elTodoListService.edit(task)
        .then(function () {
          vm.showEdit = true;
          vm.current  = '';
          toastr.success('Task edited');
          return getAll();
        })
    }


    function createSubtask(task) {
      elTodoListService.createSubtask(task)
        .then(function () {
          toastr.success('Created a new subTask');
          return getAll();
        })
    }

    function removeSub(task, sub) {
      elTodoListService.removeSub(task, sub)
        .then(function () {
          toastr.info('Task removed');
          return getAll();
        }).catch(function () {
        toastr.warning('Error');

        })
    }

    function editSub(id, sub, isDone) {
      sub.changeIsDone = isDone;
      elTodoListService.editSub(id, sub)
        .then(function () {
          if (sub.isDone) {
            toastr.info('SubTask is done');
          } else {
            toastr.info('Not completed');
          }
          return getAll();
         })
    }

  }
})();

(function () {
  'use strict';

  angular
    .module('todoListUi')
    .factory('elTodoListService', elTodoListService);

  function elTodoListService(Restangular) {

    function isFavourite(task) {
      return Restangular.one('todo/isFavourite', task._id).customPUT(task)
    }

    function isDone(task) {
      return Restangular.one('todo/isDone', task._id).customPUT(task)
    }

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
      return Restangular.one('todo', task._id).customPUT(task)
        .then(function () {
          task.name = null;
        })
    }

    function findOne(task) {
    }


    function createSubtask(task) {
      return Restangular.one('todo/subtask/', task._id).customPOST({name: task.subTask.name})

    }

    function removeSub(task, sub) {
      return Restangular.one('todo/subtask/', task._id).customDELETE(sub.name);
    }

    function getAllSubtask(task) {
      console.log(task);
      return Restangular.one('todo/subtask', task._id).getList();
    }

    function isSubDone(task, sub) {
      return Restangular.one('todo/subtask/', task._id).customPUT({name: sub.name});
    }

    function editSub(task, sub) {
      console.log(task);
      console.log(sub.name);
      return Restangular.one('todo/subtask', task._id).customPUT(sub.name)
    }



    return {
      getAll: getAll,
      create: create,
      remove: remove,
      edit: edit,
      isDone: isDone,
      isFavourite: isFavourite,
      findOne: findOne,
      createSubtask: createSubtask,
      getAllSubtask: getAllSubtask,
      isSubDone: isSubDone,
      removeSub:removeSub,
      editSub:editSub
    }
  }
})();

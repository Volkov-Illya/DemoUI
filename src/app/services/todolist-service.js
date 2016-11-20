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

    function doneAll(change) {
      console.log(change);
      return Restangular.one('todo/doneAll').customPUT({isDone: change});
    }

    function getAll() {
      return Restangular.all('todo').getList();
    }

    function create(data) {
      console.log(data);
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
      return Restangular.one('todo', task._id).customPUT(task);
    }


    function createSubtask(task) {
      return Restangular.one('todo/subtask/', task._id).customPOST({name: task.subTask.name})
    }

    function removeSub(task, sub) {
      return Restangular.one('todo/subtask/', task._id).customDELETE(sub.name);
    }

    function editSub(id, sub) {
      return Restangular.one('todo/task', id).one('subtask', sub.id).customPUT(sub);
    }


    return {
      getAll: getAll,
      create: create,
      remove: remove,
      edit: edit,
      isDone: isDone,
      isFavourite: isFavourite,
      createSubtask: createSubtask,
      removeSub: removeSub,
      editSub: editSub,
      doneAll: doneAll
    }
  }
})();

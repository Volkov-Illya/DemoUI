(function () {
    'use strict';

    angular
        .module('todoListUi')
        .controller('TodoListCtrl', TodoListCtrl);

    /** @ngInject */
    function TodoListCtrl(elTodoListService) {

        var vm = this;
        vm.getAll = getAll;
        vm.addTask = addTask;

        function addTask(data) {
            elTodoListService.createTask(data)
        }

        function getAll() {
            elTodoListService.getAll().then(function (result) {
                vm.getAll = result;
            });
        }

    }
})();

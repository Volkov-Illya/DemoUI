(function () {
    'use strict';

    angular
        .module('todoListUi')
        .factory('elTodoListService', elTodoListService);

    function elTodoListService(Restangular) {

        function getAll() {
            return Restangular.all('todo').get();
        }

        function createTask(data) {
            return Restangular.all('todo').post({data: data});
        }

        return {
            getAll: getAll,
            createTask: createTask
        }
    }
})();
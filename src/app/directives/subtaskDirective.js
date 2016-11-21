(function() {
  'use strict';
  angular.module('todoListUi').directive('elSubtask', function() {
    return {
      scope: {
        task: '='
      },
      templateUrl:'app/views/subtask.html',
      controller: 'TodoListCtrl',
      controllerAs: 'vm',
      link: function(scope, element, attrs) {
      }
    }
  })
}());

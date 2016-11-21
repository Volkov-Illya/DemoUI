(function () {
    'use strict';

    angular
        .module('todoListUi')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('todolist', {
                url: '/todo',
                templateUrl: 'app/views/todolist.html',
                controller: 'TodoListCtrl',
                controllerAs: 'vm'
            })
          .state('active', {
          url: '/todo/active',
          templateUrl: 'app/views/active.html',
          controller: 'TodoListCtrl',
          controllerAs: 'vm'
        })
      ;

        $urlRouterProvider.otherwise('/');
    }

})();

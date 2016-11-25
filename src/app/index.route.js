(function () {
    'use strict';

    angular
        .module('todoListUi')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/www',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('todolist', {
                url: '/',
                templateUrl: 'app/views/todolist.html',
                controller: 'TodoListCtrl',
                controllerAs: 'vm'
            })

            .state('toastrtodolist', {
                url: '/',
                templateUrl: 'app/views/todolist.html',
                controller: 'ToastrCtrl',
                controllerAs: 'ts'
              });
        //   .state('active', {
        //   url: '/todo/active',
        //   templateUrl: 'app/views/active.html',
        //   controller: 'TodoListCtrl',
        //   controllerAs: 'vm'
        // })


        $urlRouterProvider.otherwise('/');
    }

})();

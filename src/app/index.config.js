(function () {
    'use strict';

    angular
        .module('todoListUi')
        .config(config)
        .config(function (RestangularProvider) {
            // var API = 'http://localhost:3000/';
            RestangularProvider.setBaseUrl('http://localhost:3021/');
        });

    /** @ngInject */
    function config($logProvider, toastrConfig) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.preventDuplicates = true;
        toastrConfig.progressBar = true;
    }

})
();

(function () {
    'use strict';

    angular
        .module('todoListUi')
        .config(config)
        .config(function (RestangularProvider, API_EP) {
            // var API = 'http://localhost:3000/';
            RestangularProvider.setBaseUrl(API_EP);
        });

    /** @ngInject */
    function config($logProvider, toastrConfig) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 2000;
        toastrConfig.positionClass = 'toast-bottom-right';
        toastrConfig.preventDuplicates = false;
        toastrConfig.progressBar = false;
    }

})
();

(function() {
  'use strict';

  angular
    .module('todoListUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

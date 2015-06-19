'use strict';

angular.module('angularDemo')
  .directive('main5ListHeader', [function() {
    return {
      restrict: 'E',
      templateUrl: 'app/main5/list/header/header.html'
    }
  }]);

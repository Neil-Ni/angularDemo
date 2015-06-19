'use strict';

angular.module('angularDemo')
  .directive('main4ListHeader', [function() {
    return {
      restrict: 'E',
      templateUrl: 'app/main4/list/header/header.html'
    }
  }]);

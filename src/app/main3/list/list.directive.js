'use strict';

angular.module('angularDemo')
  .directive('main3ListDirective', [function() {
    return {
      restrict: 'E',
      templateUrl: 'app/main3/list/list.html',
      scope: {
        awesomeThings: '='
      },
      controller: [function () {
      }]
    }
  }]);

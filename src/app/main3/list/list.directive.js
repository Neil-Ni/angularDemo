'use strict';

angular.module('angularDemo')
  .directive('mainListDirective', [function() {
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

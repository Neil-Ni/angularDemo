'use strict';

angular.module('angularDemo')
  .directive('main4ListDirective', [function() {
    return {
      restrict: 'E',
      templateUrl: 'app/main4/list/list.html',
      scope: {
        awesomeThings: '='
      },
      controller: ['$scope', function ($scope) {
        $scope.$on('onFilter', function (evnt, filter) {
          console.log('here');
          $scope._awesomeThings = filter.filterFrom($scope.awesomeThings);
        });
        $scope._awesomeThings = $scope.awesomeThings;
      }]
    }
  }]);

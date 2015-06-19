'use strict';

angular.module('angularDemo')
  .directive('main5ListDirective', [function() {
    return {
      restrict: 'E',
      templateUrl: 'app/main5/list/list.html',
      scope: {
        awesomeThings: '='
      },
      controller: ['$scope', function ($scope) {
        $scope.$on('onFilter', function (evnt, filter) {
          $scope._awesomeThings = filter.filterFrom($scope.awesomeThings);
        });
        $scope.$watch('awesomeThings', function () {
          $scope._awesomeThings = $scope.awesomeThings;
        });
      }]
    }
  }]);

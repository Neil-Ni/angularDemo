'use strict';

angular.module('angularDemo')
  .directive('rnDropdownSort', [function () {
    return {
      restrict : 'E',
      templateUrl : 'app/components/rn-dropdown-sort/rn-dropdown-sort.html',
      scope : {
        title : '@',
        property : '@',
        eventListener : '@'
      },
      controller : ['$scope', 'RnDropdownSortOptions', function ($scope, RnDropdownSortOptions) {
        $scope.isDropup = false;
        $scope.sort = function() {
          $scope.isDropup = !$scope.isDropup;
          if ($scope.eventListener) {
            $scope.$emit($scope.eventListener, RnDropdownSortOptions.getSortFunction($scope.isDropup, $scope.property));
          } else {
            $scope.$emit('onFilter', RnDropdownSortOptions.getSortFunction($scope.isDropup, $scope.property));
          }
        };
      }]
    }
  }])
  .factory('RnDropdownSortOptions', [function () {
    var increaseBy = function (property) {
      if (_.contains(property, '.')) {
        var properties = property.split('.');
        return function (raw) {
          return _.sortBy(raw, function(data) {
            if (data[properties[0]]) {
              return data[properties[0]][properties[1]]
            } else {
              return data[properties[0]]
            }
          });
        }
      } else {
        return function (raw) { return _.sortBy(raw, property);}
      }
    };
    var decreaseBy = function (property) {
      if (_.contains(property, '.')) {
        var properties = property.split('.');
        return function (raw) {
          return _.sortBy(raw, function(data) {
            if (data[properties[0]]) {
              return data[properties[0]][properties[1]]
            } else {
              return data[properties[0]]
            }
          }).reverse();
        }
      } else {
        return function (raw) { return _.sortBy(raw, property).reverse();}
      }
    };
    return {
      getSortFunction: function (isIncreasing, property) {
        if (isIncreasing === true) {
          return {
            name : 'Increasing',
            filterFrom : increaseBy(property)
          }
        } else {
          return {
            name : 'Decreasing',
            filterFrom : decreaseBy(property)
          }
        }
      }
    };
  }]);

'use strict';

angular.module('angularDemo')
  .controller('Main5Ctrl', function ($scope, AwesomeThings) {
    AwesomeThings.getAll()
      .then(function (result) {
        $scope.awesomeThings = result;
          angular.forEach($scope.awesomeThings, function(awesomeThing) {
            awesomeThing.rank = Math.random();
          });
      });
  });

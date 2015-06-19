'use strict';

angular.module('angularDemo', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('home2', {
        url: '/2',
        templateUrl: 'app/main2/main.html',
        controller: 'Main2Ctrl'
      })
      .state('home3', {
        url: '/3',
        templateUrl: 'app/main3/main.html',
        controller: 'Main3Ctrl'
      })
      .state('home4', {
        url: '/4',
        templateUrl: 'app/main4/main.html',
        controller: 'Main4Ctrl'
      })
      .state('home5', {
        url: '/5',
        templateUrl: 'app/main5/main.html',
        controller: 'Main5Ctrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;

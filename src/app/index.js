'use strict';

angular.module('health', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('consultation', {
        url: '/consultation',
        templateUrl: 'app/consultation/consultation.html',
        controller: 'ConsultationCtrl'
      });

    $urlRouterProvider.otherwise('/');

    $mdThemingProvider.theme('default')
      .primaryPalette('blue',{
        'default':'900',
        'hue-1':'800'
      })
      .accentPalette('teal')
      .warnPalette('red');
  })
;

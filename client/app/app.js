'use strict';

angular.module('naldaApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/'); //Redirect all queries to /

    $locationProvider.html5Mode(true);
  });
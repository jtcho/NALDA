'use strict';

angular.module('naldaApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
    {
      'title': 'home',
      'link': '/'
    },
    {
      'title': 'activities',
      'link': '/activities'
    },
    {
      'title': 'gallery',
      'link': '/gallery'
    }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
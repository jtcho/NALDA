'use strict';

angular.module('naldaApp')
  // .directive('parallaxScroll', ['$window', '$document', function($window, $document) {
  //   return {
  //     restrict: 'A',
  //     scope: true,
  //     link: function(scope, element, attrs) {
  //       $document.bind('scroll', function(event) {
  //         if ($document.scrollTop() >= 230) {
  //           angular.element("#banner").css("background-size", (102+0.03*($document.scrollTop() - 230)) + "%")
  //         } else {
  //           angular.element("#banner").css("background-size", "102%")
  //         }
  //         scope.$apply();
  //       })
  //     }
  //   }
  // }]
  // )
  .controller('MainCtrl', function ($scope, $http) {

    $scope.descBlurbs = [
      {blurb: "Plan your flight.", img: "/assets/images/desc1.png"},
      {blurb: "Choose your adventures.", img: "/assets/images/desc2.png"},
      {blurb: "Pick your nightlife activities.", img: "/assets/images/desc3.png"}
    ]

    $scope.teamMembers = [
      {name: "Sam", img: "/assets/images/sam.png"},
      {name: "JT", img: "/assets/images/jt.png"},
      {name: "Steven", img:"/assets/images/steven.png"}
    ]
  });

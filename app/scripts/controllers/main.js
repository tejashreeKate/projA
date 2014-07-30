'use strict';

/**
 * @ngdoc function
 * @name projAApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projAApp
 */
angular.module('projAApp')
  .controller('MainCtrl', function ($scope,$location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.go = function(url){
    	$location.path(url);
    }
    
  });

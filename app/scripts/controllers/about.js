'use strict';

/**
 * @ngdoc function
 * @name projAApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projAApp
 */
angular.module('projAApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

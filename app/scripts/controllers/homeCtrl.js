angular.module('projAApp')
  .controller('HomeCtrl', function ($scope,$rootScope,$location,$anchorScroll,$routeParams,anchorSmoothScroll) {
  	'use strict';

  	$scope.signUp = false;
  	$rootScope.$on('$routeChangeSuccess', function () {
    	$location.hash($routeParams.scrollTo);
    	$anchorScroll();
    	//anchorSmoothScroll.scrollTo('howItWorks')
  	});
  	$scope.openSignUp = function () {
  		$scope.signUp = true;
  	}
  	$scope.backToHome = function (){
  		$scope.signUp = false;
  	}
});

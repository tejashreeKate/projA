angular.module('projAApp')
  .controller('HomeCtrl', function ($scope,$rootScope,$location,$anchorScroll,$routeParams,anchorSmoothScroll) {
  	
  	$rootScope.$on('$routeChangeSuccess', function () {
    	$location.hash($routeParams.scrollTo);
    	$anchorScroll();
    	//anchorSmoothScroll.scrollTo('howItWorks')
  	});
});

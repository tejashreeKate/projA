'use strict';
angular.module('projAApp').controller('GoalCtrl', function ($scope,$rootScope) {
	$scope.goal ={
		title:'',
		desc:''
	}
	$rootScope.goalsList = [];
	$scope.addGoal = function(){
		$rootScope.goalsList.push($scope.goal)
		$scope.goal = {};
	}
});
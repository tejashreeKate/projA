'use strict';

/**
 * @ngdoc overview
 * @name projAApp
 * @description
 * # projAApp
 *
 * Main module of the application.
 */
angular
  .module('projAApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/addGoal', {
        templateUrl: 'views/addGoal.html',
        controller: 'GoalCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

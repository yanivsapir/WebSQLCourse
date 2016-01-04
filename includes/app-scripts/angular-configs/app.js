'use strict';
var ShenkarDBApp = angular.module('ShenkarDBApp', [
	'ui.router',
	'ngMessages',
	'commonModule',
    'studentsInformationModule',
    'teachersInformationModule'
]);


ShenkarDBApp.config(function($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise("/students");

	  $stateProvider
          .state('teachers', {
              url: "/teachers",
              controller : 'teachersInformationController as vm',
              templateUrl : 'includes/views/teachersInformationView/teachersInformationView.html'
          })
          .state('students', {
              url: "/students",
              controller : 'studentsInformationController as vm',
              templateUrl : 'includes/views/studentsInformationView/studentsInformationView.html'
          });
});
'use strict';
var ShenkarDBApp = angular.module('ShenkarDBApp', [
	'ui.router',
	'ngMessages',
	'commonModule',
    'studentsInformationModule',
    'teachersInformationModule',
    'coursesInformationModule',
    'courseQueriesModule'
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
          })
          .state('courses', {
              url: "/courses",
              controller : 'coursesInformationController as vm',
              templateUrl : 'includes/views/coursesInformationView/coursesInformationView.html'
          })
          .state('courseQueries', {
              url: "/courseQueries",
              controller : 'courseQueriesController as vm',
              templateUrl : 'includes/views/courseQueriesView/courseQueriesView.html'
          })
          .state('erd', {
              url: "/erd",
              templateUrl : 'includes/views/erdView/erdView.html'
          });
});
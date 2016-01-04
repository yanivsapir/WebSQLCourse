/**
 * Created by ysapir on 12/17/2015.
 */

var studentsInformationModule = angular.module('studentsInformationModule');
studentsInformationModule.directive('addStudentForm',function(){
    return{
        templateUrl: 'includes/views/studentsInformationView/forms/addStudentForm.html'
    }
});
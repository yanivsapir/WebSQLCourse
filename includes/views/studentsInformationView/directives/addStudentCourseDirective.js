/**
 * Created by ysapir on 12/17/2015.
 */

var studentsInformationModule = angular.module('studentsInformationModule');
studentsInformationModule.directive('addStudentCourse',function(){
    return{
        templateUrl: 'includes/views/studentsInformationView/modals/addStudentCourseModal.html'
    }
});
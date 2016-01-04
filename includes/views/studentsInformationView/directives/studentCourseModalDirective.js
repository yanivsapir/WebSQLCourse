/**
 * Created by ysapir on 12/17/2015.
 */

var studentsInformationModule = angular.module('studentsInformationModule');
studentsInformationModule.directive('studentCourseModal',function(){
    return{
        templateUrl: 'includes/views/studentsInformationView/modals/studentCourseModal.html'
    }
});
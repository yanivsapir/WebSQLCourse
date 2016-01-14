/**
 * Created by ysapir on 12/17/2015.
 */

var teachersInformationModule = angular.module('teachersInformationModule');
teachersInformationModule.directive('addTeacherCourse',function(){
    return{
        templateUrl: 'includes/views/teachersInformationView/modals/addTeacherCourseModal.html'
    }
});
/**
 * Created by ysapir on 12/17/2015.
 */

var teachersInformationModule = angular.module('teachersInformationModule');
teachersInformationModule.directive('teacherCourseModal',function(){
    return{
        templateUrl: 'includes/views/teachersInformationView/modals/teacherCourseModal.html'
    }
});
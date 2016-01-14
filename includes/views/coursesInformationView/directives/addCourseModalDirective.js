/**
 * Created by ysapir on 12/17/2015.
 */

var coursesInformationModule = angular.module('coursesInformationModule');
coursesInformationModule.directive('addCourseModal',function(){
    return{
        templateUrl: 'includes/views/coursesInformationView/modals/addCourseModal.html'
    }
});
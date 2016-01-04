/**
 * Created by ysapir on 12/17/2015.
 */

var teachersInformationModule = angular.module('teachersInformationModule');
teachersInformationModule.directive('addTeacherModal',function(){
    return{
        templateUrl: 'includes/views/teachersInformationView/modals/addTeacherModal.html'
    }
});
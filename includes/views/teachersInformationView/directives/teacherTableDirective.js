/**
 * Created by ysapir on 12/17/2015.
 */

var teachersInformationModule = angular.module('teachersInformationModule');
teachersInformationModule.directive('teacherTable',function(){
    return{
        templateUrl: 'includes/views/teachersInformationView/tables/teacherTable.html'
    }
});
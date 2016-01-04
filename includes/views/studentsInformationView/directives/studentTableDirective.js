/**
 * Created by ysapir on 12/17/2015.
 */

var studentsInformationModule = angular.module('studentsInformationModule');
studentsInformationModule.directive('studentTable',function(){
    return{
        templateUrl: 'includes/views/studentsInformationView/tables/studentTable.html'
    }
});
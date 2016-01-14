/**
 * Created by ysapir on 12/17/2015.
 */

var coursesInformationModule = angular.module('coursesInformationModule');
coursesInformationModule.directive('courseTable',function(){
    return{
        templateUrl: 'includes/views/coursesInformationView/tables/courseTable.html'
    }
});
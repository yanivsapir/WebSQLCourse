/**
 * Created by ysapir on 12/17/2015.
 */

var courseQueriesModule = angular.module('courseQueriesModule');
courseQueriesModule.directive('courseQueriesTable',function(){
    return{
        templateUrl: 'includes/views/courseQueriesView/tables/courseQueriesTable.html'
    }
});
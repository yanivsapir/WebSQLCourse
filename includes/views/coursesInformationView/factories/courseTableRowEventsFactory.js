/**
 * Created by ysapir on 12/19/2015.
 */
coursesInformationModule.factory('courseTableRowEventsFactory', function($window,crudFactory) {

    var factory = {};
    factory.setController = function(controller){
        factory.controller = controller;
        crudFactory.setController(controller);
    }

    $window.operateEvents = {
        'click .updateCourse': function (e, value, row, index) {
            var url = "../StudentDBWebService/course/updateCourse";
            var msg = "Changes Of The course: "+ row.name + " Were Saved To The DB Successfully";
            crudFactory.updateModel(row,url,msg);
        },
        'click .deleteCourse': function (e, value, row, index) {
            var url = "../StudentDBWebService/course/deleteCourse/" + row.id;
            var msg = "Course: " + row.name + " Was Deleted From The DB Successfully";
            crudFactory.deleteModel(url,msg);
        }
    };
    return factory;
});
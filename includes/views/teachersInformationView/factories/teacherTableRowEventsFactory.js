/**
 * Created by ysapir on 12/19/2015.
 */
teachersInformationModule.factory('teacherTableRowEventsFactory', function($window,crudFactory) {

    var factory = {};
    factory.setController = function(controller){
        factory.controller = controller;
        crudFactory.setController(controller);
    }

    $window.operateEvents = {
        'click .updateTeacher': function (e, value, row, index) {
            var url = "../StudentDBWebService/teacher/updateTeacher";
            var msg = "Changes Of The Teacher: "+ row.firstName + " "
                + row.lastName +" Were Saved To The DB Successfully";
            crudFactory.updateModel(row,url,msg);
        },
        'click .deleteTeacher': function (e, value, row, index) {
            var url = "../StudentDBWebService/teacher/deleteTeacher/" + row.id;
            var msg = row.firstName + " "
                + row.lastName +" Was Deleted From The DB Successfully";
            crudFactory.deleteModel(url,msg);
        },
        'click .getTeacherCourses' : function(e, value, row, index) {

            var url = "../StudentDBWebService/teacher/getTeacherCoursesByTeacherId/"
                + row.id;
            crudFactory.getListModels(url,'#teacherCourses','#teacherCoursesModal');
        }
    };

    return factory;
});
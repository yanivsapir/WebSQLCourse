/**
 * Created by ysapir on 12/19/2015.
 */
studentsInformationModule.factory('studentTableRowEventsFactory', function($window,crudFactory) {

    var factory = {};
    factory.setController = function(controller){
        factory.controller = controller;
        crudFactory.setController(controller);
    }

    $window.operateEvents = {
        'click .updateStudent': function (e, value, row, index) {
            var url = "../StudentDBWebService/student/updateStudent";
            var msg = "Changes Of The Students: "+ row.firstName + " "
                + row.lastName +" Were Saved To The DB Successfully";
            crudFactory.updateModel(row,url,msg);
        },
        'click .deleteStudent': function (e, value, row, index) {
            var url = "../StudentDBWebService/student/deleteStudent/" + row.id;
            var msg = row.firstName + " "
                + row.lastName +" Was Deleted From The DB Successfully";
            crudFactory.deleteModel(url,msg);
        },
        'click .getStudentCourses' : function(e, value, row, index) {

            var url = "../StudentDBWebService/student/getStudentCoursesByStudentId/"
                + row.id;
            crudFactory.getListModels(url,'#studentCourses','#studentCoursesModal');
        }
    };

    return factory;
});
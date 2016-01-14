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
            factory.controller.selectedModel = row;
            crudFactory.getListModels(url,'#modelCourses','#studentCoursesModal');
        },
        'click .updateStudentCourse' : function(e, value, row, index) {
            var url = "../StudentDBWebService/studentCourse/updateStudentCourse";
            var msg = "Changes Of The Student Course: "+ row.course.name + " Were Saved To The DB Successfully";
            crudFactory.updateModel(row,url,msg);
        },
        'click .deleteStudentCourse' : function(e, value, row, index) {
            var url = "../StudentDBWebService/studentCourse/deleteStudentCourse/" + row.id;
            var msg = "Student course: " + row.course.name + " Was Deleted From The DB Successfully";
            crudFactory.deleteModel(url,msg);
        }
    };

    return factory;
});
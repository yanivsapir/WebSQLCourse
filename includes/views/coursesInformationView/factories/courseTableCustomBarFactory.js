/**
 * Created by ysapir on 12/19/2015.
 */

coursesInformationModule.factory('courseTableCustomBarFactory', function($window,requestHandlerFactory) {

    var factory = {};
    factory.setController = function (controller) {
        factory.controller = controller;
        requestHandlerFactory.setController(controller);
    }

    factory.saveCourseToDB = function (course) {
        var url = "../StudentDBWebService/course/insertNewCourse";
        factory.controller.msg = "New Course Saved To The DB Successfully";
        var course = JSON.stringify({
            name: factory.controller.name,
            semester: factory.controller.semester,
            year: factory.controller.year
        });
        return requestHandlerFactory.postRequestWithData(course, url);
    }
    return factory;
});
/**
 * Created by ysapir on 12/19/2015.
 */

teachersInformationModule.factory('teacherTableCustomBarFactory', function($window,requestHandlerFactory) {

    var factory = {};
    factory.setController = function (controller) {
        factory.controller = controller;
        requestHandlerFactory.setController(controller);
    }

    factory.saveTeacherToDB = function (teacher) {
        var url = "../StudentDBWebService/teacher/insertNewTeacherToDB";
        factory.controller.msg = "New Teacher Saved To The DB Successfully";
        var teacher = JSON.stringify({
            firstName: factory.controller.firstName,
            lastName: factory.controller.lastName,
            birthday: factory.controller.birthday,
            city: factory.controller.city,
            street: factory.controller.street,
            houseNum: parseInt(factory.controller.houseNum)
        });
        return requestHandlerFactory.postRequestWithData(teacher, url);
    }
    return factory;
});
/**
 * Created by ysapir on 12/19/2015.
 */

studentsInformationModule.factory('studentTableCustomBarFactory', function($window,requestHandlerFactory) {

    var factory = {};
    factory.setController = function (controller) {
        factory.controller = controller;
        requestHandlerFactory.setController(controller);
    }

    factory.saveStudentToDB = function () {
        var url = "../StudentDBWebService/student/insertNewStudentToDB";
        factory.controller.msg = "New Student Saved To The DB Successfully";
        var student = JSON.stringify({
            firstName: factory.controller.firstName,
            lastName: factory.controller.lastName,
            birthday: factory.controller.birthday,
            city: factory.controller.city,
            street: factory.controller.street,
            houseNum: parseInt(factory.controller.houseNum)
        });
        return requestHandlerFactory.postRequestWithData(student, url);
    }

    factory.saveStudentCourseToDB = function () {
        var url = "../StudentDBWebService/studentCourse/insertNewStudentCourse";
        var studentCourse = JSON.stringify({
            "course" : factory.controller.chosenCourse,
            "student": factory.controller.selectedModel,
            "grade": factory.controller.chosenGrade
        })
        return requestHandlerFactory.postRequestWithData(studentCourse, url);
    }
    return factory;
});
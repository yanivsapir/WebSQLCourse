teachersInformationModule.controller('teachersInformationController', teachersInformationController);

function teachersInformationController(teacherTableRowEventsService,teacherTableCustomBarService,$http) {

    var self = this;
    self.successMsg = {'background-color': '#dff0d8', 'color': '#3c763d', 'float':'left', 'margin-left':'30px'};
    self.errorMsg = {'background-color': '#f2dede', 'color': '#a94442', 'float':'left', 'margin-left':'30px'};
    self.refreshUrl = '../StudentDBWebService/teacher/getAllTeachers';
    self.modelCourseRefreshUrl = "../StudentDBWebService/teacher/getTeacherCoursesByTeacherId/";
    self.selectedModel = {};
    self.courses = [];
    teacherTableRowEventsService.setController(this);
    teacherTableCustomBarService.setController(this);

    self.insertNewTeacher = teacherTableCustomBarService.saveTeacherToDB;
    self.postRequestIsFailed = false;

    self.close = function(){
        $("#addTeacherCoursesModal").modal("hide");
    }

    self.insertTeacherCourse = teacherTableCustomBarService.saveTeacherCourseToDB;

    var url = "../StudentDBWebService/course/getAllCourses";
    $http.get(url).success(function(data) {
        self.courses = data;
    })
}
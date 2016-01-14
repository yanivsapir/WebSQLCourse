studentsInformationModule.controller('studentsInformationController', studentsInformationController);

function studentsInformationController(studentTableRowEventsService,studentTableCustomBarService,$http) {

    var self = this;
    self.successMsg = {'background-color': '#dff0d8', 'color': '#3c763d', 'float':'left', 'margin-left':'30px'};
    self.errorMsg = {'background-color': '#f2dede', 'color': '#a94442', 'float':'left', 'margin-left':'30px'};
    self.refreshUrl = '../StudentDBWebService/student/getAllStudents';
    self.modelCourseRefreshUrl = "../StudentDBWebService/student/getStudentCoursesByStudentId/";
    self.selectedModel = {};
    self.courses = [];

    self.postRequestIsFailed = false;
    studentTableRowEventsService.setController(this);
    studentTableCustomBarService.setController(this);

    this.insertNewStudent = studentTableCustomBarService.saveStudentToDB;

    this.close = function(){
        $("#addStudentCoursesModal").modal("hide");
    }

    this.insertStudentCourse = studentTableCustomBarService.saveStudentCourseToDB;

    var url = "../StudentDBWebService/course/getAllCourses";
    $http.get(url).success(function(data) {
        self.courses = data;
    })
}
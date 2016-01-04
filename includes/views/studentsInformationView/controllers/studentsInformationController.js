studentsInformationModule.controller('studentsInformationController', studentsInformationController);

function studentsInformationController(studentTableRowEventsService,studentTableCustomBarService) {

    var self = this;
    this.successMsg = {'background-color': '#dff0d8', 'color': '#3c763d', 'float':'left', 'margin-left':'30px'};
    this.errorMsg = {'background-color': '#f2dede', 'color': '#a94442', 'float':'left', 'margin-left':'30px'};
    this.refreshUrl = '../StudentDBWebService/student/getAllStudents';

    self.postRequestIsFailed = false;
    studentTableRowEventsService.setController(this);
    studentTableCustomBarService.setController(this);

    this.insertNewStudent = studentTableCustomBarService.saveStudentToDB;
}
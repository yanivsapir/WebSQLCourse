teachersInformationModule.controller('teachersInformationController', teachersInformationController);

function teachersInformationController(teacherTableRowEventsService,teacherTableCustomBarService) {

    this.successMsg = {'background-color': '#dff0d8', 'color': '#3c763d', 'float':'left', 'margin-left':'30px'};
    this.errorMsg = {'background-color': '#f2dede', 'color': '#a94442', 'float':'left', 'margin-left':'30px'};
    this.refreshUrl = '../StudentDBWebService/teacher/getAllTeachers';
    teacherTableRowEventsService.setController(this);
    teacherTableCustomBarService.setController(this);

    this.insertNewTeacher = teacherTableCustomBarService.saveTeacherToDB;
}
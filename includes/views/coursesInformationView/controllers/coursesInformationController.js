coursesInformationModule.controller('coursesInformationController', coursesInformationController);

function coursesInformationController(courseTableRowEventsService,courseTableCustomBarService) {

    var self = this;
    this.successMsg = {'background-color': '#dff0d8', 'color': '#3c763d', 'float':'left', 'margin-left':'30px'};
    this.errorMsg = {'background-color': '#f2dede', 'color': '#a94442', 'float':'left', 'margin-left':'30px'};
    this.refreshUrl = '../StudentDBWebService/course/getAllCourses';

    self.postRequestIsFailed = false;
    courseTableRowEventsService.setController(this);
    courseTableCustomBarService.setController(this);

    this.insertNewCourse = courseTableCustomBarService.saveCourseToDB;
}
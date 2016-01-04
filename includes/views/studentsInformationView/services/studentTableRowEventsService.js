studentsInformationModule.service('studentTableRowEventsService', function(studentTableRowEventsFactory){

    this.setController = function(controller){
        studentTableRowEventsFactory.setController(controller);
    }

    this.updateStudent = function(student,url,msg){
        studentTableRowEventsFactory.updateStudent(student,url,msg);
    }

    this.deleteStudent = function(url,msg){
        studentTableRowEventsFactory.deleteStudent(url,msg);
    }

    this.getStudentCourses = function(url,tableId,modalId){
        studentTableRowEventsFactory.getStudentCourses(url,tableId,modalId);
    }
});
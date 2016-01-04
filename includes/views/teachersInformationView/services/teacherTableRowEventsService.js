teachersInformationModule.service('teacherTableRowEventsService', function(teacherTableRowEventsFactory){
    this.setController = function(controller){
        teacherTableRowEventsFactory.setController(controller);
    }

    this.updateTeacher = function(teacher,url,msg){
        teacherTableRowEventsFactory.updateTeacher(teacher,url,msg);
    }

    this.deleteTeacher = function(url,msg){
        teacherTableRowEventsFactory.deleteTeacher(url,msg);
    }

    this.getTeacherCourses = function(url,tableId,modalId){
        teacherTableRowEventsFactory.getTeacherCourses(url,tableId,modalId);
    }
});
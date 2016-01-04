/**
 * Created by ysapir on 12/19/2015.
 */

teachersInformationModule.service('teacherTableCustomBarService', function(teacherTableCustomBarFactory){
    this.setController = function(controller){
        teacherTableCustomBarFactory.setController(controller);
    }

    this.saveTeacherToDB = function(teacher) {
        return teacherTableCustomBarFactory.saveTeacherToDB(teacher);
    }
});
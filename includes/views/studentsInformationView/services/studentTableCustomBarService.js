/**
 * Created by ysapir on 12/19/2015.
 */

studentsInformationModule.service('studentTableCustomBarService', function(studentTableCustomBarFactory){
    this.setController = function(controller){
        studentTableCustomBarFactory.setController(controller);
    }

    this.saveStudentToDB = function(student) {
        return studentTableCustomBarFactory.saveStudentToDB(student);
    }
});
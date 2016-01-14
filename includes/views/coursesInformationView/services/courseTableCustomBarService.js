/**
 * Created by ysapir on 12/19/2015.
 */

coursesInformationModule.service('courseTableCustomBarService', function(courseTableCustomBarFactory){
    this.setController = function(controller){
        courseTableCustomBarFactory.setController(controller);
    }

    this.saveCourseToDB = function(course) {
        return courseTableCustomBarFactory.saveCourseToDB(course);
    }
});
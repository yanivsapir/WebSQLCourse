coursesInformationModule.service('courseTableRowEventsService', function(courseTableRowEventsFactory){

    this.setController = function(controller){
        courseTableRowEventsFactory.setController(controller);
    }

    this.updateCourse = function(course,url,msg){
        courseTableRowEventsFactory.updateCourse(course,url,msg);
    }

    this.deleteCourse = function(url,msg){
        courseTableRowEventsFactory.deleteCourse(url,msg);
    }
});
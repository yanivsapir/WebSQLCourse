courseQueriesModule.controller('courseQueriesController', courseQueriesController);

function courseQueriesController($http) {

    var self = this;
    self.courses = [];


    self.getCourseQueriesResultSet = function(){
        var topOrBottom = self.topOrBottom == 1 ? true : false;
        var order = self.topOrBottom == 1 ? 'desc' : 'asc';
        $('#table').bootstrapTable('refresh', {
            url: "../StudentDBWebService/courseQueries/getStudentCoursesByCourseId/" + self.chosenCourse.id + "/"+ topOrBottom +"/" + self.limit
        });
    }

    var url = "../StudentDBWebService/course/getAllCourses";
    $http.get(url).success(function(data) {
        self.courses = data;
    })
}
/**
 * Created by ysapir on 12/17/2015.
 */

function teacherTableOperateFormatter(value, row, index) {
    return [
        '<a class="updateTeacher" href="javascript:void(0)" title="Save Updated Changes">',
        '<i class="glyphicon glyphicon-floppy-save" style="font-size: 1.5em"></i>',
        '</a>  ',
        '<a class="deleteTeacher" href="javascript:void(0)" title="Delete Teacher">',
        '<i class="glyphicon glyphicon-remove-circle" style="font-size: 1.5em"></i>',
        '</a>'
    ].join('');
}

function getTeacherCourses(value, row, index) {
    return [
        '<a class="getTeacherCourses" href="javascript:void(0)">',
        '<span style="color:black">',value, '</span></a>' ].join('');
}


function teacherCoursesTableOperateFormatter(value, row, index) {
    return [
        '<a class="deleteTeacherCourse" href="javascript:void(0)" title="Delete Teacher Course">',
        '<i class="glyphicon glyphicon-remove-circle" style="font-size: 1.5em"></i>',
        '</a>'
    ].join('');
}
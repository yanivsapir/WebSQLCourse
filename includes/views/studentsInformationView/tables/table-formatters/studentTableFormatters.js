/**
 * Created by ysapir on 12/17/2015.
 */

function studentTableOperateFormatter(value, row, index) {
    return [
        '<a class="updateStudent" href="javascript:void(0)" title="Save Updated Changes">',
        '<i class="glyphicon glyphicon-floppy-save" style="font-size: 1.5em"></i>',
        '</a>  ',
        '<a class="deleteStudent" href="javascript:void(0)" title="Delete Student">',
        '<i class="glyphicon glyphicon-remove-circle" style="font-size: 1.5em"></i>',
        '</a>'
    ].join('');
}

function getStudentCourses(value, row, index) {
    return [
        '<a class="getStudentCourses" href="javascript:void(0)">',
        '<span style="color:black">',value, '</span></a>' ].join('');
}

function studentCoursesTableOperateFormatter(value, row, index) {
    return [
        '<a class="updateStudentCourse" href="javascript:void(0)" title="Save Updated Changes">',
        '<i class="glyphicon glyphicon-floppy-save" style="font-size: 1.5em"></i>',
        '</a>  ',
        '<a class="deleteStudentCourse" href="javascript:void(0)" title="Delete Student Course">',
        '<i class="glyphicon glyphicon-remove-circle" style="font-size: 1.5em"></i>',
        '</a>'
    ].join('');
}
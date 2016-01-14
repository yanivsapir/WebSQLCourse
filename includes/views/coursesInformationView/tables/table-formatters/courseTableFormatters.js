/**
 * Created by ysapir on 12/17/2015.
 */

function courseTableOperateFormatter(value, row, index) {
    return [
        '<a class="updateCourse" href="javascript:void(0)" title="Save Updated Changes">',
        '<i class="glyphicon glyphicon-floppy-save" style="font-size: 1.5em"></i>',
        '</a>  ',
        '<a class="deleteCourse" href="javascript:void(0)" title="Delete Course">',
        '<i class="glyphicon glyphicon-remove-circle" style="font-size: 1.5em"></i>',
        '</a>'
    ].join('');
}

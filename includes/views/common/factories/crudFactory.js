/**
 * Created by ysapir on 12/19/2015.
 */

commonModule.factory('crudFactory', function($window,requestHandlerFactory) {

    var factory = {};
    factory.setController = function (controller) {
        factory.controller = controller;
        requestHandlerFactory.setController(controller);
    }

    factory.updateModel = function (teacher, url, msg) {
        factory.controller.msg = msg;
        requestHandlerFactory.postRequestWithData(teacher, url);
    }

    factory.deleteModel = function (url, msg) {
        factory.controller.msg = msg;
        requestHandlerFactory.postRequestWithoutData(url);
    }

    factory.getListModels = function (url, tableId, modalId) {
        var $table = $(tableId);
        $(function () {
            $table.bootstrapTable('refresh', {
                url: url
            });
        });
        $(modalId).modal('show');
    }
    return factory;
});
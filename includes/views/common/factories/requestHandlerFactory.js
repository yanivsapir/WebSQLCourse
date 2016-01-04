/**
 * Created by ysapir on 12/19/2015.
 */
commonModule.factory('requestHandlerFactory', function($http, $q, $window) {

    var factory = {};
    factory.setController = function(controller){
        factory.controller = controller;
    }

    factory.postRequestWithData = function(data, url){
        var req = $http({
            url : url,
            method : "post",
            data : data,
            dataType: 'json',
            headers: {
                "Content-Type": "application/json"
            }
        });
        return (req.then(factory.handleSuccess, factory.handleError));
    }

    factory.postRequestWithoutData = function(url){
        var req = $http({
            url : url,
            method : "post"
        });
        return (req.then(factory.handleSuccess, factory.handleError));
    }

    factory.handleSuccess = function (response) {
        $('#add').modal('hide');
        factory.controller.msgStyle = factory.controller.successMsg;
        $(factory.resfreshTable);
        return (response.data);
    };

    factory.handleError = function (response) {
        console.log(response.data.message);
        factory.controller.msg = "PROBLEM! Operation Couldn't Be Executed";
        factory.controller.msgStyle = factory.controller.errorMsg;
        $('#add').modal('hide');
        return ($q.reject(response.data.message));
    };

    factory.resfreshTable = function() {
        $('#table').bootstrapTable('refresh', {
            url : factory.controller.refreshUrl
        });
    };
    return factory;
});
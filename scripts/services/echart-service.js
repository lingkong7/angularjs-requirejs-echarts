define([
    './services'
], function (services) {
    'use strict';
    services.factory('echartService', ['$q', '$http', function ($q, $http) {
        var getPullRequests = function (url) {
            var deferred = $q.defer();

            $http.get(url)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (reason) {
                    deferred.reject(reason);
                });
            return deferred.promise;
        };

        return { // return factory object
            getPullRequests: getPullRequests
        };

    }
    ])
});
/**
 * 
 * angular-stack-exchange-api v0.1
 * (c) 2015 Tim Rücker
 * License: Apache License
 */
(function(angular) {
    'use strict';
    angular.module('angular-stack-exchange-api', [])

            /**
             * 
             * @description The Api Url of the Stackexchange api
             * @returns {String}
             */
            .constant('angular-stack-exchange-api.apiUrl', 'https://api.stackexchange.com/2.2/')


            /**
             * 
             * @description Formats an Onedimensional Object to a Key-value pair url
             * @returns {String}
             */
            .factory('angular-stack-exchange-api.objectToUrl', function() {
                return function(object) {
                    var ret = '';
                    for (var i in object) {
                        ret += i + '=' + object[i] + '&';
                    }
                    return encodeURI(ret.trim('&'));
                };
            })

            /**
             * 
             * @description Makes an ajax call to the stackexchange api with the required parameters
             * @param {Object} $q
             * @param {Object} $http
             * @param {Object} apiUrl
             * @param {Function} objectToUrl
             * @returns {Object}
             */
            .factory('angular-stack-exchange-api.api', [
                '$q',
                '$http',
                'angular-stack-exchange-api.apiUrl',
                'angular-stack-exchange-api.objectToUrl',
                function($q, $http, apiUrl, objectToUrl) {
                    return function(api_target, apiData) {
                        var deferred = $q.defer();
                        var dataAppend = '';
                        if (typeof apiData !== 'undefined') {
                            dataAppend = '?' + objectToUrl(apiData);
                        }
                        $http.get(apiUrl + api_target + dataAppend).success(deferred.resolve);
                        return deferred.promise;
                    };
                }
            ])

            /**
             * 
             * @description Makes all the Apifucntions accessable
             * @param {Object} api
             * @returns {_L7._L66.Anonym$3}
             */
            .factory('SE', [
                'angular-stack-exchange-api.api',
                function(api) {
                    return {
                        api: api
                    };
                }
            ]);
})(angular);
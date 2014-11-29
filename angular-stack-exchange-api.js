//https://api.stackexchange.com/2.2/users/2217462?order=desc&sort=reputation&site=stackoverflow

//https://api.stackexchange.com/docs

angular.module('angular-stack-exchange-api', [])

        .constant('angular-stack-exchange-api.apiUrl', 'https://api.stackexchange.com/2.2/')


        .factory('angular-stack-exchange-api.objectToUrl', function() {
            return function(object) {
                var ret = '';
                for (var i in object) {
                    ret += i + '=' + object[i]+'&';
                }
                return encodeURI(ret.trim('&'));
            };
        })

        .factory('angular-stack-exchange-api.api', [
            '$q',
            '$http',
            'angular-stack-exchange-api.apiUrl',
            'angular-stack-exchange-api.objectToUrl',
            function($q, $http, url, ourl) {
                return function(api_target, apiData) {
                    var deferred = $q.defer();
                    var dataAppend = '';
                    if (typeof apiData !== 'undefined') {
                        dataAppend = '?' + ourl(apiData);
                    }
                    $http.get(url + api_target + dataAppend).success(deferred.resolve);
                    return deferred.promise;
                };
            }
        ])


        .factory('SE', [
            'angular-stack-exchange-api.api',
            function(api) {
                return {
                    api: api
                };
            }
        ]);
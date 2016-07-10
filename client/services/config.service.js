(function() {
    'use strict'
    
    angular
        .module('weatherApp')
        .factory('config', config);

    config.$inject = ['$timeout', '$http']

    function config($timeout, $http) {
        var config = {
            fetch: function() {
                return $timeout(function() {
                    return $http.get('config.json').then(function(response) {
                        return response.data;
                    });
                });
            }
        }
        return config;
    };
})();

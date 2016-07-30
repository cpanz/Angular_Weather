(function() {
    'use strict'
    
    angular
        .module('weatherApp')
        .factory('forecast', forecast);

    forecast.$inject = ['$timeout', '$http', 'city']

    function forecast($timeout, $http, city) {
        var forecast = {
            fetch: function(city, days, API_KEY) {
                return $timeout(function() {
                return $http
                    .get('http://api.openweathermap.org/data/2.5/forecast/daily', {
                        params: {
                            q: city,
                            cnt: days,
                            appid: API_KEY
                        }
                    })
                    .then(function success(res) {
                        return res.data;
                    }, function error(err) {
                        console.log(err);
                        return err;
                    });
                });
            }
        }
        return forecast;
    };

})();

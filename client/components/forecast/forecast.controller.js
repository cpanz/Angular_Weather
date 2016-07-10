(function() {
    'use strict'
    
    angular
        .module('weatherApp')
        .controller('ForecastCtrl', ForecastCtrl)

        ForecastCtrl.$inject = ['$scope', '$http', '$routeParams','city', 'config'];

        function ForecastCtrl($scope, $http, $routeParams, city, config) {
            var vm = this;
            
            $scope.city = city.city;
            $scope.days = $routeParams.days || '2';
            // ?q=London&cnt=7&appid=40c742d331d83b9c454e9c89a307bcc7
            config.fetch().then(function(data) {
                $scope.API_KEY = data.API_KEY;
                $http
                    .get('http://api.openweathermap.org/data/2.5/forecast/daily', {
                        params: {
                            q: $scope.city,
                            cnt: $scope.days,
                            appid: $scope.API_KEY
                        }
                    })
                    .then(function success(res) {
                        $scope.weatherResult = res.data;
                    }, function error(err) {
                        console.log(err);
                    });
            });


            $scope.convertDate = function(time) {
                return new Date(time * 1000);
            }
            $scope.convertToFahrenheit = function(temp) {
                return Math.round((1.8 * (temp - 273) + 32 ));
            }
        }
})();

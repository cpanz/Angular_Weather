(function() {
    'use strict'
    
    angular
        .module('weatherApp')
        .controller('ForecastCtrl', ForecastCtrl)

        ForecastCtrl.$inject = ['$scope', '$http', '$routeParams','city', 'config', 'forecast'];

        function ForecastCtrl($scope, $http, $routeParams, city, config, forecast) {
            var vm = this;
            
            $scope.city = city.city;
            $scope.days = $routeParams.days || '2';
            config.fetch().then(function(data) {
                var API_KEY = data.API_KEY;
                forecast.fetch($scope.city, $scope.days, API_KEY).then(function(data) {
                    $scope.weatherResult = data;
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

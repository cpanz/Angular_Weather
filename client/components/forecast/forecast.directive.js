(function() {
    'use strict'
    
    angular
        .module('weatherApp')
        .directive('weatherForecast', function() {
            return {
                restrict: 'AE',
                templateUrl: '/components/forecast/forecast.directive.html',
                replace: true,
                scope: {
                    weatherDay: "=",
                    convertTemp: "&",
                    convertDate: "&",
                    dateFormat: "@"
                }
            }
        });
    
})();

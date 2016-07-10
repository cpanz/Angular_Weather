(function() {
    'use strict';

    angular
        .module('weatherApp', ['ngRoute'])
        .config(['$routeProvider'], config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/home/home.view.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })
            .when('/forecast', {
                templateUrl: 'components/forecast/forecast.view.html',
                controller: 'ForecastCtrl',
                controllerAs: 'vm'
            })
            .when('/forecast/:days', {
                templateUrl: 'components/forecast/forecast.view.html',
                controller: 'ForecastCtrl',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/'});
    }
})();

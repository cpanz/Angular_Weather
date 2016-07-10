(function() {
    'use strict'
    
    angular
        .module('weatherApp')
        .controller('HomeCtrl', HomeCtrl);

        HomeCtrl.$inject = ['$scope', 'city'];

        function HomeCtrl($scope, city) {
            var vm = this;

            $scope.city = city.city;

            $scope.$watch('city', function() {
                city.city = $scope.city;
            });
        }
    
})();

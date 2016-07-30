(function() {
    'use strict'
    
    angular
        .module('weatherApp')
        .controller('HomeCtrl', HomeCtrl);

        HomeCtrl.$inject = ['$scope', '$location', 'city'];

        function HomeCtrl($scope, $location, city) {
            var vm = this;

            $scope.city = city.city;

            $scope.$watch('city', function() {
                city.city = $scope.city;
            });

            $scope.submit = function() {
                $location.path('/forecast');
            };
        }
    
})();

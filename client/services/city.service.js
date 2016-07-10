(function() {
    'use strict'
    
    angular
        .module('weatherApp')
        .service('city', city);

    function city() {
        return this.city = "New York, NY";
    }
    
})();

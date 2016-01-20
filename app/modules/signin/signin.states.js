(function() {
    'use strict';

    angular.module('myApp.signin')

        .config(['$stateProvider', function($stateProvider) {

            $stateProvider
                .state('signin', {
                    url: '/signin',
                    templateUrl: 'modules/signin/signin.html',
                    controller: 'ApplicationController',
                    controllerAs: 'vm'
                });

        }]);

})();

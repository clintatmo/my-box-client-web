(function() {

    'use strict';

    angular
        .module('myApp.signin')
        .factory('AuthenticationService', AuthenticationService);

        AuthenticationService.$inject = ['$http','$q', 'SERVER_PREFIX', 'localStorageService', '$window', '$rootScope'];

        function AuthenticationService($http, $q, SERVER_PREFIX, localStorageService, $window, $rootScope) {

            return {
                login: login,
                logout:logout
            };

            $rootScope.authorities = [];

            function login() {

                $http
                    .get('user/authenticate')
                    .then(getLoginSucces)
                    .catch(getLoginFailed);

                var d = $q.defer();

                function getLoginSucces(response) {
                    localStorageService.set('localStorageUser', response.data);

                    d.resolve();
                }

                function getLoginFailed(error) {
                    d.reject();
                }

                return d.promise;

            };

            function logout() {

                $http
                    .get('user/signout')
                    .then(getLogoutSucces)
                    .catch(getLogoutFailed);

                var d = $q.defer();

                function getLogoutSucces(response) {
                    localStorageService.remove('localStorageUser');

                    d.resolve();
                }

                function getLogoutFailed(error) {
                    d.reject();
                }

                return d.promise;

            };

        };
})();
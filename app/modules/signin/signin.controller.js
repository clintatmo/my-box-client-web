(function() {

    'use strict';

    angular
        .module('myApp.signin')
        .controller('SigninController', SigninController);


    SigninController.$inject = [ '$auth', 'toastr'];


    function SigninController( $auth, toastr ) {

        var vm = this;
        vm.login = login;

        vm.credentials = {
            username: '',
            password: ''
        };

        function login(credentials){
            $auth.submitLogin(credentials)
                .then(function(resp) {
                    // handle success response
                    toastr.error('Succes');
                })
                .catch(function(resp) {
                    // handle error response
                    toastr.error('Error');
                });
        }


    }

})();
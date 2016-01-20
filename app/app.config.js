(function() {
    'use strict';


    angular.module('myApp')

        .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

            /*$httpProvider.defaults.useXDomain = true;
             delete $httpProvider.defaults.headers.common['X-Requested-With'];
             $httpProvider.defaults.headers.common["Origin", "Content-Type", "Accept", "Authorization"] = 'XMLHttpRequest';*/

            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/signin");


        }])


        .config(function($authProvider) {

            // the following shows the default values. values passed to this method
            // will extend the defaults using angular.extend

            $authProvider.configure({
                apiUrl:                  'http://127.0.0.1:3000/api/v1',
                tokenValidationPath:     '/auth/validate_token',
                signOutUrl:              '/auth/sign_out',
                emailRegistrationPath:   '/auth',
                accountUpdatePath:       '/auth',
                accountDeletePath:       '/auth',
                confirmationSuccessUrl:  window.location.href,
                passwordResetPath:       '/auth/password',
                passwordUpdatePath:      '/auth/password',
                passwordResetSuccessUrl: window.location.href,
                emailSignInPath:         '/auth/sign_in',
                storage:                 'cookies',
                forceValidateToken:      false,
                validateOnPageLoad:      true,
                proxyIf:                 function() { return false; },
                proxyUrl:                '/proxy',
                omniauthWindowType:      'sameWindow',
                authProviderPaths: {
                    github:   '/auth/github',
                    facebook: '/auth/facebook',
                    google:   '/auth/google'
                },
                tokenFormat: {
                    "access-token": "{{ token }}",
                    "token-type":   "Bearer",
                    "client":       "{{ clientId }}",
                    "expiry":       "{{ expiry }}",
                    "uid":          "{{ uid }}"
                },
                cookieOps: {
                    path: "/",
                    expires: 9999,
                    expirationUnit: 'days',
                    secure: false,
                    domain: 'domain.com'
                },
                parseExpiry: function(headers) {
                    // convert from UTC ruby (seconds) to UTC js (milliseconds)
                    return (parseInt(headers['expiry']) * 1000) || null;
                },
                handleLoginResponse: function(response) {
                    return response.data;
                },
                handleAccountUpdateResponse: function(response) {
                    return response.data;
                },
                handleTokenValidationResponse: function(response) {
                    return response.data;
                }
            })
        })

})();
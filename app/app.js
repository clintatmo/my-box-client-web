(function() {
  'use strict';

  angular.module('myApp', [

    'ui.router',
    'ui.bootstrap',
    'ng-token-auth',
    'toastr',

    'myApp.signin',
    'myApp.version'

  ]);

})();

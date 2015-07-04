'use strict';

/**
 * @ngdoc function
 * @name testAngularShopApp.services:AuthService
 * @description
 * # AuthService
 * Auth service of app.
 */

var AuthService = function($state, bcrypt, localStorageService) {
  var authService = {};

  bcrypt.setRandomFallback(function(num) {
    var arr = [];
    var i;
    for (i = 0; i < num; i++) {
      arr.push(Math.random());
    }
    return arr;
  });

  authService.login = function(credentials) {
    var email = localStorageService.get('email'),
      hash = localStorageService.get('hash');

    if (email === credentials.email && bcrypt.compareSync(credentials.password, hash)) {
      localStorageService.set('isauth', true);
      return true;
    }
    return false;
  };

  authService.logout = function() {
    localStorageService.set('isauth', false);
  };

  authService.signup = function(credentials) {
    var salt = bcrypt.genSaltSync(4),
      hash = bcrypt.hashSync(credentials.password, salt);

    localStorageService.set('email', credentials.email);
    localStorageService.set('hash', hash);
  };

  authService.isAuthenticated = function () {
    // FIXME: This is bad practice! It should compare passwords.
    return localStorageService.get('isauth');
  };

  authService.getEmail = function() {
    return localStorageService.get('email');
  };

  authService.checkAccess = function(event, toState, toParams, fromState, fromParams) {
    if (toState.data !== undefined && toState.data.authNeeds !== undefined && toState.data.authNeeds) {
      if (!authService.isAuthenticated()) {
        event.preventDefault();
        $state.go('login');
      }
    }
  };

  return authService;
};

angular.module('testAngularShopApp')
  .factory('AuthService', AuthService);

'use strict';

/**
 * @ngdoc overview
 * @name testAngularShopApp
 * @description
 * # testAngularShopApp
 *
 * Main module of the application.
 */

angular
  .module('testAngularShopApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'LocalStorageModule',
    'dtrw.bcrypt'
  ])
  .config(function($stateProvider, localStorageServiceProvider) {

    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'views/signup.html',
      controller: 'SignupCtrl'
    })
    .state('logout', {})
    .state('search', {
      url: '/search',
      templateUrl: 'views/search.html',
      controller: 'SearchCtrl'
    });

    localStorageServiceProvider
      .setPrefix('testAngularShopApp')
      .setStorageType('localStorage');

  }).run(function($state) {
      $state.go('search');
  });

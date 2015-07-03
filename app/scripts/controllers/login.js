'use strict';

/**
 * @ngdoc function
 * @name testAngularShopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAngularShopApp
 */

var LoginCtrl = function($scope, AuthService, $state) {

  $scope.alerts = [];

  $scope.credentials = {
    email: '',
    password: ''
  };

  $scope.login = function() {
    $scope.alerts = [];
    if (AuthService.login($scope.credentials)) {
      $state.go('search');
    } else {
      $scope.alerts.push({type: 'danger', msg: 'Bad e-mail or password!'});
    }
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

};

angular.module('testAngularShopApp')
  .controller('LoginCtrl', LoginCtrl);

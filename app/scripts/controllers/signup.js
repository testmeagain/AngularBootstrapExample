'use strict';

/**
 * @ngdoc function
 * @name testAngularShopApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the testAngularShopApp
 */

var SignupCtrl = function($scope, $state, AuthService) {

  $scope.alerts = [];

  $scope.credentials = {
    email: '',
    password1: '',
    password2: ''
  };

  $scope.signup = function() {
    $scope.alerts = [];
    if ($scope.credentials.password !== $scope.credentials.password2) {
      $scope.alerts.push({type: 'danger', msg: 'Passwords must match!'});
    } else {
      AuthService.signup($scope.credentials);
      $state.go('login');
    }
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

};

angular.module('testAngularShopApp')
  .controller('SignupCtrl', SignupCtrl);

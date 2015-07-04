'use strict';

/**
 * @ngdoc function
 * @name testAngularShopApp.controller:TopMenuCtrl
 * @description
 * # TopMenuCtrl
 */

var TopMenuCtrl = function($scope, $log, $state, $modal, AuthService, CartService) {
  $scope.auth = AuthService;
  $scope.cart = CartService;

  $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  };

  $scope.showCart = function() {
    var modalInstance = $modal.open({
      animation: false, // Buggy
      templateUrl: 'views/modal.html',
      controller: 'ModalCtrl',
      scope: $scope,
      size: 'sm'
    });

    modalInstance.result.then(function() {
      $log.debug('On OK');
    }, function () {
      $log.debug('On Cancel');
    });
  };
};

angular.module('testAngularShopApp')
  .controller('TopMenuCtrl', TopMenuCtrl);

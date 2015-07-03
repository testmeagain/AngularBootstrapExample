'use strict';

/**
 * @ngdoc function
 * @name testAngularShopApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the testAngularShopApp
 */

var ModalCtrl = function($scope, $modalInstance, CartService) {

  $scope.items = CartService.getItems();

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};

angular.module('testAngularShopApp')
  .controller('ModalCtrl', ModalCtrl);

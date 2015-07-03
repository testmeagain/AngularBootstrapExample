'use strict';

/**
 * @ngdoc function
 * @name testAngularShopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testAngularShopApp
 */

var MainCtrl = function($scope) {
  $scope.test = true;
};

angular.module('testAngularShopApp')
  .controller('MainCtrl', MainCtrl);

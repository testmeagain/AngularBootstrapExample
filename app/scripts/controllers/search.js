'use strict';

/**
 * @ngdoc function
 * @name testAngularShopApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the testAngularShopApp
 */

var SearchCtrl = function($scope, ItemsService, CartService) {

  $scope.dateFromOpened = false;
  $scope.dateToOpened = false;

  $scope.filter = {
    dateFrom: null,
    dateTo: null,
    inStock: false,
    minPirce: null,
    maxPrice: null,
    color: ''
  };

  $scope.dateOptions = {
    dateFormat: 'YYYY/MM/DD'
  };

  $scope.items = [];
  $scope.colors = {};

  $scope.items = ItemsService.getAll().then(function(data) {
    $scope.items = data;
    angular.forEach(data, function(value) {
      $scope.colors[value.Color] = value.Color;
    });
  });

  $scope.toggleDateFromPopup = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.dateFromOpened = !$scope.dateFromOpened;
  };

  $scope.toggleDateToPopup = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.dateToOpened = !$scope.dateToOpened;
  };

  $scope.addToCart = function(item) {
    CartService.add(item);
  };

};

angular.module('testAngularShopApp')
  .controller('SearchCtrl', SearchCtrl);

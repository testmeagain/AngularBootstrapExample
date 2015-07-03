'use strict';

/**
 * @ngdoc function
 * @name testAngularShopApp.services:CartService
 * @description
 * # CartService
 * Auth service of app.
 */

var CartService = function() {
  var CartService = {};
  var items = [];

  CartService.add = function(item) {
    items.push(item);
  };

  CartService.clear = function() {
    items = [];
  };

  CartService.count = function() {
    return items.length;
  };

  CartService.getItems = function() {
    return items;
  };

  return CartService;
};

angular.module('testAngularShopApp')
  .factory('CartService', CartService);

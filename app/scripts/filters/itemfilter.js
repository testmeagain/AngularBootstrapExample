'use strict';

/**
 * @ngdoc function
 * @name testAngularShopApp.filters:
 * @description
 * # item filter
 */

var ItemFilter = function($log) {
  return function(items, filter) {
    var arr = [];

    if(!angular.isArray(items)) {
      return;
    }

    angular.forEach(items, function(item) {
      if (filter.inStock && item.InStock !== true) {
        return;
      }

      if (filter.minPrice && item.Price < filter.minPrice) {
        return;
      }

      if (filter.maxPrice && item.Price > filter.maxPrice) {
        return;
      }

      if (filter.color && item.Color !== filter.color) {
        return;
      }

      if (angular.isDate(filter.dateFrom) && filter.dateFrom > Date.parse(item.Date)) {
        return;
      }

      if (angular.isDate(filter.dateTo) && filter.dateTo < Date.parse(item.Date)) {
        return;
      }

      $log.debug('Count:' + arr.length);

      this.push(item);
    }, arr);

    return arr;
  };
};

angular.module('testAngularShopApp')
  .filter('itemfilter', ItemFilter);

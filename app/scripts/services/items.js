'use strict';

/**
 * @ngdoc function
 * @name testAngularShopApp.services:ItemsService
 * @description
 * # ItemsService
 * Auth service of app.
 */

var ItemsService = function($http, $q) {
  var ItemsService = {};

  ItemsService.get = function() {
    return $http.get('/data.json');
  };


  ItemsService.getAll = function() {
    var deferred = $q.defer();

    $http.get('/data.json')
      .success(function(itemsArray) {
        var items = [];

        itemsArray.forEach(function(item) {
            items.push(item);
        });

        deferred.resolve(items);
      })
      .error(function() {
        deferred.reject();
      });
    return deferred.promise;
  };

  return ItemsService;
};

angular.module('testAngularShopApp')
  .factory('ItemsService', ItemsService);

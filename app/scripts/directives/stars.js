'use strict';

/**
 * @ngdoc function
 * @name testAngularShopApp.directives:Stars
 * @description
 * # Stars
 */

var StarsDirective = function() {
  return {
    restrict: 'EA',
    template: '<span class="stars"><i class="glyphicon glyphicon-star" ng-repeat="i in arr track by $index"/></span>',
    replace: true,
    require: 'ngModel',
    scope: {
      ngModel: '='
    },
    controller: function($scope) {
      $scope.arr = new Array($scope.ngModel ? Math.round($scope.ngModel) : 0);
    }
  };
};

angular.module('testAngularShopApp')
  .directive('stars', StarsDirective);

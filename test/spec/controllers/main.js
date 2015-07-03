'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('testAngularShopApp'));

  var MainCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should be defined', function () {
    expect(MainCtrl).toBeDefined();
  });

  it('should be has test visible', function () {
    expect(scope.test).toBe(true);
  });

});

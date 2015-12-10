'use strict';

describe('Controller: MovieaddCtrl', function () {

  // load the controller's module
  beforeEach(module('certificationAngularApp'));

  var MovieaddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieaddCtrl = $controller('MovieaddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MovieaddCtrl.awesomeThings.length).toBe(3);
  });
});

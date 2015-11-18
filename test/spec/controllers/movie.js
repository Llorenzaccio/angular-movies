'use strict';

describe('Controller: MoviectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('certificationAngularApp'));

  var MoviectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoviectrlCtrl = $controller('MoviectrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MoviectrlCtrl.awesomeThings.length).toBe(3);
  });
});

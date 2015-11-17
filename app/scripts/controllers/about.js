'use strict';

/**
 * @ngdoc function
 * @name certificationAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the certificationAngularApp
 */
angular.module('certificationAngularApp')
  .controller('AboutCtrl', function ($scope, $http) {
    $http.get('http://localhost:3001/server/api/movies').then(function (data) {
        $scope.list = data;
        console.log(data);
      }
    )
  });

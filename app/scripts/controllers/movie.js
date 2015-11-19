'use strict';

/**
 * @ngdoc function
 * @name certificationAngularApp.controller:MovieCtrl
 * @description
 * # MoviectrlCtrl
 * Controller of the certificationAngularApp
 */
angular.module('certificationAngularApp')
  .controller('MovieCtrl', function ($scope, $routeParams, $location, Movie) {
    this.movie = Movie.get({id: $routeParams.id});

    this.modify = function() {

    };

    this.delete = function() {
      this.movie.$remove({id: $routeParams.id}, function () {
        $location.path('/server/api/movies');
      });
    };
  });

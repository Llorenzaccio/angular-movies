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
		$location.path('/server/api/movie/' + $routeParams.id);
    };
	
	this.cancelMovie = function() {
		$location.path('server/api/movies');
	};

    this.delete = function() {
      this.movie.$remove({id: $routeParams.id}, function () {
        $location.path('/server/api/movies');
      });
    };
  });

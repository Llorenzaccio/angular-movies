'use strict';

/**
 * @ngdoc function
 * @name certificationAngularApp.controller:MovieaddCtrl
 * @description
 * # MovieaddCtrl
 * Controller of the certificationAngularApp
 */
angular.module('certificationAngularApp')
  .controller('MovieAddCtrl', function ($scope, $routeParams, $location, Movie) {

    this.movie = {};

    this.movie = new Movie();

    this.addMovie = function() {
      this.movie.$save();
      $location.path('server/api/movies');
    };
	
	this.cancelMovie = function() {
		$location.path('server/api/movies');
	};
	/*
    this.addMovie = function() {
      Movie.addNewMovie({}, function() {
        $location.path('/server/api/movies');
      });
    };*/
  });

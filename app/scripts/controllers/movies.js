'use strict';

/**
 * @ngdoc function
 * @name certificationAngularApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the certificationAngularApp
 */
angular.module('certificationAngularApp')
  .controller('MoviesCtrl', function ($scope, Movie) {
    this.movies = Movie.query();
  });

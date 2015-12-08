'use strict';

/**
 * @ngdoc overview
 * @name certificationAngularApp
 * @description
 * # certificationAngularApp
 *
 * Main module of the application.
 */
angular
  .module('certificationAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/server/api/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/server/api/movies/:id', {
        templateUrl: 'views/movie-details.html',
        controller: 'MovieCtrl',
        controllerAs: 'movie'
      })
      .when('/server/api/movie/:id?', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl',
        controllerAs: 'movieAdd'
      })
      .when('/server/api/movies/:id/actors', {
        templateUrl: 'views/actors.html',
        controller: 'ActorsCtrl',
        controllerAs: 'actors'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

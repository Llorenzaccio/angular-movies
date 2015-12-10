'use strict';

/**
 * @ngdoc service
 * @name certificationAngularApp.movies
 * @description
 * # movies
 * Factory in the certificationAngularApp.
 */
angular.module('certificationAngularApp')
  .factory('Movie', function ($resource) {
    return $resource('http://localhost:3008/server/api/movies/:id', {id:'@id'}/*, {
      addNewMovie: {
        method: 'POST'
      }
    }*/);
  });

'use strict';

/**
 * @ngdoc service
 * @name metalManiaApp.Articles
 * @description
 * # Articles
 * Factory in the metalManiaApp.
 */
angular.module('metalManiaApp')
  .factory('Articles', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });

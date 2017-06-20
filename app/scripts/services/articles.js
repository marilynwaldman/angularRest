'use strict';

/**
 * @ngdoc service
 * @name metalManiaApp.Articles
 * @description
 * # Articles
 * Factory in the metalManiaApp.

 */
angular.module('metalManiaApp')
  .factory('Articles', function ($http) {
    // Private Area
    

    var articlesRequest = null;

    // Public API here
    return {
       load: function () {
	if(!articlesRequest){
	    articlesRequest = $http.get('/articles.json');	
	}	
        return articlesRequest;
       },
       find:  function(id, articles){	  
	  for(var i in articles){
	      var article = articles[i];
	      if(id === article.id){console.log(article);
		 return article;
	      }	
	  }
	
       }
    };
  });

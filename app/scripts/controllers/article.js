'use strict';
angular.module('metalManiaApp')
  .controller('ArticleCtrl', ['$scope', 'Articles', '$routeParams', function ($scope, Articles, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
 	 var id = parseInt($routeParams.id, 10);
	
	 Articles.load().then(function (response) {

	    var data = response.data;
	    var status = response.status;
	    var statusText = response.statusText;
	    var headers = response.headers;
	    var config = response.config;
	    data.sort(function(a,b) {
		return a.title.toLowerCase() > b.title.toLowerCase();
	    });	 
	     
	    $scope.article = Articles.find(id, data);
	    
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    console.log("Error: Could not get data", response.status);
	
	});
	
	
}])	
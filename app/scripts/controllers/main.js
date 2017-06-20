'use strict';

/**
 * @ngdoc function
 * @name metalManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the metalManiaApp
 */
angular.module('metalManiaApp')
  .controller('MainCtrl',[ '$scope', 'Articles', '$location', '$http', function ($scope, Articles, $location, $http){
	
	var url = 'https://api.github.com/search/repositories';	
	
	$http.get(url, { 
	     params : {
		q: 'moviemania',
		sort: 'updated',
		order: 'desc'
 	     }
	  }).then(function (response) {

	    var data = response.data;
	    var status = response.status;
	    var statusText = response.statusText;
	    var headers = response.headers;
	    var config = response.config;	    
	    console.log(data, status);
	}, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    console.log("Error: Could not get data", response.status);

	});	
	
	
       
	  Articles.load().then(function (response) {

	    var data = response.data;
	    var status = response.status;
	    var statusText = response.statusText;
	    var headers = response.headers;
	    var config = response.config;
	
	    for(var i in data){
		data[i].slug = data[i].title.toLowerCase().replace(/ /g,'-');
	    }

	    $scope.articles = data;
	    console.log(data);
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    console.log("Error: Could not get data", response.status);
	
	});

       

       $scope.article = {
	        id:'',
		title:'',
		image:'http://ia.media-imdb.com/images/M/MV5BMTY1ODUzNzcxN15BMl5BanBnXkFtZTcwMjQ1MDUwOA@@._V1_SX640_SY720_.jpg',
		description:' ',
		publication: '',
		date: '',
		link:'',
		author: '',
		link: ''
	
       }
      
       
       $scope.goToRandomArticle = function() {	      
             var index = Math.floor(Math.random()  * $scope.articles.length);
             var article = $scope.articles[index];
             var url = 'article/' + article.id + '/' + article.slug;
             $location.url(url);      
       }

       $scope.isValid = function() {
	 if($scope.article.title === ''){
		return false;
	 }
	 if($scope.article.description === ''){
		return false;
	 }
	 if($scope.article.author === ''){
		return false;
	 }
	 if($scope.article.description === ''){
		return false;
	 }
	 return true;
	
       }
     
       $scope.closed = false;

       $scope.validateTitle = function() {
	  
	  if($scope.article.title.length > 0){
		console.debug($scope.newArticleTitle);		
          }
          else {
	        window.alert('Title is required');
          }
	
       }

       $scope.addArticle = function() {
	    $scope.articles.push(angular.copy($scope.article));
       }

	
   }]);   

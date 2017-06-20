'use strict';
angular.module('metalManiaApp')
  .controller('ArticleCtrl', function ($scope, $routeParams, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   $scope.hi = 'ho'
 
 


	var id = parseInt($routeParams.id, 10);
	var articleList2 = [
		{id: 1,
		title:'Nightbringer',
		image:'http://ia.media-imdb.com/images/M/MV5BMTY1ODUzNzcxN15BMl5BanBnXkFtZTcwMjQ1MDUwOA@@._V1_SX640_SY720_.jpg',
		description:'Black Metal ',
		publication: 'Time Magazine',
		date: 'January 1, 2017',
		link:'',
		author: 'Marilyn Waldman'},
		{id:2,
			title:'Mayhem',
		image:'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX640_SY720_.jpg',
		description:'Today I read through rad mag Broken Amp that the band recently in Decibel cited Julius Evola as a big inspiration for Terra Damnata. Julius Evola was an esotericist and perhaps the band meant they admired his exploration of the occult, but they should really have fucking been specific when citing a self-avowed “super fascist” who felt rape and the domination of women was an acceptable part of occult ritual and who was a huge inspiration for Italian fascists',
		link:'',
		date: 'September 1, 2017',
	        publication: 'New York Times',
		author: 'foo foo'},
		{title:'Absurb',
		id:3,
		image:'http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX640_SY720_.jpg',
		description:'German Black Metal',
		link:'',
		date: 'December 1, 2017',
	        publication: 'Denver Post',
		author: 'kitty'}
	]
	
	$scope.testit = articleList2[1].title;
	
	
	for(var index in articleList2){
		var article2 = articleList2[index];
		if(article2.id === id){
			$scope.article2 = article2;
			break;
		}
	}
	
	
	
})	
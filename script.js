var app = angular.module('myLab', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/cat',
		{
			templateUrl:'cat.html',
			controller:'myController'
		})
	.when('/dog',
		{
			templateUrl:'dog.html',
			controller:'myController'
		})
	.when('/shark',
		{
			templateUrl:'shark.html',
			controller:'myController'
		})
	.when('/octopus',
		{
			templateUrl:'octopus.html',
			controller:'myController'
		})
	.when('/fail',
		{
			templateUrl:'fail.html',
			controller:'myController'
		})
	.otherwise({redirectTo:'/fail'});
});

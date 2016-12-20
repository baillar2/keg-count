angular.module('app',['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/accounts',{
				templateUrl: './partials/accounts.html',
				controller: 'accountControl'
			})
			.when('/beer', {
				templateUrl: './partials/beer.html',
				controller: 'beerControl'
			})
			.when('/addAcc', {
				templateUrl: './partials/addAcc.html',
				controller: 'addAccControl'
			})
			.when('/addBeer',{
				templateUrl: './partials/addBeer.html',
				controller: 'addBeerControl'
			})
			.otherwise({
				templateUrl: './partials/accounts.html',
				controller: 'accountControl'
			})
	})
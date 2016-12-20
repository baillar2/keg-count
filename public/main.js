angular.module('app',[])
	.controller('kegControl', ['$scope', '$http', function($scope, $http){
		console.log('module loaded')
		var s = $scope		
		var h = $http
		s.accounts = [{name:'Little Machine', 
					   contact:'Sean Baillargeon', 
					   number:'517-980-4218',
					   address:'nowhere town'},
					   {name:'Little Maching', 
					   contact:'Sean Baillargeon', 
					   number:'517-980-4218',
					   address:'nowhere town'}]
		
		console.log(s.accounts, 'array')

		h.get('/')
			.then(function(serverData){
				console.log('page loaded')
			})



		
	}])

.controller('accountControl', ['$scope', '$http', function($scope, $http){
	var s = $scope
}])
.controller('beerControl', ['$scope', '$http', function($scope, $http){
	var s = $scope
	s.beers = [{name:'RacerBack', 
				style:'English Pale Ale', 
				abv:'5.0',
				availability:'310'}, 
				{name:'Tractor Beam', 
				style:'Oatmeal Stout',
				abv:'6.6',
				availability:'155'}]
	console.log(s.beers, 'beers')
}])
//.controller('addAccControl' ['$scope', '$http', function($scope, $http){
//	var s = $scope
//}])
//.controller('addBeerControl', ['$scope', '$http', function($scope, $http){
//	var s = $scope
//}])
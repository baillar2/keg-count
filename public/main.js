angular.module('app',[])
	.controller('kegControl', ['$scope', '$http', function($scope, $http){
		console.log('module loaded')
		var s = $scope		
		s.accounts = [{name:'Little Machine', 
					   contact:'Sean Baillargeon', 
					   number:'517-980-4218',
					   address:'nowhere town'},
					   {name:'Little Maching', 
					   contact:'Sean Baillargeon', 
					   number:'517-980-4218',
					   address:'nowhere town'}]
		
		
		console.log(s.accounts, 'array')
		console.log(s.beers, 'beers')
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

}
.controller('addAccControl' ['$scope', '$http', function($scope, $http){
	var s = $scope
}])
.controller('addBeerControl', ['$scope', '$http', function($scope, $http){
	var s = $scope
}])
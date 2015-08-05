var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope){
	
	$scope.message = "Hello Angular.js!";
	
	var data = {
		firstname: "stalin",
		lastname: "mahadevan"
	};
	
	$scope.data = data;
	
}]);

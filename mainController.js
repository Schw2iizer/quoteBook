var app = angular.module("quoteBook");

app.controller("mainCtrl", function($scope, mainService){

	$scope.getQuotes = function(){
		$scope.quotes = mainService.getData();
	}

	$scope.getQuotes();

	$scope.addQuotes = function(){
		mainService.addData($scope.quote);
	}



	$scope.removeQuote = function(){
		mainService.removeData($scope.quote);
	}




})
// 

var app = angular.module('searchManager', []);

	app.controller('searchController', ['$scope', '$http', function($scope, $http){

			var parameters = {
						url:'http://it-ebooks-api.info/v1/',
						searchBook:'search/',
						bookSearch:'book/',
						page:0,
			};
			config = {
				params: {
					callback: 'JSON_CALLBACK',
				}
			};
			$scope.findEbook = function(){
				$scope.Results = true;
				$scope.Details = false;								
				// parameters.Details = true;
				var searchUrl = parameters.url+parameters.searchBook+$scope.eBook;
				$http.get(searchUrl, config).success(function(response){
					$scope.foundBooks = response.Books;
					});				
			};
			$scope.getBookDetails = function(book_ID){
				$scope.Results = false;
				$scope.Details = true;
				var bookUrl  = parameters.url+parameters.bookSearch+book_ID;
				$http.get(bookUrl, config).success(function(response){
					$scope.bookDetails = response;
					});
			};
}]);
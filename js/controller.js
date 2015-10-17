angular.module('gifChat')

.controller('gifControl', function($scope, gifService){
	$scope.gifs = [];
	
	$scope.getGif = function () {
		gifService.searchGif($scope.query)
		.success(function (response) {
			var randomNum = Math.floor(Math.random() * response.data.length);
			console.log(response);
			$scope.gifs.unshift(response.data[randomNum].images.downsized_large.url);
			$scope.query = "";
		})
		.error(function (err) {
			console.error(err);
		});
	};
});
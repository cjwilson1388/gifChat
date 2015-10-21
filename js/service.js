angular.module('gifChat')

.service('gifService', function($http) {
	

	this.searchGif = function (query){
		var uri = 'http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=dc6zaTOxFJmzC'
		return $http.get(uri);
	}



});

		
/*--
	
	service.getGif = function (searchQuery){
		var url = "http://api.giphy.com/v1/gifs/search?="
		var api_key = 'api_key=dc6zaTOxFJmzC&limit=1&offset=0&rating=pg'
		var encodedSearchQuery = encodeURI(searchQuery)
		var searchURL = url + encodedSearchQuery + api_key
		
		$http.get(searchURL)
	}

	--*/
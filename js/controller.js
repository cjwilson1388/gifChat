angular.module('gifChat')

.controller('gifControl', function($scope, gifService, $firebaseArray) {
	
	var ref = new Firebase('https://gifchat-cj.firebaseio.com/');
	$scope.gifs = $firebaseArray(ref);
	$scope.getGif = function () {
		gifService.searchGif($scope.query, ref)

		.success(function (response) {
			var randomNum = Math.floor(Math.random() * response.data.length);
			console.log(response);
			$scope.gifs.unshift(response.data[randomNum].images.downsized_large.url);
			var recentGif = response.data[randomNum].images.downsized_large.url;
			var queryText = $scope.query
			$scope.gifs.$add({text:queryText, gif:recentGif})
			$scope.query = "";

		})


		.error(function (err) {
			console.error(err);
		})
	};


});


/*$scope.addGif =
{
          //CREATE A FIREBASE REFERENCE
          var ref = new Firebase("https://bbz292o5oew.firebaseio-demo.com/");

          // GET MESSAGES AS AN ARRAY
          $scope.messages = $firebaseArray(ref);

          //ADD MESSAGE METHOD
          $scope.addMessage = function(e) {
            //LISTEN FOR RETURN KEY
            if (e.keyCode === 13 && $scope.msg) {
              //ALLOW CUSTOM OR ANONYMOUS USER NAMES
              var name = $scope.name || "anonymous";

              //ADD TO FIREBASE
              $scope.messages.$add({
                from: name,
                body: $scope.msg
              });

              //RESET MESSAGE
              $scope.msg = "";
            }
          }
        }


*/
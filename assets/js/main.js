var app = angular.module('codelife', []); //'ngRoute'
//config
// app.config(['$routeProvider', function($routeProvider) {
// 	$routeProvider.when('/main', {
// 		templateUrl: 'main.html',
// 		controller: 'MainCtrl'
// 	});
//
// }]);
// services
// main controller
app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {

	// get post from json
	$scope.PostLoad = function() {
		$http.get('main.json')
			.then(function(response) {
				$scope.posts = response.data;
				console.log(response.data);
			});
	};
	$scope.PostLoad();

	// grid layout
	$scope.GridLayout = function() {
		$("#listlayout").hide('slow');
		$("#gridlayout").show();
		$("#")
	};
	$scope.GridLayout();

	// list layout
	$scope.ListLayout = function() {
		$("#gridlayout").hide('slow');
		$("#listlayout").show();
	}
}]);

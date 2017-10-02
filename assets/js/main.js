var app = angular.module('codelife', ['ngRoute']); //
//config -route
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'MainCtrl',
		})
		.when('/blog', {
			templateUrl: 'blog.html',
			controller: 'BlogCtrl',
		})
		.when('/contact', {
			templateUrl: 'contact.html',
			controller: 'ContactCtrl'
		})
		.when('/editor', {
			templateUrl: 'editor.html',
			controller: 'EditorCtrl'
		})
		.when('/profile', {
			templateUrl: 'profile.html',
			controller: 'ProfileCtrl'
		})
		.when('/404', {
			templateUrl: '404.html',
			controller: 'ErrorCtrl'
		})
		.otherwise({
			redirectTo: '/404'
		})


}]);
// services
// main controller
app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("home");
	// grid layout
	$scope.GridLayout = function() {
		$("#listlayout").hide('slow');
		$("#gridlayout").show();
	};
	$scope.GridLayout();

	// list layout
	$scope.ListLayout = function() {
		$("#gridlayout").hide('slow');
		$("#listlayout").show();
	};
	$scope.ListLayout();

}]);
//blog controller
app.controller('BlogCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("blog");
	// get post from json
	$scope.PostLoad = function() {
		$http.get('main.json')
			.then(function(response) {
				$scope.posts = response.data;
				console.log(response.data);
			});
	};
	$scope.PostLoad();


}]);
// contact controller
app.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("contact");
}]);
// editor controller
app.controller('EditorCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("editor");
}]);
// profile controller
app.controller('ProfileCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("profile");
}]);
// error controller
app.controller('ErrorCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("404");
}])

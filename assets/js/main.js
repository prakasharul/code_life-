var app = angular.module('codelife', ['ngRoute']); //


//config -route
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'HomeCtrl',
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
		.when('/single/:ID', {
			templateUrl: 'single.html',
			controller: 'SingleCtrl'
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

// post page controller
app.controller('SingleCtrl', ['$scope', '$http',
	'$routeParams',
	function(
		$scope, $http, $routeParams) {
		console.log("post");
		$scope.Postid = $routeParams.ID - 1;

		$http.get('main.json')
			.then(function(response) {
				$scope.posts = response.data;
				console.log($scope.posts);
			});
	}
]);
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
}]);

// home controller
app.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("home");
}]);


/**
 * extends string prototype object to get a string with a number of characters from a string.
 *
 * @type {Function|*}
 */
String.prototype.trunc = String.prototype.trunc ||
	function(n) {

		// this will return a substring and
		// if its larger than 'n' then truncate and append '...' to the string and return it.
		// if its less than 'n' then return the 'string'
		return this.length > n ? this.substr(0, n - 1) + '...' : this.toString();
	};

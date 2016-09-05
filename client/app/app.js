// angular.module("pspApp", ['ui.router','ui.materialize','ngCookies','ngAnimate']);
angular.module("pspApp", ['ui.router']);

angular.module("pspApp")
.config(function($urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');

	$locationProvider.html5Mode(true);
});

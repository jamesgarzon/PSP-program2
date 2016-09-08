// angular.module("pspApp", ['ui.router','ui.materialize','ngCookies','ngAnimate']);
angular.module("pspApp", ['ui.router','ngFileUpload']);

angular.module("pspApp")
.config(function($urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/');

	$locationProvider.html5Mode(true);
});


angular
    .module('app', ['ui.router', 'ngFileUpload']);

angular
    .module('app')
    .factory('SimpleService', SimpleService); 
  
SimpleService.$inject = ['$log'];
function SimpleService($log) {
    var service = {
        DoSomething: doSomething
    };

    return service;

    function doSomething() {
        $log.info('something done!');
    }
}


// (function(){

// class StatsFactory {
//     constructor($log) {
//     	this.$log = $log;
//         // this.$q = $q;
//         // this.Upload = Upload;
//     }

//     doSomething(){
//     	 this.$log.info('something done!');
// 	    // Service to list statistic
// 	}
// }

// angular.module('pspApp')
//   .factory('SimpleService', StatsFactory);


// }();
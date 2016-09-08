'use strict';
angular.module('pspApp')
.factory('Stats',function($q, Upload){

var service = {};

// Service to list brand
service.test = function () {
	// var defered = $q.defer();
	// var promise = defered.promise;
	// $http.get('/api/colors')
	// 		.success(function(data) {
	// 				data.forEach(color=>{
	// 					color.code =  ('00'+color.code).slice(-2);
	// 				})
	// 				defered.resolve(data);
	// 		})
	// 		.error(function(err) {
	// 				defered.reject(err);
	// 		});
	// return promise;
	return 'hello world';
};



 return service;

 });







// 'use strict';
// (function(){

// class ThingFactory {
//     constructor($q, Upload) {
//         this.$q = $q;
//         this.Upload = Upload;
//     }

//     test(){
//     	return 'hello world';
// 	    // Service to list statistic
//     }
// 	getRegression(file) {
// 		let defered = this.$q.defer();
// 		let promise = defered.promise;
// 	        this.Upload.upload({ url: 'statistics/regression', data: {data: file}})
// 	        .success(function(data) {
// 					defered.resolve(data);
// 			})
// 			.error(function(err) {
// 					defered.reject(err);
// 			});
// 		return promise;
// 	};

// 	getCorrelation(file) {
// 	let defered = this.$q.defer();
// 	let promise = defered.promise;
//         this.Upload.upload({ url: 'statistics/correlation', data: {data: file}})
//         .success(function(data) {
// 				defered.resolve(data);
// 		})
// 		.error(function(err) {
// 				defered.reject(err);
// 		});
// 	return promise;
// 	};


// 	getEstimated(file, xEstimate) {
// 	let defered = this.$q.defer();
// 	let promise = defered.promise;
//         this.Upload.upload({ url: 'statistics/estimate', data: {data: file, xEstimate:xEstimate}})
//         .success(function(data) {
// 				defered.resolve(data);
// 		})
// 		.error(function(err) {
// 				defered.reject(err);
// 		});
// 	return promise;
// 	};

// }

// angular.module('pspApp')
//   .factory('Stats', ThingFactory);


// })();


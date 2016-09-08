'use strict';
(function(){

class HomeComponent {
  constructor(Stats) {
    this.message = 'Hello';
    this.Stats = Stats;
  }

  getStatistics(file, xEstimate){
  	console.log("getStatistics");
  	this.getRegression(file);
  	this.getCorrelation(file);
  	this.getEstimated(file, xEstimate);

  }

  getRegression(file){
  	console.log('Regression')
  	this.Stats.getRegression(file)
  	.then(regression=>{
  		this.regression = regression;
  	})
  }

  getCorrelation(file){
  	this.Stats.getCorrelation(file)
  	.then(correlation=>{
  		this.correlation = correlation;
  	})
  }

  getEstimated(file, xEstimate){
  	this.Stats.getEstimated(file, xEstimate)
  	.then(yEstimate=>{
  		this.yEstimate = yEstimate;
  	})
  }

}

angular.module('pspApp')
  .component('psp2', {
    templateUrl: 'app/PSP2/psp2.html',
    controller: HomeComponent,
    controllerAs:'vm'
  });

})();


'use strict';

'use strict';
(function(){

class HomeComponent {
  constructor(Stats) {
    this.message = 'Hello';
    this.Stats = Stats;
  }

  getFile(file){
    this.getData(file);
    this.file = file;
    this.regression = undefined;
  }

  getStatistics(file, xEstimate){
    if (file) {
    console.log("getStatistics");
    this.getRegression(this.file);
    this.getCorrelation(this.file);
    this.getEstimated(this.file, xEstimate);  
    }
  	
    // this.getData(file);

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

  getData(file){
    this.Stats.getData(file)
    .then(data=>{
      this.data = data;
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

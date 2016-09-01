function Statistics() {
  this.getMean = getMean;
  this.getCovariance = getCovariance;
  this.getBOne= getBOne;
  this.getBZero= getBZero;

  function getMean(numbers){
    let sum = 0;
    if (Array.isArray(numbers)) {
      for (let number of numbers) {
        if (typeof(number)=='string') {
          return null;
        }
        sum += number;
      }
    }else {
      return null;
    }
    return (sum/numbers.length);
  }

  function getCovariance(numbers){
    var covariance = 0;
    var x = [];
    var y = [];
    numbers.forEach(number=>{
      covariance+= number[0]*number[1];
      x.push(number[0]);
      y.push(number[1]);
    });
    covariance = covariance/numbers.length;
    covariance -= (getMean(x) * getMean(y));
    covariance = Math.round(covariance * 100)/100;
    return covariance;
  }

  function getBZero(numbers){
    var bZero = 0;
    var x = [];
    var y = [];
    numbers.forEach(number=>{
      x.push(number[0]);
      y.push(number[1]);
    });
    bZero = getMean(y) - getBOne(numbers)*getMean(x);
    bZero = Math.round(bZero * 1000)/1000;
    return bZero;
  }

  function getBOne(numbers){
    var bOne = 0;
    var x = [];
    var y = [];
    var xPow = 0;

    numbers.forEach(number=>{
      xPow+= Math.pow(number[0], 2);
      bOne+= number[0]*number[1];
      x.push(number[0]);
      y.push(number[1]);
    });
    bOne -= numbers.length * getMean(x) * getMean(y);
    bOne /= xPow - numbers.length * Math.pow(getMean(x),2);
    bOne = Math.round(bOne * 1000)/1000;
    return bOne;
  }

}
module.exports =(Statistics);
//var linkedList = new LinkedList();

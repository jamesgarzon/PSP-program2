function Statistics() {
  this.getMean = getMean;
  this.getCovariance = getCovariance;

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

}
module.exports =(Statistics);
//var linkedList = new LinkedList();

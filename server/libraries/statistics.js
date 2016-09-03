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

  function getBZero(numbers, decimals){
    var bZero = 0;
    var x = [];
    var y = [];
    numbers.forEach(number=>{
      x.push(number[0]);
      y.push(number[1]);
    });
    bZero = getMean(y) - getBOne(numbers)*getMean(x);
    if (decimals) {
      bZero = Math.round(bZero * (Math.pow(10, decimals)))/(Math.pow(10, decimals));
    }
    return bZero;
  }

  function getBOne(numbers, decimals){
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
    if (decimals) {
      bOne = Math.round(bOne * (Math.pow(10, decimals)))/(Math.pow(10, decimals));
    }
    return bOne;
  }

  // function getBOne(numbers){
  //   let n = numbers.length;
  //   let sum_x = 0;
  //   let sum_y = 0;
  //   let sum_xy = 0;
  //   let sum_xx = 0;
  //   let bettaOne = 0;
  //
  //   numbers.forEach(number=>{
  //     let x = number[0];
  //     let y = number[1];
  //
  //     sum_x += x;
  //     sum_y += y;
  //     sum_xx += x*x;
  //     sum_xy += x*y;
  //   })
  //
  //   bettaOne = (n*sum_xy - sum_x*sum_y) / (n*sum_xx - sum_x*sum_x);
  //   bettaOne = Math.round(bettaOne * 1000)/1000;
  //
  //   return bettaOne;
  // }

    //
    // function getBZero(numbers){
    //   let n = numbers.length;
    //   let sum_x = 0;
    //   let sum_y = 0;
    //   let sum_xy = 0;
    //   let sum_xx = 0;
    //   let bettaZero = 0;
    //   let bettaOne = 0;
    //
    //   numbers.forEach(number=>{
    //     let x = number[0];
    //     let y = number[1];
    //
    //     sum_x += x;
    //     sum_y += y;
    //   })
    //   bettaOne = getBOne(numbers);
    //   bettaZero = (sum_y/n) - (bettaOne*sum_x)/n;
    //   bettaZero = Math.round(bettaZero * 1000)/1000;
    //
    //   return bettaZero;
    // }

}
module.exports =(Statistics);
//var linkedList = new LinkedList();

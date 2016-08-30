process.env.NODE_ENV = 'test';

let chai = require('chai');
let Statistics = require('../../libraries/statistics');
var assert = chai.assert;

// chai.use(chaiHttp);

describe('MEAN', () => {
    beforeEach((done) => {
      done();
    });

    describe('getMean with no params', function() {
      it('List should start empty', function() {
        let statistics = new Statistics();
        let mean = statistics.getMean();
        assert.equal(mean, null);
      });
    });

    describe('getMean with a number', function() {
      it('List should start empty', function() {
        let statistics = new Statistics();
        let mean = statistics.getMean(5);
        assert.equal(mean, null);
      });
    });

    describe('getMean with a letter', function() {
      it('List should start empty', function() {
        let statistics = new Statistics();
        let mean = statistics.getMean('a');
        assert.equal(mean, null);
      });
    });

    describe('getMean with a bad array', function() {
      it('List should start empty', function() {
        let statistics = new Statistics();
        let mean = statistics.getMean([4,'a']);
        assert.equal(mean, null);
      });
    });

    describe('getMean with good data', function() {
      it('List should start empty', function() {
        let numbers = [2,3,4,4,5,6,6,7,7,8,10,10];
        let statistics = new Statistics();
        let mean = statistics.getMean(numbers);
        assert.equal(mean, 6);
      });
    });


});

describe('Covariance', () => {
    beforeEach((done) => {
      done();
    });

    // describe('getCovariance with no params', function() {
    //   it('List should start empty', function() {
    //     let statistics = new Statistics();
    //     let Covariance = statistics.getCovariance();
    //     assert.equal(Covariance, null);
    //   });
    // });

    describe('Get covariance with good data', function() {
      it('List should start empty', function() {
        let numbers = [[2,1],[3,3],[4,2],[4,4],[5,4],[6,4],[6,6],[7,4],[7,6],[8,7],[10,9],[10,10]];
        let statistics = new Statistics();
        let covariance = statistics.getCovariance(numbers);
        assert.equal(covariance, 5.92);
      });
    });


});

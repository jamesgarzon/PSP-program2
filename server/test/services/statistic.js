process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');
let should = chai.should();
let fs = require('fs');

chai.use(chaiHttp);

describe('Statistics', () => {
    beforeEach((done) => {
        // Book.remove({}, (err) => {
           done();
        // });
    });

  /*
  * Test the /POST route
  */
  describe('/POST statistics/mean', () => {
      it('it should not POST a book without pages field', (done) => {
        let numbers = [4,4,4,4];
        chai.request(server)
            .post('/statistics/mean')
            .send(numbers)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('number');
                res.body.should.be.eql(4);
                // res.body.should.have.property('errors');
                // res.body.errors.should.have.property('pages');
                // res.body.errors.pages.should.have.property('kind').eql('required');
              done();
            });
      });

  });

  /*
  * Test the /POST route
  */
  describe('/POST statistics/regression', () => {
      it('it should not POST a book without pages field', (done) => {
        chai.request(server)
            .post('/statistics/regression')
            .attach('data', './server/test/data/test1.txt')
            // .send({})
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object'); 
                res.body.should.have.property('bZero'); 
                res.body.should.have.property('bOne'); 
                res.body.bZero.should.be.a('number'); 
                res.body.bZero.should.equal(-22.55);
                res.body.bOne.should.be.a('number'); 
                res.body.bOne.should.equal(1.73);
              done();
            });
      });

  });


      /*
  * Test the /POST route
  */
  describe('/POST statistics/correlation', () => {
      it('it should not POST a book without pages field', (done) => {
        let numbers = [ [130, 186] , [650, 699], [99, 132], [150, 272], [128, 291], [302, 331], [95, 199], [945, 1890], [368, 788], [961, 1601]];
        // let answer = { "bZero" : -0.917,"bOne": 0.986 };
        chai.request(server)
            .post('/statistics/correlation')
            // .send(numbers)
            .attach('data', './server/test/data/test1.txt')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object'); 
                res.body.should.have.property('r'); 
                res.body.should.have.property('rSquare'); 
                res.body.r.should.be.a('number'); 
                res.body.r.should.equal(0.9545);
                res.body.rSquare.should.be.a('number'); 
                res.body.rSquare.should.equal(0.9111);
              done();
            });
      });

  });

  /*
  * Test the /POST route
  */
  describe('/POST statistics/estimate', () => {
      it('it should not POST a book without pages field', (done) => {
        let list = [ [130, 186] , [650, 699], [99, 132], [150, 272], [128, 291], [302, 331], [95, 199], [945, 1890], [368, 788], [961, 1601]];
        // let answer = { "bZero" : -0.917,"bOne": 0.986 };
        chai.request(server)
            .post('/statistics/estimate')
            .attach('data', './server/test/data/test1.txt')
            .field('xEstimate', 386)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('number'); 
                res.body.should.equal(644.429);
              done();
            });
      });

  });

});

process.env.NODE_ENV = 'test';

let chai = require('chai');
let LinkedList = require('../libraries/linkedList');
var assert = chai.assert;

// chai.use(chaiHttp);

describe('LinkedList', () => {
    beforeEach((done) => {
      done();
    });

    describe('Get empty list', function() {
      it('List should start empty', function() {
        let linkedList = new LinkedList();
        let size = linkedList.getSize();
        assert.equal(size, 0);
      });
    });

    describe('Add one element', function() {
      it('List must be equals to [5]', function() {
        let linkedList = new LinkedList();
        linkedList.add(5);
        let list = linkedList.toString();
        assert.equal(list, '[5]');
      });
    });

    describe('Add three elements', function() {
      it('List must be equals to [5]', function() {
        let linkedList = new LinkedList();
        linkedList.add(5);
        linkedList.add(6);
        linkedList.add(7);
        let list = linkedList.toString();
        assert.equal(list, '[5,6,7]');
      });
    });

    describe('Get size list with one element', function() {
      it('It should have a size of 1', function() {
        let linkedList = new LinkedList();
        linkedList.add(5);
        let size = linkedList.getSize();
        assert.equal(size, 1);
      });
    });

    describe('Get size list with seven elements', function() {
      it('It should have a size of 7', function() {
        let linkedList = new LinkedList();
        linkedList.add(5);
        linkedList.add(7);
        linkedList.add(14);
        linkedList.add(45);
        linkedList.add(78);
        linkedList.add(96);
        linkedList.add(77);
        let size = linkedList.getSize();
        assert.equal(size, 7);
      });
    });









  /*
  * Test the /POST route
  */
  // describe('/POST book', () => {
  //     it('it should not POST a book without pages field', (done) => {
  //       let numbers = [4,4,4,4,];
  //
  //       chai.request(server)
  //           .post('/statistics')
  //           .send(numbers)
  //           .end((err, res) => {
  //               res.should.have.status(200);
  //               res.body.should.be.a('number');
  //               res.body.should.be.eql(4);
  //               // res.body.should.have.property('errors');
  //               // res.body.errors.should.have.property('pages');
  //               // res.body.errors.pages.should.have.property('kind').eql('required');
  //             done();
  //           });
  //     });
  //
  // });
});

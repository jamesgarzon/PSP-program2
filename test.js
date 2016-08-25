var expect = require('chai').expect;
var LinkedList = require('./linkedList');
var linkedList = new LinkedList();
describe('addList', function () {
	it('should pass when add element to list', function(){
		linkedList.add(89);
		expect(true).to.be.true;
	})
})

describe('A basic test', function () {
	it('should pass when everything is okay', function(){
		expect(true).to.be.true;
	})
})
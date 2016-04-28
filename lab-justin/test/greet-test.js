'use-strict'

const greet = require(__dirname + '/../lib/index');
const assert = require('assert');

process.argv[2] = 'abc';


describe('test module lib/index.js', function(){

  describe('test function greetPeople()', function(){
	it('should return HELL-O' , function(){
				// assert.equal(greet(), 'hello Justin');
	  assert.equal(greet(), 'hello ' + process.argv[2]);

	});
  });
});

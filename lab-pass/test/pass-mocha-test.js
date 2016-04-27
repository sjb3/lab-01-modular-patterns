'use strict';

const assert = require('assert');
const passMocha = require(__dirname + '/../lib/pass-mocha');

describe('testing module pass-mocha', function(){
  describe('testing function passMocha()', function(){
    it('should return "success"', function(){
      const result = passMocha();
      assert.equal(result, 'pass');
    });
  });
});

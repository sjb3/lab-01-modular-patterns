'use strict';

const assert = require('assert');
const failMocha = require(__dirname + '/../lib/fail-mocha');

describe('testing module fail-mocha', function(){
  describe('testing function failMocha()', function(){
    it('should return "success"', function(){
      const result = failMocha();
      assert.equal(result, 'success');
    });
  });
});

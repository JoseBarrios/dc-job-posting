'use strict'

var assert = require('assert');
var JobPosting = require('../index.js');

describe('JobPosting.isNumber', function() {
  it('should inheret Thing static method isNumber', function() {
    assert.equal(JobPosting.isNumber(1), true);
    assert.equal(JobPosting.isNumber('x'), false);
  });
});

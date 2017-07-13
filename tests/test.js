'use strict'

var assert = require('assert');
var JobPosting = require('../index.js');

describe('JobPosting.isNumber', function() {
  it('should inheret Thing static method isNumber', function() {
    assert.equal(JobPosting.isNumber(1), true);
    assert.equal(JobPosting.isNumber('x'), false);
  });
});

describe('jobPosting.educationRequirements', function() {
  it('should be set as an array, even if value passed is not', function() {
    let model = {};
    let jobPosting = new JobPosting(model)
    assert.deepEqual(jobPosting.educationRequirements, []);

    model.educationRequirements = ['Bachelor Degree'];
    jobPosting = new JobPosting(model)
    assert.deepEqual(jobPosting.educationRequirements, ['Bachelor Degree']);

    model.educationRequirements = 'Bachelor Degree';
    jobPosting = new JobPosting(model)
    assert.deepEqual(jobPosting.educationRequirements, ['Bachelor Degree']);
  });
});

describe('jobPosting.experienceRequirements', function() {
  it('should be set as an array, even if value passed is not', function() {
    let model = {};
    model.experienceRequirements = null;
    let jobPosting = new JobPosting(model)
    assert.deepEqual(jobPosting.experienceRequirements, []);

    model.experienceRequirements = ['Experience'];
    jobPosting = new JobPosting(model)
    assert.deepEqual(jobPosting.experienceRequirements, ['Experience']);

    model.experienceRequirements = 'Experience';
    jobPosting = new JobPosting(model)
    assert.deepEqual(jobPosting.experienceRequirements, ['Experience']);
  });
});

describe('jobPosting.qualifications', function() {
  it('should be set as an array, even if value passed is not', function() {
    let model = {};
    let jobPosting = new JobPosting(model)
    assert.deepEqual(jobPosting.qualifications, []);

    model.qualifications = 'qualification';
    jobPosting = new JobPosting(model)
    assert.deepEqual(jobPosting.qualifications, ['qualification']);

    model.qualifications = ['qualification'];
    jobPosting = new JobPosting(model)
    assert.deepEqual(jobPosting.qualifications, ['qualification']);
  });
});

describe('jobPosting.responsibilities', function() {
  it('should be set as an array, even if value passed is not', function() {
    let model = {};
    model.responsibilities = 'responsibilities';
    let jobPosting = new JobPosting(model)
    assert.deepEqual(jobPosting.responsibilities, ['responsibilities']);
    model.responsibilities = ['responsibilities'];
    jobPosting = new JobPosting(model)
    assert.deepEqual(jobPosting.responsibilities, ['responsibilities']);
    model.responsibilities = null;
    jobPosting = new JobPosting(model)
    assert.deepEqual(jobPosting.responsibilities, []);
  });
});

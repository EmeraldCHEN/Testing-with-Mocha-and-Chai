var chai = require('chai')
var should = chai.should() 
var expect = chai.expect 

describe('Test #1', function() { 
    beforeEach(function() {
      console.log('beforeEach hook');
    });

    afterEach(function() {
      console.log('afterEach hook');
    });

    let foo = 'bar';
    let beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
    it('should be of type string', function() {   
      foo.should.be.a('string');
      expect(foo).to.be.a('string');
      foo.should.equal('bar');
      foo.should.have.lengthOf(3);
      beverages.should.have.property('tea').with.lengthOf(3);
    });

    it('should have lenth of 3', function() {   
      foo.should.equal('bar');
      foo.should.have.lengthOf(3);
      beverages.should.have.property('tea').with.lengthOf(3);
    });  
});
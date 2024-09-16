const { expect } = require('chai');
const { add, subtract } = require('../../src/mathUtils');

describe('Math Utils', function() {
  describe('add()', function() {
    it('should add two positive numbers correctly', function() {
      expect(add(2, 3)).to.equal(5);
    });

    it('should add a positive number and a negative number correctly', function() {
      expect(add(5, -3)).to.equal(2);
    });

    it('should add two negative numbers correctly', function() {
      expect(add(-2, -3)).to.equal(-5);
    });

    it('should add zero correctly', function() {
      expect(add(0, 0)).to.equal(0);
      expect(add(0, 5)).to.equal(5);
      expect(add(5, 0)).to.equal(5);
    });

    it('should handle non-numeric inputs', function() {
      expect(() => add(1, 'a')).to.throw(Error, 'Invalid input');
      expect(() => add('a', 1)).to.throw(Error, 'Invalid input');
      expect(() => add(null, 1)).to.throw(Error, 'Invalid input');
      expect(() => add(1, undefined)).to.throw(Error, 'Invalid input');
      expect(() => add({}, 1)).to.throw(Error, 'Invalid input');
    });

    it('should handle large numbers correctly', function() {
      expect(add(1e+20, 1e+20)).to.equal(2e+20);
    })
    
    it('should add two floating point numbers correctly', function() {
      expect(add(1.1, 2.2)).to.be.closeTo(3.3, 0.0001); // Using closeTo for floating point precision
    });
  });

  describe('subtract()', function() {
    it('should subtract two positive numbers correctly', function() {
      expect(subtract(5, 3)).to.equal(2);
    });
   
    it('should subtract a negative number from a positive number correctly', function() {
      expect(subtract(5, -3)).to.equal(8);
    });
  
    it('should subtract two negative numbers correctly', function() {
      expect(subtract(-5, -3)).to.equal(-2);
    });
  
    it('should subtract zero correctly', function() {
      expect(subtract(5, 0)).to.equal(5);
      expect(subtract(0, 5)).to.equal(-5);
    });
  
    it('should handle non-numeric inputs by throwing an error', function() {
      expect(() => subtract(5, 'b')).to.throw(Error, 'Invalid input');
      expect(() => subtract('b', 5)).to.throw(Error, 'Invalid input');
      expect(() => subtract(null, 5)).to.throw(Error, 'Invalid input');
      expect(() => subtract(5, undefined)).to.throw(Error, 'Invalid input');
      expect(() => subtract({}, 5)).to.throw(Error, 'Invalid input');
    });
  
    it('should handle large numbers correctly', function() {
      expect(subtract(1e+20, 1e+19)).to.equal(9e+19);
    });
  });
});

const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('adds two numbers', function () {
  it('should return the sum of rounded values', function () {
    const output = calculateNumber(1, 3);
    assert.strictEqual(output, 4);
  });

  it('should return the sum of rounded values', function () {
    const output = calculateNumber(1, 3.7);
    assert.strictEqual(output, 5);
  });

  it('should return the sum of rounded values', function () {
    const output = calculateNumber(1, 3.7);
    assert.strictEqual(output, 5);
  });

  it('should return the sum of rounded values', function () {
    const output = calculateNumber(1.2, 3.7);
    assert.strictEqual(output, 5);
  });
  it('should return the sum of rounded values', function () {
    const output = calculateNumber(1.5, 3.7);
    assert.strictEqual(output, 6);
  });
});

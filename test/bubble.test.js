var assert = require('assert');
var bubbleSort = require('../lib/bubble');

describe('#bubbleSort', function() {
  it('swaps two numbers', function () {
    var input = [5, 2];
    var expected = [2, 5];
    var sorted = bubbleSort(input);
    assert.equal(sorted.length, expected.length)
    assert.equal(sorted[0], expected[0]);
    assert.equal(sorted[1], expected[1]);
  });
});

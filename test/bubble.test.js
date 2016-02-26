var assert = require('assert');
var bubbleSort = require('../lib/bubble');

describe('Bubble', function() {
  it('wired up', function () {
    assert.equal(bubbleSort(), 'hello');
  });
});

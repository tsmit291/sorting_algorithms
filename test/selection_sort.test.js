var assert = require('assert');
var selectSort = require('../lib/selection_sort');

describe('#selectSort', function() {
  describe('#swap', function () {
    it('swaps two numbers', function () {
      var input = [5, 2];
      var expected = [2, 5];
      var sortResults = selectSort.sort(input);
      assert.deepEqual(sortResults, expected);
    });
  })
  xit('sorts an array of three', function () {
    var input = [5, 2, 1];
    var expected = [1, 2, 5];
    var sortResults = selectSort.sort(input);
    assert.deepEqual(sortResults, expected);
  });
  xit('sorts an array of 8', function () {
    var input = [5, 2, 4, 3, 8, 10, 1, 0];
    var expected = [0, 1, 2, 3, 4, 5, 8, 10];
    var sortResults = selectSort.sort(input);
    assert.deepEqual(sortResults, expected);
  });
});

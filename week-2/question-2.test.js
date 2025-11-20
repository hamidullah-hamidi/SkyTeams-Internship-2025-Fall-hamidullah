const { largestSmallest } = require('./question-2');

test('test for finding largest and smallest number', () => {
  expect(largestSmallest(1, 2, 3)).toEqual([1, 3]);
});

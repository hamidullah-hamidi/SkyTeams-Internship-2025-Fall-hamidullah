const evenNumbersInARange = require('./question-22');

describe('evenNumbersInARange', () => {
  test('should return even numbers between 1 and 10', () => {
    expect(evenNumbersInARange(1, 10)).toEqual([2, 4, 6, 8, 10]);
  });

  test('should return an empty array when no even numbers exist', () => {
    expect(evenNumbersInARange(1, 3)).toEqual([2]);
    expect(evenNumbersInARange(5, 5)).toEqual([]);
  });

  test('should work when start is even', () => {
    expect(evenNumbersInARange(2, 8)).toEqual([2, 4, 6, 8]);
  });

  test('should work when start and end are the same and even', () => {
    expect(evenNumbersInARange(6, 6)).toEqual([6]);
  });

  test('should return empty array if start > end', () => {
    expect(evenNumbersInARange(10, 1)).toEqual([]);
  });

  test('should include negative even numbers', () => {
    expect(evenNumbersInARange(-5, 5)).toEqual([-4, -2, 0, 2, 4]);
  });
});

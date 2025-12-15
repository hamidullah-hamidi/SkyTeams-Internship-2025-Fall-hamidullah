const reverseNumber = require('./question-19');

describe('reverseNumber', () => {
  test('should reverse a positive number', () => {
    expect(reverseNumber(1234)).toBe(4321);
  });

  test('should reverse a number with trailing zeros', () => {
    expect(reverseNumber(1200)).toBe(21);
  });

  test('should reverse a single-digit number', () => {
    expect(reverseNumber(7)).toBe(7);
  });

  test('should reverse zero', () => {
    expect(reverseNumber(0)).toBe(0);
  });

  test('should reverse a negative number', () => {
    expect(reverseNumber(-987)).toBe(-789);
  });

  test('should reverse a large number', () => {
    expect(reverseNumber(987654321)).toBe(123456789);
  });
});

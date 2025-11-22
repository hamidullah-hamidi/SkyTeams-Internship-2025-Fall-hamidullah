const sumOfNumber = require('./question-17');

describe('sumOfNumber', () => {
  test('should return 15 for input 5', () => {
    expect(sumOfNumber(5)).toBe(15);
  });

  test('should return 1 for input 1', () => {
    expect(sumOfNumber(1)).toBe(1);
  });

  test('should return 0 for input 0', () => {
    expect(sumOfNumber(0)).toBe(0);
  });

  test('should return correct sum for larger numbers', () => {
    expect(sumOfNumber(10)).toBe(55);
  });

  test('should return NaN for negative numbers', () => {
    expect(sumOfNumber(-5)).toBeNaN();
  });
});

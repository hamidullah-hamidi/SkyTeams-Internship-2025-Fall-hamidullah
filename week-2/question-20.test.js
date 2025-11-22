const countDigits = require('./question-20');

describe('countDigits', () => {
  test('should count digits of a normal number', () => {
    expect(countDigits(786)).toBe(3);
  });

  test('should return 1 for single digit numbers', () => {
    expect(countDigits(5)).toBe(1);
  });

  test('should count digits of large numbers', () => {
    expect(countDigits(123456789)).toBe(9);
  });

  test('should handle zero correctly', () => {
    expect(countDigits(0)).toBe(1);
  });

  test("should count digits of negative numbers (current logic treats '-' as a digit)", () => {
    expect(countDigits(-123)).toBe(4);
  });
});

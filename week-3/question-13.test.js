import { describe, test, expect } from 'vitest';
import { powerOfNumber } from './question-13.js';

describe('powerOfNumber', () => {
  test('should return correct power for positive exponent', () => {
    expect(powerOfNumber(2, 5)).toBe(32);
    expect(powerOfNumber(3, 3)).toBe(27);
    expect(powerOfNumber(5, 0)).toBe(1);
  });

  test('should handle zero base correctly', () => {
    expect(powerOfNumber(0, 5)).toBe(0);
    expect(powerOfNumber(0, 0)).toBe(1);
  });

  test('should handle negative exponent', () => {
    expect(powerOfNumber(2, -3)).toBeCloseTo(0.125);
    expect(powerOfNumber(5, -2)).toBeCloseTo(0.04);
  });

  test('should handle negative base', () => {
    expect(powerOfNumber(-2, 3)).toBe(-8);
    expect(powerOfNumber(-2, 2)).toBe(4);
  });
});

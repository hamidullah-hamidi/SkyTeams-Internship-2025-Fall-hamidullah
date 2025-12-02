import { describe, test, expect } from 'vitest';
import { findFactorial } from './question-14.js';

describe('findFactorial', () => {
  test('should return correct factorial for positive numbers', () => {
    expect(findFactorial(5)).toBe(120);
    expect(findFactorial(6)).toBe(720);
    expect(findFactorial(1)).toBe(1);
  });

  test('should return 1 for 0', () => {
    expect(findFactorial(0)).toBe(1);
  });

  test('should return undefined for negative numbers', () => {
    expect(findFactorial(-5)).toBeUndefined();
    expect(findFactorial(-1)).toBeUndefined();
  });
});

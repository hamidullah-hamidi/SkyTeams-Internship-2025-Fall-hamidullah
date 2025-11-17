import { describe, test, expect } from 'vitest';
import { isArmstrong } from './question-15.js';

describe('isArmstrong', () => {
  test('should detect Armstrong numbers correctly', () => {
    expect(isArmstrong(153)).toBe(true);
    expect(isArmstrong(370)).toBe(true);
    expect(isArmstrong(371)).toBe(true);
    expect(isArmstrong(407)).toBe(true);
  });

  test('should return false for non-Armstrong numbers', () => {
    expect(isArmstrong(123)).toBe(false);
    expect(isArmstrong(200)).toBe(false);
  });

  test('should return 1-digit numbers as Armstrong (by definition)', () => {
    expect(isArmstrong(5)).toBe(true);
    expect(isArmstrong(9)).toBe(true);
  });

  test('should return undefined for negative numbers', () => {
    expect(isArmstrong(-5)).toBeUndefined();
    expect(isArmstrong(-153)).toBeUndefined();
  });
});

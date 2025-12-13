import { describe, it, expect } from 'vitest';
import { maxSubArraySum } from './question-15';

describe('Kadane’s Algorithm – Max Subarray Sum', () => {
  it('should return the correct max sum for mixed numbers', () => {
    const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    expect(maxSubArraySum(arr)).toBe(6);
  });

  it('should handle all negative numbers', () => {
    const arr = [-5, -2, -1, -7];
    expect(maxSubArraySum(arr)).toBe(-1);
  });

  it('should handle all positive numbers', () => {
    const arr = [1, 2, 3, 4];
    expect(maxSubArraySum(arr)).toBe(10);
  });

  it('should return the element for single-item array', () => {
    const arr = [7];
    expect(maxSubArraySum(arr)).toBe(7);
  });

  it('should handle array with two numbers', () => {
    const arr = [4, -1];
    expect(maxSubArraySum(arr)).toBe(4);
  });
});

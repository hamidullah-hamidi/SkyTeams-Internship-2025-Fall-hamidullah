import { describe, it, expect } from 'vitest';
import { factorial } from './question-23';

describe('factorial', () => {
  it('should return 120 for input 5', () => {
    expect(factorial(5)).toBe(120);
  });

  it('should return 1 for input 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('should return 1 for input 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('should throw error for negative numbers', () => {
    expect(() => factorial(-3)).toThrow();
  });
});

import { describe, it, expect } from 'vitest';
import { evalRPN } from './question-4.js';

describe('evalRPN', () => {
  it('should evaluate simple addition', () => {
    expect(evalRPN(['2', '1', '+'])).toBe(3);
    expect(evalRPN(['5', '3', '-'])).toBe(2);
    expect(evalRPN(['4', '3', '*'])).toBe(12);
    expect(evalRPN(['10', '3', '/'])).toBe(3);
    expect(evalRPN(['7', '2', '/'])).toBe(3);
  });

  it('should evaluate the given example', () => {
    expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9);
  });

  it('should evaluate complex expression', () => {
    expect(evalRPN(['3', '4', '+', '2', '*', '7', '/'])).toBe(2);
  });

  it('should handle single number', () => {
    expect(evalRPN(['42'])).toBe(42);
  });
});

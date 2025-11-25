import { describe, test, expect } from 'vitest';
import { fibonacciSequence } from './question-16.js';

describe('fibonacciSequence', () => {
  test('should return first 7 Fibonacci numbers', () => {
    expect(fibonacciSequence(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });

  test('should return first Fibonacci number if num is 1', () => {
    expect(fibonacciSequence(1)).toEqual([0]);
  });

  test('should return empty array if num is 0', () => {
    expect(fibonacciSequence(0)).toEqual([]);
  });

  test('should return first 2 Fibonacci numbers if num is 2', () => {
    expect(fibonacciSequence(2)).toEqual([0, 1]);
  });
});

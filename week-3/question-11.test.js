import { describe, test, expect } from 'vitest';
import { allPrimeNumbers } from './question-11.js';

describe('allPrimeNumbers', () => {
  test('should return primes up to given number', () => {
    expect(allPrimeNumbers(10)).toEqual([2, 3, 5, 7]);
    expect(allPrimeNumbers(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });

  test('should return empty array for numbers less than 2', () => {
    expect(allPrimeNumbers(1)).toEqual([]);
    expect(allPrimeNumbers(0)).toEqual([]);
    expect(allPrimeNumbers(-10)).toEqual([]);
  });

  test('should handle small numbers correctly', () => {
    expect(allPrimeNumbers(2)).toEqual([2]);
    expect(allPrimeNumbers(3)).toEqual([2, 3]);
  });
});

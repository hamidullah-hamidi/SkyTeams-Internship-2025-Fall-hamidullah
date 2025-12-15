import { describe, test, expect } from 'vitest';
import { isPalindrome } from './question-12.js';

describe('isPalindrome', () => {
  test('should return true for palindrome numbers', () => {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(444)).toBe(true);
    expect(isPalindrome(7)).toBe(true);
  });

  test('should return false for non-palindrome numbers', () => {
    expect(isPalindrome(123)).toBe(false);
    expect(isPalindrome(98)).toBe(false);
  });

  test('should handle numbers with trailing zeros', () => {
    expect(isPalindrome(100)).toBe(false);
  });

  test('should return false for negative numbers', () => {
    expect(isPalindrome(-121)).toBe(false);
  });
});

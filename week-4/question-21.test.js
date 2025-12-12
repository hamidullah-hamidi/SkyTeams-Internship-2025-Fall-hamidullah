import { describe, expect, test } from 'vitest';
import longestPalindrome from './question-21.js';

describe('longestPalindrome', () => {
  test('should return empty string for empty input', () => {
    expect(longestPalindrome('')).toBe('');
  });

  test('should return single character', () => {
    expect(longestPalindrome('a')).toBe('a');
    expect(longestPalindrome('b')).toBe('b');
  });

  test('should return the whole string if all characters are same', () => {
    expect(longestPalindrome('aaa')).toBe('aaa');
    expect(longestPalindrome('bb')).toBe('bb');
  });

  test('should find odd length palindrome', () => {
    expect(longestPalindrome('aba')).toBe('aba');
  });

  test('should find even length palindrome', () => {
    expect(longestPalindrome('abba')).toBe('abba');
  });

  test('should handle "cbbd"', () => {
    expect(longestPalindrome('cbbd')).toBe('bb');
  });

  test('should handle "baab"', () => {
    expect(longestPalindrome('baab')).toBe('baab');
  });
});

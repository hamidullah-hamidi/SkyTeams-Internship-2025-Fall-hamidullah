import { describe, it, expect } from 'vitest';
import { stringCompression } from './question-9';

describe('stringCompression', () => {
  it('should compress a string with consecutive characters', () => {
    expect(stringCompression('aabcccccaaa')).toBe('a2b1c5a3');
    expect(stringCompression('aaabb')).toBe('a3b2');
    expect(stringCompression('abcd')).toBe('a1b1c1d1');
  });

  it('should handle empty string', () => {
    expect(stringCompression('')).toBe('');
  });

  it('should handle single character string', () => {
    expect(stringCompression('a')).toBe('a1');
  });

  it('should handle string with all same characters', () => {
    expect(stringCompression('aaaaa')).toBe('a5');
  });
});

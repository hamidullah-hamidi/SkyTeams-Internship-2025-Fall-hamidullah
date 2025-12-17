import { describe, it, expect } from 'vitest';
import { stringPattern } from './question-13';

describe('stringPattern', () => {
  it('should return true for valid pattern match', () => {
    expect(stringPattern('abba', 'dog cat cat dog')).toBe(true);
    expect(stringPattern('abc', 'one two three')).toBe(true);
    expect(stringPattern('aaaa', 'x x x x')).toBe(true);
  });

  it('should return false for invalid pattern match', () => {
    expect(stringPattern('abba', 'dog cat cat fish')).toBe(false);
    expect(stringPattern('abba', 'dog dog dog dog')).toBe(false);
    expect(stringPattern('abc', 'one one one')).toBe(false);
  });

  it('should return false if lengths do not match', () => {
    expect(stringPattern('abba', 'dog cat cat')).toBe(false);
    expect(stringPattern('ab', 'dog cat cat')).toBe(false);
  });

  it('should handle single-character pattern', () => {
    expect(stringPattern('a', 'dog')).toBe(true);
    expect(stringPattern('a', 'dog cat')).toBe(false);
  });
});

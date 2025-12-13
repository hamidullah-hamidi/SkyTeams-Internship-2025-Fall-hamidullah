import { describe, it, expect } from 'vitest';
import { isRotated } from './question-11';

describe('isRotated', () => {
  it('should return true for valid rotations', () => {
    expect(isRotated('waterbottle', 'erbottlewat')).toBe(true);
    expect(isRotated('abcde', 'cdeab')).toBe(true);
    expect(isRotated('aaaa', 'aaaa')).toBe(true);
  });

  it('should return false for strings that are NOT rotations', () => {
    expect(isRotated('waterbottle', 'bottlewaterx')).toBe(false);
    expect(isRotated('abcd', 'acbd')).toBe(false);
    expect(isRotated('abc', 'cabd')).toBe(false);
  });

  it('should return false when lengths differ', () => {
    expect(isRotated('abc', 'ab')).toBe(false);
    expect(isRotated('hello', 'helloo')).toBe(false);
  });

  it('should handle single-character strings', () => {
    expect(isRotated('a', 'a')).toBe(true);
    expect(isRotated('a', 'b')).toBe(false);
  });
});

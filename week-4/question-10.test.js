// isUniqueString.test.js
import { isUniqueString } from './isUniqueString.js';

describe('isUniqueString', () => {
  test('should return false for strings with repeated characters', () => {
    expect(isUniqueString('hello')).toBe(false);
    expect(isUniqueString('aabbcc')).toBe(false);
    expect(isUniqueString('test')).toBe(false);
  });

  test('should return true for strings with all unique characters', () => {
    expect(isUniqueString('abc')).toBe(true);
    expect(isUniqueString('xyz')).toBe(true);
    expect(isUniqueString('world')).toBe(true);
  });

  test('should return true for empty string', () => {
    expect(isUniqueString('')).toBe(true);
  });

  test('should return true for single-character string', () => {
    expect(isUniqueString('a')).toBe(true);
  });
});

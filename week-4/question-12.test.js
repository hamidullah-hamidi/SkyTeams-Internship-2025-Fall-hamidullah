import { describe, it, expect } from 'vitest';
import { charactersFrequency } from './question-12';

describe('charactersFrequency', () => {
  it('should count character frequencies correctly', () => {
    expect(charactersFrequency('banana')).toEqual({
      b: 1,
      a: 3,
      n: 2,
    });
  });

  it('should return empty object for empty string', () => {
    expect(charactersFrequency('')).toEqual({});
  });

  it('should work with strings that have all unique characters', () => {
    expect(charactersFrequency('abc')).toEqual({
      a: 1,
      b: 1,
      c: 1,
    });
  });

  it('should work with repeated characters', () => {
    expect(charactersFrequency('aaaa')).toEqual({
      a: 4,
    });
  });

  it('should handle numbers inside the string', () => {
    expect(charactersFrequency('a1a1')).toEqual({
      a: 2,
      1: 2,
    });
  });

  it('should handle uppercase and lowercase separately', () => {
    expect(charactersFrequency('AaA')).toEqual({
      A: 2,
      a: 1,
    });
  });
});

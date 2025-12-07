import { describe, it, expect } from 'vitest';
import { permutationsOfString } from './question-14';

describe('permutationsOfString', () => {
  it('should return all permutations of "a"', () => {
    expect(permutationsOfString('a')).toEqual(['a']);
  });

  it('should return all permutations of "ab"', () => {
    expect(permutationsOfString('ab')).toEqual(['ab', 'ba'].sort());
  });

  it('should return all permutations of "abc"', () => {
    const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    expect(permutationsOfString('abc')).toEqual(expected.sort());
  });

  it('should return all permutations of empty string', () => {
    expect(permutationsOfString('')).toEqual(['']);
  });
});

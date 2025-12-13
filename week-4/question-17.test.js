import { describe, it, expect } from 'vitest';
import { sentenceAbbreviation } from './question-17';

describe('Sentence Abbreviation', () => {
  it('should abbreviate a sentence with multiple words', () => {
    expect(sentenceAbbreviation('I am learning JavaScript')).toBe('I a l J');
  });

  it('should handle a single word', () => {
    expect(sentenceAbbreviation('Hello')).toBe('H');
  });

  it('should handle multiple words', () => {
    expect(sentenceAbbreviation('This is a test')).toBe('T i a t');
  });

  it('should return empty string for empty input', () => {
    expect(sentenceAbbreviation('')).toBe('');
  });
});

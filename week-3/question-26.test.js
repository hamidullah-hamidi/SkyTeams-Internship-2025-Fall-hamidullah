import { describe, it, expect } from 'vitest';
import { convertDecimalToBinary } from './question-26.js';

describe('convertDecimalToBinary', () => {
  it('should convert positive decimal numbers to binary', () => {
    expect(convertDecimalToBinary(10)).toBe('1010');
    expect(convertDecimalToBinary(5)).toBe('101');
    expect(convertDecimalToBinary(1)).toBe('1');
  });

  it('should return "0" when input is 0', () => {
    expect(convertDecimalToBinary(0)).toBe(0);
  });

  it(' negative numbers ', () => {
    expect(convertDecimalToBinary(-10)).toBe('Insert positive number');
  });
});

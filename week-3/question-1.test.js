import { expect, test } from 'vitest';
import { countVowels } from './question-1';

test('count the vowels in the string', () => {
  expect(countVowels('hamid')).toBe(2);
  expect(countVowels('SkyTeams Internship')).toBe(5);
  expect(countVowels('HELLO WORLD')).toBe(3);
  expect(countVowels('')).toBe(0);
  expect(countVowels('bcdfghjklmnpqrstvwxyz')).toBe(0);
  expect(countVowels('AeIoU')).toBe(5);
  expect(countVowels('abcdefghijklmnopqrstuvwxyz')).toBe(5);
});

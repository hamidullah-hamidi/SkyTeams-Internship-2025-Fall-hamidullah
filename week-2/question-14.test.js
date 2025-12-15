const checkCharacterType = require('./question-14');

describe('checkCharacterType', () => {
  test('should identify vowels', () => {
    expect(checkCharacterType('a')).toBe('Vowel');
    expect(checkCharacterType('e')).toBe('Vowel');
    expect(checkCharacterType('i')).toBe('Vowel');
  });

  test('should identify consonants', () => {
    expect(checkCharacterType('b')).toBe('consonant');
    expect(checkCharacterType('z')).toBe('consonant');
  });

  test('should identify digits (number type only)', () => {
    expect(checkCharacterType(5)).toBe('digit');
    expect(checkCharacterType(0)).toBe('digit');
  });

  test('should identify special symbols', () => {
    expect(checkCharacterType('!')).toBe('special symbol');
    expect(checkCharacterType('@')).toBe('special symbol');
    expect(checkCharacterType('?')).toBe('special symbol');
  });

  test('should handle characters not in any list', () => {
    expect(checkCharacterType('x')).toBe('consonant');
  });

  test('should treat uppercase vowels as consonants (current logic)', () => {
    // چون فقط حروف کوچک در لیست است
    expect(checkCharacterType('A')).toBe('consonant');
  });
});

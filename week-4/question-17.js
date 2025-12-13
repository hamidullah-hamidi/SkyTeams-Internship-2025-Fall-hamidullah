// Author: hamidullah hamidi
// Date: 2025/07/11

// Question:  Sentence Abbreviation

// Description: Convert sentence into first-letter abbreviation.
// Example: "I am learning JavaScript" → "I a l J"

import { mySplit } from '../helpers/strings/mySplit.js';

export const sentenceAbbreviation = (sentence) => {
  if (sentence === '') return '';

  let abbreviation = '';

  const splitToWord = mySplit(sentence);

  for (let i = 0; i < splitToWord.length; i++) {
    abbreviation += splitToWord[i][0] + ' ';
  }

  return abbreviation.trim();
};

console.log(sentenceAbbreviation('I am learning JavaScript'));

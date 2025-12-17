// Author: hamidullah hamidi
// Date: 2025/03/11

// Question:  String Pattern Matching ("abba")

// Description: Check if sentence follows the pattern.
// Example: "dog cat cat dog" → True

import { mySplit } from '../helpers/strings/mySplit.js';

export const stringPattern = (pattern, sentence) => {
  const patternToWord = new Map();
  const wordToPattern = new Map();

  const arr = mySplit(sentence);

  if (pattern.length !== arr.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (patternToWord.has(pattern[i])) {
      if (patternToWord.get(pattern[i]) !== arr[i]) return false;
    } else patternToWord.set(pattern[i], arr[i]);
    if (wordToPattern.has(arr[i])) {
      if (wordToPattern.get(arr[i]) !== pattern[i]) return false;
    } else wordToPattern.set(arr[i], pattern[i]);
  }

  return true;
};

console.log(stringPattern('abba', 'dog cat cat dog'));

/* with obj:

const obj1 = {};
const obj2 = {};

if (obj1[pattern[i]]) {
  if (obj1[pattern[i]] !== arr[i]) return false;
} else obj1[pattern[i]] = arr[i];

if (obj2[arr[i]]) {
  if (obj2[arr[i]] !== pattern[i]) return false;
} else obj2[arr[i]] = pattern[i];

*/

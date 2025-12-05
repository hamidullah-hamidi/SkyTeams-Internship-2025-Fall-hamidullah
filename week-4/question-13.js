// Author: hamidullah hamidi
// Date: 2025/03/11

// Question:  String Pattern Matching ("abba")

// Description: Check if sentence follows the pattern.
// Example: "dog cat cat dog" → True

export const stringPattern = (pattern, sentence) => {
  const map1 = new Map();
  const map2 = new Map();

  const arr = sentence.split(' ');

  if (pattern.length !== arr.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (map1.has(pattern[i])) {
      if (map1.get(pattern[i]) !== arr[i]) return false;
    } else map1.set(pattern[i], arr[i]);
    if (map2.has(arr[i])) {
      if (map2.get(arr[i]) !== pattern[i]) return false;
    } else map2.set(arr[i], pattern[i]);
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

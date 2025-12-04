// Author: hamidullah hamidi
// Date: 2025/03/11

// Question:  Character Frequency Counter

// Description: Count occurrences of characters.
// Input: "banana" → {b:1, a:3, n:2}

export const charactersFrequency = (str) => {
  const obj = {};

  for (let el of str) {
    if (!obj[el]) obj[el] = 1;
    else obj[el] = obj[el] + 1;
  }

  return obj;
};

console.log(charactersFrequency('banana'));

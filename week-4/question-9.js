// Author: hamidullah hamidi
// Date: 2025/03/11

// Question:  String Compression

// Description: Compress using counts of consecutive characters.
// Example:
// "aabcccccaaa" → "a2b1c5a3";

export const stringCompression = (str) => {
  let compressed = '';

  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }

  return compressed;
};

console.log(stringCompression('aabcccccaaa'));

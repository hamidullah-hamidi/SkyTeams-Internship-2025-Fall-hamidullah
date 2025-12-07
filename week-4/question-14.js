// Author: hamidullah hamidi
// Date: 2025/07/11

// Question:  All Permutations of a String

// Description: Generate all permutations.
// Input: "abc" → abc, acb, bac, ...

export const permutationsOfString = (str) => {
  if (str.length <= 1) return [str];

  let result = [];

  for (let i = 0; i < str.length; i++) {
    const currentStr = str[i];

    const remaining = str.slice(0, i) + str.slice(i + 1);

    const permutations = permutationsOfString(remaining);

    for (let perm of permutations) {
      result.push(currentStr + perm);
    }
  }

  return result;
};

console.log(permutationsOfString('abc'));

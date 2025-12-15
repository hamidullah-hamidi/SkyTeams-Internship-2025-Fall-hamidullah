// Author: hamidullah hamidi
// Date: 2025/16/11

// Question: Count vowels in a string

// Description: Count the number of vowels (a, e, i, o, u) in a given string.
// Example:
// Input:
// "SkyTeams Internship"
// Output:
// 6

export function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let e of str.toLowerCase()) {
    if (vowels.includes(e)) count++;
  }

  return count;
}

console.log(countVowels('SkyTeams Internship'));

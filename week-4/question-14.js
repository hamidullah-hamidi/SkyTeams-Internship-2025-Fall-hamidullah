// Author: hamidullah hamidi
// Date: 2025/07/11

// Question:  All Permutations of a String

// Description: Generate all permutations.
// Input: "abc" → abc, acb, bac, ...

export const permutationsOfString = (str) => {
  if (str.length <= 1) return str;

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    const remaining = str.slice(0, i) + str.slice(i + 1);

    const permsOfRemaining = permutationsOfString(remaining);

    for (let perm of permsOfRemaining) {
      result.push(currentChar + perm);
    }
  }

  return result;
};

console.log(permutationsOfString('abc'));

//* without recursion
// let result = [''];

// for (let i = 0; i < str.length; i++) {
//   let tempList = [];
//   for (let j = 0; j < result.length; j++) {
//     let current = result[j];

//     for (let k = 0; k <= current.length; k++) {
//       let left = current.slice(0, k);
//       let right = current.slice(k, current.length);
//       let newChar = str[i];
//       let res = left + newChar + right;

//       tempList.push(res);
//       console.log(tempList);
//     }
//   }
//   result = tempList;
// }

// Author: hamidullah hamidi
// Date: 2025/13/12

// Question:  Merge Overlapping Intervals

// Input: [[1,3],[2,6],[8,10]] --> [[1,6],[8,10]]

export const mergeOverlappingIntervals = (arr) => {
  arr.sort((a, b) => a[0] - b[0]);

  let result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] <= result[result.length - 1][1]) {
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], arr[i][1]);
    } else result.push([arr[i][0], arr[i][1]]);
  }

  return result;
};

console.log(
  mergeOverlappingIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
  ])
);

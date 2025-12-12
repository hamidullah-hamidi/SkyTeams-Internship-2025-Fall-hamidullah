// Author: hamidullah hamidi
// Date: 2025/12/11

// Question:  Merge Overlapping Intervals

// Input: [[1,3],[2,6],[8,10]] --> [[1,6],[8,10]]

export const mergeOverlappingIntervals = (arr) => {
  let result = [];
  let firstSmallest = arr[0][0];
  let lastLargest = arr[0][0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] < firstSmallest) firstSmallest = arr[i][0];
    if (arr[i][1] > lastLargest) lastLargest = arr[i][1];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(firstSmallest)) result.push(arr[i]);
    if (arr[i].includes(lastLargest)) result.push(arr[i]);
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

// Author: hamidullah hamidi
// Date: 2025/07/11

// Question:  Kadane’s Algorithm (Max Subarray Sum)
// Example:
// [-2,1,-3,4,-1,2,1,-5,4] → 6

export const maxSubArraySum = (arr) => {
  let maxSum = arr[0];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > maxSum) maxSum = currentSum;
    if (currentSum < 0) currentSum = 0;
  }

  return maxSum;
};

console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

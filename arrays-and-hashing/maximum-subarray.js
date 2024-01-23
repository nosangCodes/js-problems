// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// O(n)
const getSumOfMaximumSubArray = (nums = []) => {
  let currSum = 0;
  let maxSum = Number.NEGATIVE_INFINITY;

  for (let num of nums) {
    // if (currSum < 0) {
    //   currSum = 0;
    // }
    // currSum += num;
    // if (currSum > maxSum) {
    //   maxSum = currSum;
    // }

    // make current sum 0 if it goes negative
    currSum = Math.max(currSum, 0);
    currSum += num;
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};

console.log(getSumOfMaximumSubArray([-1]));

// if you want to return the start and index also
const getMaximumSubArray = (nums = []) => {
  let currSum = 0;
  let maxSum = Number.NEGATIVE_INFINITY;
  let maxL = 0;
  let maxR = 0;
  let l = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currSum < 0) {
      currSum = 0;
      //   reset starting index
      l = i;
    }
    currSum += nums[i];
    if (maxSum < currSum) {
      maxSum = currSum;
      maxL = l;
      maxR = i;
    }
  }

  const resultSubarray = [];

  // print the sub array
  for (let i = maxL; i <= maxR; i++) {
    resultSubarray.push(nums[i]);
  }

  console.log("subarray", resultSubarray);
  return maxSum;
};

console.log(getMaximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// brute force O(n)^2
const twoSumBruteForce = (nums = [], target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return false;
};

// console.log(twoSumBruteForce([3,2,4], 6));

// using hash table
// O(n)
const twoSumOptimized = (nums = [], target) => {
  // to store value as key and index as value
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    // calculate the complement of current value
    const complement = target - nums[i];

    // check if the complement exists in the hash
    // then it means we have found a pair that sums up to the target
    if (complement in hash) {
      // return the pair
      return [hash[complement], i];
    }

    // store value and index in hash
    hash[nums[i]] = i;
  }

  //   if no pair found return false
  return false;
};

console.log(twoSumOptimized([2, 7, 11, 15], 9));

// Given an integer array nums,
// rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

const rotateArray = (nums = [], k = 0) => {
  for (let i = 0; i < k; i++) {
    // get the last element
    const lastEl = nums[nums.length - 1];
    // add it to the start of arr
    nums.unshift(lastEl);
    // pop the last element
    nums.pop();
  }
  return nums;
};

console.log(rotateArray([-1, -100, 3, 99], 2));

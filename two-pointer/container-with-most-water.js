// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Example 1
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

// O(n^2)
const calculate = (nums = []) => {
  let maxAmount = 0;
  let currentAmount = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      currentAmount = (j - i) * Math.min(nums[i], nums[j]);
      maxAmount = Math.max(maxAmount, currentAmount);
    }
  }

  return maxAmount;
};

// console.log(calculate([1, 1]));

// O(n)
// two pointer approach

const calculateUsingTwoPointer = (nums = []) => {
  let l = 0;
  let r = nums.length - 1;

  let maxAmount = 0;
  let currentAmount = 0;

  while (l < r) {
    currentAmount = Math.min(nums[l], nums[r]) * (r - l);
    maxAmount = Math.max(currentAmount, maxAmount);
    nums[l] > nums[r] ? r-- : l++;
  }

  return maxAmount;
};

console.log(calculateUsingTwoPointer([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// brute force O(n)^2
const checkDuplicate = (nums = []) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// console.log("contains duplicate elements", checkDuplicate([1, 2, 3, 4]));

// O(n logn)
const checkDuplicateOp = (nums = []) => {
  const sortedArr = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

console.log(
  "contains duplicate elements",
  checkDuplicateOp([, 1, 1, 3, 3, 4, 3, 2, 4, 2])
);

// O(n)
// using set
const checkDuplicateUsingSet = (nums = []) => {
  const seenSet = new Set();
  for (const element of nums) {
    if (seenSet.has(element)) {
      // found the duplicate element
      return true;
    }
    seenSet.add(element);
  }

  return false;
};

console.log(checkDuplicateUsingSet([1, 2, 3, 1]));

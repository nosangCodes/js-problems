// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// brute force O(n^2)
const calculateBruteForce = (nums = []) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let aggr = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        aggr = aggr * nums[j];
      }
    }
    result[i] = aggr;
  }

  console.log(result);
};

// calculateBruteForce((nums = [1, 2, 3, 4]));

// O(n)
const calulate = (nums = []) => {
  const n = nums.length;
  const prefixProducts = new Array(n).fill(1);
  const suffixProducts = new Array(n).fill(1);

  let prefixProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    prefixProducts[i] = prefixProduct;
    prefixProduct *= nums[i];
  }

  let suffixProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    suffixProducts[i] = suffixProduct;
    suffixProduct *= nums[i];
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    result[i] = suffixProducts[i] * prefixProducts[i];
  }

  return result;
};

console.log(calulate([-1, 1, 0, -3, 3]));

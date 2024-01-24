// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// brute force
const calculate = (nums = []) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          if (!result.some((arr) => arr.toString() === triplet.toString())) {
            result.push(triplet);
          }
        }
      }
    }
  }
  return result;
};

// console.log(calculate([-3, 3, 4, -3, 1, 2]));

const calculateThreeSum = (nums = []) => {
  console.log("input", nums);
  nums.sort((a, b) => a - b);
  console.log("🚀 ~ calculateThreeSum ~ sored nums:", nums);

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    // if it is not the first iteration and
    // previous number is equal to current number we skip the iteration to prevent duplicate entries
    if (i > 0 && element === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const tripletSum = nums[l] + nums[r] + element;
      if (0 > tripletSum) {
        l++;
      } else if (0 < tripletSum) {
        r--;
      } else {
        // found the triplet
        result.push([nums[l], nums[r], element]);
        l++;
        // if the left pointer is same as the prev one
        // increment the left pointer
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return result;
};

console.log(
  "output",
  calculateThreeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])
);
console.log("expected", [
  [-4, 0, 4],
  [-4, 1, 3],
  [-3, -1, 4],
  [-3, 0, 3],
  [-3, 1, 2],
  [-2, -1, 3],
  [-2, 0, 2],
  [-1, -1, 2],
  [-1, 0, 1],
]);

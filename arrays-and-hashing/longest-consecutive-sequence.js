// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

function longestConsecutive(nums = []) {
  if (nums.length === 0) return 0;
  let longestStreak = 0;

  const numSet = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    // check if the number is the start of a poptential sequence
    if (!numSet.has(nums[i] - 1)) {
      let currentNum = nums[i];
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentStreak++;
        currentNum++;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

// Example usage:
const nums1 = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums1)); // Output: 4

const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums2)); // Output: 9

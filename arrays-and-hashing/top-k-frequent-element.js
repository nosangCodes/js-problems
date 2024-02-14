// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

// O(n log * n)
const getTopKFrequentElements = (nums = [], k) => {
  nums = [1,2,1,1,2,2,]
  let hash = {};
  for (const el of nums) {
    hash[el] = (hash[el] || 0) + 1;
  }

  hash = Object.entries(hash).sort((a, b) => {
    return b[1] - a[1];
  });
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(hash[i][0]);
  }
  return result;
};

console.log(getTopKFrequentElements([1], 1));

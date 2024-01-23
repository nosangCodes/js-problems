// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// O(n^2)
const calculateBruteForce = (nums = []) => {
  let maxProfit = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let currentProfit = nums[j] - nums[i];
      if (currentProfit > maxProfit) {
        maxProfit = Math.max(maxProfit, currentProfit);
      }
    }
  }
  return maxProfit;
};

console.log(calculateBruteForce([7, 6, 4, 3, 1]));

// two pointer approach
// O(n)
const calculate = (nums = []) => {
  let buyPointer = 0;
  let sellPointer = 1;
  let maxProfit = 0;
  let profitIndexes = [];

  while (buyPointer < nums.length) {
    // potential profit
    if (nums[buyPointer] < nums[sellPointer]) {
      // update max profit
      maxProfit = Math.max(maxProfit, nums[sellPointer] - nums[buyPointer]);
      profitIndexes = [nums[buyPointer], nums[sellPointer]];
    } else {
      //  update buy pointer to current day
      buyPointer = sellPointer;
    }
    // update sell pointer to next day
    sellPointer++;
  }

  console.log("🚀 ~ calculate ~ profitIndexes:", profitIndexes);
  return maxProfit;
};

console.log(calculate([7, 1, 5, 3, 6, 4]));

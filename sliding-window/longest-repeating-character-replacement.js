// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

const calculate = (str = "", k) => {
  const count = {};
  let res = 0;
  let start = 0;
  let maxf = 0;

  for (let end = 0; end < str.length; end++) {
    // store the frequency of str
    count[str[end]] = (count[str[end]] || 0) + 1;

    // store the max frequency
    maxf = Math.max(maxf, count[str[end]]);

    // if the number of character's to change is greater than allowed (k)
    // we need to shrink the window from the start
    while (end - start + 1 - maxf > k) {
      // maintain frequency according to the window
      count[str[start]]--;
      start++;
    }

    res = Math.max(res, end - start + 1);
  }
  return res;
};

console.log(calculate("AABABBA", 1));

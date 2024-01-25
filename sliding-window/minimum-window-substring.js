// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

const solution = (s = "", t = "") => {
  if (t === "") return "";
  let countT = {},
    windowHash = {};

  let need = 0,
    have = 0;

  let res = [],
    reslen = Number.POSITIVE_INFINITY;

  let left = 0;

  for (let ch of t) {
    countT[ch] = (countT[ch] || 0) + 1;
  }
  need = Object.keys(countT).length;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    windowHash[ch] = (windowHash[ch] || 0) + 1;

    if (ch in countT && windowHash[ch] === countT[ch]) {
      have += 1;
    }

    while (have === need) {
      if (i - left + 1 < reslen) {
        res = [left, i];
        reslen = i - left + 1;
      }

      windowHash[s[left]]--;
      if (s[left] in countT && windowHash[s[left]] < countT[s[left]]) {
        have -= 1;
      }
      left++;
    }
  }
  return reslen !== Number.POSITIVE_INFINITY ? s.slice(res[0], res[1] + 1) : "";
};

console.log(solution("a", "aa"));

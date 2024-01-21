// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// O(n * log(n)),
const isAnagram = (s = "", t = "") => {
  if (s.length !== t.length) return false;

  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
};

console.log("is anagram", isAnagram("anagram", "nagaram"));

// O(n) time complexity
const isAnagramOp = (s = "", t = "") => {
  if (s.length !== t.length) return false;
  const sHash = {};

  //   keep all the character's frequencies of s

  for (ch of s) {
    // increment character's frequency by one
    sHash[ch] = (sHash[ch] || 0) + 1;
  }

  //    check of te all the character of c is in t
  // decrement the frequency after each success iteration
  for (ch of t) {
    if (!sHash[ch]) {
      return false;
    }
    sHash[ch] -= 1;
  }

  //   check if all the value of hash is "0"
  return Object.values(sHash).every((count) => count === 0);
};

console.log(isAnagramOp("rat", "cat"));

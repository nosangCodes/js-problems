// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// O(n)
const cleanStr = (str = "") => {
  return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
};

const checkPalindrome = (str = "") => {
  const clenedStr = cleanStr(str);

  // using two pointers
  let left = 0;
  let right = cleanStr.length - 1;

  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;

  //   using inbuilt methods
  //   return clenedStr === String(clenedStr).split("").reverse().join("");
};

console.log(checkPalindrome("1A man, a plan, a canal: Panama1"));

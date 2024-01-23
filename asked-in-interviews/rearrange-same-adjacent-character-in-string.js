// Assume you have a string with repeated characters. Now, rearrange the given string so that no two adjacent characters are the same. If this is not possible, return None.
// Also,  the output  and character count should remain same

// For example::

// - input string  "ppprqq"  gives output  ”pqrpqp”
// - input string  "pppq” gives output None

// O(n)
const rearrange = (str = "") => {
  // store the frequency of characters
  const charFreq = {};
  for (let ch of str) {
    charFreq[ch] = (charFreq[ch] || 0) + 1;
  }

  let index = 0;
  const result = [];
  // sorted it in descending order of their frequencies
  const sortedEntries = Object.entries(charFreq).sort((a, b) => b[1] - a[1]);
  for (const [char, count] of sortedEntries) {
    // check if the current char's count doesn't exceed the half of the str length
    // + 1 is for odd length of string when the count is strictly greater than half of the string
    if (count > Math.floor((str.length + 1) / 2)) {
      return "None";
    }

    // place the character in even indexes first
    for (let i = 0; i < count; i++) {
      result[index] = char;
      index += 2;

      //   when the index reaches the end of str
      // place the characters in the odd indexes
      if (index >= str.length) {
        index = 1;
      }
    }
  }

  return result.join("");
};

console.log("result", rearrange("aab"));

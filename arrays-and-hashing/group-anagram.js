// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

// O(n log * n)
const groupAnagram = (words = []) => {
  // sort each word from the words array
  const sortedWords = words.map((word) => word.split("").sort().join(""));

  // create a hash to store all the anagram of a word
  // key as the sorted word and values as the array of unsorted word of the key
  const hash = {};
  for (let i = 0; i < words.length; i++) {
    // check if the key exists
    if (hash[sortedWords[i]]) {
      // push the word if the key already exists
      hash[sortedWords[i]].push(words[i]);
    } else {
      // create an array with the new word
      hash[sortedWords[i]] = [words[i]];
    }
  }

  // return values of the hash
  return Object.values(hash);
};

console.log(groupAnagram(["a"]));

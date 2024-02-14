// Check to see if two provided strings are anagrams of eachother. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case --- Examples anagrams('rail safety', 'fairy tales') --> True anagrams('RAIL! SAFETY!', 'fairy tales') --> True anagrams('Hi there', 'Bye there') --> False

const cleanStr = (s = "") => {
  return s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
};

const isAnagram = (s, t) => {
  const cleanedS = cleanStr(s);
  const cleanedT = cleanStr(t);
  const hashS = {};

  if (cleanedS.length !== cleanedT.length) {
    return false;
  }

  for (let ch of cleanedS) {
    hashS[ch] = (hashS[ch] || 0) + 1;
  }

  for (let ch of cleanedT) {
    if (!hashS[ch]) {
      return false;
    }
    hashS[ch] -= 1;
  }

  return Object.values(hashS).every((count) => count === 0);
};

console.log("is-anagram", isAnagram("Hi there", "Bye there"));

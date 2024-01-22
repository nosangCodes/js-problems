// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:
// Input: ["neet","code","love","you"]
// Output:["neet","code","love","you"]

// Example 2:
// Input: ["we","say",":","yes"]
// Output: ["we","say",":","yes"]

// O(n) time complexity
class StringEncoderDecoder {
  constructor() {}
  encode(strList = []) {
    let result = "";
    for (let s of strList) {
      result += `${s.length}#${s}`;
    }
    return result;
  }
  decode(str = "") {
    const result = [];
    let i = 0;

    // iterate each word till the dilimeter
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      //   when the dilimeter is found get the length of the word
      const length = parseInt(str.substring(i, j), 10);
      //   set i as the start index of the word just after "#"
      i = j + 1;
      //   set j as the end index by adding length to the start index
      j = i + length;
      console.log("🚀 ~ StringEncoderDecoder ~ decode ~ j:", j);
      //   push the substring
      result.push(str.substring(i, j));
      console.log(str);
      //   set i as the start index of next word
      i = j;
    }

    return result;
  }
}

const encodeDecoder = new StringEncoderDecoder();

const encoded = encodeDecoder.encode(["neet", "code", "love", "you"]);
console.log("🚀 ~ encoded:", encoded);
const decoded = encodeDecoder.decode(encoded);
console.log("🚀 ~ decoded:", decoded);

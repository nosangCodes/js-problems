const check = (str = "") => {
  const hashMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack = [];

  for (const ch of str) {
    if (hashMap[ch]) {
      stack.push(hashMap[ch]);
    } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      // there was no open or close bracket for this
      return false;
    }
  }

  console.log("stack", stack);
  return stack.length === 0;
};

console.log(check("([][)"));

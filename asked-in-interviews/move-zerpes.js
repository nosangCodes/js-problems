// '01001110' -> "00001111"

const moveZeroes = (nums = 0) => {
  let zeroes = "",
    ones = "";
  for (let num of nums) {
    if (parseInt(num)) {
      ones += num;
    } else {
      zeroes += num;
    }
  }

  return [...zeroes.split(""), ...ones.split("")].join("");
};

console.log(moveZeroes("01001110"));

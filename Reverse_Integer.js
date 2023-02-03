/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

const reverse = function (x) {
  const arr = x.toString().split('').reverse();

  if (!arr.includes('-')) {
    const val = parseInt(arr.join(''));

    if (val >= 2147483647) {
      return 0;
    }

    return val;
  }

  let strVal = arr.join('');

  let negVal = -+parseInt(strVal);

  if (negVal <= -2147483647) {
    return 0;
  }

  return negVal;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));

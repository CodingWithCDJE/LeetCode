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

/*
Given an integer x, return true if x is a palindrome, and false otherwise.
*/

const isPalindrome = function (x) {
  let str = x.toString();
  for (let i = 0; i < x.length; i++) {
    if (str.charAt(i) === '-') return false;
  }

  let endIndex = str.length - 1;
  for (let t = 0; t < str.length; t++) {
    if (str.charAt(t) !== str.charAt(endIndex)) return false;
    endIndex--;
  }

  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

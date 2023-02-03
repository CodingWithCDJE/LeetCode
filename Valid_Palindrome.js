/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

*/

const isPalindrome = function (s) {
  let regStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let reverseStr = s.split('').reverse().join('');
  let replrevStr = reverseStr.replace(/[^a-z0-9]/gi, '').toLowerCase();

  return regStr === replrevStr;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));

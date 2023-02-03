/* 
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

*/

const reverseWords = function (s) {
  const splittedWords = s.split(' ');
  for (let i = 0; i < splittedWords.length; i++) {
    let str = splittedWords[i];
    let strArr = str.split('');
    let reversedArr = strArr.reverse();
    let reverseStr = reversedArr.join('');
    splittedWords[i] = reverseStr;
  }
  return splittedWords.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords('God Ding'));

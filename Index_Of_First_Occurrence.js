/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

const strStr = function (haystack, needle) {
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  }

  return -1;
};

console.log(strStr('leetcode', 'leeto'));
console.log(strStr('sadbutsad', 'sad'));

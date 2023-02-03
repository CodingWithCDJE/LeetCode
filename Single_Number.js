/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

*/

const singleNumber = function (nums) {
  const numMap = new Map();
  nums.forEach((element) => {
    numMap.has(element)
      ? numMap.set(element, numMap.get(element) + 1)
      : numMap.set(element, 1);
  });

  for (const [key, value] of numMap.entries()) {
    if (value === 1) return key;
  }
};

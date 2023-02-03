/* 
Given an array of integers nums and an integer target, return 
indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.

*/

const twoSum = function (nums, target) {
  leftPointer = 0;
  rightPointer = leftPointer + 1;

  while (leftPointer < rightPointer) {
    let sum = nums[leftPointer] + nums[rightPointer];
    if (sum === target) return [leftPointer, rightPointer];
    else {
      if (rightPointer == nums.length - 1) {
        leftPointer++;
        rightPointer = leftPointer + 1;
      } else {
        rightPointer++;
      }
    }
  }
};

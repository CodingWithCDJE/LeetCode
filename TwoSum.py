"""
Given an array of integers nums and an integer target, return 
indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.
"""


def twoSum(self, nums: List[int], target: int) -> List[int]:

  left_pointer = 0
  right_pointer = left_pointer + 1

  while left_pointer < right_pointer:
    total = nums[left_pointer] + nums[right_pointer]
    if total == target:
      return [left_pointer, right_pointer]
    else:
      if(right_pointer == len(nums)-1):
        left_pointer+=1
        right_pointer = left_pointer+1
      else:
        right_pointer+=1
        
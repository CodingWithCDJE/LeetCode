"""
  Approach:

     Two Pointers
     left_pointer, right_pointer
     left will start at 0
     right will start at left+1
     We'll iterate through the array until left < right
     Create a variable that will contain the sum of list[left] + list[right]
     We'll check whether the first two equals to the target
     if not then we'll have to keep moving rightpointer until it reaches the end
     of the array and that's when we'll increment the leftpointer and reset the
     right pointer to be the left_pointer +1
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
        
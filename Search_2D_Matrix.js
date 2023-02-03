/* 
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
*/

const searchMatrix = function (matrix, target) {
  // Given a target, search thru a M * N integer matrix

  // Find row
  let row;

  for (let i = 0; i < matrix.length; i++) {
    if (target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1]) {
      row = i;
    }
  }
  if (row == undefined) {
    return false;
  }
  for (let t = 0; t < matrix[row].length; t++) {
    if (matrix[row][t] == target) {
      return true;
    }
  }

  return false;
};

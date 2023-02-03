const merge = function (nums1, m, nums2, n) {
  if (n == 0) return nums1;

  const newNums1Arr = nums1.slice(0, m);
  const newNums2Arr = nums2.slice(0, n);

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] !== newNums1Arr[i]) {
      nums1.splice(i, 1);
      i--;
    }
  }

  newNums2Arr.forEach((element) => {
    nums1.push(element);
  });

  return nums1.sort((a, b) => {
    return a - b;
  });
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));

// Merge two sorted arrays (ascending and descending) so that the third array is sorted.

// const arr1 = [1, 2, 3, 4]
// const arr2 = [3, 2, 1]

const mergeArray = (nums1 = [], nums2 = []) => {
  let p1 = 0,
    p2 = nums2.length - 1;
  const res = [];
  while (p1 < nums1.length && p2 >= 0) {
    if (nums1[p1] <= nums2[p2]) {
      res.push(nums1[p1]);
      p1++;
    } else {
      res.push(nums2[p2]);
      p2--;
    }
  }

  while (p1 < nums1.length) {
    res.push(nums1[p1]);
    p1++;
  }

  while (p2 >= 0) {
    res.push(nums2[p2]);
    p2--;
  }
  return res;
};

const arr1 = [1, 2, 3, 4];
const arr2 = [8, 6, 3, 2, 1];
console.log("🚀 ~ arr1:", arr1);
console.log("🚀 ~ arr2:", arr2);


console.log(mergeArray(arr1, arr2));

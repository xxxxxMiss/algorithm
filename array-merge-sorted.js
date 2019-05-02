// [2, 2, 3]
// [1, 5, 6]
// => [1, 2, 2, 3, 5, 6]

// only modify the original array
// TODO: ???
function mergeSortedArray(nums1, nums2) {
  let m = nums1.length
  let n = nums2.length
  let current = nums1.length - 1
  while (current >= 0) {
    if (n === 0) return

    if (m < 0) {
      nums1[current--] = nums2[--n]
      continue
    }
    if (n < 0) {
      nums1[current--] = nums1[--m]
      continue
    }

    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[current--] = nums1[--m]
    } else {
      nums1[current--] = nums2[--n]
    }
  }
  return nums1
}
console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], [2, 5, 6]))

// merge sort: create a new array
function mergeSort(nums1, nums2) {
  const ret = []
  while (nums1.length || nums2.length) {
    if (nums1.length === 0) {
      ret.push(nums2.shift())
      continue
    }
    if (nums2.length === 0) {
      ret.push(nums1.shift())
      continue
    }
    const first1 = nums1[0]
    const first2 = nums2[0]
    if (first1 > first2) {
      ret.push(nums2.shift())
    } else {
      ret.push(nums1.shift())
    }
  }
  return ret
}
// console.log(mergeSort([1, 2, 3], [2, 5, 6]))

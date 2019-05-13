// [1, 3, 5, 6] 2
// => 1

// [1, 3, 5, 6] 5
// => 2

function findInsertIndex(nums, target) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] >= target) {
      return i
    }
  }
  return len
}
console.log(findInsertIndex([1, 3, 5, 6], 2))

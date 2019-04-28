// [1, 2, 4, 4, 5]

function removeDuplicate(nums) {
  let i = 0
  for(let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
}

console.log(removeDuplicate([1, 2, 3, 3, 4, 4, 5]))
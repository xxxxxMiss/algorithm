// [4, 2, 1, 2, 1, 3, 3] => 4
// use ^
function findUniqueElement(nums) {
  let ret = 0
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]
    ret = ret ^ element
  }
  return ret
}
// console.log(findUniqueElement([4, 1, 2, 1, 2]))

// use sort
function findUnique(nums) {
  const sortedArr = nums.sort((a, b) => a - b)
  let len = sortedArr.length
  while (len--) {
    const current = sortedArr[len]
    if (current != sortedArr[len - 1] && current != sortedArr[len + 1])
      return current
  }
}
console.log(findUnique([1, 2, 1, 3, 3]))

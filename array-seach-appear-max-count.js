/**
 * Example 1:
Input: [3,2,3]
Output: 3

Example 2:
Input: [2,2,1,1,1,2,2]
Output: 2
 */

// TODO: ????
function findAppearMaxCount(nums) {
  let count = 1
  let majority = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i]
    }
    if (nums[i] === majority) {
      count++
    } else {
      count--
    }
  }
  return majority
}
console.log(findAppearMaxCount([2, 2, 1, 1, 1, 2, 2, 9, 9, 9]))

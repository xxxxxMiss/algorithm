/* 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

示例 1:

输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/majority-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

function majorityElement(nums) {
  return calMajorityElement(nums, 0, nums.length - 1)
  function calMajorityElement(nums, pl, pr) {
    if (pl === pr) {
      return nums[pl]
    }
    const mid = Math.floor((pr - pl) / 2 + pl)
    const left = calMajorityElement(nums, pl, mid)
    const right = calMajorityElement(nums, mid + 1, pr)

    if (left === right) {
      return left
    }

    const leftCount = calCount(nums, left, pl, pr)
    const rightCount = calCount(nums, right, pl, pr)
    return leftCount > rightCount ? left : right
  }

  function calCount(nums, n, start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
      if (nums[i] === n) count += 1
    }
    return count
  }
}
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))

// BM算法（投票算法）
function majorityElementX(nums) {
  let count = 0
  let candidate = null
  for (let v of nums) {
    if (count === 0) {
      candidate = v
    }
    count += v === candidate ? 1 : -1
  }
  return candidate
}
console.log(majorityElementX([2, 2, 1, 1, 1, 2, 2]))

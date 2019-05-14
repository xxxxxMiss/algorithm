/* 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。

示例 1:

输入: [1,2,-2147483648]

输出: -2147483648

解释: 第三大的数是 1.
示例 2:

输入: [1, 2]

输出: 2

解释: 第三大的数不存在, 所以返回最大的数 2 .
示例 3:

输入: [2, 2, 3, 1]

输出: 1

解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
存在两个值为2的数，它们都排第二。 */

// 桶排序：只能针对正整数（n>=0）
function thirdMax(nums) {
  let len = nums.length
  const vat = []
  for (let i = 0; i < len; i++) {
    const val = nums[i]
    if (!vat[val]) vat[val] = 0
    vat[val]++
  }

  let j = 0
  const ret = []
  for (let i = vat.length - 1; i >= 0; i--) {
    if (vat[i]) {
      ret[j++] = i
    }
  }
  return ret[2] ? ret[2] : ret[0]
}
console.log(thirdMax([5, 2, 2]))

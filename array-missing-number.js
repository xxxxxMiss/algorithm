/* 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

示例 1:

输入: [3,0,1]
输出: 2
示例 2:

输入: [9,6,4,2,3,5,7,0,1]
输出: 8
说明:
你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现? */

// 等差数列求和：Sn = (a1 + an)n / 2(d = 1)
function missingNumber(nums) {
  let sum = (nums.length * (nums.length + 1)) / 2
  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i]
  }
  return sum
}
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))

function missingNumber2(nums) {
  let res = nums.length
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i]
    res ^= i
  }
  return res
}
// console.log(missingNumber2([3, 0, 1]))

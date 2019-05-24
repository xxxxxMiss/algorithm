/* 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。

示例 1:

输入: [1,4,3,2]

输出: 4
解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
提示:

n 是正整数,范围在 [1, 10000].
数组中的元素范围在 [-10000, 10000]. */

// 就该题而言，其实就是找出数组下标为奇数的数字之和。。。
function arrayPairSum(nums) {
  function quickSort(a) {
    if (a.length < 2) return a

    const pivot = a.splice(Math.floor(a.length / 2), 1)[0]
    const less = []
    const greater = []
    for (let i = 0; i < a.length; i++) {
      if (a[i] < pivot) {
        less.push(a[i])
      } else {
        greater.push(a[i])
      }
    }
    return quickSort(less).concat(pivot, quickSort(greater))
  }

  nums = quickSort(nums)
  let sum = 0
  for (let i = 0; i < nums.length; i = i + 2) {
    if (i % 2 === 0) {
      sum += nums[i]
    }
  }
  return sum
}

console.log(arrayPairSum([1, 2, 3, 2]))

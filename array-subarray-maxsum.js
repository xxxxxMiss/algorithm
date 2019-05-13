/* 
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。 
*/

function maxSubArray(nums) {
  let len = nums.length
  let maxSum = 0
  for (let i = 0; i < len; i++) {
    let temp = nums[i]
    for (let j = i + 1; j < len; j++) {
      temp += nums[j]
      if (temp >= maxSum) maxSum = temp
    }
  }
  return maxSum
}

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// 动态规划，这是一种解决棘手问题的方法，它将问题分成小问题，
// 并先着手解决这些小问题, 再逐步解决大问题。
function maxSubArray2(nums) {
  let res = 0
  let sum = 0
  for (let i = 0; i < nums.length; ++i) {
    sum = Math.max(nums[i], sum + nums[i])
    res = Math.max(sum, res)
  }
  return res
}
console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

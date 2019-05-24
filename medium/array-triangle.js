/* 给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。

示例 1:

输入: [2,2,3,4]
输出: 3
解释:
有效的组合是: 
2,3,4 (使用第一个 2)
2,3,4 (使用第二个 2)
2,2,3
注意:

数组长度不超过1000。
数组里整数的范围为 [0, 1000]。 */

// a + b > c && a + c > b && b + c > a && a - b < c && a - c < b && b - c < a
function triangleNumber1(nums) {
  const len = nums.length
  let z = 0

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (
          nums[i] + nums[j] > nums[k] &&
          nums[i] + nums[k] > nums[j] &&
          nums[j] + nums[k] > nums[i] &&
          nums[i] - nums[j] < nums[k] &&
          nums[i] - nums[k] < nums[j] &&
          nums[j] - nums[k] < nums[i]
        ) {
          z++
        }
      }
    }
  }
  return z
}

function triangleNumber(nums) {
  let count = 0
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    let k = i + 2
    for (let j = i + 1; j < nums.length - 1 && nums[i] != 0; j++) {
      k = binarySearch(nums, k, nums.length - 1, nums[i] + nums[j])
      count += k - j - 1
    }
  }
  return count

  function binarySearch(nums, l, r, x) {
    while (r >= l && r < nums.length) {
      let mid = Math.floor((l + r) / 2)
      if (nums[mid] >= x) r = mid - 1
      else l = mid + 1
    }
    return l
  }
}

console.log(triangleNumber([1, 1, 3, 4]))

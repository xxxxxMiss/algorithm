/* 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/4sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

var fourSum = function(nums, target) {
  nums.sort()
  const result = []
  const book = []
  let box = []
  dfs()

  function dfs(step = 0) {
    if (step === 4) {
      const [a, b, c, d] = box
      if (a + b + c + d === target) {
        result.push([a, b, c, d])
      }
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (book[i] !== 1) {
        box[step] = nums[i]
        book[i] = 1
        dfs(step + 1)
        book[i] = 0
      }
    }
  }
}

var fourSumx = function(nums, target, count = 4) {
  nums = nums.sort()
  let res = []
  // 累积的总和，累积的元素，剩余元素
  let loop = (sum, acc, remain) => {
    if (acc.length === count - 1) {
      for (let i = 0; i < remain.length; i++) {
        if (sum + remain[i] === target) {
          acc.push(remain[i])
          res.push(acc)
        }
        // 略过相同元素
        while (remain[i] === remain[i + 1]) i++
      }
      return
    }
    let next = 0
    while (next < remain.length) {
      loop(sum + remain[next], [...acc, remain[next]], remain.slice(next + 1))
      // 略过相同元素
      while (remain[next] === remain[next + 1]) next++
      next++
    }
  }

  loop(0, [], nums)

  return res
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))

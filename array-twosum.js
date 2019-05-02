function findTwoIndex(nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] + nums[i + 1] === target) {
      return [i + 1, i + 2]
    }
  }
}

console.log(findTwoIndex([2, 7, 11, 15], 18))

var twoSum = function(numbers, target) {
  const visited = {} // 记录出现的数字， 空间复杂度N

  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
    if (visited[target - element]) {
      return [visited[target - element], index + 1]
    }
    visited[element] = index + 1
  }
  return []
}

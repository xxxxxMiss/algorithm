/* 给定一个整数数组，判断是否存在重复元素。

如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true */

function containsDuplicate(nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] === nums[j]) {
        return true
      }
    }
  }
  return false
}

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))

// 可以利用集合不允许有重复元素的特性
function containsDuplicateByCollection(nums) {
  return new Set(nums).size === nums.length
}

// TODO: 先排序，然后判断相邻的元素是否相等

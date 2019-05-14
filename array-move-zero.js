/* 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。 */

// 冒泡排序法
function moveZero(nums) {
  function findMinVal(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
      if (arr[i] < arr[i + 1] && arr[i] === 0) {
        const temp = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = temp
      }
    }
    return arr
  }
  for (let i = 0; i < len; i++) {
    findMinVal(nums)
  }
  return nums
}
// console.log(moveZero([0, 1, 0, 3, 12]))

// 非0值前移，最后在后面补0
// 遍历整个数组，用非0值重写整个数组，再最后补0
function moveZero2(nums) {
  let j = 0
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i]
    }
  }
  while (j < len) {
    nums[j++] = 0
  }
  return nums
}
console.log(moveZero2([0, 1, 0, 3, 12]))

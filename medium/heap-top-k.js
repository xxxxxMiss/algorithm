/* 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

function findKthLargest(nums, k) {
  const n = nums.length
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    buildHeap(nums, n, i)
  }
  return nums

  function buildHeap(h, len, i) {
    while (true) {
      let minPos = i
      if (2 * i + 1 <= len && h[i] > h[2 * i + 1]) {
        minPos = 2 * i + 1
      }
      if (2 * i + 2 <= len && h[minPos] > h[2 * i + 2]) {
        minPos = 2 * i + 2
      }
      if (minPos === i) break
      swap(h, i, minPos)
      i = minPos
    }
  }

  function swap(a, i, j) {
    const temp = a[i]
    a[i] = a[j]
    a[j] = temp
  }
}

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6]))

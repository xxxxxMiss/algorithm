/* 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

找到所有在 [1, n] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

示例:

输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6] */

// 思路：对于这些全部为正整数的元素，可以考虑将这些元素作为数组的下标然后做文章
// 本题在原数组上通过为每个元素加上一个数组长度，虽然改变了原始了，
// 因为后面的遍历还要用到原始值，在通过对每个元素取余得到原始值。
// 从而满足题目中的“不使用额外空间且时间复杂度为O(n)”
function findDisappearedNumbers(nums) {
  const ret = []
  const n = nums.length
  // 通过加上数组长度可以标记元素出现过。求余数数据即可知道原先数字的大小。
  for (let i = 0; i < nums.length; i++) {
    // 得到原始值
    const remainder = (nums[i] - 1) % n
    // 改变原始值
    nums[remainder] += n
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= n) ret.push(i + 1)
  }
  return ret
}
console.log(findDisappearedNumbers([1, 1]))

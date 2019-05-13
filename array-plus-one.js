/* 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
示例 2:

输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。 */

// 适用于不管加几的情况
function plusOne(nums) {
  let digit = 0
  const len = nums.length
  for (let i = 0; i < len; i++) {
    let temp = '1'
    for (let j = len - i - 1; j > 0; j--) {
      temp += '0'
    }
    digit += nums[i] * temp
  }
  digit++ // 不管加几都可以
  digit += ''
  const ret = []
  for (let i = 0; i < digit.length; i++) {
    ret[i] = digit[i] * 1
  }
  return ret
}
// console.log(plusOne([9, 9, 9, 9]))
console.log(plusOne([4, 3, 2, 1]))

// 只适用于加1的情况
/* function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    digits[i] = digits[i] % 10
    if (digits[i] != 0) return digits
  }
  digits.unshift(1)
  return digits
}
// console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([9, 9, 8, 9])) */

/* 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

示例 1:

输入: [1,2,3]
输出: 6
示例 2:

输入: [1,2,3,4]
输出: 24
注意:

给定的整型数组长度范围是[3,104]，数组中所有的元素范围是[-1000, 1000]。
输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。 */

function maximumProduct(nums) {
  let [a, b, c, d, e] = [-Infinity, -Infinity, -Infinity, Infinity, Infinity]

  nums.forEach(item => {
    if (item > a) {
      c = b
      b = a
      a = item
    } else if (item > b) {
      c = b
      b = item
    } else if (item > c) {
      c = item
    }

    if (item < e) {
      d = e
      e = item
    } else if (item < d) {
      d = item
    }
  })

  return Math.max(a * b * c, d * e * a)
}

console.log(maximumProduct([1, 2, 3, 4]))

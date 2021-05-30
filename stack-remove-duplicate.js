/* 给定一个仅包含小写字母的字符串，去除字符串中重复的字母，使得每个字母只出现一次。需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

示例 1:

输入: "bcabc"
输出: "abc"
示例 2:

输入: "cbacdcbc"
输出: "acdb"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicate-letters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

// 思路就是 遇到一个新字符 如果比栈顶小 并且在新字符后面还有和栈顶一样的
// 就把栈顶的字符抛弃了

function removeDuplicateLetters(s) {
  const stack = ['z']
  for (let i = 0; i < s.length; i++) {
    let current = s[i]
    let j = i + 1
    while (j < s.length) {
      if (current === s[j] && current < stack[stack.length - 1]) {
        stack[stack.length - 1] = current
      }
      j++
    }
    stack.push(current)
  }
  return stack.slice(1).join('')
}

console.log(removeDuplicateLetters('cbacdcbc'))

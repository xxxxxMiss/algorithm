/**
 * 回文字符串：是一个中点对称的字符
 * 利用数据结构（栈：stack）后进先出的特点，
 * 将左边字符串反过来和右边一一相等比较
 * @param {*} str
 */

function isPalindrome(str) {
  const len = str.length
  let mid = Math.floor(len / 2)
  const stack = []

  for (let i = 0; i < mid; i++) {
    stack[i] = str[i]
  }

  for (let i = mid + 1; i < str.length; i++) {
    if (str[i] !== stack.pop()) {
      break
    }
  }

  if (stack.length) {
    console.log('NO')
  } else {
    console.log('YES')
  }
}

isPalindrome('noon')

// [](){}
function isValid(s) {
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack = []
  const close = Object.keys(map)
  for (let i = 0; i < s.length; i++) {
    if (!close.includes(s[i])) {
      stack.push(s[i])
    } else {
      const open = stack.pop()
      if (open !== map[s[i]]) {
        return false
      }
    }
  }
  return stack.length === 0
}

// 代码虽然简洁，但是时间复杂度O(n^2 / 2)没有上面的好
function isValidRe(s) {
  let length
  do {
    length = s.length
    s = s
      .replace('{}', '')
      .replace('[]', '')
      .replace('()', '')
  } while (length !== s.length)

  return s.length === 0
}

console.log(isValidRe('{[](){}}'))
console.log(isValidRe('{[}'))

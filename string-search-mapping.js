// [](){}
function isValid(s) {
  let valid = true
  const stack = []
  const map = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  for (let i = 0; i < s.length; i++) {
    let v = s[i]
    if (['(', '[', '{'].indexOf(v) > -1) {
      stack.push(v)
    } else {
      const left = stack.pop()
      if (map[left] !== v) {
        valid = false
      }
    }
  }

  if (stack.length > 0) return false

  return valid
}

console.log(isValid('{[]}'))
console.log(isValid('{[}'))

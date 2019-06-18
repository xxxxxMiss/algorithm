// 124ms
function simplifyPath(path) {
  path = path.split('/')
  const stack = []
  for (let i = 0; i < path.length; i++) {
    if (path[i] === '..') {
      stack.pop()
    } else if (path[i] === '.') {
      continue
    } else if (path[i]) {
      stack.push(path[i])
    }
  }
  return '/' + stack.join('/')
}

/* 
执行用时 :92 ms, 在所有JavaScript提交中击败了92.62%的用户
内存消耗 :35.4 MB, 在所有JavaScript提交中击败了77.62%的用户
 */
function simplifyPath2(path) {
  path = path.split('/')
  const stack = []
  path.forEach(v => {
    if (!v || v === '.') return
    if (v === '..') {
      stack.pop()
    } else {
      stack.push(v)
    }
  })
  return '/' + stack.join('/')
}

console.log(simplifyPath2('/a//b////c/d//././/..'))

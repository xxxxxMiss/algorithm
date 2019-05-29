function clone(o) {
  if (Array.isArray(o)) {
    return o.map(item => clone(item))
  } else if (typeof o === 'object') {
    const ret = {}
    for (let key in o) {
      ret[key] = clone(o[key])
    }
    return ret
  } else {
    return o
  }
}

let depth = 0
const map = new Map()
function f(n) {
  if (depth >= 50) throw new Error('Maximum call stack overflow')
  depth++

  if (n == 1) return 1
  if (n == 2) return 2

  if (map.has(n)) {
    return map.get(n)
  }

  const ret = f(n - 1) + f(n - 2)
  map.set(n, ret)
  return ret
}

console.log('f: ', f(7))

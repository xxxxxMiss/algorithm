const str = 'abgddcgdefakfafb'
const target = 'fb'

function bf(s, t) {
  const sLen = s.length
  const tLen = t.length

  for (let i = 0; i <= sLen - tLen; i++) {
    const substr = s.substr(i, tLen)
    let isEqual = false
    for (let j = 0; j < tLen; j++) {
      if (t[j] !== substr[j]) {
        isEqual = false
        break
      } else {
        isEqual = true
      }
    }
    if (isEqual) {
      return i
    }
  }
  return -1
}

console.log(bf(str, target))

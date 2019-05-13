function getSubString(str) {
  const len = str.length
  const ret = []
  for (let i = 0; i < len; i++) {
    let temp = str[i]
    for (let j = i + 1; j < len; j++) {
      temp += str[j]
      ret.push(temp)
    }
  }
  return ret
}
console.log(getSubString('abc'))

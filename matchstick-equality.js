function test() {
  const ret = []
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      for (let k = 1; k <= 3; k++) {
        if (i != j && i != k && j != k) {
          ret.push(i * 100 + j * 10 + k)
        }
      }
    }
  }
  return ret
}
console.log(test())

// 8 5 2 5 3 => 2 3 5 5 8

// O(M+N+M+N) => O(2*(M+N)) => O(M+N)
function vatSort(...args) {
  const arr = new Array(10).fill(0) // M
  const ret = []
  for (let i = 0; i < args.length; i++) {
    // N
    arr[args[i]] += 1
  }

  // M + N
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < arr[i]; j++) {
      ret.push(i)
    }
  }

  return ret
}

console.log(vatSort(8, 5, 2, 5, 3))

// 8 5 2 5 3 => 2 3 5 5 8

// O(M+N+M+N) => O(2*(M+N)) => O(M+N)
function bucketSort(...args) {
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

// console.log(bucketSort(8, 5, 2, 5, 3))

const a = [2, 0, 2, 3, 0, 1]
function getIndex(a, score) {
  let sum = 0

  for (let i = 0; i < score; i++) {
    sum += a[i]
  }
  sum += score
  const ret = [sum - 1]
  for (let i = 1; i < a[score]; i++) {
    ret[i] = ret[i - 1] + 1
  }
  return ret
}

console.log(getIndex(a, 3))

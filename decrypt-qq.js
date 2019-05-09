function decryptQQ(arr) {
  let head = 0
  let tail = arr.length

  while (head < tail) {
    head++
    arr[tail] = arr[head]
    tail++
    head++
  }

  return arr
}

console.log(decryptQQ([6, 3, 1, 7, 5, 8, 9, 2, 4]))

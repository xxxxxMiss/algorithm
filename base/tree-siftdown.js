function siftdown(h, i = 1) {
  const len = h.length
  let t
  let flag = 0
  while (2 * i < len && flag === 0) {
    if (h[i] > h[2 * i]) {
      t = 2 * i
    } else {
      t = i
    }
    if (2 * i + 1 < len) {
      if (h[t] > h[2 * i + 1]) {
        t = 2 * i + 1
      }
    }
    if (t !== i) {
      swap(h, t, i)
      i = t
    } else {
      flag = 1
    }
  }
  function swap(a, t, i) {
    const v = a[t]
    a[t] = a[i]
    a[i] = v
  }
  return h
}

console.log(siftdown([0, 23, 2, 5, 12, 7, 17, 25, 19, 36, 99, 22, 28, 46, 92]))

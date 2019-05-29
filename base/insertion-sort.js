function insertionSort(a) {
  const len = a.length
  for (let i = 1; i < len; i++) {
    const val = a[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (a[j] > val) {
        a[j + 1] = a[j] // 移动数据
      } else {
        break
      }
    }
    a[j + 1] = val // 插入数据
  }
  return a
}

console.log(insertionSort([4, 5, 6, 1, 3, 2]))

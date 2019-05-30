// 这种比较容易理解，但是非常浪费空间
function quicklySort(arr) {
  if (arr.length < 2) return arr

  // Note：关于此处为什么要splice，那是因为如果要排序的数组中有重复的数字，会造成死循环。
  // 可以手动演示下这个过程就知道为什么会死循环
  const pivot = arr.splice(Math.floor(arr.length / 2), 1)[0]
  const less = []
  const greater = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i])
    } else {
      greater.push(arr[i])
    }
  }
  return quicklySort(less).concat(pivot, quicklySort(greater))
}

function quickS(a, start, end) {
  if (start >= end) return

  start = start || 0
  end = end || a.length - 1
  const pivot = a[end]

  let i = start
  let j = start
  for (; j < end; j++) {
    if (a[j] < pivot) {
      const temp = a[j]
      a[j] = a[i]
      a[i] = temp
      i++
    }
  }
  a[j] = a[i]
  a[i] = pivot

  quickS(a, start, i - 1)
  quickS(a, i + 1, end)

  return a
}

console.log(quickS([6, 1, 2, 7, 9, 3, 4, 5, 10, 8]))

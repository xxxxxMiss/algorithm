// 归并排序：分治思想

function mergeSort(a) {
  if (a.length < 2) return a

  const mid = Math.floor(a.length / 2)
  return merge(mergeSort(a.slice(0, mid)), mergeSort(a.slice(mid)))

  function merge(left, right) {
    const temp = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
      if (left[i] > right[j]) {
        temp.push(right[j])
        j++
      } else {
        temp.push(left[i])
        i++
      }
    }
    return temp.concat(left.slice(i), right.slice(j))
  }
}

console.log(mergeSort([11, 8, 3, 9, 7, 1, 2, 5]))

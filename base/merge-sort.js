/**
 *
 * 归并排序：分治思想
 * 自底向上
 * @param {*} a
 * @returns
 */

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

/**
 *
 * @param {*} arr
 * @param {*} lo
 * @param {*} mid
 * @param {*} hi
 */
const merge = (arr, lo, mid, hi, aux) => {
  // arr[lo...mid] 和 arr[mid + 1, hi] 归并
  let i = lo,
    j = mid + 1
  for (let k = lo; k <= hi; k++) aux[k] = arr[k]
  for (let k = lo; k <= hi; k++) {
    if (i > mid) arr[k] = aux[j++]
    else if (j > hi) arr[k] = aux[i++]
    else if (aux[j] > aux[i]) arr[k] = aux[i++]
    else arr[k] = aux[j++]
  }
}
/**
 * 自顶向下的归并
 */
const sort = arr => {
  const n = arr.length
  const aux = new Array(n)
  // sz: 子数组大小
  for (let sz = 1; sz < n; sz = sz + sz) {
    for (let lo = 0; lo < n - sz; lo += sz + sz) {
      merge(arr, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, n - 1), aux)
    }
  }
  return arr
}
console.log('from top to bottom merge: ', sort([3, 5, 1, 2, 8]))

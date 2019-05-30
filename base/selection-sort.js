/* 选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间。
  但是每次排序都会从未排序区间找到最小的元素，将其放到已排序区间的末尾。
 */

function selectSort(a) {
  const len = a.length
  for (let j = 0; j < len; j++) {
    let index = -1
    let min = a[j]
    for (let i = j + 1; i < len; i++) {
      if (a[i] < min) {
        min = a[i]
        index = i
      }
    }
    if (index !== -1) {
      a[index] = a[j]
      a[j] = min
    }
  }

  return a
}

console.log(selectSort([4, 5, 6, 3, 2, 1]))

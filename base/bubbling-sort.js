/**
 *
 * 冒泡排序：每次查找，只交换两个数的位置
 * 所以每次一趟查找下来，
 * 只能得到一个最大的或者最小的值（看是由高到低，还是由低到高）
 */
function findMinVal(arr) {
  let i = 0
  let j = 1
  const len = arr.length
  for (; i < len - 1; i++) {
    if (arr[i] < arr[j]) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    j++
  }
  return arr[len - 1]
}

function bubblingSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    findMinVal(arr)
  }
  return arr
}

console.log(bubblingSort([12, 35, 99, 18, 76]))

/**
 * 4种常见的二分法变体
 *
 * . 查找第一个等于给定值的元素
 *
 * . 查找最后一个等于给定值的元素
 *
 * . 查找第一个大于等于给定值的元素
 *
 * . 查找最后一个小于等于给定值的元素
 *
 */

function binarySearch(arr, target) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    let mid = Math.floor(low + ((high - low) >> 1)) // low + (high - low) / 2
    if (arr[mid] > target) {
      high = mid - 1
    } else if (arr[mid] < target) {
      low = mid + 1
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] !== target) return mid

      low = mid + 1
    }
  }

  return -1
}

// console.log(binarySearch([1, 3, 4, 5, 7, 8, 11, 18], 8))

// 查找第一个大于等于给定值的元素
function binarySearch2(a, target) {
  let low = 0
  let high = a.length - 1

  while (low <= high) {
    let mid = Math.floor(low + ((high - low) >> 1))

    if (a[mid] >= target) {
      if (mid === 0 || a[mid - 1] < target) {
        return mid
      }
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
}
// console.log(binarySearch2([1, 3, 4, 5, 7, 8, 11, 18], 1))

// 查找最后一个小于等于给定值的元素
function binarySearch3(a, target) {
  let low = 0
  let high = a.length - 1

  while (low <= high) {
    let mid = Math.floor(low + ((high - low) >> 1))

    if (a[mid] <= target) {
      if (mid === a.length - 1 || a[mid + 1] > target) return mid

      low = mid + 1
    } else {
      high = mid - 1
    }
  }
}

console.log(binarySearch3([1, 3, 4, 5, 7, 8, 11, 18], 9))

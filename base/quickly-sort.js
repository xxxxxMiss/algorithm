// TODO: 不利用额外空间实现
function quicklySort(nums, left, right) {
  left = left || 0
  right = right || nums.length - 1
  let t
  let i = left
  let j = right
  const target = nums[left]

  if (left > right) return nums

  while (i != j) {
    while (nums[j] >= target && i < j) j--
    while (nums[i] <= target && i < j) i++
    if (i < j) {
      t = nums[i]
      nums[i] = nums[j]
      nums[j] = t
    }
  }
  nums[left] = nums[i]
  nums[i] = target

  quicklySort(nums, left, i - 1)
  quicklySort(nums, i + 1, right)

  return nums
}

// console.log(quicklySort([6, 1, 2, 7, 9, 3, 4, 5, 10, 8]))

// 这种比较容易理解，但是非常浪费空间
function quicklySort2(arr) {
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
  return quicklySort2(less).concat(pivot, quicklySort2(greater))
}

function quickSortxx(arr, left, right) {
  /*
   * len为数组的长度;
   * left为需要数组中参与排序的起始点；right为数组中参与排序的终止点;
   * left如果有传数字那么就为left，没有传参则为0；
   * right如果有传参那么就为right，没有传参则为len-1;
   * 有传参可能会部分排序可能不会排序，没传参默认排序整个数组;
   * partitionIndex为分组界限;
   */
  var len = arr.length,
    partitionIndex,
    left = typeof left !== 'number' ? 0 : left,
    right = typeof right !== 'number' ? len - 1 : right

  // 如果需要排序的起始索引小于终止索引则执行排序;递归的终止条件；
  if (left < right) {
    // partition的返回值作为partitionIndex来分隔数组；
    // 索引partitionIndex左边的元素均小于arr[partitionIndex]；
    // 右边的元素均大于arr[partitionIndex]；
    partitionIndex = partition(arr, left, right)

    // 数组中小于arr[partitionIndex]的部分(索引left到partitionIndex-1)再次使用quickSort排序；
    quickSortxx(arr, left, partitionIndex - 1)

    // 数组中大于arr[partitionIndex]的部分(索引partitionIndex+1到right)再次使用quickSort排序；
    quickSortxx(arr, partitionIndex + 1, right)
  }
  // 递归执行直到不满足left<right;返回本身；
  return arr
}

function partition(arr, left, right) {
  /*
   * 这部分是具体实现排序的部分；
   * 将left赋值给pivot，作为参照物，因为left在最左边，只需要从左到右比较一遍即可判断整个数组；
   * index索引是arr中待交换位置；
   */
  var pivot = left,
    index = pivot + 1
  // for循环从参照物arr[pivot]下一个元素arr[pivot+1]开始一直比较到子数组结束arr[right]；
  for (var i = index; i <= right; i++) {
    // 循环中如果有任何小于参照物的，就将他交换到index的位置，然后index向右移动到下一个位置；
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }
  }
  /*
   * 因为每次都是交换完后index移动到下一个位置，所以在循环结束时，index仍为待交换的位置；
   * 此时索引pivot+1到index-1的元素都小于参照物arr[pivot]；
   */

  // 交换pivot和index-1索引的值之后index-1索引左边全都是小于arr[index-1]的元素；
  swap(arr, pivot, index - 1)

  // 返回index-1作为拆分子数组的分界线；
  return index - 1
}
/*
 * 普通的交换，将a[i]和a[j]的数值交换；
 */
function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

console.log(quickSortxx([1, 2, 3, 2]))

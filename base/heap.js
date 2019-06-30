/* 
  何为“堆”？
  堆的存储
  最小堆（小顶堆）
  最大堆（大顶堆）
*/

const heap = [undefined, 33, 27, 21, 16, 13, 15, 9, 5, 6, 7, 8, 1, 2, 12]

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// 已最大堆为例
function insert(heap, target) {
  heap.push(target)
  let i = heap.length - 1
  while (Math.floor(i / 2) > 0 && heap[Math.floor(i / 2)] < heap[i]) {
    // 自下而上堆化
    swap(heap, i, Math.floor(i / 2))
    i = Math.floor(i / 2)
  }
  return heap
}
// console.log(insert(heap, 22))

// 删除堆顶的元素
function removeMax(h) {
  const last = h.splice(h.length - 1, 1)
  h[1] = last[0]
  let i = 1
  const n = h.length
  heapify(h, n, i)
  return h
  function heapify(a, n, i) {
    while (true) {
      let maxPos = i
      if (2 * i <= n && a[i] < a[2 * i]) {
        maxPos = 2 * i
      }
      if (2 * i + 1 <= n && a[maxPos] < a[2 * i + 1]) {
        maxPos = 2 * i + 1
      }
      if (maxPos === i) break

      swap(h, i, maxPos)
      i = maxPos
    }
  }
}
// console.log(removeMax(heap))

function buildHeap(h) {
  const n = h.length - 1
  // Note: i = Math.floor(n / 2)
  for (let i = Math.floor(n / 2); i >= 1; i--) {
    heapify(h, n, i)
  }
  return h

  function heapify(heap, len, i) {
    while (true) {
      let maxPos = i
      // Note: <= len
      if (2 * i <= len && heap[i] < heap[2 * i]) {
        maxPos = 2 * i
      }
      // Note: <= len
      if (2 * i + 1 <= len && heap[maxPos] < heap[2 * i + 1]) {
        maxPos = 2 * i + 1
      }
      if (maxPos === i) break
      swap(heap, i, maxPos)
      i = maxPos
    }
  }
}
console.log(buildHeap([undefined, 7, 5, 19, 8, 4, 1, 20, 13, 16]))

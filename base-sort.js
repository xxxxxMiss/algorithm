const nums = [1, 3, 5, 7]

const binarySearch = (arr, target) => {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let guess = arr[mid]

    if (guess === target) return mid
    if (guess < target) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return -1
}

const sortArr = arr => {
  const findSmallest = arr => {
    let smallest = arr[0]
    let smallestIndex = 0
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= smallest) {
        smallest = arr[i]
        smallestIndex = i
      }
    }
    return smallestIndex
  }
  const target = []
  for (let i = 0; i < arr.length; i++) {
    const smallestIndex = findSmallest(arr)
    target.push(arr.splice(smallestIndex, 1)[0])
    i--
  }
  return target
}

const sum = arr => {
  // D & C
  if (arr.length === 1) return arr[0]

  return arr.pop() + sum(arr)
}

// [1, 9, 3, 5, 8, 2, 4]

// [2, 3]

const quickSort = arr => {
  if (arr.length < 2) return arr

  const pivot = arr[Math.floor((arr.length - 1) / 2)]
  const less = []
  const greater = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i])
    } else if (arr[i] > pivot) {
      greater.push(arr[i])
    }
  }
  return quickSort(less)
    .concat(pivot)
    .concat(quickSort(greater))
}

const map = new Map()
map.set('you', ['bob', 'jack', 'alice'])
map.set('bob', ['jonny', 'anuit'])
map.set('jonny', ['tim'])
const isSeller = name => name.endsWith('t')
const breadthFirstSearch = name => {
  const deque = []
  const searched = []
  deque.push.apply(deque, map.get(name))

  while (deque.length) {
    const item = deque.shift()
    if (searched.indexOf(item) === -1) {
      if (isSeller(item)) {
        console.log(`${item} is a seller...`)
        return item
      } else {
        searched.push(item)
        deque.push.apply(deque, map.get(item))
      }
    }
  }
  return -1
}

const multiMap = new Map()
const start = new Map()
start.set('a', 6)
start.set('b', 2)
const a = new Map()
a.set('fin', 1)
const b = new Map()
b.set('fin', 5)
b.set('a', 3)
multiMap.set('start', start)
multiMap.set('a', a)
multiMap.set('b', b)

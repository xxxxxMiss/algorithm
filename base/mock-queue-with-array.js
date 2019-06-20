class ArrayQueue {
  constructor(n) {
    this.items = []
    this.n = n
    this.head = 0
    this.tail = 0
  }

  enqueue(item) {
    // 队尾没有空间
    if (this.n === this.tail) {
      // 队列已满
      if (this.head === 0) return false

      for (let i = this.head; i < this.tail; i++) {
        // i - this.head
        // think of this.head is offset
        this.items[i - this.head] = this.items[i]
      }
      this.tail -= this.head
      this.head = 0
    }
    this.items[this.tail] = item
    this.tail++
    return true
  }

  dequeue() {
    // 队列为空
    if (this.head === this.tail) return null

    const current = this.items[this.head]
    this.head++
    return current
  }
}

const arrQueue = new ArrayQueue(6)
arrQueue.enqueue(1)
arrQueue.enqueue(2)
arrQueue.enqueue('c')
arrQueue.enqueue('a')
arrQueue.enqueue('b')
arrQueue.enqueue('d')
arrQueue.dequeue()
arrQueue.dequeue()
arrQueue.enqueue('x')
console.log(arrQueue.items)
console.log(arrQueue.tail)
console.log(arrQueue.head)

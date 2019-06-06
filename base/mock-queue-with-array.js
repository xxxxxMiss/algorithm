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
        this.items[i - this.head] = this.items[i]
      }
      this.tail = this.head
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

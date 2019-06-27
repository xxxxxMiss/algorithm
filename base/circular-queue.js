/* 
  实现循环队列的关键点：确定队空和队满的条件
  队满：(tail + 1) % n = head

  在循环队列中，当队满时，tail指向的位置实际上是没有存储数据的。
  所以循环队列会浪费一个数组的存储空间
*/

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity)
    this.head = 0
    this.tail = 0
    this.n = capacity
  }

  enqueue(item) {
    if ((this.tail + 1) % this.n === this.head) return false

    this.items[this.tail] = item
    this.tail = (this.tail + 1) % this.n
    return true
  }

  dequeue() {
    // 队空
    if (this.tail === this.head) return null

    const curr = this.items[this.head]
    this.head = (this.head + 1) % n
    return curr
  }
}

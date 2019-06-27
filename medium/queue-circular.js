/* 设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。

循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

你的实现应该支持如下操作：

MyCircularQueue(k): 构造器，设置队列长度为 k 。
Front: 从队首获取元素。如果队列为空，返回 -1 。
Rear: 获取队尾元素。如果队列为空，返回 -1 。
enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
isEmpty(): 检查循环队列是否为空。
isFull(): 检查循环队列是否已满。
 

示例：

MyCircularQueue circularQueue = new MycircularQueue(3); // 设置长度为 3

circularQueue.enQueue(1);  // 返回 true

circularQueue.enQueue(2);  // 返回 true

circularQueue.enQueue(3);  // 返回 true

circularQueue.enQueue(4);  // 返回 false，队列已满

circularQueue.Rear();  // 返回 3

circularQueue.isFull();  // 返回 true

circularQueue.deQueue();  // 返回 true

circularQueue.enQueue(4);  // 返回 true

circularQueue.Rear();  // 返回 4
 
 

提示：

所有的值都在 0 至 1000 的范围内；
操作数将在 1 至 1000 的范围内；
请不要使用内置的队列库。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/design-circular-queue
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

// 执行用时 : 216 ms , 在所有 JavaScript 提交中击败了 17.90% 的用户
// 内存消耗 : 42.3 MB , 在所有 JavaScript 提交中击败了 14.17% 的用户

// TODO: optimize
class MyCircularQueue {
  constructor(k) {
    // 按照我们的设计，循环队列满时，有一个空位
    k = k + 1
    this.queue = new Array(k)
    this.n = k
    this.tail = 0
    this.head = 0
  }

  enQueue(value) {
    if (this.isFull()) return false

    this.tail = (this.tail + 1) % this.n
    this.queue[this.tail] = value
    return true
  }

  deQueue() {
    if (this.isEmpty()) return false

    this.head = (this.head + 1) % this.n
    return true
  }

  Front() {
    if (this.isEmpty()) return -1
    return this.queue[this.head + 1]
  }

  Rear() {
    if (this.isEmpty()) return -1
    return this.queue[this.tail]
  }

  isEmpty() {
    return this.head === this.tail
  }

  isFull() {
    return (this.tail + 1) % this.n === this.head
  }
}

const myQueue = new MyCircularQueue(3)
myQueue.enQueue(1)
myQueue.enQueue(2)
myQueue.enQueue(3)
myQueue.enQueue(4)
myQueue.deQueue()
// myQueue.enQueue(4)
console.log('rear:', myQueue.Rear())
console.log(myQueue.queue)
console.log(myQueue.head)
console.log(myQueue.tail)

/* 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。
示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 */

class MinStack {
  constructor() {
    this.stack = []
    this.count = 0
    // 空间换时间
    this.minStack = []
    this.minCount = 0
  }
  push(x) {
    this.stack[this.count] = x
    this.count++
    if (this.minCount === 0 || x <= this.minStack[this.minCount - 1]) {
      // WTF?
      // this.minStack.push(x)
      this.minStack[this.minCount] = x
      this.minCount++
    }
    return this.count
  }
  pop() {
    if (this.count === 0) return
    this.count--
    const top = this.stack[this.count]
    if (top === this.minStack[this.minCount - 1]) {
      this.minCount--
    }
    return top
  }
  top() {
    if (this.count > 0) {
      return this.stack[this.count - 1]
    }
  }
  getMin() {
    if (this.minCount > 0) {
      return this.minStack[this.minCount - 1]
    }
  }
}

const minStack = new MinStack()
minStack.push(-3)
minStack.push(0)
minStack.push(-2)
console.log(minStack.getMin()) // -3
minStack.pop()
console.log(minStack.top()) // 0
console.log(minStack.getMin()) // -2
console.log(minStack.stack)
console.log(minStack.minStack)

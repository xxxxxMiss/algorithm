// 假设js中的数组不是动态的

class ArrayStack {
  constructor(n) {
    this.items = []
    this.n = n // 大小
    this.count = 0
  }

  push(item) {
    if (this.count === this.n) {
      const duplicated = this.items
      this.items = [] // 模拟新建一个2倍大小的数组
      this.n = 2 * this.n
      for (let i = 0; i < duplicated.length; i++) {
        this.items[i] = duplicated[i]
      }
    }
    this.items[this.count] = item
    this.count++
    return this.count
  }

  pop() {
    if (this.count === 0) return
    this.count--
    const val = this.items[this.count]
    this.items.length--
    return val
  }
}

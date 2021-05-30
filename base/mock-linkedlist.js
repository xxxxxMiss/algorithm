class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

export default class LinkedList {
  constructor() {
    // 哨兵节点
    this.head = new Node('head')
  }

  findByValue(value) {
    let target = this.head.next
    while (target != null && target.data !== value) {
      target = target.next
    }

    return target
  }

  findByIndex(index) {
    let count = 0
    // 跳过哨兵节点
    let target = this.head.next
    while (count !== index) {
      target = target.next
      count++

      if (target.next === null) return null
    }
    return target
  }

  // find a node before this `data`
  findPrev(data) {
    let target = this.head.next
    while (target.next !== null && target.next.data !== data) {
      target = target.next
    }
    return target
  }

  // insert newData after data
  insert(newData, data) {
    const target = this.findByValue(data)

    if (target === null) return false

    const newNode = new Node(newData, target.next)
    target.next = newNode
    return true
  }

  append(data) {
    let target = this.head
    while (target.next) {
      target = target.next
    }
    target.next = new Node(data)
  }

  remove(data) {
    const prev = this.findPrev(data)
    prev.next = prev.next.next
  }

  _log() {
    const ret = []
    let current = this.head.next
    while (current) {
      ret.push(current.data)
      current = current.next
    }
    console.log(ret.join('->'))
  }
}

const linkedList = new LinkedList()
linkedList.append('jim')
linkedList.append('lily')
linkedList.append('hamei')
linkedList.append('tom')
linkedList._log()

linkedList.remove('hamei')
linkedList._log()

linkedList.insert('haha', 'lily')
linkedList._log()

linkedList.insert('hello', 'hamei')
linkedList._log()

linkedList.insert('head', 'lily')
linkedList._log()

console.log(linkedList.findByValue('lily'))
console.log('findByIndex: ', linkedList.findByIndex(2))
console.log(linkedList.findPrev('lily'))

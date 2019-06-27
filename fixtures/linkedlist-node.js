class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const node1 = new ListNode(2)
node1.next = new ListNode(4)
node1.next.next = new ListNode(3)

const node2 = new ListNode(5)
node2.next = new ListNode(6)
node2.next.next = new ListNode(4)

module.exports = {
  ListNode,
  node1,
  node2
}

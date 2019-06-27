/* 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

const { ListNode, node1, node2 } = require('../fixtures/linkedlist-node')

function addTwoNumbers(l1, l2) {
  let p = l1
  let q = l2
  let carry = 0
  const result = new ListNode(0)
  let current = result

  while (p !== null || q !== null) {
    let x = p !== null ? p.val : 0
    let y = q !== null ? q.val : 0
    let sum = x + y + carry
    carry = Math.floor(sum / 10)
    current.next = new ListNode(sum % 10)
    current = current.next
    if (p !== null) p = p.next
    if (q !== null) q = q.next
  }

  if (carry > 0) {
    current.next = new ListNode(carry)
  }

  return result.next
}

console.log(addTwoNumbers(node1, node2))

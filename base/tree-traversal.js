/* 
  树这种数据结构一般有2种表示方式：数组和链表
  数组一般适用于完全二叉树。

  树的遍历：前序遍历，中序遍历，后续遍历
        1
         \
          2
         /
        3
  中序：[1, 3, 2]

 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const { node2 } = require('../fixtures/tree-node')

/* 时间复杂度：O(n)。递归函数 T(n) = 2 * T(n/2)+1
空间复杂度：最坏情况下需要空间O(n)，平均情况为O(logn)。 
 */
function inRecursionTaversal(root, ret = []) {
  // left - self - right
  if (root === null) {
    return
  }

  inRecursionTaversal(root.left, ret)
  ret.push(root.val)
  inRecursionTaversal(root.right, ret)
  return ret
}

// console.log(inRecursionTaversal(node2))

/* 
将节点左子树全部压栈
如果栈不为空则弹出栈顶元素并将其加入遍历结果，指向当前节点右子树
若当前节点和栈均为空，则结束遍历；否则继续循环上述操作
时间复杂度：O(n)

空间复杂度：O(n) 

 */
function inStackTaversal(root) {
  const stack = []
  const res = []
  let curr = root
  while (curr != null || stack.length) {
    while (curr != null) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    res.push(curr.val)
    curr = curr.right
  }
  return res
}
console.log(inStackTaversal(node2))

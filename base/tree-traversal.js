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

const {
  node2,
  node3,
  binaryTreeNode,
  binaryTreeNode1,
  symmetricNode
} = require('../fixtures/tree-node')

/* 时间复杂度：O(n)。递归函数 T(n) = 2 * T(n/2)+1
空间复杂度：最坏情况下需要空间O(n)，平均情况为O(logn)。 
 */
function inRecursionTaversal(root) {
  // left - self - right
  if (root === null) {
    return []
  }

  let ret = []
  ret = ret.concat(inRecursionTaversal(root.left, ret))
  ret.push(root.val)
  ret = ret.concat(inRecursionTaversal(root.right, ret))
  return ret
}

// console.log(inRecursionTaversal(node3))

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
// console.log(inStackTaversal(node2))

/* 
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
    2
   / \
  1   3
输出: true
示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/validate-binary-search-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
function isValidBST(root) {
  function isValid(node, min, max) {
    if (node === null) return true
    if (min != null && node.val <= min) return false
    if (max != null && node.val >= max) return false
    return (
      isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
    )
  }
  return isValid(root)
}

// console.log(isValidBST(binaryTreeNode))

/* 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

// BFS
function levelOrder(root) {
  if (root === null) return []

  const res = []
  const queue = [root]
  while (queue.length > 0) {
    const currentVal = []
    let len = queue.length
    while (len) {
      const node = queue.shift()
      len--
      currentVal.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    res.push(currentVal)
  }
  return res
}
// console.log(levelOrder(node3))

// DFS
function levelOrderx(root) {
  const res = []
  function traversal(root, level = 0) {
    if (root === null) return []
    ;(res[level] || (res[level] = [])).push(root.val)
    traversal(root.left, level + 1)
    traversal(root.right, level + 1)

    return res
  }
  return traversal(root)
}
// console.log(levelOrderx(node3))

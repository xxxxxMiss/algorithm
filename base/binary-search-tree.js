// 二叉查找树（二叉搜索树）

const { binaryTreeNode, TreeNode } = require('../fixtures/tree-node')

function binarySearchTree(root, target) {
  let curr = root
  while (curr) {
    if (curr.val === target) return curr
    if (target > curr.val) {
      curr = curr.right
    } else {
      curr = curr.left
    }
  }

  return null
}

function recursionBinarySearchTree(root, target) {
  if (!root) return null
  if (root.val === target) return root
  if (target > root.val) {
    return recursionBinarySearchTree(root.right, target)
  }
  return recursionBinarySearchTree(root.left, target)
}

function insert(root, target) {
  if (!root) return new TreeNode(target)

  let curr = root
  while (curr) {
    if (target > curr.val) {
      if (!curr.right) {
        curr.right = new TreeNode(target)
        return
      }
      curr = curr.right
    } else {
      if (!curr.left) {
        curr.left = new TreeNode(target)
        return
      }
      curr = curr.left
    }
  }
}

/* 
  ①：要删除的节点没有子节点
  ②：要删除的节点只有一个子节点（左或者右节点）
  ③：要删除的节点有2个子节点：找到这个节点右子树中的最小节点，
  把他替换到要删除的节点上，然后删除这个最小节点
 */
function del(root, target) {
  let curr = root
  let parent = null

  while (curr !== null && curr.val !== target) {
    parent = curr
    if (target > curr.val) {
      curr = curr.right
    } else {
      curr = curr.left
    }
  }

  if (curr === null) return

  // ③
  if (curr.left !== null && curr.right !== null) {
    let minCurr = curr.right
    let minParent = curr
    while (minCurr.left !== null) {
      minParent = minCurr
      minCurr = minCurr.left
    }
    curr.val = minCurr.val
    curr = minCurr
    parent = minParent
  }

  let child
  if (curr.left) {
    child = curr.left
  } else if (curr.right) {
    child = curr.right
  } else {
    child = null
  }

  if (parent === null) {
    // 删除根节点
    root = null
  } else if (parent.left === curr) {
    parent.left = child
  } else {
    parent.right = child
  }
}
// TODO: operation about the duplicate elements

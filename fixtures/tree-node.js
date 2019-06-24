class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

// 测试节点
const node = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))

/* 
            A
           /  \
          B     C
         / \   / \
        D  E   F  G
*/

const node2 = new TreeNode(
  'A',
  new TreeNode('B', new TreeNode('D'), new TreeNode('E')),
  new TreeNode('C', new TreeNode('F'), new TreeNode('G'))
)

/* 
            1
           /  \
          4     5
         / \     \
        4   4     5
*/

const node3 = new TreeNode(
  '1',
  new TreeNode('4', new TreeNode('4'), new TreeNode('4')),
  new TreeNode('5', null, new TreeNode('5'))
)

module.exports = {
  node,
  node2,
  node3
}

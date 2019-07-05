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

const binaryTreeNode = new TreeNode(
  33,
  new TreeNode(
    17,
    new TreeNode(13, null, new TreeNode(16)),
    new TreeNode(18, null, new TreeNode(25, new TreeNode(19), new TreeNode(27)))
  ),
  new TreeNode(
    50,
    new TreeNode(34),
    new TreeNode(58, new TreeNode(51), new TreeNode(66))
  )
)

const binaryTreeNode1 = new TreeNode(
  6,
  new TreeNode(
    2,
    new TreeNode(0, null),
    new TreeNode(4, new TreeNode(3), new TreeNode(5))
  ),
  new TreeNode(8, new TreeNode(7), new TreeNode(9))
)

module.exports = {
  node,
  node2,
  node3,
  binaryTreeNode,
  TreeNode,
  binaryTreeNode1
}

/* 给定一个嵌套的整型列表。设计一个迭代器，使其能够遍历这个整型列表中的所有整数。

列表中的项或者为一个整数，或者是另一个列表。

示例 1:

输入: [[1,1],2,[1,1]]
输出: [1,1,2,1,1]
解释: 通过重复调用 next 直到 hasNext 返回false，next 返回的元素的顺序应该是: [1,1,2,1,1]。
示例 2:

输入: [1,[4,[6]]]
输出: [1,4,6]
解释: 通过重复调用 next 直到 hasNext 返回false，next 返回的元素的顺序应该是: [1,4,6]。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/flatten-nested-list-iterator
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

class NestedIterator {
  constructor(nestedList) {
    this.index = 0
    this.result = flatten(nestedList)

    function flatten(a) {
      let ret = []
      for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
          ret = ret.concat(flatten(a[i]))
        } else {
          ret.push(a[i])
        }
      }
      return ret
    }
  }

  hasNext() {
    return this.index < this.result.length
  }

  next() {
    const val = this.result[this.index]
    this.index++
    return val
  }
}

const iterator = new NestedIterator([[1, 1], 2, [1, 1]])
const ret = []
while (iterator.hasNext()) ret.push(iterator.next())

console.log(iterator.result)

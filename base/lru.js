/* 
  维护一个链表，越靠近链表尾部的结点是越早之前访问的。
  当访问一个数据的时候，从链表头部开始遍历：

  1.如果被访问的数据在链表中，那么将该元素删除，被插入到头部
  2.如果被访问的数据不在链表中，那么有：
    1.如果缓存未满，直接将该数据插入到链表的头部
    2.如果缓存满了，那么将最后的元素删除，将该元素插入到链表的头部
 */

function lru(a = ['a', 'b', 'c', 'd'], size = 5) {
  return function getVal(val) {
    let index = -1
    for (let i = 0; i < a.length; i++) {
      if (a[i] === val) {
        index = i
        break
      }
    }
    if (index !== -1) {
      const target = a.splice(index, 1)[0]
      a.unshift(target)
    } else {
      if (a.length < size) {
        a.unshift(val)
      } else {
        a.splice(a.length - 1, 1)
        a.unshift(val)
      }
    }
    return a
  }
}

console.log(lru()('c'))

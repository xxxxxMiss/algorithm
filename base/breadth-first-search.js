let n = 4 // 行
let m = 3
let p = 3
let q = 2
// 0: 空地
// 1: 障碍物
const a = [[0, 0, 1, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 1]]
const book = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]
function dfsCoordinate() {
  let flag = 0
  const start = [0, 0]
  start.s = 0
  const queue = [start]
  // 右，下，左，上
  const next = [[0, 1], [1, 0], [0, -1], [-1, 0]]

  while (queue.length) {
    let tx
    let ty
    for (let i = 0; i < next.length; i++) {
      tx = queue[0][0] + next[i][0]
      ty = queue[0][1] + next[i][1]

      if (tx < 0 || tx > n || ty < 0 || ty > m) {
        continue
      }
      if (a[tx][ty] === 0 && book[tx][ty] === 0) {
        book[tx][ty] = 1
        const current = [tx, ty]
        current.s = queue[0].s + 1
        queue.push(current)
      }
      // 当前已经到达
      if (tx === p && ty === q) {
        flag = 1
        break
      }
    }
    if (flag === 1) break
    queue.shift()
  }
  return queue.pop().s
}

console.log(dfsCoordinate())

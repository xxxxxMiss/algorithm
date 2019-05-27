// 图的表示之一：邻接矩阵表示法
// 0: 自己到自己的边，1：有边，-1：无边
const e = [
  [0, 1, 1, -1, 1],
  [1, 0, -1, 1, -1],
  [1, -1, 0, -1, 1],
  [-1, 1, -1, 0, -1],
  [1, -1, 1, -1, 0]
]
const n = 4
const book = [1]
let sum = 0

function dfs(current) {
  console.log(current)
  sum++
  if (sum === n) return

  for (let i = 0; i <= n; i++) {
    if (e[current][i] === 1 && book[i] !== 1) {
      book[i] = 1
      dfs(i)
    }
  }
}
// dfs(0)

function bfs(current) {
  const queue = [current]
  let val

  while (queue.length) {
    for (let i = 0; i <= n; i++) {
      if (e[queue[0]][i] === 1 && book[i] !== 1) {
        queue.push(i)
        book[i] = 1
      }
    }
    val = queue.shift()
    console.log(val)
  }
}
bfs(0)

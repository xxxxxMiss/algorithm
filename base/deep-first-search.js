//
function dfs(step = 1, n = 9, a = [], book = []) {
  let total = 0
  let i
  if (step === n + 1) {
    if (
      a[1] * 100 + a[2] * 10 + a[3] + a[4] * 100 + a[5] * 10 + a[6] ===
      a[7] * 100 + a[8] * 10 + a[9]
    ) {
      return ++total
    }
  }
  for (i = 1; i <= n; i++) {
    if (!book[i]) {
      a[step] = i
      book[i] = 1
      total += dfs(step + 1, 9, a, book)
      book[i] = 0
    }
  }
  return total
}
console.log(dfs() / 2)

let n = 4 // 行
let m = 3
let p = 3
let q = 2
let min = 99999999
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
function dfsCoordinate(x = 0, y = 0, step = 0) {
  // 右，下，左，上
  const next = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  // 当前已经到达
  if (x === p && y === q) {
    if (step < min) {
      min = step
      return
    }
  }

  let tx
  let ty
  for (let i = 0; i < next.length; i++) {
    tx = x + next[i][0]
    ty = y + next[i][1]

    if (tx < 0 || tx > n || ty < 0 || ty > m) {
      continue
    }
    if (a[tx][ty] === 0 && book[tx][ty] === 0) {
      book[tx][ty] = 1
      dfsCoordinate(tx, ty, step + 1)
      book[tx][ty] = 0
    }
  }
}
dfsCoordinate()
console.log(min)

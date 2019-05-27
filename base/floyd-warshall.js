// 任意两点之间最短路径

const e = [[0, 2, 6, 4], [-1, 0, 3, -1], [7, -1, 0, 1], [5, -1, 12, 0]]

function floydWarshall() {
  const len = e.length
  for (let k = 0; k < len; k++) {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (e[i][k] !== -1 && e[k][j] !== -1 && e[i][j] > e[i][k] + e[k][j]) {
          e[i][j] = e[i][k] + e[k][j]
        }
      }
    }
  }
}

floydWarshall()
console.log(e)

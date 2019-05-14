const a = []
const book = []
const n = 3
const ret = []

function dfs(step) {
  let i
  if (step === n + 1) {
    let el = ''
    for (i = 1; i <= n; i++) {
      el += a[i]
    }
    ret.push(el)
    return
  }
  for (i = 1; i <= n; i++) {
    if (!book[i]) {
      a[step] = i
      book[i] = 1
      dfs(step + 1)
      book[i] = 0 //
    }
  }
}
dfs(1)
console.log(ret)

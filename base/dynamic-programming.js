/* 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

'?' 可以匹配任何单个字符。
'*' 可以匹配任意字符串（包括空字符串）。
两个字符串完全匹配才算匹配成功。

说明:

s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
示例 1:

输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
示例 2:

输入:
s = "aa"
p = "*"
输出: true
解释: '*' 可以匹配任意字符串。
示例 3:

输入:
s = "cb"
p = "?a"
输出: false
解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
示例 4:

输入:
s = "adceb"
p = "*a*b"
输出: true
解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
示例 5:

输入:
s = "acdcb"
p = "a*c?b"
输入: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/wildcard-matching
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

function isMatch(s, p) {
  // 指定双指针，sIndex指向s字符串，pIndex指向p字符串
  let sIndex = 0
  let pIndex = 0
  let match = 0
  let startIndex = -1
  // 从s字符串作为基准进行比对
  while (sIndex < s.length) {
    // 当pIndex位置的字符和sIndex位置的相同或者pIndex位置的为?时，驱动双指针向前移动一位
    if (
      pIndex < p.length &&
      (p.charAt(pIndex) == '?' || s.charAt(sIndex) == p.charAt(pIndex))
    ) {
      console.log(0)
      sIndex++
      pIndex++
    }
    // 当发现'*'时，对p指针直接移动到下一位，将'*'的index传给startIndex处理，同时将s指针传给match指针
    else if (pIndex < p.length && p.charAt(pIndex) == '*') {
      console.log('11')
      startIndex = pIndex
      match = sIndex
      pIndex++
    }
    // 当'*'匹配字符时，pIndex始终保持startIndex+1，即'*'的下一位，然后移动match指针和sIndex指针
    // 当出现s和p指针重新匹配时，会被第一个if语句拦截，移动双指针
    // 当移动到一个新的'*'时，在第二个else if重新更新sIndex
    // 可能会出现匹配短了的情况，比如匹配"adcbeb"和"*a*b"，程序会在第一个b就直接跳出，但此时程序检查到后续不匹配的情况
    // 此时重新把startIndex+1赋给pIndex，相当于把第一个b包含进*中进行匹配，然后再出现下一个b时再匹配
    else if (startIndex != -1) {
      console.log(222)
      pIndex = startIndex + 1
      match++
      sIndex = match
    } else return false
  }

  // 检查p剩余的子串
  while (pIndex < p.length && p.charAt(pIndex) == '*') pIndex++

  return pIndex == p.length
}

// console.log(isMatch('adcbeb', '*a*b'))

// 0-1背包问题
/* 
我们有一个背包，背包总的承载重量是 Wkg。现在我们有n个物品，每个物品的重量不等，并且不可分割。
现在选择几个物品，在不超过背包最大重量的前提下，使得背包中物品的总重量最大。 
*/

function npackage(weight /* 背包承载重量 */, items = [2, 2, 4, 6, 3]) {
  const n = items.length
  const states = [true]
  if (items[0] <= weight) {
    states[items[0]] = true
  }
  for (let i = 1; i < n; i++) {
    for (let j = weight - items[i]; j >= 0; j--) {
      if (states[j] === true) {
        states[items[i] + j] = true
      }
    }
  }
  for (let i = weight; i >= 0; i--) {
    if (states[i] === true) return i
  }
  return 0
}
// console.log(npackage(16))

// 斐波那契
function fibo(n) {
  if (n <= 1) return n
  return fibo(n - 1) + fibo(n - 2)
}
console.log('fibo: ', fibo(2))

// 爬楼梯     ⤵️
function fibox(n) {
  if (n <= 2) return n

  const memo = []
  memo[0] = 1
  memo[1] = 2
  for (let i = 2; i < n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2]
  }
  console.log('memo: ')
  return memo[n - 1]
}
console.log('x:', fibox(5))

// 爬楼梯     ⤵️
function fiboy(n) {
  if (n <= 2) return n

  let oneStep = 2
  let twoSteps = 1
  let allWays = 0
  for (let i = 2; i < n; i++) {
    allWays = oneStep + twoSteps
    twoSteps = oneStep
    oneStep = allWays
  }
  return allWays
}
console.log('y: ', fiboy(5))

/* 
  有一个n * n的矩阵，从左上角走到右下角的最短距离
*/
const matrix = [[1, 3, 5, 9], [2, 1, 3, 4], [5, 2, 6, 7], [6, 8, 4, 3]]

// 递归加“备忘录”(这种形式类似将整个递归的过程倒过来看)
const n = matrix.length
const memo = new Array(n)
for (let i = 0; i < n; i++) {
  memo[i] = []
}
function minDistDPx(i, j) {
  if (i === 0 && j === 0) return matrix[i][j]

  if (memo[i][j] > 0) return memo[i][j]

  let minLeft = Infinity
  if (j - 1 >= 0) {
    minLeft = minDistDPx(i, j - 1)
  }
  let minUp = Infinity
  if (i - 1 >= 0) {
    minUp = minDistDPx(i - 1, j)
  }
  const currentMin = matrix[i][j] + Math.min(minLeft, minUp)
  memo[i][j] = currentMin
  return currentMin
}
console.log('minDistDPx: ', minDistDPx(n - 1, n - 1))

// 动态规划第一种解法：状态转移表
function minDistDP(matrix) {
  const n = matrix.length
  const state = []
  let sumx = 0
  let sumy = 0
  // 初始化第一行,第一列数据
  for (let i = 0; i < n; i++) {
    const row = []
    sumy += matrix[i][0]
    row[0] = sumy
    state.push(row)
    sumx += matrix[0][i]
    state[0][i] = sumx
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      const down = state[i][j - 1] + matrix[i][j]
      const right = state[i - 1][j] + matrix[i][j]
      state[i][j] = Math.min(down, right)
    }
  }
  return state[n - 1][n - 1]
}
console.log(minDistDP(matrix))

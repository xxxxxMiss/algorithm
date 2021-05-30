/* 
  使用BM算法找出target在str中第一次出现的索引
  坏字符，好后缀都是相对于模式串而言的
*/

// 简单的一种hash函数
// 通过这种方式可以避免每次查找坏字符在模式串中的位置，从而提升算法效率
function genMap(modestr) {
  const size = 256
  const hasMap = []
  const n = modestr.length

  for (let i = 0; i < size; i++) {
    hasMap[i] = -1
  }

  for (let i = 0; i < n; i++) {
    const code = modestr[i].charCodeAt(0)
    hasMap[code] = i
  }

  return hasMap
}

function bm(str, target) {
  const n = str.length
  const m = target.length
  const hashMap = genMap(target)

  let i = 0
  while (i < n - m) {
    let j = m - 1
    for (; j >= 0; j--) {
      if (str[i + j] !== target[j]) {
        break
      }
    }
    if (j < 0) return i

    i = i + (j - hashMap[str[i + j]])
  }

  return -1
}

function genPS(modestr) {
  const m = modestr.length
  const suffix = []
  const prefix = []

  for (let i = 0; i < m; i++) {
    suffix[i] = -1
    prefix[i] = false
  }

  for (let i = 0; i < m - 1; i++) {
    let j = i
    let k = 0 // 公共后缀子串长度
    while (j >= 0 && modestr[j] === modestr[m - 1 - k]) {
      j--
      k++
      suffix[k] = j + 1
    }
    if (j === -1) {
      prefix[k] = true
    }
  }
}

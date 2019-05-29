// 利用栈这种数据结构来实现浏览器的前进后退功能
// a -> b -> c -> d
// openNew: 代表打开一个新的连接

class BrowserHistory {
  constructor() {
    this.current = []
    this.history = []
    this._getStatus()
  }

  _getStatus() {
    const historyLen = this.history.length
    const currentLen = this.current.length

    console.log(
      '<-',
      currentLen > 0 ? '✅' : '❎',
      '  ->: ',
      historyLen > 0 ? '✅' : '❎'
    )
  }

  forward(page, openNew = false) {
    // 进入哪个页面
    if (openNew) {
      this.history.length = 0
    }
    this.current.push(page)

    this._getStatus()
  }

  backward() {
    const historyPage = this.current.pop()
    this.history.push(historyPage)

    this._getStatus()
  }
}

const bh = new BrowserHistory()
bh.forward('a')
bh.forward('b')

bh.backward()
bh.forward('c', true)

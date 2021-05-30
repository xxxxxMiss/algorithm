let p = Promise.resolve(100)
let p2 = Promise.resolve(p)
console.log(p === p2)

const PENDING = 'pending'
const FULFILED = 'fulfilled'
const REJECTED = 'rejected'

const resolvePromise = (promise, x, resolve, reject) => {
  if (promise === x) {
    reject(new TypeError('circle reference'))
  }
  if ((x !== null && typeof x === 'object') || typeof x === 'function') {
    let called = false
    try {
      const then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          y => {
            if (called) return
            called = true
            resolvePromise(promise, y, resolve, reject)
          },
          r => {
            if (called) return
            called = true
            reject(r)
          }
        )
      } else {
        resolve(x)
      }
    } catch (error) {
      if (called) return
      called = true
      reject(error)
    }
  } else {
    resolve(x)
  }
}

class PromiseEx {
  constructor(excutor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.fulfilledCallbacks = []
    this.rejectedCallbacks = []
    try {
      excutor(this.#resolve, this.#reject)
    } catch (error) {
      this.#reject(error)
    }
  }

  #resolve(value) {
    if (value instanceof PromiseEx) {
      return value.then(this.#resolve, this.#reject)
    }
    setTimeout(() => {
      if (this.status === PENDING) {
        this.status = FULFILED
        this.value = value
        this.fulfilledCallbacks.forEach(cb => cb(this.value))
      }
    })
  }

  #reject(reason) {
    setTimeout(() => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason
        this.rejectedCallbacks.forEach(cb => cb(this.reason))
      }
    })
  }

  static resolve(value) {
    return new PromiseEx(resolve => {
      resolve(value)
    })
  }

  static reject(reason) {
    return new PromiseEx((_, reject) => {
      reject(reason)
    })
  }

  then(onFulfilled, onRejected) {
    let newPromise = null
    if (this.status === FULFILED) {
      return (newPromise = new PromiseEx((resolve, reject) => {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value)
            resolvePromise(newPromise, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }))
    }
    if (this.status === REJECTED) {
      return (newPromise = new PromiseEx((resolve, reject) => {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason)
            resolvePromise(newPromise, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }))
    }
    if (this.status === PENDING) {
      return (newPromise = new PromiseEx((resolve, reject) => {
        this.fulfilledCallbacks.push(value => {
          try {
            const x = onFulfilled(value)
            resolvePromise(newPromise, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
        this.rejectedCallbacks.push(reason => {
          try {
            const x = onRejected(reason)
            resolvePromise(newPromise, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }))
    }
  }
}

function sleep(tag, n, value) {
  console.log(tag)
  return new Promise(resolve => {
    setTimeout(() => resolve(value), n)
  })
}
async function* mygen() {
  yield sleep('1st', 10000, 'value 1 delay 10s')
  yield sleep('2nd', 1000, 'value 2 now')
}

const tor = mygen()
console.log(Symbol.asyncIterator in tor)
void (async function () {
  for await (const x of tor) {
    console.log(x)
  }
})()

var thenableObj2 = {
  then(resolve) {
    resolve('ojb2')
  },
}

var x = {
  then(resolve) {
    resolve(thenableObj2)
  },
}

Promise.resolve(x).then(value => {
  console.log(value)
})

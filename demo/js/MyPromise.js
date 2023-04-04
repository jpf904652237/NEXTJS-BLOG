/**
 * @description: Promise的简单实现
 * @author: jipengfei
 */
class MyPromise {
  state = 'pending' // Promise的状态 pending fulfilled rejected
  value = null // Promise的值
  reason = null // Promise的原因
  resulveCallbacks = [] // 存放成功的回调
  rejectCallbacks = [] // 存放失败的回调

  constructor(fn) {
    const resolveHandler = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.resulveCallbacks.forEach((fn) => fn())
      }
    }

    const rejectHandler = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.rejectCallbacks.forEach((fn) => fn())
      }
    }

    try {
      fn(resolveHandler, rejectHandler)
    } catch (err) {
      rejectHandler(err)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    onRejected = typeof onRejected === 'function' ? onRejected : (err) => { throw err }

    if (this.state === 'pending') {
      const p1 = new MyPromise((resolve, reject) => {
        this.resulveCallbacks.push(() => {
          try {
            const newValue = onFulfilled(this.value)
            resolve(newValue)
          } catch (error) {
            reject(error)
          }
        })

        this.rejectCallbacks.push(() => {
          try {
            const newReason = onRejected(this.reason)
            reject(newReason)
          } catch (error) {
            reject(error)
          }
        })
      })
      return p1
    }

    if (this.state === 'fulfilled') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newValue = onFulfilled(this.value)
          resolve(newValue)
        } catch (error) {
          reject(error)
        }
      })
      return p1
    }

    if (this.state === 'rejected') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newReason = onRejected(this.reason)
          reject(newReason)
        } catch (error) {
          reject(error)
        }
      })
      return p1
    }
  }

  // 就是then的一个语法糖，简单模式
  catch(fn) {
    return this.then(null, fn)
  }
}

MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => {
    resolve(value)
  })
}

MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason)
  })
}

MyPromise.all = function (promiseList = []) {
  const p1 = new MyPromise((resolve, reject) => {
    const result = []
    const length = promiseList.length
    let resolvedCount = 0

    promiseList.forEach((p, index) => {
      p.then(data => {
        result.push(data)
        // resolvedCount 必须在then里面做++
        // 不能用index，因为有可能有的promise已经resolve了，但是index还是0
        resolvedCount++
        if (resolvedCount === length) {
          resolve(result)
        }
      }).catch((err) => reject(err))
    })
  })
  return p1
}

MyPromise.race = function (promiseList = []) {
  let resolved = false // 用来标记是否已经resolve了
  const p1 = new MyPromise((resolve, reject) => {
    promiseList.forEach((p) => {
      // 如果已经resolve了，就不再执行后面的promise
      p.then(data => {
        if (!resolved) {
          resolved = true
          resolve(data)
        }
      }).catch((err) => reject(err))
    })
  })
  return p1
}
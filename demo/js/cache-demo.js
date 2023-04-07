// 闭包隐藏数据，只提供API
function createCatch() {
  const data = {} // 私有数据
  return {
    set: function (key, value) {
      data[key] = value
    },
    get: function (key) {
      return data[key]
    }
  }
}

const c = createCatch()
c.set('a', 100)
c.set('b', 200)
console.log(c.get('a')); // 100
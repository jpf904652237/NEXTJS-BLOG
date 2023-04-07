class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector)
    const length = result.length
    for (let i = 0; i < length; i++) {
      this[i] = result[i]
    }
    this.length = length
    this.selector = selector || ''
  }
  get(index) {
    return this[index]
  }
  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i]
      fn(elem)
    }
  }
  on(type, fn) {
    return this.each(elem => {
      elem.addEventListener(type, fn, false)
    })
  }
  // ... 其他方法
  append(node) {}
  addClass(name) {}
  html(data) {}
}

// 插件
jQuery.prototype.dialog = function (info) {
  alert(info)
}

// 造轮子
class myJQuery extends jQuery {
  constructor(selector) {
    super(selector)
  }
  // ... 重写父类的方法
  addClass(name) {
    return this.each(elem => elem.classList.add(name))
  }
  style(data) {}
}

// const $p = new jQuery('p')
// console.log('$p===>', $p);
// $p.get(1)
// $p.each((elem) => console.log(elem.nodeName))
// $p.on('click', () => alert('clicked'))
// bind
function fn1(a,b,c) {
  console.log('this===>', this);
  console.log(a,b,c);
  return 'this is fn1'
}
// const fn2 = fn1.bind({x: 100}, 10, 20, 30)
// const res = fn2()
// console.log('res===>', res);

Function.prototype.bind1 = function () {
  // 获取参数
  const args = Array.prototype.slice.call(arguments)
  // 获取this
  const t = args.shift()
  // 获取函数 fn1.bind(...) 中的fn1
  const self = this
  // 返回一个函数
  return function () {
    return self.apply(t, args)
  }
}

Function.prototype.apply1 = function (context, arr) {
  // 获取调用apply的函数，即fn1.apply(...)
  const self = this
  // 给context添加一个方法
  context.fn = self
  // 调用context.fn
  const result = context.fn(...arr)
  // 删除context.fn
  delete context.fn
  // 返回结果
  return result
}

Function.prototype.call1 = function (context) {
  // 获取参数,从第二个参数开始截取
  const args = Array.prototype.slice.call(arguments, 1)
  // 获取调用call的函数，即fn1.call(...)
  const self = this
  // 给context添加一个方法
  context.fn = self
  // 调用context.fn
  const result = context.fn(...args)
  // 删除context.fn
  delete context.fn
  // 返回结果
  return result
}

// const fn3 = fn1.bind1({x: 100}, 1, 2, 3)
// const res2 = fn3()
// console.log('res2===>', res2);

fn1.apply1({x: 100}, [4, 5, 6])
fn1.call1({x: 100}, 7, 8, 9)

// call bind apply的区别
// 1. call和apply都是立即执行函数，bind是返回一个函数
// 2. call和apply的第一个参数都是this的指向，bind的第一个参数也是this的指向，但是bind可以柯里化
// 3. call和apply的参数不同，call是一个一个传递，apply是传递一个数组
---
title: 'Map和Set'
date: '2023-04-12'
---
### Map和Set
* 有序和无序
 - 总结
  - 有序： 操作慢
  - 无序： 操作快，但无序
  - 如何结合两者优点？ -- 二叉树、及其变种
![有序和无序](/images/有序和无序.png)
1. Map和Object的区别
* API不同，Map可以以任意类型为key
* Map是有序结构（重要）
* Map操作同样很快
```js
// const obj = {
//   key1: 'hello',
//   key2: 100,
//   key3: {x: 100}
// }
const m = new Map([
  ['key1', 'hello'],
  ['key2', 100],
  ['key3', {x: 100}']
])
m.get('key1')
m.set('key4', 'world')
m.delete('key1')
m.has('key1')
m.clear()
m.size
```
2. Set和Array的区别
* API不同，Set可以以任意类型为key
```js
const arr = [1, 2, 3, 4, 5]
const set = new Set([10, 20, 30, 40, 50])
set.add(60) // set无序结构，没有pop push unshift shift
set.delete(10)
set.has(10)
set.forEach(value => console.log(value))
set.size

// Set元素不能重复（数组去重）
const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
const set = new Set(arr)
console.log(set) // Set {1, 2, 3, 4, 5}
// 使用Set去重
const newArr = [...set]
```
* Set元素不能重复
* Set是无序结构，操作很快

### WeakMap和WeakSet
* 弱引用，防止内存泄漏
* WeakMap的key只能是对象，value可以是任意类型
* WeakSet的元素只能是对象，不能是其他类型
* 没有forEach和size，只能用add delete has
```js
// WeakMap 弱引用，防止内存泄漏
const wMap = new WeakMap()
const a = {}
function fn() {
  const obj = { name: 'xxx' }
  // a.obj = obj // 强引用
  wMap.set(obj, 'hello') // 弱引用, key还是会被回收， 只能用对象作为key
  // garbage collection 垃圾清理不一定是及时的
}
fn()
// WeakSet 弱引用，防止内存泄漏，只能用对象作为key

const wMap = new WeakMap()
const a = {}
function fn() {
  const obj = { name: 'xxx' }
  // a.obj = obj // 强引用
  wMap.set(obj, 'hello') // 弱引用
}
fn()
```
```
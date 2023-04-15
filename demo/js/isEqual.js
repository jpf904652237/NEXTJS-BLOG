

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

// 全相等
function isEqual(obj1, obj2) {
  // 判断传入的参数是否为对象
  if (!isObject(obj1) || !isObject(obj2)) {
    // 值类型的比较
    return obj1 === obj2
  }
  if (obj1 === obj2) {
    return true
  }
  // 两个都是对象或数组，而且不相等
  // 1. 先取出obj1和obj2的keys，比较长度
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  if (obj1Keys.length !== obj2Keys.length) {
    return false
  } 
  // 2. 以obj1为基准，和obj2依次递归比较
  for (let key in obj1) {
    // 递归比较, 有一个不相等就返回false
    const res = isEqual(obj1[key], obj2[key])
    if (!res) {
      return false
    }
  }
  // 3. 全相等
  return true
}
const obj1 = {
  a: 100,
  b: {
    x: 100,
    y: 200
  }
}
const obj2 = {
  a: 100,
  b: {
    x: 100,
    y: 200
  }
}
console.log(isEqual(obj1, obj2))
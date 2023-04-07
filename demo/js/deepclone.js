/**
 * 深拷贝
 */
const obj = {
  age: 20,
  name: 'jack',
  address: {
    city: 'beijing'
  },
  arr: ['a', 'b', 'c']
}

const obj2 = deepClone(obj)
obj2.address.city = 'shanghai'
obj2.arr.push('d')
console.log(obj) // beijing
console.log('obj2===>', obj2);

/**
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj = {}) {
  // obj不是对象或者是null，直接返回
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  // 初始化返回结果
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    // 保证key不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key])
    }
  }

  // 返回结果
  return result
}
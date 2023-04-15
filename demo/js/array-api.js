const arr = [1, 2, 3, 4, 5];

// pop
// const popRes = arr.pop(); // 返回尾部被删除的元素
// console.log(popRes, arr);

// shift
// const shiftRes = arr.shift(); // 返回头部被删除的元素
// console.log(shiftRes, arr);

// push
// const pushRes = arr.push(6); // 返回length
// console.log(pushRes, arr);


// unshift
// const unshiftRes = arr.unshift(0); // 返回length
// console.log(unshiftRes, arr);

// 纯函数：1.不改变原数组（没有副作用）： 2.返回一个新数组
// concat
// const concatRes = arr.concat(6, 7, 8); // 返回一个新数组
// console.log(concatRes, arr);

// map
// const mapRes = arr.map(item => item * 2); // 返回一个新数组
// console.log(mapRes, arr);

// filter
// const filterRes = arr.filter(item => item > 3); // 返回一个新数组
// console.log(filterRes, arr);

// slice
const sliceRes = arr.slice(1, 3); // 返回一个新数组
console.log(sliceRes, arr);
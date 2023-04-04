---
title: 'JS异步'
date: '2023-03-31'
---
### JS异步
* 请描述event loop（事件循环/事件轮询）的机制，可画图
![eventloop](/images/eventloop执行过程.png)
```
* 同步代码，一行一行放在Call Stack执行
* 遇到异步，会先记录下，等待时机
* 时机到了，就移动到Callback Queue
* 如果Call Stack为空（即同步代码执行完）Event Loop开始工作
* 轮询查找Callback Queue，如有则移动到Call Stack执行
* 然后继续查找
```

* 什么是宏任务和微任务，两者有什么区别？
* Promise有哪三种状态？如何变化？
```
resolved rejected pending
pending => resolved  pending => rejected 不可逆
* then正常返回resolved，里面有报错则返回rejected
* catch正常返回resolved，里面有报错则返回rejected
```
![reject](/images/reject.png)

* Promise场景题
![promise场景题](/images/promise场景题.png)

* 场景题-async/await语法
```
    async function fn() {
      return 100;
    }
    (async function () {
      const a = fn(); // a is a promise
      const b = await fn(); // 100
    })()
```
```
    (async function() {
      console.log('start');
      const a = await 100
      console.log('a===>', a);
      const b = await Promise.resolve(200)
      console.log('b===>', b);
      const c = await Promise.reject(300)
      console.log('c===>', c);
      console.log('end');
    })()
    // 结果
    // start 
    // a===> 100
    // b===> 200
    // Uncaught (in promise) 300
```

* 场景题-promise和setTimeout的顺序
```
    console.log(100);
    setTimeout(() => {
      console.log(200); 
    });
    Promise.resolve().then(() => {
      console.log(300);
    })
    console.log(400);
    //结果 100 400 300 200
```

* async/await
```
async function async1 () {
  console.log('async1 start') // 2
  await async2()
  // await的后面，都可以看作是 callback 里的内容，即异步
  // 类似，event loop、， setTimeout（cb1）
  // setTimeout(function(){ console.log('async1 end') })
  // Promise.resolve().then(() => { console.log('async1 end') })
  console.log('async1 end') // 5
}

async function async2 () {
  console.log('async2') // 3 重要
}

console.log('script start') // 1
async1()
console.log('script end') // 4
// 同步代码已执行完（event loop）
```

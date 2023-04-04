---
title: 'macroTask-microTask'
date: '2023-04-03'
---

* 什么是宏任务，什么是微任务
```
* 宏任务： setTimeout, setInterval,Ajax,DOM事件
* 微任务： Promise async/await
* 微任务执行时机比宏任务要早
```
* event loop和DOM渲染
```
* 每次Call Stack清空（即每次轮询结束），即同步任务执行完
* 都是DOM重新渲染的机会，DOM结构如有改变则重新渲染
* 然后再去触发下一次Event Loop
```
![eventloop-DOM渲染](/images/eventloop-DOM渲染.png)
* 宏任务和微任务的区别
```
* 宏任务： DOM渲染后触发，如setTimeout
* 微任务： DOM渲染前触发，如Promise
```
![macroTask-microTask](/images/macroTask-microTask.png)

* 从event loop解释，为何微任务执行更早
![microTask-early](/images/microTask-early.png)
```
* 在Call Stack清空之后， 尝试DOM渲染之前，插入了微任务队列
```

* async面试题
![async面试题](/images/async面试题.png)
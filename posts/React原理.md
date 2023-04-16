---
title: 'React原理'
date: '2023-04-16'
---
1. 函数式编程
  - 纯函数
  - 不可变值
2. vdom和diff
![回顾vdom](/images/回顾vdom.png)

  - diff
    - 只比较层级，不跨级比较
    - tag不相同，则直接删掉重建，不再深度比较
    - tag和key，两者都相同，则认为是相同节点，不再深度比较
3. JSX本质
[babel转换jsx地址](https://www.babeljs.cn/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=PTAEGMHsDsGcBdQEMAOLQF5QB4AmBLANwD4AoEUSqnASWhQFdFYGAjAW33gBUuAbAKYYA3jADKbTj34CAvqGBkK1StmAESpLVDiI--BAFFB7TDgZ8ylYfAAWBgHQIk8AQ_0IH7VAAofXAXYAGlB8aFwBAA8ASkxiHH1QAGsBAE8RAPYHfFxZYngZAC5hTIcC-EFZNX1iaNlSNQtiIA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.21.4&externalPlugins=&assumptions=%7B%7D)
  - JSX等同于Vue模版
  - Vue模版不是html
    - Vue模版渲染流程
    - render -> vnode -> dom
  - JSX也不是JS
    - JSX渲染流程
    - babel -> createElement -> vnode -> dom
![babel转换JSX](/images/babel转换JSX.png)

### JSX本质
  - JSX是一个语法糖，最终会被babel转换成React.createElement
  - React.createElement返回一个vnode
  - 第一个参数，可以是一个组件，也可以是一个标签
  - 组件名，首字母必须大写
4. 合成事件
  - 为什么要合成事件机制？
    - 更好的兼容性和跨平台
    - 挂载到document，减少内存消耗，避免频繁解绑（React17事件绑定到root组件，有利于多个React版本并存，例如微前端）
    - 方便事件的统一管理（如事物机制）
5. setState batchUpdate
  - setState主流程
  ![setState主流程](/images/setState主流程.png)

  - isBatchingUpdates为false时，setState会立即更新，为true时为异步更新
  ![isBatchingUpdates](/images/isBatchingUpdates.png)

  - 哪些能命中batchUpdate机制
    - 生命周期（和它调用的函数）
    - React中注册的事件（和它调用的函数）
    - React可以管理的入口
  - 哪些不能命中batchUpdate机制
    - setTimeout
    - 原生事件
    - Promise
    - ajax
    - 一些第三方库
6. 组件渲染过程
  - JSX如何渲染为页面
    - JSX即createElement函数
    - 执行生成vnode
    - patch(element, vnode)和patch(vnode, newVnode)生成dom
  - setState之后如何更新页面
    - setState(newState) --> dirtyComponent(可能有子组件)
    - render()生成newVnode
    - patch(vnode, newVnode)更新dom
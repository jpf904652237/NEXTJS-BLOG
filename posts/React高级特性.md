---
title: 'React高级特性'
date: '2023-04-15'
---
### React高级特性
0. 函数组件
  - 纯函数，输入props，输出jsx
  - 没有实例，没有生命周期，没有state
  - 不能扩展其他方法
1. 性能优化
  - shouldComponentUpdate
  - PureComponent
  - memo
  - React.memo
  - React.useMemo
  - React.useCallback
  - React.lazy
  - Reac
2. 高阶组件HOC
  - 本质是一个函数，接收一个组件，返回一个新组件
  - 作用：扩展组件的功能
  - 用法：装饰器模式
  - 用法：高阶组件的组合
  - 用法：高阶组件的嵌套
  - 用法：高阶组件的继承
3. render props

4. 异步组件
  - import()
  - React.lazy
  - React.Suspense
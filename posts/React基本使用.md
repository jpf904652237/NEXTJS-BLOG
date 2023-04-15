---
title: 'React'
date: '2023-04-14'
---
### React相关
1. 非受控组件
  * ref
  * defaultValue defaultChecked
  * 手动操作DOM元素，不通过state管理数据
  - 使用场景
    - 必须要手动操作DOM元素，setState实现不了
    - 文件上传<input type=file>
    - 某些富文本编辑器，需要传入DOM元素
  - 受控组件 vs 非受控组件
    - 优先使用受控组件，符合React设计原则
    - 必须操作DOM时，在使用非受控组件

2. Protals使用场景
  - overflow: hidden
  - 父组件z-index值太小
  - fixed需要放在body第一层级

3. context
  - 公共信息（语言，主题）如何传递给每个组件
  - 用props传递层级太深
  - 用redux小题大做

4. 事件
  - bind this，class组件下this默认是undefined，需要在constructor内手动绑定
  - 关于event参数，react合成事件和原生事件的区别
  ```js
  // react合成事件
  function SyntheticEvent() {
    this.persist = function() {}
  }
  // 原生事件
  function NativeEvent() {
    this.persist = function() {
      throw new Error('This synthetic event is reused for performance reasons. If you\'re seeing this, you\'re calling `event.persist()` on a released/nullified synthetic event. This is a no-op. See https://fb.me/react-event-pooling for more information.')
    }
  }
  // 通过event.nativeEvent获取原生事件
  /**
   * 1. event是SyntheticEvent，模拟出来DOM事件所有能力
   2. event.nativeEvent是原生时间对象
   3. 和DOM事件不一样，和Vue事件也不一样
   4. React16绑定到document，React17绑定到root组件，有利于微前端能力，不共用document
   */
  ```
  - 传递自定义参数

5. 表单
  - 受控组件
  - input textarea select用value
  - checkbox radio用checked

6. 组件传参
  - props，传递数据，传递函数，类型检查
  - context
  - redux
  - hooks

7. setState
  - 不可变值
  ```js
  // 函数式组件默认没有state，需要useState
  // this.state.count++ // 错误用法
  this.setState({
    count: this.state.count + 1
  })
  ```
  ![不可变值](/images/不可变值.png)
  - 可能是异步更新（有可能是同步更新）
  ```js
  this.setState({
    count: this.state.count + 1
  }, () => {
    // 联想到vue $nextTick
    consle.log('count by callback', this.state.count) // 回调函数，同步的，拿到最新值
  })
  console.log(this.state.count) // 异步的，拿不到最新值

  // setTimeout中是同步的
  setTimeout(() => {
    console.log('count in setTimeout', this.state.count)
  }, 0)
  // 在自己定义的DOM事件中是同步的，注意要在componentWillUnmount中解绑
  ```
  - 可能会被合并
  ```js
  // 传入对象（类似于Object.assign），会被合并成一个setState
  this.setState({
    count: this.state.count + 1
  })
  this.setState({
    count: this.state.count + 1
  })
  this.setState({
    count: this.state.count + 1
  })

  // 传入函数，不会被合并,执行结果是+3
  this.setState((prevState) => {
    return {
      count: prevState.count + 1
    }
  })
  this.setState((prevState) => {
    return {
      count: prevState.count + 1
    }
  })
  this.setState((prevState) => {
    return {
      count: prevState.count + 1
    }
  })
  ```

8. React18中setState的变化
  - React<=17 setState
    - React组件事件：异步更新 + 合并state
    - DOM事件，setTimeout：同步更新，不合并state
  - React18 setState
    - React组件事件：异步更新 + 合并state
    - DOM事件，setTimeout：异步更新，合并state
    - Automatic batching  自动批处理
  - 总结
    - React <= 17: 只有React组件事件才批处理
    - React 18: 所有事件都自动批处理 Automatic Batching
    - React18: 操作一致，更加简单，降低了用户的心智负担

9. React组件生命周期
  - 单组件生命周期
  ![单组件生命周期](/images/单组件生命周期.png)

  ![不常用生命周期](/images/不常用生命周期.png)

  - 父子组件生命周期，和Vue一样
    - 挂载阶段：
      - 1.1 父组件的 constructor() 方法。
      - 1.2 父组件的 static getDerivedStateFromProps() 方法。
      - 1.3 父组件的 render() 方法。
      - 1.4 子组件的 constructor() 方法。
      - 1.5 子组件的 static getDerivedStateFromProps() 方法。
      - 1.6 子组件的 render() 方法。
      - 1.7 子组件的 componentDidMount() 方法。
      - 1.8 父组件的 componentDidMount() 方法。
    - 更新阶段：
      - 2.1 父组件的 static getDerivedStateFromProps() 方法。
      - 2.2 父组件的 shouldComponentUpdate() 方法。
      - 2.3 父组件的 render() 方法。
      - 2.4 子组件的 static getDerivedStateFromProps() 方法。
      - 2.5 子组件的 shouldComponentUpdate() 方法。
      - 2.6 子组件的 render() 方法。
      - 2.7 子组件的 getSnapshotBeforeUpdate() 方法。
      - 2.8 子组件的 componentDidUpdate() 方法。
      - 2.9 父组件的 getSnapshotBeforeUpdate() 方法。
      - 2.10 父组件的 componentDidUpdate() 方法。
    - 卸载阶段：
      - 3.1 父组件的 componentWillUnmount() 方法。
      - 3.2 子组件的 componentWillUnmount() 方法。
需要注意的是，上述生命周期方法不一定全部都会被执行，具体执行哪些方法取决于组件的状态变化。例如，如果组件的状态没有发生改变，那么在更新阶段可能不会执行 shouldComponentUpdate()、render()、getSnapshotBeforeUpdate() 和 componentDidUpdate() 这四个方法。

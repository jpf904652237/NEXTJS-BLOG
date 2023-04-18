---
title: 'React真题1'
date: '2023-04-17'
---
### React真题1
1. React中的key的作用是什么？
```js
* key的作用是给每个元素一个唯一的标识，方便react进行diff算法
* key的值最好是不会变化的，如果是数组的下标，当数组发生变化时，key的值也会发生变化
* 减少渲染次数，提升渲染性能
```

2. 组件之间如何通讯
```js
* 父组件向子组件通讯：通过props传递
* 子组件向父组件通讯：通过props传递一个函数，子组件调用这个函数
* 兄弟组件通讯：通过父组件通讯
* 跨级组件通讯：通过context，redux
```

3. JSX本质是什么
```js
* JSX本质是一个对象，通过babel转换成React.createElement
* 执行返回vnode
```

4. Context是什么，如何应用
```js
* 父组件，向其下所有子孙组件传递数据
* Context是一个全局的数据存储，可以在任何组件中获取到
* 使用步骤：
  * 创建Context对象
  * 在父组件中使用Provider组件包裹子组件，传递value
  * 在子组件中使用Consumer组件包裹需要使用的数据
```

5. shouldComponentUpdate的作用
```js
* shouldComponentUpdate是一个生命周期函数，用于控制组件是否重新渲染
* shouldComponentUpdate默认返回true，会导致组件不必要的重新渲染
* react默认：父组件有更新，子组件则无条件也更新
```

6. redux单项数据流
```js
* redux单项数据流：view -> action -> reducer -> store -> view
* view：视图层，用户界面
* action：动作，是一个对象，包含type和payload
* reducer：纯函数，接收旧的state和action，返回新的state
* store：仓库，存储数据
```

7. 什么是纯函数
```js
* 纯函数：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
* 重点：不可变值
```

8. redux如何异步请求
```js
* redux-thunk
* 使用异步action
```

9. 函数式组件和类组件的区别
```js
* 函数式组件：没有state，没有生命周期函数，没有this
* 类组件：有state，有生命周期函数，有this
```

10. hooks的作用
```js
* hooks是react16.8版本新增的特性，可以让函数式组件拥有state和生命周期函数
```

11. React事件和DOM事件的区别
```js
* React事件：React事件是合成事件，是对原生事件的封装
* 所有事件都是通过事件委托的方式绑定到document上的
* dispatchEvent方法触发事件
```

12. React性能优化
```js
* 渲染列表使用key
* 自定义事件、DOM事件及时销毁
* 合理使用异步组件
* 减少函数bind this的次数
* shouldComponentUpdate PureComponent React.memo
```

13. React和Vue的区别
```js
* 都支持组件化
* 都是数据驱动视图
* 都有虚拟DOM

* 区别
* React使用JSX拥抱JS，Vue使用模版拥抱html
* React函数式编程，Vue声明式编程
* React更多需要自力更生，Vue把想要的都给你
```

14. webpack性能优化
```js
* 生产环境
* 优化babel-loader
* IgnorePlugin忽略moment中的locale文件
* noParse忽略不需要解析的文件
* happypack多进程打包
* ParallelUglifyPlugin多进程压缩


* 不能用于生产环境
* 自动刷新
* 热更新
* DllPlugin

* 优化产出代码
* 小图片base64
* bundle加hash
* 懒加载
* 提取公共代码
* 使用CDN
* IgnorePlugin忽略moment中的locale文件
* 使用production
* Scope Hoisting
```
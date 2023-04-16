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
  ```js
  // 透传props
  const withLog = (WrappedComponent) => {
    return (props) => {
      return <WrappedComponent {...props} />
    }
  }
  ```
  ![高阶组件](/images/高阶组件.png)
3. render props
![render props](/images/Render-props.png)

4. 异步组件
  - import()
  - React.lazy
  - React.Suspense

5. 性能优化（对于React更加重要）
  - shouldComponentUpdate,要配合不可变值使用
  ```js
  // shouldComponentUpdate默认返回true，会导致组件不必要的重新渲染
  // react默认：父组件有更新，子组件则无条件也更新
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true // 可以渲染
    }
    return false // 不重复渲染
  }
  // shouldComponentUpdate在函数式组件中相当于PureComponent
  ```
  - PureComponent和React.memo
    - PureComponent，SCU中实现了<strong>浅比较<strong>
  ```js
  class TodoList extends PureComponent {
    render() {
      return (
        <div>
          <div>
            <input value={this.state.inputValue} onChange={this.handleInputChange} />
            <button onClick={this.handleBtnClick}>提交</button>
          </div>
          <ul>
            {this.getTodoItem()}
          </ul>
        </div>
      )
    }
  }
  // React.memo
  const TodoList = memo((props) => {
    const { inputValue, handleInputChange, handleBtnClick, list, handleItemDelete } = props
    return (
      <div>
        <div>
          <input value={inputValue} onChange={handleInputChange} />
          <button onClick={handleBtnClick}>提交</button>
        </div>
        <ul>
          {list.map((item, index) => {
            return (
              <TodoItem
                key={index}
                content={item}
                index={index}
                handleItemDelete={handleItemDelete}
              />
            )
          })}
        </ul>
      </div>
    )
  })
  ```
  - 不可变值
  ```js
  // immutable.js，按需使用，注意state的层级
  ```
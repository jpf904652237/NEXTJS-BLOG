---
title: 'webpack和babel'
date: '2023-04-18'
---
### webpack和babel
+ ES6模块化，浏览器暂不支持
+ ES6语法，浏览器并不完全支持
+ 压缩代码，整合到吗，以让网页加载更快
```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // production
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配js文件
        loader: 'babel-loader', // 使用babel-loader
        include: path.join(__dirname, 'src'), // 只转化src目录下的js
        exclude: /node_modules/, // 排除掉node_modules，优化打包速度
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    port: 3002, // 如果端口被占用，修改为其他端口
  }
}
```

1. webpack
  - webpack已是前端打包构建的不二选择
  - 每日必用，面试必考
  - 成熟的工具，重点在于配置和使用，原理并不高优

2. webpack基本配置
  - 拆分配置和merge，webpack-merge
  - 启动本地服务，devServer
  - 处理ES6，通过babel-loader
  - 处理样式，通过css-loader和style-loader，loader的执行顺序是从右到左
  - 处理file，通过file-loader，处理图片，字体等，url-loader可以处理base64
  - 模块化
3. webpack高级配置
  - 多入口
    - 修改`entry`配置，可以是一个字符串，也可以是一个数组，也可以是一个对象
    - 多入口的情况下，`output`的`filename`需要使用占位符
    - 多入口的情况下，`HtmlWebpackPlugin`需要配置多个，chunk的配置也需要修改
  
  - 抽离css文件
    - 使用`mini-css-extract-plugin`插件，将css抽离成单独的文件
      - 配置`mini-css-extract-plugin`插件，需要在`module`中配置`css-loader`和`style-loader`，并且需要在`plugins`中配置`mini-css-extract-plugin`插件
      - `optimization`中配置`minimizer`，使用`optimize-css-assets-webpack-plugin`插件，压缩css文件

    - 抽离公共代码
      - `optimization`中配置`splitChunks`，将公共代码抽离成单独的文件
      ![splitChunks](/images/splitChunks.png)
      - `optimization`中配置`runtimeChunk`，将webpack的运行代码抽离成单独的文件

    - 懒加载（引入动态数据，import引入，不需要额外配置，webpack默认支持）
      ```js
        setTimeout(() => {
          import(/* webpackChunkName: 'test' */'./test').then(({ mul }) => {
            console.log(mul(4, 5));
          })
        }, 1000)
      ```

    - 处理JSX
      - 安装`@babel/preset-react`，配置`babel-loader`，在`presets`中添加`@babel/preset-react`
    
    - 处理Vue
      - 安装`vue-loader`，配置`vue-loader`，在`module`中配置`vue-loader`

4. 优化打包效率

5. 优化产出代码

6. 构建流程概述

7. babel

### webpack面试题
1. 前端代码为何要进行构建和打包

2. module chunk bundle分别是什么意思，有何区别
  - module： 各个源码文件，比如js、css、图片等
  - chunk： 由多个module组合而成，用于代码合并和分割，如entry immport() splitChunk等，一个chunk可能对应一个文件，也可能对应多个文件
  - bundle： 最终的输出文件，一个bundle可能包含多个chunk
3. loader和plugin的区别

4. webpack如何实现懒加载

5. webpack常见性能优化
  - 构建速度
    - 优化babel-loader的配置
    ![优化babel-loader](/images/优化babel-loader.png)
    - IgnorePlugin，忽略某些库
    - noParse，忽略某些库
    - happyPack，多进程打包
    - ParallelUglifyPlugin，多进程压缩
    - 自动刷新
    - 热更新
    - DllPlugin，预编译资源模块
6. babel-runtime和babel-polyfill的区别
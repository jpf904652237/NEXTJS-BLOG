---
title: 'webpack和babel'
date: '2023-04-11'
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
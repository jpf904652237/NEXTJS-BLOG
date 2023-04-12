---
title: 'HTML-CSS常见面试题'
date: '2023-03-30'
---
#HTML面试题
### 1.如何理解HTML语义化？
HTML 语义化的核心是**反对大篇幅的使用无语义化的 div + css + span，而鼓励使用 HTML 定义好的语义化标签**。那么我们应该关心的就是标签的语义以及应该是用的场景。
1.让人更容易读懂（增加代码可读性）
2.让搜索引擎更容易读懂（SEO）

**header, hgroup, footer, nav, article, section, aside等标签**
### 2.默认情况下，哪些HTML标签是块级元素、哪些是内联元素？
```
display:block/table;div、h1、table、ul、ol、p等
display:inline/inline-block;有span、img 、input、button等
```

#CSS面试题
### CSS-布局
* 盒子模型的宽度如何计算
```div宽度 = width + padding + border * 2
offsetWidth = （内容宽度 + 内边距 + 边框）， 无外边距
```

* margin纵向重叠的问题
![纵向重叠](/images/纵向重叠.png)

```js
* 相邻元素的margin-top和margin-bottom会发生重叠
* 空白内容的<p></p>也会重叠
* 答案： 15px
```

* margin负值的问题
```js
* margin-top和margin-left负值，元素向上、向左移动
* margin-right负值，右侧元素左移，自身不受影响
* margin-bottom负值，下方元素上移，自身不受影响
```
* BFC理解和应用
```js
BFC理解
* Block format context,块级格式化上下文
* 一块独立渲染区域，内部元素的渲染不会影响边界以外的元素
形成BFC的常见条件
* float不是none
* position是absolute或fixed
* overflow不是visible
* display是flex inline-block等
```

* BFC常见应用
* 清除浮动
![BFC](/images/BFC.png)

* float布局的问题（圣杯布局，双飞翼布局），以及clearfix
```
三栏布局，屏幕放大缩小两边不受影响，中间部分自适应

* 使用float布局
* 两侧使用margin负值，以便和中间内容横向重叠
* 防止中间内容被两侧覆盖，一个用padding 一个用margin

clearfix css代码
 
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
```
* flex布局，画骰子
```
flex常用语法回顾，
* flex-direction
* justify-content
* align-items
* flex-wrap
* align-self

骰子html
```

### CSS-定位
* absolute和relative分别依据什么定位？
```
relative相对于自身定位
absolute依据最近一层的定位元素定位
定位元素
* absolute relative fixed  body
```
* 居中对齐有哪些实现方式？
水平居中 垂直居中
```
水平剧中
* inline元素： text-align：center
* block元素： margin：auto
* absolute元素： left：50% + margin-left负值

垂直居中
* inline元素： line-height的值等于height值
* absolute元素： top：50% + margin-top负值
* absolute元素： transform（50%， 50%）
* absolute元素： top，left，bottom，right = 0 + margin：auto
```

### CSS-图文样式
* line-height如何继承
```
* 写具体数值，如30px，则继承该值
* 写比例，如2/1.5，则继承该比例
* 写百分比，如200%，则继承计算出来的值（有坑的地方，是父元素计算之后的值）
```

### CSS-响应式
* rem是什么？
```
rem是一个长度单位
* px，绝对长度单位，最常用
* em，相对长度单位，相对于父元素，不常用
* rem，相对长度单位，相对于根元素，常用语响应式布局
```

* 响应式布局的常用方案
```
* media-query，根据不同的屏幕宽度设置根元素font-size
* rem，基于根元素的相对单位
```
![响应式](/images/响应式.png)

* CSS-响应式-vw/vh
```
* rem的弊端
    rem的阶梯性
* 网页视口尺寸
* vw/vh
vh网页视口高度的1/100
vw网页视口宽度的1/100
vmax取两者最大值；vmin取两者最小值
```

* 如何实现响应式
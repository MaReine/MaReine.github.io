---
title: 面试题系列之CSS
categories: []
tags: [面试题]
comments: false
date: 2020-04-23 11:15:22
img:
---
## CSS

### 盒模型

盒模型的组成：`margin` + `border` + `padding` + `content`

盒模型分为`W3C标准盒模型`和`IE盒模型`

`box-sizing`属性可以指定元素的盒模型

W3C标准盒模型:

* 属性width/height = content，不包含border和padding
* box-sizing:content-box

IE盒模型：

* 属性width/height = content + padding + border
* box-sizing:border-box
  
### BFC

> 块级格式化上下文，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。(IE下为 Layout，可通过 zoom:1 触发)

#### 触发条件

* 根元素
* position: absolute/fixed
* display: inline-block/table
* float 元素
* overflow !== visible
  
#### 规则

* 属于同一个 BFC 的两个相邻 Box 垂直排列
* 属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
* BFC 中子元素的 margin box 的左边， 与包含块 (BFC) border box的左边相接触 (子元素 absolute 除外)
* BFC 的区域不会与 float 的元素区域重叠
* 计算 BFC 的高度时，浮动子元素也参与计算
* 文字层不会被浮动层覆盖，环绕于周围

#### 应用

* 阻止margin重叠
* 以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个div都位于同一个 BFC 区域之中)
* 自适应两栏布局
* 可以阻止元素被浮动元素覆盖

### 层叠上下文

> 元素提升为一个比较特殊的图层，在三维空间中 (z轴) 高出普通元素一等。

#### 触发条件

* 根层叠上下文(html)
* position
* css3属性
  * flex
  * transform
  * opacity
  * filter
  * will-change
  * -webkit-overflow-scrolling

#### 层叠等级

> 层叠上下文在z轴上的排序

* 在同一层叠上下文中，层叠等级才有意义
* z-index的优先级最高
![image](/images/css_zIndex.png)

### 垂直水平居中

#### 水平居中

* 行内元素: text-align: center
* 块级元素: margin: 0 auto
* absolute + transform
* flex + justify-content: center
  
#### 垂直居中

* line-height: height
* absolute + transform
* flex + align-items: center
* table
  
#### 水平垂直居中

* absolute + transform
* flex + justify-content + align-items

### 选择器优先级

initial(默认) < inherit(继承) < * < tag(标签) < .class < #id < 行内样式 < !important

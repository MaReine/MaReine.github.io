---
title: 面试题系列之JS
categories: []
tags: [面试题]
comments: false
date: 2020-04-23 11:11:04
img:
---
## JS

### 构造函数/原型/实例

#### 构造函数

* 构造函数的函数名的第一个字母通常大写
* 函数体内使用this关键字，代表所要生成的对象实例
* 生成对象的时候，必须使用new关键字来调用构造函数

``` js
function Person(){
    this.name = 'leo'
}

var person = new Person
console.log(person.name)
```

上面例子中的`Person`就是一个构造函数。

#### 原型(prototype)

* [`Object.prototype`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype) 属性表示 Object 的原型对象。
* 几乎所有的 JavaScript 对象都是 Object 的实例；一个典型的对象继承了Object.prototype的属性（包括方法），尽管这些属性可能被遮蔽（亦称为覆盖）。
* 每个JavaScript对象(null除外)都有一个__proto__(非标准)属性指向它的原型，可以通过`Object.__proto__`访问。

``` js
function Person(){
    this.name = 'leo'
}

var person = new Person

/** 继承Object的方法和属性 **/
person.isPrototypeOf === Object.prototype.isPrototypeOf
/** 实例的__proto__属性指向原型 **/
person.__proto__ === Person.prototype
```

#### 实例

* 通过构造函数和`new`关键字创建出来的对象
* 实例通过`__proto__`指向原型，通过`constructor`指向构造函数

``` js
function Person(){
    this.name = 'leo'
}

var person = new Person

/** 指向原型 **/
person.__proto__ === Person.prototype
/** 指向构造函数 **/
person.constructor === Person
```

#### 三者的关系

![image](/images/prototype_all.png)

``` js
function Person(){
    this.name = 'leo'
}

var person = new Person

/** 构造函数 Person **/
Person.__proto__ === Function.prototype
Function.prototype.__proto__ === Object.prototype

/** 原型 Person.prototype **/
Person.prototype.__proto__ === Object.prototype
Person.prototype.constructor === Person

/** 实例 person **/
person.__proto__ === Person.prototype
person.constructor === Person

/** Object.prototype 也是对象，它的原型是谁？ **/
Object.prototype.__proto__ === null
/** 为 null 表示没有原型 **/
```

### 原型链

> 原型链是由原型对象组成，每个对象都有 `__proto__` 属性，指向了创建该对象的构造函数的原型，`__proto__` 将对象连接起来组成了原型链。是一个用来实现继承和共享属性的有限的对象链。

#### 属性查找机制

当查找对象的属性时，如果实例对象自身不存在该属性，则沿着原型链往上一级查找，找到时则输出，不存在时，则继续沿着原型链往上一级查找，直至最顶级的原型对象Object.prototype，如还是没找到，则输出undefined

#### 属性修改机制

只会修改实例对象本身的属性，如果不存在，则进行添加该属性，如果需要修改原型的属性时，则可以用: b.prototype.x = 2；但是这样会造成所有继承于该对象的实例的属性发生改变。

### 闭包

### 继承

### 浅拷贝与深拷贝

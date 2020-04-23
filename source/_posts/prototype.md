---
title: JavaScript之原型&原型链
categories: []
tags: ['JavaScript']
comments: false
date: 2019-03-12 14:31:12
img:
---
### 前言

```js
function Person(){} // 构造函数对象
let person = new Person() // 实例对象
person.name = 'leo' // 增加name属性
console.log(person.name) // leo
```

上述例子中，我们先定义一个构造函数`Person`，然后使用`new`创建了一个实例对象`person`，给`person`增加一个属性`name`，这个过程中发生了什么呢？我们继续往下看：

### Object.prototype属性

`prototype`是每个函数都有的属性，在上述例子中：

``` js
function Person(){}
// 需要注意的是：prototype是函数才会有的属性
Person.prototype.name = 'leo'
var person1 = new Person()
var person2 = new Person()
console.log(person1.name) // leo
console.log(person2.name) // leo
```

从上面的例子可以看出函数的`prototype`指向一个对象，这个对象就是我们所说的原型，是调用该构造函数而创建的实例的原型，也就是例子中`Person.prototype`是实例`person1`和`person2`的原型

那什么是原型呢？其实：每一个`JavaScript`对象(null除外)在创建的时候都会关联一个原型对象，"继承"这个原型对象的属性，我们可以用一张图表示构造函数和实例原型之间的关系：

![image](/images/prototype1.png)

上图中我们用`Object.prototype`表示实例原型

那`person`和`Person.prototype`之间是什么样的关系呢？下面我们来讲对象的第二个属性：

### Object.\__proto__属性

每一个`JavaScript`对象(除了null)都有一个`__proto__`属性，这个属性会指向该对象的原型。

我们可以在浏览器的打印台中验证这一点：

``` js
function Person(){}
var person = new Person()
console.log(person.__proto__ === Person.prototype) // true
```

现在我们可以更新下关系图：

![image](/images/prototype2.png)

实例对象和构造函数都可以指向原型，那么原型是否有属性指向构造函数或是实例呢？

### Object.prototype.constructor属性

因为一个构造函数可以生成多个实例，所以没有指向实例的属性，但是原型指向构造函数是有的，这就要讲到第三个属性：`constructor`，每个原型都有一个`constructor`属性指向关联的构造函数。

下面我们可以来验证这一点：

``` js
function Person(){}
console.log(Person === Person.prototype.constructor) // true
```

现在我们可以再更新下关系图:

![image](/images/prototype3.png)

现在我们可以总结：

``` js
function Person(){}
var person = new Person()
console.log(person.__proto__ === Person.prototype) // true
console.log(Person.prototype.constructor === Person) // true
// 顺便学习一个ES5新增的方法，可以获取对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true
```

上面我们了解了构造函数、实例原型、和实例之间的关系，接下来我们讲讲实例和原型的关系：

### 实例与原型

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。

举个列子：

``` js
function Person(){}
Person.prototype.name = 'leo'
var person = new Person()
person.name = 'oel'
console.log(person.name) // oel
delete person.name
console.log(person.name) // leo
```

在这个例子中，我们给实例对象`person`添加了`name`属性，当我们打印`person.name`的时候，结果自然为`oel`

但是当我们删除了`person`的`name`属性时，读取`person.name`，从`person`对象中找不到`name`属性就会从`person`的原型也就是`person.__proto__`，也就是`Person.prototype`中查找，幸运的是我们找到了`name`属性，结果为`leo`

但是万一还没找到呢？原型的原型又是什么呢？

### 原型的原型

在前面，我们已经讲了原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它，那就是：

``` js
var obj = new Object()
obj.name = 'leo'
console.log(obj.name) // leo
```

其实原型对象就是通过`Object`构造函数生成的，结合之前所讲，实例的`__proto__`指向构造函数的`prototype`，所以我们再更新下关系图：

![image](/images/prototype4.png)

### 原型链

那`Object.prototype`的原型呢？

`null`， 我们可以打印：

``` js
console.log(Object.prototype.__proto__ === null) // true
```

然而`null`究竟代表了什么呢？

可以去看一下阮一峰老师的 [<<undefined与null的区别>>](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)：
>`null`表示"没有对象"，即该处不应该有值。

所以`Object.prototype.__proto__`的值为`null`跟`Object.prototype`没有原型，其实表达的是同一个意思。
所以查找属性的时候查到`Object.prototype`就可以停止查找了。

最后的关系图可以更新为：

![image](/images/prototype5.png)

图中由相互关联的原型组成的链状结构就是原型链，也就是蓝色的这条线。

### 补充

最后，补充三点大家可能不会注意的地方：

#### constructor

首先是constructor属性，我们看个例子：

``` js
function Person(){}
var person = new Person()
console.log(person.constructor === Person) // true
```

当获取`person.constructor`时，其实`person`中并没有`constructor`属性，当不能读取到`constructor`属性时，会从`person`的原型也就是`Person.prototype`中读取，正好原型中有该属性，所以：

``` js
person.constructor === Person.prototype.constructor
```

#### \__proto__

其次是`__proto__`，绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于`Person.prototype`中，实际上，它是来自于`Object.prototype`，与其说是一个属性，不如说是一个`getter/setter`，当使用`obj.__proto__`时，可以理解成返回了`Object.getPrototypeOf(obj)`

#### 真的是继承吗

最后关于继承，前面我们讲到“每一个对象都会从原型‘继承’属性”，实际上，继承是一个十分具有迷惑性的说法，引用<<你不知道的JavaScript>>中的话，就是：
> 继承意味着复制操作，然而JavaScript默认并不会复制对象的属性，相反，JavaScript只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。

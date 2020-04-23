---
title: JavaScript之词法作用域&动态作用域
categories: []
tags: [JavaScript]
comments: false
date: 2019-03-17 09:09:21
img:
---
### 作用域

作用域是指程序源代码中定义变量的区域
作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限
`JavaScript`采用词法作用域(lexical scoping)，也就是静态作用域

### 静态作用域与动态作用域

因为`JavaScript`采用的是词法作用域，函数的作用域在函数定义的时候就决定了
而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的
让我们来举个例子来弄明白它们之间的区别：

``` js
var val = 1
function foo(){
    console.log(val)
}
function bar(){
    var val = 2
    foo()
}
bar() // 结果是？？？
```

假设`JavaScript`采用静态作用域，让我们分析下执行过程：
执行`foo`函数，先从`foo`函数内部查找是否有局部变量`val`，如果没有，就根据书写的位置，查找上面一层的代码，也就是`val`等于`1`，所以结果会打印`1`

假设`JavaScript`采用动态作用域，让我们分析下执行过程：
执行`foo`函数，依然是从函数内部查找是否有局部变量`val`，如果没有，就从调用函数的作用域，也就是`bar`函数内部查找`val`变量，所以结果会打印`2`

我们在浏览器上验证一下，结果打印的是`1`，所以`JavaScript`采用的是静态作用域

### 动态作用域

也许你会好奇什么语言用动态作用域呢？
`bash`就是动态作用域，可以把下面的脚本存成例如`scope.bash`，然后进入相应的目录，用命令行执行`bash ./scope.bash`，看看打印的值是多少

``` js
val = 1
function foo(){
    echo $value
}
function bar(){
    local val = 2
    foo
}
bar
```

### 思考题

最后，让我们看一个《JavaScript权威指南》中的例子：

``` js
var scope = 'global scope'
function checkscope(){
    var scope = "local scope"
    function f(){
        return scope
    }
    return f()
}
checkscope() // local scope
```

``` js
var scope = 'global scope'
function checkscope(){
    var scope = 'local scope'
    function f(){
        return scope
    }
    return f
}
chenckscope()() // local scope
```

为什么两段代码执行的结果一样呢？
原因其实很简单，因为`JavaScript`采用的是词法作用域，函数的作用域基于函数创建的位置
而引用《JavaScript权威指南》的回答就是：
`JavaScript`函数的执行用到了作用域链，这个作用域链是在函数定义的时候创建的，嵌套的函数`f()`定义在这个作用域链里，其中的变量`scope`一定是局部变量，不管何时何地执行，这种绑定都是不变的。
但是在这里真正想让大家思考的是：
虽然两段代码的执行结果一样，但是两段代码究竟有哪些不同呢？
如果要回答这个问题，就要牵涉到很多的内容，词法作用域只是其中的一小部分，让我们期待下一篇文章——[《JavaScript之执行上下文栈》](../../../../2019/03/18/contextStack/)。

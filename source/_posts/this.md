---
title: JavaScript之从ECMAScript规范解读this
categories: []
tags: [JavaScript]
comments: false
date: 2019-03-31 11:30:56
img:
---
### 前言

在[《JavaScript之执行上下文栈》](../../../../2019/03/18/contextStack/)中讲到，当`JavaScript`代码执行一段可执行代码(executable)时，会创建对应的执行上下文(execution context).

对于每个执行上下文，都有三个重要属性：

- 变量对象(Variable object, VO)
- 作用域链(Scope chain)
- this
  
今天重点讲讲this，然而不好讲......

因为我们要从ECMAScript5规范开始讲起。

[英文版](http://es5.github.io/#x15.1)

[中文版](http://yanhaijing.com/es5/#115)

让我们开始了解规范吧！

### Types

首先是第8章Types:
> Types are further subclassified into ECMAScript language types and specification types.
>
> An ECMAScript language type corresponds to values that are directly manipulated by an ECMAScript programmer using the ECMAScript language. The ECMAScript language types are Undefined, Null, Boolean, String, Number, and Object.
>
> A specification type corresponds to meta-values that are used within algorithms to describe the semantics of ECMAScript language constructs and ECMAScript language types. The specification types are Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, and Environment Record.

我们简单的翻译一下：

ECMAScript的类型分为语言类型和规范类型。

ECMAScript语言类型是开发者直接使用ECMAScript可以操作的。其实就是我们常说的Undefined,Null,Boolean,String,Number和Object。

而规范类型相当于meta-values,是用来用算法描述ECMAScript语言结构和ECMAScript语言类型的。规范类型包括：Reference,List,Completion,Property Descriptor,Property Identifier,Lexical Environment和Environment Record。

没懂？没关系，我们只要知道在ECMAScript规范中还有一种只存在于规范中的类型，它们的作用是用来描述语言底层行为逻辑。

今天我们要讲的重点是其中的Reference类型。它与this的指向有着密切的关联。

### Reference

那什么又是Reference？

让我们看8.7章The Reference Specification Type：
> The Reference type is used to explain the behaviour of such operators as delete, typeof, and the assignment operators.

所以Reference类型就是用来解释诸如 delete、typeof 以及赋值等操作行为的。

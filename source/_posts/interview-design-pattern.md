---
title: 面试题系列之设计模式
categories: []
tags: [面试题]
comments: false
date: 2020-04-01 11:29:35
img:
---
## 前言

我想大家在各大技术社区或是面试中应该都听说过这个词，那究竟什么是设计模式呢？用设计模式有什么好处呢？

设计模式其实是一种抽象概念，它是不同种写代码方式的总称。

这些方式是前人通过无数次的实践总结出的一套写代码的方式，我们通过这些方式写的代码可以让别人更加容易阅读、维护和复用。

好，话不多说，下面让我们来逐一介绍这些设计模式吧！

## 工厂模式

>工厂模式是用来创建对象的一种常用的设计模式，它不暴露创建对象的具体逻辑，而是将创建对象的过程封装成一个函数，这个函数可以根据不同的参数返回不同的对象实例。

工厂模式根据抽象程度的不同可以分为：`简单工厂`，`工厂方法`和`抽象工厂`。

### 简单工厂模式

`简单工厂模式`又叫`静态工厂模式`，由一个工厂对象决定创建某一种产品对象类的实例，主要用来创建同一类的对象。

现在有一个这样场景：
> 有3个用户分别拥有不同的权限：
> A-超级管理员(superAdmin)
> B-管理员(admin)
> C-普通用户(user)
>
> 有5个菜单不同权限的用户可以看到不同的菜单：
> A-['首页', '通讯录', '发现页', '应用数据', '权限管理']
> B-['首页', '通讯录', '发现页', '应用数据']
> C-['首页', '通讯录', '发现页']

好了，明确了需求，现在让我们来实现它吧：

``` js
class User{
    constructor(op){
        this.name = op.name
        this.page = op.page
    }

    static getInstance(role){
        switch(role){
            case 'superAdmin':
                return new User({name:'超级管理员',page:['首页', '通讯录', '发现页', '应用数据', '权限管理']})
            break
            case 'admin':
                return new User({name:'管理员',page:['首页', '通讯录', '发现页', '应用数据']})
            break
            case 'user':
                return new User({name:'普通用户',page:['首页', '通讯录', '发现页']})
            break
            default:
                throw new Error('参数错误, 可选参数:superAdmin、admin、user')
        }
    }
}

let s = User.getInstance('superAdmin')
let a = User.getInstance('admin')
let u = User.getInstance('user')
```

`User`就是一个简单工厂，在它的`getInstance`静态方法中有3个实例分别对应不同权限的用户，当我们在调用的时候只需要传递一个参数就可以获取对应的实例对象。

---
title: 面试题系列之前端框架-Vue
categories: []
tags: [面试题]
comments: false
date: 2019-04-28 11:11:29
img:
---
## Vue

> mvvm 响应式框架（m->model 数据层 v->view 视图层）

### 双向绑定的原理

![img](/images/vue_data.png)

* Vue组件渲染的过程中，会遍历`data`选项里所有的属性，并使用 [`Object.defineProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 把这些属性全部转为[`getter/setter`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#%E5%AE%9A%E4%B9%89_getters_%E4%B8%8E_setters) 。

* 每个组件实例都对应一个**watcher**实例，它会在组件渲染的过程中把这些含有`getter/setter`方法的属性记录为依赖。

* 当依赖项的setter触发时，会通知 watcher，从而使它关联的组件重新渲染。

### 能不能检测到数组和对象的变化，vue是怎样实现的

>由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。

**对于对象**
由于Vue是在初始化实例时对属性执行getter/setter转化的，所以Vue 无法检测属性的添加和移除，所以属性必须在`data`对象上存在才能被Vue转换为响应式的。如：

``` js
var vm = new Vue({
  data:{
    a:1
  }
})
// `vm.a` 是响应式的
vm.b = 2
// `vm.b` 是非响应式的

// 但是
vm.a = {b:3}
// `vm.a.b` 是响应式的
```

对于已创建的实例，Vue不允许动态添加根级别的响应式属性。
但是可以使用 `Vue.set(object, propertyName, value)` 方法向嵌套对象添加响应式的属性。例如：

``` js
Vue.set(vm.someObject, 'b', 2)
```

也可以使用 `vm.$set` 实例方法，这也是全局 Vue.set 方法的别名：

``` js
this.$set(this.someObject,'b',2)
```

如果想要赋值多个新属性，需要与原对象就行混合然后创建一个新的对象。例如：

``` js
// 代替 `Object.assign(this.someObject, { a: 1, b: 2 })`
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
```

**对于数组**
Vue 不能检测以下数组的变动：

1. 当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
2. 当你修改数组的长度时，例如：vm.items.length = newLength

可以通过以下法式触发响应式系统的更新：

``` js
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)
vm.$set(vm.items, indexOfItem, newValue)

// Array.prototype.splice
vm.items.splice(indexOfItem, 1, newValue)
vm.items.splice(newLength)
```

### 异步更新队列

* Vue 更新DOM时是异步执行的
* 侦听到数据变化，Vue会开启一个队列，缓存在同一事件循环中发生的所有数据变更。
* 如果同一个watcher被多次触发，只会被推入到队列中一次。
* 然后，在下一个的事件循环中，Vue刷新队列并执行实际（已去重的）工作。
* Vue在内部对异步队列尝试使用原生的`Promise.then`、`MutationObserver` 和 `setImmediate`如果执行环境不支持，则采用`setTimeout(fn, 0)`代替。

## $nextTick的实现原理

## 生命周期

## 组件通信

## 异步路由

## 登录拦截

## 父子组件之间的生命周期

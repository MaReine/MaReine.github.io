# 为融媒体云搭建的组件库

> [文档传送门](https://yl-components.gitlab.io/yl-libs/.public/dist/index.html)

## 工程目录结构

> dist // 打包编译后的 demo 文件
>
> libs // 打包编译后的组件文件
>
> public // ...
>
> src // 里面的其它文件都是 demo 源码或是组件的依赖库
>
> src/libs // 组件源码

## 安装使用

### webpack 工程中使用

> 在 src/libs 目录里面找到要使用的组件，复制到你的工程中去
>
> 例：全局引用 main.js
>
> 引用所有的组件

```
import yl from "./libs/yl-ui/index";
Vue.use(yl);
```

> 按需引用组件

```
import { Layout } from "./libs/yl-ui/index";
Vue.use(Layout);
```

> 页面中使用组件 <yl-xxx></yl-xxx>

```
<yl-layout></yl-layout>
```

### 普通前端工程或是后端工程中使用

> 在打包编译好的 libs 目录里(与 dist 同级不是 src 里的 libs)找到对应要使用的组件，复制到你的工程中去

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="https://unpkg.com/vue"></script>
    <script src="./libs/yl-ui/yl-ui.umd.js"></script>
    <link rel="stylesheet" href="./libs/yl-ui/yl-ui.css" />
  </head>
  <body>
    <div id="app"><yl-layout></yl-layout></div>
  </body>
  <script>
    new Vue({
      data: function() {
        return {};
      }
    }).$mount("#app");
  </script>
</html>
```

> 其它工具类的库都有对应的使用说明，请在对应的目录中查看。

## 协作规范与组件结构

### 组件库结构

> libs/yl-icon // 融媒体云通用的字体图标整理
>
> libs/yl-ui // 融媒体云通用的 pc 端组件整理(可能会有基于 element-ui 的二次封装)
>
> libs/yl-mobile-ui // 融媒体云通用的移动端组件整理(通常是基于 quasar 的二次封装)
>
> libs/yl-utils // 融媒体云通用的工具类整理

### 协作规范(新增一个库或是组件要严格按照这个结构和规范来)

#### 单个库

> 单个库的结构
>
> 例：
>
> libs/yl-ui // 每一个库都是一个单独的文件夹
>
> libs/yl-ui/layout // 每一个库里面的组件都是一个单独的文件夹
>
> libs/yl-ui/index.js // 每一个库都有一个对外导出的 index.js
>
> libs/yl-ui/README.md // 每一个库都有一个说明文档
>
> index.js 的参考实现

```
import Layout from "./layout";
import Sideslip from "./sideslip";

const components = [Layout, Sideslip];

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

// <script></script> 引入
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// 按需引入
export { Layout, Sideslip };

// 全部引入
export default install;

// README.md
// 除了说明文档外最好也增加一个对应的使用例子
```

#### 单个组件

> 单个组件的结构
>
> 例：
>
> yl-ui/layout // 每一个组件都是一个单独的文件夹
>
> yl-ui/layout/src // 每一个组件都有一个 src 文件夹
>
> yl-ui/layout/src/main.vue // 每一个组件的实现都在 main.vue 里写
>
> yl-ui/layout/index.js // 每一个组件都有一个对外导出的 index.js
>
> yl-ui/layout/README.md // 每一个组件都有一个说明文档
>
> index.js 的参考实现

```
import Layout from "./src/main";
Layout.install = function(Vue) {
  Vue.component(Layout.name, Layout);
};
export default Layout;
```

> main.vue 的参考实现

```
<template>
  <div class="yl-layout">
    <!--dom结构-->
  </div>
</template>
<script>
export default {
    // 每个组件对外导出都必须要有name(单词首字母大写驼峰命名法)，此name会被用作组件名(会被转换为 <yl-layout></yl-layout>)
  name: "YlLayout"
};
</script>

<style lang="scss">
/*这里写组件的样式 class或id命名前面都必须要加yl-*/
</style>

// README.md
// 除了说明文档外最好也增加一个对应的使用例子
```

## 运行与编译构建

### 本地启动项目

```
npm run serve
```

### 打包编译 demo

```
npm run build
```

### 库的打包编译

```
// pc端yl-ui的打包编译
npm run libs-p

// 移动端yl-mobile-ui的打包编译
npm run libs-m
```

> 注：若需要打包编译其它的库，需要自己在 package.json 里面新增指令并更新文档

---
title: npm镜像管理(nrm)
categories: []
tags: ["开发环境"]
comments: false
date: 2018-03-10 15:33:02
img:
---
## nrm

### 安装nrm

`npm install -g nrm`

### 查看可用镜像

`nrm ls`

``` cmd
λ nrm ls

  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
* taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```

## 切换镜像

`nrm use taobao`

``` cmd
λ nrm use taobao


  Registry has been set to: https://registry.npm.taobao.org/
```

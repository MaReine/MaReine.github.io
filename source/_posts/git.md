---
title: Git使用手册
categories: []
tags: [开发工具]
comments: false
date: 2020-04-24 00:44:56
img:
---
## 本地项目关联远程仓库

## 分支

1.先把远程仓库所有地址拉到本地

``` cmd
git fetch --all
```

2.查看分支拉取情况

``` cmd
git branch -a
```

3.新建本地分支(可以与远程分支不同名，建议同名)

``` cmd
git checkout -b <新分支名称>
```

4.本地分支和远程分支之间建立跟踪连接

``` cmd
git branch --set-upstream-to=origin/<远程分支名称> <本地分支名称>
```

5.将远程分支拉取到本地

``` cmd
git pull origin <远程分支名称>
```

注：如果报错`fatal: refusing to merge unrelated histories`(拒绝合并不相关的历史)

``` cmd
git pull origin <远程分支名称> --allow-unrelated-histories(该选项可以合并两个独立启动仓库的历史)
```

## 代码重置

``` cmd
git reset --hard origin/<分支名称>
```

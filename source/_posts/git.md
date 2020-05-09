---
title: Git使用手册
categories: []
tags: [开发工具]
comments: false
date: 2018-04-24 00:44:56
img:
---
## Git

### 本地项目关联远程仓库

``` cmd
git init -- 新建一个本地仓库
git add . -- 将本地文件加入到仓库中
git commit -m "first commit" -- 将文件提交到本地仓库
git remote add origin <远程地址> -- 关联远程仓库
git push origin master -- 将本地仓库推送到远程仓库
```

### 分支相关

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

### 代码重置

``` cmd
git reset --hard origin/<分支名称>
```

### 全局配置git

``` cmd
git config --global user.name "MaReine"
git config --global user.email "1768368568@qq.com"
```

### 生成ssh key

``` cmd
ssh-keygen -t rsa -C "1768368568@qq.com"

Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Administrator/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in C:\Users\Administrator/.ssh/id_rsa.
Your public key has been saved in C:\Users\Administrator/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:fiavzux/okHw2YQyYFbTK4nQHCs8iy1o1Rap4l1fnbM 1768368568@qq.com
The key's randomart image is:
+---[RSA 2048]----+
|   o=++.         |
| ..o++....       |
|  +oo++...o .    |
|.+.=o.o=.= +     |
|=.= . ..S . o    |
|.o .   +   E     |
|        + o      |
|       o *. .    |
|       oB+oo     |
+----[SHA256]-----+
```

把id_rsa.pub文件里的内容复制到个人账户SSH Keys

``` cmd
ssh -T git@github.com

Hi zhugexiaoxiaoliang! You've successfully authenticated, but GitHub does not provide shell access.
```

如果看到Hi后面是你的用户名，就说明成功了。

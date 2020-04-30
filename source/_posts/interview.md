---
title: 面试题汇总
categories: []
tags: [面试题]
comments: false
date: 2020-04-26 08:57:35
img:
---
## 前言

"工欲善其事，必先利其器"。

## CSS

### 盒模型

盒模型的组成：`margin` + `border` + `padding` + `content`

盒模型分为`W3C标准盒模型`和`IE盒模型`

`box-sizing`属性可以指定元素的盒模型

W3C标准盒模型:

* 属性width/height = content，不包含border和padding
* box-sizing:content-box

IE盒模型：

* 属性width/height = content + padding + border
* box-sizing:border-box
  
## 前端安全

### 浏览器安全

#### 同源策略

* 同源：域名、协议、端口相同，禁止对不同源的页面DOM进行操作，禁止使用XHR对象向不同源的服务器地址发起HTTP请求

#### 浏览器沙箱

* 渲染引擎由Sandbox隔离，网页内容要与浏览器内核进程通信要通过IPCchannel，在其中进行安全检查
  
#### 恶意网址拦截

* 浏览器周期性地从服务器端获取一份最新的恶意网址黑名单(木马网站和钓鱼网站)，如果用户上网时访问的网址存在于此黑名单中，浏览器就会弹出一个警告页面。

### XSS攻击(跨站脚本攻击)

> XSS(Cross-Site Scripting，跨站脚本攻击)是一种代码注入攻击。攻击者在目标网站上注入恶意代码，当被攻击者登陆网站时就会执行这些恶意代码，这些脚本可以读取 cookie，session tokens，或者其它敏感的网站信息，对用户进行钓鱼欺诈，甚至发起蠕虫攻击等。

#### XSS分类

##### 反射型XSS

* 把url参数中原来的字符串替换成脚本执行
* 反射型 XSS 漏洞常见于通过 URL 传递参数的功能，如网站搜索、跳转等。由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。
* POST 的内容也可以触发反射型 XSS，只不过其触发条件比较苛刻（需要构造表单提交页面，并引导用户点击），所以非常少见。
  
##### DOM型XSS

* unicode码伪装脚本代码，然后利用Jquery的append方法执行(Jquery会在将append元素变为fragment的时候，找到其中的script标签，再使用eval执行一遍。其使用的方式是innerHTML,而innerHTML会将unicode码转换为字符实体的。)
* 利用img的onerror事件注入恶意脚本
* img标签用unicode伪装然后用innerHTML添加到页面执行

##### 存储型XSS

* 恶意脚本代码，被服务端存储，当浏览器请求数据时，脚本从服务器传回并执行

#### XSS攻击防御

* 转义页面上的输入内容和输出内容中的<>
* 转义输出字符串中unicode码的 \ 反斜杠(json转义)
* url获取的信息最好从后端获取，然后前端转义后输出
* 设置cookie的HttpOnly属性，让js无法进行读写
* 使用第三方扫描工具检测

### CSRF攻击(跨站请求伪造)

> CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。

#### 典型的CSRF攻击流程

* 1.受害者登录A站点，并保留了登录凭证（Cookie）。
* 2.攻击者诱导受害者访问了站点B。
* 3.站点B向站点A发送了一个请求，浏览器会默认携带站点A的Cookie信息。
* 4.站点A接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是无辜的受害者发送的请求。
* 5.站点A以受害者的名义执行了站点B的请求。
* 6.攻击完成，攻击者在受害者不知情的情况下，冒充受害者完成了攻击。

跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等(来源不明的链接，不要点击)

#### CSRF攻击防御

##### 添加验证码(体验不好)

在一些敏感操作的地方添加验证码验证，如：转账、交易等操作。但是会中断用户的操作，用户体验不好。

##### 检验Referer(请求来源)

`Referer` 可以作为一种辅助手段，来判断请求的来源是否是安全的，但是鉴于 `Referer` 本身是可以被修改的，所以不安全。

##### 使用Token(主流)

用户请求携带一个CSRF攻击者无法获取到的Token。服务器通过校验请求是否携带正确的Token，来把正常的请求和攻击的请求区分开。跟验证码类似，只是用户无感知。

* 服务端给用户生成一个token，加密后传递给用户
* 用户在提交请求时，需要携带这个token
* 服务端验证token是否正确

##### Samesite Cookie属性

为了从源头上解决这个问题，Google起草了一份草案来改进HTTP协议，为Set-Cookie响应头新增Samesite属性，它用来标明这个 Cookie是个“同站 Cookie”，同站Cookie只能作为第一方Cookie，不能作为第三方Cookie，Samesite 有两个属性值，分别是 Strict 和 Lax。部署简单，并能有效防御CSRF攻击，但是存在兼容性问题。

* `Samesite=Strict` 被称为是严格模式,表明这个 Cookie 在任何情况都不可能作为第三方的 Cookie，有能力阻止所有CSRF攻击。此时，我们在B站点下发起对A站点的任何请求，A站点的 Cookie 都不会包含在cookie请求头中。
* `Samesite=Lax` 被称为是宽松模式，与 Strict 相比，放宽了限制，允许发送安全 HTTP 方法带上 Cookie，如 `Get` / `OPTIONS` 、`HEAD` 请求.但是不安全 HTTP 方法，如： `POST`, `PUT`, `DELETE` 请求时，不能作为第三方链接的 Cookie。

### 点击劫持

原理：利用了视觉欺骗

#### 攻击方式

* 攻击者使用一个透明的iframe，覆盖在一个网页上，然后诱使用户在该页面上进行操作，此时用户将在不知情的情况下操作的都是透明的iframe页面，而不是显示的页面
* 攻击者使用一张图片覆盖在网页，遮挡网页原有位置的含义
  
#### 点击劫持防御

* Frame busting

``` js
if ( top.location != window.location ){
    top.location = window.location
}
```

注: HTML5中iframe的 sandbox 属性、IE中iframe的security 属性等，都可以限制iframe页面中的JavaScript脚本执行，从而可以使得 frame busting 失效。

* X-Frame-Options
  
X-FRAME-OPTIONS是微软提出的一个http头，专门用来防御利用iframe嵌套的点击劫持攻击。并且在IE8、Firefox3.6、Chrome4以上的版本均能很好的支持。可以设置为以下值:

``` string
DENY: 拒绝任何域加载
SAMEORIGIN: 允许同源域下加载
ALLOW-FROM: 可以定义允许frame加载的页面地址
```

### Http/Https协议

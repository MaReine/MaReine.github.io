---
title: 面试题系列之网络协议-Http
categories: []
tags: [面试题]
comments: false
date: 2019-07-23 11:11:57
img:
---
## HTTP

### HTTP 报文结构是怎样的

TCP在传输的时候分为两个部分：TCP头和数据部分。

HTTP是`header` + `body`的结构：

``` text
起始行 + 头部 + 空行 + 实体
```

#### 起始行

**请求报文：** 方法 + 路径 + HTTP版本

``` text
GET /home HTTP/1.1
```

**响应报文：** HTTP版本 + 状态码 + 消息

``` text
HTTP/1.1 200 OK
```

**注：**

* 请求报文的起始行也叫做`请求行`，响应报文的起始行也叫做`状态行`
  
* 起始行严格遵循`ABNF`语法规范：起始行中，每两个部分之间用空格隔开，最后一个部分后面应该接一个换行

#### 头部

**请求头**在报文中的位置
![image](/images/http_head1.png)

**响应头**在报文中的位置
![image](/images/http_head2.png)

**注：**头部字段的格式

* 字段名不区分大小写
* 字段名不允许出现空格，不可以出现下划线
* 字段名后面必须紧接着:
  
#### 空行

用来区分`头部`和`实体`，如果在头部中间故意加一个空行那么空行后的内容全部被视为实体。

#### 实体

`body`部分，就是具体的数据，请求报文对应`请求体`，响应报文对应`响应体`。

### HTTP的请求方法

`HTTP/1.1`规定了以下请求方法(注意，都是大写)：

* GET:通常用来获取资源
* HEAD:获取资源的元信息
* POST:提交数据或上传数据
* PUT:修改数据
* DELETE:删除资源
* CONNECT:建立连接隧道，用于代理服务器
* OPTIONS:列出可对资源实行的请求方法，用来跨域请求
* TRACE:追踪请求-响应的传输路径

**GET和POST有什么区别？**

* 从**缓存**的角度，GET请求会被浏览器主动缓存下来，留下历史记录，而POST默认不会
* 从**编码**的角度，GET只能进行URL编码，只能接收ASCII字符，而POST没有限制。
* 从**参数**的角度，GET一般放在URL中，因此是不安全的，POST放在请求体中，更适合传输敏感信息。
* 从**幂等性**的角度，GET是幂等的，而POST不是。（幂等表示执行相同的操作，结果也是相同的）
* 从**TCP**的角度，GET请求会把请求报文一次性发出去，而POST会分为两个TCP数据包，首先发header部分，如果服务器响应100(continue),然后发body部分。(火狐浏览器除外，它的 POST 请求只发一个 TCP 包)

### URI是什么？与URL有什么区别？如何理解URI

**URI**(Uniform Resource Identifier)也就是`统一资源标识符`,它的作用就是区分互联网上不同的资源。

**URL**就是我们常说的网址，实际上`URI`包含了`URN`和`URL`两个部分。

#### URI的结构

![image](/images/http_uri.png)

* scheme 表示协议名，比如http, https, file等等。后面必须和://连在一起。
* user:passwd@ 表示登录主机时的用户信息，不过很不安全，不推荐使用，也不常用。
* host:port 表示主机名和端口。
* path 表示请求路径，标记资源所在位置。
* query 表示查询参数，以?开头，为key=val这种形式，多个键值对之间用&隔开。
* fragment 表示 URI 所定位的资源内的一个锚点，浏览器可以根据这个锚点跳转到对应的位置。

举个例子：`https://www.baidu.com/index?type=HTTPS&port=443#1`

* scheme部分 https
* host:port部分 www.baidu.com （http默认端口80，https默认端口443）
* path部分 /index
* query部分 ?type=HTTPS&port=443
* fragment部分 #1

#### URI编码

URI使用`ASCII`编码，ASCII之外的字符和一部分符号的界定符是不支持显示的，如果不处理就会导致解析出错。

因此，URI 引入了编码机制，将所有非 ASCII 码字符和界定符转为十六进制字节值，然后在前面加个`%`。

如，空格被转义成了%20，前端被转义成了%E5%89%8D%E7%AB%AF。

### 说说HTTP状态码

RFC 规定 HTTP 的状态码为三位数，被分为五类:

* 1xx: 表示目前是协议处理的中间状态，还需要后续操作。
* 2xx: 表示成功状态。
* 3xx: 重定向状态，资源位置发生变动，需要重新请求。
* 4xx: 请求报文有误。
* 5xx: 服务器端发生错误。

#### 1XX

* 101 Switching Protocols。在HTTP升级为WebSocket的时候，如果服务器同意变更，就会发送状态码 101。

#### 2XX

* 200 OK 成功状态码,通常在响应体中放有数据。(最常见)
* 204 No Content 含义与 200 相同，但响应头后没有 body 数据。
* 206 Partial Content 顾名思义，表示部分内容，它的使用场景为 HTTP 分块下载和断点续传，当然也会带上相应的响应头字段Content-Range。

#### 3XX

* 301 Moved Permanently 即永久重定向
* 302 Found 即临时重定向
* 304 Not Modified: 当协商缓存命中时会返回这个状态码。详见浏览器缓存

#### 4XX

#### 5XX

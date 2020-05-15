---
title: newbk
categories: []
tags: []
comments: false
date: 2020-05-15 11:01:14
img:
---
``` js
// 通用得配置
const htmlMinify = {
  removeComments: true,
  collapseWhitespace: true,
  keepClosingSlash: true,
  removeAttributeQuotes: false,
  caseSensitive: false,
  collapseBooleanAttributes: true
}

let pages = [{
  name: 'admin',
  template: 'public/admin.html',
  filename: 'index.html',
  title: '智能对话平台 | IDP',
  inject: true
}]
if (process.env.NODE_ENV === 'production') {
  pages = [{
    name: 'admin',
    template: 'public/admin.handlebars',
    filename: 'index.jsp',
    title: '智能对话平台 | IDP',
    inject: false
  }]
}

const pagesConfig = {}

pages.forEach(page => {
  const config = {}
  config.entry = 'src/' + page.name + '.js' // page 的入口
  config.template = page.template // 模板来源
  config.filename = page.filename // 在 dist/index.html 的输出
  config.title = page.title // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  config.chunks = ['chunk-vendors', 'chunk-common', page.name] // 提取出来的通用 chunk 和 vendor chunk。
  config.inject = page.inject // 是否自动注入
  config.minify = htmlMinify // html压缩配置

  pagesConfig[page.name] = config
})

// console.log(pagesConfig)
module.exports = {
  publicPath: './',
  devServer: {
    port: 8090, // 端口号
    host: '0.0.0.0'
  },
  pages: pagesConfig
}

 {{#each htmlWebpackPlugin.files.css as |css|}}
  <link rel="stylesheet" type="text/css" href="{{ ../htmlWebpackPlugin.options.staticPath }}/static/css/{{./sub css}}">
  {{/each}}

  {{#each htmlWebpackPlugin.files.js as |js|}}
  <script type="text/javascript" src="${ctx}/rs/static/js/{{./sub js}}"></script>
  {{/each}}

```

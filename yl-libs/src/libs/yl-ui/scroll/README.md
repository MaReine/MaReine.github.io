# 融媒体云系统通用的滚动加载组件

## 使用

``` 
<yl-scroll target=".scroll-area" @scroll="handleScroll">
    // 滚动区域内容
</yl-scroll>
```

### 属性

| Name        | 说明             |
| ----------- | ---------------- |
| target      | 要监听滚动事件的目标|

### 事件

| Name        | 值  | 说明|
| ----------- | --- | ----|
| scroll      |  val[object]:{scrollTop: 0, isBottom: true}   |滚动到底部的事件|


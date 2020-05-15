# 融媒体云系统通用的Loading组件

## 使用

``` 
<yl-loading :options="object"></yl-loading>
```

### 插槽

| Name        | 说明             |
| ----------- | ---------------- |
| loading | 自定义loading     |
| nomore    | 自定义nomore  |
| nodata | 自定义nodata |

### options里面的参数

| Name   |  type    | 默认值 | 说明   |
| ------ | -------  | ------ |-------|
| state  | [string] | "loading" | "loading" 显示loading / "hide" 隐藏loading / "nomore" 显示没有更多了 / "nodata" 显示没有数据|
| text | [sting] | "loading" 加载中... / "nomore" 没有更多内容了 / "nodata" 暂无数据 | 自定义文案(不传，显示默认) |


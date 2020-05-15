

## 侧滑组件

> 融媒体云系统通用的侧滑组件

### 使用

``` 
<yl-sideslip
  ref="sideslip"
  :default-show="false"
  :extra-close="true"
  trigger-dom=".xxx"
  trigger-toggle="true"
  trigger-class="xxx"
  width="32px"
  height="calc(100% - 50px)"
  position="fix"
  container=".xxx"
  min-width="880px"
  resize-dom=".xxx"
  relation-dom=".xxx"
  @before-show="xxx"
  @visible-change="xxx"

>

  // 自定义内容
</yl-sideslip>

// 方法的调用
this.$refs.sideslip.switchShow(true);
this.$refs.sideslip.switchExtraCloseStatus(true);
```

### 属性

| Name           | 默认值              | 说明                                                                |
| -------------- | ------------------- | ------------------------------------------------------------------- |
| default-show   | false               | 控制侧滑首次的默认状态(打开和关闭)                           |
| extra-close    | false               | 是否开启点击侧滑以外的区域关闭组件                          |
| trigger-dom    | 无                  | 控制组件的元素，值为 .class 或 #id                                  |
| trigger-toggle | "false"             | 是否可以来回切换, 是："true" 否："false"                            |
| trigger-class  | 无                  | 组件切换给控制元素添加/移除的 class 名                              |
| width          | "320px"             | 侧滑的宽度                                                          |
| height         | "calc(100% - 50px)" | 侧滑的高度(100%相对于包裹侧滑的容器)                                |
| position       | "fix"               | 侧滑的定位方式, "fix":fixed 定位 "abs": absolute 定位               |
| container      | 无                  | 包裹侧滑的容器(position 为 abs 时必传用于定位)                      |
| relation-dom   | 无                  | 在自适应屏幕时需要和侧滑关联改变的关联容器元素， 值为 .class 或 #id |
| resize-dom     | 无                  | 包裹关联容器的自适应相对于元素，值为 .class 或 #id                  |
| min-width      | 无                  | 关联容器的最小宽度(resize-dom 的最小宽度-侧滑的宽度)                |

### 事件

| Name           | 值         | 说明                                             |
| -------------- | ---------- | ------------------------------------------------ |
| before-show    | 无         | 侧滑打开之前触发                                 |
| visible-change | true/false | 侧滑状态改变时触发, true: 侧滑打开 false: 侧滑关闭 |

### 方法

| Name                   | 参数       | 说明                                                                                        |
| ---------------------- | ---------- | ------------------------------------------------------------------------------------------- |
| switchShow             | true/false | 控制侧滑的打开和关闭                                                                        |
| switchExtraCloseStatus | true/false | 控制侧滑是否启用点击其他区域关闭侧滑(开启时打开侧滑的事件需要阻止事件冒泡, 不然侧滑会打不开) |


<template>
	<div class="container">
		<div class="markdown" v-html="contentHtml">
			<h2 id="侧滑组件">侧滑组件</h2>
			<blockquote>
				<p>融媒体云系统通用的侧滑组件</p>
			</blockquote>
			<h3>注</h3>
			<blockquote>
				<p>此组件依赖于jquery，需要先安装 npm install jquery --save</p>
			</blockquote>
			<h3>示例</h3>
			<div class="example-container">
				<h4>基本用法</h4>
				<el-button @click.stop="$refs.sideslip.switchShow(true)" size="medium">打开侧滑</el-button>
				<el-button @click="$refs.sideslip.switchShow(false)" size="medium">关闭侧滑</el-button>
				<el-button @click="$refs.sideslip.switchExtraCloseStatus(true)" size="medium">开启点击其他区域关闭组件</el-button>
				<el-button @click="$refs.sideslip.switchExtraCloseStatus(false)" size="medium">关闭点击其他区域关闭组件</el-button>
				<pre><code>&lt;yl-sideslip
  ref=&quot;sideslip&quot;
  :default-show=&quot;sideslip1.show&quot;
  :extra-close=&quot;sideslip1.otherClose&quot;
&gt;
  &lt;div class=&quot;sideslip-exp&quot;&gt;
    &lt;div class=&quot;sd-content&quot;&gt;这里可以自定义任何内容！&lt;/div&gt;
    &lt;div class=&quot;sd-footer&quot;&gt;
      &lt;el-button size=&quot;medium&quot; plain @click=&quot;$refs.sideslip.switchShow(false)&quot;&gt;关闭&lt;/el-button&gt;
      &lt;el-button size=&quot;medium&quot; type=&quot;primary&quot; @click=&quot;$refs.sideslip.switchShow(false)&quot;&gt;确定&lt;/el-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/yl-sideslip&gt;

&lt;el-button @click.stop=&quot;$refs.sideslip.switchShow(true)&quot; size=&quot;medium&quot;&gt;打开侧滑&lt;/el-button&gt;
&lt;el-button @click=&quot;$refs.sideslip.switchShow(false)&quot; size=&quot;medium&quot;&gt;关闭侧滑&lt;/el-button&gt;
&lt;el-button @click=&quot;$refs.sideslip.switchExtraCloseStatus(true)&quot; size=&quot;medium&quot;&gt;开启点击其他区域关闭组件&lt;/el-button&gt;
&lt;el-button @click=&quot;$refs.sideslip.switchExtraCloseStatus(false)&quot; size=&quot;medium&quot;&gt;关闭点击其他区域关闭组件&lt;/el-button&gt;

data() {
  return {
    sideslip1: {
      show: false,
      otherClose: false
    }
  };
}</code></pre>
				<h4>触发按钮</h4>
				<blockquote>
					<p>此模式下如需其它地方控制侧滑，则需要调用switchVisible方法</p>
				</blockquote>
				<el-button class="trigger" size="medium">打开/关闭(同时还可以添加和移除class)</el-button>
				<pre><code>&lt;yl-sideslip
  ref=&quot;sideslip1&quot;
  trigger-dom=&quot;.trigger&quot;
  trigger-toggle=&quot;true&quot;
  trigger-class=&quot;trigger-class&quot;
&gt;
  &lt;div class=&quot;sideslip-exp&quot;&gt;
    &lt;div class=&quot;sd-content&quot;&gt;这里可以自定义任何内容！&lt;/div&gt;
    &lt;div class=&quot;sd-footer&quot;&gt;
      &lt;el-button size=&quot;medium&quot; plain @click=&quot;$refs.sideslip1.switchShow(false)&quot;&gt;关闭&lt;/el-button&gt;
      &lt;el-button size=&quot;medium&quot; type=&quot;primary&quot; @click=&quot;$refs.sideslip1.switchShow(false)&quot;&gt;确定&lt;/el-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/yl-sideslip&gt;

&lt;el-button class=&quot;trigger&quot; size=&quot;medium&quot;&gt;打开/关闭(同时还可以添加和移除class)&lt;/el-button&gt;</code></pre>
				<h4>关联容器联动&多个侧滑切换</h4>
				<el-button @click="switchSlip(2,[3])" size="medium">关联容器侧滑</el-button>
				<el-button @click="switchSlip(3,[2])" size="medium">多个侧滑切换(abs定位)</el-button>
				<pre><code>&lt;yl-sideslip
  ref=&quot;sideslip2&quot;
  min-width=&quot;880px&quot;
  resize-dom=&quot;.yl-layout__main&quot;
  relation-dom=&quot;.container&quot;
&gt;
  &lt;div class=&quot;sideslip-exp&quot;&gt;
    &lt;div class=&quot;sd-content&quot;&gt;这里可以自定义任何内容！&lt;/div&gt;
    &lt;div class=&quot;sd-footer&quot;&gt;
      &lt;el-button size=&quot;medium&quot; plain @click=&quot;$refs.sideslip2.switchShow(false)&quot;&gt;关闭&lt;/el-button&gt;
      &lt;el-button size=&quot;medium&quot; type=&quot;primary&quot; @click=&quot;$refs.sideslip2.switchShow(false)&quot;&gt;确定&lt;/el-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/yl-sideslip&gt;

&lt;yl-sideslip ref=&quot;sideslip3&quot; width=&quot;420px&quot; height=&quot;100%&quot; position=&quot;abs&quot; container=&quot;.container&quot;&gt;
  &lt;div class=&quot;sideslip-exp&quot;&gt;
    &lt;div class=&quot;sd-content&quot;&gt;这里可以自定义任何内容！&lt;/div&gt;
    &lt;div class=&quot;sd-footer&quot;&gt;
      &lt;el-button size=&quot;medium&quot; plain @click=&quot;$refs.sideslip3.switchShow(false)&quot;&gt;关闭&lt;/el-button&gt;
      &lt;el-button size=&quot;medium&quot; type=&quot;primary&quot; @click=&quot;$refs.sideslip3.switchShow(false)&quot;&gt;确定&lt;/el-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/yl-sideslip&gt;

&lt;el-button @click=&quot;switchSlip(2,[3])&quot; size=&quot;medium&quot;&gt;关联容器侧滑&lt;/el-button&gt;
&lt;el-button @click=&quot;switchSlip(3,[2])&quot; size=&quot;medium&quot;&gt;多个侧滑切换&lt;/el-button&gt;

methods: {
  switchSlip(openIndex, closeIndex) {
    let self = this;
    if (closeIndex &amp;&amp; closeIndex.length !== 0) {
      closeIndex.forEach(close =&gt; {
        self.$refs[&quot;sideslip&quot; + close].switchShow(false);
      });
    }

    this.$refs[&quot;sideslip&quot; + openIndex].switchShow(true);
  }
}</code></pre>
			</div>
			<h3 id="属性">属性</h3>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>默认值</th>
						<th>说明</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>default-show</td>
						<td>false</td>
						<td>控制侧滑首次的默认状态(打开和关闭)</td>
					</tr>
					<tr>
						<td>extra-close</td>
						<td>false</td>
						<td>点击侧滑以外的区域关闭组件</td>
					</tr>
					<tr>
						<td>trigger-dom</td>
						<td>无</td>
						<td>控制组件的元素，值为 .class 或 #id</td>
					</tr>
					<tr>
						<td>trigger-toggle</td>
						<td>&quot;false&quot;</td>
						<td>是否可以来回切换, 是：&quot;true&quot; 否：&quot;false&quot;</td>
					</tr>
					<tr>
						<td>trigger-class</td>
						<td>无</td>
						<td>组件切换给控制元素添加/移除的 class 名</td>
					</tr>
					<tr>
						<td>width</td>
						<td>&quot;320px&quot;</td>
						<td>侧滑的宽度</td>
					</tr>
					<tr>
						<td>height</td>
						<td>&quot;calc(100% - 50px)&quot;</td>
						<td>侧滑的高度(100%相对于包裹侧滑的容器)</td>
					</tr>
					<tr>
						<td>position</td>
						<td>&quot;fix&quot;</td>
						<td>侧滑的定位方式, &quot;fix&quot;:fixed 定位 &quot;abs&quot;: absolute 定位</td>
					</tr>
					<tr>
						<td>container</td>
						<td>无</td>
						<td>包裹侧滑的容器(position 为 abs 时必传用于定位)</td>
					</tr>
					<tr>
						<td>relation-dom</td>
						<td>无</td>
						<td>在自适应屏幕时需要和侧滑关联改变的关联容器元素， 值为 .class 或 #id</td>
					</tr>
					<tr>
						<td>resize-dom</td>
						<td>无</td>
						<td>包裹关联容器的自适应相对于元素，值为 .class 或 #id</td>
					</tr>
					<tr>
						<td>min-width</td>
						<td>无</td>
						<td>关联容器的最小宽度(resize-dom 的最小宽度-侧滑的宽度)</td>
					</tr>
				</tbody>
			</table>
			<h3 id="事件">事件</h3>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>值</th>
						<th>说明</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>before-show</td>
						<td>无</td>
						<td>侧滑打开之前触发</td>
					</tr>
					<tr>
						<td>visible-change</td>
						<td>true/false</td>
						<td>侧滑状态改变时触发, true:侧滑打开 false:侧滑关闭</td>
					</tr>
				</tbody>
			</table>
			<h3 id="方法">方法</h3>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>参数</th>
						<th>说明</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>switchShow</td>
						<td>true/false</td>
						<td>控制侧滑的打开和关闭</td>
					</tr>
					<tr>
						<td>switchExtraCloseStatus</td>
						<td>true/false</td>
						<td>控制侧滑是否启用点击其他区域关闭侧滑(开启时打开侧滑的事件需要阻止事件冒泡,不然侧滑会打不开)</td>
					</tr>
				</tbody>
			</table>
		</div>
		<yl-sideslip ref="sideslip" :default-show="sideslip1.show" :extra-close="sideslip1.otherClose">
			<div class="sideslip-exp">
				<div class="sd-content">这里可以自定义任何内容！</div>
				<div class="sd-footer">
					<el-button size="medium" plain @click="$refs.sideslip.switchShow(false)">关闭</el-button>
					<el-button size="medium" type="primary" @click="$refs.sideslip.switchShow(false)">确定</el-button>
				</div>
			</div>
		</yl-sideslip>
		<yl-sideslip
			ref="sideslip1"
			trigger-dom=".trigger"
			trigger-toggle="true"
			trigger-class="trigger-class"
		>
			<div class="sideslip-exp">
				<div class="sd-content">这里可以自定义任何内容！</div>
				<div class="sd-footer">
					<el-button size="medium" plain @click="$refs.sideslip1.switchShow(false)">关闭</el-button>
					<el-button size="medium" type="primary" @click="$refs.sideslip1.switchShow(false)">确定</el-button>
				</div>
			</div>
		</yl-sideslip>
		<yl-sideslip
			ref="sideslip2"
			min-width="880px"
			resize-dom=".yl-layout__main"
			relation-dom=".container"
		>
			<div class="sideslip-exp">
				<div class="sd-content">这里可以自定义任何内容！</div>
				<div class="sd-footer">
					<el-button size="medium" plain @click="$refs.sideslip2.switchShow(false)">关闭</el-button>
					<el-button size="medium" type="primary" @click="$refs.sideslip2.switchShow(false)">确定</el-button>
				</div>
			</div>
		</yl-sideslip>
		<yl-sideslip ref="sideslip3" width="420px" height="100%" position="abs" container=".container">
			<div class="sideslip-exp">
				<div class="sd-content">这里可以自定义任何内容！</div>
				<div class="sd-footer">
					<el-button size="medium" plain @click="$refs.sideslip3.switchShow(false)">关闭</el-button>
					<el-button size="medium" type="primary" @click="$refs.sideslip3.switchShow(false)">确定</el-button>
				</div>
			</div>
		</yl-sideslip>
	</div>
</template>
<script>
import { GetMarkDownInfo } from "../../axios/api.js";
import marked from "marked";
export default {
	data() {
		return {
			contentHtml: "",
			sideslip1: {
				show: false,
				otherClose: false
			},
			sideslip2: {},
			sideslip3: {}
		};
	},
	mounted() {
		GetMarkDownInfo({ url: "markdown/yl-ui/sideslip/README.md" }).then(
			res => {
				// console.log(marked(res.data));
				this.contentHtml = marked(res.data);
			}
		);
	},
	methods: {
		switchSlip(openIndex, closeIndex) {
			let self = this;
			if (closeIndex && closeIndex.length !== 0) {
				closeIndex.forEach(close => {
					self.$refs["sideslip" + close].switchShow(false);
				});
			}

			this.$refs["sideslip" + openIndex].switchShow(true);
		}
	}
};
</script>
<style lang="scss">
@import "../../assets/common/scss/common.scss";
</style>
<style lang="scss" scoped>
.sideslip-exp {
	position: relative;
	height: 100%;
	.sd-content {
		padding: 16px;
	}
	.sd-footer {
		position: absolute;
		bottom: 0;
		padding: 16px;
		width: 100%;
		text-align: right;
	}
}
/deep/ .trigger-class {
	background-color: #67c23a;
	color: #fff;
}
</style>

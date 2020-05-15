<template>
	<div class="container">
		<div class="markdown" v-html="contentHtml"></div>
		<div class="example">
			<h2 id="示列">示列</h2>
			<div class="show-area">
				<yl-scroll class="scroll-area" target=".scroll-area" @scroll="handleScroll">
					<div class="scroll-content">
						<div v-for="item in lists" class="list" :key="item">我是列表{{item}}</div>
						<yl-loading :options="loading"></yl-loading>
					</div>
				</yl-scroll>
			</div>
		</div>
	</div>
</template>
<script>
import { GetMarkDownInfo } from "../../axios/api.js";
import marked from "marked";
export default {
	data() {
		return {
			contentHtml: "",
			loading: {
				state: "loading",
				text: ""
			},
			page: 1,
			lists: []
		};
	},
	mounted() {
		this.getLists();
		GetMarkDownInfo({ url: "markdown/yl-ui/scroll/README.md" }).then(
			res => {
				this.contentHtml = marked(res.data);
			}
		);
	},
	methods: {
		getLists() {
			let list = [],
				start = this.page === 2 ? 50 : 0;
			for (let i = start; i < 50 * this.page; i++) {
				list.push(i);
			}
			this.lists = this.lists.concat(list);
		},
		handleScroll(val) {
			if (val.isBottom) {
				// console.log(val);
				if (this.page === 2) {
					this.loading.state = "nomore";
					this.loading.text = "我是有底线的！";
				} else {
					this.page = 2;
					this.getLists();
				}
			}
		}
	}
};
</script>
<style lang="scss">
@import "../../assets/common/scss/common.scss";
</style>
<style lang="scss" scoped>
.scroll-area {
	width: 100%;
	height: 600px;
	border: 1px solid #efeaea;
	overflow: auto;
	.list {
		padding: 16px;
		text-align: center;
		border-bottom: 1px solid #efeaea;
	}
}
</style>
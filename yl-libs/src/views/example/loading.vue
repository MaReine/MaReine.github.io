<template>
	<div class="container">
		<div class="markdown" v-html="contentHtml"></div>
		<div class="example">
			<h2 id="示列">示列</h2>
			<div class="operation">
				<el-button type="primary" @click="switchOp(0)">默认loading</el-button>
				<el-button type="primary" @click="switchOp(1)">修改loading文案</el-button>
				<el-button type="primary" @click="switchOp(2)">自定义loading</el-button>
				<el-button type="primary" @click="switchOp(3)">默认nomore</el-button>
				<el-button type="primary" @click="switchOp(4)">修改nomore文案</el-button>
				<el-button type="primary" @click="switchOp(5)">自定义nomore</el-button>
				<el-button type="primary" @click="switchOp(6)">默认nodata</el-button>
				<el-button type="primary" @click="switchOp(7)">修改nodata文案</el-button>
				<el-button type="primary" @click="switchOp(8)">自定义nodata</el-button>
			</div>
			<div class="show-area">
				<yl-loading :options="loading">
					<div v-if="customLoading" slot="loading">简单示意，我是loading插槽</div>
					<div v-if="customNoMore" slot="nomore">简单示意，我是nomore插槽</div>
					<div v-if="customNoData" slot="nodata">简单示意，我是nodata插槽</div>
				</yl-loading>
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
			customLoading: false,
			customNoMore: false,
			customNoData: false
		};
	},
	mounted() {
		GetMarkDownInfo({ url: "markdown/yl-ui/loading/README.md" }).then(
			res => {
				this.contentHtml = marked(res.data);
			}
		);
	},
	methods: {
		resSet() {
			this.loading.text = "";
			this.customLoading = false;
			this.customNoMore = false;
			this.customNoData = false;
		},
		switchOp(type) {
			switch (type) {
				case 0:
					this.resSet();
					this.loading.state = "loading";
					break;
				case 1:
					this.resSet();
					this.loading.state = "loading";
					this.loading.text = "啊，我被改了...";
					break;
				case 2:
					this.resSet();
					this.loading.state = "loading";
					this.customLoading = true;
					break;
				case 3:
					this.resSet();
					this.loading.state = "nomore";
					break;
				case 4:
					this.resSet();
					this.loading.state = "nomore";
					this.loading.text = "啊，我被改了...";
					break;
				case 5:
					this.resSet();
					this.loading.state = "nomore";
					this.customNoMore = true;
					break;
				case 6:
					this.resSet();
					this.loading.state = "nodata";
					break;
				case 7:
					this.resSet();
					this.loading.state = "nodata";
					this.loading.text = "啊，我被改了...";
					break;
				case 8:
					this.resSet();
					this.loading.state = "nodata";
					this.customNoData = true;
					break;
			}
		}
	}
};
</script>
<style lang="scss">
@import "../../assets/common/scss/common.scss";
</style>
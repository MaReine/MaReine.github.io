<template>
	<div class="container">
		<div class="markdown" v-html="contentHtml"></div>
	</div>
</template>
<script>
import { GetMarkDownInfo } from "../../axios/api.js";
import marked from "marked";
export default {
	data() {
		return {
			contentHtml: ""
		};
	},
	mounted() {
		GetMarkDownInfo({ url: "markdown/yl-ui/layout/README.md" }).then(
			res => {
				this.contentHtml = marked(res.data);
			}
		);
	}
};
</script>
<style lang="scss">
@import "../../assets/common/scss/common.scss";
</style>
<style lang="scss" scoped>
.example-container {
	.sys-name {
		color: #fff;
	}
	.side-nav {
		margin-top: 16px;
		padding-left: 20px;
		color: #fff;
	}
}
.example-layout {
	padding: 0;
	height: 480px;
}
</style>

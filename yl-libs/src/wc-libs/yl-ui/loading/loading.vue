<template>
	<div class="yl-loading" v-if="visible">
		<div class="loading" v-if="loading">
			<slot name="loading">
				<div class="custom">
					<svg viewBox="25 25 50 50" class="circular">
						<circle cx="50" cy="50" r="20" fill="none" class="path" />
					</svg>
					<span class="loading-text" v-text="loadingText"></span>
				</div>
			</slot>
		</div>
		<div class="no-more" v-if="noMore">
			<slot name="nomore">
				<div class="custom">
					<span class="no-more-text" v-text="noMoreText"></span>
				</div>
			</slot>
		</div>
		<div class="no-data" v-if="noData">
			<slot name="nodata">
				<div class="custom">
					<span class="no-data-text" v-text="noDataText"></span>
				</div>
			</slot>
		</div>
	</div>
</template>
<script>
export default {
	name: "YlLoading",
	props: ["options"],
	data() {
		return {
			visible: true, // 是否显示
			loading: true,
			loadingText: "加载中...",
			noMore: false,
			noMoreText: "没有更多内容了",
			noData: false,
			noDataText: "暂无数据"
		};
	},
	watch: {
		options: {
			handler(val) {
				// console.log(val);
				this.init(val);
			},
			deep: true
		}
	},
	mounted() {
		this.init(this.options);
	},
	methods: {
		init(val) {
			this.resetParams();
			switch (val.state) {
				case "loading":
					this.showLoading(val.text);
					break;
				case "nomore":
					this.showNoMore(val.text);
					break;
				case "nodata":
					this.showNoData(val.text);
					break;
				case "hide":
					this.hide();
					break;
			}
		},
		// 重置参数
		resetParams() {
			this.loadingText = "加载中...";
			this.noMoreText = "没有更多内容了";
			this.noDataText = "暂无数据";
		},
		// 显示加载动画
		showLoading(text) {
			this.visible = true;
			this.noMore = false;
			this.noData = false;
			this.loading = true;
			if (text) {
				this.loadingText = text;
			}
		},
		// 隐藏
		hide() {
			this.visible = false;
		},
		// 显示noMore
		showNoMore(text) {
			this.visible = true;
			this.loading = false;
			this.noData = false;
			this.noMore = true;
			if (text) {
				this.noMoreText = text;
			}
		},
		// 显示noData
		showNoData(text) {
			this.visible = true;
			this.loading = false;
			this.noMore = false;
			this.noData = true;
			if (text) {
				this.noDataText = text;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@-webkit-keyframes loading-rotate {
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
@keyframes loading-rotate {
	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
.yl-loading {
	position: relative;
	width: 100%;
	.custom {
		width: 100%;
		height: 48px;
		line-height: 48px;
		text-align: center;
	}
	.loading {
		.circular {
			width: 16px !important;
			height: 16px !important;
			animation: loading-rotate 2s linear infinite;
			vertical-align: middle;
			.path {
				animation: loading-dash 1.5s ease-in-out infinite;
				stroke-dasharray: 90, 150;
				stroke-dashoffset: 0;
				stroke-width: 2;
				stroke: #409eff;
				stroke-linecap: round;
			}
		}
		.loading-text {
			margin-left: 9px;
			font-size: 14px;
			color: #409eff;
			vertical-align: middle;
		}
	}
	.no-more {
		.no-more-text {
			font-size: 14px;
			font-weight: 400;
			color: #606266;
		}
	}
	.no-data {
		.no-data-text {
			font-size: 14px;
			font-weight: 400;
			color: #606266;
		}
	}
}
</style>

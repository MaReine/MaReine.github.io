<template>
	<div class="yl-layout">
		<div class="yl-layout__page">
			<div class="yl-layout__side-nav">
				<div class="yl-nav-title">
					<slot name="side-header"></slot>
				</div>
				<div class="yl-nav-content">
					<slot name="side-nav"></slot>
				</div>
			</div>
			<div class="yl-layout__page-content">
				<div class="yl-layout__page-bread-crumb">
					<slot name="page-header"></slot>
				</div>
				<div class="yl-layout__main">
					<slot name="page-main"></slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "YlLayout"
};
</script>
<style lang="scss">
/**----scroll bar----**/
::-webkit-scrollbar-track-piece {
	background-color: #fff;
}

::-webkit-scrollbar {
	width: 6px;
	height: 6px;
}

::-webkit-scrollbar-thumb {
	background-color: #c2c2c2;
	background-clip: padding-box;
	min-height: 28px;
	border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
	background-color: #a0a0a0;
}

/**----scroll bar----**/
/**----全局公共样式----**/
html,
body {
	margin: 0;
	padding: 0;
	width: 100vw;
	height: 100vh;
	font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
		"Microsoft YaHei", "微软雅黑", Arial, sans-serif;
	overflow-y: hidden;
}
/**----全局公共样式----**/
</style>
<style lang="scss" scoped>
.yl-layout {
	margin: 0 auto;
	min-width: 1200px;
	min-height: 400px;
	width: 100%;
	height: 100%;
	background-color: #fff;
	.yl-layout__page {
		width: 100%;
		height: 100%;
		display: flex;
		.yl-layout__side-nav {
			flex-shrink: 0;
			width: 272px;
			height: 100%;
			box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.12),
				-1px 0px 0px 0px rgba(220, 223, 230, 1);
			border-right: 1px solid #dcdfe6;
			z-index: 10;
			overflow: hidden;
			.yl-nav-title {
				position: relative;
				padding-left: 20px;
				height: 50px;
				line-height: 50px;
				border-bottom: 1px solid #dcdfe6;
				overflow: hidden;
				box-sizing: border-box;
			}
			.yl-nav-content {
				position: relative;
				height: calc(100% - 50px);
				overflow: auto;
			}
		}
		.yl-layout__page-content {
			flex-grow: 1;
			height: 100%;
			background-color: #e9eef2;
			overflow: hidden;
			.yl-layout__page-bread-crumb {
				position: relative;
				width: 100%;
				height: 50px;
				line-height: 50px;
				background-color: #fff;
				border-bottom: 1px solid #dcdfe6;
				box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.12),
					0px -1px 0px 0px rgba(220, 223, 230, 1);
				z-index: 9;
				overflow: hidden;
				box-sizing: border-box;
			}
			.yl-layout__main {
				position: relative;
				padding: 16px 24px 0;
				height: calc(100% - 50px);
				box-sizing: border-box;
				overflow: auto;
			}
		}
	}
}
</style>

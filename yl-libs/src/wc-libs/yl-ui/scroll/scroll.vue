<template>
	<div class="yl-scroll">
		<slot></slot>
	</div>
</template>
<script>
export default {
	name: "YlScroll",
	data() {
		return {};
	},
	mounted() {
		this.$nextTick(() => {
			setTimeout(() => {
				this.initParams();
			}, 300);
		});
	},
	methods: {
		initParams() {
			let target = this.$attrs["target"];
			if (target) {
				target = target.trim();
				this.scrollEl = document.querySelector(target);
				this.eventDom = this.scrollEl;
				if (target === "body" || target === "html") {
					this.scrollEl = document.scrollingElement;
					this.eventDom = window;
				}
				let contentH = this.scrollEl.clientHeight;
				var scrollHight = this.scrollEl.scrollHeight;
				// console.log(contentH, scrollHight);
				let flagNum = 0; // 防止程序陷入死循环
				var flag = setInterval(() => {
					scrollHight = this.scrollEl.scrollHeight;
					if (contentH >= scrollHight && flagNum <= 5) {
						this.$emit("scroll", {
							scrollTop: 0,
							isBottom: true
						});
						flagNum++;
					} else {
						flagNum = 0;
						clearInterval(flag);
					}
				}, 1);

				// console.log(this.scrollEl, contentH, scrollHight);
				this.eventDom.addEventListener("scroll", () => {
					contentH = this.scrollEl.clientHeight;
					scrollHight = this.scrollEl.scrollHeight;
					let scrollTop = this.scrollEl.scrollTop;
					// console.log(Math.ceil(contentH + scrollTop), scrollHight);
					if (Math.ceil(contentH + scrollTop) >= scrollHight) {
						this.$emit("scroll", {
							scrollTop: scrollTop,
							isBottom: true
						});
					} else {
						this.$emit("scroll", {
							scrollTop: scrollTop,
							isBottom: false
						});
					}
				});
			} else {
				console.warn("not find scroll target");
			}
		}
	}
};
</script>

<style lang="scss" scoped>
</style>

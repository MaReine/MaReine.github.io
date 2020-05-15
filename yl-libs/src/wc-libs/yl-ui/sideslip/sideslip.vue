<template>
	<div class="yl-slidslip" :class="[posClass,{'sideslip_active':show}]" @click.stop>
		<div class="yl-slidslip-container">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: "YlSideslip",
	props: {
		defaultShow: Boolean,
		extraClose: Boolean
	},
	data() {
		return {
			show: this.defaultShow || false,
			otherClose: this.extraClose || false,
			pos: "fix" // 默认fixed定位，abs 相对传入的 container 父容器定位
		};
	},
	computed: {
		posClass() {
			return "yl-slidslip_" + this.pos;
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.init();
		});
	},
	methods: {
		init() {
			/** 获取参数 */
			// 生成唯一标识
			this.Id = this.GetUUId();
			// 获取定位方式
			let pos = this.$attrs["position"];
			// 获取包裹侧滑的容器
			this.container = this.$attrs["container"];
			// 获取触发参数
			this.trigger = {};
			this.trigger.dom = this.$attrs["trigger-dom"];
			this.trigger.toggle = this.$attrs["trigger-toggle"];
			this.trigger.class = this.$attrs["trigger-class"];
			// 获取宽度参数
			this.width = this.$attrs["width"];
			// 获取高度参数
			this.height = this.$attrs["height"];
			// 获取自适应关联容器最小宽度
			this.minWidth = parseInt(this.$attrs["min-width"]);
			// 获取自适应相对容器
			this.resizeDom = this.$attrs["resize-dom"];
			// 获取自适应关联容器
			this.relationDom = this.$attrs["relation-dom"];

			/** 初始化 */
			// 设置定位方式
			if (pos && pos === "abs") {
				this.pos = pos;
				if (this.container) {
					let el = document.documentElement.querySelector(
						this.container
					);
					if (el) {
						el.classList.add("yl-sideslip-container");
						el.appendChild(this.$el);
					}
				}
			}
			// 设置侧滑宽度
			if (this.width) {
				this.$el.style.width = this.width;
			}
			// 设置侧滑高度
			if (this.height) {
				this.$el.style.height = this.height;
			}
			// 侧滑的宽度  一直不变
			this.sideslipW = this.$el.getBoundingClientRect().width;
			// 初始相对容器宽度  窗口变化会变化
			if (this.resizeDom) {
				this.resizeDomW = document.documentElement
					.querySelector(this.resizeDom)
					.getBoundingClientRect().width;
			}
			// 初始关联容器宽度  窗口变化会变化
			if (this.relationDom) {
				let el = document.documentElement.querySelector(
					this.relationDom
				);
				if (el) {
					this.relationDomW = el.getBoundingClientRect().width;
					el.classList.add("sideslip-relation_" + this.Id);
				}
			}
			if (this.show) {
				this.switchShow(this.show);
			}
			this.initEvent();
		},
		initEvent() {
			let _self = this;

			// 点击侧滑其它区域关闭侧滑
			if (this.otherClose) {
				this.addEventOtherClickClose();
			}

			// 窗口宽度改变实时更新侧滑的显示方式
			if (this.minWidth && this.resizeDom && this.relationDom) {
				window.addEventListener("resize", () => {
					if (_self.show) {
						// 获取窗口宽度变化后的相对容器宽度
						let newResizeDomW = document.documentElement
							.querySelector(_self.resizeDom)
							.getBoundingClientRect().width;
						if (newResizeDomW > _self.sideslipW + _self.minWidth) {
							document.documentElement
								.querySelector(".sideslip-relation_" + _self.Id)
								.classList.remove(
									"sideslip-relation_active-" + _self.Id
								);
							// 计算窗口宽度变化后关联容器的宽度
							let newRelationDomW =
								_self.relationDomW +
								(newResizeDomW - _self.resizeDomW);
							let relationEl = document.documentElement.querySelector(
								".sideslip-relation_" + _self.Id
							);
							if (relationEl) {
								relationEl.style.width =
									newRelationDomW - _self.sideslipW + "px";
								relationEl.classList.add(
									"sideslip-relation_active-" + _self.Id
								);
							}
						} else {
							let relationActiveEl = document.documentElement.querySelector(
								".sideslip-relation_active-" + _self.Id
							);
							if (relationActiveEl) {
								relationActiveEl.style.width = "";
								relationActiveEl.classList.remove(
									"sideslip-relation_active-" + _self.Id
								);
							}
						}
					}
				});
			}

			// 增加侧滑组件触发按钮事件监听
			if (_self.trigger.dom) {
				let triggerEl = document.documentElement.querySelector(
					_self.trigger.dom
				);
				if (triggerEl) {
					triggerEl.addEventListener("click", event => {
						event.stopPropagation();
						if (
							_self.trigger.toggle === "true" ||
							_self.trigger.toggle === true
						) {
							if (_self.show) {
								_self.switchShow(false);
							} else {
								_self.switchShow(true);
							}
						} else {
							if (!_self.show) {
								_self.switchShow(true);
							}
						}
					});
				}
			}
		},
		// 控制侧滑的显示和隐藏
		switchShow(state) {
			// console.log(state);
			if (state) {
				this.sendEvent("before-show");
				this.visible();
			} else {
				this.hidden();
			}
		},
		// 控制侧滑是否启用点击其他区域关闭侧滑
		switchExtraCloseStatus(state) {
			if (state) {
				this.addEventOtherClickClose();
			} else {
				this.removeEventOtherClickClose();
			}
		},
		// 添加点击其它区域隐藏侧滑的事件
		addEventOtherClickClose() {
			let _self = this;
			this.$nextTick(() => {
				document.documentElement.querySelector("body").addEventListener(
					"click",
					(_self._AddEvent = () => {
						_self.switchShow(false);
					})
				);
			});
		},
		// 移除点击其它区域隐藏侧滑的事件
		removeEventOtherClickClose() {
			let _self = this;
			this.$nextTick(() => {
				document.documentElement
					.querySelector("body")
					.removeEventListener("click", _self._AddEvent);
			});
		},
		// 侧滑显示
		visible() {
			let _self = this;
			if (this.trigger.dom && this.trigger.class) {
				document.documentElement
					.querySelector(this.trigger.dom)
					.classList.add(this.trigger.class);
			}
			if (_self.relationDom && _self.resizeDom && _self.minWidth) {
				// 如果显示并且自适应参数存在判断是否平铺显示
				let newResizeDomW = document.documentElement
					.querySelector(_self.resizeDom)
					.getBoundingClientRect().width;
				// console.log(newResizeDomW, _self.sideslipW + _self.minWidth);
				if (newResizeDomW > _self.sideslipW + _self.minWidth) {
					// 平铺显示
					let newRelationDomW =
						_self.relationDomW + (newResizeDomW - _self.resizeDomW);
					let relationEl = document.documentElement.querySelector(
						".sideslip-relation_" + _self.Id
					);
					if (relationEl) {
						relationEl.style.width =
							newRelationDomW - _self.sideslipW + "px";
						relationEl.classList.add(
							"sideslip-relation_active-" + _self.Id
						);
					}
				}
			}
			_self.show = true;
			_self.sendEvent("visible-change", _self.show);
		},
		// 侧滑隐藏
		hidden() {
			if (this.trigger.dom && this.trigger.class) {
				document.documentElement
					.querySelector(this.trigger.dom)
					.classList.remove(this.trigger.class);
			}
			if (this.relationDom) {
				let el = document.documentElement.querySelector(
					".sideslip-relation_active-" + this.Id
				);
				if (el) {
					el.style.width = "";
					el.classList.remove("sideslip-relation_active-" + this.Id);
				}
			}
			this.show = false;
			this.sendEvent("visible-change", this.show);
		},
		sendEvent(name, val) {
			this.$emit(name, val);
		},
		GetUUId(len, radix) {
			/* eslint-disable */
			// 生成唯一标识 len:长度 默认8 radix:进制 默认10
			var len = len || 8;
			var radix = radix || 16;

			var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
				""
			);
			var uuid = [],
				i;
			radix = radix || chars.length;

			if (len) {
				// Compact form
				for (i = 0; i < len; i++)
					uuid[i] = chars[0 | (Math.random() * radix)];
			} else {
				// rfc4122, version 4 form
				var r;

				// rfc4122 requires these characters
				uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
				uuid[14] = "4";

				// Fill in random data. At i==19 set the high bits of clock sequence as
				// per rfc4122, sec. 4.1.5
				for (i = 0; i < 36; i++) {
					if (!uuid[i]) {
						r = 0 | (Math.random() * 16);
						uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
					}
				}
			}

			return uuid.join("");
		}
	}
};
</script>

<style lang="scss" scoped>
.yl-sideslip-container {
	position: relative;
}
.yl-slidslip_fix {
	position: fixed;
	top: 50px;
	right: 0;
	z-index: 8;
}
.yl-slidslip_abs {
	position: absolute;
	top: 0;
	right: 0;
	z-index: 8;
	visibility: hidden;
}
.yl-slidslip {
	width: 320px;
	height: calc(100% - 50px);
	background: #fff;
	box-shadow: 0px 2px 26px 6px rgba(0, 0, 0, 0.12),
		1px 0px 0px 0px rgba(220, 223, 230, 1);
	transform: translateX(100%);
	transition: transform 0.12s linear;
}
.yl-slidslip-container {
	width: 100%;
	height: 100%;
}
.sideslip_active {
	visibility: visible;
	transform: translate(0);
}
[class*="sideslip-relation"],
[class^="sideslip-relation"] {
	width: 100%;
	transition: width 0.12s linear;
}
</style>

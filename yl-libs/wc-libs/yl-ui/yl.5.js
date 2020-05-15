(window["yl_jsonp"] = window["yl_jsonp"] || []).push([[5],{

/***/ "92cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"22550d4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/wc-libs/yl-ui/scroll/scroll.vue?vue&type=template&id=0f81e779&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yl-scroll"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/wc-libs/yl-ui/scroll/scroll.vue?vue&type=template&id=0f81e779&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/wc-libs/yl-ui/scroll/scroll.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
/* harmony default export */ var scrollvue_type_script_lang_js_shadow = ({
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
      var target = this.$attrs["target"];

      if (target) {
        target = target.trim();
        this.scrollEl = document.querySelector(target);
        this.eventDom = this.scrollEl;

        if (target === "body" || target === "html") {
          this.scrollEl = document.scrollingElement;
          this.eventDom = window;
        }

        var contentH = this.scrollEl.clientHeight;
        var scrollHight = this.scrollEl.scrollHeight; // console.log(contentH, scrollHight);

        var flagNum = 0; // 防止程序陷入死循环

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
        }, 1); // console.log(this.scrollEl, contentH, scrollHight);

        this.eventDom.addEventListener("scroll", () => {
          contentH = this.scrollEl.clientHeight;
          scrollHight = this.scrollEl.scrollHeight;
          var scrollTop = this.scrollEl.scrollTop; // console.log(Math.ceil(contentH + scrollTop), scrollHight);

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
});
// CONCATENATED MODULE: ./src/wc-libs/yl-ui/scroll/scroll.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var scroll_scrollvue_type_script_lang_js_shadow = (scrollvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/wc-libs/yl-ui/scroll/scroll.vue?shadow



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  scroll_scrollvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0f81e779",
  null
  ,true
)

component.options.__file = "scroll.vue"
/* harmony default export */ var scrollshadow = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=yl.5.js.map
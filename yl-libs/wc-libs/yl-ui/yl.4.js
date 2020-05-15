(window["yl_jsonp"] = window["yl_jsonp"] || []).push([[4],{

/***/ "4b08":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"22550d4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/wc-libs/yl-ui/sideslip/sideslip.vue?vue&type=template&id=3a266113&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"yl-slidslip",class:[_vm.posClass,{'sideslip_active':_vm.show}],on:{"click":function($event){$event.stopPropagation();}}},[_c('div',{staticClass:"yl-slidslip-container"},[_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/wc-libs/yl-ui/sideslip/sideslip.vue?vue&type=template&id=3a266113&scoped=true&shadow

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("e814");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/wc-libs/yl-ui/sideslip/sideslip.vue?vue&type=script&lang=js&shadow


//
//
//
//
//
//
//
/* harmony default export */ var sideslipvue_type_script_lang_js_shadow = ({
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
      this.Id = this.GetUUId(); // 获取定位方式

      var pos = this.$attrs["position"]; // 获取包裹侧滑的容器

      this.container = this.$attrs["container"]; // 获取触发参数

      this.trigger = {};
      this.trigger.dom = this.$attrs["trigger-dom"];
      this.trigger.toggle = this.$attrs["trigger-toggle"];
      this.trigger.class = this.$attrs["trigger-class"]; // 获取宽度参数

      this.width = this.$attrs["width"]; // 获取高度参数

      this.height = this.$attrs["height"]; // 获取自适应关联容器最小宽度

      this.minWidth = parse_int_default()(this.$attrs["min-width"]); // 获取自适应相对容器

      this.resizeDom = this.$attrs["resize-dom"]; // 获取自适应关联容器

      this.relationDom = this.$attrs["relation-dom"];
      /** 初始化 */
      // 设置定位方式

      if (pos && pos === "abs") {
        this.pos = pos;

        if (this.container) {
          var el = document.documentElement.querySelector(this.container);

          if (el) {
            el.classList.add("yl-sideslip-container");
            el.appendChild(this.$el);
          }
        }
      } // 设置侧滑宽度


      if (this.width) {
        this.$el.style.width = this.width;
      } // 设置侧滑高度


      if (this.height) {
        this.$el.style.height = this.height;
      } // 侧滑的宽度  一直不变


      this.sideslipW = this.$el.getBoundingClientRect().width; // 初始相对容器宽度  窗口变化会变化

      if (this.resizeDom) {
        this.resizeDomW = document.documentElement.querySelector(this.resizeDom).getBoundingClientRect().width;
      } // 初始关联容器宽度  窗口变化会变化


      if (this.relationDom) {
        var _el = document.documentElement.querySelector(this.relationDom);

        if (_el) {
          this.relationDomW = _el.getBoundingClientRect().width;

          _el.classList.add("sideslip-relation_" + this.Id);
        }
      }

      if (this.show) {
        this.switchShow(this.show);
      }

      this.initEvent();
    },

    initEvent() {
      var _self = this; // 点击侧滑其它区域关闭侧滑


      if (this.otherClose) {
        this.addEventOtherClickClose();
      } // 窗口宽度改变实时更新侧滑的显示方式


      if (this.minWidth && this.resizeDom && this.relationDom) {
        window.addEventListener("resize", () => {
          if (_self.show) {
            // 获取窗口宽度变化后的相对容器宽度
            var newResizeDomW = document.documentElement.querySelector(_self.resizeDom).getBoundingClientRect().width;

            if (newResizeDomW > _self.sideslipW + _self.minWidth) {
              document.documentElement.querySelector(".sideslip-relation_" + _self.Id).classList.remove("sideslip-relation_active-" + _self.Id); // 计算窗口宽度变化后关联容器的宽度

              var newRelationDomW = _self.relationDomW + (newResizeDomW - _self.resizeDomW);
              var relationEl = document.documentElement.querySelector(".sideslip-relation_" + _self.Id);

              if (relationEl) {
                relationEl.style.width = newRelationDomW - _self.sideslipW + "px";
                relationEl.classList.add("sideslip-relation_active-" + _self.Id);
              }
            } else {
              var relationActiveEl = document.documentElement.querySelector(".sideslip-relation_active-" + _self.Id);

              if (relationActiveEl) {
                relationActiveEl.style.width = "";
                relationActiveEl.classList.remove("sideslip-relation_active-" + _self.Id);
              }
            }
          }
        });
      } // 增加侧滑组件触发按钮事件监听


      if (_self.trigger.dom) {
        var triggerEl = document.documentElement.querySelector(_self.trigger.dom);

        if (triggerEl) {
          triggerEl.addEventListener("click", event => {
            event.stopPropagation();

            if (_self.trigger.toggle === "true" || _self.trigger.toggle === true) {
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
      var _self = this;

      this.$nextTick(() => {
        document.documentElement.querySelector("body").addEventListener("click", _self._AddEvent = () => {
          _self.switchShow(false);
        });
      });
    },

    // 移除点击其它区域隐藏侧滑的事件
    removeEventOtherClickClose() {
      var _self = this;

      this.$nextTick(() => {
        document.documentElement.querySelector("body").removeEventListener("click", _self._AddEvent);
      });
    },

    // 侧滑显示
    visible() {
      var _self = this;

      if (this.trigger.dom && this.trigger.class) {
        document.documentElement.querySelector(this.trigger.dom).classList.add(this.trigger.class);
      }

      if (_self.relationDom && _self.resizeDom && _self.minWidth) {
        // 如果显示并且自适应参数存在判断是否平铺显示
        var newResizeDomW = document.documentElement.querySelector(_self.resizeDom).getBoundingClientRect().width; // console.log(newResizeDomW, _self.sideslipW + _self.minWidth);

        if (newResizeDomW > _self.sideslipW + _self.minWidth) {
          // 平铺显示
          var newRelationDomW = _self.relationDomW + (newResizeDomW - _self.resizeDomW);
          var relationEl = document.documentElement.querySelector(".sideslip-relation_" + _self.Id);

          if (relationEl) {
            relationEl.style.width = newRelationDomW - _self.sideslipW + "px";
            relationEl.classList.add("sideslip-relation_active-" + _self.Id);
          }
        }
      }

      _self.show = true;

      _self.sendEvent("visible-change", _self.show);
    },

    // 侧滑隐藏
    hidden() {
      if (this.trigger.dom && this.trigger.class) {
        document.documentElement.querySelector(this.trigger.dom).classList.remove(this.trigger.class);
      }

      if (this.relationDom) {
        var el = document.documentElement.querySelector(".sideslip-relation_active-" + this.Id);

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
      var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
      var uuid = [],
          i;
      radix = radix || chars.length;

      if (len) {
        // Compact form
        for (i = 0; i < len; i++) {
          uuid[i] = chars[0 | Math.random() * radix];
        }
      } else {
        // rfc4122, version 4 form
        var r; // rfc4122 requires these characters

        uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
        uuid[14] = "4"; // Fill in random data. At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5

        for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
            r = 0 | Math.random() * 16;
            uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
          }
        }
      }

      return uuid.join("");
    }

  }
});
// CONCATENATED MODULE: ./src/wc-libs/yl-ui/sideslip/sideslip.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var sideslip_sideslipvue_type_script_lang_js_shadow = (sideslipvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/wc-libs/yl-ui/sideslip/sideslip.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("b1a0")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  sideslip_sideslipvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3a266113",
  null
  ,true
)

component.options.__file = "sideslip.vue"
/* harmony default export */ var sideslipshadow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6661":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".yl-sideslip-container[data-v-3a266113]{position:relative}.yl-slidslip_fix[data-v-3a266113]{position:fixed;top:50px;right:0;z-index:8}.yl-slidslip_abs[data-v-3a266113]{position:absolute;top:0;right:0;z-index:8;visibility:hidden}.yl-slidslip[data-v-3a266113]{width:320px;height:calc(100% - 50px);background:#fff;-webkit-box-shadow:0 2px 26px 6px rgba(0,0,0,.12),1px 0 0 0 #dcdfe6;box-shadow:0 2px 26px 6px rgba(0,0,0,.12),1px 0 0 0 #dcdfe6;-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-transition:-webkit-transform .12s linear;transition:-webkit-transform .12s linear;transition:transform .12s linear;transition:transform .12s linear,-webkit-transform .12s linear}.yl-slidslip-container[data-v-3a266113]{width:100%;height:100%}.sideslip_active[data-v-3a266113]{visibility:visible;-webkit-transform:translate(0);transform:translate(0)}[class*=sideslip-relation][data-v-3a266113],[class^=sideslip-relation][data-v-3a266113]{width:100%;-webkit-transition:width .12s linear;transition:width .12s linear}", ""]);

// exports


/***/ }),

/***/ "b1a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sideslip_vue_vue_type_style_index_0_id_3a266113_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b68a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sideslip_vue_vue_type_style_index_0_id_3a266113_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sideslip_vue_vue_type_style_index_0_id_3a266113_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sideslip_vue_vue_type_style_index_0_id_3a266113_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sideslip_vue_vue_type_style_index_0_id_3a266113_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sideslip_vue_vue_type_style_index_0_id_3a266113_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b68a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6661");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("62608d06", content, shadowRoot)
};

/***/ })

}]);
//# sourceMappingURL=yl.4.js.map
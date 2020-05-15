(window["yl_jsonp"] = window["yl_jsonp"] || []).push([[3],{

/***/ "342c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"22550d4c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/wc-libs/yl-ui/loading/loading.vue?vue&type=template&id=68ca00ca&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.visible)?_c('div',{staticClass:"yl-loading"},[(_vm.loading)?_c('div',{staticClass:"loading"},[_vm._t("loading",[_c('div',{staticClass:"custom"},[_c('svg',{staticClass:"circular",attrs:{"viewBox":"25 25 50 50"}},[_c('circle',{staticClass:"path",attrs:{"cx":"50","cy":"50","r":"20","fill":"none"}})]),_c('span',{staticClass:"loading-text",domProps:{"textContent":_vm._s(_vm.loadingText)}})])])],2):_vm._e(),(_vm.noMore)?_c('div',{staticClass:"no-more"},[_vm._t("nomore",[_c('div',{staticClass:"custom"},[_c('span',{staticClass:"no-more-text",domProps:{"textContent":_vm._s(_vm.noMoreText)}})])])],2):_vm._e(),(_vm.noData)?_c('div',{staticClass:"no-data"},[_vm._t("nodata",[_c('div',{staticClass:"custom"},[_c('span',{staticClass:"no-data-text",domProps:{"textContent":_vm._s(_vm.noDataText)}})])])],2):_vm._e()]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/wc-libs/yl-ui/loading/loading.vue?vue&type=template&id=68ca00ca&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/wc-libs/yl-ui/loading/loading.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var loadingvue_type_script_lang_js_shadow = ({
  name: "YlLoading",
  props: ["options"],

  data() {
    return {
      visible: true,
      // 是否显示
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
});
// CONCATENATED MODULE: ./src/wc-libs/yl-ui/loading/loading.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var loading_loadingvue_type_script_lang_js_shadow = (loadingvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/wc-libs/yl-ui/loading/loading.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("bdc4")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  loading_loadingvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "68ca00ca",
  null
  ,true
)

component.options.__file = "loading.vue"
/* harmony default export */ var loadingshadow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "bdc4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_68ca00ca_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dc07");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_68ca00ca_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_68ca00ca_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_68ca00ca_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_68ca00ca_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_68ca00ca_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dc07":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fd0c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("3ea558e5", content, shadowRoot)
};

/***/ }),

/***/ "fd0c":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes loading-rotate-data-v-68ca00ca{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loading-rotate-data-v-68ca00ca{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.yl-loading[data-v-68ca00ca]{position:relative;width:100%}.yl-loading .custom[data-v-68ca00ca]{width:100%;height:48px;line-height:48px;text-align:center}.yl-loading .loading .circular[data-v-68ca00ca]{width:16px!important;height:16px!important;-webkit-animation:loading-rotate-data-v-68ca00ca 2s linear infinite;animation:loading-rotate-data-v-68ca00ca 2s linear infinite;vertical-align:middle}.yl-loading .loading .circular .path[data-v-68ca00ca]{-webkit-animation:loading-dash 1.5s ease-in-out infinite;animation:loading-dash 1.5s ease-in-out infinite;stroke-dasharray:90,150;stroke-dashoffset:0;stroke-width:2;stroke:#409eff;stroke-linecap:round}.yl-loading .loading .loading-text[data-v-68ca00ca]{margin-left:9px;font-size:14px;color:#409eff;vertical-align:middle}.yl-loading .no-data .no-data-text[data-v-68ca00ca],.yl-loading .no-more .no-more-text[data-v-68ca00ca]{font-size:14px;font-weight:400;color:#606266}", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=yl.3.js.map
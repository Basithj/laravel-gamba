"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_vue_views_RegularTables_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/RegularTables.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/RegularTables.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tables_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tables/projects */ "./resources/js/vue/views/Tables/projects.js");
/* harmony import */ var _Tables_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tables/users */ "./resources/js/vue/views/Tables/users.js");
/* harmony import */ var _Tables_RegularTables_LightTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tables/RegularTables/LightTable */ "./resources/js/vue/views/Tables/RegularTables/LightTable.vue");
/* harmony import */ var _Tables_RegularTables_DarkTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tables/RegularTables/DarkTable */ "./resources/js/vue/views/Tables/RegularTables/DarkTable.vue");
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: (_components = {
    LightTable: _Tables_RegularTables_LightTable__WEBPACK_IMPORTED_MODULE_3__["default"],
    DarkTable: _Tables_RegularTables_DarkTable__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown.name, element_ui__WEBPACK_IMPORTED_MODULE_0__.Dropdown), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem.name, element_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownItem), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu.name, element_ui__WEBPACK_IMPORTED_MODULE_0__.DropdownMenu), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__.Table.name, element_ui__WEBPACK_IMPORTED_MODULE_0__.Table), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_0__.TableColumn.name, element_ui__WEBPACK_IMPORTED_MODULE_0__.TableColumn), _components),
  data: function data() {
    return {
      projects: _Tables_projects__WEBPACK_IMPORTED_MODULE_1__["default"],
      users: _Tables_users__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../projects */ "./resources/js/vue/views/Tables/projects.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_1__);
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'light-table',
  components: (_components = {}, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__.Table.name, element_ui__WEBPACK_IMPORTED_MODULE_1__.Table), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__.TableColumn.name, element_ui__WEBPACK_IMPORTED_MODULE_1__.TableColumn), _components),
  data: function data() {
    return {
      projects: _projects__WEBPACK_IMPORTED_MODULE_0__["default"],
      currentPage: 1
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../projects */ "./resources/js/vue/views/Tables/projects.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! element-ui */ "./node_modules/element-ui/lib/element-ui.common.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_1__);
var _components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'light-table',
  components: (_components = {}, _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__.Table.name, element_ui__WEBPACK_IMPORTED_MODULE_1__.Table), _defineProperty(_components, element_ui__WEBPACK_IMPORTED_MODULE_1__.TableColumn.name, element_ui__WEBPACK_IMPORTED_MODULE_1__.TableColumn), _components),
  data: function data() {
    return {
      projects: _projects__WEBPACK_IMPORTED_MODULE_0__["default"],
      currentPage: 1
    };
  }
});

/***/ }),

/***/ "./resources/js/vue/views/Tables/projects.js":
/*!***************************************************!*\
  !*** ./resources/js/vue/views/Tables/projects.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  img: 'img/theme/bootstrap.jpg',
  title: 'Argon Design System',
  budget: '$2500 USD',
  status: 'pending',
  statusType: 'warning',
  completion: 60
}, {
  img: 'img/theme/angular.jpg',
  title: 'Angular Now UI Kit PRO',
  budget: '$1800 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}, {
  img: 'img/theme/sketch.jpg',
  title: 'Black Dashboard',
  budget: '$3150 USD',
  status: 'delayed',
  statusType: 'danger',
  completion: 72
}, {
  img: 'img/theme/react.jpg',
  title: 'React Material Dashboard',
  budget: '$4400 USD',
  status: 'on schedule',
  statusType: 'info',
  completion: 90
}, {
  img: 'img/theme/vue.jpg',
  title: 'Vue Paper UI Kit PRO',
  budget: '$2200 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}, {
  img: 'img/theme/bootstrap.jpg',
  title: 'Argon Design System',
  budget: '$2500 USD',
  status: 'pending',
  statusType: 'warning',
  completion: 60
}, {
  img: 'img/theme/angular.jpg',
  title: 'Angular Now UI Kit PRO',
  budget: '$1800 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}, {
  img: 'img/theme/sketch.jpg',
  title: 'Black Dashboard',
  budget: '$3150 USD',
  status: 'delayed',
  statusType: 'danger',
  completion: 72
}, {
  img: 'img/theme/vue.jpg',
  title: 'Vue Paper UI Kit PRO',
  budget: '$2200 USD',
  status: 'completed',
  statusType: 'success',
  completion: 100
}]);

/***/ }),

/***/ "./resources/js/vue/views/Tables/users.js":
/*!************************************************!*\
  !*** ./resources/js/vue/views/Tables/users.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  id: 1,
  name: 'John Michael',
  image: 'img/theme/team-1.jpg',
  createdAt: '10/09/2018',
  product: 'Argon Dashboard PRO',
  active: true
}, {
  id: 2,
  name: 'Alexandra Smith',
  image: 'img/theme/team-2.jpg',
  createdAt: '08/09/2018',
  product: 'Argon Design System',
  active: false
}, {
  id: 3,
  name: 'Samantha Ivy',
  image: 'img/theme/team-3.jpg',
  createdAt: '30/08/2018',
  product: 'Black Dashboard',
  active: false
}, {
  id: 4,
  name: 'John Michael',
  image: 'img/theme/team-1.jpg',
  createdAt: '10/09/2018',
  product: 'Argon Dashboard PRO',
  active: true
}, {
  id: 5,
  name: 'Alexandra Smith',
  image: 'img/theme/team-2.jpg',
  createdAt: '30/09/2018',
  product: 'Vue Argon Dashboard',
  active: true
}]);

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/RegularTables.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/RegularTables.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.el-table.table-dark{\n  background-color: #172b4d;\n  color: #f8f9fe;\n}\n.el-table.table-dark th,\n.el-table.table-dark tr{\n  background-color: #172b4d;\n}\n.el-table.table-dark td,\n.el-table.table-dark th.is-leaf{\n  border-bottom: none;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/RegularTables.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/RegularTables.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegularTables.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/RegularTables.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/vue/views/RegularTables.vue":
/*!**************************************************!*\
  !*** ./resources/js/vue/views/RegularTables.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegularTables_vue_vue_type_template_id_a16b00ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegularTables.vue?vue&type=template&id=a16b00ee& */ "./resources/js/vue/views/RegularTables.vue?vue&type=template&id=a16b00ee&");
/* harmony import */ var _RegularTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegularTables.vue?vue&type=script&lang=js& */ "./resources/js/vue/views/RegularTables.vue?vue&type=script&lang=js&");
/* harmony import */ var _RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegularTables.vue?vue&type=style&index=0&lang=css& */ "./resources/js/vue/views/RegularTables.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegularTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegularTables_vue_vue_type_template_id_a16b00ee___WEBPACK_IMPORTED_MODULE_0__.render,
  _RegularTables_vue_vue_type_template_id_a16b00ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/views/RegularTables.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/vue/views/Tables/RegularTables/DarkTable.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/vue/views/Tables/RegularTables/DarkTable.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DarkTable_vue_vue_type_template_id_70fb08e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DarkTable.vue?vue&type=template&id=70fb08e8& */ "./resources/js/vue/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=70fb08e8&");
/* harmony import */ var _DarkTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DarkTable.vue?vue&type=script&lang=js& */ "./resources/js/vue/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DarkTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DarkTable_vue_vue_type_template_id_70fb08e8___WEBPACK_IMPORTED_MODULE_0__.render,
  _DarkTable_vue_vue_type_template_id_70fb08e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/views/Tables/RegularTables/DarkTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/vue/views/Tables/RegularTables/LightTable.vue":
/*!********************************************************************!*\
  !*** ./resources/js/vue/views/Tables/RegularTables/LightTable.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LightTable_vue_vue_type_template_id_946cacd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightTable.vue?vue&type=template&id=946cacd0& */ "./resources/js/vue/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=946cacd0&");
/* harmony import */ var _LightTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LightTable.vue?vue&type=script&lang=js& */ "./resources/js/vue/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LightTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LightTable_vue_vue_type_template_id_946cacd0___WEBPACK_IMPORTED_MODULE_0__.render,
  _LightTable_vue_vue_type_template_id_946cacd0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue/views/Tables/RegularTables/LightTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/vue/views/RegularTables.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/vue/views/RegularTables.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegularTables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/RegularTables.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/vue/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DarkTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/Tables/RegularTables/DarkTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/vue/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LightTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/Tables/RegularTables/LightTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/vue/views/RegularTables.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/vue/views/RegularTables.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegularTables.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/RegularTables.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/vue/views/RegularTables.vue?vue&type=template&id=a16b00ee&":
/*!*********************************************************************************!*\
  !*** ./resources/js/vue/views/RegularTables.vue?vue&type=template&id=a16b00ee& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_template_id_a16b00ee___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_template_id_a16b00ee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegularTables_vue_vue_type_template_id_a16b00ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegularTables.vue?vue&type=template&id=a16b00ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/RegularTables.vue?vue&type=template&id=a16b00ee&");


/***/ }),

/***/ "./resources/js/vue/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=70fb08e8&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/vue/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=70fb08e8& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkTable_vue_vue_type_template_id_70fb08e8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkTable_vue_vue_type_template_id_70fb08e8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkTable_vue_vue_type_template_id_70fb08e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DarkTable.vue?vue&type=template&id=70fb08e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=70fb08e8&");


/***/ }),

/***/ "./resources/js/vue/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=946cacd0&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/vue/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=946cacd0& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LightTable_vue_vue_type_template_id_946cacd0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LightTable_vue_vue_type_template_id_946cacd0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LightTable_vue_vue_type_template_id_946cacd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LightTable.vue?vue&type=template&id=946cacd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=946cacd0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/RegularTables.vue?vue&type=template&id=a16b00ee&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/RegularTables.vue?vue&type=template&id=a16b00ee& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        { staticClass: "pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Total traffic",
                        type: "gradient-red",
                        "sub-title": "350,897",
                        icon: "ni ni-active-40",
                      },
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("3.48%"),
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month"),
                        ]),
                      ]),
                    ],
                    2
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Total traffic",
                        type: "gradient-orange",
                        "sub-title": "2,356",
                        icon: "ni ni-chart-pie-35",
                      },
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("12.18%"),
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month"),
                        ]),
                      ]),
                    ],
                    2
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Sales",
                        type: "gradient-green",
                        "sub-title": "924",
                        icon: "ni ni-money-coins",
                      },
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-danger mr-2" }, [
                          _vm._v("5.72%"),
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month"),
                        ]),
                      ]),
                    ],
                    2
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "3", md: "6" } },
                [
                  _c(
                    "stats-card",
                    {
                      staticClass: "mb-4",
                      attrs: {
                        title: "Performance",
                        type: "gradient-info",
                        "sub-title": "49,65%",
                        icon: "ni ni-chart-bar-32",
                      },
                    },
                    [
                      _c("template", { slot: "footer" }, [
                        _c("span", { staticClass: "text-success mr-2" }, [
                          _vm._v("54.8%"),
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Since last month"),
                        ]),
                      ]),
                    ],
                    2
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt--7", attrs: { fluid: "" } },
        [
          _c("b-row", [_c("b-col", [_c("light-table")], 1)], 1),
          _vm._v(" "),
          _c("div", { staticClass: "mt-5" }),
          _vm._v(" "),
          _c("dark-table"),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=70fb08e8&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/Tables/RegularTables/DarkTable.vue?vue&type=template&id=70fb08e8& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { staticClass: "bg-default shadow", attrs: { "no-body": "" } },
    [
      _c("b-card-header", { staticClass: "bg-transparent border-0" }, [
        _c("h3", { staticClass: "mb-0 text-white" }, [_vm._v("Dark table")]),
      ]),
      _vm._v(" "),
      _c(
        "el-table",
        {
          staticClass: "table-responsive table table-dark",
          attrs: { "header-row-class-name": "thead-dark", data: _vm.projects },
        },
        [
          _c("el-table-column", {
            attrs: { label: "Project", "min-width": "310px", prop: "name" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (ref) {
                  var row = ref.row
                  return [
                    _c(
                      "b-media",
                      {
                        staticClass: "align-items-center",
                        attrs: { "no-body": "" },
                      },
                      [
                        _c(
                          "a",
                          { staticClass: "mr-3", attrs: { href: "#" } },
                          [
                            _c("b-img", {
                              staticClass: "avatar",
                              attrs: {
                                rounded: "circle",
                                alt: "Image placeholder",
                                src: row.img,
                              },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("b-media-body", [
                          _c(
                            "span",
                            {
                              staticClass: "font-weight-600 name mb-0 text-sm",
                            },
                            [_vm._v(_vm._s(row.title))]
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Budget", prop: "budget", "min-width": "140px" },
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Status", "min-width": "170px", prop: "status" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (ref) {
                  var row = ref.row
                  return [
                    _c("badge", { staticClass: "badge-dot mr-4" }, [
                      _c("i", { class: "bg-" + row.statusType }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "status",
                          class: "text-" + row.statusType,
                        },
                        [_vm._v(_vm._s(row.status))]
                      ),
                    ]),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c(
            "el-table-column",
            { attrs: { label: "Users", "min-width": "190px" } },
            [
              _c("div", { staticClass: "avatar-group" }, [
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Ryan Tompson",
                    },
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-1.jpg",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Romina Hadid",
                    },
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-2.jpg",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Alexander Smith",
                    },
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-3.jpg",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Jessica Doe",
                    },
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-4.jpg",
                      },
                    }),
                  ]
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: "Completion",
              prop: "completion",
              "min-width": "240px",
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (ref) {
                  var row = ref.row
                  return [
                    _c("div", { staticClass: "d-flex align-items-center" }, [
                      _c("span", { staticClass: "completion mr-2" }, [
                        _vm._v(_vm._s(row.completion) + "%"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("base-progress", {
                            attrs: {
                              type: row.statusType,
                              value: row.completion,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]
                },
              },
            ]),
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=946cacd0&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue/views/Tables/RegularTables/LightTable.vue?vue&type=template&id=946cacd0& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c("b-card-header", { staticClass: "border-0" }, [
        _c("h3", { staticClass: "mb-0" }, [_vm._v("Light table")]),
      ]),
      _vm._v(" "),
      _c(
        "el-table",
        {
          staticClass: "table-responsive table",
          attrs: { "header-row-class-name": "thead-light", data: _vm.projects },
        },
        [
          _c("el-table-column", {
            attrs: { label: "Project", "min-width": "310px", prop: "name" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (ref) {
                  var row = ref.row
                  return [
                    _c(
                      "b-media",
                      {
                        staticClass: "align-items-center",
                        attrs: { "no-body": "" },
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "avatar rounded-circle mr-3",
                            attrs: { href: "#" },
                          },
                          [
                            _c("img", {
                              attrs: { alt: "Image placeholder", src: row.img },
                            }),
                          ]
                        ),
                        _vm._v(" "),
                        _c("b-media-body", [
                          _c(
                            "span",
                            {
                              staticClass: "font-weight-600 name mb-0 text-sm",
                            },
                            [_vm._v(_vm._s(row.title))]
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Budget", prop: "budget", "min-width": "140px" },
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Status", "min-width": "170px", prop: "status" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (ref) {
                  var row = ref.row
                  return [
                    _c(
                      "badge",
                      { staticClass: "badge-dot mr-4", attrs: { type: "" } },
                      [
                        _c("i", { class: "bg-" + row.statusType }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "status",
                            class: "text-" + row.statusType,
                          },
                          [_vm._v(_vm._s(row.status))]
                        ),
                      ]
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c(
            "el-table-column",
            { attrs: { label: "Users", "min-width": "190px" } },
            [
              _c("div", { staticClass: "avatar-group" }, [
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Ryan Tompson",
                    },
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-1.jpg",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Romina Hadid",
                    },
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-2.jpg",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Alexander Smith",
                    },
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-3.jpg",
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "avatar avatar-sm rounded-circle",
                    attrs: {
                      href: "#",
                      "data-toggle": "tooltip",
                      "data-original-title": "Jessica Doe",
                    },
                  },
                  [
                    _c("img", {
                      attrs: {
                        alt: "Image placeholder",
                        src: "img/theme/team-4.jpg",
                      },
                    }),
                  ]
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: {
              label: "Completion",
              prop: "completion",
              "min-width": "240px",
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (ref) {
                  var row = ref.row
                  return [
                    _c("div", { staticClass: "d-flex align-items-center" }, [
                      _c("span", { staticClass: "completion mr-2" }, [
                        _vm._v(_vm._s(row.completion) + "%"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("base-progress", {
                            attrs: {
                              type: row.statusType,
                              value: row.completion,
                            },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]
                },
              },
            ]),
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card-footer",
        { staticClass: "py-4 d-flex justify-content-end" },
        [
          _c("base-pagination", {
            attrs: { "per-page": 10, total: 50 },
            model: {
              value: _vm.currentPage,
              callback: function ($$v) {
                _vm.currentPage = $$v
              },
              expression: "currentPage",
            },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
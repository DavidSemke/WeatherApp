/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/backgrounds/day.jpg */ \"./src/images/backgrounds/day.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/searchIcon.png */ \"./src/images/icons/searchIcon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body,\r\nhtml {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    color: white;\r\n    margin: 0;\r\n}\r\n\r\nbutton {\r\n    background: none;\r\n    color: white;\r\n    border: 2px solid white;\r\n    cursor: pointer;\r\n}\r\n\r\ndd {\r\n    margin-bottom: 10px;\r\n}\r\n\r\ndt {\r\n  margin-right: 10px;\r\n}\r\n\r\ndt::after {\r\n  content: \":\";\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding-left: 0;\r\n}\r\n\r\n.bottomAlign {\r\n    display: flex;\r\n    align-items: flex-end;\r\n}\r\n\r\n.error {\r\n    color: red;\r\n}\r\n\r\n.iconSmall {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.iconMedium {\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n\r\n.iconLarge {\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n\r\n.largeText {\r\n    font-size: 2em;\r\n}\r\n\r\n.largerText {\r\n    font-size: 3em;\r\n}\r\n\r\n.maxMinDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\n.mediumText {\r\n    font-size: 1.4em;\r\n}\r\n\r\n#bottomView {\r\n    flex: 1\r\n}\r\n\r\n#bottomView li {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#bottomView li:first-child {\r\n    border: 2px solid white;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n#bottomView > ul {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n#locationSearch {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n    height: 80%;\r\n}\r\n\r\n#locationSearch input {\r\n    border: none;\r\n    border-bottom: 2px solid white;\r\n}\r\n\r\n#locationSearch input[type=submit] {\r\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    cursor: pointer;\r\n    height: 30px;\r\n    width: 30px;\r\n    \r\n}\r\n\r\n#locationSearch input[type=text] {\r\n    background: none;\r\n    color: white;\r\n}\r\n\r\n#summary {\r\n    margin-top: 20px;\r\n}\r\n\r\n#summary > div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n#tempScaleButton {\r\n    margin-top: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n#topView {\r\n    flex: 1;\r\n    display: flex;\r\n    padding: 20px;\r\n}\r\n\r\n#topView > div {\r\n    flex: 1;\r\n}\r\n\r\n#weatherStats {\r\n    display: flex;\r\n    justify-content: right;\r\n}\r\n\r\n#weatherStats > dl > div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    margin-top: 20px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherapp/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weatherapp/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images sync recursive \\.(png%7Cjpg)$":
/*!*****************************************!*\
  !*** ./src/images/ sync \.(png%7Cjpg)$ ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./backgrounds/day.jpg\": \"./src/images/backgrounds/day.jpg\",\n\t\"./backgrounds/night.jpg\": \"./src/images/backgrounds/night.jpg\",\n\t\"./icons/cloudIcon.png\": \"./src/images/icons/cloudIcon.png\",\n\t\"./icons/searchIcon.png\": \"./src/images/icons/searchIcon.png\",\n\t\"./icons/thermometerIcon.png\": \"./src/images/icons/thermometerIcon.png\",\n\t\"./icons/waterIcon.png\": \"./src/images/icons/waterIcon.png\",\n\t\"./icons/windIcon.png\": \"./src/images/icons/windIcon.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/images sync recursive \\\\.(png%7Cjpg)$\";\n\n//# sourceURL=webpack://weatherapp/./src/images/_sync_\\.(png%257Cjpg)$?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherData */ \"./src/js/weatherData.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./src/js/view.js\");\n\r\n\r\n\r\n\r\n\r\nconst controller = (() => {\r\n    let apiData = null\r\n    const tempScaleButton = document.querySelector('#tempScaleButton')\r\n    const searchForm = document.querySelector('#locationSearch form')\r\n    const errorMsg = document.querySelector('#locationSearch .error')\r\n    const locationError = 'Location must be a city.'\r\n\r\n\r\n    async function displayWeather(city='Vancouver') {\r\n        apiData = await handleFetch(city)\r\n    \r\n        if (!apiData) {\r\n            return\r\n        }\r\n\r\n        errorMsg.textContent = ''\r\n        _view__WEBPACK_IMPORTED_MODULE_2__.view.createView(apiData)\r\n    }\r\n    \r\n    \r\n    async function handleFetch(city) {\r\n        try {\r\n            var data = await _weatherData__WEBPACK_IMPORTED_MODULE_1__.weatherData.fetchWeatherData(city)\r\n        }\r\n        catch (error) {\r\n            document.body.innerHTML = error.toString()\r\n            return null\r\n        }\r\n        \r\n        if (data.error) {\r\n            errorMsg.textContent = locationError\r\n            return null\r\n        }\r\n    \r\n        return data\r\n    }\r\n\r\n\r\n    tempScaleButton.onclick = function () {\r\n        _view__WEBPACK_IMPORTED_MODULE_2__.view.changeTempScale(apiData)\r\n    }\r\n\r\n\r\n    searchForm.addEventListener(\"submit\", async function (event) {\r\n        event.preventDefault()\r\n        const textInput = document.querySelector(\"#searchBar\").value\r\n        const text = textInput.trim()\r\n    \r\n        if (!text) {\r\n            return\r\n        }\r\n        \r\n        displayWeather(text)\r\n        \r\n    })\r\n\r\n\r\n    return { displayWeather }\r\n\r\n})()\r\n\r\n\r\ncontroller.displayWeather()\n\n//# sourceURL=webpack://weatherapp/./src/js/index.js?");

/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   view: () => (/* binding */ view)\n/* harmony export */ });\nconst view = (() => {\r\n    const weekdays = [\r\n        \"Sunday\",\r\n        \"Monday\",\r\n        \"Tuesday\",\r\n        \"Wednesday\",\r\n        \"Thursday\",\r\n        \"Friday\",\r\n        \"Saturday\"\r\n    ]\r\n    // c for celsius, f for fahrenheit\r\n    const tempScales = ['c', 'f']\r\n    let tempScaleIndex = 0\r\n\r\n    function importAll(rContext) {\r\n        let images = {}\r\n        rContext.keys().forEach((item) => { \r\n            images[item.replace('./', '')] = rContext(item); \r\n        })\r\n        return images\r\n    }\r\n\r\n    const images = importAll(\r\n        __webpack_require__(\"./src/images sync recursive \\\\.(png%7Cjpg)$\")\r\n    )\r\n\r\n\r\n    function changeTempScale(weatherData) {\r\n        const button = document.querySelector('#tempScaleButton')\r\n        button.textContent = 'Display \\u00B0'\r\n            + `${tempScales[tempScaleIndex].toUpperCase()}`\r\n\r\n        tempScaleIndex = tempScaleIndex ? 0 : 1\r\n        createView(weatherData)\r\n    }\r\n\r\n    \r\n    function createView(weatherData) {\r\n        setBackground(weatherData)\r\n        topView(weatherData)\r\n        bottomView(weatherData.forecast)\r\n    }\r\n\r\n\r\n    function setBackground(weatherData) {\r\n\r\n        if (weatherData.current.is_day) {\r\n            return\r\n        }\r\n\r\n        document.body.style\r\n            .backgroundImage = `url(${images[\"backgrounds/night.jpg\"]})`\r\n        \r\n    }\r\n\r\n\r\n    function topView(weatherData) {\r\n        const city = weatherData.location.name\r\n        const country = weatherData.location.country\r\n        const location = `${city}, ${country}`\r\n\r\n        const localTime = weatherData.location.localtime\r\n        const timeSplit = localTime.split(' ')\r\n        const date = new Date(`${timeSplit[0]}T${timeSplit[1]}`)\r\n        const weekDay = weekdays[date.getDay()]\r\n\r\n        const condition = weatherData.current.condition.text\r\n\r\n        const tempScale = tempScales[tempScaleIndex]\r\n        const temp = weatherData.current[`temp_${tempScale}`]\r\n        const tempText = `${temp} \\u00B0${tempScale.toUpperCase()}`\r\n        const icon = weatherData.current.condition.icon\r\n        \r\n        weatherSummary(\r\n            location, weekDay, localTime, condition, tempText, icon\r\n        )\r\n\r\n        const feelsTemp = weatherData.current[`feelslike_${tempScale}`]\r\n        const feelsText = `${feelsTemp} \\u00B0${tempScale.toUpperCase()}`\r\n\r\n        const rainChance = weatherData.forecast.forecastday[0].day\r\n            .daily_chance_of_rain\r\n        const rainText = `${rainChance} %`\r\n\r\n        const humidity = weatherData.current.humidity\r\n        const humidityText = `${humidity} %`\r\n        \r\n        const wind = weatherData.current.wind_kph\r\n        const windText = `${wind} kph`\r\n\r\n        weatherStats(feelsText, rainText, humidityText, windText)\r\n    }\r\n\r\n\r\n    function weatherSummary(\r\n        location, weekDay, time, condition, temp, icon\r\n    ) {\r\n        const header = document.querySelector('#location')\r\n        header.textContent = location\r\n\r\n        const dateItem = document.querySelector('#date')\r\n        dateItem.textContent = weekDay\r\n\r\n        const timeItem = document.querySelector('#time')\r\n        timeItem.textContent = time\r\n\r\n        const img = document.querySelector('#summary .iconLarge')\r\n        img.src = icon\r\n\r\n        const conditionItem = document.querySelector('#condition')\r\n        conditionItem.textContent = condition\r\n\r\n        const tempItem = document.querySelector('#temp')\r\n        tempItem.textContent = temp\r\n\r\n        const button = document.querySelector('#tempScaleButton')\r\n        const newScaleIndex = tempScaleIndex ? 0 : 1\r\n        const tempScale = tempScales[newScaleIndex]\r\n\r\n        button.textContent = `Display \\u00B0${tempScale.toUpperCase()}`\r\n    }\r\n\r\n\r\n    function weatherStats(feelsLikeTemp, rainChance, humidity, wind) {\r\n        const tempItem = document.querySelector('#feelsLikeTemp')\r\n        tempItem.textContent = feelsLikeTemp\r\n\r\n        const rainItem = document.querySelector('#rainChance')\r\n        rainItem.textContent = rainChance\r\n\r\n        const humidityItem = document.querySelector('#humidity')\r\n        humidityItem.textContent = humidity\r\n\r\n        const windItem = document.querySelector('#wind')\r\n        windItem.textContent = wind\r\n\r\n        const statImages = document.querySelectorAll('#weatherStats img')\r\n        const icons = [\r\n            images[\"icons/thermometerIcon.png\"],\r\n            images[\"icons/cloudIcon.png\"],\r\n            images[\"icons/waterIcon.png\"],\r\n            images[\"icons/windIcon.png\"],\r\n        ]\r\n\r\n        for (let i=0; i<statImages.length; i++) {\r\n            const img = statImages[i]\r\n            img.src = icons[i]\r\n        }        \r\n    }\r\n\r\n\r\n    function bottomView(forecastData) {\r\n        const bottomView = document.querySelector('#bottomView')\r\n        bottomView.innerHTML = ''\r\n        const ul = document.createElement('ul')\r\n\r\n        for (let i=0; i<7; i++) {\r\n            const forecastDay = forecastData.forecastday[i]\r\n            \r\n            const date = new Date(`${forecastDay.date}`)\r\n            const day = weekdays[date.getUTCDay()]\r\n\r\n            const minTemp = forecastDay.day[\r\n                `mintemp_${tempScales[tempScaleIndex]}`\r\n            ]\r\n            const maxTemp = forecastDay.day[\r\n                `maxtemp_${tempScales[tempScaleIndex]}`\r\n            ]\r\n\r\n            const icon = forecastDay.day.condition.icon\r\n\r\n            const itemView = forecastDayView(day, minTemp, maxTemp, icon)\r\n\r\n            ul.appendChild(itemView)\r\n        }\r\n\r\n        bottomView.appendChild(ul)\r\n    }\r\n\r\n\r\n    function forecastDayView(weekDay, minTemp, maxTemp, icon) {\r\n        const li = document.createElement('li')\r\n\r\n        const header = document.createElement('h2')\r\n        header.textContent = weekDay\r\n\r\n        const img = document.createElement('img')\r\n        img.classList.add('iconMedium')\r\n        img.src = icon\r\n\r\n        const minMaxTempDiv = document.createElement('div')\r\n        minMaxTempDiv.classList.add('maxMinDiv')\r\n        \r\n        const minTempDiv = document.createElement('div')\r\n        minTempDiv.textContent = `${minTemp} \\u00B0`\r\n            + `${tempScales[tempScaleIndex].toUpperCase()}`\r\n\r\n        const maxTempDiv = document.createElement('div')\r\n        maxTempDiv.classList.add('mediumText')\r\n        maxTempDiv.textContent = `${maxTemp} \\u00B0`\r\n        + `${tempScales[tempScaleIndex].toUpperCase()}`\r\n\r\n        for (const el of [maxTempDiv, minTempDiv]) {\r\n            minMaxTempDiv.appendChild(el)\r\n        }\r\n\r\n        for (const el of [header, img, minMaxTempDiv]) {\r\n            li.appendChild(el)\r\n        }\r\n\r\n        return li\r\n    }\r\n\r\n\r\n    return { changeTempScale, createView }\r\n\r\n})()\r\n\r\n\r\n\n\n//# sourceURL=webpack://weatherapp/./src/js/view.js?");

/***/ }),

/***/ "./src/js/weatherData.js":
/*!*******************************!*\
  !*** ./src/js/weatherData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   weatherData: () => (/* binding */ weatherData)\n/* harmony export */ });\nconst weatherData = (() => {\r\n    const baseURL = 'https://api.weatherapi.com/v1'\r\n    const apiKey = '66c6fe9e07f9453e94415209232309'\r\n    \r\n    \r\n    async function fetchWeatherData(city) {\r\n        const response = await fetch(\r\n            `${baseURL}/forecast.json?key=${apiKey}&days=7&q=${city}`,\r\n            { mode: 'cors' }\r\n        )\r\n    \r\n        return await response.json()\r\n    }\r\n\r\n    \r\n    return {fetchWeatherData}\r\n\r\n})()\r\n\r\n\r\n\n\n//# sourceURL=webpack://weatherapp/./src/js/weatherData.js?");

/***/ }),

/***/ "./src/images/backgrounds/day.jpg":
/*!****************************************!*\
  !*** ./src/images/backgrounds/day.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cc5e469d044ebb5ed4df.jpg\";\n\n//# sourceURL=webpack://weatherapp/./src/images/backgrounds/day.jpg?");

/***/ }),

/***/ "./src/images/backgrounds/night.jpg":
/*!******************************************!*\
  !*** ./src/images/backgrounds/night.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/5dc7b586d3a40f9b9acb.jpg\";\n\n//# sourceURL=webpack://weatherapp/./src/images/backgrounds/night.jpg?");

/***/ }),

/***/ "./src/images/icons/cloudIcon.png":
/*!****************************************!*\
  !*** ./src/images/icons/cloudIcon.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/937474df1ca34b9eed8b.png\";\n\n//# sourceURL=webpack://weatherapp/./src/images/icons/cloudIcon.png?");

/***/ }),

/***/ "./src/images/icons/searchIcon.png":
/*!*****************************************!*\
  !*** ./src/images/icons/searchIcon.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/7beef7e92be4d37bf9eb.png\";\n\n//# sourceURL=webpack://weatherapp/./src/images/icons/searchIcon.png?");

/***/ }),

/***/ "./src/images/icons/thermometerIcon.png":
/*!**********************************************!*\
  !*** ./src/images/icons/thermometerIcon.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cc6cf7d7d819749a4ad7.png\";\n\n//# sourceURL=webpack://weatherapp/./src/images/icons/thermometerIcon.png?");

/***/ }),

/***/ "./src/images/icons/waterIcon.png":
/*!****************************************!*\
  !*** ./src/images/icons/waterIcon.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/6e9b53dc0fec36c1e8ea.png\";\n\n//# sourceURL=webpack://weatherapp/./src/images/icons/waterIcon.png?");

/***/ }),

/***/ "./src/images/icons/windIcon.png":
/*!***************************************!*\
  !*** ./src/images/icons/windIcon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/14c16fd2018eda84d321.png\";\n\n//# sourceURL=webpack://weatherapp/./src/images/icons/windIcon.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
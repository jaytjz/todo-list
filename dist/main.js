/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root{\n    --sidebar-color: #212121;\n    --text-color: #e4e6eb;\n    --main-color: #18191A;\n    --img-height: 30px;\n    --green: #33b249;\n    --red: #D11A2A;\n}\n\nbody{\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    background-color: var(--main-color);\n    color: #e4e6eb;\n    font-family: \"Roboto\";\n    margin: 0;\n    height: 100vh;\n}\n\nbutton {\n    border: none;\n    padding: 10px 10px;\n    color: var(--text-color);\n    text-align: left;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 20px;\n    margin: 2px;\n    cursor: pointer;\n    border-radius: 10px;\n    transition: background-color 0.3s;\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n\n.content button img {\n    display: block;\n    width: 100%;\n}\n\n.sidebar button{\n    background-color: var(--sidebar-color);\n}\n\nbutton:hover {\n    background-color: #3a3b3c;\n}\n\nbutton:active {\n    background-color: #808080;\n}\n\nimg{\n    height: var(--img-height);\n    filter: invert(1);\n}\n\n.sidebar{\n    background-color: var(--sidebar-color);\n    padding-left: 5px;\n}\n\n.add:hover{\n    background-color: var(--green);\n}\n\n.project-title, \n.project-list{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project-title .add, .del{\n    visibility: hidden;\n}\n\n.project-title:hover .add{\n    visibility: visible;\n}\n\n.del:hover, .todo-delete:hover {\n    background-color: var(--red);\n}\n\n.project-list:hover .del {\n    visibility: visible;\n}\n\n.project {\n    flex-grow: 1;\n}\n\n.content{\n    margin: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.todo-header{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.content button {\n    background-color: var(--main-color);\n}\n\n.todo-header .addTodo:hover {\n    background-color: var(--green);\n}\n\n.todo-list, .todo-container, .todo-description, .todo-dueDate{\n    grid-column: 2 / 3;\n}\n\n.todo-container{\n    display: grid;\n    grid-template-columns: calc(var(--img-height) + 20px) minmax(200px,15fr) minmax(50px, 1fr);\n    grid-template-rows: 30px;\n    grid-auto-rows: auto;\n    align-items: center;\n    margin: 20px;\n    width: 50vw;\n}\n\n.todo-title{\n    font-size: 35px;\n}\n\n.todo-description {\n    font-style: italic;\n}\n\n.todo-dueDate {\n    display: flex;\n    align-items: center;\n}\n\n.todo-priority {\n    text-align: center;\n}\n\n.hr {\n    grid-column: 1/4;\n}\n\n.editBtn:hover, .tickBtn:hover,.garbageBtn:hover {\n    background-color: #3a3b3c;\n}\n\n#todoModal, #projectModal, #editModal {\n    background-color: var(--sidebar-color);\n    color: var(--text-color);\n    border: none;\n    border-radius: 10px;\n    padding: 30px 50px;\n    width: 30vw;\n    height: 50vh;\n}\n\n#projectModal {\n    height: 25vh;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n#description{\n    height: 10vh;\n}\n\ninput, select {\n    font-size: 16px;\n    padding: 8px;\n    flex-grow: 1;\n}\n\nbutton[type=\"submit\"]{\n    margin: 5px;\n    background-color: #007BFF;\n}\n\n.garbageBtn:hover {\n    background-color: var(--red);\n}\n\n.strikethrough {\n    text-decoration: line-through;\n}\n\n.dueDateInput {\n    width: 200px;\n    background-color: var(--text-color);\n    flex-grow: 0;\n    border: none;\n    border-radius: 5px;\n    height: var(--img-height);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/add.svg */ \"./src/img/add.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>ToDo List</title>\\n</head>\\n<body>\\n    <div class=\\\"sidebar\\\">\\n        <div class=\\\"project-title\\\">\\n            <h1>Projects</h1>\\n            <button class=\\\"add\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"></button>\\n        </div>\\n        <nav>\\n            <div class=\\\"project-list\\\" data-id=\\\"1\\\">\\n                <button class=\\\"project\\\"> # &nbsp; All ToDos</button>\\n            </div>\\n        </nav>\\n    </div>\\n    <div class=\\\"content\\\">\\n        <div class=\\\"todo-header\\\">\\n            <h1>All ToDos</h1>\\n            <button class=\\\"addTodo\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\"></button>\\n        </div>\\n        <br> \\n    </div>\\n    <dialog id=\\\"todoModal\\\">\\n        <header>\\n            <h1>Add ToDo</h1>\\n        </header>\\n        <form id=\\\"todoForm\\\">\\n            <label for=\\\"title\\\"></label>\\n            <input type=\\\"text\\\" id=\\\"title\\\" placeholder=\\\"Title\\\" required>\\n\\n            <label for=\\\"description\\\"></label>\\n            <textarea id=\\\"description\\\" placeholder=\\\"Description\\\"></textarea>\\n\\n            <label for=\\\"dueDate\\\"></label>\\n            <input type=\\\"date\\\" id=\\\"dueDate\\\">\\n\\n            <button type=\\\"submit\\\">Submit</button>\\n        </form>\\n    </dialog>\\n    <dialog id=\\\"editModal\\\">\\n        <header>\\n            <h1>Edit ToDo</h1>\\n        </header>\\n        <form id=\\\"editForm\\\">\\n            <input type=\\\"hidden\\\" id=\\\"todoId\\\">\\n            <label for=\\\"title\\\">Title:</label>\\n            <input type=\\\"text\\\" id=\\\"title\\\" required>\\n    \\n            <label for=\\\"description\\\">Description:</label>\\n            <textarea id=\\\"description\\\"></textarea>\\n    \\n            <label for=\\\"dueDate\\\">Due Date:</label>\\n            <input type=\\\"date\\\" id=\\\"dueDate\\\">\\n    \\n            <button type=\\\"submit\\\">Submit</button>\\n        </form>\\n    </dialog>\\n    <dialog id=\\\"projectModal\\\">\\n        <header>\\n            <h1>Add Project</h1>\\n        </header>\\n        <form id=\\\"projectForm\\\">\\n            <label for=\\\"project\\\"></label>\\n            <input type=\\\"text\\\" id=\\\"project\\\" placeholder=\\\"Project Name\\\" required>\\n\\n            <button type=\\\"submit\\\">Submit</button>\\n        </form>\\n    </dialog>\\n</body>\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://todo-list/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectList: () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _todoPopUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoPopUp.js */ \"./src/todoPopUp.js\");\n/* harmony import */ var _projectPopUp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectPopUp.js */ \"./src/projectPopUp.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _projectList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectList.js */ \"./src/projectList.js\");\n/* harmony import */ var _img_unchecked_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/unchecked.svg */ \"./src/img/unchecked.svg\");\n/* harmony import */ var _img_checked_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/checked.svg */ \"./src/img/checked.svg\");\n/* harmony import */ var _img_calendar_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/calendar.svg */ \"./src/img/calendar.svg\");\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./localStorage.js */ \"./src/localStorage.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst projectList = [];\n\nwindow.onload = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_9__.loadFromLocalStorage)();\n\nconst allToDos = new _project_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](document.querySelector(\".project\").textContent.trim().replace(/^#\\s+/, ''));\nprojectList.push(allToDos)\n\ndocument.addEventListener('click', function(event) {\n    // Handle delete functionality\n    const garbageBtn = event.target.closest('.garbageBtn');\n    if (garbageBtn) {\n        const todoContainer = garbageBtn.closest('.todo-container');\n        const dataId = todoContainer.getAttribute('data-id');\n        if (todoContainer) {\n            const header = document.querySelector(\".todo-header h1\").textContent;\n            projectList.forEach(element => {\n                if(element.projectName === header || element.projectName === \"All ToDos\"){\n                    element.tasks = element.tasks.filter(todo => todo.getId() !== dataId);\n                }\n            })\n            todoContainer.remove();\n            (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_9__.saveToLocalStorage)();\n        }\n    }\n\n    // Handle strike functionality\n    const tickBtn = event.target.closest('.tickBtn');\n    if (tickBtn) {\n        const tickImg = tickBtn.querySelector('img');\n        const todoTitle = tickBtn.nextElementSibling;\n        const todoDescription = todoTitle.nextElementSibling.nextElementSibling;\n\n        if (tickImg.src.includes(_img_unchecked_svg__WEBPACK_IMPORTED_MODULE_6__)) {\n            tickImg.src = _img_checked_svg__WEBPACK_IMPORTED_MODULE_7__;\n            todoTitle.classList.add('strikethrough');\n            todoDescription.classList.add('strikethrough');\n        } else {\n            tickImg.src = _img_unchecked_svg__WEBPACK_IMPORTED_MODULE_6__;\n            todoTitle.classList.remove('strikethrough');\n            todoDescription.classList.remove('strikethrough');\n        }\n    }\n\n    //Handle edit functionality\n    const editBtn = event.target.closest('.editBtn');\n    if (editBtn) {\n        const editModal = document.getElementById('editModal');\n        const editForm = document.getElementById('editForm');\n\n        const todoContainer = editBtn.closest('.todo-container');\n        const todoId = todoContainer.getAttribute('data-id');\n        const title = todoContainer.querySelector('.todo-title').textContent;\n        const description = todoContainer.querySelector('.todo-description').textContent;\n        const dueDate = todoContainer.querySelector('.todo-dueDate').textContent.replace('Due Date', '').trim();\n\n        editForm.querySelector('#todoId').value = todoId;\n        editForm.querySelector('#title').value = title;\n        editForm.querySelector('#description').value = description;\n        editForm.querySelector('#dueDate').value = dueDate; // Ensure this is in yyyy-mm-dd format\n\n        editModal.showModal();\n    }\n\n    const editForm = document.getElementById('editForm');\n    editForm.addEventListener('submit', (e) => {\n        e.preventDefault();\n        \n        const todoId = editForm.querySelector('#todoId').value;\n        const title = editForm.querySelector('#title').value;\n        const description = editForm.querySelector('#description').value;\n        const dueDate = editForm.querySelector('#dueDate').value;\n\n        const todoContainer = document.querySelector(`.todo-container[data-id=\"${todoId}\"]`);\n        todoContainer.querySelector('.todo-title').textContent = title;\n        todoContainer.querySelector('.todo-description').textContent = description;\n        todoContainer.querySelector('.todo-dueDate').innerHTML = `<img src=\"${_img_calendar_svg__WEBPACK_IMPORTED_MODULE_8__}\"> ${dueDate}`;\n\n        // Update the task in projectList\n        projectList.forEach(project => {\n            project.tasks.forEach(task => {\n                if (task.getId() === todoId) {\n                    task.title = title;\n                    task.description = description;\n                    task.dueDate = dueDate;\n                }\n            });\n        });\n\n        (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_9__.saveToLocalStorage)(); \n        editModal.close();\n    });\n\n    //handle sidebar delete functionality\n    const delBtn = event.target.closest('.del');\n    if (delBtn) {\n        const projectList = delBtn.closest('.project-list');\n        if (projectList) {\n            projectList.remove();\n            (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_9__.saveToLocalStorage)();\n        }\n    }\n});\n\n(0,_todoPopUp_js__WEBPACK_IMPORTED_MODULE_2__.todoPopUp)();\n(0,_todoPopUp_js__WEBPACK_IMPORTED_MODULE_2__.getFormData)();\n(0,_projectPopUp_js__WEBPACK_IMPORTED_MODULE_3__.projectPopUp)();\n(0,_projectPopUp_js__WEBPACK_IMPORTED_MODULE_3__.projectFormData)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _todoPopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoPopUp */ \"./src/todoPopUp.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\n\nconst saveToLocalStorage = function() {\n    const projectsToSave = ___WEBPACK_IMPORTED_MODULE_0__.projectList.map(project => ({\n        projectName: project.projectName,\n        tasks: project.tasks.map(task => ({\n            id: task.getId(),\n            title: task.getTitle(),\n            description: task.getDescription(),\n            dueDate: task.getDueDate(),\n        }))\n    }));\n    localStorage.setItem('projectList', JSON.stringify(projectsToSave));\n}\n\nconst loadFromLocalStorage = function() {\n    const storedProjects = localStorage.getItem('projectList');\n    if (storedProjects) {\n        console.log(storedProjects);\n        const parsedProjects = JSON.parse(storedProjects);\n        parsedProjects.forEach(projectData => {\n            console.log(projectData);\n            const projectObj = new _project__WEBPACK_IMPORTED_MODULE_3__[\"default\"](projectData.projectName);\n            projectObj.tasks = projectData.tasks.map(taskData => {\n                const task = new _todo__WEBPACK_IMPORTED_MODULE_1__.todo(taskData.title, taskData.description, taskData.dueDate);\n                return task;\n            });\n            ___WEBPACK_IMPORTED_MODULE_0__.projectList.push(projectObj);\n            projectObj.tasks.forEach(task => (0,_todoPopUp__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)(task));\n        });\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/localStorage.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ project)\n/* harmony export */ });\nclass project { \n    constructor(projectName) {\n        this.projectName = projectName;\n        this.tasks = [];\n    };\n\n    addProjectToList(projectList) {\n        projectList.push(this);\n    };\n};\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/add.svg */ \"./src/img/add.svg\");\n/* harmony import */ var _todoPopUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoPopUp.js */ \"./src/todoPopUp.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\n\ndocument.addEventListener(\"click\", function(event) {\n    const project = event.target.closest(\".project\");\n    if(project) {\n\n        let textContent = project.textContent.trim();\n        textContent = textContent.replace(/^#\\s+/, '');\n\n        const content = document.querySelector(\".content\");\n        content.innerHTML = `\n            <div class=\"todo-header\">\n                <h1>${textContent}</h1>\n                <button class=\"addTodo\"><img src=\"${_img_add_svg__WEBPACK_IMPORTED_MODULE_0__}\"></button>\n            </div>\n            <br>\n        `;\n        _index_js__WEBPACK_IMPORTED_MODULE_2__.projectList.forEach(element => {\n            if(element.projectName === textContent){\n                element.tasks.forEach(todo => {\n                    (0,_todoPopUp_js__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)(todo);\n                }); \n            }\n        })\n        ;(0,_todoPopUp_js__WEBPACK_IMPORTED_MODULE_1__.todoPopUp)();\n    }\n})\n\n//# sourceURL=webpack://todo-list/./src/projectList.js?");

/***/ }),

/***/ "./src/projectPopUp.js":
/*!*****************************!*\
  !*** ./src/projectPopUp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectFormData: () => (/* binding */ projectFormData),\n/* harmony export */   projectPopUp: () => (/* binding */ projectPopUp)\n/* harmony export */ });\n/* harmony import */ var _img_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/delete.svg */ \"./src/img/delete.svg\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\n\n\n\n\nconst updateSidebar = function (project) {\n    const nav = document.querySelector(\"nav\");\n    const div = document.createElement(\"div\");\n    div.classList.add(\"project-list\");\n    div.innerHTML = `\n    <button class=\"project\"> # &nbsp; ${project}</button>\n    <button class=\"del\"><img src=\"${_img_delete_svg__WEBPACK_IMPORTED_MODULE_0__}\"></button>\n    `\n    nav.appendChild(div);\n}\n\nconst projectFormData = function () {\n    var form = document.getElementById(\"projectForm\");\n    form.addEventListener(\"submit\", function(event){\n        event.preventDefault();\n\n        const projectVal = document.getElementById(\"project\").value;\n        updateSidebar(projectVal);\n        ___WEBPACK_IMPORTED_MODULE_1__.projectList.push(new _project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](projectVal));\n        console.log(___WEBPACK_IMPORTED_MODULE_1__.projectList);\n\n        var modal = document.getElementById(\"projectModal\");\n\n        this.reset();\n        modal.close();\n        (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)();\n    })\n}\n\nconst projectPopUp = function () {\n    document.querySelector(\".add\").addEventListener(\"click\", () => {\n        var modal = document.getElementById(\"projectModal\");\n        modal.showModal();\n    \n        window.onclick = function(event) {\n            if (event.target === modal) {\n                modal.close();\n            }\n        };\n    })\n}\n\n//# sourceURL=webpack://todo-list/./src/projectPopUp.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todo: () => (/* binding */ todo)\n/* harmony export */ });\nclass todo{\n    #id;\n    #title;\n    #description;\n    #dueDate;\n\n    constructor(title, description, dueDate) {\n        this.#id = this.generateId();\n        this.#title = title;\n        this.#description = description;\n        this.#dueDate = dueDate;\n    }\n\n    generateId() {\n        return `todo-${Date.now()}-${Math.floor(Math.random() * 1000)}`;\n    }\n\n    getId() {\n        return this.#id;\n    }\n\n    getTitle() {\n        return this.#title;\n    }\n\n    getDescription() {\n        return this.#description;\n    }\n\n    getDueDate() {\n        return this.#dueDate;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/todoPopUp.js":
/*!**************************!*\
  !*** ./src/todoPopUp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFormData: () => (/* binding */ getFormData),\n/* harmony export */   todoPopUp: () => (/* binding */ todoPopUp),\n/* harmony export */   updateDisplay: () => (/* binding */ updateDisplay)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _img_unchecked_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/unchecked.svg */ \"./src/img/unchecked.svg\");\n/* harmony import */ var _img_calendar_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/calendar.svg */ \"./src/img/calendar.svg\");\n/* harmony import */ var _img_garbage_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/garbage.svg */ \"./src/img/garbage.svg\");\n/* harmony import */ var _img_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/edit.svg */ \"./src/img/edit.svg\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorage.js */ \"./src/localStorage.js\");\n\n\n\n\n\n\n\n\nfunction setDefaultDate() {\n    const today = new Date();\n    const year = today.getFullYear();\n    const month = (today.getMonth() + 1).toString().padStart(2, '0');\n    const day = today.getDate().toString().padStart(2, '0');\n\n    const dateString = `${year}-${month}-${day}`;\n    document.getElementById('dueDate').value = dateString;\n}\n\nconst updateDisplay = function (newTodo) {\n    const content = document.querySelector(\".content\");\n\n    const display = document.createElement(\"div\");\n    display.classList.add(\"todo-container\");\n\n    const todoId = newTodo.getId(); \n    display.setAttribute(\"data-id\", todoId);\n\n    display.innerHTML = `\n        <button class=\"tickBtn\"><img src=\"${_img_unchecked_svg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Unchecked\"></button>\n        <h2 class=\"todo-title\">${newTodo.getTitle()}</h2>\n        <button class=\"editBtn\"><img src=\"${_img_edit_svg__WEBPACK_IMPORTED_MODULE_4__}\"></button>\n        <p class=\"todo-description\">${newTodo.getDescription()}</p>\n        <p class=\"todo-dueDate\">\n            <img src=\"${_img_calendar_svg__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Calendar\">\n            ${newTodo.getDueDate()}\n        </p>\n        <button class=\"garbageBtn\"><img src=\"${_img_garbage_svg__WEBPACK_IMPORTED_MODULE_3__}\" alt=\"Garbage\"></button>\n        <div class=\"hr\"><hr></div>\n    `\n    content.appendChild(display);\n\n    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_6__.saveToLocalStorage)();\n}\n\nconst getFormData = function () {\n    var form = document.getElementById(\"todoForm\");\n    setDefaultDate();\n\n    form.addEventListener(\"submit\", function(event){\n        event.preventDefault();\n\n        const title = document.getElementById(\"title\").value;\n        const description = document.getElementById(\"description\").value;\n        const dueDate = document.getElementById(\"dueDate\").value;\n\n        var header = document.querySelector(\".todo-header h1\").textContent;\n\n        const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__.todo(title, description, dueDate);\n        _index_js__WEBPACK_IMPORTED_MODULE_5__.projectList[0].tasks.push(newTodo);\n        console.log(_index_js__WEBPACK_IMPORTED_MODULE_5__.projectList[0].tasks);\n\n        _index_js__WEBPACK_IMPORTED_MODULE_5__.projectList.forEach(element => {\n            if(element.projectName === header && element.projectName !== \"All ToDos\"){\n                element.tasks.push(newTodo);\n            }\n        })\n\n        updateDisplay(newTodo);\n\n        var modal = document.getElementById(\"todoModal\");\n\n        this.reset();\n        setDefaultDate();\n\n        modal.close();\n    })\n}\n\nconst todoPopUp = function () {\n    document.querySelector(\".addTodo\").addEventListener(\"click\", () => {\n        var modal = document.getElementById(\"todoModal\");\n\n        modal.showModal();\n    \n        window.onclick = function(event) {\n            if (event.target === modal) {\n                modal.close();\n            }\n        };\n    })\n}\n\n//# sourceURL=webpack://todo-list/./src/todoPopUp.js?");

/***/ }),

/***/ "./src/img/add.svg":
/*!*************************!*\
  !*** ./src/img/add.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e72c90086543b8e28c1.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/add.svg?");

/***/ }),

/***/ "./src/img/calendar.svg":
/*!******************************!*\
  !*** ./src/img/calendar.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e6550b88bfed8e1e1df1.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/calendar.svg?");

/***/ }),

/***/ "./src/img/checked.svg":
/*!*****************************!*\
  !*** ./src/img/checked.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ab9e5d9515ef70e969bd.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/checked.svg?");

/***/ }),

/***/ "./src/img/delete.svg":
/*!****************************!*\
  !*** ./src/img/delete.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"571239a91539db891d8d.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/delete.svg?");

/***/ }),

/***/ "./src/img/edit.svg":
/*!**************************!*\
  !*** ./src/img/edit.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eecf65e02cd3cefefc50.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/edit.svg?");

/***/ }),

/***/ "./src/img/garbage.svg":
/*!*****************************!*\
  !*** ./src/img/garbage.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed23e5ee5fa25d47c399.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/garbage.svg?");

/***/ }),

/***/ "./src/img/unchecked.svg":
/*!*******************************!*\
  !*** ./src/img/unchecked.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4acb1836996d669357a1.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/unchecked.svg?");

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
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
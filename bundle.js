/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
:root {
  /* --text: #fffafc;
  --background: #000000;
  --primary: #d51052;
  --secondary: #390416;
  --accent: #ee1b62; */

  --text: rgb(254, 249, 236);
  --background: rgb(20, 15, 0);
  --background-desat: rgb(23, 18, 3);
  --primary: rgb(255, 132, 0);
  --secondary: rgb(41, 31, 0);
  --accent: rgb(248, 108, 48);

  /* --text: rgb(226, 222, 252);
  --background: rgb(9, 4, 47);
  --primary: rgb(181, 203, 16);
  --secondary: rgb(27, 61, 5);
  --accent: rgb(237, 159, 33); */

  /* --text: #fafbf4;
  --background: #030401;
  --primary: #d5dda2;
  --secondary: #292d11;
  --accent: #aebd4c; */
}

html {
  font-size: 100%;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Poppins";
  font-weight: 700;
}

h1 {
  font-size: 4.21rem; /* 67.36px */
}

h2 {
  font-size: 3.158rem; /* 50.56px */
}

h3 {
  font-size: 2.369rem; /* 37.92px */
}

h4 {
  font-size: 1.777rem; /* 28.48px */
}

h5 {
  font-size: 1.333rem; /* 21.28px */
}

small {
  font-size: 0.75rem; /* 12px */
}

body {
  background-color: var(--background);
  color: var(--text);
  font-family: "Poppins";
  font-weight: 400;
}

.title {
  margin: 1rem 18rem;
  color: var(--primary);
}

.content {
  margin: 1rem 5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.sidebar {
  text-align: center;
  width: 10rem;
}

.projects {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1.5rem 0rem;
  min-height: 60vh;
}

.projects > button {
  transition: 0.2s;
  padding: 0.4rem 2rem;
  border-radius: 1rem;
}

.projects > .newProjectButton {
  margin-top: auto;
}

.projects > button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.tasks {
  margin: 1rem 5rem;
  display: flex;
  flex-direction: column;
  width: 60%;
}

.task {
  margin: 0rem 0rem 1.4rem 0rem;
  padding: 1rem 1rem;
  cursor: pointer;
  border: 0.1rem solid white;
  border-radius: 1rem;
}

.task > .row1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.clear {
  clear: both;
}

.checkBox {
  display: block;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  border: 0.1rem solid rgba(255, 255, 255, 0);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0rem 0rem 0rem 0.15rem var(--accent);
}

.checkBox div {
  width: 2rem;
  height: 2rem;
  background-color: var(--accent);
  top: -2rem;
  left: -2rem;
  position: absolute;
  transform: rotateZ(45deg);
  z-index: 100;
}

.checkBox input[type="checkbox"]:checked + div {
  left: -1rem;
  top: -1rem;
}

.checkBox input[type="checkbox"] {
  position: absolute;
  left: 5rem;
  visibility: hidden;
}

.transition {
  transition: 300ms ease;
}

.taskCheckbox {
  flex: 1;
}

.taskTitle {
  flex: 10;
  text-align: left;
  padding-left: 1rem;
}

.task.done * {
  text-decoration: line-through;
  opacity: 0.8;
}

.taskDueDate {
  flex: 6;
  text-align: right;
}

.taskDescription {
  visibility: hidden;
  opacity: 0;
  height: 0;
  padding-left: 2rem;
}

.task.clicked .taskDescription {
  visibility: visible;
  opacity: 1;
  height: auto;
}

.operationButtons {
  margin-left: auto;
  display: flex;
  flex-direction: column;
}

.operationButton {
  width: 12rem;
  height: 4rem;
  border-radius: 0.4rem;
  background-color: var(--secondary);
  transition: 0.2s;
}

.operationButton:hover {
  translate: 0rem -0.2rem;
}

.modalContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text);
  min-width: 25rem;
  background-color: var(--background);
  border: 0.1rem solid var(--accent);
  border-radius: 0.6rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.7);
}

.modalContainer label {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.modalContainer input {
  margin: 1rem 0rem;
  background-color: var(--secondary);
  color: var(--text);
  border: none;
  padding: 0.2rem;
  border-radius: 0.5rem;
}

.modalContainer button {
  border-radius: 0.4rem;
  padding: 0.4rem;
  width: 6rem;
  transition: 0.1s;
}

.modalContainer button:hover {
  transform: scale(1.05);
}

button {
  background: none;
  color: inherit;
  border: none;
  margin: 0.7rem 0rem;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
}

button.selected {
  color: var(--primary);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,iBAAiB;AACnB;AACA;EACE;;;;sBAIoB;;EAEpB,0BAA0B;EAC1B,4BAA4B;EAC5B,kCAAkC;EAClC,2BAA2B;EAC3B,2BAA2B;EAC3B,2BAA2B;;EAE3B;;;;gCAI8B;;EAE9B;;;;sBAIoB;AACtB;;AAEA;EACE,eAAe;AACjB;;AAEA;;;;;EAKE,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB,EAAE,YAAY;AAClC;;AAEA;EACE,mBAAmB,EAAE,YAAY;AACnC;;AAEA;EACE,mBAAmB,EAAE,YAAY;AACnC;;AAEA;EACE,mBAAmB,EAAE,YAAY;AACnC;;AAEA;EACE,mBAAmB,EAAE,YAAY;AACnC;;AAEA;EACE,kBAAkB,EAAE,SAAS;AAC/B;;AAEA;EACE,mCAAmC;EACnC,kBAAkB;EAClB,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,eAAe;EACf,WAAW;EACX,YAAY;EACZ,2CAA2C;EAC3C,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,gDAAgD;AAClD;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,+BAA+B;EAC/B,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,QAAQ;EACR,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,OAAO;EACP,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,UAAU;EACV,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,qBAAqB;EACrB,kCAAkC;EAClC,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,mCAAmC;EACnC,kCAAkC;EAClC,qBAAqB;EACrB,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kCAAkC;EAClC,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  user-select: none;\n}\n:root {\n  /* --text: #fffafc;\n  --background: #000000;\n  --primary: #d51052;\n  --secondary: #390416;\n  --accent: #ee1b62; */\n\n  --text: rgb(254, 249, 236);\n  --background: rgb(20, 15, 0);\n  --background-desat: rgb(23, 18, 3);\n  --primary: rgb(255, 132, 0);\n  --secondary: rgb(41, 31, 0);\n  --accent: rgb(248, 108, 48);\n\n  /* --text: rgb(226, 222, 252);\n  --background: rgb(9, 4, 47);\n  --primary: rgb(181, 203, 16);\n  --secondary: rgb(27, 61, 5);\n  --accent: rgb(237, 159, 33); */\n\n  /* --text: #fafbf4;\n  --background: #030401;\n  --primary: #d5dda2;\n  --secondary: #292d11;\n  --accent: #aebd4c; */\n}\n\nhtml {\n  font-size: 100%;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-family: \"Poppins\";\n  font-weight: 700;\n}\n\nh1 {\n  font-size: 4.21rem; /* 67.36px */\n}\n\nh2 {\n  font-size: 3.158rem; /* 50.56px */\n}\n\nh3 {\n  font-size: 2.369rem; /* 37.92px */\n}\n\nh4 {\n  font-size: 1.777rem; /* 28.48px */\n}\n\nh5 {\n  font-size: 1.333rem; /* 21.28px */\n}\n\nsmall {\n  font-size: 0.75rem; /* 12px */\n}\n\nbody {\n  background-color: var(--background);\n  color: var(--text);\n  font-family: \"Poppins\";\n  font-weight: 400;\n}\n\n.title {\n  margin: 1rem 18rem;\n  color: var(--primary);\n}\n\n.content {\n  margin: 1rem 5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.sidebar {\n  text-align: center;\n  width: 10rem;\n}\n\n.projects {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin: 1.5rem 0rem;\n  min-height: 60vh;\n}\n\n.projects > button {\n  transition: 0.2s;\n  padding: 0.4rem 2rem;\n  border-radius: 1rem;\n}\n\n.projects > .newProjectButton {\n  margin-top: auto;\n}\n\n.projects > button:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\n.tasks {\n  margin: 1rem 5rem;\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n}\n\n.task {\n  margin: 0rem 0rem 1.4rem 0rem;\n  padding: 1rem 1rem;\n  cursor: pointer;\n  border: 0.1rem solid white;\n  border-radius: 1rem;\n}\n\n.task > .row1 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.clear {\n  clear: both;\n}\n\n.checkBox {\n  display: block;\n  cursor: pointer;\n  width: 1rem;\n  height: 1rem;\n  border: 0.1rem solid rgba(255, 255, 255, 0);\n  border-radius: 1rem;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0rem 0rem 0rem 0.15rem var(--accent);\n}\n\n.checkBox div {\n  width: 2rem;\n  height: 2rem;\n  background-color: var(--accent);\n  top: -2rem;\n  left: -2rem;\n  position: absolute;\n  transform: rotateZ(45deg);\n  z-index: 100;\n}\n\n.checkBox input[type=\"checkbox\"]:checked + div {\n  left: -1rem;\n  top: -1rem;\n}\n\n.checkBox input[type=\"checkbox\"] {\n  position: absolute;\n  left: 5rem;\n  visibility: hidden;\n}\n\n.transition {\n  transition: 300ms ease;\n}\n\n.taskCheckbox {\n  flex: 1;\n}\n\n.taskTitle {\n  flex: 10;\n  text-align: left;\n  padding-left: 1rem;\n}\n\n.task.done * {\n  text-decoration: line-through;\n  opacity: 0.8;\n}\n\n.taskDueDate {\n  flex: 6;\n  text-align: right;\n}\n\n.taskDescription {\n  visibility: hidden;\n  opacity: 0;\n  height: 0;\n  padding-left: 2rem;\n}\n\n.task.clicked .taskDescription {\n  visibility: visible;\n  opacity: 1;\n  height: auto;\n}\n\n.operationButtons {\n  margin-left: auto;\n  display: flex;\n  flex-direction: column;\n}\n\n.operationButton {\n  width: 12rem;\n  height: 4rem;\n  border-radius: 0.4rem;\n  background-color: var(--secondary);\n  transition: 0.2s;\n}\n\n.operationButton:hover {\n  translate: 0rem -0.2rem;\n}\n\n.modalContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: var(--text);\n  min-width: 25rem;\n  background-color: var(--background);\n  border: 0.1rem solid var(--accent);\n  border-radius: 0.6rem;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 2rem;\n}\n\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.modalContainer label {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modalContainer input {\n  margin: 1rem 0rem;\n  background-color: var(--secondary);\n  color: var(--text);\n  border: none;\n  padding: 0.2rem;\n  border-radius: 0.5rem;\n}\n\n.modalContainer button {\n  border-radius: 0.4rem;\n  padding: 0.4rem;\n  width: 6rem;\n  transition: 0.1s;\n}\n\n.modalContainer button:hover {\n  transform: scale(1.05);\n}\n\nbutton {\n  background: none;\n  color: inherit;\n  border: none;\n  margin: 0.7rem 0rem;\n  font-size: 1.3rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n\nbutton.selected {\n  color: var(--primary);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   loadProjects: () => (/* binding */ loadProjects),
/* harmony export */   saveProjects: () => (/* binding */ saveProjects)
/* harmony export */ });
class Task {
  constructor(title, description, dueDate, isCompleted) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isCompleted = isCompleted;
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.arr = [];
  }

  append(...task) {
    this.arr.push(...task);
  }

  clearAll() {
    this.arr.length = 0;
  }

  clearCompleted() {
    this.arr = this.arr.filter((task) => !task.isCompleted);
  }

  numTasks() {
    return this.arr.length;
  }

  *tasks() {
    for (const task of this.arr) {
      yield task;
    }
  }
}

const loadProjects = () => {
  const projectsArray = JSON.parse(localStorage.getItem("projectsArray"));
  if (!projectsArray) {
    return [];
  }
  let projects = [];
  projectsArray.forEach((proj) => {
    let project = new Project(proj.name);
    proj.arr.forEach((tas) => {
      let task = new Task(
        tas.title,
        tas.description,
        new Date(tas.dueDate),
        tas.isCompleted
      );
      project.append(task);
    });
    projects.push(project);
  });
  return projects;
};

const saveProjects = (projects) => {
  const projectsArray = JSON.stringify(projects);
  localStorage.setItem("projectsArray", projectsArray);
};

const test = () => {
  let testProject = new Project();
  let task1 = new Task(1, 2, 3, false);
  let task2 = new Task(2, 3, 4, false);
  testProject.append(task1, task2);
  console.log(testProject.numTasks());

  task1.isCompleted = true;
  testProject.clearCompleted();
  console.log(testProject.numTasks());

  testProject.clearAll();
  console.log(testProject.numTasks());
};




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



let container = document.querySelector("#container");
let allProjects = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.loadProjects)();
let currentProjects = allProjects;

const createTitle = () => {
  let title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "To Do";

  return title;
};

const updateTaskList = () => {
  let content = document.querySelector(".content");
  let oldTaskList = document.querySelector(".tasks");
  let newTaskList = createTaskList();
  content.replaceChild(newTaskList, oldTaskList);
};

const createSidebar = () => {
  let sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  let sidebarHeader = document.createElement("h3");
  sidebarHeader.textContent = "Lists";
  sidebar.appendChild(sidebarHeader);

  let projectsDiv = document.createElement("div");
  projectsDiv.classList.add("projects");

  let allProjectsButton = document.createElement("button");
  allProjectsButton.textContent = "All";
  allProjectsButton.id = "all";
  allProjectsButton.onclick = () => {
    document.querySelectorAll(".projects > button").forEach((button) => {
      button.classList.remove("selected");
    });
    allProjectsButton.classList.add("selected");
    let content = document.querySelector(".content");
    let oldTaskList = document.querySelector(".tasks");
    currentProjects = allProjects;
    let newTaskList = createTaskList();
    content.replaceChild(newTaskList, oldTaskList);
  };
  projectsDiv.appendChild(allProjectsButton);
  allProjectsButton.classList.add("selected");

  let newProjectModal = document.createElement("dialog");
  let newProjectDiv = document.createElement("div");
  newProjectDiv.classList.add("modalContainer");
  let newProjectLabel = document.createElement("label");
  newProjectLabel.textContent = "Name";
  let newProjectInput = document.createElement("input");
  newProjectLabel.appendChild(newProjectInput);
  let newProjectButton = document.createElement("button");
  newProjectButton.textContent = "+";
  newProjectButton.classList.add("newProjectButton");
  newProjectButton.onclick = () => {
    newProjectModal.showModal();
  };
  projectsDiv.appendChild(newProjectButton);
  let createButton = document.createElement("button");
  createButton.textContent = "Create";
  createButton.onclick = () => {
    let projectName = newProjectInput.value;
    let project = new _logic__WEBPACK_IMPORTED_MODULE_0__.Project(projectName);
    allProjects.push(project);
    document.querySelectorAll(".projects > button").forEach((button) => {
      button.classList.remove("selected");
    });
    let projectButton = document.createElement("button");
    projectButton.textContent = project.name;
    projectButton.onclick = () => {
      document.querySelectorAll(".projects > button").forEach((button) => {
        button.classList.remove("selected");
      });
      projectButton.classList.add("selected");
      currentProjects = [project];
      updateTaskList();
    };
    projectButton.classList.add("selected");
    projectsDiv.insertBefore(projectButton, newProjectButton);
    currentProjects = [project];
    updateTaskList();
    newProjectModal.close();
  };

  currentProjects.forEach((project) => {
    let projectButton = document.createElement("button");
    projectButton.textContent = project.name;
    projectButton.onclick = () => {
      document.querySelectorAll(".projects > button").forEach((button) => {
        button.classList.remove("selected");
      });
      projectButton.classList.add("selected");
      currentProjects = [project];
      updateTaskList();
    };
    projectsDiv.insertBefore(projectButton, newProjectButton);
  });

  newProjectDiv.appendChild(newProjectLabel);
  newProjectDiv.appendChild(createButton);
  newProjectModal.appendChild(newProjectDiv);
  sidebar.appendChild(projectsDiv);
  sidebar.appendChild(newProjectModal);

  return sidebar;
};

const createTask = (task) => {
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  let row1 = document.createElement("div");
  let row2 = document.createElement("div");
  row1.classList.add("row1");
  row2.classList.add("row2");

  let checkboxLabel = document.createElement("label");
  let transitionDiv = document.createElement("div");
  let taskCheckbox = document.createElement("input");
  let taskTitleDiv = document.createElement("div");
  let taskDescriptionDiv = document.createElement("div");
  let taskDueDateDiv = document.createElement("div");

  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;
  if (task.isCompleted) {
    taskDiv.classList.add("done");
  } else {
    taskDiv.classList.remove("done");
  }
  taskCheckbox.onchange = () => {
    task.isCompleted = taskCheckbox.checked;
    if (task.isCompleted) {
      taskDiv.classList.add("done");
    } else {
      taskDiv.classList.remove("done");
    }
  };

  transitionDiv.classList.add("transition");
  checkboxLabel.classList.add("checkBox");
  taskTitleDiv.classList.add("taskTitle");
  taskDescriptionDiv.classList.add("taskDescription");
  taskDueDateDiv.classList.add("taskDueDate");

  taskTitleDiv.textContent = task.title;
  taskDescriptionDiv.textContent = task.description;
  taskDueDateDiv.textContent = task.dueDate.toDateString();

  checkboxLabel.appendChild(taskCheckbox);
  checkboxLabel.appendChild(transitionDiv);

  row1.appendChild(checkboxLabel);
  row1.appendChild(taskTitleDiv);
  row1.appendChild(taskDueDateDiv);
  row2.appendChild(taskDescriptionDiv);

  taskDiv.appendChild(row1);
  taskDiv.appendChild(row2);

  taskDiv.onclick = (e) => {
    if (
      e.target.classList.contains("checkBox") ||
      e.target.classList.contains("transition") ||
      e.target.type === "checkbox"
    ) {
      return;
    }
    taskDiv.classList.toggle("clicked");
  };

  return taskDiv;
};

const createTaskList = () => {
  let tasksDiv = document.createElement("div");
  tasksDiv.classList.add("tasks");
  currentProjects.forEach((project) => {
    for (let task of project.tasks()) {
      tasksDiv.appendChild(createTask(task));
    }
  });

  return tasksDiv;
};

const createOperationButtons = () => {
  let operationButtons = document.createElement("div");
  let newTaskButton = document.createElement("button");
  let clearCompletedTasksButton = document.createElement("button");
  let clearAllButton = document.createElement("button");
  let deleteListButton = document.createElement("button");
  let saveLists = document.createElement("button");

  operationButtons.classList.add("operationButtons");
  newTaskButton.classList.add("operationButton");
  clearCompletedTasksButton.classList.add("operationButton");
  clearAllButton.classList.add("operationButton");
  deleteListButton.classList.add("operationButton");
  saveLists.classList.add("operationButton");

  newTaskButton.textContent = "New Task";
  clearCompletedTasksButton.textContent = "Clear Completed";
  clearAllButton.textContent = "Clear All";
  deleteListButton.textContent = "Delete List";
  saveLists.textContent = "Save Lists";

  newTaskButton.onclick = () => {
    let allProjectsButton = document.querySelector("#all");
    if (allProjectsButton.classList.contains("selected")) {
      alert("Please choose a task list");
      return;
    }

    let modal = document.querySelector("#newTask");
    modal.showModal();
  };

  clearCompletedTasksButton.onclick = () => {
    currentProjects.forEach((project) => {
      project.clearCompleted();
    });
    updateTaskList();
  };

  clearAllButton.onclick = () => {
    currentProjects.forEach((project) => {
      project.clearAll();
    });
    updateTaskList();
  };

  deleteListButton.onclick = () => {
    let allProjectsButton = document.querySelector("#all");
    if (allProjectsButton.classList.contains("selected")) {
      alert("Please choose a task list");
      return;
    }
    allProjects.splice(allProjects.indexOf(currentProjects[0]), 1);
    currentProjects = allProjects;
    document.querySelector(".selected").remove();
    allProjectsButton.classList.add("selected");
    updateTaskList();
  };

  saveLists.onclick = () => {
    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.saveProjects)(allProjects);
    alert("Saved all tasks locally!");
  };

  operationButtons.appendChild(newTaskButton);
  operationButtons.appendChild(clearCompletedTasksButton);
  operationButtons.appendChild(clearAllButton);
  operationButtons.appendChild(deleteListButton);
  operationButtons.appendChild(saveLists);

  return operationButtons;
};

const createContent = () => {
  let content = document.createElement("div");
  content.classList.add("content");
  content.appendChild(createSidebar());
  content.appendChild(createTaskList());
  content.appendChild(createOperationButtons());

  return content;
};

const createModal = () => {
  let modal = document.createElement("dialog");
  modal.id = "newTask";
  let modalContainer = document.createElement("div");
  modalContainer.classList.add("modalContainer");

  let taskTitleLabel = document.createElement("label");
  let taskDescriptionLabel = document.createElement("label");
  let dueDateLabel = document.createElement("label");
  let createButton = document.createElement("button");

  taskTitleLabel.textContent = "Title";
  taskDescriptionLabel.textContent = "Description";
  dueDateLabel.textContent = "Due on";
  createButton.textContent = "Create";

  let taskTitleInput = document.createElement("input");
  let taskDescriptionInput = document.createElement("input");
  let dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  createButton.onclick = () => {
    const taskTitle = taskTitleInput.value;
    const taskDescription = taskDescriptionInput.value;
    const dueDate = dueDateInput.valueAsDate;
    let task = new _logic__WEBPACK_IMPORTED_MODULE_0__.Task(taskTitle, taskDescription, dueDate);
    currentProjects[0].append(task);
    updateTaskList();
    modal.close();
  };

  taskTitleLabel.appendChild(taskTitleInput);
  taskDescriptionLabel.appendChild(taskDescriptionInput);
  dueDateLabel.appendChild(dueDateInput);

  modalContainer.appendChild(taskTitleLabel);
  modalContainer.appendChild(taskDescriptionLabel);
  modalContainer.appendChild(dueDateLabel);
  modalContainer.appendChild(createButton);

  modal.appendChild(modalContainer);

  return modal;
};

const initDOM = () => {
  container.appendChild(createTitle());
  container.appendChild(createContent());
  container.appendChild(createModal());
};

initDOM();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFFBQVEsUUFBUSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxTQUFTLFFBQVEsU0FBUyxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sU0FBUyxZQUFZLGFBQWEsT0FBTyxLQUFLLHNCQUFzQixPQUFPLEtBQUssc0JBQXNCLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLHNCQUFzQixPQUFPLEtBQUssc0JBQXNCLE9BQU8sS0FBSyxzQkFBc0IsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksNkJBQTZCLGNBQWMsZUFBZSwyQkFBMkIsc0JBQXNCLEdBQUcsU0FBUyx1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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksb0RBQVk7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG46cm9vdCB7XG4gIC8qIC0tdGV4dDogI2ZmZmFmYztcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAtLXByaW1hcnk6ICNkNTEwNTI7XG4gIC0tc2Vjb25kYXJ5OiAjMzkwNDE2O1xuICAtLWFjY2VudDogI2VlMWI2MjsgKi9cblxuICAtLXRleHQ6IHJnYigyNTQsIDI0OSwgMjM2KTtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjAsIDE1LCAwKTtcbiAgLS1iYWNrZ3JvdW5kLWRlc2F0OiByZ2IoMjMsIDE4LCAzKTtcbiAgLS1wcmltYXJ5OiByZ2IoMjU1LCAxMzIsIDApO1xuICAtLXNlY29uZGFyeTogcmdiKDQxLCAzMSwgMCk7XG4gIC0tYWNjZW50OiByZ2IoMjQ4LCAxMDgsIDQ4KTtcblxuICAvKiAtLXRleHQ6IHJnYigyMjYsIDIyMiwgMjUyKTtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoOSwgNCwgNDcpO1xuICAtLXByaW1hcnk6IHJnYigxODEsIDIwMywgMTYpO1xuICAtLXNlY29uZGFyeTogcmdiKDI3LCA2MSwgNSk7XG4gIC0tYWNjZW50OiByZ2IoMjM3LCAxNTksIDMzKTsgKi9cblxuICAvKiAtLXRleHQ6ICNmYWZiZjQ7XG4gIC0tYmFja2dyb3VuZDogIzAzMDQwMTtcbiAgLS1wcmltYXJ5OiAjZDVkZGEyO1xuICAtLXNlY29uZGFyeTogIzI5MmQxMTtcbiAgLS1hY2NlbnQ6ICNhZWJkNGM7ICovXG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0LjIxcmVtOyAvKiA2Ny4zNnB4ICovXG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzLjE1OHJlbTsgLyogNTAuNTZweCAqL1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMi4zNjlyZW07IC8qIDM3LjkycHggKi9cbn1cblxuaDQge1xuICBmb250LXNpemU6IDEuNzc3cmVtOyAvKiAyOC40OHB4ICovXG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAxLjMzM3JlbTsgLyogMjEuMjhweCAqL1xufVxuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTsgLyogMTJweCAqL1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW46IDFyZW0gMThyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW46IDFyZW0gNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnNpZGViYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMHJlbTtcbn1cblxuLnByb2plY3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDEuNXJlbSAwcmVtO1xuICBtaW4taGVpZ2h0OiA2MHZoO1xufVxuXG4ucHJvamVjdHMgPiBidXR0b24ge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBwYWRkaW5nOiAwLjRyZW0gMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLnByb2plY3RzID4gLm5ld1Byb2plY3RCdXR0b24ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4ucHJvamVjdHMgPiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi50YXNrcyB7XG4gIG1hcmdpbjogMXJlbSA1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNjAlO1xufVxuXG4udGFzayB7XG4gIG1hcmdpbjogMHJlbSAwcmVtIDEuNHJlbSAwcmVtO1xuICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi50YXNrID4gLnJvdzEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbGVhciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY2hlY2tCb3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDByZW0gMHJlbSAwcmVtIDAuMTVyZW0gdmFyKC0tYWNjZW50KTtcbn1cblxuLmNoZWNrQm94IGRpdiB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIHRvcDogLTJyZW07XG4gIGxlZnQ6IC0ycmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmNoZWNrQm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgZGl2IHtcbiAgbGVmdDogLTFyZW07XG4gIHRvcDogLTFyZW07XG59XG5cbi5jaGVja0JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDVyZW07XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnRyYW5zaXRpb24ge1xuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xufVxuXG4udGFza0NoZWNrYm94IHtcbiAgZmxleDogMTtcbn1cblxuLnRhc2tUaXRsZSB7XG4gIGZsZXg6IDEwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbi50YXNrLmRvbmUgKiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi50YXNrRHVlRGF0ZSB7XG4gIGZsZXg6IDY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGFza0Rlc2NyaXB0aW9uIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cblxuLnRhc2suY2xpY2tlZCAudGFza0Rlc2NyaXB0aW9uIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ub3BlcmF0aW9uQnV0dG9ucyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ub3BlcmF0aW9uQnV0dG9uIHtcbiAgd2lkdGg6IDEycmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLm9wZXJhdGlvbkJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zbGF0ZTogMHJlbSAtMC4ycmVtO1xufVxuXG4ubW9kYWxDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIG1pbi13aWR0aDogMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1hY2NlbnQpO1xuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbmRpYWxvZzo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5tb2RhbENvbnRhaW5lciBsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb2RhbENvbnRhaW5lciBpbnB1dCB7XG4gIG1hcmdpbjogMXJlbSAwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi5tb2RhbENvbnRhaW5lciBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIHBhZGRpbmc6IDAuNHJlbTtcbiAgd2lkdGg6IDZyZW07XG4gIHRyYW5zaXRpb246IDAuMXM7XG59XG5cbi5tb2RhbENvbnRhaW5lciBidXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDAuN3JlbSAwcmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24uc2VsZWN0ZWQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFOzs7O3NCQUlvQjs7RUFFcEIsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFD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Q3RDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbjpyb290IHtcXG4gIC8qIC0tdGV4dDogI2ZmZmFmYztcXG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcXG4gIC0tcHJpbWFyeTogI2Q1MTA1MjtcXG4gIC0tc2Vjb25kYXJ5OiAjMzkwNDE2O1xcbiAgLS1hY2NlbnQ6ICNlZTFiNjI7ICovXFxuXFxuICAtLXRleHQ6IHJnYigyNTQsIDI0OSwgMjM2KTtcXG4gIC0tYmFja2dyb3VuZDogcmdiKDIwLCAxNSwgMCk7XFxuICAtLWJhY2tncm91bmQtZGVzYXQ6IHJnYigyMywgMTgsIDMpO1xcbiAgLS1wcmltYXJ5OiByZ2IoMjU1LCAxMzIsIDApO1xcbiAgLS1zZWNvbmRhcnk6IHJnYig0MSwgMzEsIDApO1xcbiAgLS1hY2NlbnQ6IHJnYigyNDgsIDEwOCwgNDgpO1xcblxcbiAgLyogLS10ZXh0OiByZ2IoMjI2LCAyMjIsIDI1Mik7XFxuICAtLWJhY2tncm91bmQ6IHJnYig5LCA0LCA0Nyk7XFxuICAtLXByaW1hcnk6IHJnYigxODEsIDIwMywgMTYpO1xcbiAgLS1zZWNvbmRhcnk6IHJnYigyNywgNjEsIDUpO1xcbiAgLS1hY2NlbnQ6IHJnYigyMzcsIDE1OSwgMzMpOyAqL1xcblxcbiAgLyogLS10ZXh0OiAjZmFmYmY0O1xcbiAgLS1iYWNrZ3JvdW5kOiAjMDMwNDAxO1xcbiAgLS1wcmltYXJ5OiAjZDVkZGEyO1xcbiAgLS1zZWNvbmRhcnk6ICMyOTJkMTE7XFxuICAtLWFjY2VudDogI2FlYmQ0YzsgKi9cXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDQuMjFyZW07IC8qIDY3LjM2cHggKi9cXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAzLjE1OHJlbTsgLyogNTAuNTZweCAqL1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDIuMzY5cmVtOyAvKiAzNy45MnB4ICovXFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMS43NzdyZW07IC8qIDI4LjQ4cHggKi9cXG59XFxuXFxuaDUge1xcbiAgZm9udC1zaXplOiAxLjMzM3JlbTsgLyogMjEuMjhweCAqL1xcbn1cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDAuNzVyZW07IC8qIDEycHggKi9cXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgbWFyZ2luOiAxcmVtIDE4cmVtO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBtYXJnaW46IDFyZW0gNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMHJlbTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luOiAxLjVyZW0gMHJlbTtcXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XFxufVxcblxcbi5wcm9qZWN0cyA+IGJ1dHRvbiB7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgcGFkZGluZzogMC40cmVtIDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgPiAubmV3UHJvamVjdEJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdHMgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgbWFyZ2luOiAxcmVtIDVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA2MCU7XFxufVxcblxcbi50YXNrIHtcXG4gIG1hcmdpbjogMHJlbSAwcmVtIDEuNHJlbSAwcmVtO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4udGFzayA+IC5yb3cxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xlYXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcblxcbi5jaGVja0JveCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogMHJlbSAwcmVtIDByZW0gMC4xNXJlbSB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG4uY2hlY2tCb3ggZGl2IHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG4gIHRvcDogLTJyZW07XFxuICBsZWZ0OiAtMnJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWig0NWRlZyk7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5jaGVja0JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBkaXYge1xcbiAgbGVmdDogLTFyZW07XFxuICB0b3A6IC0xcmVtO1xcbn1cXG5cXG4uY2hlY2tCb3ggaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1cmVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4udHJhbnNpdGlvbiB7XFxuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlO1xcbn1cXG5cXG4udGFza0NoZWNrYm94IHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi50YXNrVGl0bGUge1xcbiAgZmxleDogMTA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4udGFzay5kb25lICoge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi50YXNrRHVlRGF0ZSB7XFxuICBmbGV4OiA2O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi50YXNrRGVzY3JpcHRpb24ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMDtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG59XFxuXFxuLnRhc2suY2xpY2tlZCAudGFza0Rlc2NyaXB0aW9uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ub3BlcmF0aW9uQnV0dG9ucyB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ub3BlcmF0aW9uQnV0dG9uIHtcXG4gIHdpZHRoOiAxMnJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ub3BlcmF0aW9uQnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zbGF0ZTogMHJlbSAtMC4ycmVtO1xcbn1cXG5cXG4ubW9kYWxDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgbWluLXdpZHRoOiAyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tYWNjZW50KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG59XFxuXFxuLm1vZGFsQ29udGFpbmVyIGxhYmVsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWxDb250YWluZXIgaW5wdXQge1xcbiAgbWFyZ2luOiAxcmVtIDByZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cXG4ubW9kYWxDb250YWluZXIgYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIHdpZHRoOiA2cmVtO1xcbiAgdHJhbnNpdGlvbjogMC4xcztcXG59XFxuXFxuLm1vZGFsQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwLjdyZW0gMHJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLnNlbGVjdGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGlzQ29tcGxldGVkKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBpc0NvbXBsZXRlZDtcbiAgfVxufVxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hcnIgPSBbXTtcbiAgfVxuXG4gIGFwcGVuZCguLi50YXNrKSB7XG4gICAgdGhpcy5hcnIucHVzaCguLi50YXNrKTtcbiAgfVxuXG4gIGNsZWFyQWxsKCkge1xuICAgIHRoaXMuYXJyLmxlbmd0aCA9IDA7XG4gIH1cblxuICBjbGVhckNvbXBsZXRlZCgpIHtcbiAgICB0aGlzLmFyciA9IHRoaXMuYXJyLmZpbHRlcigodGFzaykgPT4gIXRhc2suaXNDb21wbGV0ZWQpO1xuICB9XG5cbiAgbnVtVGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyLmxlbmd0aDtcbiAgfVxuXG4gICp0YXNrcygpIHtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgdGhpcy5hcnIpIHtcbiAgICAgIHlpZWxkIHRhc2s7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGxvYWRQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0FycmF5XCIpKTtcbiAgaWYgKCFwcm9qZWN0c0FycmF5KSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuICBwcm9qZWN0c0FycmF5LmZvckVhY2goKHByb2opID0+IHtcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2oubmFtZSk7XG4gICAgcHJvai5hcnIuZm9yRWFjaCgodGFzKSA9PiB7XG4gICAgICBsZXQgdGFzayA9IG5ldyBUYXNrKFxuICAgICAgICB0YXMudGl0bGUsXG4gICAgICAgIHRhcy5kZXNjcmlwdGlvbixcbiAgICAgICAgbmV3IERhdGUodGFzLmR1ZURhdGUpLFxuICAgICAgICB0YXMuaXNDb21wbGV0ZWRcbiAgICAgICk7XG4gICAgICBwcm9qZWN0LmFwcGVuZCh0YXNrKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9KTtcbiAgcmV0dXJuIHByb2plY3RzO1xufTtcblxuY29uc3Qgc2F2ZVByb2plY3RzID0gKHByb2plY3RzKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzQXJyYXkgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0cyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0c0FycmF5KTtcbn07XG5cbmNvbnN0IHRlc3QgPSAoKSA9PiB7XG4gIGxldCB0ZXN0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCk7XG4gIGxldCB0YXNrMSA9IG5ldyBUYXNrKDEsIDIsIDMsIGZhbHNlKTtcbiAgbGV0IHRhc2syID0gbmV3IFRhc2soMiwgMywgNCwgZmFsc2UpO1xuICB0ZXN0UHJvamVjdC5hcHBlbmQodGFzazEsIHRhc2syKTtcbiAgY29uc29sZS5sb2codGVzdFByb2plY3QubnVtVGFza3MoKSk7XG5cbiAgdGFzazEuaXNDb21wbGV0ZWQgPSB0cnVlO1xuICB0ZXN0UHJvamVjdC5jbGVhckNvbXBsZXRlZCgpO1xuICBjb25zb2xlLmxvZyh0ZXN0UHJvamVjdC5udW1UYXNrcygpKTtcblxuICB0ZXN0UHJvamVjdC5jbGVhckFsbCgpO1xuICBjb25zb2xlLmxvZyh0ZXN0UHJvamVjdC5udW1UYXNrcygpKTtcbn07XG5cbmV4cG9ydCB7IGxvYWRQcm9qZWN0cywgc2F2ZVByb2plY3RzLCBUYXNrLCBQcm9qZWN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBsb2FkUHJvamVjdHMsIHNhdmVQcm9qZWN0cywgVGFzaywgUHJvamVjdCB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5sZXQgYWxsUHJvamVjdHMgPSBsb2FkUHJvamVjdHMoKTtcbmxldCBjdXJyZW50UHJvamVjdHMgPSBhbGxQcm9qZWN0cztcblxuY29uc3QgY3JlYXRlVGl0bGUgPSAoKSA9PiB7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVG8gRG9cIjtcblxuICByZXR1cm4gdGl0bGU7XG59O1xuXG5jb25zdCB1cGRhdGVUYXNrTGlzdCA9ICgpID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gIGxldCBvbGRUYXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG4gIGxldCBuZXdUYXNrTGlzdCA9IGNyZWF0ZVRhc2tMaXN0KCk7XG4gIGNvbnRlbnQucmVwbGFjZUNoaWxkKG5ld1Rhc2tMaXN0LCBvbGRUYXNrTGlzdCk7XG59O1xuXG5jb25zdCBjcmVhdGVTaWRlYmFyID0gKCkgPT4ge1xuICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgbGV0IHNpZGViYXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHNpZGViYXJIZWFkZXIudGV4dENvbnRlbnQgPSBcIkxpc3RzXCI7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRlcik7XG5cbiAgbGV0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuXG4gIGxldCBhbGxQcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFsbFByb2plY3RzQnV0dG9uLnRleHRDb250ZW50ID0gXCJBbGxcIjtcbiAgYWxsUHJvamVjdHNCdXR0b24uaWQgPSBcImFsbFwiO1xuICBhbGxQcm9qZWN0c0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdHMgPiBidXR0b25cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgIH0pO1xuICAgIGFsbFByb2plY3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICBsZXQgb2xkVGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuICAgIGN1cnJlbnRQcm9qZWN0cyA9IGFsbFByb2plY3RzO1xuICAgIGxldCBuZXdUYXNrTGlzdCA9IGNyZWF0ZVRhc2tMaXN0KCk7XG4gICAgY29udGVudC5yZXBsYWNlQ2hpbGQobmV3VGFza0xpc3QsIG9sZFRhc2tMaXN0KTtcbiAgfTtcbiAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoYWxsUHJvamVjdHNCdXR0b24pO1xuICBhbGxQcm9qZWN0c0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cbiAgbGV0IG5ld1Byb2plY3RNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGxldCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwibW9kYWxDb250YWluZXJcIik7XG4gIGxldCBuZXdQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5ld1Byb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xuICBsZXQgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuZXdQcm9qZWN0TGFiZWwuYXBwZW5kQ2hpbGQobmV3UHJvamVjdElucHV0KTtcbiAgbGV0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBuZXdQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCI7XG4gIG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5ld1Byb2plY3RCdXR0b25cIik7XG4gIG5ld1Byb2plY3RCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICBuZXdQcm9qZWN0TW9kYWwuc2hvd01vZGFsKCk7XG4gIH07XG4gIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xuICBsZXQgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGVcIjtcbiAgY3JlYXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gbmV3UHJvamVjdElucHV0LnZhbHVlO1xuICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIGFsbFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0cyA+IGJ1dHRvblwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgfSk7XG4gICAgbGV0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgcHJvamVjdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0cyA+IGJ1dHRvblwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIH0pO1xuICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBjdXJyZW50UHJvamVjdHMgPSBbcHJvamVjdF07XG4gICAgICB1cGRhdGVUYXNrTGlzdCgpO1xuICAgIH07XG4gICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgcHJvamVjdHNEaXYuaW5zZXJ0QmVmb3JlKHByb2plY3RCdXR0b24sIG5ld1Byb2plY3RCdXR0b24pO1xuICAgIGN1cnJlbnRQcm9qZWN0cyA9IFtwcm9qZWN0XTtcbiAgICB1cGRhdGVUYXNrTGlzdCgpO1xuICAgIG5ld1Byb2plY3RNb2RhbC5jbG9zZSgpO1xuICB9O1xuXG4gIGN1cnJlbnRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgbGV0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgcHJvamVjdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0cyA+IGJ1dHRvblwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIH0pO1xuICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBjdXJyZW50UHJvamVjdHMgPSBbcHJvamVjdF07XG4gICAgICB1cGRhdGVUYXNrTGlzdCgpO1xuICAgIH07XG4gICAgcHJvamVjdHNEaXYuaW5zZXJ0QmVmb3JlKHByb2plY3RCdXR0b24sIG5ld1Byb2plY3RCdXR0b24pO1xuICB9KTtcblxuICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RMYWJlbCk7XG4gIG5ld1Byb2plY3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKTtcbiAgbmV3UHJvamVjdE1vZGFsLmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0TW9kYWwpO1xuXG4gIHJldHVybiBzaWRlYmFyO1xufTtcblxuY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrKSA9PiB7XG4gIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICBsZXQgcm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCByb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm93MS5jbGFzc0xpc3QuYWRkKFwicm93MVwiKTtcbiAgcm93Mi5jbGFzc0xpc3QuYWRkKFwicm93MlwiKTtcblxuICBsZXQgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGV0IHRyYW5zaXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBsZXQgdGFza1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHRhc2tEZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0YXNrRHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgdGFza0NoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIHRhc2tDaGVja2JveC5jaGVja2VkID0gdGFzay5pc0NvbXBsZXRlZDtcbiAgaWYgKHRhc2suaXNDb21wbGV0ZWQpIHtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpO1xuICB9IGVsc2Uge1xuICAgIHRhc2tEaXYuY2xhc3NMaXN0LnJlbW92ZShcImRvbmVcIik7XG4gIH1cbiAgdGFza0NoZWNrYm94Lm9uY2hhbmdlID0gKCkgPT4ge1xuICAgIHRhc2suaXNDb21wbGV0ZWQgPSB0YXNrQ2hlY2tib3guY2hlY2tlZDtcbiAgICBpZiAodGFzay5pc0NvbXBsZXRlZCkge1xuICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza0Rpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZG9uZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgdHJhbnNpdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwidHJhbnNpdGlvblwiKTtcbiAgY2hlY2tib3hMYWJlbC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tCb3hcIik7XG4gIHRhc2tUaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGFza1RpdGxlXCIpO1xuICB0YXNrRGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcInRhc2tEZXNjcmlwdGlvblwiKTtcbiAgdGFza0R1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tEdWVEYXRlXCIpO1xuXG4gIHRhc2tUaXRsZURpdi50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIHRhc2tEZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gIHRhc2tEdWVEYXRlRGl2LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlLnRvRGF0ZVN0cmluZygpO1xuXG4gIGNoZWNrYm94TGFiZWwuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcbiAgY2hlY2tib3hMYWJlbC5hcHBlbmRDaGlsZCh0cmFuc2l0aW9uRGl2KTtcblxuICByb3cxLmFwcGVuZENoaWxkKGNoZWNrYm94TGFiZWwpO1xuICByb3cxLmFwcGVuZENoaWxkKHRhc2tUaXRsZURpdik7XG4gIHJvdzEuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGVEaXYpO1xuICByb3cyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbkRpdik7XG5cbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChyb3cxKTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChyb3cyKTtcblxuICB0YXNrRGl2Lm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNoZWNrQm94XCIpIHx8XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0cmFuc2l0aW9uXCIpIHx8XG4gICAgICBlLnRhcmdldC50eXBlID09PSBcImNoZWNrYm94XCJcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiY2xpY2tlZFwiKTtcbiAgfTtcblxuICByZXR1cm4gdGFza0Rpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZVRhc2tMaXN0ID0gKCkgPT4ge1xuICBsZXQgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrc0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza3NcIik7XG4gIGN1cnJlbnRQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tzKCkpIHtcbiAgICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2sodGFzaykpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRhc2tzRGl2O1xufTtcblxuY29uc3QgY3JlYXRlT3BlcmF0aW9uQnV0dG9ucyA9ICgpID0+IHtcbiAgbGV0IG9wZXJhdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCBjbGVhckNvbXBsZXRlZFRhc2tzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IGNsZWFyQWxsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IGRlbGV0ZUxpc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgc2F2ZUxpc3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBvcGVyYXRpb25CdXR0b25zLmNsYXNzTGlzdC5hZGQoXCJvcGVyYXRpb25CdXR0b25zXCIpO1xuICBuZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJvcGVyYXRpb25CdXR0b25cIik7XG4gIGNsZWFyQ29tcGxldGVkVGFza3NCdXR0b24uY2xhc3NMaXN0LmFkZChcIm9wZXJhdGlvbkJ1dHRvblwiKTtcbiAgY2xlYXJBbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcIm9wZXJhdGlvbkJ1dHRvblwiKTtcbiAgZGVsZXRlTGlzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwib3BlcmF0aW9uQnV0dG9uXCIpO1xuICBzYXZlTGlzdHMuY2xhc3NMaXN0LmFkZChcIm9wZXJhdGlvbkJ1dHRvblwiKTtcblxuICBuZXdUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJOZXcgVGFza1wiO1xuICBjbGVhckNvbXBsZXRlZFRhc2tzQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbGVhciBDb21wbGV0ZWRcIjtcbiAgY2xlYXJBbGxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNsZWFyIEFsbFwiO1xuICBkZWxldGVMaXN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGUgTGlzdFwiO1xuICBzYXZlTGlzdHMudGV4dENvbnRlbnQgPSBcIlNhdmUgTGlzdHNcIjtcblxuICBuZXdUYXNrQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgbGV0IGFsbFByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGxcIik7XG4gICAgaWYgKGFsbFByb2plY3RzQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBjaG9vc2UgYSB0YXNrIGxpc3RcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdUYXNrXCIpO1xuICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICB9O1xuXG4gIGNsZWFyQ29tcGxldGVkVGFza3NCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICBjdXJyZW50UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5jbGVhckNvbXBsZXRlZCgpO1xuICAgIH0pO1xuICAgIHVwZGF0ZVRhc2tMaXN0KCk7XG4gIH07XG5cbiAgY2xlYXJBbGxCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICBjdXJyZW50UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5jbGVhckFsbCgpO1xuICAgIH0pO1xuICAgIHVwZGF0ZVRhc2tMaXN0KCk7XG4gIH07XG5cbiAgZGVsZXRlTGlzdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGxldCBhbGxQcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsXCIpO1xuICAgIGlmIChhbGxQcm9qZWN0c0J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgY2hvb3NlIGEgdGFzayBsaXN0XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhbGxQcm9qZWN0cy5zcGxpY2UoYWxsUHJvamVjdHMuaW5kZXhPZihjdXJyZW50UHJvamVjdHNbMF0pLCAxKTtcbiAgICBjdXJyZW50UHJvamVjdHMgPSBhbGxQcm9qZWN0cztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkXCIpLnJlbW92ZSgpO1xuICAgIGFsbFByb2plY3RzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB1cGRhdGVUYXNrTGlzdCgpO1xuICB9O1xuXG4gIHNhdmVMaXN0cy5vbmNsaWNrID0gKCkgPT4ge1xuICAgIHNhdmVQcm9qZWN0cyhhbGxQcm9qZWN0cyk7XG4gICAgYWxlcnQoXCJTYXZlZCBhbGwgdGFza3MgbG9jYWxseSFcIik7XG4gIH07XG5cbiAgb3BlcmF0aW9uQnV0dG9ucy5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9uKTtcbiAgb3BlcmF0aW9uQnV0dG9ucy5hcHBlbmRDaGlsZChjbGVhckNvbXBsZXRlZFRhc2tzQnV0dG9uKTtcbiAgb3BlcmF0aW9uQnV0dG9ucy5hcHBlbmRDaGlsZChjbGVhckFsbEJ1dHRvbik7XG4gIG9wZXJhdGlvbkJ1dHRvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlTGlzdEJ1dHRvbik7XG4gIG9wZXJhdGlvbkJ1dHRvbnMuYXBwZW5kQ2hpbGQoc2F2ZUxpc3RzKTtcblxuICByZXR1cm4gb3BlcmF0aW9uQnV0dG9ucztcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbnRlbnQgPSAoKSA9PiB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tMaXN0KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU9wZXJhdGlvbkJ1dHRvbnMoKSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVNb2RhbCA9ICgpID0+IHtcbiAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgbW9kYWwuaWQgPSBcIm5ld1Rhc2tcIjtcbiAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsQ29udGFpbmVyXCIpO1xuXG4gIGxldCB0YXNrVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGV0IHRhc2tEZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsZXQgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsZXQgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICB0YXNrVGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGVcIjtcbiAgdGFza0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG4gIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIG9uXCI7XG4gIGNyZWF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCI7XG5cbiAgbGV0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBsZXQgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gIGNyZWF0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2tUaXRsZUlucHV0LnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWVBc0RhdGU7XG4gICAgbGV0IHRhc2sgPSBuZXcgVGFzayh0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZSk7XG4gICAgY3VycmVudFByb2plY3RzWzBdLmFwcGVuZCh0YXNrKTtcbiAgICB1cGRhdGVUYXNrTGlzdCgpO1xuICAgIG1vZGFsLmNsb3NlKCk7XG4gIH07XG5cbiAgdGFza1RpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGFza1RpdGxlSW5wdXQpO1xuICB0YXNrRGVzY3JpcHRpb25MYWJlbC5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25JbnB1dCk7XG4gIGR1ZURhdGVMYWJlbC5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuXG4gIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZUxhYmVsKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uTGFiZWwpO1xuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24pO1xuXG4gIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKTtcblxuICByZXR1cm4gbW9kYWw7XG59O1xuXG5jb25zdCBpbml0RE9NID0gKCkgPT4ge1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb250ZW50KCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTW9kYWwoKSk7XG59O1xuXG5pbml0RE9NKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
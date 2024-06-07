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

/***/ "./src/AboutContentController.js":
/*!***************************************!*\
  !*** ./src/AboutContentController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AboutContentController: () => (/* binding */ AboutContentController)\n/* harmony export */ });\nconst AboutContentController = () => {\n    let contentContainer = document.querySelector(\"#content\");\n    contentContainer.innerHTML = \"\";\n    let image = document.createElement(\"img\");\n    let headline = document.createElement(\"div\");\n    let bodyText = document.createElement(\"div\");\n    image.src = \"../src/chad-montano-eeqbbemH9-c-unsplash.jpg\";\n    image.style = \"width: 100%; height: 100%\";\n    headline.textContent = \"About the Restaurant\";\n    bodyText.textContent = \"About section text\"\n    contentContainer.appendChild(image);\n    contentContainer.appendChild(headline);\n    contentContainer.appendChild(bodyText);\n};\n\n\n\n//# sourceURL=webpack://odin-restaurant--page/./src/AboutContentController.js?");

/***/ }),

/***/ "./src/HomeContentController.js":
/*!**************************************!*\
  !*** ./src/HomeContentController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomeContentController: () => (/* binding */ HomeContentController)\n/* harmony export */ });\nconst HomeContentController = () => {\n    let contentContainer = document.querySelector(\"#content\");\n    contentContainer.innerHTML = \"\";\n    let image = document.createElement(\"img\");\n    let headline = document.createElement(\"div\");\n    let bodyText = document.createElement(\"div\");\n    image.src = \"../src/chad-montano-eeqbbemH9-c-unsplash.jpg\";\n    image.style = \"width: 100%; height: 100%\";\n    headline.textContent = \"Restaurant Headline\";\n    bodyText.textContent = \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque totam rerum sapiente eligendi. Repudiandae dolor error explicabo recusandae sapiente, sequi enim ipsam eaque hic esse totam blanditiis nobis adipisci perferendis.\"\n    contentContainer.appendChild(image);\n    contentContainer.appendChild(headline);\n    contentContainer.appendChild(bodyText);\n};\n\n\n\n//# sourceURL=webpack://odin-restaurant--page/./src/HomeContentController.js?");

/***/ }),

/***/ "./src/MenuContentController.js":
/*!**************************************!*\
  !*** ./src/MenuContentController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuContentController: () => (/* binding */ MenuContentController)\n/* harmony export */ });\nconst MenuContentController = () => {\n    let contentContainer = document.querySelector(\"#content\");\n    contentContainer.innerHTML = \"\";\n    let image = document.createElement(\"img\");\n    let headline = document.createElement(\"div\");\n    let bodyText = document.createElement(\"div\");\n    image.src = \"../src/chad-montano-eeqbbemH9-c-unsplash.jpg\";\n    image.style = \"width: 100%; height: 100%\";\n    headline.textContent = \"Menu\";\n    bodyText.textContent = \"Menu items, Menu items, Menu items\"\n    contentContainer.appendChild(image);\n    contentContainer.appendChild(headline);\n    contentContainer.appendChild(bodyText);\n};\n\n\n\n//# sourceURL=webpack://odin-restaurant--page/./src/MenuContentController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HomeContentController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeContentController */ \"./src/HomeContentController.js\");\n/* harmony import */ var _MenuContentController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuContentController */ \"./src/MenuContentController.js\");\n/* harmony import */ var _AboutContentController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutContentController */ \"./src/AboutContentController.js\");\n\n\n\n    \n(0,_HomeContentController__WEBPACK_IMPORTED_MODULE_0__.HomeContentController)();\n\nlet homeBtn = document.querySelector(\"#home-btn\");\nlet menuBtn = document.querySelector(\"#menu-btn\");\nlet aboutBtn = document.querySelector(\"#about-btn\");\n\nhomeBtn.addEventListener(\"click\", _HomeContentController__WEBPACK_IMPORTED_MODULE_0__.HomeContentController);\nmenuBtn.addEventListener(\"click\", _MenuContentController__WEBPACK_IMPORTED_MODULE_1__.MenuContentController);\naboutBtn.addEventListener(\"click\", _AboutContentController__WEBPACK_IMPORTED_MODULE_2__.AboutContentController);\n\n\n\n\n\n\n//# sourceURL=webpack://odin-restaurant--page/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
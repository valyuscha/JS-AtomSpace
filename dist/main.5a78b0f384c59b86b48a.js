/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_home_work_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server/home-work-links */ \"./server/home-work-links.js\");\n/* harmony import */ var _server_other_projects_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server/other-projects-links */ \"./server/other-projects-links.js\");\n/* harmony import */ var _server_social_networks_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server/social-networks-links */ \"./server/social-networks-links.js\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar $homeworkList = document.getElementById('homework-list');\nvar $otherProjectsList = document.getElementById('other-projects-list');\nvar $socialsList = document.getElementById('socials-list');\nvar isHomeworkMenuOpened = false;\nvar isOtherProjectsMenuOpened = false;\nvar isSocialLinksOpened = false;\n\nvar openClose = function openClose(block, clicked, menu) {\n  if (menu) {\n    block.childNodes[1].childNodes[1].childNodes[1].classList.add('fa-angle-down');\n    block.childNodes[1].childNodes[1].childNodes[1].classList.remove('fa-angle-right');\n    clicked.closest('.section-wrapper').childNodes[3].classList.add('open');\n    clicked.closest('.section-wrapper').childNodes[3].classList.remove('close');\n  } else {\n    block.childNodes[1].childNodes[1].childNodes[1].classList.remove('fa-angle-down');\n    block.childNodes[1].childNodes[1].childNodes[1].classList.add('fa-angle-right');\n    clicked.closest('.section-wrapper').childNodes[3].classList.remove('open');\n    clicked.closest('.section-wrapper').childNodes[3].classList.add('close');\n  }\n};\n\ndocument.querySelectorAll('.section-wrapper').forEach(function (section) {\n  section.addEventListener('click', function (e) {\n    document.querySelectorAll('.section-wrapper').forEach(function (section) {\n      section.childNodes[3].classList.remove('open');\n      section.childNodes[3].classList.add('close');\n      section.childNodes[1].childNodes[1].childNodes[1].classList.remove('fa-angle-down');\n      section.childNodes[1].childNodes[1].childNodes[1].classList.add('fa-angle-right');\n    });\n\n    if (e.target.id === 'homework' || e.target.id === 'homework-angel') {\n      isHomeworkMenuOpened = !isHomeworkMenuOpened;\n      isOtherProjectsMenuOpened = false;\n      isSocialLinksOpened = false;\n      openClose(section, e.target, isHomeworkMenuOpened);\n    } else if (e.target.id === 'other-projects' || e.target.id === 'other-projects-angel') {\n      isOtherProjectsMenuOpened = !isOtherProjectsMenuOpened;\n      isHomeworkMenuOpened = false;\n      isSocialLinksOpened = false;\n      openClose(section, e.target, isOtherProjectsMenuOpened);\n    } else if (e.target.id === 'social-projects' || e.target.id === 'socials-angel') {\n      isSocialLinksOpened = !isSocialLinksOpened;\n      isHomeworkMenuOpened = false;\n      isOtherProjectsMenuOpened = false;\n      openClose(section, e.target, isSocialLinksOpened);\n    }\n  });\n});\n_server_home_work_links__WEBPACK_IMPORTED_MODULE_0__[\"homeWorkLinks\"].reverse().map(function (item) {\n  var link = \"\\n  <li class=\\\"homework-item\\\">\\n    <a class=\\\"homework-link\\\" href=\".concat(item.src, \" target=\\\"_blank\\\">\").concat(item.name, \"</a>\\n    <a class=\\\"homework-link\\\" href=\").concat(item.repoSrc, \" target=\\\"_blank\\\" style=\\\"margin: 0 10px; color: #00bc00;\\\">\").concat(item.repoName, \"</a>\\n  </li>\");\n  return $homeworkList.insertAdjacentHTML('afterbegin', link);\n});\n_server_other_projects_links__WEBPACK_IMPORTED_MODULE_1__[\"otherProjectsLinks\"].reverse().map(function (item) {\n  var link = \"\\n  <li class=\\\"homework-item\\\">\\n    <a class=\\\"homework-link\\\" href=\".concat(item.src, \" target=\\\"_blank\\\">\").concat(item.name, \"</a>\\n    <a class=\\\"homework-link\\\" href=\").concat(item.repoSrc, \" target=\\\"_blank\\\" style=\\\"margin: 0 10px; color: #00bc00;\\\">\").concat(item.repoName, \"</a>\\n  </li>\");\n  return $otherProjectsList.insertAdjacentHTML('afterbegin', link);\n});\n_server_social_networks_links__WEBPACK_IMPORTED_MODULE_2__[\"socialNetworksLinks\"].reverse().map(function (item) {\n  var link = \"\\n  <li class=\\\"homework-item\\\">\\n    <a class=\\\"homework-link\\\" href=\".concat(item.src, \" target=\\\"_blank\\\">\\n      <i class=\\\"\").concat(item.iconClasses.join(' '), \"\\\" style=\\\"color: \").concat(item.color, \"; font-size: 20px; margin-right: 5px;\\\"></i>\\n      \").concat(item.name, \"\\n    </a>\\n  </li>\");\n  return $socialsList.insertAdjacentHTML('afterbegin', link);\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./server/home-work-links.js":
/*!***********************************!*\
  !*** ./server/home-work-links.js ***!
  \***********************************/
/*! exports provided: homeWorkLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homeWorkLinks\", function() { return homeWorkLinks; });\nvar homeWorkLinks = [{\n  id: 1,\n  name: 'My Blog',\n  src: 'https://valyuscha.github.io/AtomSpace-Blog/',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/AtomSpace-Blog'\n}, {\n  id: 2,\n  name: 'Dice',\n  src: 'https://valyuscha.github.io/Dice/',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/Dice'\n}, {\n  id: 3,\n  name: 'Header Menu',\n  src: 'https://valyuscha.github.io/Menu/',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/Menu'\n}, {\n  id: 4,\n  name: 'Glint',\n  src: 'https://valyuscha.github.io/Glint/',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/Glint'\n}, {\n  id: 5,\n  name: 'Pictures',\n  src: 'https://valyuscha.github.io/Tree-picture/index',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/Tree-picture'\n}, {\n  id: 6,\n  name: 'Loaders',\n  src: 'https://valyuscha.github.io/Loaders/dist/',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/Loaders'\n}, {\n  id: 7,\n  name: 'Counter and object',\n  src: 'https://valyuscha.github.io/JS-AtomSpace/src/lessons/objectCounter/dist/index.html',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/JS-AtomSpace/tree/master/src/lessons/objectCounter'\n}, {\n  id: 8,\n  name: 'Cards of person and counter',\n  src: 'https://valyuscha.github.io/JS-AtomSpace/src/lessons/personCounterCard/dist/index.html',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/JS-AtomSpace/tree/master/src/lessons/personCounterCard'\n}, {\n  id: 9,\n  name: 'List/Counter/Timeout',\n  src: 'https://valyuscha.github.io/JS-AtomSpace/src/lessons/functionsArrays/dist/index.html',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/JS-AtomSpace/tree/master/src/lessons/functionsArrays'\n}, {\n  id: 10,\n  name: 'Api Practice',\n  src: 'https://valyuscha.github.io/JS-AtomSpace/src/lessons/apiPractice/dist/index.html',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/JS-AtomSpace/tree/master/src/lessons/apiPractice'\n}];\n\n//# sourceURL=webpack:///./server/home-work-links.js?");

/***/ }),

/***/ "./server/other-projects-links.js":
/*!****************************************!*\
  !*** ./server/other-projects-links.js ***!
  \****************************************/
/*! exports provided: otherProjectsLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"otherProjectsLinks\", function() { return otherProjectsLinks; });\nvar otherProjectsLinks = [{\n  id: 1,\n  name: 'Restaurant',\n  src: 'https://valyuscha.github.io/Restaurant/index.html',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/Restaurant'\n}, {\n  id: 2,\n  name: 'TestFdp',\n  src: 'https://testfdp-cb4ab.web.app/',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/AddUsersTest'\n}];\n\n//# sourceURL=webpack:///./server/other-projects-links.js?");

/***/ }),

/***/ "./server/social-networks-links.js":
/*!*****************************************!*\
  !*** ./server/social-networks-links.js ***!
  \*****************************************/
/*! exports provided: socialNetworksLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"socialNetworksLinks\", function() { return socialNetworksLinks; });\nvar socialNetworksLinks = [{\n  id: 1,\n  name: 'LinkedIn',\n  src: 'https://www.linkedin.com/in/valentine-sidorovskaya-8a10a3193/',\n  iconClasses: ['fab', 'fa-linkedin-in'],\n  color: '#4e64ff'\n}, {\n  id: 2,\n  name: 'GitHub',\n  src: 'https://github.com/valyuscha/',\n  iconClasses: ['fab', 'fa-github'],\n  color: '#ffffff'\n}];\n\n//# sourceURL=webpack:///./server/social-networks-links.js?");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/styles.scss?");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"../node_modules/@babel/polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./index.js?");

/***/ })

/******/ });
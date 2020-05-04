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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_home_work_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server/home-work-links */ \"./server/home-work-links.js\");\n/* harmony import */ var _server_other_projects_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server/other-projects-links */ \"./server/other-projects-links.js\");\n/* harmony import */ var _server_social_networks_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server/social-networks-links */ \"./server/social-networks-links.js\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar $homeworkList = document.getElementById('homework-list');\nvar $otherProjectsList = document.getElementById('other-projects-list');\nvar $socialsList = document.getElementById('socials-list');\nvar isHomeworkMenuOpened = false;\nvar isOtherProjectsMenuOpened = false;\nvar isSocialLinksOpened = false;\n\nvar openClose = function openClose(block, clicked, menu) {\n  if (menu) {\n    block.childNodes[1].childNodes[1].childNodes[1].classList.add('fa-angle-down');\n    block.childNodes[1].childNodes[1].childNodes[1].classList.remove('fa-angle-right');\n    clicked.closest('.section-wrapper').childNodes[3].classList.add('open');\n    clicked.closest('.section-wrapper').childNodes[3].classList.remove('close');\n  } else {\n    block.childNodes[1].childNodes[1].childNodes[1].classList.remove('fa-angle-down');\n    block.childNodes[1].childNodes[1].childNodes[1].classList.add('fa-angle-right');\n    clicked.closest('.section-wrapper').childNodes[3].classList.remove('open');\n    clicked.closest('.section-wrapper').childNodes[3].classList.add('close');\n  }\n};\n\ndocument.querySelectorAll('.section-wrapper').forEach(function (section) {\n  section.addEventListener('click', function (e) {\n    document.querySelectorAll('.section-wrapper').forEach(function (section) {\n      section.childNodes[3].classList.remove('open');\n      section.childNodes[3].classList.add('close');\n      console.log(section.childNodes[1].childNodes[1].childNodes[1]);\n      section.childNodes[1].childNodes[1].childNodes[1].classList.remove('fa-angle-down');\n      section.childNodes[1].childNodes[1].childNodes[1].classList.add('fa-angle-right');\n      console.log('Remove', section.childNodes[1].childNodes[1].firstChild);\n    });\n    console.log('Id', e.target.id);\n    console.log('Section', section);\n\n    if (e.target.id === 'homework') {\n      isHomeworkMenuOpened = !isHomeworkMenuOpened;\n      isOtherProjectsMenuOpened = false;\n      isSocialLinksOpened = false;\n      openClose(section, e.target, isHomeworkMenuOpened);\n    } else if (e.target.id === 'other-projects') {\n      isOtherProjectsMenuOpened = !isOtherProjectsMenuOpened;\n      isHomeworkMenuOpened = false;\n      isSocialLinksOpened = false;\n      openClose(section, e.target, isOtherProjectsMenuOpened);\n    } else if (e.target.id === 'social-projects') {\n      isSocialLinksOpened = !isSocialLinksOpened;\n      isHomeworkMenuOpened = false;\n      isOtherProjectsMenuOpened = false;\n      openClose(section, e.target, isSocialLinksOpened);\n      console.log(section.childNodes[1].childNodes[1].firstChild);\n    }\n  });\n});\n_server_home_work_links__WEBPACK_IMPORTED_MODULE_0__[\"homeWorkLinks\"].reverse().map(function (item) {\n  var link = \"\\n  <li class=\\\"homework-item\\\">\\n    <a class=\\\"homework-link\\\" href=\".concat(item.src, \" target=\\\"_blank\\\">\").concat(item.name, \"</a>\\n    <a class=\\\"homework-link\\\" href=\").concat(item.repoSrc, \" target=\\\"_blank\\\" style=\\\"margin: 0 20px 0 10px; color: #00bc00;\\\">\").concat(item.repoName, \"</a>\\n  </li>\");\n  return $homeworkList.insertAdjacentHTML('afterbegin', link);\n});\n_server_other_projects_links__WEBPACK_IMPORTED_MODULE_1__[\"otherProjectsLinks\"].reverse().map(function (item) {\n  var link = \"\\n  <li class=\\\"homework-item\\\">\\n    <a class=\\\"homework-link\\\" href=\".concat(item.src, \" target=\\\"_blank\\\">\").concat(item.name, \"</a>\\n    <a class=\\\"homework-link\\\" href=\").concat(item.repoSrc, \" target=\\\"_blank\\\" style=\\\"margin: 0 20px 0 10px; color: #00bc00;\\\">\").concat(item.repoName, \"</a>\\n  </li>\");\n  return $otherProjectsList.insertAdjacentHTML('afterbegin', link);\n});\n_server_social_networks_links__WEBPACK_IMPORTED_MODULE_2__[\"socialNetworksLinks\"].reverse().map(function (item) {\n  var link = \"\\n  <li class=\\\"homework-item\\\">\\n    <a class=\\\"homework-link\\\" href=\".concat(item.src, \" target=\\\"_blank\\\">\").concat(item.name, \"</a>\\n  </li>\");\n  return $socialsList.insertAdjacentHTML('afterbegin', link);\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./server/home-work-links.js":
/*!***********************************!*\
  !*** ./server/home-work-links.js ***!
  \***********************************/
/*! exports provided: homeWorkLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homeWorkLinks\", function() { return homeWorkLinks; });\nvar homeWorkLinks = [{\n  id: 1,\n  name: '1. My Blog',\n  src: 'https://valyuscha.github.io/AtomSpace-Blog/',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/AtomSpace-Blog'\n}, {\n  id: 2,\n  name: '2. Dice',\n  src: 'https://valyuscha.github.io/Dice/',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/Dice'\n}, {\n  id: 3,\n  name: '3. Header Menu',\n  src: 'https://valyuscha.github.io/Menu/',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/Menu'\n}, {\n  id: 4,\n  name: '4. Glint',\n  src: 'https://valyuscha.github.io/Glint/',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/Glint'\n}, {\n  id: 5,\n  name: '5. Pictures',\n  src: 'https://valyuscha.github.io/Tree-picture/index',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/Tree-picture'\n}, {\n  id: 6,\n  name: '6. Loaders',\n  src: 'https://valyuscha.github.io/Loaders/dist/',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/Loaders'\n}, {\n  id: 7,\n  name: '7. Counter and object',\n  src: 'https://valyuscha.github.io/JS-AtomSpace/src/lessons/lesson1/dist/index.html',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/JS-AtomSpace/tree/master/src/lessons/lesson1'\n}];\n\n//# sourceURL=webpack:///./server/home-work-links.js?");

/***/ }),

/***/ "./server/other-projects-links.js":
/*!****************************************!*\
  !*** ./server/other-projects-links.js ***!
  \****************************************/
/*! exports provided: otherProjectsLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"otherProjectsLinks\", function() { return otherProjectsLinks; });\nvar otherProjectsLinks = [{\n  id: 1,\n  name: '1. Restaurant',\n  src: 'https://valyuscha.github.io/Restaurant/index.html',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/Restaurant'\n}, {\n  id: 2,\n  name: '2. TestFdp',\n  src: 'https://testfdp-cb4ab.web.app/',\n  repoName: '(repository link)',\n  repoSrc: 'https://github.com/valyuscha/AddUsersTest'\n}];\n\n//# sourceURL=webpack:///./server/other-projects-links.js?");

/***/ }),

/***/ "./server/social-networks-links.js":
/*!*****************************************!*\
  !*** ./server/social-networks-links.js ***!
  \*****************************************/
/*! exports provided: socialNetworksLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"socialNetworksLinks\", function() { return socialNetworksLinks; });\nvar socialNetworksLinks = [{\n  id: 1,\n  name: 'LinkedIn',\n  src: 'https://www.linkedin.com/in/valentine-sidorovskaya-8a10a3193/'\n}, {\n  id: 2,\n  name: 'GitHub',\n  src: 'https://github.com/valyuscha/'\n}];\n\n//# sourceURL=webpack:///./server/social-networks-links.js?");

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ../node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ../node_modules/sass-loader/dist/cjs.js):\\nSassError: expected \\\"{\\\".\\n    ╷\\n119 │   transition(transform );\\r\\n    │                         ^\\n    ╵\\n  D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\src\\\\styles\\\\styles.scss 119:25  root stylesheet\\n    at D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at context.callback (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:111:13)\\n    at D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:73:7\\n    at Function.call$2 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:87203:16)\\n    at _render_closure1.call$2 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:76994:12)\\n    at _RootZone.runBinary$3$3 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:25521:18)\\n    at _RootZone.runBinary$3 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:25525:19)\\n    at _FutureListener.handleError$1 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:23975:19)\\n    at _Future__propagateToListeners_handleError.call$0 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:24271:40)\\n    at Object._Future__propagateToListeners (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:3500:88)\\n    at _Future._completeError$2 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:24099:9)\\n    at _AsyncAwaitCompleter.completeError$2 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:23491:12)\\n    at Object._asyncRethrow (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:3256:17)\\n    at D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:13326:20\\n    at _wrapJsFunctionForAsync_closure.$protected (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:3279:15)\\n    at _wrapJsFunctionForAsync_closure.call$2 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:23512:12)\\n    at _awaitOnObject_closure0.call$2 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:23504:25)\\n    at _RootZone.runBinary$3$3 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:25521:18)\\n    at _RootZone.runBinary$3 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:25525:19)\\n    at _FutureListener.handleError$1 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:23975:19)\\n    at _Future__propagateToListeners_handleError.call$0 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:24271:40)\\n    at Object._Future__propagateToListeners (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:3500:88)\\n    at _Future._completeError$2 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:24099:9)\\n    at _Future__asyncCompleteError_closure.call$0 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:24194:18)\\n    at Object._microtaskLoop (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:3550:21)\\n    at StaticClosure._startMicrotaskLoop (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:3556:11)\\n    at _AsyncRun__scheduleImmediateJsOverride_internalCallback.call$0 (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:23409:21)\\n    at invokeClosure (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\sass\\\\sass.dart.js:1360:26)\");\n\n//# sourceURL=webpack:///./styles/styles.scss?");

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
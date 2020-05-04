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
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ../node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\src\\\\index.js: Unexpected token, expected \\\";\\\" (83:14)\\n\\n\\u001b[0m \\u001b[90m 81 | \\u001b[39m  let link \\u001b[33m=\\u001b[39m \\u001b[32m`\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 82 | \\u001b[39m\\u001b[32m  <li class=\\\"homework-item\\\">\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 83 | \\u001b[39m\\u001b[32m    <i class=`\\u001b[39m${item\\u001b[33m.\\u001b[39miconClasses\\u001b[33m.\\u001b[39mjoin(\\u001b[32m' '\\u001b[39m)}\\u001b[32m`></i>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m              \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 84 | \\u001b[39m\\u001b[32m    <a class=\\\"homework-link\\\" href=${item.src} target=\\\"_blank\\\">${item.name}</a>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 85 | \\u001b[39m\\u001b[32m  </li>`\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 86 | \\u001b[39m  \\u001b[36mreturn\\u001b[39m $socialsList\\u001b[33m.\\u001b[39minsertAdjacentHTML(\\u001b[32m'afterbegin'\\u001b[39m\\u001b[33m,\\u001b[39m link)\\u001b[0m\\n    at Parser._raise (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:742:17)\\n    at Parser.raiseWithData (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:735:17)\\n    at Parser.raise (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:729:17)\\n    at Parser.unexpected (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8757:16)\\n    at Parser.semicolon (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8739:40)\\n    at Parser.parseVarStatement (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11550:10)\\n    at Parser.parseStatementContent (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11148:21)\\n    at Parser.parseStatement (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11081:17)\\n    at Parser.parseBlockOrModuleBlockBody (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11656:25)\\n    at Parser.parseBlockBody (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11642:10)\\n    at Parser.parseBlock (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11626:10)\\n    at Parser.parseFunctionBody (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10634:24)\\n    at Parser.parseArrowExpression (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10603:10)\\n    at Parser.parseExprAtom (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9900:18)\\n    at Parser.parseExprSubscripts (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9602:23)\\n    at Parser.parseMaybeUnary (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9582:21)\\n    at Parser.parseExprOps (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9452:23)\\n    at Parser.parseMaybeConditional (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9425:23)\\n    at Parser.parseMaybeAssign (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9380:21)\\n    at Parser.parseExprListItem (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10718:18)\\n    at Parser.parseCallExpressionArguments (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9790:22)\\n    at Parser.parseSubscript (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9696:31)\\n    at Parser.parseSubscripts (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9625:19)\\n    at Parser.parseExprSubscripts (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9608:17)\\n    at Parser.parseMaybeUnary (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9582:21)\\n    at Parser.parseExprOps (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9452:23)\\n    at Parser.parseMaybeConditional (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9425:23)\\n    at Parser.parseMaybeAssign (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9380:21)\\n    at Parser.parseExpression (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9332:23)\\n    at Parser.parseStatementContent (D:\\\\Acer Extenza 5620\\\\Диск D\\\\valentina\\\\Atom Space\\\\My project\\\\js\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11210:23)\");\n\n//# sourceURL=webpack:///./index.js?");

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
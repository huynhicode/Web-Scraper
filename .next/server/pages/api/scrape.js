module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/scrape.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/scrape.js":
/*!*****************************!*\
  !*** ./pages/api/scrape.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nfunction scrape(req, res) {\n  if (req.method === \"POST\") {\n    const urls = req.body;\n    const cleanedUrls = urls.split(\",\").map(rawUrl => {\n      const url = rawUrl.trim();\n\n      if (url.startsWith(\"http\")) {\n        return url;\n      }\n\n      return \"https://\".concat(url);\n    });\n    const promiseArray = cleanedUrls.map(url => axios__WEBPACK_IMPORTED_MODULE_0___default()(url));\n    const combinedPromise = Promise.allSettled(promiseArray);\n    combinedPromise.then(allResults => {\n      const formattedResponse = allResults.map((result, index) => {\n        var _result$value, _result$reason;\n\n        return {\n          url: cleanedUrls[index],\n          html: (_result$value = result.value) === null || _result$value === void 0 ? void 0 : _result$value.data,\n          error: (_result$reason = result.reason) === null || _result$reason === void 0 ? void 0 : _result$reason.message\n        };\n      });\n      res.json(formattedResponse);\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scrape);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2NyYXBlLmpzPzM1YmEiXSwibmFtZXMiOlsic2NyYXBlIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXJscyIsImJvZHkiLCJjbGVhbmVkVXJscyIsInNwbGl0IiwibWFwIiwicmF3VXJsIiwidXJsIiwidHJpbSIsInN0YXJ0c1dpdGgiLCJjb25jYXQiLCJwcm9taXNlQXJyYXkiLCJheGlvcyIsImNvbWJpbmVkUHJvbWlzZSIsIlByb21pc2UiLCJhbGxTZXR0bGVkIiwidGhlbiIsImFsbFJlc3VsdHMiLCJmb3JtYXR0ZWRSZXNwb25zZSIsInJlc3VsdCIsImluZGV4IiwiaHRtbCIsInZhbHVlIiwiZGF0YSIsImVycm9yIiwicmVhc29uIiwibWVzc2FnZSIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCO0FBQ3hCLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFqQjtBQUVBLFVBQU1DLFdBQVcsR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVcsR0FBWCxFQUFnQkMsR0FBaEIsQ0FBcUJDLE1BQUQsSUFBWTtBQUNsRCxZQUFNQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsSUFBUCxFQUFaOztBQUNBLFVBQUlELEdBQUcsQ0FBQ0UsVUFBSixDQUFlLE1BQWYsQ0FBSixFQUE0QjtBQUMxQixlQUFPRixHQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxXQUFXRyxNQUFYLENBQWtCSCxHQUFsQixDQUFQO0FBQ0QsS0FObUIsQ0FBcEI7QUFRQSxVQUFNSSxZQUFZLEdBQUdSLFdBQVcsQ0FBQ0UsR0FBWixDQUFpQkUsR0FBRCxJQUFTSyw0Q0FBSyxDQUFDTCxHQUFELENBQTlCLENBQXJCO0FBRUEsVUFBTU0sZUFBZSxHQUFHQyxPQUFPLENBQUNDLFVBQVIsQ0FBbUJKLFlBQW5CLENBQXhCO0FBRUFFLG1CQUFlLENBQUNHLElBQWhCLENBQXNCQyxVQUFELElBQWdCO0FBQ25DLFlBQU1DLGlCQUFpQixHQUFHRCxVQUFVLENBQUNaLEdBQVgsQ0FBZSxDQUFDYyxNQUFELEVBQVNDLEtBQVQ7QUFBQTs7QUFBQSxlQUFvQjtBQUMzRGIsYUFBRyxFQUFFSixXQUFXLENBQUNpQixLQUFELENBRDJDO0FBRTNEQyxjQUFJLG1CQUFFRixNQUFNLENBQUNHLEtBQVQsa0RBQUUsY0FBY0MsSUFGdUM7QUFHM0RDLGVBQUssb0JBQUVMLE1BQU0sQ0FBQ00sTUFBVCxtREFBRSxlQUFlQztBQUhxQyxTQUFwQjtBQUFBLE9BQWYsQ0FBMUI7QUFLQTNCLFNBQUcsQ0FBQzRCLElBQUosQ0FBU1QsaUJBQVQ7QUFDRCxLQVBEO0FBUUQ7QUFDRjs7QUFFY3JCLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3NjcmFwZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmZ1bmN0aW9uIHNjcmFwZShyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB1cmxzID0gcmVxLmJvZHk7XG5cbiAgICBjb25zdCBjbGVhbmVkVXJscyA9IHVybHMuc3BsaXQoXCIsXCIpLm1hcCgocmF3VXJsKSA9PiB7XG4gICAgICBjb25zdCB1cmwgPSByYXdVcmwudHJpbSgpO1xuICAgICAgaWYgKHVybC5zdGFydHNXaXRoKFwiaHR0cFwiKSkge1xuICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9cIi5jb25jYXQodXJsKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb21pc2VBcnJheSA9IGNsZWFuZWRVcmxzLm1hcCgodXJsKSA9PiBheGlvcyh1cmwpKTtcblxuICAgIGNvbnN0IGNvbWJpbmVkUHJvbWlzZSA9IFByb21pc2UuYWxsU2V0dGxlZChwcm9taXNlQXJyYXkpO1xuXG4gICAgY29tYmluZWRQcm9taXNlLnRoZW4oKGFsbFJlc3VsdHMpID0+IHtcbiAgICAgIGNvbnN0IGZvcm1hdHRlZFJlc3BvbnNlID0gYWxsUmVzdWx0cy5tYXAoKHJlc3VsdCwgaW5kZXgpID0+ICh7XG4gICAgICAgIHVybDogY2xlYW5lZFVybHNbaW5kZXhdLFxuICAgICAgICBodG1sOiByZXN1bHQudmFsdWU/LmRhdGEsXG4gICAgICAgIGVycm9yOiByZXN1bHQucmVhc29uPy5tZXNzYWdlLFxuICAgICAgfSkpO1xuICAgICAgcmVzLmpzb24oZm9ybWF0dGVkUmVzcG9uc2UpO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNjcmFwZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/scrape.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ })

/******/ });
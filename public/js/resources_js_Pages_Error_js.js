/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Error_js"],{

/***/ "./resources/js/Pages/Error.js":
/*!*************************************!*\
  !*** ./resources/js/Pages/Error.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n // import { usePage } from '@inertiajs/inertia-react';\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {\n  var status = _ref.status;\n  // const { status } = usePage();\n  var title = {\n    503: '503: Service Unavailable',\n    500: '500: Server Error',\n    404: '404: Page Not Found',\n    403: '403: Forbidden'\n  }[status];\n  var description = {\n    503: 'Sorry, we are doing some maintenance. Please check back soon.',\n    500: 'Whoops, something went wrong on our servers.',\n    404: 'Sorry, the page you are looking for could not be found.',\n    403: 'Sorry, you are forbidden from accessing this page.'\n  }[status];\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n    className: \"p-5 bg-indigo-800 text-indigo-100 min-h-screen flex justify-center items-center\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.default, {\n      title: title\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(\"div\", {\n      className: \"w-full max-w-md\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"h1\", {\n        className: \"text-3xl\",\n        children: title\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"p\", {\n        className: \"mt-3 text-lg leading-tight\",\n        children: description\n      })]\n    })]\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvRXJyb3IuanM/MDNkMiJdLCJuYW1lcyI6WyJzdGF0dXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Q0FFQTs7OztBQUVBLGlFQUFlLGdCQUFnQjtBQUFBLE1BQWJBLE1BQWEsUUFBYkEsTUFBYTtBQUMzQjtBQUVBLE1BQU1DLEtBQUssR0FBRztBQUNWLFNBQUssMEJBREs7QUFFVixTQUFLLG1CQUZLO0FBR1YsU0FBSyxxQkFISztBQUlWLFNBQUs7QUFKSyxJQUtaRCxNQUxZLENBQWQ7QUFPQSxNQUFNRSxXQUFXLEdBQUc7QUFDaEIsU0FBSywrREFEVztBQUVoQixTQUFLLDhDQUZXO0FBR2hCLFNBQUsseURBSFc7QUFJaEIsU0FBSztBQUpXLElBS2xCRixNQUxrQixDQUFwQjtBQU9BLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlGQUFmO0FBQUEsNEJBQ0ksdURBQUMsaURBQUQ7QUFBUSxXQUFLLEVBQUVDO0FBQWYsTUFESixlQUVJO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLFVBQWQ7QUFBQSxrQkFBMEJBO0FBQTFCLFFBREosZUFFSTtBQUFHLGlCQUFTLEVBQUMsNEJBQWI7QUFBQSxrQkFBMkNDO0FBQTNDLFFBRko7QUFBQSxNQUZKO0FBQUEsSUFESjtBQVNILENBMUJEIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL1BhZ2VzL0Vycm9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG4vLyBpbXBvcnQgeyB1c2VQYWdlIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IHN0YXR1cyB9KSA9PiB7XHJcbiAgICAvLyBjb25zdCB7IHN0YXR1cyB9ID0gdXNlUGFnZSgpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0ge1xyXG4gICAgICAgIDUwMzogJzUwMzogU2VydmljZSBVbmF2YWlsYWJsZScsXHJcbiAgICAgICAgNTAwOiAnNTAwOiBTZXJ2ZXIgRXJyb3InLFxyXG4gICAgICAgIDQwNDogJzQwNDogUGFnZSBOb3QgRm91bmQnLFxyXG4gICAgICAgIDQwMzogJzQwMzogRm9yYmlkZGVuJ1xyXG4gICAgfVtzdGF0dXNdO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0ge1xyXG4gICAgICAgIDUwMzogJ1NvcnJ5LCB3ZSBhcmUgZG9pbmcgc29tZSBtYWludGVuYW5jZS4gUGxlYXNlIGNoZWNrIGJhY2sgc29vbi4nLFxyXG4gICAgICAgIDUwMDogJ1dob29wcywgc29tZXRoaW5nIHdlbnQgd3Jvbmcgb24gb3VyIHNlcnZlcnMuJyxcclxuICAgICAgICA0MDQ6ICdTb3JyeSwgdGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciBjb3VsZCBub3QgYmUgZm91bmQuJyxcclxuICAgICAgICA0MDM6ICdTb3JyeSwgeW91IGFyZSBmb3JiaWRkZW4gZnJvbSBhY2Nlc3NpbmcgdGhpcyBwYWdlLidcclxuICAgIH1bc3RhdHVzXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGJnLWluZGlnby04MDAgdGV4dC1pbmRpZ28tMTAwIG1pbi1oLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8SGVsbWV0IHRpdGxlPXt0aXRsZX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWRcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LWxnIGxlYWRpbmctdGlnaHRcIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/Pages/Error.js\n");

/***/ })

}]);
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/AuthenticationContext.js":
/*!******************************************!*\
  !*** ./context/AuthenticationContext.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthenticationProvider\": () => (/* binding */ AuthenticationProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/nick/Documents/Legion-Script/Reviews-DRF-NextJS/Tutorial/frontend/context/AuthenticationContext.js\";\n\n\n\nconst AuthenticationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthenticationProvider = ({\n  children\n}) => {\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const {\n    0: accessToken,\n    1: setAccessToken\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const {\n    0: error,\n    1: setError\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(); // Login User\n\n  const login = async ({\n    username,\n    password\n  }) => {\n    const config = {\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      }\n    };\n    const body = {\n      username,\n      password\n    };\n\n    try {\n      const {\n        data: accessResponse\n      } = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:3000/api/login', body, config);\n\n      if (accessResponse && accessResponse.user) {\n        setUser(accessResponse.user);\n      }\n\n      if (accessResponse && accessResponse.access) {\n        setAccessToken(accessResponse.access);\n      }\n\n      router.push('/');\n    } catch (error) {\n      if (error.response & error.response.data) {\n        setError(error.response.data.message);\n        return;\n      } else if (error.request) {\n        setError('Something went wrong');\n        return;\n      } else {\n        setError('Something went wrong');\n        return;\n      }\n\n      console.error('Error', error.message);\n      setError('Something went wrong');\n      return;\n    }\n  };\n\n  const register = async ({\n    username,\n    email,\n    password\n  }) => {\n    const config = {\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      }\n    };\n    const body = {\n      username,\n      email,\n      password\n    };\n\n    try {\n      // call nextjs api function to create a user\n      await axios__WEBPACK_IMPORTED_MODULE_2___default().post('http://localhost:3000/api/register', body, config);\n      login({\n        username,\n        password\n      });\n    } catch (error) {\n      if (error.response & error.response.data) {\n        setError(error.response.data.message);\n        return;\n      } else if (error.request) {\n        setError('Something went wrong');\n        return;\n      } else {\n        setError('Something went wrong');\n        return;\n      }\n\n      console.error('Error', error.message);\n      setError('Something went wrong');\n      return;\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthenticationContext.Provider, {\n    value: {\n      user,\n      accessToken,\n      error,\n      login,\n      register\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 3\n  }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthenticationContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLENBQUM7QUFBRUMsUUFBQUEsUUFBRjtBQUFZQyxRQUFBQTtBQUFaLE9BQUQsQ0FBTDtBQUNBLEtBSkQsQ0FJRSxPQUFNTCxLQUFOLEVBQWE7QUFDYixVQUFJQSxLQUFLLENBQUNjLFFBQU4sR0FBaUJkLEtBQUssQ0FBQ2MsUUFBTixDQUFlTCxJQUFwQyxFQUEwQztBQUN6Q1IsUUFBQUEsUUFBUSxDQUFDRCxLQUFLLENBQUNjLFFBQU4sQ0FBZUwsSUFBZixDQUFvQk0sT0FBckIsQ0FBUjtBQUNBO0FBQ0csT0FISixNQUdVLElBQUlmLEtBQUssQ0FBQ2dCLE9BQVYsRUFBbUI7QUFDM0JmLFFBQUFBLFFBQVEsQ0FBQyxzQkFBRCxDQUFSO0FBQ0E7QUFDRSxPQUhNLE1BR0E7QUFDWEEsUUFBQUEsUUFBUSxDQUFDLHNCQUFELENBQVI7QUFDQTtBQUNLOztBQUNEZ0IsTUFBQUEsT0FBTyxDQUFDakIsS0FBUixDQUFjLE9BQWQsRUFBdUJBLEtBQUssQ0FBQ2UsT0FBN0I7QUFDQWQsTUFBQUEsUUFBUSxDQUFDLHNCQUFELENBQVI7QUFDQTtBQUNKO0FBQ0QsR0FqQ0Q7O0FBbUNBLHNCQUNDLDhEQUFDLHFCQUFELENBQXVCLFFBQXZCO0FBQWdDLFNBQUssRUFBRTtBQUFFTCxNQUFBQSxJQUFGO0FBQVFFLE1BQUFBLFdBQVI7QUFBcUJFLE1BQUFBLEtBQXJCO0FBQTRCRyxNQUFBQSxLQUE1QjtBQUFtQ2UsTUFBQUE7QUFBbkMsS0FBdkM7QUFBQSxjQUNFdkI7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFLQSxDQTFGTTtBQTRGUCxpRUFBZUYscUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbnRleHQvQXV0aGVudGljYXRpb25Db250ZXh0LmpzPzU3NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBBdXRoZW50aWNhdGlvbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXG5cdGNvbnN0IFthY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW5dID0gdXNlU3RhdGUobnVsbClcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxuXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblx0Ly8gTG9naW4gVXNlclxuXHRjb25zdCBsb2dpbiA9IGFzeW5jKHt1c2VybmFtZSwgcGFzc3dvcmR9KSA9PiB7XG5cdFx0Y29uc3QgY29uZmlnID0ge1xuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgYm9keSA9IHtcblx0XHRcdHVzZXJuYW1lLFxuXHRcdFx0cGFzc3dvcmRcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgeyBkYXRhOmFjY2Vzc1Jlc3BvbnNlIH0gPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luJywgYm9keSwgY29uZmlnKVxuXHRcdFx0XG5cdFx0XHRpZiAoYWNjZXNzUmVzcG9uc2UgJiYgYWNjZXNzUmVzcG9uc2UudXNlcikge1xuXHRcdFx0XHRzZXRVc2VyKGFjY2Vzc1Jlc3BvbnNlLnVzZXIpXG5cdFx0XHR9XG5cblx0XHRcdGlmIChhY2Nlc3NSZXNwb25zZSAmJiBhY2Nlc3NSZXNwb25zZS5hY2Nlc3MpIHtcblx0XHRcdFx0c2V0QWNjZXNzVG9rZW4oYWNjZXNzUmVzcG9uc2UuYWNjZXNzKVxuXHRcdFx0fVxuXG5cdFx0XHRyb3V0ZXIucHVzaCgnLycpXG5cdFx0fSBjYXRjaChlcnJvcikge1xuXHRcdCAgaWYgKGVycm9yLnJlc3BvbnNlICYgZXJyb3IucmVzcG9uc2UuZGF0YSkge1xuXHRcdCAgXHRzZXRFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXG5cdFx0ICBcdHJldHVybiAgICAgIFxuXHQgICAgICB9IGVsc2UgaWYgKGVycm9yLnJlcXVlc3QpIHtcblx0XHQgICAgc2V0RXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nJylcblx0XHQgICAgcmV0dXJuICBcblx0ICAgICAgfSBlbHNlIHtcblx0XHRcdHNldEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXG5cdFx0XHRyZXR1cm5cblx0ICAgICAgfVxuXHQgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xuXHQgICAgICBzZXRFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKVxuXHQgICAgICByZXR1cm5cblx0XHR9XG5cdH1cblxuXHRjb25zdCByZWdpc3RlciA9IGFzeW5jICh7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSkgPT4ge1xuXHRcdGNvbnN0IGNvbmZpZyA9IHtcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGJvZHkgPSB7XG5cdFx0XHR1c2VybmFtZSxcblx0XHRcdGVtYWlsLFxuXHRcdFx0cGFzc3dvcmRcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Ly8gY2FsbCBuZXh0anMgYXBpIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHVzZXJcblx0XHRcdGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcmVnaXN0ZXInLCBib2R5LCBjb25maWcpXG5cdFx0XHRsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KVxuXHRcdH0gY2F0Y2goZXJyb3IpIHtcblx0XHQgIGlmIChlcnJvci5yZXNwb25zZSAmIGVycm9yLnJlc3BvbnNlLmRhdGEpIHtcblx0XHQgIFx0c2V0RXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxuXHRcdCAgXHRyZXR1cm4gICAgICBcblx0ICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG5cdFx0ICAgIHNldEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZycpXG5cdFx0ICAgIHJldHVybiAgXG5cdCAgICAgIH0gZWxzZSB7XG5cdFx0XHRzZXRFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcnKVxuXHRcdFx0cmV0dXJuXG5cdCAgICAgIH1cblx0ICAgICAgY29uc29sZS5lcnJvcignRXJyb3InLCBlcnJvci5tZXNzYWdlKTtcblx0ICAgICAgc2V0RXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nJylcblx0ICAgICAgcmV0dXJuXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8QXV0aGVudGljYXRpb25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGFjY2Vzc1Rva2VuLCBlcnJvciwgbG9naW4sIHJlZ2lzdGVyIH19PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvQXV0aGVudGljYXRpb25Db250ZXh0LlByb3ZpZGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhlbnRpY2F0aW9uQ29udGV4dCJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsIkF1dGhlbnRpY2F0aW9uQ29udGV4dCIsIkF1dGhlbnRpY2F0aW9uUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiYWNjZXNzVG9rZW4iLCJzZXRBY2Nlc3NUb2tlbiIsImVycm9yIiwic2V0RXJyb3IiLCJyb3V0ZXIiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maWciLCJoZWFkZXJzIiwiYm9keSIsImRhdGEiLCJhY2Nlc3NSZXNwb25zZSIsInBvc3QiLCJhY2Nlc3MiLCJwdXNoIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwicmVxdWVzdCIsImNvbnNvbGUiLCJyZWdpc3RlciIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/AuthenticationContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthenticationContext */ \"./context/AuthenticationContext.js\");\n\nvar _jsxFileName = \"/home/nick/Documents/Legion-Script/Reviews-DRF-NextJS/Tutorial/frontend/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    const jssStyles = document.querySelector('#jss-server-side');\n\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthenticationContext__WEBPACK_IMPORTED_MODULE_3__.AuthenticationProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNFLEtBQVQsQ0FBZTtBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBZixFQUF5QztBQUN2Q0osRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUssU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWxCOztBQUNBLFFBQUlGLFNBQUosRUFBZTtBQUNiQSxNQUFBQSxTQUFTLENBQUNHLGFBQVYsQ0FBd0JDLFdBQXhCLENBQW9DSixTQUFwQztBQUNEO0FBQ0YsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU1BLHNCQUNFLDhEQUFDLGtGQUFEO0FBQUEsMkJBQ0UsOERBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRUQsaUVBQWVGLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZDUzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Qcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvQXV0aGVudGljYXRpb25Db250ZXh0J1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJylcbiAgICBpZiAoanNzU3R5bGVzKSB7XG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpXG4gICAgfVxuICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8QXV0aGVudGljYXRpb25Qcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0F1dGhlbnRpY2F0aW9uUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJBdXRoZW50aWNhdGlvblByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
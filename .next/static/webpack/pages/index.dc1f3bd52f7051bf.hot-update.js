"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/traffic_light.tsx":
/*!*********************************!*\
  !*** ./pages/traffic_light.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _light_locate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./light_locate */ \"./pages/light_locate.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Light() {\n    _s();\n    var _s1 = $RefreshSig$();\n    //const Light = () => {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(_s1(()=>{\n        _s1();\n        const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n        (0,_light_locate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        // const jsonData = Light_locate();\n        // console.log(jsonData[0]);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            // jQuery를 사용하여 Ajax 요청 보내기\n            jquery__WEBPACK_IMPORTED_MODULE_2___default().ajax({\n                url: \"http://localhost:8080/light\",\n                type: \"GET\",\n                dataType: \"text\",\n                data: {\n                    apiKey: \"b2a72569-9548-4d0d-bd01-8fca5d2740df\",\n                    itstId: \"22904\",\n                    pageNo: \"1\",\n                    numOfRows: \"1\"\n                },\n                success: function(resp) {\n                    // 성공적으로 응답 받았을 때의 처리\n                    setResponse(resp);\n                    console.log(\"Response from server:\", resp);\n                },\n                error: function(error) {\n                    // 에러 발생 시의 처리\n                    console.error(\"Error during Ajax request:\", error);\n                }\n            });\n        }, []);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"resp\",\n            style: {\n                wordWrap: \"break-word\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Response from Server\"\n                }, void 0, false, {\n                    fileName: \"/Users/ieungyu/project/nextjs/CityLightTimer_fe/pages/traffic_light.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: response\n                }, void 0, false, {\n                    fileName: \"/Users/ieungyu/project/nextjs/CityLightTimer_fe/pages/traffic_light.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ieungyu/project/nextjs/CityLightTimer_fe/pages/traffic_light.tsx\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, this);\n    }, \"FVxjXEEMkPaF6l017bvN7v/A2x8=\"));\n}\n_s(Light, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Light;\n//export default Light;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Light);\nvar _c;\n$RefreshReg$(_c, \"Light\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90cmFmZmljX2xpZ2h0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ3JCO0FBQ21CO0FBQzFDLFNBQVNJOzs7SUFDVCx1QkFBdUI7SUFDckJILGdEQUFTQSxLQUFDOztRQUNSLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztRQUN6Q0cseURBQVlBO1FBQ1osbUNBQW1DO1FBQ25DLDRCQUE0QjtRQUU1QkYsZ0RBQVNBLENBQUM7WUFDTiwyQkFBMkI7WUFDM0JDLGtEQUFNLENBQUM7Z0JBQ0xNLEtBQUs7Z0JBQ0xDLE1BQU07Z0JBQ05DLFVBQVU7Z0JBQ1ZDLE1BQU07b0JBQ0pDLFFBQVE7b0JBQ1JDLFFBQVE7b0JBQ1JDLFFBQVE7b0JBQ1JDLFdBQVc7Z0JBQ2I7Z0JBQ0FDLFNBQVMsU0FBU0MsSUFBSTtvQkFDcEIscUJBQXFCO29CQUNyQlgsWUFBWVc7b0JBQ1pDLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJGO2dCQUN2QztnQkFDQUcsT0FBTyxTQUFTQSxLQUFLO29CQUNuQixjQUFjO29CQUNkRixRQUFRRSxLQUFLLENBQUMsOEJBQThCQTtnQkFDOUM7WUFDRjtRQUNGLEdBQUcsRUFBRTtRQUVMLHFCQUVFLDhEQUFDQztZQUFJQyxJQUFHO1lBQU9DLE9BQU87Z0JBQUVDLFVBQVU7WUFBYTs7OEJBQzNDLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDQzs4QkFBR3JCOzs7Ozs7Ozs7Ozs7SUFHZDtBQUNGO0dBeENTRDtLQUFBQTtBQXlDUCx1QkFBdUI7QUFDdkIsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHJhZmZpY19saWdodC50c3g/MzljMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBMaWdodF9sb2NhdGUgZnJvbSAnLi9saWdodF9sb2NhdGUnO1xuZnVuY3Rpb24gTGlnaHQoKSB7XG4vL2NvbnN0IExpZ2h0ID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGUoJycpXG4gICAgTGlnaHRfbG9jYXRlKCk7XG4gICAgLy8gY29uc3QganNvbkRhdGEgPSBMaWdodF9sb2NhdGUoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhqc29uRGF0YVswXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBqUXVlcnnrpbwg7IKs7Jqp7ZWY7JesIEFqYXgg7JqU7LKtIOuztOuCtOq4sFxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9saWdodCcsIC8vIOyalOyyrSDrs7TrgrwgVVJMXG4gICAgICAgICAgdHlwZTogJ0dFVCcsIC8vIEhUVFAg66mU7IaM65OcXG4gICAgICAgICAgZGF0YVR5cGU6ICd0ZXh0JywgLy8g7J2R64u1IOuNsOydtO2EsCDtg4DsnoVcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBhcGlLZXk6ICdiMmE3MjU2OS05NTQ4LTRkMGQtYmQwMS04ZmNhNWQyNzQwZGYnLFxuICAgICAgICAgICAgaXRzdElkOiAnMjI5MDQnLFxuICAgICAgICAgICAgcGFnZU5vOiAnMScsXG4gICAgICAgICAgICBudW1PZlJvd3M6ICcxJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcCkge1xuICAgICAgICAgICAgLy8g7ISx6rO17KCB7Jy866GcIOydkeuLtSDrsJvslZjsnYQg65WM7J2YIOyymOumrFxuICAgICAgICAgICAgc2V0UmVzcG9uc2UocmVzcCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2UgZnJvbSBzZXJ2ZXI6JywgcmVzcCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIOyXkOufrCDrsJzsg50g7Iuc7J2YIOyymOumrFxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIEFqYXggcmVxdWVzdDonLCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIFtdKTtcbiAgICBcbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBpZD1cInJlc3BcIiBzdHlsZT17eyB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnIH19PlxuICAgICAgICAgICAgPGgxPlJlc3BvbnNlIGZyb20gU2VydmVyPC9oMT5cbiAgICAgICAgICAgIDxwPntyZXNwb25zZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfSk7XG59XG4gIC8vZXhwb3J0IGRlZmF1bHQgTGlnaHQ7XG4gIGV4cG9ydCBkZWZhdWx0IExpZ2h0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIiQiLCJMaWdodF9sb2NhdGUiLCJMaWdodCIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2UiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGFUeXBlIiwiZGF0YSIsImFwaUtleSIsIml0c3RJZCIsInBhZ2VObyIsIm51bU9mUm93cyIsInN1Y2Nlc3MiLCJyZXNwIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZGl2IiwiaWQiLCJzdHlsZSIsIndvcmRXcmFwIiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/traffic_light.tsx\n"));

/***/ })

});
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

/***/ "./pages/light_locate.tsx":
/*!********************************!*\
  !*** ./pages/light_locate.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nfunction Light_locate() {\n    //let testData = fs.readFile('/Users/ieungyu/project/nextjs/CityLightTimer_fe/intersection.json', 'utf8');\n    const datas = __webpack_require__(/*! ../../../../../public/intersection.json */ \"./public/intersection.json\");\n    console.log(\"!!!!!!!!!!!!!\");\n    datas.forEach((item)=>{\n        console.log(item.itstId); // itstId 필드 출력\n    });\n// console.log(datas[0])\n//return testData;\n}\n_c = Light_locate;\n//export default Light;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Light_locate);\nvar _c;\n$RefreshReg$(_c, \"Light_locate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saWdodF9sb2NhdGUudHN4IiwibWFwcGluZ3MiOiI7QUFHQSxTQUFTQTtJQUVMLDBHQUEwRztJQUMxRyxNQUFNQyxRQUFRQyxtQkFBT0EsQ0FBQztJQUN0QkMsUUFBUUMsR0FBRyxDQUFDO0lBQ1pILE1BQU1JLE9BQU8sQ0FBQ0MsQ0FBQUE7UUFDVkgsUUFBUUMsR0FBRyxDQUFDRSxLQUFLQyxNQUFNLEdBQUcsZUFBZTtJQUM3QztBQUNBLHdCQUF3QjtBQUN4QixrQkFBa0I7QUFDdEI7S0FWU1A7QUFZUCx1QkFBdUI7QUFDdkIsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlnaHRfbG9jYXRlLnRzeD84NjY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmZ1bmN0aW9uIExpZ2h0X2xvY2F0ZSgpIHtcblxuICAgIC8vbGV0IHRlc3REYXRhID0gZnMucmVhZEZpbGUoJy9Vc2Vycy9pZXVuZ3l1L3Byb2plY3QvbmV4dGpzL0NpdHlMaWdodFRpbWVyX2ZlL2ludGVyc2VjdGlvbi5qc29uJywgJ3V0ZjgnKTtcbiAgICBjb25zdCBkYXRhcyA9IHJlcXVpcmUoJy9wdWJsaWMvaW50ZXJzZWN0aW9uLmpzb24nKVxuICAgIGNvbnNvbGUubG9nKFwiISEhISEhISEhISEhIVwiKVxuICAgIGRhdGFzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0uaXRzdElkKTsgLy8gaXRzdElkIO2VhOuTnCDstpzroKVcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhc1swXSlcbiAgICAvL3JldHVybiB0ZXN0RGF0YTtcbn1cblxuICAvL2V4cG9ydCBkZWZhdWx0IExpZ2h0O1xuICBleHBvcnQgZGVmYXVsdCBMaWdodF9sb2NhdGU7Il0sIm5hbWVzIjpbIkxpZ2h0X2xvY2F0ZSIsImRhdGFzIiwicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiaXRlbSIsIml0c3RJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/light_locate.tsx\n"));

/***/ })

});
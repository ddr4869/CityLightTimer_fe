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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nfunction Light_locate(map) {\n    //let testData = fs.readFile('/Users/ieungyu/project/nextjs/CityLightTimer_fe/intersection.json', 'utf8');\n    const datas = __webpack_require__(/*! ../../../../../public/intersection.json */ \"./public/intersection.json\");\n    console.log(\"!!!!!!!!!!!!!\");\n    // datas.forEach(item => {\n    //     console.log(item.itstId); // itstId 필드 출력\n    // });\n    const marker = new window.naver.maps.Marker({\n        position: new window.naver.maps.LatLng(37.5560943, 126.9342876),\n        map: map,\n        icon: {\n            url: \"light.png\",\n            size: new naver.maps.Size(500, 52),\n            scaledSize: new naver.maps.Size(40, 40),\n            origin: new naver.maps.Point(0, 0),\n            anchor: new naver.maps.Point(25, 26)\n        }\n    });\n}\n_c = Light_locate;\n//export default Light;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Light_locate);\nvar _c;\n$RefreshReg$(_c, \"Light_locate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saWdodF9sb2NhdGUudHN4IiwibWFwcGluZ3MiOiI7QUFHQSxTQUFTQSxhQUFhQyxHQUEwQjtJQUU1QywwR0FBMEc7SUFDMUcsTUFBTUMsUUFBUUMsbUJBQU9BLENBQUM7SUFDdEJDLFFBQVFDLEdBQUcsQ0FBQztJQUNaLDBCQUEwQjtJQUMxQixnREFBZ0Q7SUFDaEQsTUFBTTtJQUNOLE1BQU1DLFNBQVMsSUFBSUMsT0FBT0MsS0FBSyxDQUFDQyxJQUFJLENBQUNDLE1BQU0sQ0FBQztRQUN4Q0MsVUFBVSxJQUFJSixPQUFPQyxLQUFLLENBQUNDLElBQUksQ0FBQ0csTUFBTSxDQUFDLFlBQVk7UUFDbkRYLEtBQUtBO1FBQ0xZLE1BQU07WUFDSkMsS0FBSTtZQUNKQyxNQUFNLElBQUlQLE1BQU1DLElBQUksQ0FBQ08sSUFBSSxDQUFDLEtBQUs7WUFDL0JDLFlBQVksSUFBSVQsTUFBTUMsSUFBSSxDQUFDTyxJQUFJLENBQUMsSUFBRztZQUNuQ0UsUUFBUSxJQUFJVixNQUFNQyxJQUFJLENBQUNVLEtBQUssQ0FBQyxHQUFHO1lBQ2hDQyxRQUFRLElBQUlaLE1BQU1DLElBQUksQ0FBQ1UsS0FBSyxDQUFDLElBQUk7UUFDbkM7SUFDRjtBQUNOO0tBbkJTbkI7QUFxQlAsdUJBQXVCO0FBQ3ZCLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xpZ2h0X2xvY2F0ZS50c3g/ODY2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5mdW5jdGlvbiBMaWdodF9sb2NhdGUobWFwOiB3aW5kb3cubmF2ZXIubWFwcy5NYXApIHtcblxuICAgIC8vbGV0IHRlc3REYXRhID0gZnMucmVhZEZpbGUoJy9Vc2Vycy9pZXVuZ3l1L3Byb2plY3QvbmV4dGpzL0NpdHlMaWdodFRpbWVyX2ZlL2ludGVyc2VjdGlvbi5qc29uJywgJ3V0ZjgnKTtcbiAgICBjb25zdCBkYXRhcyA9IHJlcXVpcmUoJy9wdWJsaWMvaW50ZXJzZWN0aW9uLmpzb24nKVxuICAgIGNvbnNvbGUubG9nKFwiISEhISEhISEhISEhIVwiKVxuICAgIC8vIGRhdGFzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0uaXRzdElkKTsgLy8gaXRzdElkIO2VhOuTnCDstpzroKVcbiAgICAvLyB9KTtcbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgd2luZG93Lm5hdmVyLm1hcHMuTWFya2VyKHtcbiAgICAgICAgcG9zaXRpb246IG5ldyB3aW5kb3cubmF2ZXIubWFwcy5MYXRMbmcoMzcuNTU2MDk0MywgMTI2LjkzNDI4NzYpLFxuICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgIHVybDpcImxpZ2h0LnBuZ1wiLFxuICAgICAgICAgIHNpemU6IG5ldyBuYXZlci5tYXBzLlNpemUoNTAwLCA1MiksXG4gICAgICAgICAgc2NhbGVkU2l6ZTogbmV3IG5hdmVyLm1hcHMuU2l6ZSg0MCw0MCksXG4gICAgICAgICAgb3JpZ2luOiBuZXcgbmF2ZXIubWFwcy5Qb2ludCgwLCAwKSxcbiAgICAgICAgICBhbmNob3I6IG5ldyBuYXZlci5tYXBzLlBvaW50KDI1LCAyNilcbiAgICAgICAgfVxuICAgICAgfSk7XG59XG5cbiAgLy9leHBvcnQgZGVmYXVsdCBMaWdodDtcbiAgZXhwb3J0IGRlZmF1bHQgTGlnaHRfbG9jYXRlOyJdLCJuYW1lcyI6WyJMaWdodF9sb2NhdGUiLCJtYXAiLCJkYXRhcyIsInJlcXVpcmUiLCJjb25zb2xlIiwibG9nIiwibWFya2VyIiwid2luZG93IiwibmF2ZXIiLCJtYXBzIiwiTWFya2VyIiwicG9zaXRpb24iLCJMYXRMbmciLCJpY29uIiwidXJsIiwic2l6ZSIsIlNpemUiLCJzY2FsZWRTaXplIiwib3JpZ2luIiwiUG9pbnQiLCJhbmNob3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/light_locate.tsx\n"));

/***/ })

});
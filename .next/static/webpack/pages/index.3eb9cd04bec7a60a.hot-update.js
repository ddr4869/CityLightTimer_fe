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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nfunction Light_locate(map) {\n    //let testData = fs.readFile('/Users/ieungyu/project/nextjs/CityLightTimer_fe/intersection.json', 'utf8');\n    const datas = __webpack_require__(/*! ../../../../../public/intersection.json */ \"./public/intersection.json\");\n    console.log(\"!!!!!!!!!!!!!\");\n    console.log(mapCtptIntLot * 0.00000001);\n    datas.forEach((item)=>{\n        //console.log(item.itstId); // itstId 필드 출력\n        //console.log(10*item.mapCtptIntLat)\n        const marker = new window.naver.maps.Marker({\n            position: new window.naver.maps.LatLng(item.mapCtptIntLat * 0.00000001, item.mapCtptIntLot * 0.00000001),\n            map: map,\n            icon: {\n                url: \"light.png\",\n                size: new naver.maps.Size(500, 52),\n                scaledSize: new naver.maps.Size(40, 40),\n                origin: new naver.maps.Point(0, 0),\n                anchor: new naver.maps.Point(25, 26)\n            },\n            title: item.itstId\n        });\n    });\n}\n_c = Light_locate;\n//export default Light;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Light_locate);\nvar _c;\n$RefreshReg$(_c, \"Light_locate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saWdodF9sb2NhdGUudHN4IiwibWFwcGluZ3MiOiI7QUFJQSxTQUFTQSxhQUFhQyxHQUEwQjtJQUU1QywwR0FBMEc7SUFDMUcsTUFBTUMsUUFBUUMsbUJBQU9BLENBQUM7SUFDdEJDLFFBQVFDLEdBQUcsQ0FBQztJQUNaRCxRQUFRQyxHQUFHLENBQUNDLGdCQUFjO0lBQzFCSixNQUFNSyxPQUFPLENBQUNDLENBQUFBO1FBQ1YsMkNBQTJDO1FBQzNDLG9DQUFvQztRQUNwQyxNQUFNQyxTQUFTLElBQUlDLE9BQU9DLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUM7WUFDeENDLFVBQVUsSUFBSUosT0FBT0MsS0FBSyxDQUFDQyxJQUFJLENBQUNHLE1BQU0sQ0FBQ1AsS0FBS1EsYUFBYSxHQUFDLFlBQVlSLEtBQUtGLGFBQWEsR0FBQztZQUN6RkwsS0FBS0E7WUFDTGdCLE1BQU07Z0JBQ0pDLEtBQUk7Z0JBQ0pDLE1BQU0sSUFBSVIsTUFBTUMsSUFBSSxDQUFDUSxJQUFJLENBQUMsS0FBSztnQkFDL0JDLFlBQVksSUFBSVYsTUFBTUMsSUFBSSxDQUFDUSxJQUFJLENBQUMsSUFBRztnQkFDbkNFLFFBQVEsSUFBSVgsTUFBTUMsSUFBSSxDQUFDVyxLQUFLLENBQUMsR0FBRztnQkFDaENDLFFBQVEsSUFBSWIsTUFBTUMsSUFBSSxDQUFDVyxLQUFLLENBQUMsSUFBSTtZQUNuQztZQUNBRSxPQUFPakIsS0FBS2tCLE1BQU07UUFDcEI7SUFFTjtBQUNKO0tBdkJTMUI7QUF5QlAsdUJBQXVCO0FBQ3ZCLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xpZ2h0X2xvY2F0ZS50c3g/ODY2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmZ1bmN0aW9uIExpZ2h0X2xvY2F0ZShtYXA6IHdpbmRvdy5uYXZlci5tYXBzLk1hcCkge1xuXG4gICAgLy9sZXQgdGVzdERhdGEgPSBmcy5yZWFkRmlsZSgnL1VzZXJzL2lldW5neXUvcHJvamVjdC9uZXh0anMvQ2l0eUxpZ2h0VGltZXJfZmUvaW50ZXJzZWN0aW9uLmpzb24nLCAndXRmOCcpO1xuICAgIGNvbnN0IGRhdGFzID0gcmVxdWlyZSgnL3B1YmxpYy9pbnRlcnNlY3Rpb24uanNvbicpXG4gICAgY29uc29sZS5sb2coXCIhISEhISEhISEhISEhXCIpXG4gICAgY29uc29sZS5sb2cobWFwQ3RwdEludExvdCowLjAwMDAwMDAxKVxuICAgIGRhdGFzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIC8vY29uc29sZS5sb2coaXRlbS5pdHN0SWQpOyAvLyBpdHN0SWQg7ZWE65OcIOy2nOugpVxuICAgICAgICAvL2NvbnNvbGUubG9nKDEwKml0ZW0ubWFwQ3RwdEludExhdClcbiAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IHdpbmRvdy5uYXZlci5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IHdpbmRvdy5uYXZlci5tYXBzLkxhdExuZyhpdGVtLm1hcEN0cHRJbnRMYXQqMC4wMDAwMDAwMSwgaXRlbS5tYXBDdHB0SW50TG90KjAuMDAwMDAwMDEpLFxuICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICAgIHVybDpcImxpZ2h0LnBuZ1wiLFxuICAgICAgICAgICAgICBzaXplOiBuZXcgbmF2ZXIubWFwcy5TaXplKDUwMCwgNTIpLFxuICAgICAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgbmF2ZXIubWFwcy5TaXplKDQwLDQwKSxcbiAgICAgICAgICAgICAgb3JpZ2luOiBuZXcgbmF2ZXIubWFwcy5Qb2ludCgwLCAwKSxcbiAgICAgICAgICAgICAgYW5jaG9yOiBuZXcgbmF2ZXIubWFwcy5Qb2ludCgyNSwgMjYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0uaXRzdElkXG4gICAgICAgICAgfSk7XG5cbiAgICB9KTtcbn1cblxuICAvL2V4cG9ydCBkZWZhdWx0IExpZ2h0O1xuICBleHBvcnQgZGVmYXVsdCBMaWdodF9sb2NhdGU7Il0sIm5hbWVzIjpbIkxpZ2h0X2xvY2F0ZSIsIm1hcCIsImRhdGFzIiwicmVxdWlyZSIsImNvbnNvbGUiLCJsb2ciLCJtYXBDdHB0SW50TG90IiwiZm9yRWFjaCIsIml0ZW0iLCJtYXJrZXIiLCJ3aW5kb3ciLCJuYXZlciIsIm1hcHMiLCJNYXJrZXIiLCJwb3NpdGlvbiIsIkxhdExuZyIsIm1hcEN0cHRJbnRMYXQiLCJpY29uIiwidXJsIiwic2l6ZSIsIlNpemUiLCJzY2FsZWRTaXplIiwib3JpZ2luIiwiUG9pbnQiLCJhbmNob3IiLCJ0aXRsZSIsIml0c3RJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/light_locate.tsx\n"));

/***/ })

});
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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _traffic_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./traffic_light */ \"./pages/traffic_light.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n//import axios from 'axios';\nconst IndexPage = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        try {\n            //const geojson = require('./geo.json')\n            // const response = await axios.get('./geo.json');\n            // const geojson = response.data;\n            // 네이버 지도 API 스크립트 동적으로 로드\n            const script = document.createElement(\"script\");\n            script.src = \"https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=e27tyis8vn\";\n            script.async = true;\n            document.head.appendChild(script);\n            // 스크립트 로드 후 콜백 등록\n            script.onload = ()=>{\n                // 네이버 지도 초기화 및 표시\n                const mapOptions = {\n                    center: new window.naver.maps.LatLng(37.5560943, 126.9342876),\n                    //center: new window.naver.maps.LatLng(37.5995239, 126.9165965),\n                    zoom: 18\n                };\n                const map = new window.naver.maps.Map(\"map\", mapOptions);\n                // 마커 추가 예시\n                //   const datas = require('/public/intersection.json')\n                //   datas.forEach(item => {\n                //     console.log(item.itstId); // itstId 필드 출력\n                // });\n                const marker = new window.naver.maps.Marker({\n                    position: new window.naver.maps.LatLng(37.5560943, 126.9342876),\n                    map: map,\n                    icon: {\n                        url: \"light.png\",\n                        size: new naver.maps.Size(500, 52),\n                        scaledSize: new naver.maps.Size(40, 40),\n                        origin: new naver.maps.Point(0, 0),\n                        anchor: new naver.maps.Point(25, 26)\n                    }\n                });\n                // const marker2 = new window.naver.maps.Marker({\n                //   position: new window.naver.maps.LatLng(37.8560843, 126.9342876),\n                //   map: map,\n                //   icon: {\n                //     url:\"light.png\",\n                //     size: new naver.maps.Size(500, 52),\n                //     scaledSize: new naver.maps.Size(40,40),\n                //     origin: new naver.maps.Point(0, 0),\n                //     anchor: new naver.maps.Point(25, 26)\n                //   }\n                // });\n                const datas = __webpack_require__(/*! ../../../../../public/intersection.json */ \"./public/intersection.json\");\n                datas.forEach((item)=>{\n                    //console.log(item.itstId); // itstId 필드 출력\n                    console.log(Number(item.mapCtptIntLat * 0.00000001));\n                    const _ = new window.naver.maps.Marker({\n                        position: new window.naver.maps.LatLng(Number(item.mapCtptIntLat * 0.00000001), Number(item.mapCtptIntLot * 0.0000001)),\n                        map: map,\n                        icon: {\n                            url: \"light.png\",\n                            size: new naver.maps.Size(500, 52),\n                            scaledSize: new naver.maps.Size(40, 40),\n                            origin: new naver.maps.Point(0, 0),\n                            anchor: new naver.maps.Point(25, 26)\n                        },\n                        title: item.itstId\n                    });\n                });\n                // 클릭시 정보 창 예제\n                var menuLayer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<div style=\"position:absolute;z-index:10000;background-color:#fff;border:solid 1px #333;padding:10px;display:none;\"></div>');\n                map.getPanes().floatPane.appendChild(menuLayer[0]);\n                marker.addListener(\"click\", function(e) {\n                    var coordHtml = \"Coord: \" + \"(우 클릭 지점 위/경도 좌표)\" + \"<br />\" + \"Point: \" + e.point + \"<br />\" + \"Offset: \" + e.offset;\n                    menuLayer.show().css({\n                        position: \"absolute\",\n                        // left: marker.getPosition().x + \"px\", // x좌표\n                        // top: marker.getPosition().y + \"px\", // y좌표\n                        textAlign: \"center\",\n                        left: e.offset.x,\n                        top: e.offset.y\n                    }).html(coordHtml);\n                    console.log(\"Coord: \" + e.coord.toString());\n                });\n            };\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"귀요미 더스틴\"\n            }, void 0, false, {\n                fileName: \"/Users/ieungyu/project/nextjs/CityLightTimer_fe/pages/index.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"map\",\n                style: {\n                    width: \"100%\",\n                    height: \"1000px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ieungyu/project/nextjs/CityLightTimer_fe/pages/index.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_traffic_light__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ieungyu/project/nextjs/CityLightTimer_fe/pages/index.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ieungyu/project/nextjs/CityLightTimer_fe/pages/index.tsx\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, undefined);\n};\n_s(IndexPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = IndexPage;\nfunction Page() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IndexPage, {}, void 0, false, {\n        fileName: \"/Users/ieungyu/project/nextjs/CityLightTimer_fe/pages/index.tsx\",\n        lineNumber: 119,\n        columnNumber: 10\n    }, this);\n//return <h1>Hello, Next.js!</h1>\n}\n_c1 = Page;\nvar _c, _c1;\n$RefreshReg$(_c, \"IndexPage\");\n$RefreshReg$(_c1, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNYO0FBQ1k7QUFFbkMsNEJBQTRCO0FBRzVCLE1BQU1HLFlBQVk7O0lBQ2hCSCxnREFBU0EsQ0FBQztRQUVOLElBQUk7WUFDRix1Q0FBdUM7WUFDdkMsa0RBQWtEO1lBQ2xELGlDQUFpQztZQUVqQywwQkFBMEI7WUFDMUIsTUFBTUksU0FBU0MsU0FBU0MsYUFBYSxDQUFDO1lBQ3RDRixPQUFPRyxHQUFHLEdBQUc7WUFDYkgsT0FBT0ksS0FBSyxHQUFHO1lBQ2ZILFNBQVNJLElBQUksQ0FBQ0MsV0FBVyxDQUFDTjtZQUUxQixrQkFBa0I7WUFDbEJBLE9BQU9PLE1BQU0sR0FBRztnQkFDZCxrQkFBa0I7Z0JBQ2xCLE1BQU1DLGFBQWE7b0JBQ2pCQyxRQUFRLElBQUlDLE9BQU9DLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUMsWUFBWTtvQkFDakQsZ0VBQWdFO29CQUNoRUMsTUFBTTtnQkFDUjtnQkFFQSxNQUFNQyxNQUFNLElBQUlMLE9BQU9DLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSSxHQUFHLENBQUMsT0FBT1I7Z0JBRTdDLFdBQVc7Z0JBQ2IsdURBQXVEO2dCQUN2RCw0QkFBNEI7Z0JBQzVCLGdEQUFnRDtnQkFDaEQsTUFBTTtnQkFDSixNQUFNUyxTQUFTLElBQUlQLE9BQU9DLEtBQUssQ0FBQ0MsSUFBSSxDQUFDTSxNQUFNLENBQUM7b0JBQzFDQyxVQUFVLElBQUlULE9BQU9DLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUMsWUFBWTtvQkFDbkRFLEtBQUtBO29CQUNMSyxNQUFNO3dCQUNKQyxLQUFJO3dCQUNKQyxNQUFNLElBQUlYLE1BQU1DLElBQUksQ0FBQ1csSUFBSSxDQUFDLEtBQUs7d0JBQy9CQyxZQUFZLElBQUliLE1BQU1DLElBQUksQ0FBQ1csSUFBSSxDQUFDLElBQUc7d0JBQ25DRSxRQUFRLElBQUlkLE1BQU1DLElBQUksQ0FBQ2MsS0FBSyxDQUFDLEdBQUc7d0JBQ2hDQyxRQUFRLElBQUloQixNQUFNQyxJQUFJLENBQUNjLEtBQUssQ0FBQyxJQUFJO29CQUNuQztnQkFDRjtnQkFFQSxpREFBaUQ7Z0JBQ2pELHFFQUFxRTtnQkFDckUsY0FBYztnQkFDZCxZQUFZO2dCQUNaLHVCQUF1QjtnQkFDdkIsMENBQTBDO2dCQUMxQyw4Q0FBOEM7Z0JBQzlDLDBDQUEwQztnQkFDMUMsMkNBQTJDO2dCQUMzQyxNQUFNO2dCQUNOLE1BQU07Z0JBRU4sTUFBTUUsUUFBUUMsbUJBQU9BLENBQUM7Z0JBQ3RCRCxNQUFNRSxPQUFPLENBQUNDLENBQUFBO29CQUNaLDJDQUEyQztvQkFDM0NDLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBT0gsS0FBS0ksYUFBYSxHQUFDO29CQUN0QyxNQUFNQyxJQUFJLElBQUkxQixPQUFPQyxLQUFLLENBQUNDLElBQUksQ0FBQ00sTUFBTSxDQUFDO3dCQUNuQ0MsVUFBVSxJQUFJVCxPQUFPQyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsTUFBTSxDQUFDcUIsT0FBT0gsS0FBS0ksYUFBYSxHQUFDLGFBQWFELE9BQU9ILEtBQUtNLGFBQWEsR0FBQzt3QkFDeEd0QixLQUFLQTt3QkFDTEssTUFBTTs0QkFDSkMsS0FBSTs0QkFDSkMsTUFBTSxJQUFJWCxNQUFNQyxJQUFJLENBQUNXLElBQUksQ0FBQyxLQUFLOzRCQUMvQkMsWUFBWSxJQUFJYixNQUFNQyxJQUFJLENBQUNXLElBQUksQ0FBQyxJQUFHOzRCQUNuQ0UsUUFBUSxJQUFJZCxNQUFNQyxJQUFJLENBQUNjLEtBQUssQ0FBQyxHQUFHOzRCQUNoQ0MsUUFBUSxJQUFJaEIsTUFBTUMsSUFBSSxDQUFDYyxLQUFLLENBQUMsSUFBSTt3QkFDbkM7d0JBQ0FZLE9BQU9QLEtBQUtRLE1BQU07b0JBQ3BCO2dCQUVOO2dCQUVJLGNBQWM7Z0JBQ2QsSUFBSUMsWUFBWTNDLDZDQUFDQSxDQUFDO2dCQUNsQmtCLElBQUkwQixRQUFRLEdBQUdDLFNBQVMsQ0FBQ3BDLFdBQVcsQ0FBQ2tDLFNBQVMsQ0FBQyxFQUFFO2dCQUVqRHZCLE9BQU8wQixXQUFXLENBQUMsU0FBUyxTQUFTQyxDQUFDO29CQUNwQyxJQUFJQyxZQUNBLFlBQVcsc0JBQXNCLFdBQ2pDLFlBQVlELEVBQUVFLEtBQUssR0FBRyxXQUN0QixhQUFhRixFQUFFRyxNQUFNO29CQUV6QlAsVUFBVVEsSUFBSSxHQUFHQyxHQUFHLENBQUM7d0JBQ25COUIsVUFBVTt3QkFDViw4Q0FBOEM7d0JBQzlDLDZDQUE2Qzt3QkFDN0MrQixXQUFXO3dCQUNYQyxNQUFNUCxFQUFFRyxNQUFNLENBQUNLLENBQUM7d0JBQ2hCQyxLQUFLVCxFQUFFRyxNQUFNLENBQUNPLENBQUM7b0JBQ2pCLEdBQUdDLElBQUksQ0FBQ1Y7b0JBRVJiLFFBQVFDLEdBQUcsQ0FBQyxZQUFZVyxFQUFFWSxLQUFLLENBQUNDLFFBQVE7Z0JBRTVDO1lBQ0Y7UUFFRixFQUFFLE9BQU9DLE9BQU87WUFDZDFCLFFBQVEwQixLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNEO2dCQUFJRSxJQUFHO2dCQUFNQyxPQUFPO29CQUFFQyxPQUFPO29CQUFRQyxRQUFRO2dCQUFTOzs7Ozs7MEJBQ3ZELDhEQUFDbEUsc0RBQUtBOzs7Ozs7Ozs7OztBQUdaO0dBN0dNQztLQUFBQTtBQThHUyxTQUFTa0U7SUFDdEIscUJBQU8sOERBQUNsRTs7Ozs7QUFDUixpQ0FBaUM7QUFDbkM7TUFId0JrRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IExpZ2h0IGZyb20nLi90cmFmZmljX2xpZ2h0JztcbmltcG9ydCBMaWdodF9sb2NhdGUgZnJvbSAnLi9saWdodF9sb2NhdGUnO1xuLy9pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5cbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vY29uc3QgZ2VvanNvbiA9IHJlcXVpcmUoJy4vZ2VvLmpzb24nKVxuICAgICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnLi9nZW8uanNvbicpO1xuICAgICAgICAvLyBjb25zdCBnZW9qc29uID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAvLyDrhKTsnbTrsoQg7KeA64+EIEFQSSDsiqTtgazrpr3tirgg64+Z7KCB7Jy866GcIOuhnOuTnFxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL29wZW5hcGkubWFwLm5hdmVyLmNvbS9vcGVuYXBpL3YzL21hcHMuanM/bmNwQ2xpZW50SWQ9ZTI3dHlpczh2bic7XG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICAgICAgICAvLyDsiqTtgazrpr3tirgg66Gc65OcIO2bhCDsvZzrsLEg65Ox66GdXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgLy8g64Sk7J2067KEIOyngOuPhCDstIjquLDtmZQg67CPIO2RnOyLnFxuICAgICAgICAgIGNvbnN0IG1hcE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjZW50ZXI6IG5ldyB3aW5kb3cubmF2ZXIubWFwcy5MYXRMbmcoMzcuNTU2MDk0MywgMTI2LjkzNDI4NzYpLFxuICAgICAgICAgICAgLy9jZW50ZXI6IG5ldyB3aW5kb3cubmF2ZXIubWFwcy5MYXRMbmcoMzcuNTk5NTIzOSwgMTI2LjkxNjU5NjUpLFxuICAgICAgICAgICAgem9vbTogMTgsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNvbnN0IG1hcCA9IG5ldyB3aW5kb3cubmF2ZXIubWFwcy5NYXAoJ21hcCcsIG1hcE9wdGlvbnMpO1xuXG4gICAgICAgICAgLy8g66eI7LukIOy2lOqwgCDsmIjsi5xcbiAgICAgICAgLy8gICBjb25zdCBkYXRhcyA9IHJlcXVpcmUoJy9wdWJsaWMvaW50ZXJzZWN0aW9uLmpzb24nKVxuICAgICAgICAvLyAgIGRhdGFzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhpdGVtLml0c3RJZCk7IC8vIGl0c3RJZCDtlYTrk5wg7Lac66ClXG4gICAgICAgIC8vIH0pO1xuICAgICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyB3aW5kb3cubmF2ZXIubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgcG9zaXRpb246IG5ldyB3aW5kb3cubmF2ZXIubWFwcy5MYXRMbmcoMzcuNTU2MDk0MywgMTI2LjkzNDI4NzYpLFxuICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICAgIHVybDpcImxpZ2h0LnBuZ1wiLFxuICAgICAgICAgICAgICBzaXplOiBuZXcgbmF2ZXIubWFwcy5TaXplKDUwMCwgNTIpLFxuICAgICAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgbmF2ZXIubWFwcy5TaXplKDQwLDQwKSxcbiAgICAgICAgICAgICAgb3JpZ2luOiBuZXcgbmF2ZXIubWFwcy5Qb2ludCgwLCAwKSxcbiAgICAgICAgICAgICAgYW5jaG9yOiBuZXcgbmF2ZXIubWFwcy5Qb2ludCgyNSwgMjYpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBjb25zdCBtYXJrZXIyID0gbmV3IHdpbmRvdy5uYXZlci5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgLy8gICBwb3NpdGlvbjogbmV3IHdpbmRvdy5uYXZlci5tYXBzLkxhdExuZygzNy44NTYwODQzLCAxMjYuOTM0Mjg3NiksXG4gICAgICAgICAgLy8gICBtYXA6IG1hcCxcbiAgICAgICAgICAvLyAgIGljb246IHtcbiAgICAgICAgICAvLyAgICAgdXJsOlwibGlnaHQucG5nXCIsXG4gICAgICAgICAgLy8gICAgIHNpemU6IG5ldyBuYXZlci5tYXBzLlNpemUoNTAwLCA1MiksXG4gICAgICAgICAgLy8gICAgIHNjYWxlZFNpemU6IG5ldyBuYXZlci5tYXBzLlNpemUoNDAsNDApLFxuICAgICAgICAgIC8vICAgICBvcmlnaW46IG5ldyBuYXZlci5tYXBzLlBvaW50KDAsIDApLFxuICAgICAgICAgIC8vICAgICBhbmNob3I6IG5ldyBuYXZlci5tYXBzLlBvaW50KDI1LCAyNilcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgIGNvbnN0IGRhdGFzID0gcmVxdWlyZSgnL3B1YmxpYy9pbnRlcnNlY3Rpb24uanNvbicpXG4gICAgICAgICAgZGF0YXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coaXRlbS5pdHN0SWQpOyAvLyBpdHN0SWQg7ZWE65OcIOy2nOugpVxuICAgICAgICAgICAgY29uc29sZS5sb2coTnVtYmVyKGl0ZW0ubWFwQ3RwdEludExhdCowLjAwMDAwMDAxKSlcbiAgICAgICAgICAgIGNvbnN0IF8gPSBuZXcgd2luZG93Lm5hdmVyLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IHdpbmRvdy5uYXZlci5tYXBzLkxhdExuZyhOdW1iZXIoaXRlbS5tYXBDdHB0SW50TGF0KjAuMDAwMDAwMDEpLCBOdW1iZXIoaXRlbS5tYXBDdHB0SW50TG90KjAuMDAwMDAwMSkpLFxuICAgICAgICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgICAgICAgIGljb246IHtcbiAgICAgICAgICAgICAgICAgIHVybDpcImxpZ2h0LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgc2l6ZTogbmV3IG5hdmVyLm1hcHMuU2l6ZSg1MDAsIDUyKSxcbiAgICAgICAgICAgICAgICAgIHNjYWxlZFNpemU6IG5ldyBuYXZlci5tYXBzLlNpemUoNDAsNDApLFxuICAgICAgICAgICAgICAgICAgb3JpZ2luOiBuZXcgbmF2ZXIubWFwcy5Qb2ludCgwLCAwKSxcbiAgICAgICAgICAgICAgICAgIGFuY2hvcjogbmV3IG5hdmVyLm1hcHMuUG9pbnQoMjUsIDI2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0uaXRzdElkXG4gICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8g7YG066at7IucIOygleuztCDssL0g7JiI7KCcXG4gICAgICAgICAgICB2YXIgbWVudUxheWVyID0gJCgnPGRpdiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMDA7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlcjpzb2xpZCAxcHggIzMzMztwYWRkaW5nOjEwcHg7ZGlzcGxheTpub25lO1wiPjwvZGl2PicpO1xuICAgICAgICAgICAgbWFwLmdldFBhbmVzKCkuZmxvYXRQYW5lLmFwcGVuZENoaWxkKG1lbnVMYXllclswXSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICB2YXIgY29vcmRIdG1sID1cbiAgICAgICAgICAgICAgICAgICdDb29yZDogJysgJyjsmrAg7YG066atIOyngOygkCDsnIQv6rK964+EIOyijO2RnCknICsgJzxiciAvPicgK1xuICAgICAgICAgICAgICAgICAgJ1BvaW50OiAnICsgZS5wb2ludCArICc8YnIgLz4nICtcbiAgICAgICAgICAgICAgICAgICdPZmZzZXQ6ICcgKyBlLm9mZnNldDtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIG1lbnVMYXllci5zaG93KCkuY3NzKHsgIFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgLy8gbGVmdDogbWFya2VyLmdldFBvc2l0aW9uKCkueCArIFwicHhcIiwgLy8geOyijO2RnFxuICAgICAgICAgICAgICAgIC8vIHRvcDogbWFya2VyLmdldFBvc2l0aW9uKCkueSArIFwicHhcIiwgLy8geeyijO2RnFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBsZWZ0OiBlLm9mZnNldC54LFxuICAgICAgICAgICAgICAgIHRvcDogZS5vZmZzZXQueSxcbiAgICAgICAgICAgICAgfSkuaHRtbChjb29yZEh0bWwpO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Nvb3JkOiAnICsgZS5jb29yZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xuICAgICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPuq3gOyalOuvuCDrjZTsiqTti7Q8L2gxPlxuICAgICAgPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMDBweCcgfX0+PC9kaXY+XG4gICAgICA8TGlnaHQ+PC9MaWdodD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICByZXR1cm4gPEluZGV4UGFnZSAvPjtcbiAgLy9yZXR1cm4gPGgxPkhlbGxvLCBOZXh0LmpzITwvaDE+XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIiQiLCJMaWdodCIsIkluZGV4UGFnZSIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFzeW5jIiwiaGVhZCIsImFwcGVuZENoaWxkIiwib25sb2FkIiwibWFwT3B0aW9ucyIsImNlbnRlciIsIndpbmRvdyIsIm5hdmVyIiwibWFwcyIsIkxhdExuZyIsInpvb20iLCJtYXAiLCJNYXAiLCJtYXJrZXIiLCJNYXJrZXIiLCJwb3NpdGlvbiIsImljb24iLCJ1cmwiLCJzaXplIiwiU2l6ZSIsInNjYWxlZFNpemUiLCJvcmlnaW4iLCJQb2ludCIsImFuY2hvciIsImRhdGFzIiwicmVxdWlyZSIsImZvckVhY2giLCJpdGVtIiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsIm1hcEN0cHRJbnRMYXQiLCJfIiwibWFwQ3RwdEludExvdCIsInRpdGxlIiwiaXRzdElkIiwibWVudUxheWVyIiwiZ2V0UGFuZXMiLCJmbG9hdFBhbmUiLCJhZGRMaXN0ZW5lciIsImUiLCJjb29yZEh0bWwiLCJwb2ludCIsIm9mZnNldCIsInNob3ciLCJjc3MiLCJ0ZXh0QWxpZ24iLCJsZWZ0IiwieCIsInRvcCIsInkiLCJodG1sIiwiY29vcmQiLCJ0b1N0cmluZyIsImVycm9yIiwiZGl2IiwiaDEiLCJpZCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _traffic_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./traffic_light */ \"./pages/traffic_light.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n//import axios from 'axios';\nconst IndexPage = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        try {\n            //const geojson = require('./geo.json')\n            // const response = await axios.get('./geo.json');\n            // const geojson = response.data;\n            // 네이버 지도 API 스크립트 동적으로 로드\n            const script = document.createElement(\"script\");\n            script.src = \"https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=e27tyis8vn\";\n            script.async = true;\n            document.head.appendChild(script);\n            // 스크립트 로드 후 콜백 등록\n            script.onload = ()=>{\n                // 네이버 지도 초기화 및 표시\n                const mapOptions = {\n                    center: new window.naver.maps.LatLng(37.5560943, 126.9342876),\n                    //center: new window.naver.maps.LatLng(37.5995239, 126.9165965),\n                    zoom: 18\n                };\n                const map = new window.naver.maps.Map(\"map\", mapOptions);\n                // 마커 추가 예시\n                //   const datas = require('/public/intersection.json')\n                //   datas.forEach(item => {\n                //     console.log(item.itstId); // itstId 필드 출력\n                // });\n                const marker = new window.naver.maps.Marker({\n                    position: new window.naver.maps.LatLng(37.5560943, 126.9342876),\n                    map: map,\n                    icon: {\n                        url: \"light.png\",\n                        size: new naver.maps.Size(500, 52),\n                        scaledSize: new naver.maps.Size(40, 40),\n                        origin: new naver.maps.Point(0, 0),\n                        anchor: new naver.maps.Point(25, 26)\n                    }\n                });\n                // const marker2 = new window.naver.maps.Marker({\n                //   position: new window.naver.maps.LatLng(37.8560843, 126.9342876),\n                //   map: map,\n                //   icon: {\n                //     url:\"light.png\",\n                //     size: new naver.maps.Size(500, 52),\n                //     scaledSize: new naver.maps.Size(40,40),\n                //     origin: new naver.maps.Point(0, 0),\n                //     anchor: new naver.maps.Point(25, 26)\n                //   }\n                // });\n                const datas = __webpack_require__(/*! ../../../../../public/intersection.json */ \"./public/intersection.json\");\n                datas.forEach((item)=>{\n                    //console.log(item.itstId); // itstId 필드 출력\n                    const marker = new window.naver.maps.Marker({\n                        position: new window.naver.maps.LatLng(Number(item.mapCtptIntLat * 0.0000001), Number(item.mapCtptIntLot * 0.0000001)),\n                        map: map,\n                        icon: {\n                            url: \"light.png\",\n                            size: new naver.maps.Size(500, 52),\n                            scaledSize: new naver.maps.Size(40, 40),\n                            origin: new naver.maps.Point(0, 0),\n                            anchor: new naver.maps.Point(25, 26)\n                        },\n                        title: item.itstId\n                    });\n                    var menuLayer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<div style=\"position:absolute;z-index:10000;background-color:#fff;border:solid 1px #333;padding:10px;display:none;\"></div>');\n                    map.getPanes().floatPane.appendChild(menuLayer[0]);\n                    marker.addListener(\"click\", function(e) {\n                        var coordHtml = \"Coord: \" + \"(우 클릭 지점 위/경도 좌표)\" + \"<br />\" + \"Point: \" + e.point + \"<br />\" + \"Offset: \" + e.offset;\n                        menuLayer.show().css({\n                            position: \"relative\",\n                            // left: marker.getPosition().x + \"px\", // x좌표\n                            // top: marker.getPosition().y + \"px\", // y좌표\n                            textAlign: \"center\",\n                            left: e.offset.x,\n                            top: e.offset.y,\n                            width: \"15px\",\n                            height: \"10px\",\n                            size: \"15px\"\n                        }).html(coordHtml);\n                    });\n                });\n            };\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"귀요미 더스틴\"\n            }, void 0, false, {\n                fileName: \"/Users/ieungyu/project/nextjs/CityLightTimer_fe/pages/index.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"map\",\n                style: {\n                    width: \"100%\",\n                    height: \"1000px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/ieungyu/project/nextjs/CityLightTimer_fe/pages/index.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_traffic_light__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ieungyu/project/nextjs/CityLightTimer_fe/pages/index.tsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ieungyu/project/nextjs/CityLightTimer_fe/pages/index.tsx\",\n        lineNumber: 109,\n        columnNumber: 5\n    }, undefined);\n};\n_s(IndexPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = IndexPage;\nfunction Page() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IndexPage, {}, void 0, false, {\n        fileName: \"/Users/ieungyu/project/nextjs/CityLightTimer_fe/pages/index.tsx\",\n        lineNumber: 117,\n        columnNumber: 10\n    }, this);\n//return <h1>Hello, Next.js!</h1>\n}\n_c1 = Page;\nvar _c, _c1;\n$RefreshReg$(_c, \"IndexPage\");\n$RefreshReg$(_c1, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxZQUFXLHNCQUFzQixXQUNqQyxZQUFZRCxFQUFFRSxLQUFLLEdBQUcsV0FDdEIsYUFBYUYsRUFBRUcsTUFBTTt3QkFFekJQLFVBQVVRLElBQUksR0FBR0MsR0FBRyxDQUFDOzRCQUNuQjNCLFVBQVU7NEJBQ1YsOENBQThDOzRCQUM5Qyw2Q0FBNkM7NEJBQzdDNEIsV0FBVzs0QkFDWEMsTUFBTVAsRUFBRUcsTUFBTSxDQUFDSyxDQUFDOzRCQUNoQkMsS0FBS1QsRUFBRUcsTUFBTSxDQUFDTyxDQUFDOzRCQUNmQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSL0IsTUFBTTt3QkFDUixHQUFHZ0MsSUFBSSxDQUFDWjtvQkFFWjtnQkFDSjtZQUVGO1FBRUYsRUFBRSxPQUFPYSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0Q7Z0JBQUlFLElBQUc7Z0JBQU1DLE9BQU87b0JBQUVSLE9BQU87b0JBQVFDLFFBQVE7Z0JBQVM7Ozs7OzswQkFDdkQsOERBQUN2RCxzREFBS0E7Ozs7Ozs7Ozs7O0FBR1o7R0EzR01DO0tBQUFBO0FBNEdTLFNBQVM4RDtJQUN0QixxQkFBTyw4REFBQzlEOzs7OztBQUNSLGlDQUFpQztBQUNuQztNQUh3QjhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgTGlnaHQgZnJvbScuL3RyYWZmaWNfbGlnaHQnO1xuaW1wb3J0IExpZ2h0X2xvY2F0ZSBmcm9tICcuL2xpZ2h0X2xvY2F0ZSc7XG4vL2ltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cblxuY29uc3QgSW5kZXhQYWdlID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgLy9jb25zdCBnZW9qc29uID0gcmVxdWlyZSgnLi9nZW8uanNvbicpXG4gICAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcuL2dlby5qc29uJyk7XG4gICAgICAgIC8vIGNvbnN0IGdlb2pzb24gPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgIC8vIOuEpOydtOuyhCDsp4Drj4QgQVBJIOyKpO2BrOumve2KuCDrj5nsoIHsnLzroZwg66Gc65OcXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vb3BlbmFwaS5tYXAubmF2ZXIuY29tL29wZW5hcGkvdjMvbWFwcy5qcz9uY3BDbGllbnRJZD1lMjd0eWlzOHZuJztcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gICAgICAgIC8vIOyKpO2BrOumve2KuCDroZzrk5wg7ZuEIOy9nOuwsSDrk7HroZ1cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAvLyDrhKTsnbTrsoQg7KeA64+EIOy0iOq4sO2ZlCDrsI8g7ZGc7IucXG4gICAgICAgICAgY29uc3QgbWFwT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNlbnRlcjogbmV3IHdpbmRvdy5uYXZlci5tYXBzLkxhdExuZygzNy41NTYwOTQzLCAxMjYuOTM0Mjg3NiksXG4gICAgICAgICAgICAvL2NlbnRlcjogbmV3IHdpbmRvdy5uYXZlci5tYXBzLkxhdExuZygzNy41OTk1MjM5LCAxMjYuOTE2NTk2NSksXG4gICAgICAgICAgICB6b29tOiAxOCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY29uc3QgbWFwID0gbmV3IHdpbmRvdy5uYXZlci5tYXBzLk1hcCgnbWFwJywgbWFwT3B0aW9ucyk7XG5cbiAgICAgICAgICAvLyDrp4jsu6Qg7LaU6rCAIOyYiOyLnFxuICAgICAgICAvLyAgIGNvbnN0IGRhdGFzID0gcmVxdWlyZSgnL3B1YmxpYy9pbnRlcnNlY3Rpb24uanNvbicpXG4gICAgICAgIC8vICAgZGF0YXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0uaXRzdElkKTsgLy8gaXRzdElkIO2VhOuTnCDstpzroKVcbiAgICAgICAgLy8gfSk7XG4gICAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IHdpbmRvdy5uYXZlci5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IHdpbmRvdy5uYXZlci5tYXBzLkxhdExuZygzNy41NTYwOTQzLCAxMjYuOTM0Mjg3NiksXG4gICAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICAgIGljb246IHtcbiAgICAgICAgICAgICAgdXJsOlwibGlnaHQucG5nXCIsXG4gICAgICAgICAgICAgIHNpemU6IG5ldyBuYXZlci5tYXBzLlNpemUoNTAwLCA1MiksXG4gICAgICAgICAgICAgIHNjYWxlZFNpemU6IG5ldyBuYXZlci5tYXBzLlNpemUoNDAsNDApLFxuICAgICAgICAgICAgICBvcmlnaW46IG5ldyBuYXZlci5tYXBzLlBvaW50KDAsIDApLFxuICAgICAgICAgICAgICBhbmNob3I6IG5ldyBuYXZlci5tYXBzLlBvaW50KDI1LCAyNilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIGNvbnN0IG1hcmtlcjIgPSBuZXcgd2luZG93Lm5hdmVyLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAvLyAgIHBvc2l0aW9uOiBuZXcgd2luZG93Lm5hdmVyLm1hcHMuTGF0TG5nKDM3Ljg1NjA4NDMsIDEyNi45MzQyODc2KSxcbiAgICAgICAgICAvLyAgIG1hcDogbWFwLFxuICAgICAgICAgIC8vICAgaWNvbjoge1xuICAgICAgICAgIC8vICAgICB1cmw6XCJsaWdodC5wbmdcIixcbiAgICAgICAgICAvLyAgICAgc2l6ZTogbmV3IG5hdmVyLm1hcHMuU2l6ZSg1MDAsIDUyKSxcbiAgICAgICAgICAvLyAgICAgc2NhbGVkU2l6ZTogbmV3IG5hdmVyLm1hcHMuU2l6ZSg0MCw0MCksXG4gICAgICAgICAgLy8gICAgIG9yaWdpbjogbmV3IG5hdmVyLm1hcHMuUG9pbnQoMCwgMCksXG4gICAgICAgICAgLy8gICAgIGFuY2hvcjogbmV3IG5hdmVyLm1hcHMuUG9pbnQoMjUsIDI2KVxuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhcyA9IHJlcXVpcmUoJy9wdWJsaWMvaW50ZXJzZWN0aW9uLmpzb24nKVxuICAgICAgICAgICAgZGF0YXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtLml0c3RJZCk7IC8vIGl0c3RJZCDtlYTrk5wg7Lac66ClXG4gICAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyB3aW5kb3cubmF2ZXIubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IG5ldyB3aW5kb3cubmF2ZXIubWFwcy5MYXRMbmcoTnVtYmVyKGl0ZW0ubWFwQ3RwdEludExhdCowLjAwMDAwMDEpLCBOdW1iZXIoaXRlbS5tYXBDdHB0SW50TG90KjAuMDAwMDAwMSkpLFxuICAgICAgICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICAgICAgICBpY29uOiB7XG4gICAgICAgICAgICAgICAgICAgIHVybDpcImxpZ2h0LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBuZXcgbmF2ZXIubWFwcy5TaXplKDUwMCwgNTIpLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgbmF2ZXIubWFwcy5TaXplKDQwLDQwKSxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBuZXcgbmF2ZXIubWFwcy5Qb2ludCgwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yOiBuZXcgbmF2ZXIubWFwcy5Qb2ludCgyNSwgMjYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0uaXRzdElkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIG1lbnVMYXllciA9ICQoJzxkaXYgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEwMDAwO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6c29saWQgMXB4ICMzMzM7cGFkZGluZzoxMHB4O2Rpc3BsYXk6bm9uZTtcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICBtYXAuZ2V0UGFuZXMoKS5mbG9hdFBhbmUuYXBwZW5kQ2hpbGQobWVudUxheWVyWzBdKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBjb29yZEh0bWwgPVxuICAgICAgICAgICAgICAgICAgICAgICdDb29yZDogJysgJyjsmrAg7YG066atIOyngOygkCDsnIQv6rK964+EIOyijO2RnCknICsgJzxiciAvPicgK1xuICAgICAgICAgICAgICAgICAgICAgICdQb2ludDogJyArIGUucG9pbnQgKyAnPGJyIC8+JyArXG4gICAgICAgICAgICAgICAgICAgICAgJ09mZnNldDogJyArIGUub2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBtZW51TGF5ZXIuc2hvdygpLmNzcyh7ICBcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdDogbWFya2VyLmdldFBvc2l0aW9uKCkueCArIFwicHhcIiwgLy8geOyijO2RnFxuICAgICAgICAgICAgICAgICAgICAvLyB0b3A6IG1hcmtlci5nZXRQb3NpdGlvbigpLnkgKyBcInB4XCIsIC8vIHnsooztkZxcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBlLm9mZnNldC54LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IGUub2Zmc2V0LnksXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCIxNXB4XCJcbiAgICAgICAgICAgICAgICAgIH0pLmh0bWwoY29vcmRIdG1sKTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT7qt4DsmpTrr7gg642U7Iqk7Yu0PC9oMT5cbiAgICAgIDxkaXYgaWQ9XCJtYXBcIiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAwcHgnIH19PjwvZGl2PlxuICAgICAgPExpZ2h0PjwvTGlnaHQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgcmV0dXJuIDxJbmRleFBhZ2UgLz47XG4gIC8vcmV0dXJuIDxoMT5IZWxsbywgTmV4dC5qcyE8L2gxPlxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCIkIiwiTGlnaHQiLCJJbmRleFBhZ2UiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIm9ubG9hZCIsIm1hcE9wdGlvbnMiLCJjZW50ZXIiLCJ3aW5kb3ciLCJuYXZlciIsIm1hcHMiLCJMYXRMbmciLCJ6b29tIiwibWFwIiwiTWFwIiwibWFya2VyIiwiTWFya2VyIiwicG9zaXRpb24iLCJpY29uIiwidXJsIiwic2l6ZSIsIlNpemUiLCJzY2FsZWRTaXplIiwib3JpZ2luIiwiUG9pbnQiLCJhbmNob3IiLCJkYXRhcyIsInJlcXVpcmUiLCJmb3JFYWNoIiwiaXRlbSIsIk51bWJlciIsIm1hcEN0cHRJbnRMYXQiLCJtYXBDdHB0SW50TG90IiwidGl0bGUiLCJpdHN0SWQiLCJtZW51TGF5ZXIiLCJnZXRQYW5lcyIsImZsb2F0UGFuZSIsImFkZExpc3RlbmVyIiwiZSIsImNvb3JkSHRtbCIsInBvaW50Iiwib2Zmc2V0Iiwic2hvdyIsImNzcyIsInRleHRBbGlnbiIsImxlZnQiLCJ4IiwidG9wIiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiaHRtbCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImgxIiwiaWQiLCJzdHlsZSIsIlBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
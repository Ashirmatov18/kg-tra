"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/addcar",{

/***/ "./src/components/Admin/AddTest.jsx":
/*!******************************************!*\
  !*** ./src/components/Admin/AddTest.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddTest; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! form-data */ \"./node_modules/form-data/lib/browser.js\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction AddTest() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        year: \"\",\n        color: \"\",\n        price: \"\",\n        driving: \"\",\n        image: null,\n        mainimage: \"\",\n        secondimage: \"\",\n        thirdimage: \"\",\n        country: \"\",\n        mileage: \"\",\n        description: \"\",\n        equipment: \"\"\n    }), carData = ref[0], setCarData = ref[1];\n    var handleChange = function(e) {\n        var _target = e.target, name = _target.name, value = _target.value, files = _target.files;\n        setCarData(function(prevData) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, prevData), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, name, files ? files[0] : value));\n        });\n    };\n    console.log(carData);\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var formData, response;\n            return C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        formData = new (form_data__WEBPACK_IMPORTED_MODULE_3___default())();\n                        formData.append(\"name\", carData.name);\n                        formData.append(\"year\", carData.year);\n                        formData.append(\"color\", carData.color);\n                        formData.append(\"price\", carData.price);\n                        formData.append(\"driving\", carData.driving);\n                        formData.append(\"image\", carData.image);\n                        formData.append(\"mainimage\", carData.mainimage);\n                        formData.append(\"secondimage\", carData.secondimage);\n                        formData.append(\"thirdimage\", carData.thirdimage);\n                        formData.append(\"country\", carData.country);\n                        formData.append(\"mileage\", carData.mileage);\n                        formData.append(\"description\", carData.description);\n                        formData.append(\"equipment\", carData.equipment);\n                        _ctx.prev = 15;\n                        _ctx.next = 18;\n                        return axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"http://localhost:5000/api/post\", formData, {\n                            headers: {\n                                \"Content-Type\": \"multipart/form-data\"\n                            }\n                        });\n                    case 18:\n                        response = _ctx.sent;\n                        console.log(response.data);\n                        _ctx.next = 25;\n                        break;\n                    case 22:\n                        _ctx.prev = 22;\n                        _ctx.t0 = _ctx[\"catch\"](15);\n                        console.log(_ctx.t0);\n                    case 25:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    15,\n                    22\n                ]\n            ]);\n        }));\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"name\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"number\",\n                name: \"year\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"color\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"number\",\n                name: \"price\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"driving\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"file\",\n                name: \"image\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"mainimage\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"secondimage\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"thirdimage\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"country\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"number\",\n                name: \"mileage\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"description\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"equipment\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n};\n_s(AddTest, \"l0FoCWhrEB/29px9vsNjNcCAUnE=\");\n_c = AddTest;\nvar _c;\n$RefreshReg$(_c, \"AddTest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEZ1Qm5DLE9BQU87QUFBUEEsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BZG1pbi9BZGRUZXN0LmpzeD8wZjNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBGb3JtRGF0YSBmcm9tIFwiZm9ybS1kYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRUZXN0KCkge1xyXG4gIGNvbnN0IFtjYXJEYXRhLCBzZXRDYXJEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICB5ZWFyOiBcIlwiLFxyXG4gICAgY29sb3I6IFwiXCIsXHJcbiAgICBwcmljZTogXCJcIixcclxuICAgIGRyaXZpbmc6IFwiXCIsXHJcbiAgICBpbWFnZTogbnVsbCxcclxuICAgIG1haW5pbWFnZTogXCJcIixcclxuICAgIHNlY29uZGltYWdlOiBcIlwiLFxyXG4gICAgdGhpcmRpbWFnZTogXCJcIixcclxuICAgIGNvdW50cnk6IFwiXCIsXHJcbiAgICBtaWxlYWdlOiBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICBlcXVpcG1lbnQ6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBmaWxlcyB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRDYXJEYXRhKChwcmV2RGF0YSkgPT4gKHtcclxuICAgICAgLi4ucHJldkRhdGEsXHJcbiAgICAgIFtuYW1lXTogZmlsZXMgPyBmaWxlc1swXSA6IHZhbHVlLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKGNhckRhdGEpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcIm5hbWVcIiwgY2FyRGF0YS5uYW1lKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcInllYXJcIiwgY2FyRGF0YS55ZWFyKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImNvbG9yXCIsIGNhckRhdGEuY29sb3IpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwicHJpY2VcIiwgY2FyRGF0YS5wcmljZSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJkcml2aW5nXCIsIGNhckRhdGEuZHJpdmluZyk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBjYXJEYXRhLmltYWdlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcIm1haW5pbWFnZVwiLCBjYXJEYXRhLm1haW5pbWFnZSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJzZWNvbmRpbWFnZVwiLCBjYXJEYXRhLnNlY29uZGltYWdlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcInRoaXJkaW1hZ2VcIiwgY2FyRGF0YS50aGlyZGltYWdlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImNvdW50cnlcIiwgY2FyRGF0YS5jb3VudHJ5KTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcIm1pbGVhZ2VcIiwgY2FyRGF0YS5taWxlYWdlKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImRlc2NyaXB0aW9uXCIsIGNhckRhdGEuZGVzY3JpcHRpb24pO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZXF1aXBtZW50XCIsIGNhckRhdGEuZXF1aXBtZW50KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3Bvc3RcIixcclxuICAgICAgICBmb3JtRGF0YSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAvLyBoYW5kbGUgc3VjY2Vzc1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAvLyBoYW5kbGUgZXJyb3JcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwieWVhclwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb2xvclwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInByaWNlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRyaXZpbmdcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2VcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibWFpbmltYWdlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlY29uZGltYWdlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRoaXJkaW1hZ2VcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291bnRyeVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cIm1pbGVhZ2VcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZXF1aXBtZW50XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRm9ybURhdGEiLCJBZGRUZXN0IiwibmFtZSIsInllYXIiLCJjb2xvciIsInByaWNlIiwiZHJpdmluZyIsImltYWdlIiwibWFpbmltYWdlIiwic2Vjb25kaW1hZ2UiLCJ0aGlyZGltYWdlIiwiY291bnRyeSIsIm1pbGVhZ2UiLCJkZXNjcmlwdGlvbiIsImVxdWlwbWVudCIsImNhckRhdGEiLCJzZXRDYXJEYXRhIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmlsZXMiLCJwcmV2RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJmb3JtRGF0YSIsInJlc3BvbnNlIiwicHJldmVudERlZmF1bHQiLCJhcHBlbmQiLCJwb3N0IiwiaGVhZGVycyIsImRhdGEiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Admin/AddTest.jsx\n"));

/***/ })

});
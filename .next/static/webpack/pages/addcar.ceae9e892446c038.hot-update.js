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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddTest; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! form-data */ \"./node_modules/form-data/lib/browser.js\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nvar api = \"http://localhost:5000/api/post\";\nfunction AddTest() {\n    //   const [formData, setFormData] = useState({\n    //     name: \"\",\n    //     image: null,\n    //     year: \"\",\n    //     color: \"\",\n    //     price: \"\",\n    //     driving: \"\",\n    //     mainimage: \"\",\n    //     secondimage: \"\",\n    //     thirdimage: \"\",\n    //     country: \"\",\n    //     mileage: \"\",\n    //     description: \"\",\n    //     equipment: \"\",\n    //   });\n    //   const handleInputChange = (event) => {\n    //     const { name, value } = event.target;\n    //     setFormData({\n    //       ...formData,\n    //       [name]: value,\n    //     });\n    //   };\n    //   const handleFileInputChange = (event) => {\n    //     setFormData({\n    //       ...formData,\n    //       image: event.target.files[0],\n    //     });\n    //   };\n    //   const handleSubmit = (event) => {\n    //     event.preventDefault();\n    //     const data = new FormData();\n    //     data.append(\"name\", formData.name);\n    //     data.append(\"year\", formData.year);\n    //     data.append(\"color\", formData.color);\n    //     data.append(\"price\", formData.price);\n    //     data.append(\"driving\", formData.driving);\n    //     data.append(\"mainimage\", formData.mainimage);\n    //     data.append(\"secondimage\", formData.secondimage);\n    //     data.append(\"thirdimage\", formData.thirdimage);\n    //     data.append(\"country\", formData.country);\n    //     data.append(\"mileage\", formData.mileage);\n    //     data.append(\"description\", formData.description);\n    //     data.append(\"equipment\", formData.equipment);\n    //     data.append(\"image\", formData.image);\n    //     axios\n    //       .post(api, data)\n    //       .then((response) => {\n    //         console.log(response);\n    //       })\n    //       .catch((error) => {\n    //         console.log(error);\n    //       });\n    //   };\n    //   console.log(formData);\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var data, response;\n            return C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        data = new (form_data__WEBPACK_IMPORTED_MODULE_3___default())();\n                        data.append(\"name\", \"John\");\n                        data.append(\"year\", \"2022\");\n                        data.append(\"color\", \"blue\");\n                        data.append(\"price\", \"10000\");\n                        data.append(\"driving\", \"4WD\");\n                        data.append(\"mainimage\", \"main.jpg\");\n                        data.append(\"secondimage\", \"second.jpg\");\n                        data.append(\"thirdimage\", \"third.jpg\");\n                        data.append(\"country\", \"USA\");\n                        data.append(\"mileage\", \"10000\");\n                        data.append(\"description\", \"This is a description\");\n                        data.append(\"equipment\", \"Power windows, A/C\");\n                        if (event.target.files && event.target.files.length > 0) {\n                            data.append(\"image\", event.target.files[0]);\n                        }\n                        _ctx.prev = 15;\n                        _ctx.next = 18;\n                        return axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(api, data, {\n                            headers: {\n                                \"Content-Type\": \"multipart/form-data; boundary=\".concat(data._boundary)\n                            }\n                        });\n                    case 18:\n                        response = _ctx.sent;\n                        console.log(response.data);\n                        _ctx.next = 25;\n                        break;\n                    case 22:\n                        _ctx.prev = 22;\n                        _ctx.t0 = _ctx[\"catch\"](15);\n                        console.log(_ctx.t0);\n                    case 25:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    15,\n                    22\n                ]\n            ]);\n        }));\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(// <form onSubmit={handleSubmit}>\n    //   <label htmlFor=\"name\">Name</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"name\"\n    //     value={formData.name}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"year\">Year</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"year\"\n    //     value={formData.year}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"color\">Color</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"color\"\n    //     value={formData.color}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"price\">Price</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"price\"\n    //     value={formData.price}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"driving\">Driving</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"driving\"\n    //     value={formData.driving}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"mainimage\">Main Image</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"mainimage\"\n    //     value={formData.mainimage}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"secondimage\">Second Image</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"secondimage\"\n    //     value={formData.secondimage}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"thirdimage\">Third Image</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"thirdimage\"\n    //     value={formData.thirdimage}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"country\">Country</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"country\"\n    //     value={formData.country}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"mileage\">Mileage</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"mileage\"\n    //     value={formData.mileage}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"description\">Description</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"description\"\n    //     value={formData.description}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"equipment\">Equipment</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"equipment\"\n    //     value={formData.equipment}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"image\">Image</label>\n    //   <input type=\"file\" name=\"image\" onChange={handleFileInputChange} />\n    //   <button type=\"submit\">Submit</button>\n    // </form>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"file\",\n                name: \"image\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 205,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"submit\",\n                value: \"Submit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n                lineNumber: 206,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n        lineNumber: 203,\n        columnNumber: 5\n    }, this));\n};\n_c = AddTest;\nvar _c;\n$RefreshReg$(_c, \"AddTest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDekIsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxPQUFPO0lBRVAsb0RBQW9EO0lBQ3BELFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMsT0FBTztJQUVQLDZDQUE2QztJQUM3QyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsbUNBQW1DO0lBQ25DLE9BQU87SUFFUCw2Q0FBNkM7SUFDN0MsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQyxPQUFPO0lBQ1AscURBQXFEO0lBQ3JELFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsT0FBTztJQUVQLGlEQUFpRDtJQUNqRCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLE9BQU87SUFFUCx5Q0FBeUM7SUFDekMsd0VBQXdFO0lBRXhFLDBDQUEwQztJQUMxQyxVQUFVO2tCQUNWLDhEQUFDYSxNQUFJO1FBQUNDLFFBQVEsRUFBRWYsWUFBWTs7MEJBRTFCLDhEQUFDZ0IsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQUNDLElBQUksRUFBQyxPQUFPOzs7OztvQkFBRzswQkFDbEMsOERBQUNGLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxRQUFRO2dCQUFDRSxLQUFLLEVBQUMsUUFBUTs7Ozs7b0JBQUc7Ozs7OztZQUNqQyxFQUNQO0NBQ0g7QUExTXVCcEIsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BZG1pbi9BZGRUZXN0LmpzeD8wZjNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBGb3JtRGF0YSBmcm9tIFwiZm9ybS1kYXRhXCI7XHJcblxyXG5jb25zdCBhcGkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcG9zdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVGVzdCgpIHtcclxuICAvLyAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gIC8vICAgICBuYW1lOiBcIlwiLFxyXG4gIC8vICAgICBpbWFnZTogbnVsbCxcclxuICAvLyAgICAgeWVhcjogXCJcIixcclxuICAvLyAgICAgY29sb3I6IFwiXCIsXHJcbiAgLy8gICAgIHByaWNlOiBcIlwiLFxyXG4gIC8vICAgICBkcml2aW5nOiBcIlwiLFxyXG4gIC8vICAgICBtYWluaW1hZ2U6IFwiXCIsXHJcbiAgLy8gICAgIHNlY29uZGltYWdlOiBcIlwiLFxyXG4gIC8vICAgICB0aGlyZGltYWdlOiBcIlwiLFxyXG4gIC8vICAgICBjb3VudHJ5OiBcIlwiLFxyXG4gIC8vICAgICBtaWxlYWdlOiBcIlwiLFxyXG4gIC8vICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAvLyAgICAgZXF1aXBtZW50OiBcIlwiLFxyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAvLyAgICAgc2V0Rm9ybURhdGEoe1xyXG4gIC8vICAgICAgIC4uLmZvcm1EYXRhLFxyXG4gIC8vICAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgfTtcclxuXHJcbiAgLy8gICBjb25zdCBoYW5kbGVGaWxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgICAgc2V0Rm9ybURhdGEoe1xyXG4gIC8vICAgICAgIC4uLmZvcm1EYXRhLFxyXG4gIC8vICAgICAgIGltYWdlOiBldmVudC50YXJnZXQuZmlsZXNbMF0sXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgfTtcclxuXHJcbiAgLy8gICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgLy8gICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAvLyAgICAgZGF0YS5hcHBlbmQoXCJuYW1lXCIsIGZvcm1EYXRhLm5hbWUpO1xyXG4gIC8vICAgICBkYXRhLmFwcGVuZChcInllYXJcIiwgZm9ybURhdGEueWVhcik7XHJcbiAgLy8gICAgIGRhdGEuYXBwZW5kKFwiY29sb3JcIiwgZm9ybURhdGEuY29sb3IpO1xyXG4gIC8vICAgICBkYXRhLmFwcGVuZChcInByaWNlXCIsIGZvcm1EYXRhLnByaWNlKTtcclxuICAvLyAgICAgZGF0YS5hcHBlbmQoXCJkcml2aW5nXCIsIGZvcm1EYXRhLmRyaXZpbmcpO1xyXG4gIC8vICAgICBkYXRhLmFwcGVuZChcIm1haW5pbWFnZVwiLCBmb3JtRGF0YS5tYWluaW1hZ2UpO1xyXG4gIC8vICAgICBkYXRhLmFwcGVuZChcInNlY29uZGltYWdlXCIsIGZvcm1EYXRhLnNlY29uZGltYWdlKTtcclxuICAvLyAgICAgZGF0YS5hcHBlbmQoXCJ0aGlyZGltYWdlXCIsIGZvcm1EYXRhLnRoaXJkaW1hZ2UpO1xyXG4gIC8vICAgICBkYXRhLmFwcGVuZChcImNvdW50cnlcIiwgZm9ybURhdGEuY291bnRyeSk7XHJcbiAgLy8gICAgIGRhdGEuYXBwZW5kKFwibWlsZWFnZVwiLCBmb3JtRGF0YS5taWxlYWdlKTtcclxuICAvLyAgICAgZGF0YS5hcHBlbmQoXCJkZXNjcmlwdGlvblwiLCBmb3JtRGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgLy8gICAgIGRhdGEuYXBwZW5kKFwiZXF1aXBtZW50XCIsIGZvcm1EYXRhLmVxdWlwbWVudCk7XHJcbiAgLy8gICAgIGRhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgZm9ybURhdGEuaW1hZ2UpO1xyXG5cclxuICAvLyAgICAgYXhpb3NcclxuICAvLyAgICAgICAucG9zdChhcGksIGRhdGEpXHJcbiAgLy8gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgLy8gICAgICAgfSlcclxuICAvLyAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICB9O1xyXG4gIC8vICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJuYW1lXCIsIFwiSm9oblwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwieWVhclwiLCBcIjIwMjJcIik7XHJcbiAgICBkYXRhLmFwcGVuZChcImNvbG9yXCIsIFwiYmx1ZVwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwicHJpY2VcIiwgXCIxMDAwMFwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwiZHJpdmluZ1wiLCBcIjRXRFwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwibWFpbmltYWdlXCIsIFwibWFpbi5qcGdcIik7XHJcbiAgICBkYXRhLmFwcGVuZChcInNlY29uZGltYWdlXCIsIFwic2Vjb25kLmpwZ1wiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwidGhpcmRpbWFnZVwiLCBcInRoaXJkLmpwZ1wiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwiY291bnRyeVwiLCBcIlVTQVwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwibWlsZWFnZVwiLCBcIjEwMDAwXCIpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJkZXNjcmlwdGlvblwiLCBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvblwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwiZXF1aXBtZW50XCIsIFwiUG93ZXIgd2luZG93cywgQS9DXCIpO1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcyAmJiBldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBkYXRhLmFwcGVuZChcImltYWdlXCIsIGV2ZW50LnRhcmdldC5maWxlc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGFwaSwgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IGBtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0ke2RhdGEuX2JvdW5kYXJ5fWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgIC8vICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAvLyAgIDxpbnB1dFxyXG4gICAgLy8gICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAvLyAgICAgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9XHJcbiAgICAvLyAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgLy8gICAvPlxyXG5cclxuICAgIC8vICAgPGxhYmVsIGh0bWxGb3I9XCJ5ZWFyXCI+WWVhcjwvbGFiZWw+XHJcbiAgICAvLyAgIDxpbnB1dFxyXG4gICAgLy8gICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICBuYW1lPVwieWVhclwiXHJcbiAgICAvLyAgICAgdmFsdWU9e2Zvcm1EYXRhLnllYXJ9XHJcbiAgICAvLyAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgLy8gICAvPlxyXG5cclxuICAgIC8vICAgPGxhYmVsIGh0bWxGb3I9XCJjb2xvclwiPkNvbG9yPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJjb2xvclwiXHJcbiAgICAvLyAgICAgdmFsdWU9e2Zvcm1EYXRhLmNvbG9yfVxyXG4gICAgLy8gICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgIC8vICAgLz5cclxuXHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5QcmljZTwvbGFiZWw+XHJcbiAgICAvLyAgIDxpbnB1dFxyXG4gICAgLy8gICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgLy8gICAgIHZhbHVlPXtmb3JtRGF0YS5wcmljZX1cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcblxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cImRyaXZpbmdcIj5Ecml2aW5nPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJkcml2aW5nXCJcclxuICAgIC8vICAgICB2YWx1ZT17Zm9ybURhdGEuZHJpdmluZ31cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcblxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cIm1haW5pbWFnZVwiPk1haW4gSW1hZ2U8L2xhYmVsPlxyXG4gICAgLy8gICA8aW5wdXRcclxuICAgIC8vICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgICAgbmFtZT1cIm1haW5pbWFnZVwiXHJcbiAgICAvLyAgICAgdmFsdWU9e2Zvcm1EYXRhLm1haW5pbWFnZX1cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcblxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cInNlY29uZGltYWdlXCI+U2Vjb25kIEltYWdlPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJzZWNvbmRpbWFnZVwiXHJcbiAgICAvLyAgICAgdmFsdWU9e2Zvcm1EYXRhLnNlY29uZGltYWdlfVxyXG4gICAgLy8gICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgIC8vICAgLz5cclxuXHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwidGhpcmRpbWFnZVwiPlRoaXJkIEltYWdlPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJ0aGlyZGltYWdlXCJcclxuICAgIC8vICAgICB2YWx1ZT17Zm9ybURhdGEudGhpcmRpbWFnZX1cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcblxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cImNvdW50cnlcIj5Db3VudHJ5PC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJjb3VudHJ5XCJcclxuICAgIC8vICAgICB2YWx1ZT17Zm9ybURhdGEuY291bnRyeX1cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcblxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cIm1pbGVhZ2VcIj5NaWxlYWdlPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJtaWxlYWdlXCJcclxuICAgIC8vICAgICB2YWx1ZT17Zm9ybURhdGEubWlsZWFnZX1cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAvLyAgIDxpbnB1dFxyXG4gICAgLy8gICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgLy8gICAgIHZhbHVlPXtmb3JtRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcblxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cImVxdWlwbWVudFwiPkVxdWlwbWVudDwvbGFiZWw+XHJcbiAgICAvLyAgIDxpbnB1dFxyXG4gICAgLy8gICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICBuYW1lPVwiZXF1aXBtZW50XCJcclxuICAgIC8vICAgICB2YWx1ZT17Zm9ybURhdGEuZXF1aXBtZW50fVxyXG4gICAgLy8gICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgIC8vICAgLz5cclxuXHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5JbWFnZTwvbGFiZWw+XHJcbiAgICAvLyAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZVwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlSW5wdXRDaGFuZ2V9IC8+XHJcblxyXG4gICAgLy8gICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgIC8vIDwvZm9ybT5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICB7LyogQWRkIGlucHV0IGZpZWxkcyBmb3IgdGhlIG90aGVyIGZvcm0gZGF0YSAqL31cclxuICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltYWdlXCIgLz5cclxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiRm9ybURhdGEiLCJhcGkiLCJBZGRUZXN0IiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJkYXRhIiwicmVzcG9uc2UiLCJwcmV2ZW50RGVmYXVsdCIsImFwcGVuZCIsInRhcmdldCIsImZpbGVzIiwibGVuZ3RoIiwicG9zdCIsImhlYWRlcnMiLCJfYm91bmRhcnkiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Admin/AddTest.jsx\n"));

/***/ })

});
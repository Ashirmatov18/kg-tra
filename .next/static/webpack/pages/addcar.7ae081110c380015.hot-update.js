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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddTest; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! form-data */ \"./node_modules/form-data/lib/browser.js\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nvar api = \"http://localhost:5000/api/post\";\nfunction AddTest() {\n    //   const [formData, setFormData] = useState({\n    //     name: \"\",\n    //     image: null,\n    //     year: \"\",\n    //     color: \"\",\n    //     price: \"\",\n    //     driving: \"\",\n    //     mainimage: \"\",\n    //     secondimage: \"\",\n    //     thirdimage: \"\",\n    //     country: \"\",\n    //     mileage: \"\",\n    //     description: \"\",\n    //     equipment: \"\",\n    //   });\n    //   const handleInputChange = (event) => {\n    //     const { name, value } = event.target;\n    //     setFormData({\n    //       ...formData,\n    //       [name]: value,\n    //     });\n    //   };\n    //   const handleFileInputChange = (event) => {\n    //     setFormData({\n    //       ...formData,\n    //       image: event.target.files[0],\n    //     });\n    //   };\n    //   const handleSubmit = (event) => {\n    //     event.preventDefault();\n    //     const data = new FormData();\n    //     data.append(\"name\", formData.name);\n    //     data.append(\"year\", formData.year);\n    //     data.append(\"color\", formData.color);\n    //     data.append(\"price\", formData.price);\n    //     data.append(\"driving\", formData.driving);\n    //     data.append(\"mainimage\", formData.mainimage);\n    //     data.append(\"secondimage\", formData.secondimage);\n    //     data.append(\"thirdimage\", formData.thirdimage);\n    //     data.append(\"country\", formData.country);\n    //     data.append(\"mileage\", formData.mileage);\n    //     data.append(\"description\", formData.description);\n    //     data.append(\"equipment\", formData.equipment);\n    //     data.append(\"image\", formData.image);\n    //     axios\n    //       .post(api, data)\n    //       .then((response) => {\n    //         console.log(response);\n    //       })\n    //       .catch((error) => {\n    //         console.log(error);\n    //       });\n    //   };\n    //   console.log(formData);\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var data, image, response;\n            return C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        data = new (form_data__WEBPACK_IMPORTED_MODULE_3___default())();\n                        data.append(\"name\", \"John\");\n                        data.append(\"year\", \"2022\");\n                        data.append(\"color\", \"blue\");\n                        data.append(\"price\", \"10000\");\n                        data.append(\"driving\", \"4WD\");\n                        data.append(\"mainimage\", \"main.jpg\");\n                        data.append(\"secondimage\", \"second.jpg\");\n                        data.append(\"thirdimage\", \"third.jpg\");\n                        data.append(\"country\", \"USA\");\n                        data.append(\"mileage\", \"10000\");\n                        data.append(\"description\", \"This is a description\");\n                        data.append(\"equipment\", \"Power windows, A/C\");\n                        image = fs.createReadStream(\"image.jpg\");\n                        data.append(\"image\", image);\n                        _ctx.prev = 16;\n                        _ctx.next = 19;\n                        return axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(api, data, {\n                            headers: {\n                                \"Content-Type\": \"multipart/form-data; boundary=\".concat(data._boundary)\n                            }\n                        });\n                    case 19:\n                        response = _ctx.sent;\n                        console.log(response.data);\n                        _ctx.next = 26;\n                        break;\n                    case 23:\n                        _ctx.prev = 23;\n                        _ctx.t0 = _ctx[\"catch\"](16);\n                        console.log(_ctx.t0);\n                    case 26:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    16,\n                    23\n                ]\n            ]);\n        }));\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(// <form onSubmit={handleSubmit}>\n    //   <label htmlFor=\"name\">Name</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"name\"\n    //     value={formData.name}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"year\">Year</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"year\"\n    //     value={formData.year}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"color\">Color</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"color\"\n    //     value={formData.color}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"price\">Price</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"price\"\n    //     value={formData.price}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"driving\">Driving</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"driving\"\n    //     value={formData.driving}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"mainimage\">Main Image</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"mainimage\"\n    //     value={formData.mainimage}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"secondimage\">Second Image</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"secondimage\"\n    //     value={formData.secondimage}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"thirdimage\">Third Image</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"thirdimage\"\n    //     value={formData.thirdimage}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"country\">Country</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"country\"\n    //     value={formData.country}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"mileage\">Mileage</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"mileage\"\n    //     value={formData.mileage}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"description\">Description</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"description\"\n    //     value={formData.description}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"equipment\">Equipment</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"equipment\"\n    //     value={formData.equipment}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"image\">Image</label>\n    //   <input type=\"file\" name=\"image\" onChange={handleFileInputChange} />\n    //   <button type=\"submit\">Submit</button>\n    // </form>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"submit\",\n            value: \"Submit\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n            lineNumber: 204,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n        lineNumber: 203,\n        columnNumber: 5\n    }, this));\n};\n_c = AddTest;\nvar _c;\n$RefreshReg$(_c, \"AddTest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdCQUF3QjtJQUN4QixrQ0FBa0M7SUFDbEMsbUNBQW1DO0lBQ25DLE9BQU87SUFFUCw2Q0FBNkM7SUFDN0MsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQyxPQUFPO0lBRVAsNkNBQTZDO0lBQzdDLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLCtCQUErQjtJQUMvQixtQ0FBbUM7SUFDbkMsT0FBTztJQUNQLHFEQUFxRDtJQUNyRCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLE9BQU87SUFFUCxpREFBaUQ7SUFDakQsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUNuQyxPQUFPO0lBRVAseUNBQXlDO0lBQ3pDLHdFQUF3RTtJQUV4RSwwQ0FBMEM7SUFDMUMsVUFBVTtrQkFDViw4REFBQ2EsTUFBSTtRQUFDQyxRQUFRLEVBQUVmLFlBQVk7a0JBQzFCLDRFQUFDZ0IsT0FBSztZQUFDQyxJQUFJLEVBQUMsUUFBUTtZQUFDQyxLQUFLLEVBQUMsUUFBUTs7Ozs7Z0JBQUc7Ozs7O1lBQ2pDLEVBQ1A7Q0FDSDtBQXhNdUJuQixLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkbWluL0FkZFRlc3QuanN4PzBmM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEZvcm1EYXRhIGZyb20gXCJmb3JtLWRhdGFcIjtcclxuXHJcbmNvbnN0IGFwaSA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9wb3N0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRUZXN0KCkge1xyXG4gIC8vICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgLy8gICAgIG5hbWU6IFwiXCIsXHJcbiAgLy8gICAgIGltYWdlOiBudWxsLFxyXG4gIC8vICAgICB5ZWFyOiBcIlwiLFxyXG4gIC8vICAgICBjb2xvcjogXCJcIixcclxuICAvLyAgICAgcHJpY2U6IFwiXCIsXHJcbiAgLy8gICAgIGRyaXZpbmc6IFwiXCIsXHJcbiAgLy8gICAgIG1haW5pbWFnZTogXCJcIixcclxuICAvLyAgICAgc2Vjb25kaW1hZ2U6IFwiXCIsXHJcbiAgLy8gICAgIHRoaXJkaW1hZ2U6IFwiXCIsXHJcbiAgLy8gICAgIGNvdW50cnk6IFwiXCIsXHJcbiAgLy8gICAgIG1pbGVhZ2U6IFwiXCIsXHJcbiAgLy8gICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gIC8vICAgICBlcXVpcG1lbnQ6IFwiXCIsXHJcbiAgLy8gICB9KTtcclxuXHJcbiAgLy8gICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gIC8vICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcblxyXG4gIC8vICAgICBzZXRGb3JtRGF0YSh7XHJcbiAgLy8gICAgICAgLi4uZm9ybURhdGEsXHJcbiAgLy8gICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICB9O1xyXG5cclxuICAvLyAgIGNvbnN0IGhhbmRsZUZpbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gIC8vICAgICBzZXRGb3JtRGF0YSh7XHJcbiAgLy8gICAgICAgLi4uZm9ybURhdGEsXHJcbiAgLy8gICAgICAgaW1hZ2U6IGV2ZW50LnRhcmdldC5maWxlc1swXSxcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICB9O1xyXG5cclxuICAvLyAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAvLyAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIC8vICAgICBkYXRhLmFwcGVuZChcIm5hbWVcIiwgZm9ybURhdGEubmFtZSk7XHJcbiAgLy8gICAgIGRhdGEuYXBwZW5kKFwieWVhclwiLCBmb3JtRGF0YS55ZWFyKTtcclxuICAvLyAgICAgZGF0YS5hcHBlbmQoXCJjb2xvclwiLCBmb3JtRGF0YS5jb2xvcik7XHJcbiAgLy8gICAgIGRhdGEuYXBwZW5kKFwicHJpY2VcIiwgZm9ybURhdGEucHJpY2UpO1xyXG4gIC8vICAgICBkYXRhLmFwcGVuZChcImRyaXZpbmdcIiwgZm9ybURhdGEuZHJpdmluZyk7XHJcbiAgLy8gICAgIGRhdGEuYXBwZW5kKFwibWFpbmltYWdlXCIsIGZvcm1EYXRhLm1haW5pbWFnZSk7XHJcbiAgLy8gICAgIGRhdGEuYXBwZW5kKFwic2Vjb25kaW1hZ2VcIiwgZm9ybURhdGEuc2Vjb25kaW1hZ2UpO1xyXG4gIC8vICAgICBkYXRhLmFwcGVuZChcInRoaXJkaW1hZ2VcIiwgZm9ybURhdGEudGhpcmRpbWFnZSk7XHJcbiAgLy8gICAgIGRhdGEuYXBwZW5kKFwiY291bnRyeVwiLCBmb3JtRGF0YS5jb3VudHJ5KTtcclxuICAvLyAgICAgZGF0YS5hcHBlbmQoXCJtaWxlYWdlXCIsIGZvcm1EYXRhLm1pbGVhZ2UpO1xyXG4gIC8vICAgICBkYXRhLmFwcGVuZChcImRlc2NyaXB0aW9uXCIsIGZvcm1EYXRhLmRlc2NyaXB0aW9uKTtcclxuICAvLyAgICAgZGF0YS5hcHBlbmQoXCJlcXVpcG1lbnRcIiwgZm9ybURhdGEuZXF1aXBtZW50KTtcclxuICAvLyAgICAgZGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBmb3JtRGF0YS5pbWFnZSk7XHJcblxyXG4gIC8vICAgICBheGlvc1xyXG4gIC8vICAgICAgIC5wb3N0KGFwaSwgZGF0YSlcclxuICAvLyAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAvLyAgICAgICB9KVxyXG4gIC8vICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgIH07XHJcbiAgLy8gICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBkYXRhLmFwcGVuZChcIm5hbWVcIiwgXCJKb2huXCIpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJ5ZWFyXCIsIFwiMjAyMlwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwiY29sb3JcIiwgXCJibHVlXCIpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJwcmljZVwiLCBcIjEwMDAwXCIpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJkcml2aW5nXCIsIFwiNFdEXCIpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJtYWluaW1hZ2VcIiwgXCJtYWluLmpwZ1wiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwic2Vjb25kaW1hZ2VcIiwgXCJzZWNvbmQuanBnXCIpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJ0aGlyZGltYWdlXCIsIFwidGhpcmQuanBnXCIpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJjb3VudHJ5XCIsIFwiVVNBXCIpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJtaWxlYWdlXCIsIFwiMTAwMDBcIik7XHJcbiAgICBkYXRhLmFwcGVuZChcImRlc2NyaXB0aW9uXCIsIFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uXCIpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJlcXVpcG1lbnRcIiwgXCJQb3dlciB3aW5kb3dzLCBBL0NcIik7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKFwiaW1hZ2UuanBnXCIpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGFwaSwgZGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IGBtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0ke2RhdGEuX2JvdW5kYXJ5fWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgIC8vICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAvLyAgIDxpbnB1dFxyXG4gICAgLy8gICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAvLyAgICAgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9XHJcbiAgICAvLyAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgLy8gICAvPlxyXG5cclxuICAgIC8vICAgPGxhYmVsIGh0bWxGb3I9XCJ5ZWFyXCI+WWVhcjwvbGFiZWw+XHJcbiAgICAvLyAgIDxpbnB1dFxyXG4gICAgLy8gICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICBuYW1lPVwieWVhclwiXHJcbiAgICAvLyAgICAgdmFsdWU9e2Zvcm1EYXRhLnllYXJ9XHJcbiAgICAvLyAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgLy8gICAvPlxyXG5cclxuICAgIC8vICAgPGxhYmVsIGh0bWxGb3I9XCJjb2xvclwiPkNvbG9yPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJjb2xvclwiXHJcbiAgICAvLyAgICAgdmFsdWU9e2Zvcm1EYXRhLmNvbG9yfVxyXG4gICAgLy8gICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgIC8vICAgLz5cclxuXHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5QcmljZTwvbGFiZWw+XHJcbiAgICAvLyAgIDxpbnB1dFxyXG4gICAgLy8gICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgLy8gICAgIHZhbHVlPXtmb3JtRGF0YS5wcmljZX1cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcblxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cImRyaXZpbmdcIj5Ecml2aW5nPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJkcml2aW5nXCJcclxuICAgIC8vICAgICB2YWx1ZT17Zm9ybURhdGEuZHJpdmluZ31cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcblxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cIm1haW5pbWFnZVwiPk1haW4gSW1hZ2U8L2xhYmVsPlxyXG4gICAgLy8gICA8aW5wdXRcclxuICAgIC8vICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgICAgbmFtZT1cIm1haW5pbWFnZVwiXHJcbiAgICAvLyAgICAgdmFsdWU9e2Zvcm1EYXRhLm1haW5pbWFnZX1cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcblxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cInNlY29uZGltYWdlXCI+U2Vjb25kIEltYWdlPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJzZWNvbmRpbWFnZVwiXHJcbiAgICAvLyAgICAgdmFsdWU9e2Zvcm1EYXRhLnNlY29uZGltYWdlfVxyXG4gICAgLy8gICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgIC8vICAgLz5cclxuXHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwidGhpcmRpbWFnZVwiPlRoaXJkIEltYWdlPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJ0aGlyZGltYWdlXCJcclxuICAgIC8vICAgICB2YWx1ZT17Zm9ybURhdGEudGhpcmRpbWFnZX1cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcblxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cImNvdW50cnlcIj5Db3VudHJ5PC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJjb3VudHJ5XCJcclxuICAgIC8vICAgICB2YWx1ZT17Zm9ybURhdGEuY291bnRyeX1cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcblxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cIm1pbGVhZ2VcIj5NaWxlYWdlPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJtaWxlYWdlXCJcclxuICAgIC8vICAgICB2YWx1ZT17Zm9ybURhdGEubWlsZWFnZX1cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAvLyAgIDxpbnB1dFxyXG4gICAgLy8gICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgLy8gICAgIHZhbHVlPXtmb3JtRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcblxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cImVxdWlwbWVudFwiPkVxdWlwbWVudDwvbGFiZWw+XHJcbiAgICAvLyAgIDxpbnB1dFxyXG4gICAgLy8gICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICBuYW1lPVwiZXF1aXBtZW50XCJcclxuICAgIC8vICAgICB2YWx1ZT17Zm9ybURhdGEuZXF1aXBtZW50fVxyXG4gICAgLy8gICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgIC8vICAgLz5cclxuXHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VcIj5JbWFnZTwvbGFiZWw+XHJcbiAgICAvLyAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZVwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlSW5wdXRDaGFuZ2V9IC8+XHJcblxyXG4gICAgLy8gICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgIC8vIDwvZm9ybT5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJGb3JtRGF0YSIsImFwaSIsIkFkZFRlc3QiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsImRhdGEiLCJpbWFnZSIsInJlc3BvbnNlIiwicHJldmVudERlZmF1bHQiLCJhcHBlbmQiLCJmcyIsImNyZWF0ZVJlYWRTdHJlYW0iLCJwb3N0IiwiaGVhZGVycyIsIl9ib3VuZGFyeSIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Admin/AddTest.jsx\n"));

/***/ })

});
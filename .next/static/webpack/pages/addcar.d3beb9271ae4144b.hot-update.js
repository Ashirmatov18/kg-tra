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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddTest; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\n\n\nvar api = \"http://localhost:5000/api/post\";\nfunction AddTest() {\n    //   const [formData, setFormData] = useState({\n    //     name: \"\",\n    //     image: null,\n    //     year: \"\",\n    //     color: \"\",\n    //     price: \"\",\n    //     driving: \"\",\n    //     mainimage: \"\",\n    //     secondimage: \"\",\n    //     thirdimage: \"\",\n    //     country: \"\",\n    //     mileage: \"\",\n    //     description: \"\",\n    //     equipment: \"\",\n    //   });\n    //   const handleInputChange = (event) => {\n    //     const { name, value } = event.target;\n    //     setFormData({\n    //       ...formData,\n    //       [name]: value,\n    //     });\n    //   };\n    //   const handleFileInputChange = (event) => {\n    //     setFormData({\n    //       ...formData,\n    //       image: event.target.files[0],\n    //     });\n    //   };\n    //   const handleSubmit = (event) => {\n    //     event.preventDefault();\n    //     const data = new FormData();\n    //     data.append(\"name\", formData.name);\n    //     data.append(\"year\", formData.year);\n    //     data.append(\"color\", formData.color);\n    //     data.append(\"price\", formData.price);\n    //     data.append(\"driving\", formData.driving);\n    //     data.append(\"mainimage\", formData.mainimage);\n    //     data.append(\"secondimage\", formData.secondimage);\n    //     data.append(\"thirdimage\", formData.thirdimage);\n    //     data.append(\"country\", formData.country);\n    //     data.append(\"mileage\", formData.mileage);\n    //     data.append(\"description\", formData.description);\n    //     data.append(\"equipment\", formData.equipment);\n    //     data.append(\"image\", formData.image);\n    //     axios\n    //       .post(api, data)\n    //       .then((response) => {\n    //         console.log(response);\n    //       })\n    //       .catch((error) => {\n    //         console.log(error);\n    //       });\n    //   };\n    //   console.log(formData);\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var data, image, response;\n            return C_Users_ASUS_Desktop_traiding_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        data = new FormData();\n                        data.append(\"name\", \"John\");\n                        data.append(\"year\", \"2022\");\n                        data.append(\"color\", \"blue\");\n                        data.append(\"price\", \"10000\");\n                        data.append(\"driving\", \"4WD\");\n                        data.append(\"mainimage\", \"main.jpg\");\n                        data.append(\"secondimage\", \"second.jpg\");\n                        data.append(\"thirdimage\", \"third.jpg\");\n                        data.append(\"country\", \"USA\");\n                        data.append(\"mileage\", \"10000\");\n                        data.append(\"description\", \"This is a description\");\n                        data.append(\"equipment\", \"Power windows, A/C\");\n                        image = fs.createReadStream(\"image.jpg\");\n                        data.append(\"image\", image);\n                        _ctx.prev = 16;\n                        _ctx.next = 19;\n                        return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/post\", data, {\n                            headers: {\n                                \"Content-Type\": \"multipart/form-data; boundary=\".concat(data._boundary)\n                            }\n                        });\n                    case 19:\n                        response = _ctx.sent;\n                        console.log(response.data);\n                        _ctx.next = 26;\n                        break;\n                    case 23:\n                        _ctx.prev = 23;\n                        _ctx.t0 = _ctx[\"catch\"](16);\n                        console.log(_ctx.t0);\n                    case 26:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    16,\n                    23\n                ]\n            ]);\n        }));\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(// <form onSubmit={handleSubmit}>\n    //   <label htmlFor=\"name\">Name</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"name\"\n    //     value={formData.name}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"year\">Year</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"year\"\n    //     value={formData.year}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"color\">Color</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"color\"\n    //     value={formData.color}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"price\">Price</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"price\"\n    //     value={formData.price}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"driving\">Driving</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"driving\"\n    //     value={formData.driving}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"mainimage\">Main Image</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"mainimage\"\n    //     value={formData.mainimage}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"secondimage\">Second Image</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"secondimage\"\n    //     value={formData.secondimage}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"thirdimage\">Third Image</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"thirdimage\"\n    //     value={formData.thirdimage}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"country\">Country</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"country\"\n    //     value={formData.country}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"mileage\">Mileage</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"mileage\"\n    //     value={formData.mileage}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"description\">Description</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"description\"\n    //     value={formData.description}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"equipment\">Equipment</label>\n    //   <input\n    //     type=\"text\"\n    //     name=\"equipment\"\n    //     value={formData.equipment}\n    //     onChange={handleInputChange}\n    //   />\n    //   <label htmlFor=\"image\">Image</label>\n    //   <input type=\"file\" name=\"image\" onChange={handleFileInputChange} />\n    //   <button type=\"submit\">Submit</button>\n    // </form>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"submit\",\n            value: \"Submit\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n            lineNumber: 203,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\traiding\\\\front\\\\src\\\\components\\\\Admin\\\\AddTest.jsx\",\n        lineNumber: 202,\n        columnNumber: 5\n    }, this));\n};\n_c = AddTest;\nvar _c;\n$RefreshReg$(_c, \"AddTest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZG1pbi9BZGRUZXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQXdDO0FBQ2Q7QUFFMUIsSUFBTUcsR0FBRyxHQUFHLGdDQUFnQztBQUU3QixTQUFTQyxPQUFPLEdBQUc7SUFDaEMsK0NBQStDO0lBQy9DLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixRQUFRO0lBRVIsMkNBQTJDO0lBQzNDLDRDQUE0QztJQUU1QyxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsT0FBTztJQUVQLCtDQUErQztJQUMvQyxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHNDQUFzQztJQUN0QyxVQUFVO0lBQ1YsT0FBTztJQUVQLHNDQUFzQztJQUN0Qyw4QkFBOEI7SUFFOUIsbUNBQW1DO0lBQ25DLDBDQUEwQztJQUMxQywwQ0FBMEM7SUFDMUMsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1QyxnREFBZ0Q7SUFDaEQsb0RBQW9EO0lBQ3BELHdEQUF3RDtJQUN4RCxzREFBc0Q7SUFDdEQsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCx3REFBd0Q7SUFDeEQsb0RBQW9EO0lBQ3BELDRDQUE0QztJQUU1QyxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLE9BQU87SUFDUCwyQkFBMkI7SUFFM0IsSUFBTUMsWUFBWTttQkFBRyxvUEFBT0MsS0FBSyxFQUFLO2dCQUc5QkMsSUFBSSxFQWNKQyxLQUFLLEVBSUhDLFFBQVE7Ozs7d0JBcEJoQkgsS0FBSyxDQUFDSSxjQUFjLEVBQUUsQ0FBQzt3QkFFakJILElBQUksR0FBRyxJQUFJSSxRQUFRLEVBQUUsQ0FBQzt3QkFDNUJKLElBQUksQ0FBQ0ssTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDNUJMLElBQUksQ0FBQ0ssTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDNUJMLElBQUksQ0FBQ0ssTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDN0JMLElBQUksQ0FBQ0ssTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFDOUJMLElBQUksQ0FBQ0ssTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDOUJMLElBQUksQ0FBQ0ssTUFBTSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQzt3QkFDckNMLElBQUksQ0FBQ0ssTUFBTSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQzt3QkFDekNMLElBQUksQ0FBQ0ssTUFBTSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQzt3QkFDdkNMLElBQUksQ0FBQ0ssTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDOUJMLElBQUksQ0FBQ0ssTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFDaENMLElBQUksQ0FBQ0ssTUFBTSxDQUFDLGFBQWEsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO3dCQUNwREwsSUFBSSxDQUFDSyxNQUFNLENBQUMsV0FBVyxFQUFFLG9CQUFvQixDQUFDLENBQUM7d0JBRXpDSixLQUFLLEdBQUdLLEVBQUUsQ0FBQ0MsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQy9DUCxJQUFJLENBQUNLLE1BQU0sQ0FBQyxPQUFPLEVBQUVKLEtBQUssQ0FBQyxDQUFDOzs7K0JBR0hOLGtEQUFVLENBQUMsV0FBVyxFQUFFSyxJQUFJLEVBQUU7NEJBQ25EUyxPQUFPLEVBQUU7Z0NBQ1AsY0FBYyxFQUFFLGdDQUErQixDQUFpQixPQUFmVCxJQUFJLENBQUNVLFNBQVMsQ0FBRTs2QkFDbEU7eUJBQ0YsQ0FBQzs7d0JBSklSLFFBQVEsWUFJWjt3QkFDRlMsT0FBTyxDQUFDQyxHQUFHLENBQUNWLFFBQVEsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7Ozs7Ozt3QkFFM0JXLE9BQU8sQ0FBQ0MsR0FBRyxTQUFPLENBQUM7Ozs7Ozs7Ozs7O1NBRXRCO3dCQTlCS2QsWUFBWSxDQUFVQyxLQUFLOzs7T0E4QmhDO0lBRUQsT0FDRSxpQ0FBaUM7SUFDakMsdUNBQXVDO0lBQ3ZDLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixtQ0FBbUM7SUFDbkMsT0FBTztJQUVQLHVDQUF1QztJQUN2QyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsbUNBQW1DO0lBQ25DLE9BQU87SUFFUCx5Q0FBeUM7SUFDekMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1DQUFtQztJQUNuQyxPQUFPO0lBRVAseUNBQXlDO0lBQ3pDLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQ0FBbUM7SUFDbkMsT0FBTztJQUVQLDZDQUE2QztJQUM3QyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsbUNBQW1DO0lBQ25DLE9BQU87SUFFUCxrREFBa0Q7SUFDbEQsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUNuQyxPQUFPO0lBRVAsc0RBQXNEO0lBQ3RELFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsT0FBTztJQUVQLG9EQUFvRDtJQUNwRCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixrQ0FBa0M7SUFDbEMsbUNBQW1DO0lBQ25DLE9BQU87SUFFUCw2Q0FBNkM7SUFDN0MsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQyxPQUFPO0lBRVAsNkNBQTZDO0lBQzdDLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLCtCQUErQjtJQUMvQixtQ0FBbUM7SUFDbkMsT0FBTztJQUNQLHFEQUFxRDtJQUNyRCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLE9BQU87SUFFUCxpREFBaUQ7SUFDakQsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUNuQyxPQUFPO0lBRVAseUNBQXlDO0lBQ3pDLHdFQUF3RTtJQUV4RSwwQ0FBMEM7SUFDMUMsVUFBVTtrQkFDViw4REFBQ2MsTUFBSTtRQUFDQyxRQUFRLEVBQUVoQixZQUFZO2tCQUMxQiw0RUFBQ2lCLE9BQUs7WUFBQ0MsSUFBSSxFQUFDLFFBQVE7WUFBQ0MsS0FBSyxFQUFDLFFBQVE7Ozs7O2dCQUFHOzs7OztZQUNqQyxFQUNQO0NBQ0g7QUF4TXVCcEIsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BZG1pbi9BZGRUZXN0LmpzeD8wZjNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBhcGkgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvcG9zdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVGVzdCgpIHtcclxuICAvLyAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gIC8vICAgICBuYW1lOiBcIlwiLFxyXG4gIC8vICAgICBpbWFnZTogbnVsbCxcclxuICAvLyAgICAgeWVhcjogXCJcIixcclxuICAvLyAgICAgY29sb3I6IFwiXCIsXHJcbiAgLy8gICAgIHByaWNlOiBcIlwiLFxyXG4gIC8vICAgICBkcml2aW5nOiBcIlwiLFxyXG4gIC8vICAgICBtYWluaW1hZ2U6IFwiXCIsXHJcbiAgLy8gICAgIHNlY29uZGltYWdlOiBcIlwiLFxyXG4gIC8vICAgICB0aGlyZGltYWdlOiBcIlwiLFxyXG4gIC8vICAgICBjb3VudHJ5OiBcIlwiLFxyXG4gIC8vICAgICBtaWxlYWdlOiBcIlwiLFxyXG4gIC8vICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAvLyAgICAgZXF1aXBtZW50OiBcIlwiLFxyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAvLyAgICAgc2V0Rm9ybURhdGEoe1xyXG4gIC8vICAgICAgIC4uLmZvcm1EYXRhLFxyXG4gIC8vICAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgfTtcclxuXHJcbiAgLy8gICBjb25zdCBoYW5kbGVGaWxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgICAgc2V0Rm9ybURhdGEoe1xyXG4gIC8vICAgICAgIC4uLmZvcm1EYXRhLFxyXG4gIC8vICAgICAgIGltYWdlOiBldmVudC50YXJnZXQuZmlsZXNbMF0sXHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vICAgfTtcclxuXHJcbiAgLy8gICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgLy8gICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAvLyAgICAgZGF0YS5hcHBlbmQoXCJuYW1lXCIsIGZvcm1EYXRhLm5hbWUpO1xyXG4gIC8vICAgICBkYXRhLmFwcGVuZChcInllYXJcIiwgZm9ybURhdGEueWVhcik7XHJcbiAgLy8gICAgIGRhdGEuYXBwZW5kKFwiY29sb3JcIiwgZm9ybURhdGEuY29sb3IpO1xyXG4gIC8vICAgICBkYXRhLmFwcGVuZChcInByaWNlXCIsIGZvcm1EYXRhLnByaWNlKTtcclxuICAvLyAgICAgZGF0YS5hcHBlbmQoXCJkcml2aW5nXCIsIGZvcm1EYXRhLmRyaXZpbmcpO1xyXG4gIC8vICAgICBkYXRhLmFwcGVuZChcIm1haW5pbWFnZVwiLCBmb3JtRGF0YS5tYWluaW1hZ2UpO1xyXG4gIC8vICAgICBkYXRhLmFwcGVuZChcInNlY29uZGltYWdlXCIsIGZvcm1EYXRhLnNlY29uZGltYWdlKTtcclxuICAvLyAgICAgZGF0YS5hcHBlbmQoXCJ0aGlyZGltYWdlXCIsIGZvcm1EYXRhLnRoaXJkaW1hZ2UpO1xyXG4gIC8vICAgICBkYXRhLmFwcGVuZChcImNvdW50cnlcIiwgZm9ybURhdGEuY291bnRyeSk7XHJcbiAgLy8gICAgIGRhdGEuYXBwZW5kKFwibWlsZWFnZVwiLCBmb3JtRGF0YS5taWxlYWdlKTtcclxuICAvLyAgICAgZGF0YS5hcHBlbmQoXCJkZXNjcmlwdGlvblwiLCBmb3JtRGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgLy8gICAgIGRhdGEuYXBwZW5kKFwiZXF1aXBtZW50XCIsIGZvcm1EYXRhLmVxdWlwbWVudCk7XHJcbiAgLy8gICAgIGRhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgZm9ybURhdGEuaW1hZ2UpO1xyXG5cclxuICAvLyAgICAgYXhpb3NcclxuICAvLyAgICAgICAucG9zdChhcGksIGRhdGEpXHJcbiAgLy8gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgLy8gICAgICAgfSlcclxuICAvLyAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICB9O1xyXG4gIC8vICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJuYW1lXCIsIFwiSm9oblwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwieWVhclwiLCBcIjIwMjJcIik7XHJcbiAgICBkYXRhLmFwcGVuZChcImNvbG9yXCIsIFwiYmx1ZVwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwicHJpY2VcIiwgXCIxMDAwMFwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwiZHJpdmluZ1wiLCBcIjRXRFwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwibWFpbmltYWdlXCIsIFwibWFpbi5qcGdcIik7XHJcbiAgICBkYXRhLmFwcGVuZChcInNlY29uZGltYWdlXCIsIFwic2Vjb25kLmpwZ1wiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwidGhpcmRpbWFnZVwiLCBcInRoaXJkLmpwZ1wiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwiY291bnRyeVwiLCBcIlVTQVwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwibWlsZWFnZVwiLCBcIjEwMDAwXCIpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJkZXNjcmlwdGlvblwiLCBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvblwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwiZXF1aXBtZW50XCIsIFwiUG93ZXIgd2luZG93cywgQS9DXCIpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlID0gZnMuY3JlYXRlUmVhZFN0cmVhbShcImltYWdlLmpwZ1wiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgaW1hZ2UpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvcG9zdFwiLCBkYXRhLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogYG11bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PSR7ZGF0YS5fYm91bmRhcnl9YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJuYW1lXCJcclxuICAgIC8vICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcblxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cInllYXJcIj5ZZWFyPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJ5ZWFyXCJcclxuICAgIC8vICAgICB2YWx1ZT17Zm9ybURhdGEueWVhcn1cclxuICAgIC8vICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAvLyAgIC8+XHJcblxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cImNvbG9yXCI+Q29sb3I8L2xhYmVsPlxyXG4gICAgLy8gICA8aW5wdXRcclxuICAgIC8vICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgICAgbmFtZT1cImNvbG9yXCJcclxuICAgIC8vICAgICB2YWx1ZT17Zm9ybURhdGEuY29sb3J9XHJcbiAgICAvLyAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgLy8gICAvPlxyXG5cclxuICAgIC8vICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlByaWNlPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAvLyAgICAgdmFsdWU9e2Zvcm1EYXRhLnByaWNlfVxyXG4gICAgLy8gICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgIC8vICAgLz5cclxuXHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwiZHJpdmluZ1wiPkRyaXZpbmc8L2xhYmVsPlxyXG4gICAgLy8gICA8aW5wdXRcclxuICAgIC8vICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgICAgbmFtZT1cImRyaXZpbmdcIlxyXG4gICAgLy8gICAgIHZhbHVlPXtmb3JtRGF0YS5kcml2aW5nfVxyXG4gICAgLy8gICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgIC8vICAgLz5cclxuXHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwibWFpbmltYWdlXCI+TWFpbiBJbWFnZTwvbGFiZWw+XHJcbiAgICAvLyAgIDxpbnB1dFxyXG4gICAgLy8gICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgIC8vICAgICBuYW1lPVwibWFpbmltYWdlXCJcclxuICAgIC8vICAgICB2YWx1ZT17Zm9ybURhdGEubWFpbmltYWdlfVxyXG4gICAgLy8gICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgIC8vICAgLz5cclxuXHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwic2Vjb25kaW1hZ2VcIj5TZWNvbmQgSW1hZ2U8L2xhYmVsPlxyXG4gICAgLy8gICA8aW5wdXRcclxuICAgIC8vICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgICAgbmFtZT1cInNlY29uZGltYWdlXCJcclxuICAgIC8vICAgICB2YWx1ZT17Zm9ybURhdGEuc2Vjb25kaW1hZ2V9XHJcbiAgICAvLyAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgLy8gICAvPlxyXG5cclxuICAgIC8vICAgPGxhYmVsIGh0bWxGb3I9XCJ0aGlyZGltYWdlXCI+VGhpcmQgSW1hZ2U8L2xhYmVsPlxyXG4gICAgLy8gICA8aW5wdXRcclxuICAgIC8vICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgICAgbmFtZT1cInRoaXJkaW1hZ2VcIlxyXG4gICAgLy8gICAgIHZhbHVlPXtmb3JtRGF0YS50aGlyZGltYWdlfVxyXG4gICAgLy8gICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgIC8vICAgLz5cclxuXHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwiY291bnRyeVwiPkNvdW50cnk8L2xhYmVsPlxyXG4gICAgLy8gICA8aW5wdXRcclxuICAgIC8vICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgICAgbmFtZT1cImNvdW50cnlcIlxyXG4gICAgLy8gICAgIHZhbHVlPXtmb3JtRGF0YS5jb3VudHJ5fVxyXG4gICAgLy8gICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgIC8vICAgLz5cclxuXHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwibWlsZWFnZVwiPk1pbGVhZ2U8L2xhYmVsPlxyXG4gICAgLy8gICA8aW5wdXRcclxuICAgIC8vICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAvLyAgICAgbmFtZT1cIm1pbGVhZ2VcIlxyXG4gICAgLy8gICAgIHZhbHVlPXtmb3JtRGF0YS5taWxlYWdlfVxyXG4gICAgLy8gICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgIC8vICAgLz5cclxuICAgIC8vICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAvLyAgICAgdmFsdWU9e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgLy8gICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgIC8vICAgLz5cclxuXHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwiZXF1aXBtZW50XCI+RXF1aXBtZW50PC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0XHJcbiAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgLy8gICAgIG5hbWU9XCJlcXVpcG1lbnRcIlxyXG4gICAgLy8gICAgIHZhbHVlPXtmb3JtRGF0YS5lcXVpcG1lbnR9XHJcbiAgICAvLyAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgLy8gICAvPlxyXG5cclxuICAgIC8vICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPkltYWdlPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltYWdlXCIgb25DaGFuZ2U9e2hhbmRsZUZpbGVJbnB1dENoYW5nZX0gLz5cclxuXHJcbiAgICAvLyAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgLy8gPC9mb3JtPlxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsImFwaSIsIkFkZFRlc3QiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsImRhdGEiLCJpbWFnZSIsInJlc3BvbnNlIiwicHJldmVudERlZmF1bHQiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZzIiwiY3JlYXRlUmVhZFN0cmVhbSIsInBvc3QiLCJoZWFkZXJzIiwiX2JvdW5kYXJ5IiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Admin/AddTest.jsx\n"));

/***/ })

});
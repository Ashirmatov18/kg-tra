"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/addcar";
exports.ids = ["pages/addcar"];
exports.modules = {

/***/ "./src/components/Admin/AddTest.jsx":
/*!******************************************!*\
  !*** ./src/components/Admin/AddTest.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddTest)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! form-data */ \"form-data\");\n/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction AddTest() {\n    const { 0: carData , 1: setCarData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        year: \"\",\n        color: \"\",\n        price: \"\",\n        driving: \"\",\n        image: null,\n        mainimage: \"\",\n        secondimage: \"\",\n        thirdimage: \"\",\n        country: \"\",\n        mileage: \"\",\n        description: \"\",\n        equipment: \"\"\n    });\n    const handleChange = (e)=>{\n        const { name , value , files  } = e.target;\n        const formData = new (form_data__WEBPACK_IMPORTED_MODULE_3___default())();\n        if (files) {\n            formData.append(\"image\", files[0]);\n        }\n        formData.append(name, value);\n        setCarData((prevData)=>({\n                ...prevData,\n                [name]: files ? files[0] : value\n            }));\n    };\n    console.log(carData);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const formData = new (form_data__WEBPACK_IMPORTED_MODULE_3___default())();\n        formData.append(\"name\", carData.name);\n        formData.append(\"year\", carData.year);\n        formData.append(\"color\", carData.color);\n        formData.append(\"price\", carData.price);\n        formData.append(\"driving\", carData.driving);\n        formData.append(\"image\", carData.image);\n        formData.append(\"mainimage\", carData.mainimage);\n        formData.append(\"secondimage\", carData.secondimage);\n        formData.append(\"thirdimage\", carData.thirdimage);\n        formData.append(\"country\", carData.country);\n        formData.append(\"mileage\", carData.mileage);\n        formData.append(\"description\", carData.description);\n        formData.append(\"equipment\", carData.equipment);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3306/api/post\", // \"https://node-traiding.vercel.app/api/post\",\n            formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            console.log(response.data);\n        // handle success\n        } catch (error) {\n            console.log(error);\n        // handle error\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        enctype: \"multipart/form-data\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"name\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/components/Admin/AddTest.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                name: \"year\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/components/Admin/AddTest.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"color\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/components/Admin/AddTest.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                name: \"price\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/components/Admin/AddTest.jsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"driving\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/components/Admin/AddTest.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                name: \"image\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/components/Admin/AddTest.jsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"mainimage\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/components/Admin/AddTest.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"secondimage\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/components/Admin/AddTest.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"thirdimage\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/components/Admin/AddTest.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"country\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/components/Admin/AddTest.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                name: \"mileage\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/components/Admin/AddTest.jsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"description\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/components/Admin/AddTest.jsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                name: \"equipment\",\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/components/Admin/AddTest.jsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/components/Admin/AddTest.jsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/components/Admin/AddTest.jsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZG1pbi9BZGRUZXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ2Q7QUFDTztBQUVsQixTQUFTSSxPQUFPLEdBQUc7SUFDaEMsTUFBTSxLQUFDQyxPQUFPLE1BQUVDLFVBQVUsTUFBSUwsK0NBQVEsQ0FBQztRQUNyQ00sSUFBSSxFQUFFLEVBQUU7UUFDUkMsSUFBSSxFQUFFLEVBQUU7UUFDUkMsS0FBSyxFQUFFLEVBQUU7UUFDVEMsS0FBSyxFQUFFLEVBQUU7UUFDVEMsT0FBTyxFQUFFLEVBQUU7UUFDWEMsS0FBSyxFQUFFLElBQUk7UUFDWEMsU0FBUyxFQUFFLEVBQUU7UUFDYkMsV0FBVyxFQUFFLEVBQUU7UUFDZkMsVUFBVSxFQUFFLEVBQUU7UUFDZEMsT0FBTyxFQUFFLEVBQUU7UUFDWEMsT0FBTyxFQUFFLEVBQUU7UUFDWEMsV0FBVyxFQUFFLEVBQUU7UUFDZkMsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDO0lBRUYsTUFBTUMsWUFBWSxHQUFHLENBQUNDLENBQUMsR0FBSztRQUMxQixNQUFNLEVBQUVkLElBQUksR0FBRWUsS0FBSyxHQUFFQyxLQUFLLEdBQUUsR0FBR0YsQ0FBQyxDQUFDRyxNQUFNO1FBQ3ZDLE1BQU1DLFFBQVEsR0FBRyxJQUFJdEIsa0RBQVEsRUFBRTtRQUUvQixJQUFJb0IsS0FBSyxFQUFFO1lBQ1RFLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLE9BQU8sRUFBRUgsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEM7UUFFREUsUUFBUSxDQUFDQyxNQUFNLENBQUNuQixJQUFJLEVBQUVlLEtBQUssQ0FBQyxDQUFDO1FBRTdCaEIsVUFBVSxDQUFDLENBQUNxQixRQUFRLEdBQUssQ0FBQztnQkFDeEIsR0FBR0EsUUFBUTtnQkFDWCxDQUFDcEIsSUFBSSxDQUFDLEVBQUVnQixLQUFLLEdBQUdBLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBR0QsS0FBSzthQUNqQyxDQUFDLENBQUMsQ0FBQztLQUNMO0lBRURNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeEIsT0FBTyxDQUFDLENBQUM7SUFFckIsTUFBTXlCLFlBQVksR0FBRyxPQUFPVCxDQUFDLEdBQUs7UUFDaENBLENBQUMsQ0FBQ1UsY0FBYyxFQUFFLENBQUM7UUFDbkIsTUFBTU4sUUFBUSxHQUFHLElBQUl0QixrREFBUSxFQUFFO1FBQy9Cc0IsUUFBUSxDQUFDQyxNQUFNLENBQUMsTUFBTSxFQUFFckIsT0FBTyxDQUFDRSxJQUFJLENBQUMsQ0FBQztRQUN0Q2tCLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sRUFBRXJCLE9BQU8sQ0FBQ0csSUFBSSxDQUFDLENBQUM7UUFDdENpQixRQUFRLENBQUNDLE1BQU0sQ0FBQyxPQUFPLEVBQUVyQixPQUFPLENBQUNJLEtBQUssQ0FBQyxDQUFDO1FBQ3hDZ0IsUUFBUSxDQUFDQyxNQUFNLENBQUMsT0FBTyxFQUFFckIsT0FBTyxDQUFDSyxLQUFLLENBQUMsQ0FBQztRQUN4Q2UsUUFBUSxDQUFDQyxNQUFNLENBQUMsU0FBUyxFQUFFckIsT0FBTyxDQUFDTSxPQUFPLENBQUMsQ0FBQztRQUM1Q2MsUUFBUSxDQUFDQyxNQUFNLENBQUMsT0FBTyxFQUFFckIsT0FBTyxDQUFDTyxLQUFLLENBQUMsQ0FBQztRQUN4Q2EsUUFBUSxDQUFDQyxNQUFNLENBQUMsV0FBVyxFQUFFckIsT0FBTyxDQUFDUSxTQUFTLENBQUMsQ0FBQztRQUNoRFksUUFBUSxDQUFDQyxNQUFNLENBQUMsYUFBYSxFQUFFckIsT0FBTyxDQUFDUyxXQUFXLENBQUMsQ0FBQztRQUNwRFcsUUFBUSxDQUFDQyxNQUFNLENBQUMsWUFBWSxFQUFFckIsT0FBTyxDQUFDVSxVQUFVLENBQUMsQ0FBQztRQUNsRFUsUUFBUSxDQUFDQyxNQUFNLENBQUMsU0FBUyxFQUFFckIsT0FBTyxDQUFDVyxPQUFPLENBQUMsQ0FBQztRQUM1Q1MsUUFBUSxDQUFDQyxNQUFNLENBQUMsU0FBUyxFQUFFckIsT0FBTyxDQUFDWSxPQUFPLENBQUMsQ0FBQztRQUM1Q1EsUUFBUSxDQUFDQyxNQUFNLENBQUMsYUFBYSxFQUFFckIsT0FBTyxDQUFDYSxXQUFXLENBQUMsQ0FBQztRQUNwRE8sUUFBUSxDQUFDQyxNQUFNLENBQUMsV0FBVyxFQUFFckIsT0FBTyxDQUFDYyxTQUFTLENBQUMsQ0FBQztRQUVoRCxJQUFJO1lBQ0YsTUFBTWEsUUFBUSxHQUFHLE1BQU05QixrREFBVSxDQUMvQixnQ0FBZ0MsRUFDaEMsK0NBQStDO1lBQy9DdUIsUUFBUSxFQUNSO2dCQUNFUyxPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLHFCQUFxQjtpQkFDdEM7YUFDRixDQUNGO1lBQ0ROLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDO1FBQzNCLGlCQUFpQjtTQUNsQixDQUFDLE9BQU9DLEtBQUssRUFBRTtZQUNkUixPQUFPLENBQUNDLEdBQUcsQ0FBQ08sS0FBSyxDQUFDLENBQUM7UUFDbkIsZUFBZTtTQUNoQjtLQUNGO0lBRUQscUJBQ0UsOERBQUNDLE1BQUk7UUFBQ0MsUUFBUSxFQUFFUixZQUFZO1FBQUVTLE9BQU8sRUFBQyxxQkFBcUI7OzBCQUN6RCw4REFBQ0MsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQUNsQyxJQUFJLEVBQUMsTUFBTTtnQkFBQ21DLFFBQVEsRUFBRXRCLFlBQVk7Ozs7O29CQUFJOzBCQUN6RCw4REFBQ29CLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxRQUFRO2dCQUFDbEMsSUFBSSxFQUFDLE1BQU07Z0JBQUNtQyxRQUFRLEVBQUV0QixZQUFZOzs7OztvQkFBSTswQkFDM0QsOERBQUNvQixPQUFLO2dCQUFDQyxJQUFJLEVBQUMsTUFBTTtnQkFBQ2xDLElBQUksRUFBQyxPQUFPO2dCQUFDbUMsUUFBUSxFQUFFdEIsWUFBWTs7Ozs7b0JBQUk7MEJBQzFELDhEQUFDb0IsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLFFBQVE7Z0JBQUNsQyxJQUFJLEVBQUMsT0FBTztnQkFBQ21DLFFBQVEsRUFBRXRCLFlBQVk7Ozs7O29CQUFJOzBCQUM1RCw4REFBQ29CLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDbEMsSUFBSSxFQUFDLFNBQVM7Z0JBQUNtQyxRQUFRLEVBQUV0QixZQUFZOzs7OztvQkFBSTswQkFDNUQsOERBQUNvQixPQUFLO2dCQUFDQyxJQUFJLEVBQUMsTUFBTTtnQkFBQ2xDLElBQUksRUFBQyxPQUFPO2dCQUFDbUMsUUFBUSxFQUFFdEIsWUFBWTs7Ozs7b0JBQUk7MEJBQzFELDhEQUFDb0IsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQUNsQyxJQUFJLEVBQUMsV0FBVztnQkFBQ21DLFFBQVEsRUFBRXRCLFlBQVk7Ozs7O29CQUFJOzBCQUM5RCw4REFBQ29CLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDbEMsSUFBSSxFQUFDLGFBQWE7Z0JBQUNtQyxRQUFRLEVBQUV0QixZQUFZOzs7OztvQkFBSTswQkFDaEUsOERBQUNvQixPQUFLO2dCQUFDQyxJQUFJLEVBQUMsTUFBTTtnQkFBQ2xDLElBQUksRUFBQyxZQUFZO2dCQUFDbUMsUUFBUSxFQUFFdEIsWUFBWTs7Ozs7b0JBQUk7MEJBQy9ELDhEQUFDb0IsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQUNsQyxJQUFJLEVBQUMsU0FBUztnQkFBQ21DLFFBQVEsRUFBRXRCLFlBQVk7Ozs7O29CQUFJOzBCQUM1RCw4REFBQ29CLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxRQUFRO2dCQUFDbEMsSUFBSSxFQUFDLFNBQVM7Z0JBQUNtQyxRQUFRLEVBQUV0QixZQUFZOzs7OztvQkFBSTswQkFDOUQsOERBQUNvQixPQUFLO2dCQUFDQyxJQUFJLEVBQUMsTUFBTTtnQkFBQ2xDLElBQUksRUFBQyxhQUFhO2dCQUFDbUMsUUFBUSxFQUFFdEIsWUFBWTs7Ozs7b0JBQUk7MEJBQ2hFLDhEQUFDb0IsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLE1BQU07Z0JBQUNsQyxJQUFJLEVBQUMsV0FBVztnQkFBQ21DLFFBQVEsRUFBRXRCLFlBQVk7Ozs7O29CQUFJOzBCQUM5RCw4REFBQ3VCLFFBQU07Z0JBQUNGLElBQUksRUFBQyxRQUFROzBCQUFDLFFBQU07Ozs7O29CQUFTOzs7Ozs7WUFDaEMsQ0FDUDtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW5jYXIvLi9zcmMvY29tcG9uZW50cy9BZG1pbi9BZGRUZXN0LmpzeD8wZjNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEZvcm1EYXRhIGZyb20gXCJmb3JtLWRhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVGVzdCgpIHtcbiAgY29uc3QgW2NhckRhdGEsIHNldENhckRhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgeWVhcjogXCJcIixcbiAgICBjb2xvcjogXCJcIixcbiAgICBwcmljZTogXCJcIixcbiAgICBkcml2aW5nOiBcIlwiLFxuICAgIGltYWdlOiBudWxsLFxuICAgIG1haW5pbWFnZTogXCJcIixcbiAgICBzZWNvbmRpbWFnZTogXCJcIixcbiAgICB0aGlyZGltYWdlOiBcIlwiLFxuICAgIGNvdW50cnk6IFwiXCIsXG4gICAgbWlsZWFnZTogXCJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBlcXVpcG1lbnQ6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZmlsZXMgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICBpZiAoZmlsZXMpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGZpbGVzWzBdKTtcbiAgICB9XG5cbiAgICBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdmFsdWUpO1xuXG4gICAgc2V0Q2FyRGF0YSgocHJldkRhdGEpID0+ICh7XG4gICAgICAuLi5wcmV2RGF0YSxcbiAgICAgIFtuYW1lXTogZmlsZXMgPyBmaWxlc1swXSA6IHZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zb2xlLmxvZyhjYXJEYXRhKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcIm5hbWVcIiwgY2FyRGF0YS5uYW1lKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJ5ZWFyXCIsIGNhckRhdGEueWVhcik7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY29sb3JcIiwgY2FyRGF0YS5jb2xvcik7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwicHJpY2VcIiwgY2FyRGF0YS5wcmljZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZHJpdmluZ1wiLCBjYXJEYXRhLmRyaXZpbmcpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGNhckRhdGEuaW1hZ2UpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcIm1haW5pbWFnZVwiLCBjYXJEYXRhLm1haW5pbWFnZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwic2Vjb25kaW1hZ2VcIiwgY2FyRGF0YS5zZWNvbmRpbWFnZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwidGhpcmRpbWFnZVwiLCBjYXJEYXRhLnRoaXJkaW1hZ2UpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImNvdW50cnlcIiwgY2FyRGF0YS5jb3VudHJ5KTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJtaWxlYWdlXCIsIGNhckRhdGEubWlsZWFnZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZGVzY3JpcHRpb25cIiwgY2FyRGF0YS5kZXNjcmlwdGlvbik7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZXF1aXBtZW50XCIsIGNhckRhdGEuZXF1aXBtZW50KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDozMzA2L2FwaS9wb3N0XCIsXG4gICAgICAgIC8vIFwiaHR0cHM6Ly9ub2RlLXRyYWlkaW5nLnZlcmNlbC5hcHAvYXBpL3Bvc3RcIixcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAvLyBoYW5kbGUgc3VjY2Vzc1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAvLyBoYW5kbGUgZXJyb3JcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwieWVhclwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY29sb3JcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicHJpY2VcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRyaXZpbmdcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImltYWdlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtYWluaW1hZ2VcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlY29uZGltYWdlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aGlyZGltYWdlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjb3VudHJ5XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cIm1pbGVhZ2VcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlcXVpcG1lbnRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkZvcm1EYXRhIiwiQWRkVGVzdCIsImNhckRhdGEiLCJzZXRDYXJEYXRhIiwibmFtZSIsInllYXIiLCJjb2xvciIsInByaWNlIiwiZHJpdmluZyIsImltYWdlIiwibWFpbmltYWdlIiwic2Vjb25kaW1hZ2UiLCJ0aGlyZGltYWdlIiwiY291bnRyeSIsIm1pbGVhZ2UiLCJkZXNjcmlwdGlvbiIsImVxdWlwbWVudCIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsImZpbGVzIiwidGFyZ2V0IiwiZm9ybURhdGEiLCJhcHBlbmQiLCJwcmV2RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsImhlYWRlcnMiLCJkYXRhIiwiZXJyb3IiLCJmb3JtIiwib25TdWJtaXQiLCJlbmN0eXBlIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Admin/AddTest.jsx\n");

/***/ }),

/***/ "./src/pages/addcar.js":
/*!*****************************!*\
  !*** ./src/pages/addcar.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Addcar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Admin_AddTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Admin/AddTest */ \"./src/components/Admin/AddTest.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Admin_AddTest__WEBPACK_IMPORTED_MODULE_2__]);\n_components_Admin_AddTest__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Addcar() {\n    // return <AddEdit />;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Admin_AddTest__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/zhainaashirmatova/Desktop/traiding/src/pages/addcar.js\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRkY2FyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ3dCO0FBRW5DLFNBQVNFLE1BQU0sR0FBRztJQUMvQixzQkFBc0I7SUFDdEIscUJBQU8sOERBQUNELGlFQUFPOzs7O1lBQUcsQ0FBQztDQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VuY2FyLy4vc3JjL3BhZ2VzL2FkZGNhci5qcz9iY2E1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBZGRUZXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0FkbWluL0FkZFRlc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkY2FyKCkge1xuICAvLyByZXR1cm4gPEFkZEVkaXQgLz47XG4gIHJldHVybiA8QWRkVGVzdCAvPjtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFkZFRlc3QiLCJBZGRjYXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/addcar.js\n");

/***/ }),

/***/ "form-data":
/*!****************************!*\
  !*** external "form-data" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("form-data");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/addcar.js"));
module.exports = __webpack_exports__;

})();
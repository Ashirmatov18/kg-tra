(() => {
var exports = {};
exports.id = 759;
exports.ids = [759];
exports.modules = {

/***/ 9329:
/***/ ((module) => {

// Exports
module.exports = {
	"main_bg": "ConnectUs_main_bg__c_rBv",
	"main_bg_image": "ConnectUs_main_bg_image__zLES_",
	"form": "ConnectUs_form__lvQC_",
	"title": "ConnectUs_title__nsNz_",
	"subtitle": "ConnectUs_subtitle__eGsY4",
	"input_container": "ConnectUs_input_container__hItzp",
	"ic1": "ConnectUs_ic1__LQuuJ",
	"ic2": "ConnectUs_ic2___n0j_",
	"input": "ConnectUs_input__z6_9H",
	"cut": "ConnectUs_cut__kYGSC",
	"cut_short": "ConnectUs_cut_short__UowVK",
	"placeholder": "ConnectUs_placeholder__cpJfi",
	"submit": "ConnectUs_submit__dR_kM"
};


/***/ }),

/***/ 6574:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AddEdit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var _public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9329);
/* harmony import */ var _public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(911);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2651);
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8941);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const initState = {
    name: "",
    year: "",
    color: "",
    price: "",
    driving: "",
    image: null,
    mainimage: "",
    secondimage: "",
    thirdimage: "",
    country: "",
    mileage: "",
    description: "",
    equipment: ""
};
const PAGE_SIZE = 2;
const priceCar = [
    {
        name: "$1 to $50",
        value: "1-50"
    },
    {
        name: "$51 to $200",
        value: "51-200"
    },
    {
        name: "$201 to $1000",
        value: "201-1000"
    }, 
];
function AddEdit(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { id  } = router.query;
    const { 0: img , 1: setImg  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`http://localhost:5000/api/get/${id}`).then((resp)=>setinState({
                ...resp.data[0]
            }));
    }, [
        id
    ]);
    const { 0: inState , 1: setinState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initState);
    const { name , driving , year , color , image , price , mainimage , secondimage , thirdimage , country , mileage , description , equipment ,  } = inState;
    const addContanct = async (data)=>{
        const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("http://localhost:5000/api/post", data);
        if (response.status === 200) {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(response.data);
        }
    };
    const { 0: userInfo , 1: setuserInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        file: [],
        filepreview: ""
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!name || !driving || !year || !price || !color || !image || !mainimage || !secondimage || !thirdimage || !country || !mileage || !description || !equipment) {
            alert("error");
        } else {
            if (!id) {
                axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("http://localhost:5000/api/post", {
                    name,
                    year,
                    color,
                    price,
                    driving,
                    image,
                    mainimage,
                    secondimage,
                    thirdimage,
                    country,
                    mileage,
                    description,
                    equipment
                }).then(()=>{
                    setinState({
                        name: "",
                        year: "",
                        color: "",
                        price: "",
                        driving: "",
                        image: null,
                        mainimage: "",
                        secondimage: "",
                        thirdimage: "",
                        country: "",
                        mileage: "",
                        description: "",
                        equipment: ""
                    });
                }).catch((err)=>{
                    // toast.error(err.response.data);
                    console.log("error");
                });
            } else {
                // updateContact(inState, id);
                axios__WEBPACK_IMPORTED_MODULE_2__["default"].put(`http://localhost:5000/api/update/${id}`, {
                    name,
                    year,
                    color,
                    price,
                    driving,
                    image,
                    mainimage,
                    country,
                    secondimage,
                    thirdimage,
                    mileage,
                    description,
                    equipment
                }).then(()=>{
                    setinState({
                        name: "",
                        year: "",
                        color: "",
                        price: "",
                        driving: "",
                        image: null,
                        mainimage: "",
                        secondimage: "",
                        thirdimage: "",
                        country: "",
                        mileage: "",
                        description: "",
                        equipment: ""
                    });
                });
            }
            setTimeout(()=>router.push("/adminadd"), 500);
        }
    };
    const { 0: file , 1: setFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // const upload = (e) => {
    //   e.preventDefault();
    //   let formData = new FormData();
    //   formData.append("screenshot", file);
    //   axios
    //     .post("http://localhost:5000/api/img", formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     })
    //     .then((res) => {
    //       console.log("Success ", res);
    //     });
    // };
    const handleChangeInput = (e)=>{
        // let { name, value } = e.target;
        // setinState({ ...inState, [name]: value });
        const name = e.target.name;
        const value = e.target.type === "file" ? e.target.files[0] : e.target.value;
        setinState((prevState)=>({
                ...inState,
                [name]: value
            }));
    };
    console.log(inState);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            " ",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().form),
                encType: "mul",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().title),
                        children: "\u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u043C\u0430\u0448\u0438\u043D\u0443"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().subtitle),
                        children: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043E \u0432\u044B \u0438\u0449\u0435\u0442\u0435!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input_container)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().ic1)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "name",
                                id: "name",
                                // placeholder="Модель"
                                onChange: handleChangeInput,
                                defaultValue: name || "",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input),
                                type: "text"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                forhtml: "firstname",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().placeholder),
                                children: "\u041C\u043E\u0434\u0435\u043B\u044C \u043C\u0430\u0448\u0438\u043D\u044B"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input_container)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().ic2)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "driving",
                                id: "driving",
                                onChange: handleChangeInput,
                                defaultValue: driving || "",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input),
                                type: "text"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                forHtml: "lastname",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().placeholder),
                                children: "\u041F\u0440\u0438\u0432\u043E\u0434"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input_container)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().ic2)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "equipment",
                                id: "equipment",
                                onChange: handleChangeInput,
                                defaultValue: equipment || "",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input),
                                type: "text"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                forHtml: "lastname",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().placeholder),
                                children: "\u041A\u043E\u043C\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u044F"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input_container)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().ic2)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "country",
                                id: "country",
                                onChange: handleChangeInput,
                                defaultValue: country || "",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input),
                                type: "text"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                forHtml: "lastname",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().placeholder),
                                children: "\u0441\u0442\u0440\u0430\u043D\u0430"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input_container)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().ic2)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "number",
                                name: "year",
                                id: "year",
                                // placeholder="Год выпуска"
                                onChange: handleChangeInput,
                                defaultValue: year || "",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut_short)}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                for: "email",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().placeholder),
                                children: "\u0413\u043E\u0434"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input_container)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().ic2)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "color",
                                id: "color",
                                // placeholder="Цвет"
                                onChange: handleChangeInput,
                                defaultValue: color || "",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input),
                                type: "text"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut_short)}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                for: "\u0426\u0412\u0415\u0422",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().placeholder),
                                children: "\u0426\u0412\u0415\u0422"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input_container)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().ic2)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "number",
                                name: "price",
                                id: "price",
                                // placeholder="Цена"
                                onChange: handleChangeInput,
                                defaultValue: price || "",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut_short)}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                for: "COMPLECT",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().placeholder),
                                children: "\u0426\u0435\u043D\u0430"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input_container)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().ic2)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "number",
                                name: "mileage",
                                id: "mileage",
                                // placeholder="Цена"
                                onChange: handleChangeInput,
                                defaultValue: mileage || "",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut_short)}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                for: "COMPLECT",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().placeholder),
                                children: "\u041F\u0440\u043E\u0431\u0435\u0433"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input_container)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().ic2)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "image",
                                id: "image",
                                // placeholder="Вставить картинку"
                                // onChange={handleFileChange}
                                onChange: handleChangeInput,
                                // defaultValue={image || null}
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input),
                                type: "file"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut_short)}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                for: "COMPLECT",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().placeholder),
                                children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input_container)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().ic2)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "mainimage",
                                id: "mainimage",
                                // placeholder="Вставить картинку"
                                onChange: handleChangeInput,
                                defaultValue: mainimage || "",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input),
                                type: "text"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut_short)}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                for: "COMPLECT",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().placeholder),
                                children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C 2 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input_container)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().ic2)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "secondimage",
                                id: "secondimage",
                                // placeholder="Вставить картинку"
                                onChange: handleChangeInput,
                                defaultValue: secondimage || "",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input),
                                type: "text"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut_short)}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                for: "COMPLECT",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().placeholder),
                                children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C 3 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input_container)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().ic2)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "thirdimage",
                                id: "thirdimage",
                                // placeholder="Вставить картинку"
                                onChange: handleChangeInput,
                                defaultValue: thirdimage || "",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input),
                                type: "text"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().cut_short)}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                for: "COMPLECT",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().placeholder),
                                children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C 4 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0443"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input_container)} ${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().ic2)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "description",
                                id: "description",
                                onChange: handleChangeInput,
                                defaultValue: description || "",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().input),
                                type: "text"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().desscription)}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                for: "COMPLECT",
                                className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().placeholder),
                                children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "submit",
                        value: id ? "update" : "add",
                        className: (_public_styles_ConnectUs_module_css__WEBPACK_IMPORTED_MODULE_10___default().submit)
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3816:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var _components_Admin_AddEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6574);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, _components_Admin_AddEdit__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, _components_Admin_AddEdit__WEBPACK_IMPORTED_MODULE_3__, react_toastify__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const update = ({ item  })=>{
    // const items = JSON.stringify(item);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Admin_AddEdit__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {});
};
async function getServerSideProps({ params: { id  }  }) {
    const res = await fetch(`http://localhost:5000/api/get/${id}`);
    const data = await res.json();
    // console.log(res);
    return {
        props: {
            item: data
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (update);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8891:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 911:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ 9271:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 2651:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Select");

/***/ }),

/***/ 8941:
/***/ ((module) => {

"use strict";
module.exports = require("form-data");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3816));
module.exports = __webpack_exports__;

})();
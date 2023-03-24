exports.id = 125;
exports.ids = [125];
exports.modules = {

/***/ 9539:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "AdminPage_main__4Bgkm",
	"contacts_bg": "AdminPage_contacts_bg__uQ0vQ",
	"contacts_but": "AdminPage_contacts_but__t7XGc",
	"main_catalog": "AdminPage_main_catalog___0kki",
	"button_a": "AdminPage_button_a__uchvO",
	"searchbar": "AdminPage_searchbar__fwf0h",
	"card_list": "AdminPage_card_list__OkzK_",
	"card_main": "AdminPage_card_main__5zEQ5",
	"car_card": "AdminPage_car_card__qDUHN",
	"detail": "AdminPage_detail__h_Jsh",
	"price_detail": "AdminPage_price_detail__qkcwE",
	"control_buttons": "AdminPage_control_buttons__Ycbti",
	"button_d": "AdminPage_button_d__ixrzF",
	"button_u": "AdminPage_button_u__nG4ok",
	"button_group": "AdminPage_button_group__A_012",
	"button_74": "AdminPage_button_74__NGwUf",
	"description_button": "AdminPage_description_button__cST3b",
	"footer_catalog": "AdminPage_footer_catalog__Jv3fD",
	"card_menu_img": "AdminPage_card_menu_img__ywaI4",
	"card": "AdminPage_card__Ugs1Y",
	"card_img": "AdminPage_card_img__Tnmmd",
	"card_menu": "AdminPage_card_menu__HDtw0",
	"car_menu_item": "AdminPage_car_menu_item__0EHh_",
	"card_info": "AdminPage_card_info__oHP0S",
	"card_title": "AdminPage_card_title__78sHo",
	"card_desc": "AdminPage_card_desc__Njv_t",
	"card_button_body": "AdminPage_card_button_body__4O_BB",
	"card_button": "AdminPage_card_button__SLqPf",
	"sidebar_main": "AdminPage_sidebar_main__mtUWh",
	"sidebar": "AdminPage_sidebar__7jPkE",
	"nav": "AdminPage_nav__gNy0A",
	"roof": "AdminPage_roof__u3BT_",
	"roof_edge": "AdminPage_roof_edge__J6ev9",
	"front": "AdminPage_front__P_g24",
	"head": "AdminPage_head__PHLCp",
	"eyes": "AdminPage_eyes__88du4",
	"beard": "AdminPage_beard__D9Vdg",
	"paper": "AdminPage_paper__iyfgK",
	"lines": "AdminPage_lines__F4XGg",
	"all_car": "AdminPage_all_car__3xRlM",
	"img_lexus": "AdminPage_img_lexus__VXtxP",
	"benz_car": "AdminPage_benz_car__v5L31",
	"img_bmw": "AdminPage_img_bmw__e_UzS",
	"map_info": "AdminPage_map_info__8c6qN",
	"address_info": "AdminPage_address_info___ehnJ",
	"map": "AdminPage_map__BDzI7",
	"message": "AdminPage_message__Q71bP"
};


/***/ }),

/***/ 2793:
/***/ ((module) => {

// Exports
module.exports = {
	"center": "Pagination_center__h8FlM",
	"pagination": "Pagination_pagination__xWJvO",
	"page_item": "Pagination_page_item__jwqga",
	"active": "Pagination_active__eY0iv"
};


/***/ }),

/***/ 4494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PaginationRounded)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2793);
/* harmony import */ var _public_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_3__);




function PaginationRounded({ items , pageSize , currentPage , onPageChange ,  }) {
    const pageCount = items / pageSize;
    if (Math.ceil(pageCount) === 1) return null;
    const pages = lodash__WEBPACK_IMPORTED_MODULE_2___default().range(1, pageCount + 1);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: (_public_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().center),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: (_public_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().pagination),
            children: !!pages && pages.length > 0 ? pages.map((page)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: page === currentPage ? (_public_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().page_item) + (_public_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : (_public_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().page_item),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        onClick: ()=>onPageChange(page),
                        children: page
                    })
                }, page);
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                style: {},
                children: "\u041D\u0418\u0427\u0415\u0413\u041E \u041D\u0415 \u041D\u0410\u0419\u0414\u0415\u041D\u041E"
            })
        })
    });
};


/***/ }),

/***/ 8378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ paginate)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const paginate = (items, pageNumber, pageSize)=>{
    const startIndex = (pageNumber - 1) * pageSize;
    return lodash__WEBPACK_IMPORTED_MODULE_0___default()(items).slice(startIndex).take(pageSize).value();
};


/***/ })

};
;
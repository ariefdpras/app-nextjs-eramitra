"use strict";
exports.id = 641;
exports.ids = [641];
exports.modules = {

/***/ 2641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);



/**
 * Props:
 *  - breadcrumbs = [{title:'',pathname:'',query:{},url:''},,] (exclude Home)
 */




const Breadcrumb = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
      className: "jsx-963186785" + " " + "breadcrumb",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
        className: "jsx-963186785",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: props.url,
          as: props.url,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
            className: "jsx-963186785" + " " + "breadcrumb-section-text",
            children: "Home"
          })
        })
      }, 0), props.breadcrumbs ? props.breadcrumbs.map((item, idx) => !!item.title ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
        className: "jsx-963186785" + " " + "breadcrumb-section",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          className: "jsx-963186785" + " " + "ic-separate",
          children: "/"
        }), idx < props.breadcrumbs.length - 1 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: item.url,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
            className: "jsx-963186785" + " " + "breadcrumb-section-text",
            children: item.title.replace(/[-]/g, ' ')
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          className: "jsx-963186785" + " " + "breadcrumb-section-text active",
          children: item.title.replace(/[-]/g, ' ')
        })]
      }, idx) : null) : null]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "963186785",
      children: [".ic-separate.jsx-963186785{color:#919eab;font-family:Calibri;font-size:12px;font-style:normal;font-weight:400;line-height:18px;-webkit-letter-spacing:0em;-moz-letter-spacing:0em;-ms-letter-spacing:0em;letter-spacing:0em;text-align:left;margin:0px 10px;}", ".breadcrumb.jsx-963186785{padding:0;margin:35px 0;}", ".breadcrumb-section.jsx-963186785{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row;-ms-flex-flow:row;flex-flow:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".breadcrumb-section-text.jsx-963186785{font-family:Calibri;font-style:normal;font-weight:normal;font-size:18px;line-height:22px;color:#1BA58A;text-align:left;text-transform:capitalize;}", ".breadcrumb-section-text.jsx-963186785:hover{color:#4a4a4a;}", ".breadcrumb-section-text.active.jsx-963186785{color:#000;}", ".breadcrumb.jsx-963186785 li.jsx-963186785{display:inline;}"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);

/***/ })

};
;
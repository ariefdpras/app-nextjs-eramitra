"use strict";
exports.id = 974;
exports.ids = [974];
exports.modules = {

/***/ 974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function Section({
  children,
  element_id,
  background,
  icon,
  height
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: element_id,
    children: [icon && icon.length > 0 && icon.map((shape, id) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        className: `icon-shape-${id}  ${shape.vertical ? shape.vertical : ''} ${shape.horizontal ? shape.horizontal : ''}`,
        src: `/static/images/${shape.image}`
      }, id), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
        children: `
              .${element_id} .icon-shape-${id} {
                position: absolute;
                z-index: -1;
              }

              .${element_id} .icon-shape-${id}.top {
                top: 0;
              }

              .${element_id} .icon-shape-${id}.bottom {
                bottom: 0;
              }

              .${element_id} .icon-shape-${id}.right {
                right: 0;
              }

              .${element_id} .icon-shape-${id}.left {
                left: 0;
              }
          `
      })]
    })), children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "background"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
      children: `
          .${element_id} {
            width: 100%;
            position: relative;
            height: ${height};
          }

          .${element_id} .background {
            background: ${background};
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
          }

        `
    })]
  });
}

/***/ })

};
;
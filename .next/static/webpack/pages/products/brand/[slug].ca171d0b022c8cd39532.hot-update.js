"use strict";
self["webpackHotUpdate_N_E"]("pages/products/brand/[slug]",{

/***/ "./pages/products/brand/[slug].js":
/*!****************************************!*\
  !*** ./pages/products/brand/[slug].js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var Containers_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Containers/layout */ "./containers/layout.js");
/* harmony import */ var Components_product_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Components/product/ProductCard */ "./components/product/ProductCard.js");
/* harmony import */ var Components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Components/breadcrumb/breadcrumb */ "./components/breadcrumb/breadcrumb.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\silvi\\Documents\\eramitra-dev\\pages\\products\\brand\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();







var Home = function Home(props) {
  _s();

  var breadcrumbs = [{
    title: "Products",
    url: "http://localhost:3001" + "/products"
  }, {
    title: props.detail.name,
    url: "http://google.com"
  }];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      isBrands = _useState[0],
      toggleBrands = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      isApplication = _useState2[0],
      toggleApplication = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      isIndustry = _useState3[0],
      toggleIndustry = _useState3[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Containers_layout__WEBPACK_IMPORTED_MODULE_0__.default, {
    title: "".concat(props.detail.name, " | PT. Era Mitra Perdana"),
    applications: props.applications,
    brands: props.brands,
    industries: props.industries,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "container-inner",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "breadcrumb-wrapper",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_2__.default, {
            breadcrumbs: breadcrumbs,
            url: "http://localhost:3001"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "products-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "left-products",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
              className: "category-side-title green",
              children: "Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "category-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                className: "category-side-title ",
                children: "Brands"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 27
              }, _this), isBrands ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                onClick: function onClick() {
                  return toggleBrands(false);
                },
                className: "button-expand",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                  className: "material-icons",
                  children: "expand_less"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 105
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 40
              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                onClick: function onClick() {
                  return toggleBrands(true);
                },
                className: "button-expand",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                  className: "material-icons",
                  children: "expand_more"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 228
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 164
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 25
            }, _this), isBrands && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "group-list-wrapper",
              children: [" ", props.brands && props.brands.map(function (brand, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  href: "".concat("http://localhost:3001", "/products/brand/").concat(brand.id),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                    className: "group-list",
                    children: brand.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 104
                  }, _this)
                }, idx, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 128
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 41
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "category-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                className: "category-side-title ",
                children: "Industry"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 27
              }, _this), isIndustry ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                onClick: function onClick() {
                  return toggleIndustry(false);
                },
                className: "button-expand",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                  className: "material-icons",
                  children: "expand_less"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 109
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 42
              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                onClick: function onClick() {
                  return toggleIndustry(true);
                },
                className: "button-expand",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                  className: "material-icons",
                  children: "expand_more"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 234
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 168
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 25
            }, _this), isIndustry && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "group-list-wrapper",
              children: [" ", props.industries && props.industries.map(function (industry, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  href: "".concat("http://localhost:3001", "/products/industry/").concat(industry.id),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                    className: "group-list",
                    children: industry.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 110
                  }, _this)
                }, idx, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 141
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 43
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "category-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                className: "category-side-title ",
                children: "Application"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 27
              }, _this), isApplication ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                onClick: function onClick() {
                  return toggleApplication(false);
                },
                className: "button-expand",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                  className: "material-icons",
                  children: "expand_less"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 115
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 45
              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                onClick: function onClick() {
                  return toggleApplication(true);
                },
                className: "button-expand",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                  className: "material-icons",
                  children: "expand_more"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 243
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 174
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 25
            }, _this), isApplication && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "group-list-wrapper",
              children: [" ", props.applications && props.applications.map(function (application, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                  href: "".concat("http://localhost:3001", "/products/application/").concat(application.id),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                    className: "group-list",
                    children: application.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 116
                  }, _this)
                }, idx, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 151
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 46
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "right-products",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
              className: "banner-products",
              src: "/static/images/banner-products.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
              className: "section-title-underline",
              children: props.detail ? props.detail.name : "Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 25
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "products-wrapper",
              children: props.products && props.products.map(function (product, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Components_product_ProductCard__WEBPACK_IMPORTED_MODULE_1__.default, {
                  id: product.id,
                  picture: product.img,
                  category: "".concat(product.Application ? product.Application.name : ""),
                  brand: product.Brand && product.Brand.name,
                  name: product.name,
                  price: product.price
                }, idx, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 33
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("style", {
        children: "\n                .products-container {\n                    display: flex;\n                }\n\n                .left-products {\n                    width: 250px;\n                    margin-right: 54px;\n                }\n\n                .right-products {\n                    width: calc(100% - 304px);\n                }\n\n                .banner-products {\n                    width: 100%;\n                }\n\n                .category-side-title {\n                    font-family: Bahnschrift;\n                    font-style: normal;\n                    font-weight: 600;\n                    font-size: 20px;\n                    line-height: 24px;\n                    color: #000000;\n                    text-transform: uppercase;\n                    padding: 0 0 15px 0;\n                    margin: 15px 0 0 0;\n                }\n\n                .category-group {\n                  border-bottom: 1px solid #C4C4C4;\n                  display: flex;\n                  justify-content: space-between;\n                  align-items: center;\n                }\n\n                .category-group a {\n                  cursor: pointer;\n                }\n\n                .category-side-title.green{\n                    color: #1BA58A;\n                    border-bottom: 1px solid #C4C4C4;\n                }\n\n                .products-wrapper {\n                    display: grid;\n                    width: 100%;\n                    grid-gap: 40px;\n                    grid-template-columns: repeat(3, 1fr);\n                    margin-bottom: 60px;\n                }\n\n                .group-list p {\n                  font-family: Calibri;\n                  font-size: 20px;\n                  font-style: normal;\n                  font-weight: 400;\n                  line-height: 24px;\n                  letter-spacing: 0em;\n                  text-align: left;\n                }\n\n                .group-list:hover {\n                  color: #1BA58A;\n\n                }\n\n\n                @media only screen and (max-width: 800px){\n                  .left-products {\n                    display: none;\n                  }\n  \n                  .breadcrumb-wrapper {\n                    display: none;\n                  }\n  \n                  .right-products {\n                    width: 100%;\n                  }\n  \n                  .banner-products {\n                    width: 100vw;\n                    margin: -12px -20px 0 -20px;\n                  }\n  \n                  .section-title-underline {\n                    font-family: Bahnschrift;\n                    font-size: 18px !important;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: 25px !important;\n                    letter-spacing: 0em;\n                    text-align: left;\n                  }\n  \n                  .section-title-underline:after {\n                    padding-top: 5px !important;\n                    margin-left: 1px !important;\n                    width: calc(100% - 20px) !important;\n                  }\n  \n                  .products-wrapper {\n                    display: grid;\n                    width: 100%;\n                    grid-gap: 10px;\n                    grid-template-columns: repeat(2, 1fr);\n                    margin-bottom: 60px;\n                  }\n                }\n              "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("style", {
      children: "\n            .container {\n              width: 100vw;\n              padding: 0;\n            }\n  \n            .container-inner {\n              max-width: 1120px;\n              margin: 0 auto;\n              height: 100%;\n            }\n  \n            .container.banner {\n              background-color: #F5FFEE;\n            }\n\n            .section-title {\n              font-family: Bahnschrift;\n              font-style: normal;\n              font-weight: 600;\n              font-size: 48px;\n              color: #000000;\n              margin: 0 0 24px 0;\n            }\n\n            .section-title-underline {\n                font-family: Bahnschrift;\n                font-style: normal;\n                font-weight: normal;\n                font-size: 48px;\n                line-height: 58px;\n                color: #000000;\n                width: fit-content;\n            }\n\n            .section-title-underline:after {\n                content: \"\";\n                display: block;\n                width: calc(100% - 50px);\n                padding-top: 5px;\n                margin-left: 3px;\n                border-bottom: 3px solid #1BA58A;\n            }\n\n            .section-description {\n              font-family: Calibri;\n              font-style: italic;\n              font-weight: normal;\n              font-size: 20px;\n              line-height: 24px;\n              color: #666A66;\n              margin: 0;\n            }\n          "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 7
  }, _this);
};

_s(Home, "oIS7h1QWPS7ogsvjsbgk7XPP8uo=");

_c = Home;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMvYnJhbmQvW3NsdWddLmNhMTcxZDBiMDIyYzhjZDM5NTMyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNSyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDcEIsTUFBTUMsV0FBVyxHQUFHLENBQ2xCO0FBQ0VDLElBQUFBLEtBQUssRUFBRSxVQURUO0FBRUVDLElBQUFBLEdBQUcsRUFBRUMsdUJBQUEsR0FBMEI7QUFGakMsR0FEa0IsRUFLbEI7QUFDRUYsSUFBQUEsS0FBSyxFQUFFRixLQUFLLENBQUNPLE1BQU4sQ0FBYUMsSUFEdEI7QUFFRUwsSUFBQUEsR0FBRyxFQUFFO0FBRlAsR0FMa0IsQ0FBcEI7O0FBV0Esa0JBQWlDTCwrQ0FBUSxDQUFDLElBQUQsQ0FBekM7QUFBQSxNQUFPVyxRQUFQO0FBQUEsTUFBaUJDLFlBQWpCOztBQUNBLG1CQUEyQ1osK0NBQVEsQ0FBQyxLQUFELENBQW5EO0FBQUEsTUFBT2EsYUFBUDtBQUFBLE1BQXNCQyxpQkFBdEI7O0FBQ0EsbUJBQXFDZCwrQ0FBUSxDQUFDLEtBQUQsQ0FBN0M7QUFBQSxNQUFPZSxVQUFQO0FBQUEsTUFBbUJDLGNBQW5COztBQUdGLHNCQUNJLDhEQUFDLHNEQUFEO0FBQ0UsU0FBSyxZQUFLZCxLQUFLLENBQUNPLE1BQU4sQ0FBYUMsSUFBbEIsNkJBRFA7QUFFRSxnQkFBWSxFQUFFUixLQUFLLENBQUNlLFlBRnRCO0FBR0UsVUFBTSxFQUFFZixLQUFLLENBQUNnQixNQUhoQjtBQUlFLGNBQVUsRUFBRWhCLEtBQUssQ0FBQ2lCLFVBSnBCO0FBQUEsNEJBT0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFB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QWNwQixJQUp0QztBQUtBLHNCQUFJLEVBQUVpQixPQUFPLENBQUNqQixJQUxkO0FBTUEsdUJBQUssRUFBRWlCLE9BQU8sQ0FBQ0k7QUFOZixtQkFPS1QsR0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURtQztBQUFBLGVBQW5CO0FBRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTVDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUF3RUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFtTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuTUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE4UEQsQ0EvUUQ7O0dBQU1yQjs7S0FBQUE7O0FBeVNOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3RzL2JyYW5kL1tzbHVnXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJDb250YWluZXJzL2xheW91dFwiIFxyXG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIkNvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0Q2FyZFwiO1xyXG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tIFwiQ29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWJcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogXCJQcm9kdWN0c1wiLFxyXG4gICAgICAgIHVybDogcHJvY2Vzcy5lbnYuUk9PVF9ET01BSU4gKyBcIi9wcm9kdWN0c1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogcHJvcHMuZGV0YWlsLm5hbWUsXHJcbiAgICAgICAgdXJsOiBcImh0dHA6Ly9nb29nbGUuY29tXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gICAgXHJcbiAgICBjb25zdCBbaXNCcmFuZHMsIHRvZ2dsZUJyYW5kc10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2lzQXBwbGljYXRpb24sIHRvZ2dsZUFwcGxpY2F0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzSW5kdXN0cnksIHRvZ2dsZUluZHVzdHJ5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgICAgPExheW91dFxyXG4gICAgICAgIHRpdGxlPXtgJHtwcm9wcy5kZXRhaWwubmFtZX0gfCBQVC4gRXJhIE1pdHJhIFBlcmRhbmFgfVxyXG4gICAgICAgIGFwcGxpY2F0aW9ucz17cHJvcHMuYXBwbGljYXRpb25zfVxyXG4gICAgICAgIGJyYW5kcz17cHJvcHMuYnJhbmRzfVxyXG4gICAgICAgIGluZHVzdHJpZXM9e3Byb3BzLmluZHVzdHJpZXN9IFxyXG4gICAgICAgID4gICAgIFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVhZGNydW1iLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhZGNydW1icz17YnJlYWRjcnVtYnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LXByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXRlZ29yeS1zaWRlLXRpdGxlIGdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhdGVnb3J5LXNpZGUtdGl0bGUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyYW5kc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCcmFuZHMgPyA8YSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVCcmFuZHMoZmFsc2UpfSBjbGFzc05hbWU9XCJidXR0b24tZXhwYW5kXCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5leHBhbmRfbGVzczwvc3Bhbj48L2E+IDogIDxhIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUJyYW5kcyh0cnVlKX0gY2xhc3NOYW1lPVwiYnV0dG9uLWV4cGFuZFwiPjxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZXhwYW5kX21vcmU8L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JyYW5kcyAmJiA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWxpc3Qtd3JhcHBlclwiPiB7cHJvcHMuYnJhbmRzICYmIHByb3BzLmJyYW5kcy5tYXAoKGJyYW5kLCBpZHgpID0+IDxhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH0gaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L3Byb2R1Y3RzL2JyYW5kLyR7YnJhbmQuaWR9YH0+PHAgY2xhc3NOYW1lPVwiZ3JvdXAtbGlzdFwiPnticmFuZC5uYW1lfTwvcD48L2E+KX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2F0ZWdvcnktc2lkZS10aXRsZSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kdXN0cnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5kdXN0cnkgPyA8YSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVJbmR1c3RyeShmYWxzZSl9IGNsYXNzTmFtZT1cImJ1dHRvbi1leHBhbmRcIj48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmV4cGFuZF9sZXNzPC9zcGFuPjwvYT4gOiAgPGEgb25DbGljaz17KCkgPT4gdG9nZ2xlSW5kdXN0cnkodHJ1ZSl9IGNsYXNzTmFtZT1cImJ1dHRvbi1leHBhbmRcIj48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmV4cGFuZF9tb3JlPC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0luZHVzdHJ5ICYmIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtbGlzdC13cmFwcGVyXCI+IHtwcm9wcy5pbmR1c3RyaWVzICYmIHByb3BzLmluZHVzdHJpZXMubWFwKChpbmR1c3RyeSwgaWR4KSA9PiA8YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9IGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9wcm9kdWN0cy9pbmR1c3RyeS8ke2luZHVzdHJ5LmlkfWB9PjxwIGNsYXNzTmFtZT1cImdyb3VwLWxpc3RcIj57aW5kdXN0cnkubmFtZX08L3A+PC9hPil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhdGVnb3J5LXNpZGUtdGl0bGUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FwcGxpY2F0aW9uID8gPGEgb25DbGljaz17KCkgPT4gdG9nZ2xlQXBwbGljYXRpb24oZmFsc2UpfSBjbGFzc05hbWU9XCJidXR0b24tZXhwYW5kXCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5leHBhbmRfbGVzczwvc3Bhbj48L2E+IDogIDxhIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUFwcGxpY2F0aW9uKHRydWUpfSBjbGFzc05hbWU9XCJidXR0b24tZXhwYW5kXCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5leHBhbmRfbW9yZTwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FwcGxpY2F0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtbGlzdC13cmFwcGVyXCI+IHtwcm9wcy5hcHBsaWNhdGlvbnMgJiYgcHJvcHMuYXBwbGljYXRpb25zLm1hcCgoYXBwbGljYXRpb24sIGlkeCkgPT4gPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fSBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vcHJvZHVjdHMvYXBwbGljYXRpb24vJHthcHBsaWNhdGlvbi5pZH1gfT48cCBjbGFzc05hbWU9XCJncm91cC1saXN0XCI+e2FwcGxpY2F0aW9uLm5hbWV9PC9wPjwvYT4pfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0LXByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYmFubmVyLXByb2R1Y3RzXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYmFubmVyLXByb2R1Y3RzLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZS11bmRlcmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuZGV0YWlsID8gcHJvcHMuZGV0YWlsLm5hbWUgOiBcIlByb2R1Y3RzXCJ9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMucHJvZHVjdHMgJiYgcHJvcHMucHJvZHVjdHMubWFwKChwcm9kdWN0LCBpZHgpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlPXtwcm9kdWN0LmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17YCR7cHJvZHVjdC5BcHBsaWNhdGlvbiA/IHByb2R1Y3QuQXBwbGljYXRpb24ubmFtZSA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmFuZD17cHJvZHVjdC5CcmFuZCAmJiBwcm9kdWN0LkJyYW5kLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAucHJvZHVjdHMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5sZWZ0LXByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1NHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yaWdodC1wcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwNHB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYmFubmVyLXByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2F0ZWdvcnktc2lkZS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAxNXB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzRDNEM0O1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhdGVnb3J5LWdyb3VwIGEge1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhdGVnb3J5LXNpZGUtdGl0bGUuZ3JlZW57XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxQkE1OEE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDNEM0QzQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnByb2R1Y3RzLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ncm91cC1saXN0IHAge1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2FsaWJyaTtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ncm91cC1saXN0OmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMxQkE1OEE7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgLmxlZnQtcHJvZHVjdHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgLmJyZWFkY3J1bWItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAucmlnaHQtcHJvZHVjdHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgIC5iYW5uZXItcHJvZHVjdHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC0xMnB4IC0yMHB4IDAgLTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgLnNlY3Rpb24tdGl0bGUtdW5kZXJsaW5lIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgLnNlY3Rpb24tdGl0bGUtdW5kZXJsaW5lOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgLmNvbnRhaW5lci1pbm5lciB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIC5jb250YWluZXIuYmFubmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGRkVFO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAyNHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWN0aW9uLXRpdGxlLXVuZGVybGluZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDU4cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlY3Rpb24tdGl0bGUtdW5kZXJsaW5lOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxQkE1OEE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2FsaWJyaTtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjZBNjY7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHJlcSkge1xyXG5cclxuXHJcbiAgY29uc3QgZ2V0QnJhbmRzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2FwaS9nZXRCcmFuZHNgKVxyXG4gIGNvbnN0IGJyYW5kcyA9IGF3YWl0IGdldEJyYW5kcy5qc29uKClcclxuXHJcblxyXG4gIGNvbnN0IGdldEluZHVzdHJ5ID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2FwaS9nZXRJbmR1c3RyeWApXHJcbiAgY29uc3QgaW5kdXN0cmllcyA9IGF3YWl0IGdldEluZHVzdHJ5Lmpzb24oKVxyXG5cclxuXHJcbiAgY29uc3QgZ2V0QXBwbGljYXRpb24gPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vYXBpL2dldEFwcGxpY2F0aW9uYClcclxuICBjb25zdCBhcHBsaWNhdGlvbnMgPSBhd2FpdCBnZXRBcHBsaWNhdGlvbi5qc29uKClcclxuXHJcbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vYXBpL2dldFByb2R1Y3Q/YnJhbmQ9JHtyZXEucXVlcnkuc2x1Z31gKVxyXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZ2V0UHJvZHVjdHMuanNvbigpXHJcblxyXG4gIGNvbnN0IGdldEJyYW5kID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2FwaS9nZXRCcmFuZHMvJHtyZXEucXVlcnkuc2x1Z31gKVxyXG4gIGNvbnN0IGJyYW5kID0gYXdhaXQgZ2V0QnJhbmQuanNvbigpXHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IGRldGFpbDogYnJhbmQsIHByb2R1Y3RzOiBwcm9kdWN0cy5kYXRhLCBicmFuZHM6IGJyYW5kcywgaW5kdXN0cmllczogaW5kdXN0cmllcywgYXBwbGljYXRpb25zOiBhcHBsaWNhdGlvbnMgfX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlByb2R1Y3RDYXJkIiwiQnJlYWRjcnVtYiIsIlJlYWN0IiwidXNlU3RhdGUiLCJIb21lIiwicHJvcHMiLCJicmVhZGNydW1icyIsInRpdGxlIiwidXJsIiwicHJvY2VzcyIsImVudiIsIlJPT1RfRE9NQUlOIiwiZGV0YWlsIiwibmFtZSIsImlzQnJhbmRzIiwidG9nZ2xlQnJhbmRzIiwiaXNBcHBsaWNhdGlvbiIsInRvZ2dsZUFwcGxpY2F0aW9uIiwiaXNJbmR1c3RyeSIsInRvZ2dsZUluZHVzdHJ5IiwiYXBwbGljYXRpb25zIiwiYnJhbmRzIiwiaW5kdXN0cmllcyIsIm1hcCIsImJyYW5kIiwiaWR4IiwiaWQiLCJpbmR1c3RyeSIsImFwcGxpY2F0aW9uIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiaW1nIiwiQXBwbGljYXRpb24iLCJCcmFuZCIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==
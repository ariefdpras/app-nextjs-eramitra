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
                  category: "".concat(product.Application.name),
                  brand: product.Brand.name,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMvYnJhbmQvW3NsdWddLjQ4ZGIzMzI2MzU5NWZkMjlmOTVlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNSyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDcEIsTUFBTUMsV0FBVyxHQUFHLENBQ2xCO0FBQ0VDLElBQUFBLEtBQUssRUFBRSxVQURUO0FBRUVDLElBQUFBLEdBQUcsRUFBRUMsdUJBQUEsR0FBMEI7QUFGakMsR0FEa0IsRUFLbEI7QUFDRUYsSUFBQUEsS0FBSyxFQUFFRixLQUFLLENBQUNPLE1BQU4sQ0FBYUMsSUFEdEI7QUFFRUwsSUFBQUEsR0FBRyxFQUFFO0FBRlAsR0FMa0IsQ0FBcEI7O0FBV0Esa0JBQWlDTCwrQ0FBUSxDQUFDLElBQUQsQ0FBekM7QUFBQSxNQUFPVyxRQUFQO0FBQUEsTUFBaUJDLFlBQWpCOztBQUNBLG1CQUEyQ1osK0NBQVEsQ0FBQyxLQUFELENBQW5EO0FBQUEsTUFBT2EsYUFBUDtBQUFBLE1BQXNCQyxpQkFBdEI7O0FBQ0EsbUJBQXFDZCwrQ0FBUSxDQUFDLEtBQUQsQ0FBN0M7QUFBQSxNQUFPZSxVQUFQO0FBQUEsTUFBbUJDLGNBQW5COztBQUdGLHNCQUNJLDhEQUFDLHNEQUFEO0FBQ0UsU0FBSyxZQUFLZCxLQUFLLENBQUNPLE1BQU4sQ0FBYUMsSUFBbEIsNkJBRFA7QUFFRSxnQkFBWSxFQUFFUixLQUFLLENBQUNlLFlBRnRCO0FBR0UsVUFBTSxFQUFFZixLQUFLLENBQUNnQixNQUhoQjtBQUlFLGNBQVUsRUFBRWhCLEtBQUssQ0FBQ2lCLFVBSnBCO0FBQUEsNEJBT0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFB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QUFFaUIsT0FBTyxDQUFDSTtBQU5mLG1CQU9LVCxHQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRG1DO0FBQUEsZUFBbkI7QUFEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQXdFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXhFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQW1NRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5NRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQThQRCxDQS9RRDs7R0FBTXJCOztLQUFBQTs7QUF5U04sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvYnJhbmQvW3NsdWddLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkNvbnRhaW5lcnMvbGF5b3V0XCIgXHJcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tIFwiQ29tcG9uZW50cy9wcm9kdWN0L1Byb2R1Y3RDYXJkXCI7XHJcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gXCJDb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYlwiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBicmVhZGNydW1icyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBcIlByb2R1Y3RzXCIsXHJcbiAgICAgICAgdXJsOiBwcm9jZXNzLmVudi5ST09UX0RPTUFJTiArIFwiL3Byb2R1Y3RzXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiBwcm9wcy5kZXRhaWwubmFtZSxcclxuICAgICAgICB1cmw6IFwiaHR0cDovL2dvb2dsZS5jb21cIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgICBcclxuICAgIGNvbnN0IFtpc0JyYW5kcywgdG9nZ2xlQnJhbmRzXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbaXNBcHBsaWNhdGlvbiwgdG9nZ2xlQXBwbGljYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbaXNJbmR1c3RyeSwgdG9nZ2xlSW5kdXN0cnldID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0XHJcbiAgICAgICAgdGl0bGU9e2Ake3Byb3BzLmRldGFpbC5uYW1lfSB8IFBULiBFcmEgTWl0cmEgUGVyZGFuYWB9XHJcbiAgICAgICAgYXBwbGljYXRpb25zPXtwcm9wcy5hcHBsaWNhdGlvbnN9XHJcbiAgICAgICAgYnJhbmRzPXtwcm9wcy5icmFuZHN9XHJcbiAgICAgICAgaW5kdXN0cmllcz17cHJvcHMuaW5kdXN0cmllc30gXHJcbiAgICAgICAgPiAgICAgXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFkY3J1bWItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJzPXticmVhZGNydW1ic31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhdGVnb3J5LXNpZGUtdGl0bGUgZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2F0ZWdvcnktc2lkZS10aXRsZSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJhbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0JyYW5kcyA/IDxhIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUJyYW5kcyhmYWxzZSl9IGNsYXNzTmFtZT1cImJ1dHRvbi1leHBhbmRcIj48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmV4cGFuZF9sZXNzPC9zcGFuPjwvYT4gOiAgPGEgb25DbGljaz17KCkgPT4gdG9nZ2xlQnJhbmRzKHRydWUpfSBjbGFzc05hbWU9XCJidXR0b24tZXhwYW5kXCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5leHBhbmRfbW9yZTwvc3Bhbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQnJhbmRzICYmIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtbGlzdC13cmFwcGVyXCI+IHtwcm9wcy5icmFuZHMgJiYgcHJvcHMuYnJhbmRzLm1hcCgoYnJhbmQsIGlkeCkgPT4gPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fSBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vcHJvZHVjdHMvYnJhbmQvJHticmFuZC5pZH1gfT48cCBjbGFzc05hbWU9XCJncm91cC1saXN0XCI+e2JyYW5kLm5hbWV9PC9wPjwvYT4pfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXRlZ29yeS1zaWRlLXRpdGxlIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmR1c3RyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbmR1c3RyeSA/IDxhIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUluZHVzdHJ5KGZhbHNlKX0gY2xhc3NOYW1lPVwiYnV0dG9uLWV4cGFuZFwiPjxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZXhwYW5kX2xlc3M8L3NwYW4+PC9hPiA6ICA8YSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVJbmR1c3RyeSh0cnVlKX0gY2xhc3NOYW1lPVwiYnV0dG9uLWV4cGFuZFwiPjxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZXhwYW5kX21vcmU8L3NwYW4+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5kdXN0cnkgJiYgPGRpdiBjbGFzc05hbWU9XCJncm91cC1saXN0LXdyYXBwZXJcIj4ge3Byb3BzLmluZHVzdHJpZXMgJiYgcHJvcHMuaW5kdXN0cmllcy5tYXAoKGluZHVzdHJ5LCBpZHgpID0+IDxhIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH0gaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L3Byb2R1Y3RzL2luZHVzdHJ5LyR7aW5kdXN0cnkuaWR9YH0+PHAgY2xhc3NOYW1lPVwiZ3JvdXAtbGlzdFwiPntpbmR1c3RyeS5uYW1lfTwvcD48L2E+KX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2F0ZWdvcnktc2lkZS10aXRsZSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXBwbGljYXRpb24gPyA8YSBvbkNsaWNrPXsoKSA9PiB0b2dnbGVBcHBsaWNhdGlvbihmYWxzZSl9IGNsYXNzTmFtZT1cImJ1dHRvbi1leHBhbmRcIj48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmV4cGFuZF9sZXNzPC9zcGFuPjwvYT4gOiAgPGEgb25DbGljaz17KCkgPT4gdG9nZ2xlQXBwbGljYXRpb24odHJ1ZSl9IGNsYXNzTmFtZT1cImJ1dHRvbi1leHBhbmRcIj48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmV4cGFuZF9tb3JlPC9zcGFuPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXBwbGljYXRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJncm91cC1saXN0LXdyYXBwZXJcIj4ge3Byb3BzLmFwcGxpY2F0aW9ucyAmJiBwcm9wcy5hcHBsaWNhdGlvbnMubWFwKChhcHBsaWNhdGlvbiwgaWR4KSA9PiA8YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9IGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9wcm9kdWN0cy9hcHBsaWNhdGlvbi8ke2FwcGxpY2F0aW9uLmlkfWB9PjxwIGNsYXNzTmFtZT1cImdyb3VwLWxpc3RcIj57YXBwbGljYXRpb24ubmFtZX08L3A+PC9hPil9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJiYW5uZXItcHJvZHVjdHNcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9iYW5uZXItcHJvZHVjdHMuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlLXVuZGVybGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5kZXRhaWwgPyBwcm9wcy5kZXRhaWwubmFtZSA6IFwiUHJvZHVjdHNcIn0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5wcm9kdWN0cyAmJiBwcm9wcy5wcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGlkeCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmU9e3Byb2R1Y3QuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtgJHtwcm9kdWN0LkFwcGxpY2F0aW9uLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmFuZD17cHJvZHVjdC5CcmFuZC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJvZHVjdC5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLnByb2R1Y3RzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubGVmdC1wcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucmlnaHQtcHJvZHVjdHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDRweCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJhbm5lci1wcm9kdWN0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhdGVnb3J5LXNpZGUtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwIDAgMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2F0ZWdvcnktZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0M0QzRDNDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1ncm91cCBhIHtcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1zaWRlLXRpdGxlLmdyZWVue1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMUJBNThBO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzRDNEM0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wcm9kdWN0cy13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZ3JvdXAtbGlzdCBwIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZ3JvdXAtbGlzdDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMUJBNThBO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgIC5sZWZ0LXByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgIC5icmVhZGNydW1iLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgLnJpZ2h0LXByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAuYmFubmVyLXByb2R1Y3RzIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAtMTJweCAtMjBweCAwIC0yMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgIC5zZWN0aW9uLXRpdGxlLXVuZGVybGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgIC5zZWN0aW9uLXRpdGxlLXVuZGVybGluZTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAucHJvZHVjdHMtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIC5jb250YWluZXItaW5uZXIge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTEyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAuY29udGFpbmVyLmJhbm5lciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RkZFRTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjRweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VjdGlvbi10aXRsZS11bmRlcmxpbmUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1OHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWN0aW9uLXRpdGxlLXVuZGVybGluZTphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMUJBNThBO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VjdGlvbi1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2QTY2O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhyZXEpIHtcclxuXHJcblxyXG4gIGNvbnN0IGdldEJyYW5kcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0QnJhbmRzYClcclxuICBjb25zdCBicmFuZHMgPSBhd2FpdCBnZXRCcmFuZHMuanNvbigpXHJcblxyXG5cclxuICBjb25zdCBnZXRJbmR1c3RyeSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0SW5kdXN0cnlgKVxyXG4gIGNvbnN0IGluZHVzdHJpZXMgPSBhd2FpdCBnZXRJbmR1c3RyeS5qc29uKClcclxuXHJcblxyXG4gIGNvbnN0IGdldEFwcGxpY2F0aW9uID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2FwaS9nZXRBcHBsaWNhdGlvbmApXHJcbiAgY29uc3QgYXBwbGljYXRpb25zID0gYXdhaXQgZ2V0QXBwbGljYXRpb24uanNvbigpXHJcblxyXG4gIGNvbnN0IGdldFByb2R1Y3RzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2FwaS9nZXRQcm9kdWN0P2JyYW5kPSR7cmVxLnF1ZXJ5LnNsdWd9YClcclxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGdldFByb2R1Y3RzLmpzb24oKVxyXG5cclxuICBjb25zdCBnZXRCcmFuZCA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0QnJhbmRzLyR7cmVxLnF1ZXJ5LnNsdWd9YClcclxuICBjb25zdCBicmFuZCA9IGF3YWl0IGdldEJyYW5kLmpzb24oKVxyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBkZXRhaWw6IGJyYW5kLCBwcm9kdWN0czogcHJvZHVjdHMuZGF0YSwgYnJhbmRzOiBicmFuZHMsIGluZHVzdHJpZXM6IGluZHVzdHJpZXMsIGFwcGxpY2F0aW9uczogYXBwbGljYXRpb25zIH19XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJQcm9kdWN0Q2FyZCIsIkJyZWFkY3J1bWIiLCJSZWFjdCIsInVzZVN0YXRlIiwiSG9tZSIsInByb3BzIiwiYnJlYWRjcnVtYnMiLCJ0aXRsZSIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJST09UX0RPTUFJTiIsImRldGFpbCIsIm5hbWUiLCJpc0JyYW5kcyIsInRvZ2dsZUJyYW5kcyIsImlzQXBwbGljYXRpb24iLCJ0b2dnbGVBcHBsaWNhdGlvbiIsImlzSW5kdXN0cnkiLCJ0b2dnbGVJbmR1c3RyeSIsImFwcGxpY2F0aW9ucyIsImJyYW5kcyIsImluZHVzdHJpZXMiLCJtYXAiLCJicmFuZCIsImlkeCIsImlkIiwiaW5kdXN0cnkiLCJhcHBsaWNhdGlvbiIsInByb2R1Y3RzIiwicHJvZHVjdCIsImltZyIsIkFwcGxpY2F0aW9uIiwiQnJhbmQiLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=
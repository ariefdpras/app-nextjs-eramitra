"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/article/ArticleCard.js":
/*!*******************************************!*\
  !*** ./components/article/ArticleCard.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\silvi\\Documents\\eramitra-dev\\components\\article\\ArticleCard.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var ArticleCard = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(ArticleCard, _React$Component);

  var _super = _createSuper(ArticleCard);

  function ArticleCard(props) {
    (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, ArticleCard);

    return _super.call(this, props);
  }

  (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(ArticleCard, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "article-card",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "article-picture-wrapper",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
            className: "article-picture",
            src: "https://svr.eramitra.com/images/".concat(props.picture)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "article-description",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            className: "article-date",
            children: props.date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h6", {
            className: "article-name",
            children: [props.name, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
            href: "".concat("http://localhost:3001", "/news-info/").concat(props.slug),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "btn-read-card",
              children: "Read Article"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 80
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("style", {
          children: "\n                    .article-card {\n                        width: 200px;\n                    }\n\n                    .article-picture-wrapper {\n                        width: 100%;\n                        border-radius: 20px;\n                    }\n\n                    .article-picture {\n                        width: 200px;\n                        height: 200px;\n                        object-fit: cover;\n                    }\n\n                    .article-description {\n                        margin-top: 10px;\n                    }\n\n                    .article-date {\n                        font-family: Calibri;\n                        font-style: normal;\n                        font-weight: normal;\n                        font-size: 14px;\n                        line-height: 17px;\n                        color: #C4C4C4;\n                        margin: 0 0 10px 0;\n                    }\n\n                    .article-name {\n                        font-family: Bahnschrift;\n                        font-style: normal;\n                        font-weight: normal;\n                        font-size: 18px;\n                        line-height: 22px;\n                        color: #000000;\n                        margin: 0 0 24px 0;\n                        width: 200px;\n                    }\n\n                    .btn-read-card {\n                        font-family: Bahnschrift;\n                        font-size: 18px;\n                        font-style: normal;\n                        font-weight: 400;\n                        line-height: 22px;\n                        letter-spacing: 0em;\n                        text-align: left;\n\n                        width: fit-content;\n                        color: #1BA58A;\n                        padding: 4px 16px;\n                        border: 1px solid #1BA58A;\n                        border-radius: 4px;\n                        margin: 0;\n                    }\n\n\n                    @media only screen and (max-width: 800px){\n\n                        .article-date {\n                            font-family: Calibri;\n                            font-style: normal;\n                            font-weight: normal;\n                            font-size: 12px;\n                            line-height: 15px;\n                            margin: 0 0 8px 0;\n                        }\n\n                    .article-card {\n                        width: 126px;\n                    }\n\n                    .article-picture {\n                        width: 126px;\n                        height: 126px;\n                        object-fit: cover;\n                    }\n\n                        .article-name {\n                            font-family: Bahnschrift;\n                            font-size: 14px;\n                            font-style: normal;\n                            font-weight: 400;\n                            line-height: 17px;\n                            letter-spacing: 0em;\n                            text-align: left;\n                            margin: 0 0 16px 0;\n                            width: 126px;\n                        }\n\n                        .btn-read-card {\n                            font-family: Bahnschrift;\n                            font-style: normal;\n                            font-weight: normal;\n                            font-size: 14px;\n                            line-height: 17px;\n                            /* identical to box height */\n\n                            text-align: center;\n                        }\n                    }\n\n                "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this);
    }
  }]);

  return ArticleCard;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (ArticleCard);

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


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _containers_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/layout */ "./containers/layout.js");
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section */ "./components/section.js");
/* harmony import */ var Components_article_ArticleCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/article/ArticleCard */ "./components/article/ArticleCard.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\silvi\\Documents\\eramitra-dev\\pages\\index.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Home = function Home(props) {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true
  };
  var settings2 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };
  var settings3 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_containers_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: "PT. Era Mitra Perdana",
    applications: props.applications,
    brands: props.brands,
    industries: props.industries,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.default, {
        element_id: "banner",
        background: "#FFFFFF",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "banner-slider",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, settings2), {}, {
            children: props.banner && props.banner.map(function (banner, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "banner-item",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "banner-item-content"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("style", {
                  children: "\n                      .banner-item{\n                        width: 100vw;\n                        height: 80vh;\n                      }\n                      .banner-item-content {\n                        background: url(https://svr.eramitra.com/images/".concat(banner.img, ");\n                        width: 100vw;\n                        height: 80vh;\n                        background-size: cover;\n                      }\n\n                      .slick-prev:before {\n                        font-family: 'Bahnschrift';\n                        content: '<';\n                        color: black;\n                        font-size: 20px;\n                      }\n                      \n                      .slick-next:before {\n                        font-family: 'Bahnschrift';\n                        content: \">\";\n                        color: black;\n                        font-size: 20px;\n                      }\n\n                      .banner-slider .slick-next {\n                        right: 30px;\n                      }\n\n                      .banner-slider .slick-prev {\n                        left: 20px;\n                        z-index: 5;\n                      }\n\n                      @media only screen and (max-width: 800px){\n                        .banner-item{\n                          width: 100vw;\n                          height: 20vh;\n                        }\n                        .banner-item-content {\n                          width: 100vw;\n                          height: 20vh;\n                        }\n  \n                      }\n                      ")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.default, {
        element_id: "about-us",
        background: "#FBFBFB",
        icon: [{
          image: "shape-1.svg",
          vertical: "bottom",
          horizontal: "right"
        }, {
          image: "shape-6.svg",
          vertical: "top",
          horizontal: "left"
        }],
        height: "618px",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "about-us-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
              src: "http://cdn.eramitra.com/images_article/original/DSC00749.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "about-us-description",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
                className: "section-title",
                children: "About Us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                className: "section-description",
                children: "PT. Era Mitra Perdana provides Scientific, Laboratory Equipment, and Services. We are highly experienced and a trusted partner for Government Institutions, Universities, and Industries to supply, install, and provide after sales services in the area of scientific and laboratory equipment since 1999."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("style", {
          children: "\n                .about-us-wrapper {\n                  height: 100%;\n                  display: flex;\n                  align-items: center;\n                  justify-content: space-between;\n                }\n\n                .about-us-wrapper img {\n                  height: 345px;\n                  width: auto;\n                  border-radius: 20px;\n                  margin-right: 75px;\n                }\n\n                .about-us .icon-shape-1 {\n                  display: none;\n                }\n\n                @media only screen and (max-width: 800px){\n\n                  .about-us-wrapper {\n                    flex-direction: column;\n                    justify-content: center;\n                  }\n\n                  .about-us-wrapper img {\n                    height: 111px;\n                    width: auto;\n                    border-radius: 20px;\n                    margin-right: 0;\n                    margin-bottom: 17px;\n                  }\n\n                  .about-us {\n                    height: 308px !important;\n                  }\n\n                  .about-us .icon-shape-1 {\n                    display: block;\n                  }\n\n                  .about-us .icon-shape-0 {\n                    display: none;\n                  }\n                }\n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.default, {
        element_id: "what-we-do-best",
        background: "#FFFFFF",
        icon: [{
          image: "shape-2.svg",
          vertical: "top",
          horizontal: "right"
        }],
        height: "1000px",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "what-we-do-best-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
              className: "section-title",
              children: "What We Do Best"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
              className: "section-description",
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer augue risus, tempus ac leo vel, laoreet congue quam. Sed convallis gravida maximus. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "main-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "card-wrapper",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                    src: "/static/images/wwdb-1.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 213,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                    children: ["High Quality with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 214,
                      columnNumber: 46
                    }, _this), " Competitive Price"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                    src: "/static/images/wwdb-2.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                    children: ["Installation & ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 218,
                      columnNumber: 47
                    }, _this), "Training"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                    src: "/static/images/wwdb-3.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                    children: ["Accessories &", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 222,
                      columnNumber: 45
                    }, _this), " Sparepart"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                    src: "/static/images/wwdb-4.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                    children: ["Maintenance & ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 226,
                      columnNumber: 46
                    }, _this), " Contract Service"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                className: "what-we-do-img",
                src: "/static/images/what-we-do-best.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("style", {
          children: "\n                .what-we-do-best-wrapper {\n                  height: 100%;\n                  display: flex;\n                  flex-direction: column;\n                  justify-content: center;\n                  align-items: center;\n                }\n                .what-we-do-best-wrapper .section-title {\n                  text-align: center;\n                }\n                \n                .what-we-do-best-wrapper .section-description {\n                  text-align: center;\n                  max-width: 741px;\n                }\n\n                .what-we-do-best-wrapper .main-content {\n                  display: flex;\n                  justify-content: space-between;\n                  width: 100%;\n                  margin-top: 76px;\n                }\n\n                .what-we-do-best-wrapper .card-wrapper {\n                  display: flex;\n                  flex-direction: column;\n                  justify-content: space-between;\n                  padding-bottom: 20px;\n                }\n\n                .wwdb-card {\n                  background: #F8F8F8;\n                  border-radius: 20px;\n                  padding: 17px 19px;\n                  display: flex;\n                  align-items: center;\n                  max-width: 439px;\n                  margin: 5px 0;\n                }\n\n                .wwdb-card p {\n                  font-family: Bahnschrift;\n                  font-style: normal;\n                  font-weight: normal;\n                  font-size: 24px;\n                  line-height: 29px;\n                  color: #000000;\n                  margin: 0 0 0 25px;\n                  padding-right: 50px;\n                }\n\n                @media only screen and (max-width: 1024px){\n                  .what-we-do-img {\n                    width: 60%;\n                  }\n                }\n\n                @media only screen and (max-width: 800px){\n                  .what-we-do-best {\n                    height: 452px !important;\n                  }\n\n                  .what-we-do-best .icon-shape-0.right {\n                    height: 30%;\n                  }\n\n                  .wwdb-card {\n                    background: #F8F8F8;\n                    border-radius: 10px;\n                    padding: 8px;\n                    display: flex;\n                    align-items: center;\n                    max-width: 217px !important;\n                  }\n  \n                  .wwdb-card img {\n                    height: 45px;\n                    width: auto;\n                  }\n\n                  .wwdb-card p {\n                    font-family: Bahnschrift;\n                    font-style: normal;\n                    font-weight: normal;\n                    font-size: 12px;\n                    line-height: 14px;\n                    margin: 0 0 0 12px !important;\n                    padding-right: 50px;\n                  }\n\n                  .what-we-do-img {\n                    display: none;\n                  }\n\n                  .what-we-do-best-wrapper {\n                    padding: 25px 0;\n                  }\n\n                  .what-we-do-best-wrapper .main-content {\n                    display: flex;\n                    justify-content: center;\n                    width: 100%;\n                    margin-top: 26px;\n                    height: 100%;\n                  }\n\n                  .what-we-do-best-wrapper .card-wrapper {\n                    padding-bottom: 0px;\n                  }\n                }\n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.default, {
        element_id: "brands",
        background: "#FBFBFB",
        height: "263px",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "brands-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "brands-slider desktop",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, settings), {}, {
                children: props.brands && props.brands.map(function (brand, idx) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                    className: "brands-item",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "https://svr.eramitra.com/images/".concat(brand.img)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 360,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 359,
                    columnNumber: 23
                  }, _this);
                })
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 357,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 356,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "brands-slider mobile",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, settings2), {}, {
                children: props.brands && props.brands.map(function (brand, idx) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                    className: "brands-item",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                      src: "https://svr.eramitra.com/images/".concat(brand.img)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 370,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 369,
                    columnNumber: 23
                  }, _this);
                })
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 367,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "brands-description",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
                className: "section-title",
                children: "Brands"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 376,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                className: "section-description",
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 377,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 375,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 354,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("style", {
          children: "\n                .brands-wrapper {\n                  height: 100%;\n                  display: flex;\n                  align-items: center;\n                  justify-content: space-between;\n                }\n\n                .brands-wrapper .section-title {\n                  margin: 0;\n                }\n                \n                .brands-wrapper .section-description {\n                  max-width: 280px;\n                }\n\n                .brands-slider.desktop {\n                  width: 70%;\n                  margin-right: 54px;\n                }\n\n                .brands-slider.mobile {\n                  display: none;\n                }\n\n\n                .brands-item {\n                  height: 30px;\n                  display: flex;\n                  justify-content: center;\n                }\n\n                .brands-item img{\n                  height: 30px;\n                  width: auto;\n                  margin: 0 20px;\n                }\n\n                \n                @media only screen and (max-width: 800px){\n                    .brands-wrapper {\n                      flex-direction: column-reverse;\n                      justify-content: center;\n                    }\n\n                    \n                    .brands-slider.mobile {\n                      display: block;\n                      width: 100%;\n                      margin-right: 0 !important;\n                      padding: 0 20px;\n                    }\n\n                    .brands-slider.desktop {\n                      display: none;\n                    }\n\n                    .brands-item {\n                      height: 30px;\n                      display: flex;\n                      justify-content: center;\n                    }\n    \n                    .brands-item img{\n                      height: 30px;\n                      width: auto;\n                      margin: 0 20px;\n                    }\n\n                    .brands-description {\n                      margin-bottom: 25px;\n                    }\n    \n                }\n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.default, {
        element_id: "discover",
        background: "#FFFFFF",
        height: "768px",
        icon: [{
          image: "shape-4.svg",
          vertical: "top",
          horizontal: "left"
        }],
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "container-inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "discover-wrapper",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "discover-description",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
                className: "section-title",
                children: "Discover"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 473,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
                className: "section-description",
                children: "Discover our latest news and info. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer augue risus, tempus ac leo vel, laoreet congue quam. Sed convallis gravida maximus."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 474,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 472,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 471,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "discover-slider",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, settings2), {}, {
              children: props.articles && props.articles.data && props.articles.data.map(function (article, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "article-card-wrapper",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Components_article_ArticleCard__WEBPACK_IMPORTED_MODULE_3__.default, {
                    picture: article.cover,
                    name: article.title,
                    slug: article.id,
                    date: utc_to_local_short(article.createdAt)
                  }, idx, false, {
                    fileName: _jsxFileName,
                    lineNumber: 483,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("style", {
                    children: "\n\n                      .slick-prev:before {\n                        font-family: 'Bahnschrift';\n                        content: '<';\n                        color: black;\n                        font-size: 20px;\n                      }\n                      \n                      .slick-next:before {\n                        font-family: 'Bahnschrift';\n                        content: \">\";\n                        color: black;\n                        font-size: 20px;\n                      }\n\n                      .banner-slider .slick-next {\n                        right: 30px;\n                      }\n\n                      .banner-slider .slick-prev {\n                        left: 20px;\n                        z-index: 5;\n                      }\n\n                      @media only screen and (max-width: 800px){\n     \n  \n                      }\n                      "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 489,
                    columnNumber: 19
                  }, _this)]
                }, idx, true, {
                  fileName: _jsxFileName,
                  lineNumber: 482,
                  columnNumber: 21
                }, _this);
              })
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 480,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 478,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 470,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("style", {
          children: "\n                .discover-wrapper {\n                  height: 100%;\n                  display: flex;\n                  align-items: center;\n                  justify-content: space-between;\n                }\n\n                .discover-wrapper .section-description {\n                  max-width: 350px;\n                }\n\n                @media only screen and (max-width: 800px){\n                  .discover .icon-shape-0.left {\n                    width: 30%;\n                  }\n                }\n                \n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 459,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.default, {
        element_id: "career",
        background: "#1BA58A",
        height: "351px",
        icon: [{
          image: "career.svg",
          vertical: "bottom",
          horizontal: "left"
        }, {
          image: "shape-3.svg",
          vertical: "top",
          horizontal: "right"
        }],
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "career-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "career-description",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
                className: "section-title",
                children: "Up for a challenge? Let\u2019s join us!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 569,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 568,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "btn-wrapper",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                href: "".concat("http://localhost:3001", "/career"),
                children: "More Info"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 573,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 572,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 567,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 566,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("style", {
          children: "\n                .career-wrapper {\n                  height: 100%;\n                  display: flex;\n                  align-items: center;\n                  justify-content: center;\n                }\n\n                \n                .career-wrapper .career-description {\n                  display: flex;\n                  align-items: center;\n                }\n\n                .career-wrapper .section-title {\n                  margin: 0;\n                  max-width: 496px;\n                  color: #FFFFFF !important;\n                  font-weight: normal !important;\n                }\n\n                .career-wrapper .btn-wrapper a {\n                  padding: 21px 50px;\n                  background: #FFFFFF;\n                  font-family: Bahnschrift;\n                  font-style: normal;\n                  font-weight: normal;\n                  font-size: 24px;\n                  line-height: 29px;\n                  color: #1BA58A;\n                  border-radius: 20px;\n                }\n                \n\n                @media only screen and (max-width: 800px){\n\n                  .career .icon-shape-0 {\n                    height: 124px;\n                  }\n                  \n                  .career .icon-shape-1 {\n                    display: none;\n                  }\n\n                  .career {\n                    height: 137px !important;\n                  }\n\n                  .career-wrapper .btn-wrapper a {\n                    font-size: 12px;\n                    line-height: 12px;\n                    padding: 8px 15px;\n                    border-radius: 8px;\n                  }\n\n                  .career-wrapper .section-title {\n                    font-family: Bahnschrift;\n                    font-size: 14px;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: 17px;\n                    letter-spacing: 0em;\n                    text-align: left;\n                    width: 125px;\n\n                  }\n\n                  .career-wrapper {\n                    justify-content: flex-end !important;\n                  }\n                }\n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 579,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 550,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("style", {
      children: "\n            .container {\n              width: 100vw;\n              padding: 0;\n            }\n  \n            .container-inner {\n              max-width: 1120px;\n              margin: 0 auto;\n              height: 100%;\n            }\n  \n            .container.banner {\n              background-color: #F5FFEE;\n            }\n\n            .section-title {\n              font-family: Bahnschrift;\n              font-style: normal;\n              font-weight: 600;\n              font-size: 48px;\n              color: #000000;\n              margin: 0 0 24px 0;\n            }\n\n            .section-description {\n              font-family: Calibri;\n              font-style: italic;\n              font-weight: normal;\n              font-size: 20px;\n              line-height: 24px;\n              color: #666A66;\n              margin: 0;\n            }\n\n            \n            @media only screen and (max-width: 800px){\n              .section-title {\n                font-family: Bahnschrift;\n                font-style: normal;\n                font-weight: 600;\n                font-size: 18px;\n                line-height: 22px;\n                text-align: center;\n                margin-bottom: 10px;\n              }\n\n              .section-description {\n                font-family: Calibri;\n                font-style: italic;\n                font-weight: normal;\n                font-size: 12px;\n                line-height: 15px;\n                text-align: center;\n                color: #666A66;\n              }\n            }\n          "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 7
  }, _this);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTE4MThkMWRiZGRlNTY3MGFlZmUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztJQUVNQzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNYQSxLQURXO0FBRWxCOzs7O1dBRUQsa0JBQVM7QUFDUCxVQUFNQSxLQUFLLEdBQUcsS0FBS0EsS0FBbkI7QUFFQSwwQkFDSTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyx5QkFBZjtBQUFBLGlDQUNBO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFpQyxlQUFHLDRDQUFxQ0EsS0FBSyxDQUFDQyxPQUEzQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUdJO0FBQUssbUJBQVMsRUFBQyxxQkFBZjtBQUFBLGtDQUNJO0FBQUcscUJBQVMsRUFBQyxjQUFiO0FBQUEsc0JBQTZCRCxLQUFLLENBQUNFO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFJLHFCQUFTLEVBQUMsY0FBZDtBQUFBLHVCQUE4QkYsS0FBSyxDQUFDRyxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFHSTtBQUFHLGdCQUFJLFlBQUtDLHVCQUFMLHdCQUEwQ0osS0FBSyxDQUFDTyxJQUFoRCxDQUFQO0FBQUEsbUNBQStEO0FBQUssdUJBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFzSEM7Ozs7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QSxVQUFVLEVBQUU7QUFIZCxTQURJLEVBTUo7QUFDRUYsVUFBQUEsS0FBSyxFQUFFLGFBRFQ7QUFFRUMsVUFBQUEsUUFBUSxFQUFFLEtBRlo7QUFHRUMsVUFBQUEsVUFBVSxFQUFFO0FBSGQsU0FOSSxDQUpSO0FBQUEsZ0NBZ0JFO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxnQkFBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxvQkFBZjtBQUFBLHFDQUNFO0FBQUkseUJBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUtFO0FBQUssdUJBQVMsRUFBQyxhQUFmO0FBQUEscUNBQ0U7QUFBRyxvQkFBSSxZQUFLNUIsdUJBQUwsWUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkYsZUE2QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQXFtQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFybUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb3FCRCxDQXZzQkQ7O0tBQU1ROztBQWl1Qk4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcnRpY2xlL0FydGljbGVDYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jbGFzcyBBcnRpY2xlQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtcGljdHVyZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXJ0aWNsZS1waWN0dXJlXCIgc3JjPXtgaHR0cHM6Ly9zdnIuZXJhbWl0cmEuY29tL2ltYWdlcy8ke3Byb3BzLnBpY3R1cmV9YH0gLz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlLWRhdGVcIj57cHJvcHMuZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1uYW1lXCI+e3Byb3BzLm5hbWV9IDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vbmV3cy1pbmZvLyR7cHJvcHMuc2x1Z31gfT48ZGl2IGNsYXNzTmFtZT1cImJ0bi1yZWFkLWNhcmRcIj5SZWFkIEFydGljbGU8L2Rpdj48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZS1waWN0dXJlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlLXBpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGUtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGUtZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjQzRDNEM0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAyNHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5idG4tcmVhZC1jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMUJBNThBO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzFCQTU4QTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZS1kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGUtY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlLXBpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxNnB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idG4tcmVhZC1jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUNhcmQiLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb250YWluZXJzL2xheW91dFwiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9uXCI7XHJcbmltcG9ydCBBcnRpY2xlQ2FyZCBmcm9tIFwiQ29tcG9uZW50cy9hcnRpY2xlL0FydGljbGVDYXJkXCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcblxyXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XHJcblxyXG5cdGNvbnN0IHNldHRpbmdzID0ge1xyXG5cdFx0ZG90czogdHJ1ZSxcclxuXHRcdGFycm93czogdHJ1ZSxcclxuXHRcdGluZmluaXRlOiB0cnVlLFxyXG5cdFx0c3BlZWQ6IDUwMCxcclxuXHRcdHNsaWRlc1RvU2hvdzogNCxcclxuXHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgIFxyXG5cdH07XHJcblxyXG4gIGNvbnN0IHNldHRpbmdzMiA9IHtcclxuXHRcdGRvdHM6IHRydWUsXHJcblx0XHRhcnJvd3M6IHRydWUsXHJcblx0XHRpbmZpbml0ZTogdHJ1ZSxcclxuXHRcdHNwZWVkOiA1MDAsXHJcblx0XHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcblx0fTtcclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MzID0ge1xyXG5cdFx0ZG90czogdHJ1ZSxcclxuXHRcdGFycm93czogdHJ1ZSxcclxuXHRcdGluZmluaXRlOiB0cnVlLFxyXG5cdFx0c3BlZWQ6IDUwMCxcclxuXHRcdHNsaWRlc1RvU2hvdzogMyxcclxuXHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuXHR9O1xyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXRcclxuICAgICAgICB0aXRsZT1cIlBULiBFcmEgTWl0cmEgUGVyZGFuYVwiXHJcbiAgICAgICAgYXBwbGljYXRpb25zPXtwcm9wcy5hcHBsaWNhdGlvbnN9XHJcbiAgICAgICAgYnJhbmRzPXtwcm9wcy5icmFuZHN9XHJcbiAgICAgICAgaW5kdXN0cmllcz17cHJvcHMuaW5kdXN0cmllc30gPiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxTZWN0aW9uIFxyXG4gICAgICAgICAgICBlbGVtZW50X2lkPVwiYmFubmVyXCIgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ9XCIjRkZGRkZGXCIgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItc2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3MyfT5cclxuICAgICAgICAgICAgICAgIHsgcHJvcHMuYmFubmVyICYmIHByb3BzLmJhbm5lci5tYXAoKGJhbm5lciwgaWR4ICkgPT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmFubmVyLWl0ZW1gfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItaXRlbS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgLmJhbm5lci1pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXItaXRlbS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vc3ZyLmVyYW1pdHJhLmNvbS9pbWFnZXMvJHtiYW5uZXIuaW1nfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1wcmV2OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFobnNjaHJpZnQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnPCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAuc2xpY2stbmV4dDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JhaG5zY2hyaWZ0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXItc2xpZGVyIC5zbGljay1uZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgLmJhbm5lci1zbGlkZXIgLnNsaWNrLXByZXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVyLWl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVyLWl0ZW0tY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICA8U2VjdGlvbiBcclxuICAgICAgICAgICAgZWxlbWVudF9pZD1cImFib3V0LXVzXCIgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ9XCIjRkJGQkZCXCIgXHJcbiAgICAgICAgICAgIGljb249e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJzaGFwZS0xLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IFwiYm90dG9tXCIsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcInJpZ2h0XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltYWdlOiBcInNoYXBlLTYuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwibGVmdFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdfSBcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNjE4cHhcIiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC11cy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9jZG4uZXJhbWl0cmEuY29tL2ltYWdlc19hcnRpY2xlL29yaWdpbmFsL0RTQzAwNzQ5LmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXVzLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+QWJvdXQgVXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWN0aW9uLWRlc2NyaXB0aW9uXCI+UFQuXHRFcmFcdE1pdHJhXHRQZXJkYW5hXHRwcm92aWRlc1x0U2NpZW50aWZpYyxcdExhYm9yYXRvcnlcdFxyXG4gICAgICAgICAgICAgICAgICBFcXVpcG1lbnQsXHRhbmRcdFNlcnZpY2VzLiBXZVx0YXJlXHRoaWdobHlcdGV4cGVyaWVuY2VkXHRhbmRcdGFcdHRydXN0ZWRcdHBhcnRuZXJcdGZvclx0XHJcbiAgICAgICAgICAgICAgICAgIEdvdmVybm1lbnRcdEluc3RpdHV0aW9ucyxcdFVuaXZlcnNpdGllcyxcdGFuZFx0SW5kdXN0cmllc1x0dG9cdFxyXG4gICAgICAgICAgICAgICAgICBzdXBwbHksXHRpbnN0YWxsLFx0YW5kXHRwcm92aWRlXHRhZnRlclx0c2FsZXNcdHNlcnZpY2VzXHRpblx0dGhlXHRhcmVhXHRcclxuICAgICAgICAgICAgICAgICAgb2ZcdHNjaWVudGlmaWNcdGFuZFx0bGFib3JhdG9yeVx0ZXF1aXBtZW50XHRzaW5jZVx0MTk5OS48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmFib3V0LXVzLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYWJvdXQtdXMtd3JhcHBlciBpbWcge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0NXB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hYm91dC11cyAuaWNvbi1zaGFwZS0xIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC5hYm91dC11cy13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuYWJvdXQtdXMtd3JhcHBlciBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmFib3V0LXVzIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5hYm91dC11cyAuaWNvbi1zaGFwZS0xIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmFib3V0LXVzIC5pY29uLXNoYXBlLTAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPC9TZWN0aW9uPlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPFNlY3Rpb24gXHJcbiAgICAgICAgICAgIGVsZW1lbnRfaWQ9XCJ3aGF0LXdlLWRvLWJlc3RcIiBcclxuICAgICAgICAgICAgYmFja2dyb3VuZD1cIiNGRkZGRkZcIiBcclxuICAgICAgICAgICAgaWNvbj17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltYWdlOiBcInNoYXBlLTIuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXX0gXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMDBweFwiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtd2UtZG8tYmVzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+V2hhdCBXZSBEbyBCZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VjdGlvbi1kZXNjcmlwdGlvblwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEludGVnZXIgYXVndWUgcmlzdXMsIHRlbXB1cyBhYyBsZW8gdmVsLCBsYW9yZWV0IGNvbmd1ZSBxdWFtLiBTZWQgY29udmFsbGlzIGdyYXZpZGEgbWF4aW11cy4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3dkYi1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvd3dkYi0xLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhpZ2ggUXVhbGl0eSB3aXRoIDxicj48L2JyPiBDb21wZXRpdGl2ZSBQcmljZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3d2RiLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy93d2RiLTIuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW5zdGFsbGF0aW9uICZhbXA7IDxicj48L2JyPlRyYWluaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd3ZGItY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3d3ZGItMy5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BY2Nlc3NvcmllcyAmYW1wOzxicj48L2JyPiBTcGFyZXBhcnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3dkYi1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvd3dkYi00LnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1haW50ZW5hbmNlICZhbXA7IDxicj48L2JyPiBDb250cmFjdCBTZXJ2aWNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3aGF0LXdlLWRvLWltZ1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3doYXQtd2UtZG8tYmVzdC5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLndoYXQtd2UtZG8tYmVzdC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC53aGF0LXdlLWRvLWJlc3Qtd3JhcHBlciAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLndoYXQtd2UtZG8tYmVzdC13cmFwcGVyIC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDc0MXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC53aGF0LXdlLWRvLWJlc3Qtd3JhcHBlciAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNzZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAud2hhdC13ZS1kby1iZXN0LXdyYXBwZXIgLmNhcmQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnd3ZGItY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE3cHggMTlweDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MzlweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAud3dkYi1jYXJkIHAge1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjlweDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMjVweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbiAgICAgICAgICAgICAgICAgIC53aGF0LXdlLWRvLWltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAud2hhdC13ZS1kby1iZXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC53aGF0LXdlLWRvLWJlc3QgLmljb24tc2hhcGUtMC5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC53d2RiLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjE3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAud3dkYi1jYXJkIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAud3dkYi1jYXJkIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLndoYXQtd2UtZG8taW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAud2hhdC13ZS1kby1iZXN0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLndoYXQtd2UtZG8tYmVzdC13cmFwcGVyIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC53aGF0LXdlLWRvLWJlc3Qtd3JhcHBlciAuY2FyZC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICA8U2VjdGlvbiBcclxuICAgICAgICAgICAgZWxlbWVudF9pZD1cImJyYW5kc1wiIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kPVwiI0ZCRkJGQlwiICBcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMjYzcHhcIiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZHMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kcy1zbGlkZXIgZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5icmFuZHMgJiYgcHJvcHMuYnJhbmRzLm1hcCgoYnJhbmQsIGlkeCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kcy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9zdnIuZXJhbWl0cmEuY29tL2ltYWdlcy8ke2JyYW5kLmltZ31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kcy1zbGlkZXIgbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5icmFuZHMgJiYgcHJvcHMuYnJhbmRzLm1hcCgoYnJhbmQsIGlkeCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kcy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9zdnIuZXJhbWl0cmEuY29tL2ltYWdlcy8ke2JyYW5kLmltZ31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRzLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+QnJhbmRzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VjdGlvbi1kZXNjcmlwdGlvblwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmJyYW5kcy13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJyYW5kcy13cmFwcGVyIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuYnJhbmRzLXdyYXBwZXIgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5icmFuZHMtc2xpZGVyLmRlc2t0b3Age1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDU0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJyYW5kcy1zbGlkZXIubW9iaWxlIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLmJyYW5kcy1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnJhbmRzLWl0ZW0gaW1ne1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5icmFuZHMtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5icmFuZHMtc2xpZGVyLm1vYmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnJhbmRzLXNsaWRlci5kZXNrdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnJhbmRzLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5icmFuZHMtaXRlbSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJyYW5kcy1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICA8U2VjdGlvbiBcclxuICAgICAgICAgICAgZWxlbWVudF9pZD1cImRpc2NvdmVyXCIgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ9XCIjRkZGRkZGXCIgIFxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI3NjhweFwiXHJcbiAgICAgICAgICAgIGljb249e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJzaGFwZS00LnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcImxlZnRcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXX0gID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NvdmVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY292ZXItZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+RGlzY292ZXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWN0aW9uLWRlc2NyaXB0aW9uXCI+RGlzY292ZXIgb3VyIGxhdGVzdCBuZXdzIGFuZCBpbmZvLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbnRlZ2VyIGF1Z3VlIHJpc3VzLCB0ZW1wdXMgYWMgbGVvIHZlbCwgbGFvcmVldCBjb25ndWUgcXVhbS4gU2VkIGNvbnZhbGxpcyBncmF2aWRhIG1heGltdXMuPC9wPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NvdmVyLXNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3MyfT5cclxuICAgICAgICAgICAgICAgIHsgIHByb3BzLmFydGljbGVzICYmIHByb3BzLmFydGljbGVzLmRhdGEgJiYgcHJvcHMuYXJ0aWNsZXMuZGF0YS5tYXAoKGFydGljbGUsIGlkeCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWNhcmQtd3JhcHBlclwiIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlPXthcnRpY2xlLmNvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnPXthcnRpY2xlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXt1dGNfdG9fbG9jYWxfc2hvcnQoYXJ0aWNsZS5jcmVhdGVkQXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH0vPlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1wcmV2OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFobnNjaHJpZnQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnPCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAuc2xpY2stbmV4dDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JhaG5zY2hyaWZ0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXItc2xpZGVyIC5zbGljay1uZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgLmJhbm5lci1zbGlkZXIgLnNsaWNrLXByZXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgIFxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIC5kaXNjb3Zlci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRpc2NvdmVyLXdyYXBwZXIgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAuZGlzY292ZXIgLmljb24tc2hhcGUtMC5sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgPFNlY3Rpb24gXHJcbiAgICAgICAgICAgIGVsZW1lbnRfaWQ9XCJjYXJlZXJcIiBcclxuICAgICAgICAgICAgYmFja2dyb3VuZD1cIiMxQkE1OEFcIiAgXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjM1MXB4XCJcclxuICAgICAgICAgICAgaWNvbj17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltYWdlOiBcImNhcmVlci5zdmdcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBcImJvdHRvbVwiLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogXCJsZWZ0XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltYWdlOiBcInNoYXBlLTMuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXX0gID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVlci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVlci1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlVwIGZvciBhIGNoYWxsZW5nZT8gXHJcbiAgICAgICAgICAgICAgICAgICAgTGV04oCZcyBqb2luIHVzITwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2NhcmVlcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgIE1vcmUgSW5mb1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmNhcmVlci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJlZXItd3JhcHBlciAuY2FyZWVyLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2FyZWVyLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDk2cHg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2FyZWVyLXdyYXBwZXIgLmJ0bi13cmFwcGVyIGEge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMXB4IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzFCQTU4QTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmVlciAuaWNvbi1zaGFwZS0wIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZWVyIC5pY29uLXNoYXBlLTEge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJlZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTM3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmVlci13cmFwcGVyIC5idG4td3JhcHBlciBhIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZWVyLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJlZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAuY29udGFpbmVyLWlubmVyIHtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgLmNvbnRhaW5lci5iYW5uZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUZGRUU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI0cHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzY2NkE2NjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAgICAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NkE2NjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcblxyXG4gIGNvbnN0IGdldEJyYW5kcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0QnJhbmRzYClcclxuICBjb25zdCBicmFuZHMgPSBhd2FpdCBnZXRCcmFuZHMuanNvbigpXHJcblxyXG4gIFxyXG4gIGNvbnN0IGdldEJhbm5lciA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0QmFubmVyYClcclxuICBjb25zdCBiYW5uZXIgPSBhd2FpdCBnZXRCYW5uZXIuanNvbigpXHJcblxyXG5cclxuICBjb25zdCBnZXRJbmR1c3RyeSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0SW5kdXN0cnlgKVxyXG4gIGNvbnN0IGluZHVzdHJpZXMgPSBhd2FpdCBnZXRJbmR1c3RyeS5qc29uKClcclxuXHJcblxyXG4gIGNvbnN0IGdldEFwcGxpY2F0aW9uID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2FwaS9nZXRBcHBsaWNhdGlvbmApXHJcbiAgY29uc3QgYXBwbGljYXRpb25zID0gYXdhaXQgZ2V0QXBwbGljYXRpb24uanNvbigpXHJcblxyXG4gIGNvbnN0IGdldEFydGljbGVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2FwaS9nZXRBcnRpY2xlYClcclxuICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IGdldEFydGljbGVzLmpzb24oKVxyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBhcnRpY2xlczogYXJ0aWNsZXMsIGJhbm5lcjogYmFubmVyLCBicmFuZHM6IGJyYW5kcywgaW5kdXN0cmllczogaW5kdXN0cmllcywgYXBwbGljYXRpb25zOiBhcHBsaWNhdGlvbnMgfX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJBcnRpY2xlQ2FyZCIsInByb3BzIiwicGljdHVyZSIsImRhdGUiLCJuYW1lIiwicHJvY2VzcyIsImVudiIsIlJPT1RfRE9NQUlOIiwic2x1ZyIsIkNvbXBvbmVudCIsIkxheW91dCIsIlNlY3Rpb24iLCJTbGlkZXIiLCJIb21lIiwic2V0dGluZ3MiLCJkb3RzIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwidmFyaWFibGVXaWR0aCIsInNldHRpbmdzMiIsInNldHRpbmdzMyIsImFwcGxpY2F0aW9ucyIsImJyYW5kcyIsImluZHVzdHJpZXMiLCJiYW5uZXIiLCJtYXAiLCJpZHgiLCJpbWciLCJpbWFnZSIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImJyYW5kIiwiYXJ0aWNsZXMiLCJkYXRhIiwiYXJ0aWNsZSIsImNvdmVyIiwidGl0bGUiLCJpZCIsInV0Y190b19sb2NhbF9zaG9ydCIsImNyZWF0ZWRBdCJdLCJzb3VyY2VSb290IjoiIn0=
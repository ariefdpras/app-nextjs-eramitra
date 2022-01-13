"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var Components_article_ArticleCardHome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Components/article/ArticleCardHome */ "./components/article/ArticleCardHome.js");
/* harmony import */ var Helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Helpers/utils */ "./helpers/utils.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_containers_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    title: "PT. Era Mitra Perdana",
    applications: props.applications,
    brands: props.brands,
    industries: props.industries,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.default, {
        element_id: "banner",
        background: "#FFFFFF",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "banner-slider",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({}, settings2), {}, {
            children: props.banner && props.banner.map(function (banner, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "banner-item",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "banner-item-content"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("style", {
                  children: "\n                      .banner-item{\n                        width: 100vw;\n                        height: 80vh;\n                      }\n                      .banner-item-content {\n                        background: url(https://svr.eramitra.com/images/".concat(banner.img, ");\n                        width: 100vw;\n                        height: 80vh;\n                        background-size: cover;\n                      }\n\n                      .slick-prev:before {\n                        font-family: 'Bahnschrift';\n                        content: '<';\n                        color: black;\n                        font-size: 20px;\n                      }\n                      \n                      .slick-next:before {\n                        font-family: 'Bahnschrift';\n                        content: \">\";\n                        color: black;\n                        font-size: 20px;\n                      }\n\n                      .banner-slider .slick-next {\n                        right: 30px;\n                      }\n\n                      .banner-slider .slick-prev {\n                        left: 20px;\n                        z-index: 5;\n                      }\n\n                      @media only screen and (max-width: 800px){\n                        .banner-item{\n                          width: 100vw;\n                          height: 20vh;\n                        }\n                        .banner-item-content {\n                          width: 100vw;\n                          height: 20vh;\n                        }\n  \n                      }\n                      ")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, _this);
            })
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.default, {
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "about-us-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: "http://cdn.eramitra.com/images_article/original/DSC00749.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "about-us-description",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
                className: "section-title",
                children: "About Us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                className: "section-description",
                children: "PT. Era Mitra Perdana provides Scientific, Laboratory Equipment, and Services. We are highly experienced and a trusted partner for Government Institutions, Universities, and Industries to supply, install, and provide after sales services in the area of scientific and laboratory equipment since 1999."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("style", {
          children: "\n                .about-us-wrapper {\n                  height: 100%;\n                  display: flex;\n                  align-items: center;\n                  justify-content: space-between;\n                }\n\n                .about-us-wrapper img {\n                  height: 345px;\n                  width: auto;\n                  border-radius: 20px;\n                  margin-right: 75px;\n                }\n\n                .about-us .icon-shape-1 {\n                  display: none;\n                }\n\n                @media only screen and (max-width: 800px){\n\n                  .about-us-wrapper {\n                    flex-direction: column;\n                    justify-content: center;\n                  }\n\n                  .about-us-wrapper img {\n                    height: 111px;\n                    width: auto;\n                    border-radius: 20px;\n                    margin-right: 0;\n                    margin-bottom: 17px;\n                  }\n\n                  .about-us {\n                    height: 308px !important;\n                  }\n\n                  .about-us .icon-shape-1 {\n                    display: block;\n                  }\n\n                  .about-us .icon-shape-0 {\n                    display: none;\n                  }\n                }\n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.default, {
        element_id: "what-we-do-best",
        background: "#FFFFFF",
        icon: [{
          image: "shape-2.svg",
          vertical: "top",
          horizontal: "right"
        }],
        height: "1000px",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "what-we-do-best-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
              className: "section-title",
              children: "What We Do Best"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
              className: "section-description",
              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer augue risus, tempus ac leo vel, laoreet congue quam. Sed convallis gravida maximus. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "main-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "card-wrapper",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                    src: "/static/images/wwdb-1.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 214,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                    children: ["High Quality with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 46
                    }, _this), " Competitive Price"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                    src: "/static/images/wwdb-2.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                    children: ["Installation & ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 219,
                      columnNumber: 47
                    }, _this), "Training"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                    src: "/static/images/wwdb-3.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                    children: ["Accessories &", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 45
                    }, _this), " Sparepart"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                    src: "/static/images/wwdb-4.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                    children: ["Maintenance & ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 46
                    }, _this), " Contract Service"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 225,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 212,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                className: "what-we-do-img",
                src: "/static/images/what-we-do-best.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("style", {
          children: "\n                .what-we-do-best-wrapper {\n                  height: 100%;\n                  display: flex;\n                  flex-direction: column;\n                  justify-content: center;\n                  align-items: center;\n                }\n                .what-we-do-best-wrapper .section-title {\n                  text-align: center;\n                }\n                \n                .what-we-do-best-wrapper .section-description {\n                  text-align: center;\n                  max-width: 741px;\n                }\n\n                .what-we-do-best-wrapper .main-content {\n                  display: flex;\n                  justify-content: space-between;\n                  width: 100%;\n                  margin-top: 76px;\n                }\n\n                .what-we-do-best-wrapper .card-wrapper {\n                  display: flex;\n                  flex-direction: column;\n                  justify-content: space-between;\n                  padding-bottom: 20px;\n                }\n\n                .wwdb-card {\n                  background: #F8F8F8;\n                  border-radius: 20px;\n                  padding: 17px 19px;\n                  display: flex;\n                  align-items: center;\n                  max-width: 439px;\n                  margin: 5px 0;\n                }\n\n                .wwdb-card p {\n                  font-family: Bahnschrift;\n                  font-style: normal;\n                  font-weight: normal;\n                  font-size: 24px;\n                  line-height: 29px;\n                  color: #000000;\n                  margin: 0 0 0 25px;\n                  padding-right: 50px;\n                }\n\n                @media only screen and (max-width: 1024px){\n                  .what-we-do-img {\n                    width: 60%;\n                  }\n                }\n\n                @media only screen and (max-width: 800px){\n                  .what-we-do-best {\n                    height: 452px !important;\n                  }\n\n                  .what-we-do-best .icon-shape-0.right {\n                    height: 30%;\n                  }\n\n                  .wwdb-card {\n                    background: #F8F8F8;\n                    border-radius: 10px;\n                    padding: 8px;\n                    display: flex;\n                    align-items: center;\n                    max-width: 217px !important;\n                  }\n  \n                  .wwdb-card img {\n                    height: 45px;\n                    width: auto;\n                  }\n\n                  .wwdb-card p {\n                    font-family: Bahnschrift;\n                    font-style: normal;\n                    font-weight: normal;\n                    font-size: 12px;\n                    line-height: 14px;\n                    margin: 0 0 0 12px !important;\n                    padding-right: 50px;\n                  }\n\n                  .what-we-do-img {\n                    display: none;\n                  }\n\n                  .what-we-do-best-wrapper {\n                    padding: 25px 0;\n                  }\n\n                  .what-we-do-best-wrapper .main-content {\n                    display: flex;\n                    justify-content: center;\n                    width: 100%;\n                    margin-top: 26px;\n                    height: 100%;\n                  }\n\n                  .what-we-do-best-wrapper .card-wrapper {\n                    padding-bottom: 0px;\n                  }\n                }\n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.default, {
        element_id: "brands",
        background: "#FBFBFB",
        height: "263px",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "brands-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "brands-slider desktop",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({}, settings), {}, {
                children: props.brands && props.brands.map(function (brand, idx) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "brands-item",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "https://svr.eramitra.com/images/".concat(brand.img)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 361,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 360,
                    columnNumber: 23
                  }, _this);
                })
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 358,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "brands-slider mobile",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({}, settings2), {}, {
                children: props.brands && props.brands.map(function (brand, idx) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "brands-item",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
                      src: "https://svr.eramitra.com/images/".concat(brand.img)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 371,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 370,
                    columnNumber: 23
                  }, _this);
                })
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 368,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 367,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "brands-description",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
                className: "section-title",
                children: "Brands"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 377,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                className: "section-description",
                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 378,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 376,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("style", {
          children: "\n                .brands-wrapper {\n                  height: 100%;\n                  display: flex;\n                  align-items: center;\n                  justify-content: space-between;\n                }\n\n                .brands-wrapper .section-title {\n                  margin: 0;\n                }\n                \n                .brands-wrapper .section-description {\n                  max-width: 280px;\n                }\n\n                .brands-slider.desktop {\n                  width: 70%;\n                  margin-right: 54px;\n                }\n\n                .brands-slider.mobile {\n                  display: none;\n                }\n\n\n                .brands-item {\n                  height: 30px;\n                  display: flex;\n                  justify-content: center;\n                }\n\n                .brands-item img{\n                  height: 30px;\n                  width: auto;\n                  margin: 0 20px;\n                }\n\n                \n                @media only screen and (max-width: 800px){\n                    .brands-wrapper {\n                      flex-direction: column-reverse;\n                      justify-content: center;\n                    }\n\n                    \n                    .brands-slider.mobile {\n                      display: block;\n                      width: 100%;\n                      margin-right: 0 !important;\n                      padding: 0 20px;\n                    }\n\n                    .brands-slider.desktop {\n                      display: none;\n                    }\n\n                    .brands-item {\n                      height: 30px;\n                      display: flex;\n                      justify-content: center;\n                    }\n    \n                    .brands-item img{\n                      height: 30px;\n                      width: auto;\n                      margin: 0 20px;\n                    }\n\n                    .brands-description {\n                      margin-bottom: 25px;\n                    }\n    \n                }\n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.default, {
        element_id: "discover",
        background: "#FFFFFF",
        height: "768px",
        icon: [{
          image: "shape-4.svg",
          vertical: "top",
          horizontal: "left"
        }],
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "discover-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "discover-description",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
                className: "section-title",
                children: "Discover"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 474,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                className: "section-description",
                children: "Discover our latest news and info. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer augue risus, tempus ac leo vel, laoreet congue quam. Sed convallis gravida maximus."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 475,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 473,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "discover-slider",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({}, settings2), {}, {
                children: props.articles && props.articles.data && props.articles.data.map(function (article, idx) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "article-card-wrapper",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Components_article_ArticleCardHome__WEBPACK_IMPORTED_MODULE_3__.default, {
                      picture: article.cover,
                      name: article.title,
                      slug: article.id,
                      date: (0,Helpers_utils__WEBPACK_IMPORTED_MODULE_4__.utc_to_local_short)(article.createdAt)
                    }, idx, false, {
                      fileName: _jsxFileName,
                      lineNumber: 483,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("style", {
                      children: "\n\n                      .discover-slider {\n                        width: calc(100% - 500px);\n                      }\n\n                      .discover-description {\n                        margin-right: 30px;\n                      }\n                      .slick-prev:before {\n                        font-family: 'Bahnschrift';\n                        content: '<';\n                        color: black;\n                        font-size: 20px;\n                      }\n                      \n                      .slick-next:before {\n                        font-family: 'Bahnschrift';\n                        content: \">\";\n                        color: black;\n                        font-size: 20px;\n                      }\n\n                      .discover-slider .slick-next {\n                        right: 650px;\n                        top: auto;\n                        bottom: 10px;\n                      }\n\n                      .discover-slider .slick-prev {\n                        left: -75px;\n                        z-index: 5;\n                        top: auto;\n                        bottom: 10px;\n                      }\n\n                      @media only screen and (max-width: 800px){\n                        .discover {\n                          height: auto !important;\n                          padding: 100px 0;\n                        }\n                        .discover-slider {\n                          width: 100%;\n                          margin-top: 40px;\n                        }\n                        .discover-slider .slick-next {\n                          right: 0px;\n                          top: -10px;\n                          bottom: 10px;\n                        }\n  \n                        .discover-slider .slick-prev {\n                          left: auto;\n                          z-index: 5;\n                          top: -10px;\n                          right: 20px;\n                          bottom: auto;\n                        }\n  \n                        .discover-description {\n                          margin-right: 0px !important;\n                        }\n                      }\n                      "
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
            lineNumber: 472,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 471,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("style", {
          children: "\n                .discover-wrapper {\n                  height: 100%;\n                  display: flex;\n                  align-items: center;\n                  justify-content: space-between;\n                }\n\n                .discover-wrapper .section-description {\n                  max-width: 350px;\n                }\n\n                @media only screen and (max-width: 800px){\n                  .discover .icon-shape-0.left {\n                    width: 25%;\n                  }\n\n                  .discover-wrapper {\n                    flex-direction: column;\n                    justify-content: center;\n                  }\n                }\n                \n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 563,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.default, {
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "career-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "career-description",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
                className: "section-title",
                children: "Up for a challenge? Let\u2019s join us!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 609,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 608,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "btn-wrapper",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
                href: "".concat("http://localhost:3001", "/career"),
                children: "More Info"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 613,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 612,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 607,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 606,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("style", {
          children: "\n                .career-wrapper {\n                  height: 100%;\n                  display: flex;\n                  align-items: center;\n                  justify-content: center;\n                }\n\n                \n                .career-wrapper .career-description {\n                  display: flex;\n                  align-items: center;\n                }\n\n                .career-wrapper .section-title {\n                  margin: 0;\n                  max-width: 496px;\n                  color: #FFFFFF !important;\n                  font-weight: normal !important;\n                }\n\n                .career-wrapper .btn-wrapper a {\n                  padding: 21px 50px;\n                  background: #FFFFFF;\n                  font-family: Bahnschrift;\n                  font-style: normal;\n                  font-weight: normal;\n                  font-size: 24px;\n                  line-height: 29px;\n                  color: #1BA58A;\n                  border-radius: 20px;\n                }\n                \n\n                @media only screen and (max-width: 800px){\n\n                  .career .icon-shape-0 {\n                    height: 124px;\n                  }\n                  \n                  .career .icon-shape-1 {\n                    display: none;\n                  }\n\n                  .career {\n                    height: 137px !important;\n                  }\n\n                  .career-wrapper .btn-wrapper a {\n                    font-size: 12px;\n                    line-height: 12px;\n                    padding: 8px 15px;\n                    border-radius: 8px;\n                  }\n\n                  .career-wrapper .section-title {\n                    font-family: Bahnschrift;\n                    font-size: 14px;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: 17px;\n                    letter-spacing: 0em;\n                    text-align: left;\n                    width: 125px;\n\n                  }\n\n                  .career-wrapper {\n                    justify-content: flex-end !important;\n                  }\n                }\n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 619,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("style", {
      children: "\n            .container {\n              width: 100vw;\n              padding: 0;\n            }\n  \n            .container-inner {\n              max-width: 1120px;\n              margin: 0 auto;\n              height: 100%;\n            }\n  \n            .container.banner {\n              background-color: #F5FFEE;\n            }\n\n            .section-title {\n              font-family: Bahnschrift;\n              font-style: normal;\n              font-weight: 600;\n              font-size: 48px;\n              color: #000000;\n              margin: 0 0 24px 0;\n            }\n\n            .section-description {\n              font-family: Calibri;\n              font-style: italic;\n              font-weight: normal;\n              font-size: 20px;\n              line-height: 24px;\n              color: #666A66;\n              margin: 0;\n            }\n\n            \n            @media only screen and (max-width: 800px){\n              .section-title {\n                font-family: Bahnschrift;\n                font-style: normal;\n                font-weight: 600;\n                font-size: 18px;\n                line-height: 22px;\n                text-align: center;\n                margin-bottom: 10px;\n              }\n\n              .section-description {\n                font-family: Calibri;\n                font-style: italic;\n                font-weight: normal;\n                font-size: 12px;\n                line-height: 15px;\n                text-align: center;\n                color: #666A66;\n              }\n            }\n          "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDE2NDhhYjQxY2Y5ODQ2NTNkMjguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBRXZCLE1BQU1DLFFBQVEsR0FBRztBQUNoQkMsSUFBQUEsSUFBSSxFQUFFLElBRFU7QUFFaEJDLElBQUFBLE1BQU0sRUFBRSxJQUZRO0FBR2hCQyxJQUFBQSxRQUFRLEVBQUUsSUFITTtBQUloQkMsSUFBQUEsS0FBSyxFQUFFLEdBSlM7QUFLaEJDLElBQUFBLFlBQVksRUFBRSxDQUxFO0FBTWhCQyxJQUFBQSxjQUFjLEVBQUUsQ0FOQTtBQU9kQyxJQUFBQSxhQUFhLEVBQUU7QUFQRCxHQUFqQjtBQVdDLE1BQU1DLFNBQVMsR0FBRztBQUNsQlAsSUFBQUEsSUFBSSxFQUFFLElBRFk7QUFFbEJDLElBQUFBLE1BQU0sRUFBRSxJQUZVO0FBR2xCQyxJQUFBQSxRQUFRLEVBQUUsSUFIUTtBQUlsQkMsSUFBQUEsS0FBSyxFQUFFLEdBSlc7QUFLbEJDLElBQUFBLFlBQVksRUFBRSxDQUxJO0FBTWxCQyxJQUFBQSxjQUFjLEVBQUUsQ0FORTtBQU9oQkMsSUFBQUEsYUFBYSxFQUFFO0FBUEMsR0FBbEI7QUFVQSxNQUFNRSxTQUFTLEdBQUc7QUFDbEJSLElBQUFBLElBQUksRUFBRSxJQURZO0FBRWxCQyxJQUFBQSxNQUFNLEVBQUUsSUFGVTtBQUdsQkMsSUFBQUEsUUFBUSxFQUFFLElBSFE7QUFJbEJDLElBQUFBLEtBQUssRUFBRSxHQUpXO0FBS2xCQyxJQUFBQSxZQUFZLEVBQUUsQ0FMSTtBQU1sQkMsSUFBQUEsY0FBYyxFQUFFLENBTkU7QUFPaEJDLElBQUFBLGFBQWEsRUFBRTtBQVBDLEdBQWxCO0FBWUEsc0JBQ0ksOERBQUMsdURBQUQ7QUFDRSxT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QUFBQSxVQUFVLEVBQUU7QUFIZCxTQURJLEVBTUo7QUFDRUYsVUFBQUEsS0FBSyxFQUFFLGFBRFQ7QUFFRUMsVUFBQUEsUUFBUSxFQUFFLEtBRlo7QUFHRUMsVUFBQUEsVUFBVSxFQUFFO0FBSGQsU0FOSSxDQUpSO0FBQUEsZ0NBZ0JFO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxnQkFBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxvQkFBZjtBQUFBLHFDQUNFO0FBQUkseUJBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUtFO0FBQUssdUJBQVMsRUFBQyxhQUFmO0FBQUEscUNBQ0U7QUFBRyxvQkFBSSxZQUFLUyx1QkFBTCxZQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRixlQTZCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQTRvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1b0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMnNCRCxDQTl1QkQ7O0tBQU05Qjs7QUF3d0JOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbnRhaW5lcnMvbGF5b3V0XCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25cIjtcclxuaW1wb3J0IEFydGljbGVDYXJkIGZyb20gXCJDb21wb25lbnRzL2FydGljbGUvQXJ0aWNsZUNhcmRIb21lXCI7XHJcbmltcG9ydCB7IHV0Y190b19sb2NhbF9zaG9ydCwgdHJ1bmNhdGVfdGV4dCB9IGZyb20gXCJIZWxwZXJzL3V0aWxzXCJcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcclxuXHJcblx0Y29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0XHRkb3RzOiB0cnVlLFxyXG5cdFx0YXJyb3dzOiB0cnVlLFxyXG5cdFx0aW5maW5pdGU6IHRydWUsXHJcblx0XHRzcGVlZDogNTAwLFxyXG5cdFx0c2xpZGVzVG9TaG93OiA0LFxyXG5cdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgXHJcblx0fTtcclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MyID0ge1xyXG5cdFx0ZG90czogdHJ1ZSxcclxuXHRcdGFycm93czogdHJ1ZSxcclxuXHRcdGluZmluaXRlOiB0cnVlLFxyXG5cdFx0c3BlZWQ6IDUwMCxcclxuXHRcdHNsaWRlc1RvU2hvdzogMSxcclxuXHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuXHR9O1xyXG5cclxuICBjb25zdCBzZXR0aW5nczMgPSB7XHJcblx0XHRkb3RzOiB0cnVlLFxyXG5cdFx0YXJyb3dzOiB0cnVlLFxyXG5cdFx0aW5maW5pdGU6IHRydWUsXHJcblx0XHRzcGVlZDogNTAwLFxyXG5cdFx0c2xpZGVzVG9TaG93OiAzLFxyXG5cdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG5cdH07XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPExheW91dFxyXG4gICAgICAgIHRpdGxlPVwiUFQuIEVyYSBNaXRyYSBQZXJkYW5hXCJcclxuICAgICAgICBhcHBsaWNhdGlvbnM9e3Byb3BzLmFwcGxpY2F0aW9uc31cclxuICAgICAgICBicmFuZHM9e3Byb3BzLmJyYW5kc31cclxuICAgICAgICBpbmR1c3RyaWVzPXtwcm9wcy5pbmR1c3RyaWVzfSA+ICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPFNlY3Rpb24gXHJcbiAgICAgICAgICAgIGVsZW1lbnRfaWQ9XCJiYW5uZXJcIiBcclxuICAgICAgICAgICAgYmFja2dyb3VuZD1cIiNGRkZGRkZcIiAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1zbGlkZXJcIj5cclxuICAgICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nczJ9PlxyXG4gICAgICAgICAgICAgICAgeyBwcm9wcy5iYW5uZXIgJiYgcHJvcHMuYmFubmVyLm1hcCgoYmFubmVyLCBpZHggKSA9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BiYW5uZXItaXRlbWB9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1pdGVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAuYmFubmVyLWl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmJhbm5lci1pdGVtLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zdnIuZXJhbWl0cmEuY29tL2ltYWdlcy8ke2Jhbm5lci5pbWd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgLnNsaWNrLXByZXY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCYWhuc2NocmlmdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICc8JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1uZXh0OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFobnNjaHJpZnQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgLmJhbm5lci1zbGlkZXIgLnNsaWNrLW5leHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAuYmFubmVyLXNsaWRlciAuc2xpY2stcHJldiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXItaXRlbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXItaXRlbS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgIDxTZWN0aW9uIFxyXG4gICAgICAgICAgICBlbGVtZW50X2lkPVwiYWJvdXQtdXNcIiBcclxuICAgICAgICAgICAgYmFja2dyb3VuZD1cIiNGQkZCRkJcIiBcclxuICAgICAgICAgICAgaWNvbj17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltYWdlOiBcInNoYXBlLTEuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJib3R0b21cIixcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwic2hhcGUtNi5zdmdcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogXCJsZWZ0XCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF19IFxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI2MThweFwiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXVzLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL2Nkbi5lcmFtaXRyYS5jb20vaW1hZ2VzX2FydGljbGUvb3JpZ2luYWwvRFNDMDA3NDkuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdXMtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5BYm91dCBVczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlY3Rpb24tZGVzY3JpcHRpb25cIj5QVC5cdEVyYVx0TWl0cmFcdFBlcmRhbmFcdHByb3ZpZGVzXHRTY2llbnRpZmljLFx0TGFib3JhdG9yeVx0XHJcbiAgICAgICAgICAgICAgICAgIEVxdWlwbWVudCxcdGFuZFx0U2VydmljZXMuIFdlXHRhcmVcdGhpZ2hseVx0ZXhwZXJpZW5jZWRcdGFuZFx0YVx0dHJ1c3RlZFx0cGFydG5lclx0Zm9yXHRcclxuICAgICAgICAgICAgICAgICAgR292ZXJubWVudFx0SW5zdGl0dXRpb25zLFx0VW5pdmVyc2l0aWVzLFx0YW5kXHRJbmR1c3RyaWVzXHR0b1x0XHJcbiAgICAgICAgICAgICAgICAgIHN1cHBseSxcdGluc3RhbGwsXHRhbmRcdHByb3ZpZGVcdGFmdGVyXHRzYWxlc1x0c2VydmljZXNcdGluXHR0aGVcdGFyZWFcdFxyXG4gICAgICAgICAgICAgICAgICBvZlx0c2NpZW50aWZpY1x0YW5kXHRsYWJvcmF0b3J5XHRlcXVpcG1lbnRcdHNpbmNlXHQxOTk5LjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAuYWJvdXQtdXMtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hYm91dC11cy13cmFwcGVyIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFib3V0LXVzIC5pY29uLXNoYXBlLTEge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgLmFib3V0LXVzLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5hYm91dC11cy13cmFwcGVyIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTFweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuYWJvdXQtdXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzA4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmFib3V0LXVzIC5pY29uLXNoYXBlLTEge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuYWJvdXQtdXMgLmljb24tc2hhcGUtMCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8U2VjdGlvbiBcclxuICAgICAgICAgICAgZWxlbWVudF9pZD1cIndoYXQtd2UtZG8tYmVzdFwiIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kPVwiI0ZGRkZGRlwiIFxyXG4gICAgICAgICAgICBpY29uPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwic2hhcGUtMi5zdmdcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdfSBcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTAwMHB4XCIgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1pbm5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdC13ZS1kby1iZXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5XaGF0IFdlIERvIEJlc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWN0aW9uLWRlc2NyaXB0aW9uXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW50ZWdlciBhdWd1ZSByaXN1cywgdGVtcHVzIGFjIGxlbyB2ZWwsIGxhb3JlZXQgY29uZ3VlIHF1YW0uIFNlZCBjb252YWxsaXMgZ3JhdmlkYSBtYXhpbXVzLiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3d2RiLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy93d2RiLTEuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SGlnaCBRdWFsaXR5IHdpdGggPGJyPjwvYnI+IENvbXBldGl0aXZlIFByaWNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd3ZGItY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3d3ZGItMi5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JbnN0YWxsYXRpb24gJmFtcDsgPGJyPjwvYnI+VHJhaW5pbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3dkYi1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvd3dkYi0zLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFjY2Vzc29yaWVzICZhbXA7PGJyPjwvYnI+IFNwYXJlcGFydDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3d2RiLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy93d2RiLTQuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TWFpbnRlbmFuY2UgJmFtcDsgPGJyPjwvYnI+IENvbnRyYWN0IFNlcnZpY2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIndoYXQtd2UtZG8taW1nXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvd2hhdC13ZS1kby1iZXN0LnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAud2hhdC13ZS1kby1iZXN0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLndoYXQtd2UtZG8tYmVzdC13cmFwcGVyIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAud2hhdC13ZS1kby1iZXN0LXdyYXBwZXIgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzQxcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLndoYXQtd2UtZG8tYmVzdC13cmFwcGVyIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3NnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC53aGF0LXdlLWRvLWJlc3Qtd3JhcHBlciAuY2FyZC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAud3dkYi1jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTdweCAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQzOXB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC53d2RiLWNhcmQgcCB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcclxuICAgICAgICAgICAgICAgICAgLndoYXQtd2UtZG8taW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgIC53aGF0LXdlLWRvLWJlc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDUycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLndoYXQtd2UtZG8tYmVzdCAuaWNvbi1zaGFwZS0wLnJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLnd3ZGItY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y4RjhGODtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMTdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgIC53d2RiLWNhcmQgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC53d2RiLWNhcmQgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAud2hhdC13ZS1kby1pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC53aGF0LXdlLWRvLWJlc3Qtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjVweCAwO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAud2hhdC13ZS1kby1iZXN0LXdyYXBwZXIgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLndoYXQtd2UtZG8tYmVzdC13cmFwcGVyIC5jYXJkLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPC9TZWN0aW9uPlxyXG5cclxuICAgICAgICAgIDxTZWN0aW9uIFxyXG4gICAgICAgICAgICBlbGVtZW50X2lkPVwiYnJhbmRzXCIgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ9XCIjRkJGQkZCXCIgIFxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIyNjNweFwiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kcy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRzLXNsaWRlciBkZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmJyYW5kcyAmJiBwcm9wcy5icmFuZHMubWFwKChicmFuZCwgaWR4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRzLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3N2ci5lcmFtaXRyYS5jb20vaW1hZ2VzLyR7YnJhbmQuaW1nfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRzLXNsaWRlciBtb2JpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3MyfT5cclxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmJyYW5kcyAmJiBwcm9wcy5icmFuZHMubWFwKChicmFuZCwgaWR4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRzLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL3N2ci5lcmFtaXRyYS5jb20vaW1hZ2VzLyR7YnJhbmQuaW1nfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZHMtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5CcmFuZHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWN0aW9uLWRlc2NyaXB0aW9uXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAuYnJhbmRzLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnJhbmRzLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5icmFuZHMtd3JhcHBlciAuc2VjdGlvbi1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJyYW5kcy1zbGlkZXIuZGVza3RvcCB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnJhbmRzLXNsaWRlci5tb2JpbGUge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAuYnJhbmRzLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5icmFuZHMtaXRlbSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLmJyYW5kcy13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmJyYW5kcy1zbGlkZXIubW9iaWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5icmFuZHMtc2xpZGVyLmRlc2t0b3Age1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5icmFuZHMtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmJyYW5kcy1pdGVtIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnJhbmRzLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgIDxTZWN0aW9uIFxyXG4gICAgICAgICAgICBlbGVtZW50X2lkPVwiZGlzY292ZXJcIiBcclxuICAgICAgICAgICAgYmFja2dyb3VuZD1cIiNGRkZGRkZcIiAgXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjc2OHB4XCJcclxuICAgICAgICAgICAgaWNvbj17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltYWdlOiBcInNoYXBlLTQuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwibGVmdFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdfSAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1pbm5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY292ZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNjb3Zlci1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5EaXNjb3ZlcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlY3Rpb24tZGVzY3JpcHRpb25cIj5EaXNjb3ZlciBvdXIgbGF0ZXN0IG5ld3MgYW5kIGluZm8uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEludGVnZXIgYXVndWUgcmlzdXMsIHRlbXB1cyBhYyBsZW8gdmVsLCBsYW9yZWV0IGNvbmd1ZSBxdWFtLiBTZWQgY29udmFsbGlzIGdyYXZpZGEgbWF4aW11cy48L3A+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY292ZXItc2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nczJ9PlxyXG4gICAgICAgICAgICAgICAgeyAgcHJvcHMuYXJ0aWNsZXMgJiYgcHJvcHMuYXJ0aWNsZXMuZGF0YSAmJiBwcm9wcy5hcnRpY2xlcy5kYXRhLm1hcCgoYXJ0aWNsZSwgaWR4KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtY2FyZC13cmFwcGVyXCIga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEFydGljbGVDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmU9e2FydGljbGUuY292ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc9e2FydGljbGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e3V0Y190b19sb2NhbF9zaG9ydChhcnRpY2xlLmNyZWF0ZWRBdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fS8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgLmRpc2NvdmVyLXNsaWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgLmRpc2NvdmVyLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLnNsaWNrLXByZXY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCYWhuc2NocmlmdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICc8JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1uZXh0OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFobnNjaHJpZnQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgLmRpc2NvdmVyLXNsaWRlciAuc2xpY2stbmV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA2NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgLmRpc2NvdmVyLXNsaWRlciAuc2xpY2stcHJldiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC03NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpc2NvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kaXNjb3Zlci1zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpc2NvdmVyLXNsaWRlciAuc2xpY2stbmV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGlzY292ZXItc2xpZGVyIC5zbGljay1wcmV2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRpc2NvdmVyLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmRpc2NvdmVyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGlzY292ZXItd3JhcHBlciAuc2VjdGlvbi1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgIC5kaXNjb3ZlciAuaWNvbi1zaGFwZS0wLmxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5kaXNjb3Zlci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgPFNlY3Rpb24gXHJcbiAgICAgICAgICAgIGVsZW1lbnRfaWQ9XCJjYXJlZXJcIiBcclxuICAgICAgICAgICAgYmFja2dyb3VuZD1cIiMxQkE1OEFcIiAgXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjM1MXB4XCJcclxuICAgICAgICAgICAgaWNvbj17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltYWdlOiBcImNhcmVlci5zdmdcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBcImJvdHRvbVwiLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogXCJsZWZ0XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltYWdlOiBcInNoYXBlLTMuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXX0gID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVlci13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmVlci1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPlVwIGZvciBhIGNoYWxsZW5nZT8gXHJcbiAgICAgICAgICAgICAgICAgICAgTGV04oCZcyBqb2luIHVzITwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2NhcmVlcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgIE1vcmUgSW5mb1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmNhcmVlci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jYXJlZXItd3JhcHBlciAuY2FyZWVyLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2FyZWVyLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDk2cHg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2FyZWVyLXdyYXBwZXIgLmJ0bi13cmFwcGVyIGEge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMXB4IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzFCQTU4QTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmVlciAuaWNvbi1zaGFwZS0wIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAuY2FyZWVyIC5pY29uLXNoYXBlLTEge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJlZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTM3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmVlci13cmFwcGVyIC5idG4td3JhcHBlciBhIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZWVyLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJlZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAuY29udGFpbmVyLWlubmVyIHtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgLmNvbnRhaW5lci5iYW5uZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUZGRUU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI0cHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzY2NkE2NjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAgICAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NkE2NjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcblxyXG4gIGNvbnN0IGdldEJyYW5kcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0QnJhbmRzYClcclxuICBjb25zdCBicmFuZHMgPSBhd2FpdCBnZXRCcmFuZHMuanNvbigpXHJcblxyXG4gIFxyXG4gIGNvbnN0IGdldEJhbm5lciA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0QmFubmVyYClcclxuICBjb25zdCBiYW5uZXIgPSBhd2FpdCBnZXRCYW5uZXIuanNvbigpXHJcblxyXG5cclxuICBjb25zdCBnZXRJbmR1c3RyeSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0SW5kdXN0cnlgKVxyXG4gIGNvbnN0IGluZHVzdHJpZXMgPSBhd2FpdCBnZXRJbmR1c3RyeS5qc29uKClcclxuXHJcblxyXG4gIGNvbnN0IGdldEFwcGxpY2F0aW9uID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2FwaS9nZXRBcHBsaWNhdGlvbmApXHJcbiAgY29uc3QgYXBwbGljYXRpb25zID0gYXdhaXQgZ2V0QXBwbGljYXRpb24uanNvbigpXHJcblxyXG4gIGNvbnN0IGdldEFydGljbGVzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2FwaS9nZXRBcnRpY2xlYClcclxuICBjb25zdCBhcnRpY2xlcyA9IGF3YWl0IGdldEFydGljbGVzLmpzb24oKVxyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBhcnRpY2xlczogYXJ0aWNsZXMsIGJhbm5lcjogYmFubmVyLCBicmFuZHM6IGJyYW5kcywgaW5kdXN0cmllczogaW5kdXN0cmllcywgYXBwbGljYXRpb25zOiBhcHBsaWNhdGlvbnMgfX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiTGF5b3V0IiwiU2VjdGlvbiIsIkFydGljbGVDYXJkIiwidXRjX3RvX2xvY2FsX3Nob3J0IiwidHJ1bmNhdGVfdGV4dCIsIlNsaWRlciIsIkhvbWUiLCJwcm9wcyIsInNldHRpbmdzIiwiZG90cyIsImFycm93cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInZhcmlhYmxlV2lkdGgiLCJzZXR0aW5nczIiLCJzZXR0aW5nczMiLCJhcHBsaWNhdGlvbnMiLCJicmFuZHMiLCJpbmR1c3RyaWVzIiwiYmFubmVyIiwibWFwIiwiaWR4IiwiaW1nIiwiaW1hZ2UiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJicmFuZCIsImFydGljbGVzIiwiZGF0YSIsImFydGljbGUiLCJjb3ZlciIsInRpdGxlIiwiaWQiLCJjcmVhdGVkQXQiLCJwcm9jZXNzIiwiZW52IiwiUk9PVF9ET01BSU4iXSwic291cmNlUm9vdCI6IiJ9
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
                      children: "\n\n                      .discover-slider {\n                        width: calc(100% - 500px);\n                      }\n\n                      .discover-description {\n                        margin-right: 30px;\n                      }\n                      .slick-prev:before {\n                        font-family: 'Bahnschrift';\n                        content: '<';\n                        color: black;\n                        font-size: 20px;\n                      }\n                      \n                      .slick-next:before {\n                        font-family: 'Bahnschrift';\n                        content: \">\";\n                        color: black;\n                        font-size: 20px;\n                      }\n\n                      .discover-slider .slick-next {\n                        right: 650px;\n                      }\n\n                      .discover-slider .slick-prev {\n                        left: -100px;\n                        z-index: 5;\n                      }\n\n                      @media only screen and (max-width: 800px){\n     \n  \n                      }\n                      "
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
          children: "\n                .discover-wrapper {\n                  height: 100%;\n                  display: flex;\n                  align-items: center;\n                  justify-content: space-between;\n                }\n\n                .discover-wrapper .section-description {\n                  max-width: 350px;\n                }\n\n                @media only screen and (max-width: 800px){\n                  .discover .icon-shape-0.left {\n                    width: 30%;\n                  }\n                }\n                \n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 536,
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
                lineNumber: 577,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 576,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "btn-wrapper",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
                href: "".concat("http://localhost:3001", "/career"),
                children: "More Info"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 581,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 580,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 575,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 574,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("style", {
          children: "\n                .career-wrapper {\n                  height: 100%;\n                  display: flex;\n                  align-items: center;\n                  justify-content: center;\n                }\n\n                \n                .career-wrapper .career-description {\n                  display: flex;\n                  align-items: center;\n                }\n\n                .career-wrapper .section-title {\n                  margin: 0;\n                  max-width: 496px;\n                  color: #FFFFFF !important;\n                  font-weight: normal !important;\n                }\n\n                .career-wrapper .btn-wrapper a {\n                  padding: 21px 50px;\n                  background: #FFFFFF;\n                  font-family: Bahnschrift;\n                  font-style: normal;\n                  font-weight: normal;\n                  font-size: 24px;\n                  line-height: 29px;\n                  color: #1BA58A;\n                  border-radius: 20px;\n                }\n                \n\n                @media only screen and (max-width: 800px){\n\n                  .career .icon-shape-0 {\n                    height: 124px;\n                  }\n                  \n                  .career .icon-shape-1 {\n                    display: none;\n                  }\n\n                  .career {\n                    height: 137px !important;\n                  }\n\n                  .career-wrapper .btn-wrapper a {\n                    font-size: 12px;\n                    line-height: 12px;\n                    padding: 8px 15px;\n                    border-radius: 8px;\n                  }\n\n                  .career-wrapper .section-title {\n                    font-family: Bahnschrift;\n                    font-size: 14px;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: 17px;\n                    letter-spacing: 0em;\n                    text-align: left;\n                    width: 125px;\n\n                  }\n\n                  .career-wrapper {\n                    justify-content: flex-end !important;\n                  }\n                }\n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 587,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 558,
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
      lineNumber: 663,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODIxODA4YTVhNzIwNmM3NzkwN2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBRXZCLE1BQU1DLFFBQVEsR0FBRztBQUNoQkMsSUFBQUEsSUFBSSxFQUFFLElBRFU7QUFFaEJDLElBQUFBLE1BQU0sRUFBRSxJQUZRO0FBR2hCQyxJQUFBQSxRQUFRLEVBQUUsSUFITTtBQUloQkMsSUFBQUEsS0FBSyxFQUFFLEdBSlM7QUFLaEJDLElBQUFBLFlBQVksRUFBRSxDQUxFO0FBTWhCQyxJQUFBQSxjQUFjLEVBQUUsQ0FOQTtBQU9kQyxJQUFBQSxhQUFhLEVBQUU7QUFQRCxHQUFqQjtBQVdDLE1BQU1DLFNBQVMsR0FBRztBQUNsQlAsSUFBQUEsSUFBSSxFQUFFLElBRFk7QUFFbEJDLElBQUFBLE1BQU0sRUFBRSxJQUZVO0FBR2xCQyxJQUFBQSxRQUFRLEVBQUUsSUFIUTtBQUlsQkMsSUFBQUEsS0FBSyxFQUFFLEdBSlc7QUFLbEJDLElBQUFBLFlBQVksRUFBRSxDQUxJO0FBTWxCQyxJQUFBQSxjQUFjLEVBQUUsQ0FORTtBQU9oQkMsSUFBQUEsYUFBYSxFQUFFO0FBUEMsR0FBbEI7QUFVQSxNQUFNRSxTQUFTLEdBQUc7QUFDbEJSLElBQUFBLElBQUksRUFBRSxJQURZO0FBRWxCQyxJQUFBQSxNQUFNLEVBQUUsSUFGVTtBQUdsQkMsSUFBQUEsUUFBUSxFQUFFLElBSFE7QUFJbEJDLElBQUFBLEtBQUssRUFBRSxHQUpXO0FBS2xCQyxJQUFBQSxZQUFZLEVBQUUsQ0FMSTtBQU1sQkMsSUFBQUEsY0FBYyxFQUFFLENBTkU7QUFPaEJDLElBQUFBLGFBQWEsRUFBRTtBQVBDLEdBQWxCO0FBWUEsc0JBQ0ksOERBQUMsdURBQUQ7QUFDRSxT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QUFBLFVBQVUsRUFBRTtBQUhkLFNBREksRUFNSjtBQUNFRixVQUFBQSxLQUFLLEVBQUUsYUFEVDtBQUVFQyxVQUFBQSxRQUFRLEVBQUUsS0FGWjtBQUdFQyxVQUFBQSxVQUFVLEVBQUU7QUFIZCxTQU5JLENBSlI7QUFBQSxnQ0FnQkU7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLGdCQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLG9CQUFmO0FBQUEscUNBQ0U7QUFBSSx5QkFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBS0U7QUFBSyx1QkFBUyxFQUFDLGFBQWY7QUFBQSxxQ0FDRTtBQUFHLG9CQUFJLFlBQUtTLHVCQUFMLFlBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGLGVBNkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5ZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUE0bUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNW1CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTJxQkQsQ0E5c0JEOztLQUFNOUI7O0FBd3VCTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb250YWluZXJzL2xheW91dFwiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9uXCI7XHJcbmltcG9ydCBBcnRpY2xlQ2FyZCBmcm9tIFwiQ29tcG9uZW50cy9hcnRpY2xlL0FydGljbGVDYXJkSG9tZVwiO1xyXG5pbXBvcnQgeyB1dGNfdG9fbG9jYWxfc2hvcnQsIHRydW5jYXRlX3RleHQgfSBmcm9tIFwiSGVscGVycy91dGlsc1wiXHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcblxyXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XHJcblxyXG5cdGNvbnN0IHNldHRpbmdzID0ge1xyXG5cdFx0ZG90czogdHJ1ZSxcclxuXHRcdGFycm93czogdHJ1ZSxcclxuXHRcdGluZmluaXRlOiB0cnVlLFxyXG5cdFx0c3BlZWQ6IDUwMCxcclxuXHRcdHNsaWRlc1RvU2hvdzogNCxcclxuXHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgIFxyXG5cdH07XHJcblxyXG4gIGNvbnN0IHNldHRpbmdzMiA9IHtcclxuXHRcdGRvdHM6IHRydWUsXHJcblx0XHRhcnJvd3M6IHRydWUsXHJcblx0XHRpbmZpbml0ZTogdHJ1ZSxcclxuXHRcdHNwZWVkOiA1MDAsXHJcblx0XHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcblx0fTtcclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MzID0ge1xyXG5cdFx0ZG90czogdHJ1ZSxcclxuXHRcdGFycm93czogdHJ1ZSxcclxuXHRcdGluZmluaXRlOiB0cnVlLFxyXG5cdFx0c3BlZWQ6IDUwMCxcclxuXHRcdHNsaWRlc1RvU2hvdzogMyxcclxuXHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuXHR9O1xyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXRcclxuICAgICAgICB0aXRsZT1cIlBULiBFcmEgTWl0cmEgUGVyZGFuYVwiXHJcbiAgICAgICAgYXBwbGljYXRpb25zPXtwcm9wcy5hcHBsaWNhdGlvbnN9XHJcbiAgICAgICAgYnJhbmRzPXtwcm9wcy5icmFuZHN9XHJcbiAgICAgICAgaW5kdXN0cmllcz17cHJvcHMuaW5kdXN0cmllc30gPiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxTZWN0aW9uIFxyXG4gICAgICAgICAgICBlbGVtZW50X2lkPVwiYmFubmVyXCIgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ9XCIjRkZGRkZGXCIgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItc2xpZGVyXCI+XHJcbiAgICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3MyfT5cclxuICAgICAgICAgICAgICAgIHsgcHJvcHMuYmFubmVyICYmIHByb3BzLmJhbm5lci5tYXAoKGJhbm5lciwgaWR4ICkgPT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmFubmVyLWl0ZW1gfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXItaXRlbS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgLmJhbm5lci1pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXItaXRlbS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vc3ZyLmVyYW1pdHJhLmNvbS9pbWFnZXMvJHtiYW5uZXIuaW1nfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1wcmV2OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFobnNjaHJpZnQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnPCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAuc2xpY2stbmV4dDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JhaG5zY2hyaWZ0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIC5iYW5uZXItc2xpZGVyIC5zbGljay1uZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgLmJhbm5lci1zbGlkZXIgLnNsaWNrLXByZXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVyLWl0ZW17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYmFubmVyLWl0ZW0tY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICA8U2VjdGlvbiBcclxuICAgICAgICAgICAgZWxlbWVudF9pZD1cImFib3V0LXVzXCIgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ9XCIjRkJGQkZCXCIgXHJcbiAgICAgICAgICAgIGljb249e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJzaGFwZS0xLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IFwiYm90dG9tXCIsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcInJpZ2h0XCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltYWdlOiBcInNoYXBlLTYuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwibGVmdFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdfSBcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNjE4cHhcIiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC11cy13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9jZG4uZXJhbWl0cmEuY29tL2ltYWdlc19hcnRpY2xlL29yaWdpbmFsL0RTQzAwNzQ5LmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXVzLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+QWJvdXQgVXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWN0aW9uLWRlc2NyaXB0aW9uXCI+UFQuXHRFcmFcdE1pdHJhXHRQZXJkYW5hXHRwcm92aWRlc1x0U2NpZW50aWZpYyxcdExhYm9yYXRvcnlcdFxyXG4gICAgICAgICAgICAgICAgICBFcXVpcG1lbnQsXHRhbmRcdFNlcnZpY2VzLiBXZVx0YXJlXHRoaWdobHlcdGV4cGVyaWVuY2VkXHRhbmRcdGFcdHRydXN0ZWRcdHBhcnRuZXJcdGZvclx0XHJcbiAgICAgICAgICAgICAgICAgIEdvdmVybm1lbnRcdEluc3RpdHV0aW9ucyxcdFVuaXZlcnNpdGllcyxcdGFuZFx0SW5kdXN0cmllc1x0dG9cdFxyXG4gICAgICAgICAgICAgICAgICBzdXBwbHksXHRpbnN0YWxsLFx0YW5kXHRwcm92aWRlXHRhZnRlclx0c2FsZXNcdHNlcnZpY2VzXHRpblx0dGhlXHRhcmVhXHRcclxuICAgICAgICAgICAgICAgICAgb2ZcdHNjaWVudGlmaWNcdGFuZFx0bGFib3JhdG9yeVx0ZXF1aXBtZW50XHRzaW5jZVx0MTk5OS48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmFib3V0LXVzLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYWJvdXQtdXMtd3JhcHBlciBpbWcge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0NXB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hYm91dC11cyAuaWNvbi1zaGFwZS0xIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC5hYm91dC11cy13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuYWJvdXQtdXMtd3JhcHBlciBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmFib3V0LXVzIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5hYm91dC11cyAuaWNvbi1zaGFwZS0xIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmFib3V0LXVzIC5pY29uLXNoYXBlLTAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPC9TZWN0aW9uPlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPFNlY3Rpb24gXHJcbiAgICAgICAgICAgIGVsZW1lbnRfaWQ9XCJ3aGF0LXdlLWRvLWJlc3RcIiBcclxuICAgICAgICAgICAgYmFja2dyb3VuZD1cIiNGRkZGRkZcIiBcclxuICAgICAgICAgICAgaWNvbj17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltYWdlOiBcInNoYXBlLTIuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJ0b3BcIixcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXX0gXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMDBweFwiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtd2UtZG8tYmVzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+V2hhdCBXZSBEbyBCZXN0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VjdGlvbi1kZXNjcmlwdGlvblwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEludGVnZXIgYXVndWUgcmlzdXMsIHRlbXB1cyBhYyBsZW8gdmVsLCBsYW9yZWV0IGNvbmd1ZSBxdWFtLiBTZWQgY29udmFsbGlzIGdyYXZpZGEgbWF4aW11cy4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3dkYi1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvd3dkYi0xLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhpZ2ggUXVhbGl0eSB3aXRoIDxicj48L2JyPiBDb21wZXRpdGl2ZSBQcmljZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3d2RiLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ltYWdlcy93d2RiLTIuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW5zdGFsbGF0aW9uICZhbXA7IDxicj48L2JyPlRyYWluaW5nPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInd3ZGItY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3d3ZGItMy5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5BY2Nlc3NvcmllcyAmYW1wOzxicj48L2JyPiBTcGFyZXBhcnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3dkYi1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvd3dkYi00LnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1haW50ZW5hbmNlICZhbXA7IDxicj48L2JyPiBDb250cmFjdCBTZXJ2aWNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3aGF0LXdlLWRvLWltZ1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3doYXQtd2UtZG8tYmVzdC5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLndoYXQtd2UtZG8tYmVzdC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC53aGF0LXdlLWRvLWJlc3Qtd3JhcHBlciAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLndoYXQtd2UtZG8tYmVzdC13cmFwcGVyIC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDc0MXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC53aGF0LXdlLWRvLWJlc3Qtd3JhcHBlciAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNzZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAud2hhdC13ZS1kby1iZXN0LXdyYXBwZXIgLmNhcmQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnd3ZGItY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE3cHggMTlweDtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MzlweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAud3dkYi1jYXJkIHAge1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjlweDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMjVweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbiAgICAgICAgICAgICAgICAgIC53aGF0LXdlLWRvLWltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAud2hhdC13ZS1kby1iZXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC53aGF0LXdlLWRvLWJlc3QgLmljb24tc2hhcGUtMC5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC53d2RiLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjE3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAud3dkYi1jYXJkIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAud3dkYi1jYXJkIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLndoYXQtd2UtZG8taW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAud2hhdC13ZS1kby1iZXN0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLndoYXQtd2UtZG8tYmVzdC13cmFwcGVyIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC53aGF0LXdlLWRvLWJlc3Qtd3JhcHBlciAuY2FyZC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuXHJcbiAgICAgICAgICA8U2VjdGlvbiBcclxuICAgICAgICAgICAgZWxlbWVudF9pZD1cImJyYW5kc1wiIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kPVwiI0ZCRkJGQlwiICBcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMjYzcHhcIiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZHMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kcy1zbGlkZXIgZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5icmFuZHMgJiYgcHJvcHMuYnJhbmRzLm1hcCgoYnJhbmQsIGlkeCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kcy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9zdnIuZXJhbWl0cmEuY29tL2ltYWdlcy8ke2JyYW5kLmltZ31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kcy1zbGlkZXIgbW9iaWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5icmFuZHMgJiYgcHJvcHMuYnJhbmRzLm1hcCgoYnJhbmQsIGlkeCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kcy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9zdnIuZXJhbWl0cmEuY29tL2ltYWdlcy8ke2JyYW5kLmltZ31gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRzLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+QnJhbmRzPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VjdGlvbi1kZXNjcmlwdGlvblwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmJyYW5kcy13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJyYW5kcy13cmFwcGVyIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuYnJhbmRzLXdyYXBwZXIgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5icmFuZHMtc2xpZGVyLmRlc2t0b3Age1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDU0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJyYW5kcy1zbGlkZXIubW9iaWxlIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLmJyYW5kcy1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnJhbmRzLWl0ZW0gaW1ne1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5icmFuZHMtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5icmFuZHMtc2xpZGVyLm1vYmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnJhbmRzLXNsaWRlci5kZXNrdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnJhbmRzLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5icmFuZHMtaXRlbSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmJyYW5kcy1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICA8U2VjdGlvbiBcclxuICAgICAgICAgICAgZWxlbWVudF9pZD1cImRpc2NvdmVyXCIgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ9XCIjRkZGRkZGXCIgIFxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI3NjhweFwiXHJcbiAgICAgICAgICAgIGljb249e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJzaGFwZS00LnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcImxlZnRcIlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXX0gID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NvdmVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY292ZXItZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+RGlzY292ZXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWN0aW9uLWRlc2NyaXB0aW9uXCI+RGlzY292ZXIgb3VyIGxhdGVzdCBuZXdzIGFuZCBpbmZvLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbnRlZ2VyIGF1Z3VlIHJpc3VzLCB0ZW1wdXMgYWMgbGVvIHZlbCwgbGFvcmVldCBjb25ndWUgcXVhbS4gU2VkIGNvbnZhbGxpcyBncmF2aWRhIG1heGltdXMuPC9wPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NvdmVyLXNsaWRlclwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3MyfT5cclxuICAgICAgICAgICAgICAgIHsgIHByb3BzLmFydGljbGVzICYmIHByb3BzLmFydGljbGVzLmRhdGEgJiYgcHJvcHMuYXJ0aWNsZXMuZGF0YS5tYXAoKGFydGljbGUsIGlkeCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWNhcmQtd3JhcHBlclwiIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWN0dXJlPXthcnRpY2xlLmNvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnPXthcnRpY2xlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXt1dGNfdG9fbG9jYWxfc2hvcnQoYXJ0aWNsZS5jcmVhdGVkQXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH0vPlxyXG4gICAgICAgICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIC5kaXNjb3Zlci1zbGlkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTAwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIC5kaXNjb3Zlci1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1wcmV2OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFobnNjaHJpZnQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnPCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAuc2xpY2stbmV4dDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JhaG5zY2hyaWZ0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCI+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIC5kaXNjb3Zlci1zbGlkZXIgLnNsaWNrLW5leHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgLmRpc2NvdmVyLXNsaWRlciAuc2xpY2stcHJldiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0xMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICBcclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAuZGlzY292ZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kaXNjb3Zlci13cmFwcGVyIC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgLmRpc2NvdmVyIC5pY29uLXNoYXBlLTAubGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgIDxTZWN0aW9uIFxyXG4gICAgICAgICAgICBlbGVtZW50X2lkPVwiY2FyZWVyXCIgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ9XCIjMUJBNThBXCIgIFxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIzNTFweFwiXHJcbiAgICAgICAgICAgIGljb249e1tcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJjYXJlZXIuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJib3R0b21cIixcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwibGVmdFwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZTogXCJzaGFwZS0zLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcInJpZ2h0XCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF19ICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJlZXItZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5VcCBmb3IgYSBjaGFsbGVuZ2U/IFxyXG4gICAgICAgICAgICAgICAgICAgIExldOKAmXMgam9pbiB1cyE8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9jYXJlZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICBNb3JlIEluZm9cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIC5jYXJlZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY2FyZWVyLXdyYXBwZXIgLmNhcmVlci1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhcmVlci13cmFwcGVyIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ5NnB4O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhcmVlci13cmFwcGVyIC5idG4td3JhcHBlciBhIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjFweCA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjlweDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMxQkE1OEE7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJlZXIgLmljb24tc2hhcGUtMCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjRweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmVlciAuaWNvbi1zaGFwZS0xIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZWVyIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJlZXItd3JhcHBlciAuYnRuLXdyYXBwZXIgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmVlci13cmFwcGVyIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTI1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZWVyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgLmNvbnRhaW5lci1pbm5lciB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIC5jb250YWluZXIuYmFubmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGRkVFO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAyNHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2FsaWJyaTtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjZBNjY7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAgICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NjZBNjY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG5cclxuICBjb25zdCBnZXRCcmFuZHMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vYXBpL2dldEJyYW5kc2ApXHJcbiAgY29uc3QgYnJhbmRzID0gYXdhaXQgZ2V0QnJhbmRzLmpzb24oKVxyXG5cclxuICBcclxuICBjb25zdCBnZXRCYW5uZXIgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vYXBpL2dldEJhbm5lcmApXHJcbiAgY29uc3QgYmFubmVyID0gYXdhaXQgZ2V0QmFubmVyLmpzb24oKVxyXG5cclxuXHJcbiAgY29uc3QgZ2V0SW5kdXN0cnkgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vYXBpL2dldEluZHVzdHJ5YClcclxuICBjb25zdCBpbmR1c3RyaWVzID0gYXdhaXQgZ2V0SW5kdXN0cnkuanNvbigpXHJcblxyXG5cclxuICBjb25zdCBnZXRBcHBsaWNhdGlvbiA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0QXBwbGljYXRpb25gKVxyXG4gIGNvbnN0IGFwcGxpY2F0aW9ucyA9IGF3YWl0IGdldEFwcGxpY2F0aW9uLmpzb24oKVxyXG5cclxuICBjb25zdCBnZXRBcnRpY2xlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0QXJ0aWNsZWApXHJcbiAgY29uc3QgYXJ0aWNsZXMgPSBhd2FpdCBnZXRBcnRpY2xlcy5qc29uKClcclxuXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgYXJ0aWNsZXM6IGFydGljbGVzLCBiYW5uZXI6IGJhbm5lciwgYnJhbmRzOiBicmFuZHMsIGluZHVzdHJpZXM6IGluZHVzdHJpZXMsIGFwcGxpY2F0aW9uczogYXBwbGljYXRpb25zIH19XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIkxheW91dCIsIlNlY3Rpb24iLCJBcnRpY2xlQ2FyZCIsInV0Y190b19sb2NhbF9zaG9ydCIsInRydW5jYXRlX3RleHQiLCJTbGlkZXIiLCJIb21lIiwicHJvcHMiLCJzZXR0aW5ncyIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJ2YXJpYWJsZVdpZHRoIiwic2V0dGluZ3MyIiwic2V0dGluZ3MzIiwiYXBwbGljYXRpb25zIiwiYnJhbmRzIiwiaW5kdXN0cmllcyIsImJhbm5lciIsIm1hcCIsImlkeCIsImltZyIsImltYWdlIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiYnJhbmQiLCJhcnRpY2xlcyIsImRhdGEiLCJhcnRpY2xlIiwiY292ZXIiLCJ0aXRsZSIsImlkIiwiY3JlYXRlZEF0IiwicHJvY2VzcyIsImVudiIsIlJPT1RfRE9NQUlOIl0sInNvdXJjZVJvb3QiOiIifQ==
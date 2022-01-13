"use strict";
self["webpackHotUpdate_N_E"]("pages/news-info/[slug]",{

/***/ "./containers/header.js":
/*!******************************!*\
  !*** ./containers/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var Components_category_CategoryMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Components/category/CategoryMenu */ "./components/category/CategoryMenu.js");
/* harmony import */ var Components_cart_Cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Components/cart/Cart */ "./components/cart/Cart.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\silvi\\Documents\\eramitra-dev\\containers\\header.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








var Header = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Header);

    _this = _super.call(this, props);
    _this.state = {
      isToggleOn: false,
      isProduct: false,
      isSearch: false,
      isCart: false,
      search: ''
    };
    _this.handleClick = _this.handleClick.bind((0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this.handleClickProduct = _this.handleClickProduct.bind((0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this.handleClickSearch = _this.handleClickSearch.bind((0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this.handleClickCart = _this.handleClickCart.bind((0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this.handleSearch = _this.handleSearch.bind((0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this.submitSearch = _this.submitSearch.bind((0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    return _this;
  }

  (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Header, [{
    key: "handleClick",
    value: function handleClick() {
      if (this.state.isToggleOn) {
        this.setState(function (state) {
          return {
            isProduct: false
          };
        });
      }

      this.setState(function (state) {
        return {
          isToggleOn: !state.isToggleOn
        };
      });
    }
  }, {
    key: "handleClickProduct",
    value: function handleClickProduct() {
      this.setState(function (state) {
        return {
          isProduct: !state.isProduct
        };
      });
    }
  }, {
    key: "handleClickSearch",
    value: function handleClickSearch() {
      if (this.state.search !== "") {
        this.submitSearch();
      } else {
        this.setState(function (state) {
          return {
            isSearch: !state.isSearch
          };
        });
      }
    }
  }, {
    key: "handleClickCart",
    value: function handleClickCart() {
      this.setState(function (state) {
        return {
          isCart: !state.isCart
        };
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      this.setState(function (state) {
        return {
          search: e.target.value
        };
      });

      if (e.target.value == "") {
        this.setState(function (state) {
          return {
            isSearch: !state.isSearch
          };
        });
      }
    }
  }, {
    key: "submitSearch",
    value: function submitSearch() {
      alert("submit");
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "navbar-header",
        children: [this.state.isToggleOn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "sidebar mobile-only",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "logo-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
              href: "".concat("http://localhost:3001"),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
                className: "logo",
                src: "/static/images/logo.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
              className: "material-icons",
              onClick: this.handleClick,
              children: "close"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "navbar-link",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
              href: "".concat("http://localhost:3001", "/about-us"),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                children: "About Us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 16
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
              onClick: this.handleClickProduct,
              children: "Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
              href: "".concat("http://localhost:3001", "/news-info"),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                children: "News & Info"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
              href: "".concat("http://localhost:3001", "/career"),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                children: "Career"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
              href: "".concat("http://localhost:3001", "/contact-us"),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                children: "Contact Us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), this.state.isToggleOn && this.state.isProduct && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "sidebar product mobile-only",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "logo-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
              className: "material-icons",
              onClick: this.handleClickProduct,
              children: "chevron_left"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
              href: "".concat("http://localhost:3001"),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
                className: "logo",
                src: "/static/images/logo.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Components_category_CategoryMenu__WEBPACK_IMPORTED_MODULE_8__.default, {
            brands: props.brands,
            applications: props.applications,
            industries: props.industries
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 11
        }, this), this.state.isToggleOn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "sidebar-background mobile-only",
          onClick: this.handleClick
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "navbar-content-wrapper",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "navbar-inner-content-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "logo-wrapper mobile-only",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                className: "material-icons",
                onClick: this.handleClick,
                children: "menu"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 15
              }, this), !this.state.isSearch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                href: "".concat("http://localhost:3001"),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
                  className: "logo",
                  src: "/static/images/logo.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "logo-wrapper desktop-only",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                href: "".concat("http://localhost:3001"),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
                  className: "logo",
                  src: "/static/images/logo.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "navbar-link desktop-only",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "navbar-link-wrapper",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                  href: "".concat("http://localhost:3001", "/about-us"),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    children: "About Us"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                  onClick: this.handleClickProduct,
                  children: "Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                  href: "".concat("http://localhost:3001", "/news-info"),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    children: "News & Info"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                  href: "".concat("http://localhost:3001", "/career"),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    children: "Career"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                  href: "".concat("http://localhost:3001", "/contact-us"),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    children: "Contact Us"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "separator"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 17
                }, this), this.state.isSearch ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "input-search",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                    type: "text",
                    placeholder: "",
                    onChange: this.handleSearch
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 194,
                    columnNumber: 49
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    className: "search-box",
                    onClick: this.handleClickSearch,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "material-icons",
                      children: "search"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 19
                }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                  className: "search-header",
                  onClick: this.handleClickSearch,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                    className: "material-icons",
                    children: "search"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                  className: "cart-header",
                  onClick: this.handleClickCart,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                    className: "material-icons",
                    children: "shopping_cart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
              className: "navbar-link mobile-only",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "navbar-link-wrapper",
                children: [this.state.isSearch ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "input-search",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                    type: "text",
                    placeholder: "",
                    onChange: this.handleSearch
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 49
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    className: "search-box",
                    onClick: this.handleClickSearch,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "material-icons",
                      children: "search"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 19
                }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                  className: "search-header",
                  onClick: this.handleClickSearch,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                    className: "material-icons",
                    children: "search"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 229,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                  className: "cart-header",
                  onClick: this.handleClickCart,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                    className: "material-icons",
                    children: "shopping_cart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 9
        }, this), this.state.isCart && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Components_cart_Cart__WEBPACK_IMPORTED_MODULE_9__.default, {
            cart: props.cart
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "backdrop",
            onClick: this.handleClickCart
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 11
          }, this)]
        }, void 0, true), !this.state.isToggleOn && this.state.isProduct && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Components_category_CategoryMenu__WEBPACK_IMPORTED_MODULE_8__.default, {
          brands: props.brands,
          applications: props.applications,
          industries: props.industries
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("style", {
          children: "\n                .desktop-only {\n                    display: block;\n                }\n\n                .mobile-only {\n                    display: none !important;\n                }\n                \n                .navbar-header {\n                    position: fixed;\n                    top: 0;\n                    left: 0;\n                    z-index: 200;\n                    width: 100vw;\n                    padding: 0;\n                }\n\n                .navbar-content-wrapper {\n                    width: 100%;\n                    position: relative;\n                    box-shadow: 0px 4px 10px rgba(145, 158, 171, 0.1);\n                    background-color: #FFF;\n                }\n\n                .navbar-inner-content-wrapper {\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-between;\n                    flex-wrap: wrap;\n                    max-width: 1120px;\n                    height: 76px;\n                    margin: 0 auto;\n                }\n\n                .navbar-inner-content-wrapper .logo-wrapper {\n                    display: flex;\n                    align-items: center;\n                }\n\n                .navbar-inner-content-wrapper .logo {\n                  height: 30px;\n                  width: auto;\n                }\n\n                .navbar-link-wrapper {\n                  display: flex;\n                  align-items: center;\n                }\n\n                .navbar-link-wrapper a {\n                  cursor: pointer;\n                }\n\n                .navbar-link a {\n                    font-family: 'Bahnschrift';\n                    font-weight: 400;\n                    font-size: 14px;\n                    margin-left: 55px;\n                }\n\n                .navbar-link a.active {\n                    font-family: 'Bahnschrift';\n                    font-weight: 500;\n                    margin-left: 55px;\n                    text-decoration: none;\n                    color: #4B8343;\n                }\n\n                .cart-header, .search-header {\n                  margin-left: 25px !important;\n                }\n\n                .input-search input {\n                  padding: 8px 30px 8px 8px;\n                }\n\n                .search-box {\n                  margin-left: -30px !important;\n                }\n\n                .input-search {\n                  display: flex;\n                  align-items: center;\n                  margin-left: 25px;\n                }\n\n                .separator {\n                  width: 2px;\n                  height: 30px;\n                  background: #000000;\n                  margin-left: 25px;\n                }\n \n                .backdrop {\n                  background: #000000;\n                  opacity: 0.5;\n                  width: 100vw;\n                  height: 100vh;\n                  position: fixed;\n                  top: 0;\n                } \n\n                @media only screen and (max-width: 800px){\n                    .mobile-only {\n                        display: block !important;\n                    }\n\n                    .desktop-only {\n                      display: none !important;\n                  }\n                    \n                    .desktop-only, .logo-wrapper.desktop-only{\n                        display: none;\n                    }\n\n                    .navbar-link .cart-header {\n                      margin-left: 15px !important;\n                    }\n\n                    .search-box {\n                      margin-left: -30px !important;\n                    }\n\n                    .navbar-inner-content-wrapper {\n                        height: 56px;\n                        padding: 0 10px;\n                    }\n                    \n                    .navbar-inner-content-wrapper .logo, .sidebar .logo {\n                        height: 20px;\n                        width: auto;\n                        margin: 0 16px;\n                    }\n\n                    .navbar-header {\n                        position: absolute;\n                    }\n\n                    .sidebar {\n                        width: 90%;\n                        height: 100vh;\n                        background-color: white;\n                        position: fixed;\n                        z-index: 100;\n                        top: 0;\n                        left: 0;\n                    }\n\n                    .sidebar-background {\n                        width: 100%;\n                        height: 100%;\n                        z-index: 99;\n                        background-color: rgba(0, 0, 0, 0.1);\n                        position: fixed;\n                        top: 0;\n                        left: 0;\n                    }\n\n                    .sidebar .logo-wrapper {\n                        display: flex;\n                        align-items: center;\n                        height: 56px;\n                        justify-content: space-between;\n                        padding: 16px 32px 16px 14px;\n                        border-bottom: 1px solid rgb(235,235,235,1);\n                    }\n\n                    .sidebar.product .logo-wrapper {\n                      display: flex;\n                      align-items: center;\n                      height: 56px;\n                      justify-content: flex-start;\n                      padding: 16px 32px 16px 14px;\n                      border-bottom: 1px solid rgb(235,235,235,1);\n                    }\n\n                    .sidebar .navbar-link {\n                        display: flex;\n                        flex-direction: column;\n                    }\n\n                    .sidebar .navbar-link a {\n                        font-family: 'Bahnschrift';\n                        font-size: 16px;\n                        font-style: normal;\n                        font-weight: 600;\n                        line-height: 22px;\n                        letter-spacing: 0em;\n                        text-align: left;\n                        margin: 32px 0 0 32px;\n                    }\n\n                }\n                "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }, this);
    }
  }]);

  return Header;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (Header);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3cy1pbmZvL1tzbHVnXS44MGQzM2ZmYzIyNzIxMWFjZWQ0Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztJQUVNSTs7Ozs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxVQUFVLEVBQUUsS0FERDtBQUVYQyxNQUFBQSxTQUFTLEVBQUUsS0FGQTtBQUdYQyxNQUFBQSxRQUFRLEVBQUUsS0FIQztBQUlYQyxNQUFBQSxNQUFNLEVBQUUsS0FKRztBQUtYQyxNQUFBQSxNQUFNLEVBQUU7QUFMRyxLQUFiO0FBT0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixtSkFBbkI7QUFDQSxVQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIsbUpBQTFCO0FBQ0EsVUFBS0UsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJGLElBQXZCLG1KQUF6QjtBQUNBLFVBQUtHLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkgsSUFBckIsbUpBQXZCO0FBQ0EsVUFBS0ksWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCSixJQUFsQixtSkFBcEI7QUFDQSxVQUFLSyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JMLElBQWxCLG1KQUFwQjtBQWRpQjtBQWVsQjs7OztXQUVELHVCQUFjO0FBQ1osVUFBRyxLQUFLUCxLQUFMLENBQVdDLFVBQWQsRUFBeUI7QUFDdkIsYUFBS1ksUUFBTCxDQUFjLFVBQUNiLEtBQUQ7QUFBQSxpQkFBWTtBQUN4QkUsWUFBQUEsU0FBUyxFQUFFO0FBRGEsV0FBWjtBQUFBLFNBQWQ7QUFHRDs7QUFDRCxXQUFLVyxRQUFMLENBQWMsVUFBQ2IsS0FB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QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhFRixFQXVLRyxLQUFLVixLQUFMLENBQVdJLE1BQVgsaUJBQ0M7QUFBQSxrQ0FBRSwrREFBQyx5REFBRDtBQUFNLGdCQUFJLEVBQUVMLEtBQUssQ0FBQ3lCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUYsZUFDQTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUEwQixtQkFBTyxFQUFFLEtBQUtkO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREE7QUFBQSx3QkF4S0osRUE2S0ksQ0FBQyxLQUFLVixLQUFMLENBQVdDLFVBQVosSUFBMEIsS0FBS0QsS0FBTCxDQUFXRSxTQUFyQyxpQkFDQSwrREFBQyxxRUFBRDtBQUFjLGdCQUFNLEVBQUVILEtBQUssQ0FBQ3NCLE1BQTVCO0FBQW9DLHNCQUFZLEVBQUV0QixLQUFLLENBQUN1QixZQUF4RDtBQUFzRSxvQkFBVSxFQUFFdkIsS0FBSyxDQUFDd0I7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5S0osZUFpTEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBeVhEOzs7O0VBamNrQjdCOztBQW9jckIsK0RBQWVJLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9oZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDYXRlZ29yeU1lbnUgZnJvbSBcIkNvbXBvbmVudHMvY2F0ZWdvcnkvQ2F0ZWdvcnlNZW51XCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCJDb21wb25lbnRzL2NhcnQvQ2FydFwiO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNUb2dnbGVPbjogZmFsc2UsXHJcbiAgICAgIGlzUHJvZHVjdDogZmFsc2UsXHJcbiAgICAgIGlzU2VhcmNoOiBmYWxzZSxcclxuICAgICAgaXNDYXJ0OiBmYWxzZSxcclxuICAgICAgc2VhcmNoOiAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrUHJvZHVjdCA9IHRoaXMuaGFuZGxlQ2xpY2tQcm9kdWN0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrU2VhcmNoID0gdGhpcy5oYW5kbGVDbGlja1NlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDbGlja0NhcnQgPSB0aGlzLmhhbmRsZUNsaWNrQ2FydC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTZWFyY2ggPSB0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdWJtaXRTZWFyY2ggPSB0aGlzLnN1Ym1pdFNlYXJjaC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2soKSB7ICAgXHJcbiAgICBpZih0aGlzLnN0YXRlLmlzVG9nZ2xlT24pe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gKHtcclxuICAgICAgICBpc1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gKHtcclxuICAgICAgaXNUb2dnbGVPbjogIXN0YXRlLmlzVG9nZ2xlT24sXHJcbiAgICB9KSk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrUHJvZHVjdCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICBpc1Byb2R1Y3Q6ICFzdGF0ZS5pc1Byb2R1Y3QsXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaGFuZGxlQ2xpY2tTZWFyY2goKSB7XHJcbiAgICBpZih0aGlzLnN0YXRlLnNlYXJjaCAhPT0gXCJcIil7XHJcbiAgICAgIHRoaXMuc3VibWl0U2VhcmNoKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICAgIGlzU2VhcmNoOiAhc3RhdGUuaXNTZWFyY2gsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrQ2FydCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICBpc0NhcnQ6ICFzdGF0ZS5pc0NhcnQsXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTZWFyY2goZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+ICh7XHJcbiAgICAgIHNlYXJjaDogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KSk7XHJcbiAgICBpZihlLnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICAgIGlzU2VhcmNoOiAhc3RhdGUuaXNTZWFyY2gsXHJcbiAgICAgIH0pKTsgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJtaXRTZWFyY2goKSB7XHJcbiAgIGFsZXJ0KFwic3VibWl0XCIpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuaXNUb2dnbGVPbiAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXIgbW9iaWxlLW9ubHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgIGNsb3NlXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbGlua1wiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hYm91dC11c2B9PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICBBYm91dCBVc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrUHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvZHVjdHNcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9uZXdzLWluZm9gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgTmV3cyAmYW1wOyBJbmZvXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9jYXJlZXJgfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FyZWVyXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vY29udGFjdC11c2B9PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmlzVG9nZ2xlT24gJiYgdGhpcy5zdGF0ZS5pc1Byb2R1Y3QgJiYgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXIgcHJvZHVjdCBtb2JpbGUtb25seVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrUHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAgY2hldnJvbl9sZWZ0XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGEgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPENhdGVnb3J5TWVudSBicmFuZHM9e3Byb3BzLmJyYW5kc30gYXBwbGljYXRpb25zPXtwcm9wcy5hcHBsaWNhdGlvbnN9IGluZHVzdHJpZXM9e3Byb3BzLmluZHVzdHJpZXN9Lz5cclxuICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5pc1RvZ2dsZU9uICYmIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lkZWJhci1iYWNrZ3JvdW5kIG1vYmlsZS1vbmx5XCJcclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pbm5lci1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXdyYXBwZXIgbW9iaWxlLW9ubHlcIj5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBtZW51XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuaXNTZWFyY2ggJiZcclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXdyYXBwZXIgZGVza3RvcC1vbmx5XCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbGluayBkZXNrdG9wLW9ubHlcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1saW5rLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hYm91dC11c2B9PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICBBYm91dCBVc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrUHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvZHVjdHNcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9uZXdzLWluZm9gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgTmV3cyAmYW1wOyBJbmZvXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9jYXJlZXJgfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FyZWVyXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vY29udGFjdC11c2B9PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNTZWFyY2ggPyBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1zZWFyY2hcIj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzZWFyY2gtYm94XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja1NlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA6IFxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNlYXJjaC1oZWFkZXJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrU2VhcmNofT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgIHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcnQtaGVhZGVyXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja0NhcnR9PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nX2NhcnRcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1saW5rIG1vYmlsZS1vbmx5XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbGluay13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNTZWFyY2ggPyBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1zZWFyY2hcIj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzZWFyY2gtYm94XCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja1NlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA6IFxyXG5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNlYXJjaC1oZWFkZXJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrU2VhcmNofT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgIHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhcnQtaGVhZGVyXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja0NhcnR9PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHNob3BwaW5nX2NhcnRcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUuaXNDYXJ0ICYmIChcclxuICAgICAgICAgIDw+PENhcnQgY2FydD17cHJvcHMuY2FydH0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2Ryb3BcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrQ2FydH0+PC9kaXY+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7ICF0aGlzLnN0YXRlLmlzVG9nZ2xlT24gJiYgdGhpcy5zdGF0ZS5pc1Byb2R1Y3QgJiYgKFxyXG4gICAgICAgICAgPENhdGVnb3J5TWVudSBicmFuZHM9e3Byb3BzLmJyYW5kc30gYXBwbGljYXRpb25zPXtwcm9wcy5hcHBsaWNhdGlvbnN9IGluZHVzdHJpZXM9e3Byb3BzLmluZHVzdHJpZXN9Lz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmRlc2t0b3Atb25seSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1vYmlsZS1vbmx5IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5uYXZiYXItaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMTQ1LCAxNTgsIDE3MSwgMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItaW5uZXItY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDc2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1pbm5lci1jb250ZW50LXdyYXBwZXIgLmxvZ28td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItaW5uZXItY29udGVudC13cmFwcGVyIC5sb2dvIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWxpbmstd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1saW5rLXdyYXBwZXIgYSB7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWxpbmsgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCYWhuc2NocmlmdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1saW5rIGEuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JhaG5zY2hyaWZ0JztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRCODM0MztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY2FydC1oZWFkZXIsIC5zZWFyY2gtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaW5wdXQtc2VhcmNoIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDMwcHggOHB4IDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2VhcmNoLWJveCB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pbnB1dC1zZWFyY2gge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc2VwYXJhdG9yIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgICAgICAgLmJhY2tkcm9wIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICAubW9iaWxlLW9ubHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlc2t0b3Atb25seSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuZGVza3RvcC1vbmx5LCAubG9nby13cmFwcGVyLmRlc2t0b3Atb25seXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXItbGluayAuY2FydC1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhci1pbm5lci1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhci1pbm5lci1jb250ZW50LXdyYXBwZXIgLmxvZ28sIC5zaWRlYmFyIC5sb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhciAubG9nby13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMzJweCAxNnB4IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM1LDIzNSwyMzUsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhci5wcm9kdWN0IC5sb2dvLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDMycHggMTZweCAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzUsMjM1LDIzNSwxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyIC5uYXZiYXItbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhciAubmF2YmFyLWxpbmsgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFobnNjaHJpZnQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzJweCAwIDAgMzJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJDYXRlZ29yeU1lbnUiLCJDYXJ0IiwiSGVhZGVyIiwicHJvcHMiLCJzdGF0ZSIsImlzVG9nZ2xlT24iLCJpc1Byb2R1Y3QiLCJpc1NlYXJjaCIsImlzQ2FydCIsInNlYXJjaCIsImhhbmRsZUNsaWNrIiwiYmluZCIsImhhbmRsZUNsaWNrUHJvZHVjdCIsImhhbmRsZUNsaWNrU2VhcmNoIiwiaGFuZGxlQ2xpY2tDYXJ0IiwiaGFuZGxlU2VhcmNoIiwic3VibWl0U2VhcmNoIiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhbGVydCIsInByb2Nlc3MiLCJlbnYiLCJST09UX0RPTUFJTiIsImJyYW5kcyIsImFwcGxpY2F0aW9ucyIsImluZHVzdHJpZXMiLCJjYXJ0IiwiQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==
"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODBkMzNmZmMyMjcyMTFhY2VkNGMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7SUFFTUk7Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsVUFBVSxFQUFFLEtBREQ7QUFFWEMsTUFBQUEsU0FBUyxFQUFFLEtBRkE7QUFHWEMsTUFBQUEsUUFBUSxFQUFFLEtBSEM7QUFJWEMsTUFBQUEsTUFBTSxFQUFFLEtBSkc7QUFLWEMsTUFBQUEsTUFBTSxFQUFFO0FBTEcsS0FBYjtBQU9BLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsbUpBQW5CO0FBQ0EsVUFBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JELElBQXhCLG1KQUExQjtBQUNBLFVBQUtFLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCRixJQUF2QixtSkFBekI7QUFDQSxVQUFLRyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJILElBQXJCLG1KQUF2QjtBQUNBLFVBQUtJLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkosSUFBbEIsbUpBQXBCO0FBQ0EsVUFBS0ssWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCTCxJQUFsQixtSkFBcEI7QUFkaUI7QUFlbEI7Ozs7V0FFRCx1QkFBYztBQUNaLFVBQUcsS0FBS1AsS0FBTCxDQUFXQyxVQUFkLEVBQXlCO0FBQ3ZCLGFBQUtZLFFBQUwsQ0FBYyxVQUFDYixLQUFEO0FBQUEsaUJBQVk7QUFDeEJFLFlBQUFBLFNBQVMsRUFBRTtBQURhLFdBQVo7QUFBQSxTQUFkO0FBR0Q7O0FBQ0QsV0FBS1csUUFBTCxDQUFjLFVBQUNiLEtBQUQ7QUFBQSxlQUFZ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QUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoRUYsRUF1S0csS0FBS1YsS0FBTCxDQUFXSSxNQUFYLGlCQUNDO0FBQUEsa0NBQUUsK0RBQUMseURBQUQ7QUFBTSxnQkFBSSxFQUFFTCxLQUFLLENBQUN5QjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFGLGVBQ0E7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBMEIsbUJBQU8sRUFBRSxLQUFLZDtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBO0FBQUEsd0JBeEtKLEVBNktJLENBQUMsS0FBS1YsS0FBTCxDQUFXQyxVQUFaLElBQTBCLEtBQUtELEtBQUwsQ0FBV0UsU0FBckMsaUJBQ0EsK0RBQUMscUVBQUQ7QUFBYyxnQkFBTSxFQUFFSCxLQUFLLENBQUNzQixNQUE1QjtBQUFvQyxzQkFBWSxFQUFFdEIsS0FBSyxDQUFDdUIsWUFBeEQ7QUFBc0Usb0JBQVUsRUFBRXZCLEtBQUssQ0FBQ3dCO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBOUtKLGVBaUxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQXlYRDs7OztFQWpja0I3Qjs7QUFvY3JCLCtEQUFlSSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRhaW5lcnMvaGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlNZW51IGZyb20gXCJDb21wb25lbnRzL2NhdGVnb3J5L0NhdGVnb3J5TWVudVwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiQ29tcG9uZW50cy9jYXJ0L0NhcnRcIjtcclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzVG9nZ2xlT246IGZhbHNlLFxyXG4gICAgICBpc1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICBpc1NlYXJjaDogZmFsc2UsXHJcbiAgICAgIGlzQ2FydDogZmFsc2UsXHJcbiAgICAgIHNlYXJjaDogJydcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDbGlja1Byb2R1Y3QgPSB0aGlzLmhhbmRsZUNsaWNrUHJvZHVjdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDbGlja1NlYXJjaCA9IHRoaXMuaGFuZGxlQ2xpY2tTZWFyY2guYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2tDYXJ0ID0gdGhpcy5oYW5kbGVDbGlja0NhcnQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU2VhcmNoID0gdGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3VibWl0U2VhcmNoID0gdGhpcy5zdWJtaXRTZWFyY2guYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrKCkgeyAgIFxyXG4gICAgaWYodGhpcy5zdGF0ZS5pc1RvZ2dsZU9uKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+ICh7XHJcbiAgICAgICAgaXNQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+ICh7XHJcbiAgICAgIGlzVG9nZ2xlT246ICFzdGF0ZS5pc1RvZ2dsZU9uLFxyXG4gICAgfSkpO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGlja1Byb2R1Y3QoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gKHtcclxuICAgICAgaXNQcm9kdWN0OiAhc3RhdGUuaXNQcm9kdWN0LFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcblxyXG4gIGhhbmRsZUNsaWNrU2VhcmNoKCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5zZWFyY2ggIT09IFwiXCIpe1xyXG4gICAgICB0aGlzLnN1Ym1pdFNlYXJjaCgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gKHtcclxuICAgICAgICBpc1NlYXJjaDogIXN0YXRlLmlzU2VhcmNoLFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGlja0NhcnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gKHtcclxuICAgICAgaXNDYXJ0OiAhc3RhdGUuaXNDYXJ0LFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2VhcmNoKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICBzZWFyY2g6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSkpO1xyXG4gICAgaWYoZS50YXJnZXQudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gKHtcclxuICAgICAgICBpc1NlYXJjaDogIXN0YXRlLmlzU2VhcmNoLFxyXG4gICAgICB9KSk7IFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3VibWl0U2VhcmNoKCkge1xyXG4gICBhbGVydChcInN1Ym1pdFwiKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmlzVG9nZ2xlT24gJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyIG1vYmlsZS1vbmx5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICBjbG9zZVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWxpbmtcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vYWJvdXQtdXNgfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgQWJvdXQgVXNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja1Byb2R1Y3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vbmV3cy1pbmZvYH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIE5ld3MgJmFtcDsgSW5mb1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vY2FyZWVyYH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIENhcmVlclxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2NvbnRhY3QtdXNgfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29udGFjdCBVc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5pc1RvZ2dsZU9uICYmIHRoaXMuc3RhdGUuaXNQcm9kdWN0ICYmIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyIHByb2R1Y3QgbW9iaWxlLW9ubHlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja1Byb2R1Y3R9PlxyXG4gICAgICAgICAgICAgIGNoZXZyb25fbGVmdFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfWB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxDYXRlZ29yeU1lbnUgYnJhbmRzPXtwcm9wcy5icmFuZHN9IGFwcGxpY2F0aW9ucz17cHJvcHMuYXBwbGljYXRpb25zfSBpbmR1c3RyaWVzPXtwcm9wcy5pbmR1c3RyaWVzfS8+XHJcbiAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUuaXNUb2dnbGVPbiAmJiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZGViYXItYmFja2dyb3VuZCBtb2JpbGUtb25seVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgKX1cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbnRlbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaW5uZXItY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby13cmFwcGVyIG1vYmlsZS1vbmx5XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgbWVudVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLmlzU2VhcmNoICYmXHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby13cmFwcGVyIGRlc2t0b3Atb25seVwiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfWB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWxpbmsgZGVza3RvcC1vbmx5XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbGluay13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vYWJvdXQtdXNgfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgQWJvdXQgVXNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja1Byb2R1Y3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vbmV3cy1pbmZvYH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIE5ld3MgJmFtcDsgSW5mb1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vY2FyZWVyYH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIENhcmVlclxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2NvbnRhY3QtdXNgfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29udGFjdCBVc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzU2VhcmNoID8gXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtc2VhcmNoXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2VhcmNoLWJveFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgOiBcclxuXHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzZWFyY2gtaGVhZGVyXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja1NlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJ0LWhlYWRlclwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tDYXJ0fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ19jYXJ0XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbGluayBtb2JpbGUtb25seVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWxpbmstd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzU2VhcmNoID8gXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtc2VhcmNoXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2VhcmNoLWJveFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgOiBcclxuXHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzZWFyY2gtaGVhZGVyXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja1NlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJ0LWhlYWRlclwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tDYXJ0fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ19jYXJ0XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmlzQ2FydCAmJiAoXHJcbiAgICAgICAgICA8PjxDYXJ0IGNhcnQ9e3Byb3BzLmNhcnR9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tkcm9wXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja0NhcnR9PjwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgeyAhdGhpcy5zdGF0ZS5pc1RvZ2dsZU9uICYmIHRoaXMuc3RhdGUuaXNQcm9kdWN0ICYmIChcclxuICAgICAgICAgIDxDYXRlZ29yeU1lbnUgYnJhbmRzPXtwcm9wcy5icmFuZHN9IGFwcGxpY2F0aW9ucz17cHJvcHMuYXBwbGljYXRpb25zfSBpbmR1c3RyaWVzPXtwcm9wcy5pbmR1c3RyaWVzfS8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIC5kZXNrdG9wLW9ubHkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tb2JpbGUtb25seSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDE0NSwgMTU4LCAxNzEsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWlubmVyLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItaW5uZXItY29udGVudC13cmFwcGVyIC5sb2dvLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWlubmVyLWNvbnRlbnQtd3JhcHBlciAubG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1saW5rLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbGluay13cmFwcGVyIGEge1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1saW5rIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFobnNjaHJpZnQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbGluayBhLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCYWhuc2NocmlmdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTVweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0QjgzNDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhcnQtaGVhZGVyLCAuc2VhcmNoLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmlucHV0LXNlYXJjaCBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAzMHB4IDhweCA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNlYXJjaC1ib3gge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaW5wdXQtc2VhcmNoIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNlcGFyYXRvciB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgICAgICAgIC5iYWNrZHJvcCB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1vYmlsZS1vbmx5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5kZXNrdG9wLW9ubHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlc2t0b3Atb25seSwgLmxvZ28td3JhcHBlci5kZXNrdG9wLW9ubHl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubmF2YmFyLWxpbmsgLmNhcnQtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2VhcmNoLWJveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXItaW5uZXItY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXItaW5uZXItY29udGVudC13cmFwcGVyIC5sb2dvLCAuc2lkZWJhciAubG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXIgLmxvZ28td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDMycHggMTZweCAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNSwyMzUsMjM1LDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXIucHJvZHVjdCAubG9nby13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAzMnB4IDE2cHggMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM1LDIzNSwyMzUsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhciAubmF2YmFyLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXIgLm5hdmJhci1saW5rIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JhaG5zY2hyaWZ0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMycHggMCAwIDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQ2F0ZWdvcnlNZW51IiwiQ2FydCIsIkhlYWRlciIsInByb3BzIiwic3RhdGUiLCJpc1RvZ2dsZU9uIiwiaXNQcm9kdWN0IiwiaXNTZWFyY2giLCJpc0NhcnQiLCJzZWFyY2giLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVDbGlja1Byb2R1Y3QiLCJoYW5kbGVDbGlja1NlYXJjaCIsImhhbmRsZUNsaWNrQ2FydCIsImhhbmRsZVNlYXJjaCIsInN1Ym1pdFNlYXJjaCIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYWxlcnQiLCJwcm9jZXNzIiwiZW52IiwiUk9PVF9ET01BSU4iLCJicmFuZHMiLCJhcHBsaWNhdGlvbnMiLCJpbmR1c3RyaWVzIiwiY2FydCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=
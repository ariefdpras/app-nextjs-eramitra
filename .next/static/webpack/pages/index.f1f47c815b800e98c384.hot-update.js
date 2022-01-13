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
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
                "class": "fas fa-thumbs-up fa-5x"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 13
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                className: "navbar-link-wrapper",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                  href: "".concat("http://localhost:3001", "/about-us"),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    children: "About Us"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                  onClick: this.handleClickProduct,
                  children: "Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                  href: "".concat("http://localhost:3001", "/news-info"),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    children: "News & Info"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                  href: "".concat("http://localhost:3001", "/career"),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    children: "Career"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                  href: "".concat("http://localhost:3001", "/contact-us"),
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    children: "Contact Us"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "separator"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 17
                }, this), this.state.isSearch ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
                  className: "input-search",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
                    type: "text",
                    placeholder: "",
                    onChange: this.handleSearch
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 49
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    className: "search-box",
                    onClick: this.handleClickSearch,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "material-icons",
                      children: "search"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 197,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 196,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 19
                }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                  className: "search-header",
                  onClick: this.handleClickSearch,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                    className: "material-icons",
                    children: "search"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                  className: "cart-header",
                  onClick: this.handleClickCart,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                    className: "material-icons",
                    children: "shopping_cart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
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
                    lineNumber: 222,
                    columnNumber: 49
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                    className: "search-box",
                    onClick: this.handleClickSearch,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                      className: "material-icons",
                      children: "search"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 224,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 19
                }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                  className: "search-header",
                  onClick: this.handleClickSearch,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                    className: "material-icons",
                    children: "search"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("a", {
                  className: "cart-header",
                  onClick: this.handleClickCart,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
                    className: "material-icons",
                    children: "shopping_cart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
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
            lineNumber: 248,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: "backdrop",
            onClick: this.handleClickCart
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 11
          }, this)]
        }, void 0, true), !this.state.isToggleOn && this.state.isProduct && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Components_category_CategoryMenu__WEBPACK_IMPORTED_MODULE_8__.default, {
          brands: props.brands,
          applications: props.applications,
          industries: props.industries
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("style", {
          children: "\n                .desktop-only {\n                    display: block;\n                }\n\n                .mobile-only {\n                    display: none !important;\n                }\n                \n                .navbar-header {\n                    position: fixed;\n                    top: 0;\n                    left: 0;\n                    z-index: 200;\n                    width: 100vw;\n                    padding: 0;\n                }\n\n                .navbar-content-wrapper {\n                    width: 100%;\n                    position: relative;\n                    box-shadow: 0px 4px 10px rgba(145, 158, 171, 0.1);\n                    background-color: #FFF;\n                }\n\n                .navbar-inner-content-wrapper {\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-between;\n                    flex-wrap: wrap;\n                    max-width: 1120px;\n                    height: 76px;\n                    margin: 0 auto;\n                }\n\n                .navbar-inner-content-wrapper .logo-wrapper {\n                    display: flex;\n                    align-items: center;\n                }\n\n                .navbar-inner-content-wrapper .logo {\n                  height: 30px;\n                  width: auto;\n                }\n\n                .navbar-link-wrapper {\n                  display: flex;\n                  align-items: center;\n                }\n\n                .navbar-link-wrapper a {\n                  cursor: pointer;\n                }\n\n                .navbar-link a {\n                    font-family: 'Bahnschrift';\n                    font-weight: 400;\n                    font-size: 14px;\n                    margin-left: 55px;\n                }\n\n                .navbar-link a.active {\n                    font-family: 'Bahnschrift';\n                    font-weight: 500;\n                    margin-left: 55px;\n                    text-decoration: none;\n                    color: #4B8343;\n                }\n\n                .cart-header, .search-header {\n                  margin-left: 25px !important;\n                }\n\n                .input-search input {\n                  padding: 8px 30px 8px 8px;\n                }\n\n                .search-box {\n                  margin-left: -30px !important;\n                }\n\n                .input-search {\n                  display: flex;\n                  align-items: center;\n                  margin-left: 25px;\n                }\n\n                .separator {\n                  width: 2px;\n                  height: 30px;\n                  background: #000000;\n                  margin-left: 25px;\n                }\n \n                .backdrop {\n                  background: #000000;\n                  opacity: 0.5;\n                  width: 100vw;\n                  height: 100vh;\n                  position: fixed;\n                  top: 0;\n                } \n\n                @media only screen and (max-width: 800px){\n                    .mobile-only {\n                        display: block !important;\n                    }\n\n                    .desktop-only {\n                      display: none !important;\n                  }\n                    \n                    .desktop-only, .logo-wrapper.desktop-only{\n                        display: none;\n                    }\n\n                    .navbar-link .cart-header {\n                      margin-left: 15px !important;\n                    }\n\n                    .search-box {\n                      margin-left: -30px !important;\n                    }\n\n                    .navbar-inner-content-wrapper {\n                        height: 56px;\n                        padding: 0 10px;\n                    }\n                    \n                    .navbar-inner-content-wrapper .logo, .sidebar .logo {\n                        height: 20px;\n                        width: auto;\n                        margin: 0 16px;\n                    }\n\n                    .navbar-header {\n                        position: absolute;\n                    }\n\n                    .sidebar {\n                        width: 90%;\n                        height: 100vh;\n                        background-color: white;\n                        position: fixed;\n                        z-index: 100;\n                        top: 0;\n                        left: 0;\n                    }\n\n                    .sidebar-background {\n                        width: 100%;\n                        height: 100%;\n                        z-index: 99;\n                        background-color: rgba(0, 0, 0, 0.1);\n                        position: fixed;\n                        top: 0;\n                        left: 0;\n                    }\n\n                    .sidebar .logo-wrapper {\n                        display: flex;\n                        align-items: center;\n                        height: 56px;\n                        justify-content: space-between;\n                        padding: 16px 32px 16px 14px;\n                        border-bottom: 1px solid rgb(235,235,235,1);\n                    }\n\n                    .sidebar.product .logo-wrapper {\n                      display: flex;\n                      align-items: center;\n                      height: 56px;\n                      justify-content: flex-start;\n                      padding: 16px 32px 16px 14px;\n                      border-bottom: 1px solid rgb(235,235,235,1);\n                    }\n\n                    .sidebar .navbar-link {\n                        display: flex;\n                        flex-direction: column;\n                    }\n\n                    .sidebar .navbar-link a {\n                        font-family: 'Bahnschrift';\n                        font-size: 16px;\n                        font-style: normal;\n                        font-weight: 600;\n                        line-height: 22px;\n                        letter-spacing: 0em;\n                        text-align: left;\n                        margin: 32px 0 0 32px;\n                    }\n\n                }\n                "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 257,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjFmNDdjODE1YjgwMGU5OGMzODQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7SUFFTUk7Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsVUFBVSxFQUFFLEtBREQ7QUFFWEMsTUFBQUEsU0FBUyxFQUFFLEtBRkE7QUFHWEMsTUFBQUEsUUFBUSxFQUFFLEtBSEM7QUFJWEMsTUFBQUEsTUFBTSxFQUFFLEtBSkc7QUFLWEMsTUFBQUEsTUFBTSxFQUFFO0FBTEcsS0FBYjtBQU9BLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsbUpBQW5CO0FBQ0EsVUFBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JELElBQXhCLG1KQUExQjtBQUNBLFVBQUtFLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCRixJQUF2QixtSkFBekI7QUFDQSxVQUFLRyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJILElBQXJCLG1KQUF2QjtBQUNBLFVBQUtJLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkosSUFBbEIsbUpBQXBCO0FBQ0EsVUFBS0ssWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCTCxJQUFsQixtSkFBcEI7QUFkaUI7QUFlbEI7Ozs7V0FFRCx1QkFBYztBQUNaLFVBQUcsS0FBS1AsS0FBTCxDQUFXQyxVQUFkLEVBQXlCO0FBQ3ZCLGFBQUtZLFFBQUwsQ0FBYyxVQUFDYixLQUFEO0FBQUEsaUJBQVk7QUFDeEJFLFlBQUFBLFNBQVMsRUFBRTtBQURhLFdBQVo7QUFBQSxTQUFkO0FBR0Q7O0FBQ0QsV0FBS1csUUFBTCxDQUFjLFVBQUNiLEtBQUQ7QUFBQSxlQUFZ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QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTFFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhFRixFQXdLRyxLQUFLVixLQUFMLENBQVdJLE1BQVgsaUJBQ0M7QUFBQSxrQ0FBRSwrREFBQyx5REFBRDtBQUFNLGdCQUFJLEVBQUVMLEtBQUssQ0FBQ3lCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUYsZUFDQTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUEwQixtQkFBTyxFQUFFLEtBQUtkO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREE7QUFBQSx3QkF6S0osRUE4S0ksQ0FBQyxLQUFLVixLQUFMLENBQVdDLFVBQVosSUFBMEIsS0FBS0QsS0FBTCxDQUFXRSxTQUFyQyxpQkFDQSwrREFBQyxxRUFBRDtBQUFjLGdCQUFNLEVBQUVILEtBQUssQ0FBQ3NCLE1BQTVCO0FBQW9DLHNCQUFZLEVBQUV0QixLQUFLLENBQUN1QixZQUF4RDtBQUFzRSxvQkFBVSxFQUFFdkIsS0FBSyxDQUFDd0I7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvS0osZUFrTEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbExGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBMFhEOzs7O0VBbGNrQjdCOztBQXFjckIsK0RBQWVJLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9oZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBDYXRlZ29yeU1lbnUgZnJvbSBcIkNvbXBvbmVudHMvY2F0ZWdvcnkvQ2F0ZWdvcnlNZW51XCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCJDb21wb25lbnRzL2NhcnQvQ2FydFwiO1xyXG5cclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNUb2dnbGVPbjogZmFsc2UsXHJcbiAgICAgIGlzUHJvZHVjdDogZmFsc2UsXHJcbiAgICAgIGlzU2VhcmNoOiBmYWxzZSxcclxuICAgICAgaXNDYXJ0OiBmYWxzZSxcclxuICAgICAgc2VhcmNoOiAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrUHJvZHVjdCA9IHRoaXMuaGFuZGxlQ2xpY2tQcm9kdWN0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrU2VhcmNoID0gdGhpcy5oYW5kbGVDbGlja1NlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDbGlja0NhcnQgPSB0aGlzLmhhbmRsZUNsaWNrQ2FydC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTZWFyY2ggPSB0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdWJtaXRTZWFyY2ggPSB0aGlzLnN1Ym1pdFNlYXJjaC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2soKSB7ICAgXHJcbiAgICBpZih0aGlzLnN0YXRlLmlzVG9nZ2xlT24pe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gKHtcclxuICAgICAgICBpc1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gKHtcclxuICAgICAgaXNUb2dnbGVPbjogIXN0YXRlLmlzVG9nZ2xlT24sXHJcbiAgICB9KSk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrUHJvZHVjdCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICBpc1Byb2R1Y3Q6ICFzdGF0ZS5pc1Byb2R1Y3QsXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaGFuZGxlQ2xpY2tTZWFyY2goKSB7XHJcbiAgICBpZih0aGlzLnN0YXRlLnNlYXJjaCAhPT0gXCJcIil7XHJcbiAgICAgIHRoaXMuc3VibWl0U2VhcmNoKClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICAgIGlzU2VhcmNoOiAhc3RhdGUuaXNTZWFyY2gsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrQ2FydCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICBpc0NhcnQ6ICFzdGF0ZS5pc0NhcnQsXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTZWFyY2goZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+ICh7XHJcbiAgICAgIHNlYXJjaDogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KSk7XHJcbiAgICBpZihlLnRhcmdldC52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICAgIGlzU2VhcmNoOiAhc3RhdGUuaXNTZWFyY2gsXHJcbiAgICAgIH0pKTsgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJtaXRTZWFyY2goKSB7XHJcbiAgIGFsZXJ0KFwic3VibWl0XCIpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuaXNUb2dnbGVPbiAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXIgbW9iaWxlLW9ubHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgIGNsb3NlXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbGlua1wiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hYm91dC11c2B9PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICBBYm91dCBVc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrUHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvZHVjdHNcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9uZXdzLWluZm9gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgTmV3cyAmYW1wOyBJbmZvXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9jYXJlZXJgfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FyZWVyXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vY29udGFjdC11c2B9PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLmlzVG9nZ2xlT24gJiYgdGhpcy5zdGF0ZS5pc1Byb2R1Y3QgJiYgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXIgcHJvZHVjdCBtb2JpbGUtb25seVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrUHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAgY2hldnJvbl9sZWZ0XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGEgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPENhdGVnb3J5TWVudSBicmFuZHM9e3Byb3BzLmJyYW5kc30gYXBwbGljYXRpb25zPXtwcm9wcy5hcHBsaWNhdGlvbnN9IGluZHVzdHJpZXM9e3Byb3BzLmluZHVzdHJpZXN9Lz5cclxuICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5pc1RvZ2dsZU9uICYmIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lkZWJhci1iYWNrZ3JvdW5kIG1vYmlsZS1vbmx5XCJcclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1pbm5lci1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXdyYXBwZXIgbW9iaWxlLW9ubHlcIj5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBtZW51XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuaXNTZWFyY2ggJiZcclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLXdyYXBwZXIgZGVza3RvcC1vbmx5XCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59YH0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbGluayBkZXNrdG9wLW9ubHlcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGh1bWJzLXVwIGZhLTV4XCI+PC9pPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWxpbmstd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2Fib3V0LXVzYH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIEFib3V0IFVzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tQcm9kdWN0fT5cclxuICAgICAgICAgICAgICAgICAgICBQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L25ld3MtaW5mb2B9PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICBOZXdzICZhbXA7IEluZm9cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2NhcmVlcmB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICBDYXJlZXJcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9jb250YWN0LXVzYH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc1NlYXJjaCA/IFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXNlYXJjaFwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNlYXJjaC1ib3hcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrU2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDogXHJcblxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2VhcmNoLWhlYWRlclwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FydC1oZWFkZXJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrQ2FydH0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdfY2FydFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWxpbmsgbW9iaWxlLW9ubHlcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1saW5rLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc1NlYXJjaCA/IFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXNlYXJjaFwiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNlYXJjaC1ib3hcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrU2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDogXHJcblxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2VhcmNoLWhlYWRlclwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FydC1oZWFkZXJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrQ2FydH0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdfY2FydFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5pc0NhcnQgJiYgKFxyXG4gICAgICAgICAgPD48Q2FydCBjYXJ0PXtwcm9wcy5jYXJ0fSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZHJvcFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tDYXJ0fT48L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHsgIXRoaXMuc3RhdGUuaXNUb2dnbGVPbiAmJiB0aGlzLnN0YXRlLmlzUHJvZHVjdCAmJiAoXHJcbiAgICAgICAgICA8Q2F0ZWdvcnlNZW51IGJyYW5kcz17cHJvcHMuYnJhbmRzfSBhcHBsaWNhdGlvbnM9e3Byb3BzLmFwcGxpY2F0aW9uc30gaW5kdXN0cmllcz17cHJvcHMuaW5kdXN0cmllc30vPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAuZGVza3RvcC1vbmx5IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubW9iaWxlLW9ubHkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgxNDUsIDE1OCwgMTcxLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1pbm5lci1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzZweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWlubmVyLWNvbnRlbnQtd3JhcHBlciAubG9nby13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1pbm5lci1jb250ZW50LXdyYXBwZXIgLmxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbGluay13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWxpbmstd3JhcHBlciBhIHtcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbGluayBhIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JhaG5zY2hyaWZ0JztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWxpbmsgYS5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFobnNjaHJpZnQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNEI4MzQzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jYXJ0LWhlYWRlciwgLnNlYXJjaC1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pbnB1dC1zZWFyY2ggaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMzBweCA4cHggOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmlucHV0LXNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zZXBhcmF0b3Ige1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgICAgICAgICAuYmFja2Ryb3Age1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgICAgICAgICAgICAgICAgIC5tb2JpbGUtb25seSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZGVza3RvcC1vbmx5IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5kZXNrdG9wLW9ubHksIC5sb2dvLXdyYXBwZXIuZGVza3RvcC1vbmx5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhci1saW5rIC5jYXJ0LWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlYXJjaC1ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubmF2YmFyLWlubmVyLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAubmF2YmFyLWlubmVyLWNvbnRlbnQtd3JhcHBlciAubG9nbywgLnNpZGViYXIgLmxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXItaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLWJhY2tncm91bmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyIC5sb2dvLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAzMnB4IDE2cHggMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzUsMjM1LDIzNSwxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyLnByb2R1Y3QgLmxvZ28td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMzJweCAxNnB4IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNSwyMzUsMjM1LDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXIgLm5hdmJhci1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zaWRlYmFyIC5uYXZiYXItbGluayBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCYWhuc2NocmlmdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMnB4IDAgMCAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkNhdGVnb3J5TWVudSIsIkNhcnQiLCJIZWFkZXIiLCJwcm9wcyIsInN0YXRlIiwiaXNUb2dnbGVPbiIsImlzUHJvZHVjdCIsImlzU2VhcmNoIiwiaXNDYXJ0Iiwic2VhcmNoIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiaGFuZGxlQ2xpY2tQcm9kdWN0IiwiaGFuZGxlQ2xpY2tTZWFyY2giLCJoYW5kbGVDbGlja0NhcnQiLCJoYW5kbGVTZWFyY2giLCJzdWJtaXRTZWFyY2giLCJzZXRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFsZXJ0IiwicHJvY2VzcyIsImVudiIsIlJPT1RfRE9NQUlOIiwiYnJhbmRzIiwiYXBwbGljYXRpb25zIiwiaW5kdXN0cmllcyIsImNhcnQiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9
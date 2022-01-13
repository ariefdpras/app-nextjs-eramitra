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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3cy1pbmZvL1tzbHVnXS5mMWY0N2M4MTViODAwZTk4YzM4NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztJQUVNSTs7Ozs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxVQUFVLEVBQUUsS0FERDtBQUVYQyxNQUFBQSxTQUFTLEVBQUUsS0FGQTtBQUdYQyxNQUFBQSxRQUFRLEVBQUUsS0FIQztBQUlYQyxNQUFBQSxNQUFNLEVBQUUsS0FKRztBQUtYQyxNQUFBQSxNQUFNLEVBQUU7QUFMRyxLQUFiO0FBT0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixtSkFBbkI7QUFDQSxVQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkQsSUFBeEIsbUpBQTFCO0FBQ0EsVUFBS0UsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJGLElBQXZCLG1KQUF6QjtBQUNBLFVBQUtHLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkgsSUFBckIsbUpBQXZCO0FBQ0EsVUFBS0ksWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCSixJQUFsQixtSkFBcEI7QUFDQSxVQUFLSyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JMLElBQWxCLG1KQUFwQjtBQWRpQjtBQWVsQjs7OztXQUVELHVCQUFjO0FBQ1osVUFBRyxLQUFLUCxLQUFMLENBQVdDLFVBQWQsRUFBeUI7QUFDdkIsYUFBS1ksUUFBTCxDQUFjLFVBQUNiLEtBQUQ7QUFBQSxpQkFBWTtBQUN4QkUsWUFBQUEsU0FBUyxFQUFFO0FBRGEsV0FBWjtBQUFBLFNBQWQ7QUFHRDs7QUFDRCxXQUFLVyxRQUFMLENBQWMsVUFBQ2IsS0FB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O0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBMUVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEVGLEVBd0tHLEtBQUtWLEtBQUwsQ0FBV0ksTUFBWCxpQkFDQztBQUFBLGtDQUFFLCtEQUFDLHlEQUFEO0FBQU0sZ0JBQUksRUFBRUwsS0FBSyxDQUFDeUI7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBRixlQUNBO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQTBCLG1CQUFPLEVBQUUsS0FBS2Q7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQTtBQUFBLHdCQXpLSixFQThLSSxDQUFDLEtBQUtWLEtBQUwsQ0FBV0MsVUFBWixJQUEwQixLQUFLRCxLQUFMLENBQVdFLFNBQXJDLGlCQUNBLCtEQUFDLHFFQUFEO0FBQWMsZ0JBQU0sRUFBRUgsS0FBSyxDQUFDc0IsTUFBNUI7QUFBb0Msc0JBQVksRUFBRXRCLEtBQUssQ0FBQ3VCLFlBQXhEO0FBQXNFLG9CQUFVLEVBQUV2QixLQUFLLENBQUN3QjtBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9LSixlQWtMRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUEwWEQ7Ozs7RUFsY2tCN0I7O0FBcWNyQiwrREFBZUksTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250YWluZXJzL2hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IENhdGVnb3J5TWVudSBmcm9tIFwiQ29tcG9uZW50cy9jYXRlZ29yeS9DYXRlZ29yeU1lbnVcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIkNvbXBvbmVudHMvY2FydC9DYXJ0XCI7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc1RvZ2dsZU9uOiBmYWxzZSxcclxuICAgICAgaXNQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgaXNTZWFyY2g6IGZhbHNlLFxyXG4gICAgICBpc0NhcnQ6IGZhbHNlLFxyXG4gICAgICBzZWFyY2g6ICcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2tQcm9kdWN0ID0gdGhpcy5oYW5kbGVDbGlja1Byb2R1Y3QuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2tTZWFyY2ggPSB0aGlzLmhhbmRsZUNsaWNrU2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrQ2FydCA9IHRoaXMuaGFuZGxlQ2xpY2tDYXJ0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVNlYXJjaCA9IHRoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN1Ym1pdFNlYXJjaCA9IHRoaXMuc3VibWl0U2VhcmNoLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGljaygpIHsgICBcclxuICAgIGlmKHRoaXMuc3RhdGUuaXNUb2dnbGVPbil7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICAgIGlzUHJvZHVjdDogZmFsc2UsXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICBpc1RvZ2dsZU9uOiAhc3RhdGUuaXNUb2dnbGVPbixcclxuICAgIH0pKTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2tQcm9kdWN0KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+ICh7XHJcbiAgICAgIGlzUHJvZHVjdDogIXN0YXRlLmlzUHJvZHVjdCxcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG5cclxuICBoYW5kbGVDbGlja1NlYXJjaCgpIHtcclxuICAgIGlmKHRoaXMuc3RhdGUuc2VhcmNoICE9PSBcIlwiKXtcclxuICAgICAgdGhpcy5zdWJtaXRTZWFyY2goKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+ICh7XHJcbiAgICAgICAgaXNTZWFyY2g6ICFzdGF0ZS5pc1NlYXJjaCxcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2tDYXJ0KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+ICh7XHJcbiAgICAgIGlzQ2FydDogIXN0YXRlLmlzQ2FydCxcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVNlYXJjaChlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4gKHtcclxuICAgICAgc2VhcmNoOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pKTtcclxuICAgIGlmKGUudGFyZ2V0LnZhbHVlID09IFwiXCIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+ICh7XHJcbiAgICAgICAgaXNTZWFyY2g6ICFzdGF0ZS5pc1NlYXJjaCxcclxuICAgICAgfSkpOyBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN1Ym1pdFNlYXJjaCgpIHtcclxuICAgYWxlcnQoXCJzdWJtaXRcIilcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1oZWFkZXJcIj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5pc1RvZ2dsZU9uICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhciBtb2JpbGUtb25seVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfWB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbG9nby5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgY2xvc2VcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1saW5rXCI+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2Fib3V0LXVzYH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIEFib3V0IFVzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tQcm9kdWN0fT5cclxuICAgICAgICAgICAgICAgICAgICBQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L25ld3MtaW5mb2B9PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICBOZXdzICZhbXA7IEluZm9cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2NhcmVlcmB9PlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICBDYXJlZXJcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9jb250YWN0LXVzYH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuaXNUb2dnbGVPbiAmJiB0aGlzLnN0YXRlLmlzUHJvZHVjdCAmJiBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhciBwcm9kdWN0IG1vYmlsZS1vbmx5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tQcm9kdWN0fT5cclxuICAgICAgICAgICAgICBjaGV2cm9uX2xlZnRcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8YSBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Q2F0ZWdvcnlNZW51IGJyYW5kcz17cHJvcHMuYnJhbmRzfSBhcHBsaWNhdGlvbnM9e3Byb3BzLmFwcGxpY2F0aW9uc30gaW5kdXN0cmllcz17cHJvcHMuaW5kdXN0cmllc30vPlxyXG4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmlzVG9nZ2xlT24gJiYgKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlYmFyLWJhY2tncm91bmQgbW9iaWxlLW9ubHlcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWlubmVyLWNvbnRlbnQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28td3JhcHBlciBtb2JpbGUtb25seVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIG1lbnVcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5pc1NlYXJjaCAmJlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28td3JhcHBlciBkZXNrdG9wLW9ubHlcIj5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn1gfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1saW5rIGRlc2t0b3Atb25seVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aHVtYnMtdXAgZmEtNXhcIj48L2k+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbGluay13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vYWJvdXQtdXNgfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgQWJvdXQgVXNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja1Byb2R1Y3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vbmV3cy1pbmZvYH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIE5ld3MgJmFtcDsgSW5mb1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vY2FyZWVyYH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIENhcmVlclxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2NvbnRhY3QtdXNgfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29udGFjdCBVc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzU2VhcmNoID8gXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtc2VhcmNoXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2VhcmNoLWJveFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgOiBcclxuXHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzZWFyY2gtaGVhZGVyXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja1NlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJ0LWhlYWRlclwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tDYXJ0fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ19jYXJ0XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbGluayBtb2JpbGUtb25seVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWxpbmstd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzU2VhcmNoID8gXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtc2VhcmNoXCI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2VhcmNoLWJveFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgOiBcclxuXHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzZWFyY2gtaGVhZGVyXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja1NlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJ0LWhlYWRlclwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tDYXJ0fT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ19jYXJ0XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmlzQ2FydCAmJiAoXHJcbiAgICAgICAgICA8PjxDYXJ0IGNhcnQ9e3Byb3BzLmNhcnR9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tkcm9wXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja0NhcnR9PjwvZGl2PlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgeyAhdGhpcy5zdGF0ZS5pc1RvZ2dsZU9uICYmIHRoaXMuc3RhdGUuaXNQcm9kdWN0ICYmIChcclxuICAgICAgICAgIDxDYXRlZ29yeU1lbnUgYnJhbmRzPXtwcm9wcy5icmFuZHN9IGFwcGxpY2F0aW9ucz17cHJvcHMuYXBwbGljYXRpb25zfSBpbmR1c3RyaWVzPXtwcm9wcy5pbmR1c3RyaWVzfS8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIC5kZXNrdG9wLW9ubHkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tb2JpbGUtb25seSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDE0NSwgMTU4LCAxNzEsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWlubmVyLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItaW5uZXItY29udGVudC13cmFwcGVyIC5sb2dvLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyLWlubmVyLWNvbnRlbnQtd3JhcHBlciAubG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1saW5rLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbGluay13cmFwcGVyIGEge1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdmJhci1saW5rIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFobnNjaHJpZnQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5uYXZiYXItbGluayBhLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCYWhuc2NocmlmdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTVweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0QjgzNDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNhcnQtaGVhZGVyLCAuc2VhcmNoLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmlucHV0LXNlYXJjaCBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAzMHB4IDhweCA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNlYXJjaC1ib3gge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaW5wdXQtc2VhcmNoIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNlcGFyYXRvciB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiBcclxuICAgICAgICAgICAgICAgIC5iYWNrZHJvcCB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1vYmlsZS1vbmx5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5kZXNrdG9wLW9ubHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlc2t0b3Atb25seSwgLmxvZ28td3JhcHBlci5kZXNrdG9wLW9ubHl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubmF2YmFyLWxpbmsgLmNhcnQtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2VhcmNoLWJveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXItaW5uZXItY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXItaW5uZXItY29udGVudC13cmFwcGVyIC5sb2dvLCAuc2lkZWJhciAubG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXItYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXIgLmxvZ28td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDMycHggMTZweCAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNSwyMzUsMjM1LDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXIucHJvZHVjdCAubG9nby13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAzMnB4IDE2cHggMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM1LDIzNSwyMzUsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2lkZWJhciAubmF2YmFyLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNpZGViYXIgLm5hdmJhci1saW5rIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JhaG5zY2hyaWZ0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMycHggMCAwIDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQ2F0ZWdvcnlNZW51IiwiQ2FydCIsIkhlYWRlciIsInByb3BzIiwic3RhdGUiLCJpc1RvZ2dsZU9uIiwiaXNQcm9kdWN0IiwiaXNTZWFyY2giLCJpc0NhcnQiLCJzZWFyY2giLCJoYW5kbGVDbGljayIsImJpbmQiLCJoYW5kbGVDbGlja1Byb2R1Y3QiLCJoYW5kbGVDbGlja1NlYXJjaCIsImhhbmRsZUNsaWNrQ2FydCIsImhhbmRsZVNlYXJjaCIsInN1Ym1pdFNlYXJjaCIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYWxlcnQiLCJwcm9jZXNzIiwiZW52IiwiUk9PVF9ET01BSU4iLCJicmFuZHMiLCJhcHBsaWNhdGlvbnMiLCJpbmR1c3RyaWVzIiwiY2FydCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=
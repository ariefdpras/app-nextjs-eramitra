"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./containers/footer.js":
/*!******************************!*\
  !*** ./containers/footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\silvi\\Documents\\eramitra-dev\\containers\\footer.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Header = function Header(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: ''
  }),
      csData = _useState[0],
      setCsData = _useState[1];

  var setName = function setName(e) {
    setCsData(function (csData) {
      return _objectSpread(_objectSpread({}, csData), {}, {
        name: e.target.value
      });
    });
  };

  var setPhone = function setPhone(e) {
    setCsData(function (csData) {
      return _objectSpread(_objectSpread({}, csData), {}, {
        phone: e.target.value
      });
    });
  };

  var setEmail = function setEmail(e) {
    setCsData(function (csData) {
      return _objectSpread(_objectSpread({}, csData), {}, {
        email: e.target.value
      });
    });
  };

  var setCompany = function setCompany(e) {
    setCsData(function (csData) {
      return _objectSpread(_objectSpread({}, csData), {}, {
        company: e.target.value
      });
    });
  };

  var setMessage = function setMessage(e) {
    setCsData(function (csData) {
      return _objectSpread(_objectSpread({}, csData), {}, {
        message: e.target.value
      });
    });
  };

  var emailSend = function emailSend() {
    window.open("mailto:sales@eramitra.com?subject=Reach Us Form&body=Name: ".concat(csData.name || '', " %0d%0aPhone: ").concat(csData.phone || '', "  %0d%0aEmail: ").concat(csData.email || '', " %0d%0aCompany: ").concat(csData.company || '', " %0d%0a"), '_blank');
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "footer-container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "footer upper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "footer-wrapper",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "footer-inner-content-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "footer-left",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
              children: "OUR LOCATION"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "location-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
                children: "Head Office - Jakarta"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                children: ["Ruko Buaran Persada No. 31 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 49
                }, _this), "Jl. R. Soekamto Duren Sawit Jakarta 13450, Indonesia"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "icon-text",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "material-icons",
                  children: "phone"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 46
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  children: " +62-21-86612458 (Fax: +62-21-86612365)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 91
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "icon-text",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "material-icons",
                  children: "mail_outline"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 46
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  children: "sales@eramitra.com"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 98
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "location-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
                children: "Branch Office - Surabaya"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                children: "Jl. Kebon Sari V No. 7G - Surabaya"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "icon-text",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "material-icons",
                  children: "phone"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 46
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  children: " +62-21-86612458 (Fax: +62-21-86612365)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 91
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "icon-text",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                  className: "material-icons",
                  children: "mail_outline"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 46
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                  children: "sales@eramitra.com"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 98
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "reach-us",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
              children: "REACH US"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 18
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "form-reach-us",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                type: "text",
                placeholder: "Name",
                onChange: setName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 49
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 18
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "form-reach-us",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                type: "text",
                placeholder: "Phone Number",
                onChange: setPhone
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 49
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 18
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "form-reach-us",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                type: "text",
                placeholder: "Email",
                onChange: setEmail
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 49
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 18
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "form-reach-us",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                type: "text",
                placeholder: "Company",
                onChange: setCompany
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 49
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 18
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "form-reach-us",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("textarea", {
                rows: "5",
                placeholder: "Message",
                onChange: setMessage
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 49
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 18
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              className: "btn-submit-reach",
              onClick: function onClick() {
                return emailSend();
              },
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 18
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
        className: "footer-shape",
        src: "/static/images/footer-shape.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "footer bottom",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "footer-wrapper",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "footer-inner-content-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "footer-left",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "info-wrapper",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                href: "".concat("http://localhost:3001"),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                  className: "logo",
                  src: "/static/images/logo-white.png"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "hyperlink-column",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "col footer-link",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
                children: "Newsletter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "form-newsletter",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", {
                  type: "text",
                  placeholder: "Your Email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                  className: "btn-subscribe",
                  onClick: function onClick() {},
                  children: "Subscribe"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
                children: "Follow Us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                className: "social-media-wrapper",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                  href: "mailto:sales@eramitra.com",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "material-icons white",
                    children: "mail"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                  href: "https://www.linkedin.com/company/era-mitra-perdana",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                    className: "logo-social",
                    src: "/static/icons/linkedin.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                  href: "https://instagram.com/eramitra.id?utm_medium=copy_link",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                    className: "logo-social",
                    src: "/static/icons/instagram.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "col footer-link page",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
                children: "Page"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "".concat("http://localhost:3001", "/about-us"),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                  children: "About Us"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "".concat("http://localhost:3001", "/career"),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                  children: "Career"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "".concat("http://localhost:3001", "/contact-us"),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                  children: "Contact Us"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "".concat("http://localhost:3001", "/contact-us"),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
                  children: "Customer Service"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("style", {
      children: "\n\n                .col {\n                    display: flex;\n                    flex-direction: column;\n                }\n\n                .desktop-only {\n                    display: block;\n                }\n\n                .mobile-only {\n                    display: none;\n                }\n                \n                .footer {\n                    width: 100vw;\n                    display: flex;\n                    align-items: center;\n                    // height: 555px;\n                    // padding-bottom: 30px;\n                }\n\n                .footer.bottom {\n                  background: #0B9A7E;\n                  height: 373px;\n                }\n                \n                .footer.upper {\n                  background: #ECECEC;\n                  height: 638px;\n                  position: relative;\n                }\n\n                .footer-shape {\n                  position: absolute;\n                  bottom: 0;\n                  right: 0;\n                  z-index: 0;\n                }\n\n                .footer-wrapper {\n                    padding: 0;\n                    max-width: 1120px;\n                    margin: 0 auto;  \n                    width: 100%;\n                }\n\n                .footer-link h2 {\n                  font-family: Bahnschrift;\n                  font-size: 18px;\n                  font-style: normal;\n                  font-weight: 600;\n                  line-height: 22px;\n                  letter-spacing: 0em;\n                  text-align: left;\n\n                  color: #ffffff;\n                }\n                .footer-wrapper.bottom {\n                  background: #0B9A7E;\n                }\n\n                .footer-inner-content-wrapper {\n                    display: flex;\n                    justify-content: space-between;\n                }\n\n                .footer-left {\n                    display: flex;\n                    flex-wrap: wrap;\n                    width: 45%;\n                }\n                .reach-us {\n                  display: inline-block;\n                  min-width: 587px;\n                }\n\n                .reach-us h2 {\n                  margin-bottom: 24px;\n                }\n                \n                .form-reach-us {\n                  margin-bottom: 16px;\n                }\n\n                .form-reach-us input, .form-reach-us textarea {\n                  font-family: Calibri;\n                  width: 100%;    \n                  border: 1px solid #0E0E0E;\n                  background: transparent;\n                  padding: 6px 10px;\n                  font-size: 16px;\n                  line-height: 20px;\n                  color: #757575;\n                }\n\n                .footer-container .logo {\n                    width: 100%;\n                    min-width: 400px;\n                }\n                \n                .hyperlink-column {\n                    display: grid;\n                    grid-template-columns: 2fr 2fr;\n                    grid-gap: 30px 30px;\n                    width: 100%;\n                }\n\n                .info-wrapper {\n                    padding-right: 55px;\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: center;\n                }\n\n                .footer-link.page {\n                  padding-right: 20px;\n                }\n\n                .footer.upper h2 {\n                  font-family: 'Bahnschrift';\n                  font-style: normal;\n                  font-weight: 600;\n                  font-size: 24px;\n                }\n\n                .follow-us h2 {\n                    font-family: 'Bahnschrift';\n                    font-style: normal;\n                    font-weight: 500;\n                    font-size: 18px;\n                    line-height: 30px;\n                    color: #FFFFFF;\n                    margin: 0 0 10px 0;\n                }\n\n                .footer-link a, .footer-link p {\n                    font-family: 'Bahnschrift';\n                    font-style: normal;\n                    font-weight: normal;\n                    font-size: 16px;\n                    line-height: 24px;  \n                    color: #FFFFFF;\n                    margin: 0;                \n                }\n\n                .footer-link.page a {\n                  padding-top: 18px;   \n                }\n\n                .location-group h2 {\n                  margin-bottom: 15px;\n                }\n\n                .location-group p {\n                  font-family: Calibri;\n                  font-style: italic;\n                  font-weight: normal;\n                  font-size: 16px;\n                  line-height: 20px;\n                }\n                \n                .contact-us p {\n                    color: white;\n                    font-size: 13px;\n                    font-weight: 500;\n                    font-family: Open Sans;\n                    margin: 0;\n                }\n\n                .social-media-wrapper {\n                    display: flex;\n                }\n\n                .social-media-wrapper .logo-social {\n                    margin-right: 5px;\n                }\n                \n                .copyright {\n                    color: #4B8343;\n                    display: flex;\n                    justify-content: center;\n                    padding-top: 10px;\n                }\n\n                .copyright span {\n                    font-size: 18px;\n                    line-height: 22px;\n                    margin-right: 4px;\n                }\n\n                .copyright p {\n                    color: #4B8343;\n                    margin: 0;\n                    letter-spacing: 0em;\n                    text-align: left;   \n                    font-family: Poppins;\n                    font-style: normal;\n                    font-weight: normal;\n                    font-size: 18px;\n                    line-height: 27px;\n                }\n\n                .material-icons.white {\n                  color: #FFFFFF;\n                }\n\n                \n                .location-group .icon-text {\n                  display: flex;\n                  padding: 3px 0;\n                }\n\n                .location-group .icon-text span {\n                  padding-right: 10px;\n                }\n\n                .location-group .icon-text p {\n                  margin: 0px;\n                }\n\n                .btn-submit-reach {\n                  font-family: Bahnschrift;\n                  font-size: 18px;\n                  font-style: normal;\n                  font-weight: 400;\n                  line-height: 22px;\n                  letter-spacing: 0em;\n                  padding: 10px 25px;\n                  color: #FFFFFF;\n                  background: #626262;\n                  border-radius: 10px;\n                  cursor: pointer;\n                }\n\n                .btn-subscribe {\n                  font-family: Bahnschrift;\n                  font-size: 18px;\n                  font-style: normal;\n                  font-weight: 400;\n                  line-height: 22px;\n                  letter-spacing: 0em;\n                  padding: 10px 15px;\n                  color: #FFFFFF;\n                  background: #626262;\n                  border-radius: 0 10px 10px 0;\n                  cursor: pointer;\n                  width: 100px;\n                }\n\n                .form-newsletter input {\n                  font-family: Calibri;\n                  background: white;\n                  padding: 6px 10px;\n                  border-radius: 10px 0 0 10px;\n                  font-size: 16px;\n                  line-height: 20px;\n                  color: #757575;\n                  width: calc(100% - 100px);\n                  outline: none;\n                  border: none;\n                }\n\n\n                .form-newsletter input:focus{\n                  outline: none;\n                }\n\n                .form-newsletter {\n                  display: flex;\n                  margin-bottom: 25px;\n                }\n\n                input:focus{\n                    outline: none;\n                }\n\n                textarea:focus{\n                  outline: none;\n                }\n\n                .logo-social {\n                  height: 24px;\n                }\n\n                .social-media-wrapper .material-icons {\n                  margin-right: 5px;\n                }\n\n                @media only screen and (max-width: 800px){\n                    .mobile-only {\n                        display: block;\n                    }\n                    \n                    .desktop-only {\n                        display: none;\n                    }\n\n                    .footer {\n                        width: 100vw;\n                        height: 416px;\n                        background-color: #ffffff;\n                        background-image: url('static/images/footer.png');\n                        background-size: 100% 100%;\n                        background-position: top center;\n                    }\n    \n                    .footer-wrapper {\n                        padding: 16px;\n                        max-width: 1120px;\n                        margin: 0 auto;  \n                    }\n\n\n                    .footer-inner-content-wrapper {\n                        display: flex;\n                        flex-direction: column;\n                        margin: 0;\n                    }\n                    \n                    .footer-left {\n                        width: 100%;\n                        display: flex;\n                        flex-direction: column;\n                        flex-wrap: wrap;\n                        margin-top: 20px;\n                    }\n                    .contact-follow {\n                        width: 30%;\n                    }\n                    \n                    .footer-container .logo {\n                        width: 100%;\n                        min-width: 0;\n                        \n                    }\n                    .info-wrapper {\n                        width: 100%;\n                        padding: 30px;\n                    }\n                    .info-wrapper h3 {\n                        font-size: 12px;\n                    }\n                    .footer-link-1 h2, .footer-link-2 h2, .contact-us h2, .follow-us h2 {\n                        font-size: 16px;\n                        margin-bottom: 8px;\n                    }\n                \n                    .footer-link-1 a, .footer-link-2 a {\n                        font-size: 12px;\n                        margin-bottom: 4px;\n                    }\n\n                    .hyperlink-column {\n                        width: 100%;\n                    }\n\n                    .hyperlink-column {\n                      display: flex;\n                      justify-content: center;\n                    }\n\n                    .footer-link {\n                      justify-content: center;\n                      align-items: center;\n                    }\n\n                    .footer-link h2 {\n                      font-family: Bahnschrift;\n                      font-size: 12px;\n                      font-style: normal;\n                      font-weight: 600;\n                      line-height: 14px;\n                      letter-spacing: 0em;\n                      text-align: center;\n                      color: #FFFFFF;\n                      text-transform: uppercase;\n                    }\n\n                    .footer-link-2, .follow-us {\n                        width: 55%;\n                    }\n\n                    .footer-shape {\n                      display: none;\n                    }\n\n                    .contact-follow {\n                        width: 100%;\n                        margin-left: 0px;\n                        margin-top: 0px;\n                        display: flex;\n                        flex-direction: row;\n                        flex-wrap: wrap;\n                    }\n\n                    .contact-us p {\n                        font-size: 10px;\n                    }\n\n                    .social-media-wrapper {\n                        display: flex;\n                    }\n\n\n                    .copyright span {\n                        font-size: 10px;\n                        line-height: 12px;\n                        margin-right: 4px;\n                    }\n\n                    .copyright p {\n                        margin: 0;\n                        font-family: Open Sans;\n                        font-size: 10px;\n                        font-style: normal;\n                        font-weight: 600;\n                        line-height: 12px;\n                        letter-spacing: 0em;\n                        text-align: left;\n                    }\n\n                    .footer-link.page {\n                      display: none;\n                    }\n\n                    .footer.upper h2 {\n                      font-size: 12px;\n                      line-height: 12px;\n                      text-align: center;\n                    }\n\n                    .location-group p {\n                      font-size: 9px;\n                      line-height: 9px;\n                      text-align: center;\n                    }\n\n                    .location-group .icon-text span {\n                      font-size: 12px;\n                    }\n\n                    .location-group .icon-text {\n                      justify-content: center;\n                    }\n\n                   .form-reach-us {\n                     width: 100%;\n                   }\n\n                    .form-reach-us input, .form-reach-us textarea {\n                      padding: 3px 10px;\n                      font-size: 12px;\n                      line-height: 12px;\n                    }\n\n                    .btn-submit-reach {\n                      font-size: 12px;\n                      line-height: 12px;\n                      padding: 8px 15px;\n                      border-radius: 8px;\n                      width: fit-content;\n                    }\n\n                    .reach-us {\n                      display: flex;\n                      flex-direction: column;\n                      align-items: center;\n                      min-width: 0;\n                      margin-top: 10px;\n                    }\n                    \n\n                }\n                "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 7
  }, _this);
};

_s(Header, "fjJeP3ptY8nl2+pB6qeDTdRqGP0=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZThmMzg4NjhhOTYyYThjYjZiNjcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0EsSUFBTUksTUFBTSxHQUFFLFNBQVJBLE1BQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBRXJCLGtCQUE0QkgsK0NBQVEsQ0FBQztBQUNuQ0ksSUFBQUEsSUFBSSxFQUFFLEVBRDZCO0FBRW5DQyxJQUFBQSxLQUFLLEVBQUUsRUFGNEI7QUFHbkNDLElBQUFBLEtBQUssRUFBRSxFQUg0QjtBQUluQ0MsSUFBQUEsT0FBTyxFQUFFLEVBSjBCO0FBS25DQyxJQUFBQSxPQUFPLEVBQUU7QUFMMEIsR0FBRCxDQUFwQztBQUFBLE1BQU9DLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQVFBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLENBQUQsRUFBTztBQUNyQkYsSUFBQUEsU0FBUyxDQUFDLFVBQUNELE1BQUQ7QUFBQSw2Q0FDTEEsTUFESztBQUVSTCxRQUFBQSxJQUFJLEVBQUVRLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUZQO0FBQUEsS0FBRCxDQUFUO0FBSUQsR0FMRDs7QUFRQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDSCxDQUFELEVBQU87QUFDdEJGLElBQUFBLFNBQVMsQ0FBQyxVQUFDRCxNQUFEO0FBQUEsNkNBQ0xBLE1BREs7QUFFUkosUUFBQUEsS0FBSyxFQUFFTyxDQUFDLENBQUNDLE1BQUYsQ0FBU0M7QUFGUjtBQUFBLEtBQUQsQ0FBVDtBQUlELEdBTEQ7O0FBU0EsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0osQ0FBRCxFQUFPO0FBQ3RCRixJQUFBQSxTQUFTLENBQUMsVUFBQ0QsTUFBRDtBQUFBLDZDQUNMQSxNQURLO0FBRVJILFFBQUFBLEtBQUssRUFBRU0sQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxGLGVBUUUsOERBQUMsa0RBQUQ7QUFBTSxvQkFBSSxZQUFLQSx1QkFBTCxnQkFBVjtBQUFBLHVDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFSRixlQVdFLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUksWUFBS0EsdUJBQUwsZ0JBQVY7QUFBQSx1Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQ0YsZUFtR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFva0JILENBN25CRDs7R0FBTXBCOztLQUFBQTtBQStuQk4sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9mb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5jb25zdCBIZWFkZXI9IChwcm9wcykgPT4ge1xyXG4gIFxyXG4gICAgY29uc3QgW2NzRGF0YSwgc2V0Q3NEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIHBob25lOiAnJyxcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBjb21wYW55OiAnJyxcclxuICAgICAgbWVzc2FnZTogJydcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgc2V0TmFtZSA9IChlKSA9PiB7XHJcbiAgICAgIHNldENzRGF0YSgoY3NEYXRhKSA9PiAoe1xyXG4gICAgICAgIC4uLmNzRGF0YSxcclxuICAgICAgICBuYW1lOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICB9KSlcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHNldFBob25lID0gKGUpID0+IHtcclxuICAgICAgc2V0Q3NEYXRhKChjc0RhdGEpID0+ICh7XHJcbiAgICAgICAgLi4uY3NEYXRhLFxyXG4gICAgICAgIHBob25lOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICB9KSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBzZXRFbWFpbCA9IChlKSA9PiB7XHJcbiAgICAgIHNldENzRGF0YSgoY3NEYXRhKSA9PiAoe1xyXG4gICAgICAgIC4uLmNzRGF0YSxcclxuICAgICAgICBlbWFpbDogZS50YXJnZXQudmFsdWVcclxuICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgY29uc3Qgc2V0Q29tcGFueSA9IChlKSA9PiB7XHJcbiAgICAgIHNldENzRGF0YSgoY3NEYXRhKSA9PiAoe1xyXG4gICAgICAgIC4uLmNzRGF0YSxcclxuICAgICAgICBjb21wYW55OiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICB9KSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBzZXRNZXNzYWdlID0gKGUpID0+IHtcclxuICAgICAgc2V0Q3NEYXRhKChjc0RhdGEpID0+ICh7XHJcbiAgICAgICAgLi4uY3NEYXRhLFxyXG4gICAgICAgIG1lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBlbWFpbFNlbmQgPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5vcGVuKGBtYWlsdG86c2FsZXNAZXJhbWl0cmEuY29tP3N1YmplY3Q9UmVhY2ggVXMgRm9ybSZib2R5PU5hbWU6ICR7Y3NEYXRhLm5hbWUgfHwgJyd9ICUwZCUwYVBob25lOiAke2NzRGF0YS5waG9uZSB8fCAnJ30gICUwZCUwYUVtYWlsOiAke2NzRGF0YS5lbWFpbCB8fCAnJ30gJTBkJTBhQ29tcGFueTogJHtjc0RhdGEuY29tcGFueSB8fCAnJ30gJTBkJTBhYCwgJ19ibGFuaycpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlciB1cHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1pbm5lci1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+T1VSIExPQ0FUSU9OPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb24tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyPkhlYWQgT2ZmaWNlIC0gSmFrYXJ0YTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlJ1a28gQnVhcmFuIFBlcnNhZGEgTm8uIDMxIDxicj48L2JyPkpsLiBSLiBTb2VrYW10byBEdXJlbiBTYXdpdCBKYWthcnRhIDEzNDUwLCBJbmRvbmVzaWE8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi10ZXh0XCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5waG9uZTwvc3Bhbj48cD4gKzYyLTIxLTg2NjEyNDU4IChGYXg6ICs2Mi0yMS04NjYxMjM2NSk8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi10ZXh0XCI+PHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5tYWlsX291dGxpbmU8L3NwYW4+PHA+c2FsZXNAZXJhbWl0cmEuY29tPC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvbi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+QnJhbmNoIE9mZmljZSAtIFN1cmFiYXlhPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPHA+SmwuIEtlYm9uIFNhcmkgViBOby4gN0cgLSBTdXJhYmF5YTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXRleHRcIj48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnBob25lPC9zcGFuPjxwPiArNjItMjEtODY2MTI0NTggKEZheDogKzYyLTIxLTg2NjEyMzY1KTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXRleHRcIj48c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm1haWxfb3V0bGluZTwvc3Bhbj48cD5zYWxlc0BlcmFtaXRyYS5jb208L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWNoLXVzXCI+XHJcbiAgICAgICAgICAgICAgICAgPGgyPlJFQUNIIFVTPC9oMj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcmVhY2gtdXNcIj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiBvbkNoYW5nZT17c2V0TmFtZX0gLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcmVhY2gtdXNcIj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlclwiIG9uQ2hhbmdlPXtzZXRQaG9uZX0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yZWFjaC11c1wiPjxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBvbkNoYW5nZT17c2V0RW1haWx9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcmVhY2gtdXNcIj48aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNvbXBhbnlcIiBvbkNoYW5nZT17c2V0Q29tcGFueX0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yZWFjaC11c1wiPjx0ZXh0YXJlYSByb3dzPVwiNVwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiIG9uQ2hhbmdlPXtzZXRNZXNzYWdlfS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuLXN1Ym1pdC1yZWFjaFwiIG9uQ2xpY2s9eygpID0+IGVtYWlsU2VuZCgpfT5TdWJtaXQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZvb3Rlci1zaGFwZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Zvb3Rlci1zaGFwZS5zdmdcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyIGJvdHRvbVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1pbm5lci1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9sb2dvLXdoaXRlLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh5cGVybGluay1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGZvb3Rlci1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5OZXdzbGV0dGVyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLW5ld3NsZXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWxcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuLXN1YnNjcmliZVwiIG9uQ2xpY2s9eygpID0+IHt9fT5TdWJzY3JpYmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDI+Rm9sbG93IFVzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbWVkaWEtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPVwiaHR0cHM6Ly93YS5tZS82MjgxMjM0NTY3ODkwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ28tc29jaWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pY29ucy93aGF0c2FwcC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cImxvZ28tc29jaWFsXCIgc3JjPVwiL3N0YXRpYy9pY29ucy9mYWNlYm9vay5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nby1zb2NpYWxcIiBzcmM9XCIvc3RhdGljL2ljb25zL2xpbmtlZGluLnN2Z1wiIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86c2FsZXNAZXJhbWl0cmEuY29tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyB3aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2VyYS1taXRyYS1wZXJkYW5hXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvLXNvY2lhbFwiIHNyYz1cIi9zdGF0aWMvaWNvbnMvbGlua2VkaW4uc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vZXJhbWl0cmEuaWQ/dXRtX21lZGl1bT1jb3B5X2xpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ28tc29jaWFsXCIgc3JjPVwiL3N0YXRpYy9pY29ucy9pbnN0YWdyYW0uc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBmb290ZXItbGluayBwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5QYWdlPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2Fib3V0LXVzYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+QWJvdXQgVXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2NhcmVlcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkNhcmVlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vY29udGFjdC11c2B9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkNvbnRhY3QgVXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2NvbnRhY3QtdXNgfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5DdXN0b21lciBTZXJ2aWNlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxwPmNvcHlyaWdodDwvcD5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmNvcHlyaWdodDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8cD5mb3J0ZSB0ZWNoIDIwMjE8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgIHtgXHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kZXNrdG9wLW9ubHkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tb2JpbGUtb25seSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDU1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5mb290ZXIuYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzBCOUE3RTtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNzNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmZvb3Rlci51cHBlciB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFQ0VDRUM7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNjM4cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyLXNoYXBlIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5mb290ZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bzsgIFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5mb290ZXItbGluayBoMiB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyLXdyYXBwZXIuYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzBCOUE3RTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyLWlubmVyLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZvb3Rlci1sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJlYWNoLXVzIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDU4N3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZWFjaC11cyBoMiB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5mb3JtLXJlYWNoLXVzIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9ybS1yZWFjaC11cyBpbnB1dCwgLmZvcm0tcmVhY2gtdXMgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2FsaWJyaTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7ICAgIFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMEUwRTBFO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5mb290ZXItY29udGFpbmVyIC5sb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuaHlwZXJsaW5rLWNvbHVtbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnI7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1nYXA6IDMwcHggMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaW5mby13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyLWxpbmsucGFnZSB7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmZvb3Rlci51cHBlciBoMiB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFobnNjaHJpZnQnO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9sbG93LXVzIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JhaG5zY2hyaWZ0JztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5mb290ZXItbGluayBhLCAuZm9vdGVyLWxpbmsgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCYWhuc2NocmlmdCc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4OyAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyLWxpbmsucGFnZSBhIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE4cHg7ICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmxvY2F0aW9uLWdyb3VwIGgyIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubG9jYXRpb24tZ3JvdXAgcCB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jb250YWN0LXVzIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc29jaWFsLW1lZGlhLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNvY2lhbC1tZWRpYS13cmFwcGVyIC5sb2dvLXNvY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5jb3B5cmlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNEI4MzQzO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvcHlyaWdodCBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvcHlyaWdodCBwIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRCODM0MztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0OyAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWF0ZXJpYWwtaWNvbnMud2hpdGUge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5sb2NhdGlvbi1ncm91cCAuaWNvbi10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmxvY2F0aW9uLWdyb3VwIC5pY29uLXRleHQgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmxvY2F0aW9uLWdyb3VwIC5pY29uLXRleHQgcCB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5idG4tc3VibWl0LXJlYWNoIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MjYyNjI7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnRuLXN1YnNjcmliZSB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjI2MjYyO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9ybS1uZXdzbGV0dGVyIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLmZvcm0tbmV3c2xldHRlciBpbnB1dDpmb2N1c3tcclxuICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9ybS1uZXdzbGV0dGVyIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dDpmb2N1c3tcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRleHRhcmVhOmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5sb2dvLXNvY2lhbCB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc29jaWFsLW1lZGlhLXdyYXBwZXIgLm1hdGVyaWFsLWljb25zIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1vYmlsZS1vbmx5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5kZXNrdG9wLW9ubHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzdGF0aWMvaW1hZ2VzL2Zvb3Rlci5wbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1pbm5lci1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXItbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWN0LWZvbGxvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXItY29udGFpbmVyIC5sb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbmZvLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmluZm8td3JhcHBlciBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1saW5rLTEgaDIsIC5mb290ZXItbGluay0yIGgyLCAuY29udGFjdC11cyBoMiwgLmZvbGxvdy11cyBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXItbGluay0xIGEsIC5mb290ZXItbGluay0yIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5oeXBlcmxpbmstY29sdW1uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaHlwZXJsaW5rLWNvbHVtbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1saW5rIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLWxpbmstMiwgLmZvbGxvdy11cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLXNoYXBlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29udGFjdC1mb2xsb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29udGFjdC11cyBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnNvY2lhbC1tZWRpYS13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29weXJpZ2h0IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jb3B5cmlnaHQgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1saW5rLnBhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXIudXBwZXIgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubG9jYXRpb24tZ3JvdXAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubG9jYXRpb24tZ3JvdXAgLmljb24tdGV4dCBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5sb2NhdGlvbi1ncm91cCAuaWNvbi10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAuZm9ybS1yZWFjaC11cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1yZWFjaC11cyBpbnB1dCwgLmZvcm0tcmVhY2gtdXMgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5idG4tc3VibWl0LXJlYWNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucmVhY2gtdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZGVyIiwicHJvcHMiLCJuYW1lIiwicGhvbmUiLCJlbWFpbCIsImNvbXBhbnkiLCJtZXNzYWdlIiwiY3NEYXRhIiwic2V0Q3NEYXRhIiwic2V0TmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFBob25lIiwic2V0RW1haWwiLCJzZXRDb21wYW55Iiwic2V0TWVzc2FnZSIsImVtYWlsU2VuZCIsIndpbmRvdyIsIm9wZW4iLCJwcm9jZXNzIiwiZW52IiwiUk9PVF9ET01BSU4iXSwic291cmNlUm9vdCI6IiJ9
"use strict";
self["webpackHotUpdate_N_E"]("pages/about-us",{

/***/ "./components/category/CategoryMenu.js":
/*!*********************************************!*\
  !*** ./components/category/CategoryMenu.js ***!
  \*********************************************/
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\silvi\\Documents\\eramitra-dev\\components\\category\\CategoryMenu.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var CategoryMenu = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(CategoryMenu, _React$Component);

  var _super = _createSuper(CategoryMenu);

  function CategoryMenu(props) {
    var _this;

    (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, CategoryMenu);

    _this = _super.call(this, props);
    _this.state = {
      activeTab: "brands"
    };
    _this.handleClick = _this.handleClick.bind((0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    return _this;
  }

  (0,C_Users_silvi_Documents_eramitra_dev_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(CategoryMenu, [{
    key: "handleClick",
    value: function handleClick(params) {
      this.setState(function (state) {
        return {
          activeTab: params
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "category-menu",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
            className: "category-menu-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "left-category-menu",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                onMouseOver: function onMouseOver() {
                  return _this2.handleClick("brands");
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
                  className: this.state.activeTab == "brands" ? "category-side-title active" : "category-side-title",
                  children: "Brands"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                onMouseOver: function onMouseOver() {
                  return _this2.handleClick("industry");
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
                  className: this.state.activeTab == "industry" ? "category-side-title active" : "category-side-title",
                  children: "Industry"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                onMouseOver: function onMouseOver() {
                  return _this2.handleClick("application");
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("h3", {
                  className: this.state.activeTab == "application" ? "category-side-title active" : "category-side-title",
                  children: "Application"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
              className: "right-category-menu",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                className: "right-category-inner",
                children: [this.state.activeTab == "brands" && props.brands && props.brands.map(function (brand, idx) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    className: "category-side-name",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                      href: "".concat("http://localhost:3001", "/products/brand/").concat(brand.id),
                      children: brand.name
                    }, idx, false, {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 29
                    }, _this2)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 25
                  }, _this2);
                }), this.state.activeTab == "application" && props.applications && props.applications.map(function (app, idx) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    className: "category-side-name",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                      href: "".concat("http://localhost:3001", "/products/application/").concat(app.id),
                      children: app.name
                    }, idx, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 25
                    }, _this2)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 21
                  }, _this2);
                }), this.state.activeTab == "industry" && props.industries && props.industries.map(function (ind, idx) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
                    className: "category-side-name",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                      href: "".concat("http://localhost:3001", "/products/industry/").concat(ind.id),
                      children: ind.name
                    }, idx, false, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 25
                    }, _this2)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 21
                  }, _this2);
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("style", {
          children: "\n                    .category-menu {\n                        z-index: 10;\n                    }\n\n                    .category-menu .container-inner {\n                        padding: 0px;\n                    }\n\n                    .category-menu-wrapper {\n                        display: flex;\n                        width: 100%;\n                        height: 450px;\n                        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);\n                    }\n\n                    .left-category-menu {\n                        width: 300px;\n                        background: #1BA58A;\n                        padding: 24px;\n                        display: flex;\n                        flex-direction: column;\n                        justify-content: center;\n                    }\n\n                    .right-category-menu {\n                        width: calc(100% - 300px);\n                        background: #FFFFFF;\n                        padding: 24px;\n                    }\n\n                    .right-category-inner {\n                        display: grid;\n                        grid-template-columns: 1fr 1fr 1fr;\n                        max-height: 450px;\n                        overflow-y: auto;\n                    }\n\n                    .category-menu .category-side-title {\n                        font-family: Bahnschrift;\n                        font-style: normal;\n                        font-weight: 600;\n                        font-size: 20px;\n                        line-height: 24px;\n                        color: #FFFFFF;\n                        text-transform: uppercase;\n                        margin: 8px 0 8px 0;\n                        width: fit-content;\n                    }\n\n                    .left-category-menu a {\n                        width: fit-content;\n                    }\n                    .category-menu .category-side-title.active {\n                        color: #FFF502;\n                        cursor: default;\n                    }\n\n                    .category-menu .category-side-name {\n                        font-family: Calibri;\n                        font-style: normal;\n                        font-weight: normal;\n                        font-size: 14px;\n                        line-height: 17px;\n                        text-transform: uppercase;\n                        color: #000000;\n                        max-width: 200px;\n                        padding: 6px 0;\n                    }\n\n                    .category-menu .category-side-name:hover {\n                        color: #1BA58A;\n                    }\n\n\n                @media only screen and (max-width: 800px){\n\n                    .category-menu-wrapper {\n                        width: 100%;\n                        box-shadow: none;\n                        height: calc(100vh - 56px);\n                    }\n\n                    .left-category-menu {\n                        width: 40%;\n                        justify-content: flex-start;\n                    }\n\n                    .right-category-menu {\n                        width: 60%;\n                    }\n\n                    .category-menu .category-side-title {\n                        font-family: Bahnschrift;\n                        font-style: normal;\n                        font-weight: normal;\n                        font-size: 12px;\n                        line-height: 10px;\n                        color: #FFFFFF;\n                        text-transform: uppercase;\n                        margin: 8px 0 8px 0;\n                    }\n\n                    .category-menu .category-side-name {\n                        font-family: Calibri;\n                        font-style: normal;\n                        font-weight: normal;\n                        font-size: 10px;\n                        line-height: 12px;\n                        text-transform: uppercase;\n                        margin: 8px 0 8px 0;\n                    }\n                }\n                "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this);
    }
  }]);

  return CategoryMenu;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (CategoryMenu);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQtdXMuNzgxMzk0MDY2YjFlYWZiMTA5MDcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0lBRU1DOzs7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLFNBQVMsRUFBRTtBQURGLEtBQWI7QUFHQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLG1KQUFuQjtBQUxpQjtBQU1sQjs7OztXQUdELHFCQUFZQyxNQUFaLEVBQW9CO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxVQUFBTCxLQUFLO0FBQUEsZUFBSztBQUN0QkMsVUFBQUEsU0FBUyxFQUFFRztBQURXLFNBQUw7QUFBQSxPQUFuQjtBQUdEOzs7V0FHRCxrQkFBUztBQUFBOztBQUNQLFVBQU1MLEtBQUssR0FBRyxLQUFLQSxLQUFuQjtBQUVBLDBCQUNJO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsaUNBQ0E7QUFBSyxxQkFBUyxFQUFDLHVCQUFmO0FBQUEsb0NBQ0E7QUFBSyx1QkFBUyxFQUFDLG9CQUFmO0FBQUEsc0NBQ0k7QUFDSSwyQkFBVyxFQUFFO0FBQUEseUJBQU0sTUFBSSxDQUFDRyxXQUFMLENBQWlCLFFBQWpCLENBQU47QUFBQSxpQkFEakI7QUFBQSx1Q0FFSTtBQUFJLDJCQUFTLEVBQUUsS0FBS0YsS0FBTCxDQUFXQyxTQUFYLElBQXdCLFFBQXhCLEdBQW1DLDRCQUFuQyxHQUFrRSxxQkFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBUUk7QUFDSSwyQkFBVyxFQUFFO0FBQUEseUJBQU0sTUFBSSxDQUFDQyxXQUFM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Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNsYXNzIENhdGVnb3J5TWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKSBcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgYWN0aXZlVGFiOiBcImJyYW5kc1wiXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG5cclxuICBoYW5kbGVDbGljayhwYXJhbXMpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcclxuICAgICAgYWN0aXZlVGFiOiBwYXJhbXNcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktbWVudVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1pbm5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LW1lbnUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtY2F0ZWdvcnktbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soXCJicmFuZHNcIil9ID4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWN0aXZlVGFiID09IFwiYnJhbmRzXCIgPyBcImNhdGVnb3J5LXNpZGUtdGl0bGUgYWN0aXZlXCIgOiBcImNhdGVnb3J5LXNpZGUtdGl0bGVcIiB9PlxyXG4gICAgICAgICAgICAgICAgICAgIEJyYW5kc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soXCJpbmR1c3RyeVwiKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWN0aXZlVGFiID09IFwiaW5kdXN0cnlcIiA/IFwiY2F0ZWdvcnktc2lkZS10aXRsZSBhY3RpdmVcIiA6IFwiY2F0ZWdvcnktc2lkZS10aXRsZVwiIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEluZHVzdHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhcImFwcGxpY2F0aW9uXCIpfSA+ICBcclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmFjdGl2ZVRhYiA9PSBcImFwcGxpY2F0aW9uXCIgPyBcImNhdGVnb3J5LXNpZGUtdGl0bGUgYWN0aXZlXCIgOiBcImNhdGVnb3J5LXNpZGUtdGl0bGVcIiB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtY2F0ZWdvcnktbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jYXRlZ29yeS1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlVGFiID09IFwiYnJhbmRzXCIgJiYgcHJvcHMuYnJhbmRzICYmIHByb3BzLmJyYW5kcy5tYXAoKGJyYW5kLCBpZHggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LXNpZGUtbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L3Byb2R1Y3RzL2JyYW5kLyR7YnJhbmQuaWR9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHticmFuZC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlVGFiID09IFwiYXBwbGljYXRpb25cIiAmJiBwcm9wcy5hcHBsaWNhdGlvbnMgJiYgcHJvcHMuYXBwbGljYXRpb25zLm1hcCgoYXBwLCBpZHggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktc2lkZS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9wcm9kdWN0cy9hcHBsaWNhdGlvbi8ke2FwcC5pZH1gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcHAubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmVUYWIgPT0gXCJpbmR1c3RyeVwiICYmIHByb3BzLmluZHVzdHJpZXMgJiYgcHJvcHMuaW5kdXN0cmllcy5tYXAoKGluZCwgaWR4ICkgPT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LXNpZGUtbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAgaHJlZj17YCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L3Byb2R1Y3RzL2luZHVzdHJ5LyR7aW5kLmlkfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1tZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnktbWVudSAuY29udGFpbmVyLWlubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5LW1lbnUtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnQtY2F0ZWdvcnktbWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFCQTU4QTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucmlnaHQtY2F0ZWdvcnktbWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucmlnaHQtY2F0ZWdvcnktaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0NTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1tZW51IC5jYXRlZ29yeS1zaWRlLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwIDhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubGVmdC1jYXRlZ29yeS1tZW51IGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1tZW51IC5jYXRlZ29yeS1zaWRlLXRpdGxlLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGNTAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnktbWVudSAuY2F0ZWdvcnktc2lkZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5LW1lbnUgLmNhdGVnb3J5LXNpZGUtbmFtZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMUJBNThBO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1tZW51LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubGVmdC1jYXRlZ29yeS1tZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnJpZ2h0LWNhdGVnb3J5LW1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5LW1lbnUgLmNhdGVnb3J5LXNpZGUtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDAgOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnktbWVudSAuY2F0ZWdvcnktc2lkZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMCA4cHggMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5TWVudSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhdGVnb3J5TWVudSIsInByb3BzIiwic3RhdGUiLCJhY3RpdmVUYWIiLCJoYW5kbGVDbGljayIsImJpbmQiLCJwYXJhbXMiLCJzZXRTdGF0ZSIsImJyYW5kcyIsIm1hcCIsImJyYW5kIiwiaWR4IiwicHJvY2VzcyIsImVudiIsIlJPT1RfRE9NQUlOIiwiaWQiLCJuYW1lIiwiYXBwbGljYXRpb25zIiwiYXBwIiwiaW5kdXN0cmllcyIsImluZCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=
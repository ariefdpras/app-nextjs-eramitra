"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
              children: [this.state.activeTab == "brands" && props.brands && props.brands.map(function (brand, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                  className: "category-side-name",
                  href: "".concat("http://localhost:3001", "/products/brand/").concat(brand.id),
                  children: brand.name
                }, idx, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 25
                }, _this2);
              }), this.state.activeTab == "application" && props.applications && props.applications.map(function (app, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                  className: "category-side-name",
                  href: "".concat("http://localhost:3001", "/products/application/").concat(app.id),
                  children: app.name
                }, idx, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 25
                }, _this2);
              }), this.state.activeTab == "industry" && props.industries && props.industries.map(function (ind, idx) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                  className: "category-side-name",
                  href: "".concat("http://localhost:3001", "/products/industry/").concat(ind.id),
                  children: ind.name
                }, idx, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 25
                }, _this2);
              })]
            }, void 0, true, {
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
          children: "\n                    .category-menu {\n                        z-index: 10;\n                    }\n\n                    .category-menu .container-inner {\n                        padding: 0px;\n                    }\n\n                    .category-menu-wrapper {\n                        display: flex;\n                        width: 100%;\n                        height: 450px;\n                        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);\n                    }\n\n                    .left-category-menu {\n                        width: 300px;\n                        background: #1BA58A;\n                        padding: 24px;\n                        display: flex;\n                        flex-direction: column;\n                        justify-content: center;\n                    }\n\n                    .right-category-menu {\n                        width: calc(100% - 300px);\n                        background: #FFFFFF;\n                        padding: 24px;\n                        display: grid;\n                        grid-template-columns: repeat(3fr, 3fr);\n                    }\n\n                    .category-menu .category-side-title {\n                        font-family: Bahnschrift;\n                        font-style: normal;\n                        font-weight: 600;\n                        font-size: 20px;\n                        line-height: 24px;\n                        color: #FFFFFF;\n                        text-transform: uppercase;\n                        margin: 8px 0 8px 0;\n                        width: fit-content;\n                    }\n\n                    .left-category-menu a {\n                        width: fit-content;\n                    }\n                    .category-menu .category-side-title.active {\n                        color: #FFF502;\n                        cursor: default;\n                    }\n\n                    .category-menu .category-side-name {\n                        font-family: Calibri;\n                        font-style: normal;\n                        font-weight: normal;\n                        font-size: 14px;\n                        line-height: 17px;\n                        text-transform: uppercase;\n                        color: #000000;\n                        max-width: 200px;\n                    }\n\n                    .category-menu .category-side-name:hover {\n                        color: #1BA58A;\n                    }\n\n\n                @media only screen and (max-width: 800px){\n\n                    .category-menu-wrapper {\n                        width: 100%;\n                        box-shadow: none;\n                        height: calc(100vh - 56px);\n                    }\n\n                    .left-category-menu {\n                        width: 40%;\n                        justify-content: flex-start;\n                    }\n\n                    .right-category-menu {\n                        width: 60%;\n                    }\n\n                    .category-menu .category-side-title {\n                        font-family: Bahnschrift;\n                        font-style: normal;\n                        font-weight: normal;\n                        font-size: 12px;\n                        line-height: 10px;\n                        color: #FFFFFF;\n                        text-transform: uppercase;\n                        margin: 8px 0 8px 0;\n                    }\n\n                    .category-menu .category-side-name {\n                        font-family: Calibri;\n                        font-style: normal;\n                        font-weight: normal;\n                        font-size: 10px;\n                        line-height: 12px;\n                        text-transform: uppercase;\n                        margin: 8px 0 8px 0;\n                    }\n                }\n                "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzBlYTRlMDk3Y2EwNDNiYzg2NWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0lBRU1DOzs7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLFNBQVMsRUFBRTtBQURGLEtBQWI7QUFHQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLG1KQUFuQjtBQUxpQjtBQU1sQjs7OztXQUdELHFCQUFZQyxNQUFaLEVBQW9CO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxVQUFBTCxLQUFLO0FBQUEsZUFBSztBQUN0QkMsVUFBQUEsU0FBUyxFQUFFRztBQURXLFNBQUw7QUFBQSxPQUFuQjtBQUdEOzs7V0FHRCxrQkFBUztBQUFBOztBQUNQLFVBQU1MLEtBQUssR0FBRyxLQUFLQSxLQUFuQjtBQUVBLDBCQUNJO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsaUNBQ0E7QUFBSyxxQkFBUyxFQUFDLHVCQUFmO0FBQUEsb0NBQ0E7QUFBSyx1QkFBUyxFQUFDLG9CQUFmO0FBQUEsc0NBQ0k7QUFDSSwyQkFBVyxFQUFFO0FBQUEseUJBQU0sTUFBSSxDQUFDRyxXQUFMLENBQWlCLFFBQWpCLENBQU47QUFBQSxpQkFEakI7QUFBQSx1Q0FFSTtBQUFJLDJCQUFTLEVBQUUsS0FBS0YsS0FBTCxDQUFXQyxTQUFYLElBQXdCLFFBQXhCLEdBQW1DLDRCQUFuQyxHQUFrRSxxQkFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBUUk7QUFDSSwyQkFBVyxFQUFFO0FBQUEseUJBQU0sTUFBSSxDQUFDQyxXQUFMLENBQWlCLFVBQWpCLENBQU47QUFBQSxpQkFEakI7QUFBQSx1Q0FFSTtBQUFJLDJCQUFTLEVBQUUsS0FBS0YsS0FBTCxDQUFXQyxTQUFYLElBQXdCLFVBQXhCLEdBQXFDLDRCQUFyQyxHQUFvRSxxQkFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVJKLGVBZUk7QUFDSSwyQkFBVyxFQUFFO0FBQUEseUJBQU0sTUFBSSxDQUFDQyxXQUFMLENBQWlCLGFBQWpCLENBQU47QUFBQSxpQkFEakI7QUFBQSx1Q0FFSTtBQUFJLDJCQUFTLEVBQUUsS0FBS0YsS0FBTCxDQUFXQyxTQUFYLElBQXdCLGFBQXhCLEdBQXdDLDRCQUF4QyxHQUF1RSxxQkFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEQSxlQXdCQTtBQUFLLHVCQUFTLEVBQUMscUJBQWY7QUFBQSx5QkFFUSxLQUFLRCxLQUFMLENBQVdDLFNBQVgsSUFBd0IsUUFBeEIsSUFBb0NGLEtBQUssQ0FBQ08sTUFBMUMsSUFBb0RQLEtBQUssQ0FBQ08sTUFBTixDQUFhQyxHQUFiLENBQWlCLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLG9DQUNqRTtBQUFHLDJCQUFTLEVBQUMsb0JBQWI7QUFBa0Msc0JBQUksWUFBS0MsdUJBQUwsNkJBQStDRixLQUFLLENBQUNLLEVBQXJELENBQXRDO0FBQUEsNEJBRVNMLEtBQUssQ0FBQ007QUFGZixtQkFDS0wsR0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURpRTtBQUFBLGVBQWpCLENBRjVELEVBV1EsS0FBS1QsS0FBTCxDQUFXQyxTQUFYLElBQXdCLGFBQXhCLElBQXlDRixLQUFLLENBQUNnQixZQUEvQyxJQUErRGhCLEtBQUssQ0FBQ2dCLFlBQU4sQ0FBbUJSLEdBQW5CLENBQXVCLFVBQUNTLEdBQUQsRUFBTVAsR0FBTjtBQUFBLG9DQUNsRjtBQUFHLDJCQUFTLEVBQUMsb0JBQWI7QUFBa0Msc0JBQUksWUFBS0MsdUJBQUwsbUNBQXFETSxHQUFHLENBQUNILEVBQXpELENBQXRDO0FBQUEsNEJBRVNHLEdBQUcsQ0FBQ0Y7QUFGYixtQkFDS0wsR0FETDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURrRjtBQUFBLGVBQXZCLENBWHZFLEVBb0JRLEtBQUtULEtBQUwsQ0FBV0MsU0FBWCxJQUF3QixVQUF4QixJQUFzQ0YsS0FBSyxDQUFDa0IsVUFBNUMsSUFBMERsQixLQUFLLENBQUNrQixVQUFOLENBQWlCVixHQUFqQixDQUFxQixVQUFDVyxHQUFELEVBQU1ULEdBQU47QUFBQSxvQ0FDM0U7QUFBSSwyQkFBUyxFQUFDLG9CQUFkO0FBQW1DLHNCQUFJLFlBQUtDLHVCQUFMLGdDQUFrRFEsR0FBRyxDQUFDTCxFQUF0RCxDQUF2QztBQUFBLDRCQUVTSyxHQUFHLENBQUNKO0FBRmIsbUJBQ0tMLEdBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFEMkU7QUFBQSxlQUFyQixDQXBCbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBd0RJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXhESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQXlLQzs7OztFQTdMc0JaOztBQWdNM0IsK0RBQWVDLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXRlZ29yeS9DYXRlZ29yeU1lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY2xhc3MgQ2F0ZWdvcnlNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpIFxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBhY3RpdmVUYWI6IFwiYnJhbmRzXCJcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIGhhbmRsZUNsaWNrKHBhcmFtcykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xyXG4gICAgICBhY3RpdmVUYWI6IHBhcmFtc1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1tZW51XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWlubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktbWVudS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1jYXRlZ29yeS1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhcImJyYW5kc1wiKX0gPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5hY3RpdmVUYWIgPT0gXCJicmFuZHNcIiA/IFwiY2F0ZWdvcnktc2lkZS10aXRsZSBhY3RpdmVcIiA6IFwiY2F0ZWdvcnktc2lkZS10aXRsZVwiIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgQnJhbmRzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBcclxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gdGhpcy5oYW5kbGVDbGljayhcImluZHVzdHJ5XCIpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5hY3RpdmVUYWIgPT0gXCJpbmR1c3RyeVwiID8gXCJjYXRlZ29yeS1zaWRlLXRpdGxlIGFjdGl2ZVwiIDogXCJjYXRlZ29yeS1zaWRlLXRpdGxlXCIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW5kdXN0cnlcclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxhIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKFwiYXBwbGljYXRpb25cIil9ID4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWN0aXZlVGFiID09IFwiYXBwbGljYXRpb25cIiA/IFwiY2F0ZWdvcnktc2lkZS10aXRsZSBhY3RpdmVcIiA6IFwiY2F0ZWdvcnktc2lkZS10aXRsZVwiIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1jYXRlZ29yeS1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hY3RpdmVUYWIgPT0gXCJicmFuZHNcIiAmJiBwcm9wcy5icmFuZHMgJiYgcHJvcHMuYnJhbmRzLm1hcCgoYnJhbmQsIGlkeCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhdGVnb3J5LXNpZGUtbmFtZVwiIGhyZWY9e2Ake3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9wcm9kdWN0cy9icmFuZC8ke2JyYW5kLmlkfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JyYW5kLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlVGFiID09IFwiYXBwbGljYXRpb25cIiAmJiBwcm9wcy5hcHBsaWNhdGlvbnMgJiYgcHJvcHMuYXBwbGljYXRpb25zLm1hcCgoYXBwLCBpZHggKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXRlZ29yeS1zaWRlLW5hbWVcIiBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vcHJvZHVjdHMvYXBwbGljYXRpb24vJHthcHAuaWR9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YXBwLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlVGFiID09IFwiaW5kdXN0cnlcIiAmJiBwcm9wcy5pbmR1c3RyaWVzICYmIHByb3BzLmluZHVzdHJpZXMubWFwKChpbmQsIGlkeCApID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICBjbGFzc05hbWU9XCJjYXRlZ29yeS1zaWRlLW5hbWVcIiBocmVmPXtgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vcHJvZHVjdHMvaW5kdXN0cnkvJHtpbmQuaWR9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5LW1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1tZW51IC5jb250YWluZXItaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnktbWVudS13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubGVmdC1jYXRlZ29yeS1tZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUJBNThBO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yaWdodC1jYXRlZ29yeS1tZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoM2ZyLCAzZnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5LW1lbnUgLmNhdGVnb3J5LXNpZGUtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDAgOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5sZWZ0LWNhdGVnb3J5LW1lbnUgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5LW1lbnUgLmNhdGVnb3J5LXNpZGUtdGl0bGUuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkY1MDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1tZW51IC5jYXRlZ29yeS1zaWRlLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2FsaWJyaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1tZW51IC5jYXRlZ29yeS1zaWRlLW5hbWU6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFCQTU4QTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2F0ZWdvcnktbWVudS13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnQtY2F0ZWdvcnktbWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yaWdodC1jYXRlZ29yeS1tZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1tZW51IC5jYXRlZ29yeS1zaWRlLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwIDhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGVnb3J5LW1lbnUgLmNhdGVnb3J5LXNpZGUtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDAgOHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeU1lbnUiXSwibmFtZXMiOlsiUmVhY3QiLCJDYXRlZ29yeU1lbnUiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlVGFiIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwicGFyYW1zIiwic2V0U3RhdGUiLCJicmFuZHMiLCJtYXAiLCJicmFuZCIsImlkeCIsInByb2Nlc3MiLCJlbnYiLCJST09UX0RPTUFJTiIsImlkIiwibmFtZSIsImFwcGxpY2F0aW9ucyIsImFwcCIsImluZHVzdHJpZXMiLCJpbmQiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9
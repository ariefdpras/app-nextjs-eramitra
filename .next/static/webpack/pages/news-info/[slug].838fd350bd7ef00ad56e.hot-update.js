"use strict";
self["webpackHotUpdate_N_E"]("pages/news-info/[slug]",{

/***/ "./pages/news-info/[slug].js":
/*!***********************************!*\
  !*** ./pages/news-info/[slug].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var Containers_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Containers/layout */ "./containers/layout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\silvi\\Documents\\eramitra-dev\\pages\\news-info\\[slug].js",
    _this = undefined;




var Articles = function Articles(props) {
  return props.article && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Containers_layout__WEBPACK_IMPORTED_MODULE_0__.default, {
    title: "test",
    applications: props.applications,
    brands: props.brands,
    industries: props.industries,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "header-about",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          className: "green-tetra-img",
          src: "/static/images/green-tetra.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "header-about-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "header-img",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: "http://cdn.eramitra.com/images_article/original/DSC00749.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            className: "section-title",
            children: props.article.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "article-content",
            dangerouslySetInnerHTML: {
              __html: props.description
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("style", {
          children: "\n                .header-about-wrapper {\n                  display: flex;\n                  flex-direction: column;\n                  align-items: center;\n                  margin-top: -250px;\n                  padding-bottom: 78px;\n                }\n\n                .header-img {\n                  width: 566px;\n                  height: 345px;\n                  border-radius: 20px;\n                  margin-bottom: 70px;\n                }\n\n                .header-img img {\n                  object-fit: cover;\n                  width: 566px;\n                  height: 345px;\n                  border-radius: 20px;\n                }\n\n                .header-about .section-title, .header-about .section-description {\n                  text-align: center;\n                  width: 55%;\n                }\n\n\n                @media only screen and (max-width: 800px){\n\n                  .header-about-wrapper {\n                    display: flex;\n                    flex-direction: column;\n                    align-items: center;\n                    margin-top: -50px;\n                    padding-bottom: 30px;\n                  }\n\n                  .header-img {\n                    width: 183px;\n                    height: 111px;\n                    border-radius: 10px;\n                    margin-bottom: 30px;\n                  }\n\n                  .header-img img {\n                    width: 183px;\n                    height: 111px;\n                    border-radius: 10px;\n                  }\n  \n                }\n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("style", {
      children: "\n            .container {\n              width: 100vw;\n              padding: 0;\n            }\n  \n            .container-inner {\n              max-width: 1120px;\n              margin: 0 auto;\n              height: 100%;\n            }\n  \n            .container.banner {\n              background-color: #F5FFEE;\n            }\n\n            .section-title {\n              font-family: Bahnschrift;\n              font-style: normal;\n              font-weight: 600;\n              font-size: 48px;\n              color: #000000;\n              margin: 0 0 24px 0;\n            }\n\n            .section-description {\n              font-family: Calibri;\n              font-style: italic;\n              font-weight: normal;\n              font-size: 20px;\n              line-height: 24px;\n              color: #666A66;\n              margin: 0;\n            }\n\n            .green-tetra-img {\n              width: 100%;\n            }\n\n\n            @media only screen and (max-width: 800px){\n              .section-title {\n                font-family: Bahnschrift;\n                font-style: normal;\n                font-weight: 600;\n                font-size: 18px;\n                line-height: 22px;\n                text-align: center;\n                margin-bottom: 10px;\n              }\n\n              .section-description {\n                font-family: Calibri;\n                font-style: italic;\n                font-weight: normal;\n                font-size: 12px;\n                line-height: 15px;\n                text-align: center;\n                color: #666A66;\n              }\n            }\n          "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }, _this);
};

_c = Articles;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Articles);

var _c;

$RefreshReg$(_c, "Articles");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3cy1pbmZvL1tzbHVnXS44MzhmZDM1MGJkN2VmMDBhZDU2ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUUxQixTQUNFQSxLQUFLLENBQUNDLE9BQU4saUJBQ0UsOERBQUMsc0RBQUQ7QUFDRSxTQUFLLEVBQUMsTUFEUjtBQUVFLGdCQUFZLEVBQUVELEtBQUssQ0FBQ0UsWUFGdEI7QUFHRSxVQUFNLEVBQUVGLEtBQUssQ0FBQ0csTUFIaEI7QUFJRSxjQUFVLEVBQUVILEtBQUssQ0FBQ0ksVUFKcEI7QUFBQSw0QkFLRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBaUMsYUFBRyxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsc0JBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsWUFBZjtBQUFBLG1DQUNFO0FBQUssaUJBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSSxxQkFBUyxFQUFDLGVBQWQ7QUFBQSxzQkFBK0JKLEtBQUssQ0FBQ0MsT0FBTixDQUFjSTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBTUU7QUFBSyxxQkFBUyxFQUFDLGlCQUFmO0FBQWlDLG1DQUF1QixFQUFFO0FBQUNDLGNBQUFBLE1BQU0sRUFBRU4sS0FBSyxDQUFDTztBQUFmO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBMEVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBOElELENBaEpEOztLQUFNUjs7QUFzS04sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy1pbmZvL1tzbHVnXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCJDb250YWluZXJzL2xheW91dFwiO1xyXG5cclxuY29uc3QgQXJ0aWNsZXMgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIHByb3BzLmFydGljbGUgJiYgXHJcbiAgICAgIDxMYXlvdXRcclxuICAgICAgICB0aXRsZT1cInRlc3RcIlxyXG4gICAgICAgIGFwcGxpY2F0aW9ucz17cHJvcHMuYXBwbGljYXRpb25zfVxyXG4gICAgICAgIGJyYW5kcz17cHJvcHMuYnJhbmRzfVxyXG4gICAgICAgIGluZHVzdHJpZXM9e3Byb3BzLmluZHVzdHJpZXN9ID4gICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYWJvdXRcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmVlbi10ZXRyYS1pbWdcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9ncmVlbi10ZXRyYS5zdmdcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1hYm91dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9jZG4uZXJhbWl0cmEuY29tL2ltYWdlc19hcnRpY2xlL29yaWdpbmFsL0RTQzAwNzQ5LmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj57cHJvcHMuYXJ0aWNsZS50aXRsZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtY29udGVudFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwcm9wcy5kZXNjcmlwdGlvbn19PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWFib3V0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3OHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW1nIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDU2NnB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0NXB4O1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW1nIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTY2cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1hYm91dCAuc2VjdGlvbi10aXRsZSwgLmhlYWRlci1hYm91dCAuc2VjdGlvbi1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAuaGVhZGVyLWFib3V0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuaGVhZGVyLWltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuaGVhZGVyLWltZyBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgLmNvbnRhaW5lci1pbm5lciB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIC5jb250YWluZXIuYmFubmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGRkVFO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAyNHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2FsaWJyaTtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjZBNjY7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZ3JlZW4tdGV0cmEtaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgICAgICAgICAgIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuc2VjdGlvbi1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2FsaWJyaTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2QTY2O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHJlcSkge1xyXG5cclxuICBjb25zdCBnZXRCcmFuZHMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vYXBpL2dldEJyYW5kc2ApXHJcbiAgY29uc3QgYnJhbmRzID0gYXdhaXQgZ2V0QnJhbmRzLmpzb24oKVxyXG5cclxuXHJcbiAgY29uc3QgZ2V0SW5kdXN0cnkgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vYXBpL2dldEluZHVzdHJ5YClcclxuICBjb25zdCBpbmR1c3RyaWVzID0gYXdhaXQgZ2V0SW5kdXN0cnkuanNvbigpXHJcblxyXG5cclxuICBjb25zdCBnZXRBcHBsaWNhdGlvbiA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0QXBwbGljYXRpb25gKVxyXG4gIGNvbnN0IGFwcGxpY2F0aW9ucyA9IGF3YWl0IGdldEFwcGxpY2F0aW9uLmpzb24oKVxyXG5cclxuICBcclxuICBjb25zdCBnZXRBcnRpY2xlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2FwaS9nZXRBcnRpY2xlLyR7cmVxLnF1ZXJ5LnNsdWd9YClcclxuICBjb25zdCBhcnRpY2xlID0gYXdhaXQgZ2V0QXJ0aWNsZS5qc29uKClcclxuXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgYXJ0aWNsZTogYXJ0aWNsZSwgYnJhbmRzOiBicmFuZHMsIGluZHVzdHJpZXM6IGluZHVzdHJpZXMsIGFwcGxpY2F0aW9uczogYXBwbGljYXRpb25zIH19XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzO1xyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiQXJ0aWNsZXMiLCJwcm9wcyIsImFydGljbGUiLCJhcHBsaWNhdGlvbnMiLCJicmFuZHMiLCJpbmR1c3RyaWVzIiwidGl0bGUiLCJfX2h0bWwiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=
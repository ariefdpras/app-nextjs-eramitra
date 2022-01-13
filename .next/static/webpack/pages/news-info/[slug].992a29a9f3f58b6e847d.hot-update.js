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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
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
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("style", {
          children: "\n                .header-about-wrapper {\n                  display: flex;\n                  flex-direction: column;\n                  align-items: center;\n                  margin-top: -250px;\n                  padding-bottom: 30px;\n                }\n\n                .header-img {\n                  width: 566px;\n                  height: 345px;\n                  border-radius: 20px;\n                  margin-bottom: 70px;\n                }\n\n                .header-img img {\n                  object-fit: cover;\n                  width: 566px;\n                  height: 345px;\n                  border-radius: 20px;\n                }\n\n                .header-about .section-title, .header-about .section-description {\n                  text-align: center;\n                  width: 55%;\n                }\n\n                .article-content {\n                  margin-bottom: 50px;\n                }\n\n                @media only screen and (max-width: 800px){\n\n                  .header-about-wrapper {\n                    display: flex;\n                    flex-direction: column;\n                    align-items: center;\n                    margin-top: -50px;\n                    padding-bottom: 30px;\n                  }\n\n                  .header-img {\n                    width: 183px;\n                    height: 111px;\n                    border-radius: 10px;\n                    margin-bottom: 30px;\n                  }\n\n                  .header-img img {\n                    width: 183px;\n                    height: 111px;\n                    border-radius: 10px;\n                  }\n  \n                }\n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container-inner",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "article-content",
          dangerouslySetInnerHTML: {
            __html: props.article.content
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("style", {
      children: "\n            .container {\n              width: 100vw;\n              padding: 0;\n            }\n  \n            .container-inner {\n              max-width: 1120px;\n              margin: 0 auto;\n              height: 100%;\n            }\n  \n            .container.banner {\n              background-color: #F5FFEE;\n            }\n\n            .section-title {\n              font-family: Bahnschrift;\n              font-style: normal;\n              font-weight: 600;\n              font-size: 48px;\n              color: #000000;\n              margin: 0 0 24px 0;\n            }\n\n            .section-description {\n              font-family: Calibri;\n              font-style: italic;\n              font-weight: normal;\n              font-size: 20px;\n              line-height: 24px;\n              color: #666A66;\n              margin: 0;\n            }\n\n            .green-tetra-img {\n              width: 100%;\n            }\n\n\n            @media only screen and (max-width: 800px){\n              .section-title {\n                font-family: Bahnschrift;\n                font-style: normal;\n                font-weight: 600;\n                font-size: 18px;\n                line-height: 22px;\n                text-align: center;\n                margin-bottom: 10px;\n              }\n\n              .section-description {\n                font-family: Calibri;\n                font-style: italic;\n                font-weight: normal;\n                font-size: 12px;\n                line-height: 15px;\n                text-align: center;\n                color: #666A66;\n              }\n            }\n          "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3cy1pbmZvL1tzbHVnXS45OTJhMjlhOWYzZjU4YjZlODQ3ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUUxQixTQUNFQSxLQUFLLENBQUNDLE9BQU4saUJBQ0UsOERBQUMsc0RBQUQ7QUFDRSxTQUFLLEVBQUMsTUFEUjtBQUVFLGdCQUFZLEVBQUVELEtBQUssQ0FBQ0UsWUFGdEI7QUFHRSxVQUFNLEVBQUVGLEtBQUssQ0FBQ0csTUFIaEI7QUFJRSxjQUFVLEVBQUVILEtBQUssQ0FBQ0ksVUFKcEI7QUFBQSw0QkFLRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBaUMsYUFBRyxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsc0JBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsWUFBZjtBQUFBLG1DQUNFO0FBQUssaUJBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSSxxQkFBUyxFQUFDLGVBQWQ7QUFBQSxzQkFBK0JKLEtBQUssQ0FBQ0MsT0FBTixDQUFjSTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBc0VFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFpQyxpQ0FBdUIsRUFBRTtBQUFDQyxZQUFBQSxNQUFNLEVBQUVOLEtBQUssQ0FBQ0MsT0FBTixDQUFjTTtBQUF2QjtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQStFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9FRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQW1KRCxDQXJKRDs7S0FBTVI7O0FBMktOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld3MtaW5mby9bc2x1Z10uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQ29udGFpbmVycy9sYXlvdXRcIjtcclxuXHJcbmNvbnN0IEFydGljbGVzID0gKHByb3BzKSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBwcm9wcy5hcnRpY2xlICYmIFxyXG4gICAgICA8TGF5b3V0XHJcbiAgICAgICAgdGl0bGU9XCJ0ZXN0XCJcclxuICAgICAgICBhcHBsaWNhdGlvbnM9e3Byb3BzLmFwcGxpY2F0aW9uc31cclxuICAgICAgICBicmFuZHM9e3Byb3BzLmJyYW5kc31cclxuICAgICAgICBpbmR1c3RyaWVzPXtwcm9wcy5pbmR1c3RyaWVzfSA+ICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWFib3V0XCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZ3JlZW4tdGV0cmEtaW1nXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvZ3JlZW4tdGV0cmEuc3ZnXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYWJvdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vY2RuLmVyYW1pdHJhLmNvbS9pbWFnZXNfYXJ0aWNsZS9vcmlnaW5hbC9EU0MwMDc0OS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+e3Byb3BzLmFydGljbGUudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1hYm91dC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTI1MHB4O1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWltZyB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1NjZweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNDVweDtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWltZyBpbWcge1xyXG4gICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDU2NnB4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0NXB4O1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXItYWJvdXQgLnNlY3Rpb24tdGl0bGUsIC5oZWFkZXItYWJvdXQgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1NSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFydGljbGUtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAuaGVhZGVyLWFib3V0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuaGVhZGVyLWltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4M3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuaGVhZGVyLWltZyBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaW5uZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtY29udGVudFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwcm9wcy5hcnRpY2xlLmNvbnRlbnR9fT48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIC5jb250YWluZXItaW5uZXIge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTEyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAuY29udGFpbmVyLmJhbm5lciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RkZFRTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdDtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjRweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VjdGlvbi1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2QTY2O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmdyZWVuLXRldHJhLWltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAgICAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENhbGlicmk7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY2NkE2NjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhyZXEpIHtcclxuXHJcbiAgY29uc3QgZ2V0QnJhbmRzID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2FwaS9nZXRCcmFuZHNgKVxyXG4gIGNvbnN0IGJyYW5kcyA9IGF3YWl0IGdldEJyYW5kcy5qc29uKClcclxuXHJcblxyXG4gIGNvbnN0IGdldEluZHVzdHJ5ID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2FwaS9nZXRJbmR1c3RyeWApXHJcbiAgY29uc3QgaW5kdXN0cmllcyA9IGF3YWl0IGdldEluZHVzdHJ5Lmpzb24oKVxyXG5cclxuXHJcbiAgY29uc3QgZ2V0QXBwbGljYXRpb24gPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vYXBpL2dldEFwcGxpY2F0aW9uYClcclxuICBjb25zdCBhcHBsaWNhdGlvbnMgPSBhd2FpdCBnZXRBcHBsaWNhdGlvbi5qc29uKClcclxuXHJcbiAgXHJcbiAgY29uc3QgZ2V0QXJ0aWNsZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0QXJ0aWNsZS8ke3JlcS5xdWVyeS5zbHVnfWApXHJcbiAgY29uc3QgYXJ0aWNsZSA9IGF3YWl0IGdldEFydGljbGUuanNvbigpXHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IGFydGljbGU6IGFydGljbGUsIGJyYW5kczogYnJhbmRzLCBpbmR1c3RyaWVzOiBpbmR1c3RyaWVzLCBhcHBsaWNhdGlvbnM6IGFwcGxpY2F0aW9ucyB9fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlcztcclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIkFydGljbGVzIiwicHJvcHMiLCJhcnRpY2xlIiwiYXBwbGljYXRpb25zIiwiYnJhbmRzIiwiaW5kdXN0cmllcyIsInRpdGxlIiwiX19odG1sIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=
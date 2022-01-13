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
              src: props.articles.data[0] ? typeof props.articles.data[0].cover !== "undefined" ? "https://svr.eramitra.com/images/".concat(props.articles.data[0].cover) : "http://cdn.eramitra.com/images_article/original/DSC00749.jpg" : "http://cdn.eramitra.com/images_article/original/DSC00749.jpg"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3cy1pbmZvL1tzbHVnXS4zNzhmNGUxNmIyMjk2ZWRmM2VlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUUxQixTQUNFQSxLQUFLLENBQUNDLE9BQU4saUJBQ0UsOERBQUMsc0RBQUQ7QUFDRSxTQUFLLEVBQUMsTUFEUjtBQUVFLGdCQUFZLEVBQUVELEtBQUssQ0FBQ0UsWUFGdEI7QUFHRSxVQUFNLEVBQUVGLEtBQUssQ0FBQ0csTUFIaEI7QUFJRSxjQUFVLEVBQUVILEtBQUssQ0FBQ0ksVUFKcEI7QUFBQSw0QkFLRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBaUMsYUFBRyxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUMsc0JBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsWUFBZjtBQUFBLG1DQUNFO0FBQUssaUJBQUcsRUFBRUosS0FBSyxDQUFDSyxRQUFOLENBQWVDLElBQWYsQ0FBb0IsQ0FBcEIsSUFBeUIsT0FBT04sS0FBSyxDQUFDSyxRQUFOLENBQWVDLElBQWYsQ0FBb0IsQ0FBcEIsRUFBdUJDLEtBQTlCLEtBQXdDLFdBQXhDLDZDQUF5RlAsS0FBSyxDQUFDSyxRQUFOLENBQWVDLElBQWYsQ0FBb0IsQ0FBcEIsRUFBdUJDLEtBQWhILElBQTBILDhEQUFuSixHQUFvTjtBQUE5TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQUkscUJBQVMsRUFBQyxlQUFkO0FBQUEsc0JBQStCUCxLQUFLLENBQUNDLE9BQU4sQ0FBY087QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQXNFRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBaUMsaUNBQXVCLEVBQUU7QUFBQ0MsWUFBQUEsTUFBTSxFQUFFVCxLQUFLLENBQUNDLE9BQU4sQ0FBY1M7QUFBdkI7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsZUErRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUFtSkQsQ0FySkQ7O0tBQU1YOztBQTJLTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZXdzLWluZm8vW3NsdWddLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIkNvbnRhaW5lcnMvbGF5b3V0XCI7XHJcblxyXG5jb25zdCBBcnRpY2xlcyA9IChwcm9wcykgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgcHJvcHMuYXJ0aWNsZSAmJiBcclxuICAgICAgPExheW91dFxyXG4gICAgICAgIHRpdGxlPVwidGVzdFwiXHJcbiAgICAgICAgYXBwbGljYXRpb25zPXtwcm9wcy5hcHBsaWNhdGlvbnN9XHJcbiAgICAgICAgYnJhbmRzPXtwcm9wcy5icmFuZHN9XHJcbiAgICAgICAgaW5kdXN0cmllcz17cHJvcHMuaW5kdXN0cmllc30gPiAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1hYm91dFwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImdyZWVuLXRldHJhLWltZ1wiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2dyZWVuLXRldHJhLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWFib3V0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbWdcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5hcnRpY2xlcy5kYXRhWzBdID8gdHlwZW9mIHByb3BzLmFydGljbGVzLmRhdGFbMF0uY292ZXIgIT09IFwidW5kZWZpbmVkXCIgPyBgaHR0cHM6Ly9zdnIuZXJhbWl0cmEuY29tL2ltYWdlcy8ke3Byb3BzLmFydGljbGVzLmRhdGFbMF0uY292ZXJ9YCA6IFwiaHR0cDovL2Nkbi5lcmFtaXRyYS5jb20vaW1hZ2VzX2FydGljbGUvb3JpZ2luYWwvRFNDMDA3NDkuanBnXCIgOiBcImh0dHA6Ly9jZG4uZXJhbWl0cmEuY29tL2ltYWdlc19hcnRpY2xlL29yaWdpbmFsL0RTQzAwNzQ5LmpwZ1wiIH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPntwcm9wcy5hcnRpY2xlLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXItYWJvdXQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yNTBweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbWcge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTY2cHg7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbWcgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1NjZweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNDVweDtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWFib3V0IC5zZWN0aW9uLXRpdGxlLCAuaGVhZGVyLWFib3V0IC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hcnRpY2xlLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgLmhlYWRlci1hYm91dC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmhlYWRlci1pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmhlYWRlci1pbWcgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTgzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTFweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWNvbnRlbnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcHJvcHMuYXJ0aWNsZS5jb250ZW50fX0+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAuY29udGFpbmVyLWlubmVyIHtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgLmNvbnRhaW5lci5iYW5uZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUZGRUU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAwIDI0cHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzY2NkE2NjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ncmVlbi10ZXRyYS1pbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAgICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NjZBNjY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMocmVxKSB7XHJcblxyXG4gIGNvbnN0IGdldEJyYW5kcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0QnJhbmRzYClcclxuICBjb25zdCBicmFuZHMgPSBhd2FpdCBnZXRCcmFuZHMuanNvbigpXHJcblxyXG5cclxuICBjb25zdCBnZXRJbmR1c3RyeSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0SW5kdXN0cnlgKVxyXG4gIGNvbnN0IGluZHVzdHJpZXMgPSBhd2FpdCBnZXRJbmR1c3RyeS5qc29uKClcclxuXHJcblxyXG4gIGNvbnN0IGdldEFwcGxpY2F0aW9uID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2FwaS9nZXRBcHBsaWNhdGlvbmApXHJcbiAgY29uc3QgYXBwbGljYXRpb25zID0gYXdhaXQgZ2V0QXBwbGljYXRpb24uanNvbigpXHJcblxyXG4gIFxyXG4gIGNvbnN0IGdldEFydGljbGUgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ST09UX0RPTUFJTn0vYXBpL2dldEFydGljbGUvJHtyZXEucXVlcnkuc2x1Z31gKVxyXG4gIGNvbnN0IGFydGljbGUgPSBhd2FpdCBnZXRBcnRpY2xlLmpzb24oKVxyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBhcnRpY2xlOiBhcnRpY2xlLCBicmFuZHM6IGJyYW5kcywgaW5kdXN0cmllczogaW5kdXN0cmllcywgYXBwbGljYXRpb25zOiBhcHBsaWNhdGlvbnMgfX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXM7XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJBcnRpY2xlcyIsInByb3BzIiwiYXJ0aWNsZSIsImFwcGxpY2F0aW9ucyIsImJyYW5kcyIsImluZHVzdHJpZXMiLCJhcnRpY2xlcyIsImRhdGEiLCJjb3ZlciIsInRpdGxlIiwiX19odG1sIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=
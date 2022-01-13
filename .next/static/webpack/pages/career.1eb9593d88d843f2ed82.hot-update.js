"use strict";
self["webpackHotUpdate_N_E"]("pages/career",{

/***/ "./pages/career.js":
/*!*************************!*\
  !*** ./pages/career.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var _containers_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/layout */ "./containers/layout.js");
/* harmony import */ var _components_card_CareerCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card/CareerCard */ "./components/card/CareerCard.js");
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section */ "./components/section.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\silvi\\Documents\\eramitra-dev\\pages\\career.js",
    _this = undefined;







var Home = function Home(props) {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_containers_layout__WEBPACK_IMPORTED_MODULE_0__.default, {
    title: "Career | PT. Era Mitra Perdana",
    applications: props.applications,
    brands: props.brands,
    industries: props.industries,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.default, {
        element_id: "career",
        background: "#1BA58A",
        height: "351px",
        icon: [{
          image: "career.svg",
          vertical: "bottom",
          horizontal: "left"
        }, {
          image: "shape-3.svg",
          vertical: "top",
          horizontal: "right"
        }],
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "career-wrapper",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "career-description",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                className: "section-title",
                children: "Up for a challenge? Let\u2019s join us!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("style", {
          children: "\n                .career-wrapper {\n                  height: 100%;\n                  display: flex;\n                  align-items: center;\n                  justify-content: center;\n                }\n\n                \n                .career-wrapper .career-description {\n                  display: flex;\n                  align-items: center;\n                }\n\n                .career-wrapper .section-title {\n                  margin: 0;\n                  max-width: 496px;\n                  color: #FFFFFF !important;\n                  font-weight: normal !important;\n                  text-align: center;\n                }\n\n                @media only screen and (max-width: 800px){\n                  .career .icon-shape-0 {\n                    height: 124px;\n                  }\n                  \n                  .career .icon-shape-1 {\n                    display: none;\n                  }\n\n                  .career {\n                    height: 137px !important;\n                  }\n\n                  .career-wrapper .section-title {\n                    font-family: Bahnschrift;\n                    font-size: 14px;\n                    font-style: normal;\n                    font-weight: 400;\n                    line-height: 17px;\n                    letter-spacing: 0em;\n                    text-align: left;\n                    width: 125px;\n\n                  }\n\n                  .career-wrapper {\n                    justify-content: center !important;\n                    padding-left: 50px;\n                  }\n                }\n                \n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_2__.default, {
        element_id: "career-content",
        background: "#FFFFFF",
        icon: [{
          image: "shape-2.svg",
          vertical: "top",
          horizontal: "right"
        }],
        height: "1000px",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "career-card-wrapper",
            children: props.careers && props.careers.map(function (career, idx) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_card_CareerCard__WEBPACK_IMPORTED_MODULE_1__.default, {
                title: career.title,
                description: career.description
              }, idx, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("style", {
          children: "\n                .career-card-wrapper {\n                  margin-top: 50px;\n                  margin-bottom: 100px;\n                }\n\n                @media only screen and (max-width: 800px){\n\n                  .career-content .icon-shape-0 {\n                    display: none;\n                  } \n                  \n                  .career-card-wrapper {\n                      margin-top: 20px !important;\n                      margin-bottom: 40px !important;\n                    }\n                  \n                }\n              "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("style", {
      children: "\n            .container {\n              width: 100vw;\n              padding: 0;\n            }\n  \n            .container-inner {\n              max-width: 1120px;\n              margin: 0 auto;\n              height: 100%;\n            }\n  \n            .container.banner {\n              background-color: #F5FFEE;\n            }\n\n            .section-title {\n              font-family: Bahnschrift;\n              font-style: normal;\n              font-weight: 600;\n              font-size: 48px;\n              color: #000000;\n              margin: 0 0 24px 0;\n            }\n\n            .section-description {\n              font-family: Calibri;\n              font-style: italic;\n              font-weight: normal;\n              font-size: 20px;\n              line-height: 24px;\n              color: #666A66;\n              margin: 0;\n            }\n          "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }, _this);
};

_c = Home;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FyZWVyLjFlYjk1OTNkODhkODQzZjJlZDgyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBRXZCLE1BQU1DLFFBQVEsR0FBRztBQUNoQkMsSUFBQUEsSUFBSSxFQUFFLElBRFU7QUFFaEJDLElBQUFBLE1BQU0sRUFBRSxJQUZRO0FBR2hCQyxJQUFBQSxRQUFRLEVBQUUsSUFITTtBQUloQkMsSUFBQUEsS0FBSyxFQUFFLEdBSlM7QUFLaEJDLElBQUFBLFlBQVksRUFBRSxDQUxFO0FBTWhCQyxJQUFBQSxjQUFjLEVBQUUsQ0FOQTtBQU9kQyxJQUFBQSxhQUFhLEVBQUU7QUFQRCxHQUFqQjtBQVVDLHNCQUNJLDhEQUFDLHVEQUFEO0FBQ0UsU0FBSyxFQUFDLGdDQURSO0FBRUUsZ0JBQVksRUFBRVIsS0FBSyxDQUFDUyxZQUZ0QjtBQUdFLFVBQU0sRUFBRVQsS0FBSyxDQUFDVSxNQUhoQjtBQUlFLGNBQVUsRUFBRVYsS0FBSyxDQUFDVyxVQUpwQjtBQUFBLDRCQUtFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDQSw4REFBQyx3REFBRDtBQUNJLGtCQUFVLEVBQUMsUUFEZjtBQUVJLGtCQUFVLEVBQUMsU0FGZjtBQUdJLGNBQU0sRUFBQyxPQUhYO0FBSUksWUFBSSxFQUFFLENBQ0o7QUFDRUMsVUFBQUEsS0FBSyxFQUFFLFlBRFQ7QUFFRUMsVUFBQUEsUUFBUSxFQUFFLFFBRlo7QUFHRUMsVUFBQUEsVUFBVSxFQUFFO0FBSGQsU0FESSxFQU1KO0FBQ0VGLFVBQUFBLEtBQUssRUFBRSxhQURUO0FBRUVDLFVBQUFBLFFBQVEsRUFBRSxLQUZaO0FBR0VDLFVBQUFBLFVBQVUsRUFBRTtBQUhkLFNBTkksQ0FKVjtBQUFBLGdDQWdCSTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsZ0JBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsb0JBQWY7QUFBQSxxQ0FDRTtBQUFJLHlCQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkosZUF3Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBbUZFLDhEQUFDLHdEQUFEO0FBQ0Usa0JBQVUsRUFBQyxnQkFEYjtBQUVFLGtCQUFVLEVBQUMsU0FGYjtBQUdFLFlBQUksRUFBRSxDQUNKO0FBQ0VGLFVBQUFBLEtBQUssRUFBRSxhQURUO0FBRUVDLFVBQUFBLFFBQVEsRUFBRSxLQUZaO0FBR0VDLFVBQUFBLFVBQVUsRUFBRTtBQUhkLFNBREksQ0FIUjtBQVVFLGNBQU0sRUFBQyxRQVZUO0FBQUEsZ0NBV0U7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLHFCQUFmO0FBQUEsc0JBRUlkLEtBQUssQ0FBQ2UsT0FBTixJQUFpQmYsS0FBSyxDQUFDZSxPQUFOLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsTUFBRCxFQUFTQyxHQUFUO0FBQUEsa0NBQ25DLDhEQUFDLGdFQUFEO0FBQ2EscUJBQUssRUFBRUQsTUFBTSxDQUFDRSxLQUQzQjtBQUNrQywyQkFBVyxFQUFFRixNQUFNLENBQUNHO0FBRHRELGlCQUNRRixHQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRG1DO0FBQUEsYUFBbEI7QUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsZUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5GRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQW1JRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5JRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTJLRCxDQXZMRDs7S0FBTW5COztBQTJNTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYXJlZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29udGFpbmVycy9sYXlvdXRcIjtcclxuaW1wb3J0IENhcmVlckNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZC9DYXJlZXJDYXJkXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25cIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcclxuICBcclxuXHRjb25zdCBzZXR0aW5ncyA9IHtcclxuXHRcdGRvdHM6IHRydWUsXHJcblx0XHRhcnJvd3M6IHRydWUsXHJcblx0XHRpbmZpbml0ZTogdHJ1ZSxcclxuXHRcdHNwZWVkOiA1MDAsXHJcblx0XHRzbGlkZXNUb1Nob3c6IDQsXHJcblx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWVcclxuXHR9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0XHJcbiAgICAgICAgdGl0bGU9XCJDYXJlZXIgfCBQVC4gRXJhIE1pdHJhIFBlcmRhbmFcIlxyXG4gICAgICAgIGFwcGxpY2F0aW9ucz17cHJvcHMuYXBwbGljYXRpb25zfVxyXG4gICAgICAgIGJyYW5kcz17cHJvcHMuYnJhbmRzfVxyXG4gICAgICAgIGluZHVzdHJpZXM9e3Byb3BzLmluZHVzdHJpZXN9PiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8U2VjdGlvbiBcclxuICAgICAgICAgICAgZWxlbWVudF9pZD1cImNhcmVlclwiIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kPVwiIzFCQTU4QVwiICBcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMzUxcHhcIlxyXG4gICAgICAgICAgICBpY29uPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiY2FyZWVyLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IFwiYm90dG9tXCIsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcImxlZnRcIlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwic2hhcGUtMy5zdmdcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdfSAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1pbm5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZWVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZWVyLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+VXAgZm9yIGEgY2hhbGxlbmdlPyBcclxuICAgICAgICAgICAgICAgICAgICBMZXTigJlzIGpvaW4gdXMhPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAuY2FyZWVyLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmNhcmVlci13cmFwcGVyIC5jYXJlZXItZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jYXJlZXItd3JhcHBlciAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0OTZweDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgIC5jYXJlZXIgLmljb24tc2hhcGUtMCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjRweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgLmNhcmVlciAuaWNvbi1zaGFwZS0xIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZWVyIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJlZXItd3JhcHBlciAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmNhcmVlci13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPFNlY3Rpb24gXHJcbiAgICAgICAgICAgIGVsZW1lbnRfaWQ9XCJjYXJlZXItY29udGVudFwiIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kPVwiI0ZGRkZGRlwiIFxyXG4gICAgICAgICAgICBpY29uPXtbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwic2hhcGUtMi5zdmdcIixcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdfSBcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTAwMHB4XCIgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1pbm5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZWVyLWNhcmQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBwcm9wcy5jYXJlZXJzICYmIHByb3BzLmNhcmVlcnMubWFwKChjYXJlZXIsIGlkeCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgIDxDYXJlZXJDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH0gdGl0bGU9e2NhcmVlci50aXRsZX0gZGVzY3JpcHRpb249e2NhcmVlci5kZXNjcmlwdGlvbn0gLz4pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIC5jYXJlZXItY2FyZC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2FyZWVyLWNvbnRlbnQgLmljb24tc2hhcGUtMCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIC5jYXJlZXItY2FyZC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgLmNvbnRhaW5lci1pbm5lciB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIC5jb250YWluZXIuYmFubmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGRkVFO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0O1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMCAyNHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWN0aW9uLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogQ2FsaWJyaTtcclxuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM2NjZBNjY7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgZ2V0Q2FyZWVyID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2FwaS9nZXRDYXJlZXJgKVxyXG4gIGNvbnN0IGNhcmVlcnMgPSBhd2FpdCBnZXRDYXJlZXIuanNvbigpXHJcblxyXG4gIGNvbnN0IGdldEJyYW5kcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0QnJhbmRzYClcclxuICBjb25zdCBicmFuZHMgPSBhd2FpdCBnZXRCcmFuZHMuanNvbigpXHJcblxyXG5cclxuICBjb25zdCBnZXRJbmR1c3RyeSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LlJPT1RfRE9NQUlOfS9hcGkvZ2V0SW5kdXN0cnlgKVxyXG4gIGNvbnN0IGluZHVzdHJpZXMgPSBhd2FpdCBnZXRJbmR1c3RyeS5qc29uKClcclxuXHJcblxyXG4gIGNvbnN0IGdldEFwcGxpY2F0aW9uID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuUk9PVF9ET01BSU59L2FwaS9nZXRBcHBsaWNhdGlvbmApXHJcbiAgY29uc3QgYXBwbGljYXRpb25zID0gYXdhaXQgZ2V0QXBwbGljYXRpb24uanNvbigpXHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IGNhcmVlcnM6IGNhcmVlcnMsIGJyYW5kczogYnJhbmRzLCBpbmR1c3RyaWVzOiBpbmR1c3RyaWVzLCBhcHBsaWNhdGlvbnM6IGFwcGxpY2F0aW9ucyB9fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiQ2FyZWVyQ2FyZCIsIlNlY3Rpb24iLCJTbGlkZXIiLCJIb21lIiwicHJvcHMiLCJzZXR0aW5ncyIsImRvdHMiLCJhcnJvd3MiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJ2YXJpYWJsZVdpZHRoIiwiYXBwbGljYXRpb25zIiwiYnJhbmRzIiwiaW5kdXN0cmllcyIsImltYWdlIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiY2FyZWVycyIsIm1hcCIsImNhcmVlciIsImlkeCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9
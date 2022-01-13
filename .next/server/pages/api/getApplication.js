"use strict";
(() => {
var exports = {};
exports.id = "pages/api/getApplication";
exports.ids = ["pages/api/getApplication"];
exports.modules = {

/***/ "./Lib/middleware.js":
/*!***************************!*\
  !*** ./Lib/middleware.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ runMiddleware)
/* harmony export */ });
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

/***/ }),

/***/ "./pages/api/getApplication/index.js":
/*!*******************************************!*\
  !*** ./pages/api/getApplication/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Lib_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Lib/middleware */ "./Lib/middleware.js");


const cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({
  methods: ['GET']
});

async function handler(req, res) {
  // Run the middleware
  await (0,Lib_middleware__WEBPACK_IMPORTED_MODULE_1__.default)(req, res, cors);

  try {
    const getApplications = await fetch(`https://svr.eramitra.com/application`);
    const data = await getApplications.json();
    res.json(data);
  } catch (err) {
    res.json({
      error: err
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/getApplication/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dldEFwcGxpY2F0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQ0MsRUFBakMsRUFBcUM7QUFDaEQsU0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3BDSCxJQUFBQSxFQUFFLENBQUNGLEdBQUQsRUFBTUMsR0FBTixFQUFZSyxNQUFELElBQVk7QUFDekIsVUFBSUEsTUFBTSxZQUFZQyxLQUF0QixFQUE2QjtBQUN6QixlQUFPRixNQUFNLENBQUNDLE1BQUQsQ0FBYjtBQUNIOztBQUVELGFBQU9GLE9BQU8sQ0FBQ0UsTUFBRCxDQUFkO0FBQ0MsS0FOQyxDQUFGO0FBT0gsR0FSTSxDQUFQO0FBU0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7QUFDQTtBQUVBLE1BQU1HLElBQUksR0FBR0QsMkNBQUksQ0FBQztBQUNkRSxFQUFBQSxPQUFPLEVBQUUsQ0FBQyxLQUFEO0FBREssQ0FBRCxDQUFqQjs7QUFJQSxlQUFlQyxPQUFmLENBQXVCWCxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDN0I7QUFDQSxRQUFNRix1REFBYSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV1EsSUFBWCxDQUFuQjs7QUFDQSxNQUFJO0FBQ0EsVUFBTUcsZUFBZSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxzQ0FBRixDQUFuQztBQUNBLFVBQU1DLElBQUksR0FBRyxNQUFNRixlQUFlLENBQUNHLElBQWhCLEVBQW5CO0FBQ0FkLElBQUFBLEdBQUcsQ0FBQ2MsSUFBSixDQUFTRCxJQUFUO0FBQ0gsR0FKRCxDQUlFLE9BQU9FLEdBQVAsRUFBWTtBQUNWZixJQUFBQSxHQUFHLENBQUNjLElBQUosQ0FBUztBQUFFRSxNQUFBQSxLQUFLLEVBQUVEO0FBQVQsS0FBVDtBQUNIO0FBQ0o7O0FBRUQsaUVBQWVMLE9BQWY7Ozs7Ozs7Ozs7QUNuQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbXAtcHJvamVjdC8uL0xpYi9taWRkbGV3YXJlLmpzIiwid2VicGFjazovL2VtcC1wcm9qZWN0Ly4vcGFnZXMvYXBpL2dldEFwcGxpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2VtcC1wcm9qZWN0L2V4dGVybmFsIFwiY29yc1wiIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBIZWxwZXIgbWV0aG9kIHRvIHdhaXQgZm9yIGEgbWlkZGxld2FyZSB0byBleGVjdXRlIGJlZm9yZSBjb250aW51aW5nXHJcbi8vIEFuZCB0byB0aHJvdyBhbiBlcnJvciB3aGVuIGFuIGVycm9yIGhhcHBlbnMgaW4gYSBtaWRkbGV3YXJlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBmbikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBmbihyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG4iLCJpbXBvcnQgQ29ycyBmcm9tICdjb3JzJ1xyXG5pbXBvcnQgcnVuTWlkZGxld2FyZSBmcm9tICdMaWIvbWlkZGxld2FyZSdcclxuXHJcbmNvbnN0IGNvcnMgPSBDb3JzKHtcclxuICAgIG1ldGhvZHM6IFsnR0VUJ10sXHJcbn0pXHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICAvLyBSdW4gdGhlIG1pZGRsZXdhcmVcclxuICAgIGF3YWl0IHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGNvcnMpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGdldEFwcGxpY2F0aW9ucyA9IGF3YWl0IGZldGNoKGBodHRwczovL3N2ci5lcmFtaXRyYS5jb20vYXBwbGljYXRpb25gKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRBcHBsaWNhdGlvbnMuanNvbigpXHJcbiAgICAgICAgcmVzLmpzb24oZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3I6IGVyciB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiXSwibmFtZXMiOlsicnVuTWlkZGxld2FyZSIsInJlcSIsInJlcyIsImZuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsIkNvcnMiLCJjb3JzIiwibWV0aG9kcyIsImhhbmRsZXIiLCJnZXRBcHBsaWNhdGlvbnMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZXJyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9
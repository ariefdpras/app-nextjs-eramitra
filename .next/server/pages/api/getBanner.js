"use strict";
(() => {
var exports = {};
exports.id = "pages/api/getBanner";
exports.ids = ["pages/api/getBanner"];
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

/***/ "./pages/api/getBanner/index.js":
/*!**************************************!*\
  !*** ./pages/api/getBanner/index.js ***!
  \**************************************/
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
    const getBrands = await fetch(`https://svr.eramitra.com/banner?status=active`);
    const data = await getBrands.json();
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/getBanner/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dldEJhbm5lci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUNDLEVBQWpDLEVBQXFDO0FBQ2hELFNBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUNwQ0gsSUFBQUEsRUFBRSxDQUFDRixHQUFELEVBQU1DLEdBQU4sRUFBWUssTUFBRCxJQUFZO0FBQ3pCLFVBQUlBLE1BQU0sWUFBWUMsS0FBdEIsRUFBNkI7QUFDekIsZUFBT0YsTUFBTSxDQUFDQyxNQUFELENBQWI7QUFDSDs7QUFFRCxhQUFPRixPQUFPLENBQUNFLE1BQUQsQ0FBZDtBQUNDLEtBTkMsQ0FBRjtBQU9ILEdBUk0sQ0FBUDtBQVNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2REO0FBQ0E7QUFFQSxNQUFNRyxJQUFJLEdBQUdELDJDQUFJLENBQUM7QUFDZEUsRUFBQUEsT0FBTyxFQUFFLENBQUMsS0FBRDtBQURLLENBQUQsQ0FBakI7O0FBSUEsZUFBZUMsT0FBZixDQUF1QlgsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzdCO0FBQ0EsUUFBTUYsdURBQWEsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdRLElBQVgsQ0FBbkI7O0FBQ0EsTUFBSTtBQUNBLFVBQU1HLFNBQVMsR0FBRyxNQUFNQyxLQUFLLENBQUUsK0NBQUYsQ0FBN0I7QUFDQSxVQUFNQyxJQUFJLEdBQUcsTUFBTUYsU0FBUyxDQUFDRyxJQUFWLEVBQW5CO0FBQ0FkLElBQUFBLEdBQUcsQ0FBQ2MsSUFBSixDQUFTRCxJQUFUO0FBQ0gsR0FKRCxDQUlFLE9BQU9FLEdBQVAsRUFBWTtBQUNWZixJQUFBQSxHQUFHLENBQUNjLElBQUosQ0FBUztBQUFFRSxNQUFBQSxLQUFLLEVBQUVEO0FBQVQsS0FBVDtBQUNIO0FBQ0o7O0FBRUQsaUVBQWVMLE9BQWY7Ozs7Ozs7Ozs7QUNuQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbXAtcHJvamVjdC8uL0xpYi9taWRkbGV3YXJlLmpzIiwid2VicGFjazovL2VtcC1wcm9qZWN0Ly4vcGFnZXMvYXBpL2dldEJhbm5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9lbXAtcHJvamVjdC9leHRlcm5hbCBcImNvcnNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gSGVscGVyIG1ldGhvZCB0byB3YWl0IGZvciBhIG1pZGRsZXdhcmUgdG8gZXhlY3V0ZSBiZWZvcmUgY29udGludWluZ1xyXG4vLyBBbmQgdG8gdGhyb3cgYW4gZXJyb3Igd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluIGEgbWlkZGxld2FyZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcnVuTWlkZGxld2FyZShyZXEsIHJlcywgZm4pIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZm4ocmVxLCByZXMsIChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuIiwiaW1wb3J0IENvcnMgZnJvbSAnY29ycydcclxuaW1wb3J0IHJ1bk1pZGRsZXdhcmUgZnJvbSAnTGliL21pZGRsZXdhcmUnXHJcblxyXG5jb25zdCBjb3JzID0gQ29ycyh7XHJcbiAgICBtZXRob2RzOiBbJ0dFVCddLFxyXG59KVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgLy8gUnVuIHRoZSBtaWRkbGV3YXJlXHJcbiAgICBhd2FpdCBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBjb3JzKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBnZXRCcmFuZHMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9zdnIuZXJhbWl0cmEuY29tL2Jhbm5lcj9zdGF0dXM9YWN0aXZlYClcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QnJhbmRzLmpzb24oKVxyXG4gICAgICAgIHJlcy5qc29uKGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXMuanNvbih7IGVycm9yOiBlcnIgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlciIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7Il0sIm5hbWVzIjpbInJ1bk1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJmbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiLCJDb3JzIiwiY29ycyIsIm1ldGhvZHMiLCJoYW5kbGVyIiwiZ2V0QnJhbmRzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==
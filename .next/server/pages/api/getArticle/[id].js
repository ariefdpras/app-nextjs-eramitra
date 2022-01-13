"use strict";
(() => {
var exports = {};
exports.id = "pages/api/getArticle/[id]";
exports.ids = ["pages/api/getArticle/[id]"];
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

/***/ "./pages/api/getArticle/[id].js":
/*!**************************************!*\
  !*** ./pages/api/getArticle/[id].js ***!
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
    const getArticle = await fetch(`https://svr.eramitra.com/article/${req.query.id}`);
    const data = await getArticle.json();
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/getArticle/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dldEFydGljbGUvW2lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFZSxTQUFTQSxhQUFULENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUNDLEVBQWpDLEVBQXFDO0FBQ2hELFNBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUNwQ0gsSUFBQUEsRUFBRSxDQUFDRixHQUFELEVBQU1DLEdBQU4sRUFBWUssTUFBRCxJQUFZO0FBQ3pCLFVBQUlBLE1BQU0sWUFBWUMsS0FBdEIsRUFBNkI7QUFDekIsZUFBT0YsTUFBTSxDQUFDQyxNQUFELENBQWI7QUFDSDs7QUFFRCxhQUFPRixPQUFPLENBQUNFLE1BQUQsQ0FBZDtBQUNDLEtBTkMsQ0FBRjtBQU9ILEdBUk0sQ0FBUDtBQVNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2REO0FBQ0E7QUFFQSxNQUFNRyxJQUFJLEdBQUdELDJDQUFJLENBQUM7QUFDZEUsRUFBQUEsT0FBTyxFQUFFLENBQUMsS0FBRDtBQURLLENBQUQsQ0FBakI7O0FBSUEsZUFBZUMsT0FBZixDQUF1QlgsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzdCO0FBQ0EsUUFBTUYsdURBQWEsQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdRLElBQVgsQ0FBbkI7O0FBQ0EsTUFBSTtBQUNBLFVBQU1HLFVBQVUsR0FBRyxNQUFNQyxLQUFLLENBQUUsb0NBQW1DYixHQUFHLENBQUNjLEtBQUosQ0FBVUMsRUFBRyxFQUFsRCxDQUE5QjtBQUNBLFVBQU1DLElBQUksR0FBRyxNQUFNSixVQUFVLENBQUNLLElBQVgsRUFBbkI7QUFDQWhCLElBQUFBLEdBQUcsQ0FBQ2dCLElBQUosQ0FBU0QsSUFBVDtBQUNILEdBSkQsQ0FJRSxPQUFPRSxHQUFQLEVBQVk7QUFDVmpCLElBQUFBLEdBQUcsQ0FBQ2dCLElBQUosQ0FBUztBQUFFRSxNQUFBQSxLQUFLLEVBQUVEO0FBQVQsS0FBVDtBQUNIO0FBQ0o7O0FBRUQsaUVBQWVQLE9BQWY7Ozs7Ozs7Ozs7QUNuQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbXAtcHJvamVjdC8uL0xpYi9taWRkbGV3YXJlLmpzIiwid2VicGFjazovL2VtcC1wcm9qZWN0Ly4vcGFnZXMvYXBpL2dldEFydGljbGUvW2lkXS5qcyIsIndlYnBhY2s6Ly9lbXAtcHJvamVjdC9leHRlcm5hbCBcImNvcnNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gSGVscGVyIG1ldGhvZCB0byB3YWl0IGZvciBhIG1pZGRsZXdhcmUgdG8gZXhlY3V0ZSBiZWZvcmUgY29udGludWluZ1xyXG4vLyBBbmQgdG8gdGhyb3cgYW4gZXJyb3Igd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluIGEgbWlkZGxld2FyZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcnVuTWlkZGxld2FyZShyZXEsIHJlcywgZm4pIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZm4ocmVxLCByZXMsIChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuIiwiaW1wb3J0IENvcnMgZnJvbSAnY29ycydcclxuaW1wb3J0IHJ1bk1pZGRsZXdhcmUgZnJvbSAnTGliL21pZGRsZXdhcmUnXHJcblxyXG5jb25zdCBjb3JzID0gQ29ycyh7XHJcbiAgICBtZXRob2RzOiBbJ0dFVCddLFxyXG59KVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgLy8gUnVuIHRoZSBtaWRkbGV3YXJlXHJcbiAgICBhd2FpdCBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBjb3JzKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBnZXRBcnRpY2xlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vc3ZyLmVyYW1pdHJhLmNvbS9hcnRpY2xlLyR7cmVxLnF1ZXJ5LmlkfWApXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEFydGljbGUuanNvbigpXHJcbiAgICAgICAgcmVzLmpzb24oZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3I6IGVyciB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiXSwibmFtZXMiOlsicnVuTWlkZGxld2FyZSIsInJlcSIsInJlcyIsImZuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsIkNvcnMiLCJjb3JzIiwibWV0aG9kcyIsImhhbmRsZXIiLCJnZXRBcnRpY2xlIiwiZmV0Y2giLCJxdWVyeSIsImlkIiwiZGF0YSIsImpzb24iLCJlcnIiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=
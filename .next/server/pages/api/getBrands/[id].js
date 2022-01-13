"use strict";
(() => {
var exports = {};
exports.id = "pages/api/getBrands/[id]";
exports.ids = ["pages/api/getBrands/[id]"];
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

/***/ "./pages/api/getBrands/[id].js":
/*!*************************************!*\
  !*** ./pages/api/getBrands/[id].js ***!
  \*************************************/
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
    const getBrand = await fetch(`https://svr.eramitra.com/brand/${req.query.id}`);
    const data = await getBrand.json();
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/getBrands/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dldEJyYW5kcy9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQ0MsRUFBakMsRUFBcUM7QUFDaEQsU0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3BDSCxJQUFBQSxFQUFFLENBQUNGLEdBQUQsRUFBTUMsR0FBTixFQUFZSyxNQUFELElBQVk7QUFDekIsVUFBSUEsTUFBTSxZQUFZQyxLQUF0QixFQUE2QjtBQUN6QixlQUFPRixNQUFNLENBQUNDLE1BQUQsQ0FBYjtBQUNIOztBQUVELGFBQU9GLE9BQU8sQ0FBQ0UsTUFBRCxDQUFkO0FBQ0MsS0FOQyxDQUFGO0FBT0gsR0FSTSxDQUFQO0FBU0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7QUFDQTtBQUVBLE1BQU1HLElBQUksR0FBR0QsMkNBQUksQ0FBQztBQUNkRSxFQUFBQSxPQUFPLEVBQUUsQ0FBQyxLQUFEO0FBREssQ0FBRCxDQUFqQjs7QUFJQSxlQUFlQyxPQUFmLENBQXVCWCxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDN0I7QUFDQSxRQUFNRix1REFBYSxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV1EsSUFBWCxDQUFuQjs7QUFDQSxNQUFJO0FBQ0EsVUFBTUcsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSxrQ0FBaUNiLEdBQUcsQ0FBQ2MsS0FBSixDQUFVQyxFQUFHLEVBQWhELENBQTVCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBVCxFQUFuQjtBQUNBaEIsSUFBQUEsR0FBRyxDQUFDZ0IsSUFBSixDQUFTRCxJQUFUO0FBQ0gsR0FKRCxDQUlFLE9BQU9FLEdBQVAsRUFBWTtBQUNWakIsSUFBQUEsR0FBRyxDQUFDZ0IsSUFBSixDQUFTO0FBQUVFLE1BQUFBLEtBQUssRUFBRUQ7QUFBVCxLQUFUO0FBQ0g7QUFDSjs7QUFFRCxpRUFBZVAsT0FBZjs7Ozs7Ozs7OztBQ25CQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VtcC1wcm9qZWN0Ly4vTGliL21pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vZW1wLXByb2plY3QvLi9wYWdlcy9hcGkvZ2V0QnJhbmRzL1tpZF0uanMiLCJ3ZWJwYWNrOi8vZW1wLXByb2plY3QvZXh0ZXJuYWwgXCJjb3JzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIEhlbHBlciBtZXRob2QgdG8gd2FpdCBmb3IgYSBtaWRkbGV3YXJlIHRvIGV4ZWN1dGUgYmVmb3JlIGNvbnRpbnVpbmdcclxuLy8gQW5kIHRvIHRocm93IGFuIGVycm9yIHdoZW4gYW4gZXJyb3IgaGFwcGVucyBpbiBhIG1pZGRsZXdhcmVcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGZuKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGZuKHJlcSwgcmVzLCAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzdWx0KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcbiIsImltcG9ydCBDb3JzIGZyb20gJ2NvcnMnXHJcbmltcG9ydCBydW5NaWRkbGV3YXJlIGZyb20gJ0xpYi9taWRkbGV3YXJlJ1xyXG5cclxuY29uc3QgY29ycyA9IENvcnMoe1xyXG4gICAgbWV0aG9kczogWydHRVQnXSxcclxufSlcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIC8vIFJ1biB0aGUgbWlkZGxld2FyZVxyXG4gICAgYXdhaXQgcnVuTWlkZGxld2FyZShyZXEsIHJlcywgY29ycylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZ2V0QnJhbmQgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9zdnIuZXJhbWl0cmEuY29tL2JyYW5kLyR7cmVxLnF1ZXJ5LmlkfWApXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEJyYW5kLmpzb24oKVxyXG4gICAgICAgIHJlcy5qc29uKGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXMuanNvbih7IGVycm9yOiBlcnIgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlciIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7Il0sIm5hbWVzIjpbInJ1bk1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJmbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0IiwiRXJyb3IiLCJDb3JzIiwiY29ycyIsIm1ldGhvZHMiLCJoYW5kbGVyIiwiZ2V0QnJhbmQiLCJmZXRjaCIsInF1ZXJ5IiwiaWQiLCJkYXRhIiwianNvbiIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==
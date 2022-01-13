"use strict";
(() => {
var exports = {};
exports.id = "pages/api/getArticle";
exports.ids = ["pages/api/getArticle"];
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

/***/ "./pages/api/getArticle/index.js":
/*!***************************************!*\
  !*** ./pages/api/getArticle/index.js ***!
  \***************************************/
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
    const getArticles = await fetch(`https://svr.eramitra.com/article?status=active`);
    const data = await getArticles.json();
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/getArticle/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dldEFydGljbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDQyxFQUFqQyxFQUFxQztBQUNoRCxTQUFPLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDcENILElBQUFBLEVBQUUsQ0FBQ0YsR0FBRCxFQUFNQyxHQUFOLEVBQVlLLE1BQUQsSUFBWTtBQUN6QixVQUFJQSxNQUFNLFlBQVlDLEtBQXRCLEVBQTZCO0FBQ3pCLGVBQU9GLE1BQU0sQ0FBQ0MsTUFBRCxDQUFiO0FBQ0g7O0FBRUQsYUFBT0YsT0FBTyxDQUFDRSxNQUFELENBQWQ7QUFDQyxLQU5DLENBQUY7QUFPSCxHQVJNLENBQVA7QUFTSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUNBO0FBRUEsTUFBTUcsSUFBSSxHQUFHRCwyQ0FBSSxDQUFDO0FBQ2RFLEVBQUFBLE9BQU8sRUFBRSxDQUFDLEtBQUQ7QUFESyxDQUFELENBQWpCOztBQUlBLGVBQWVDLE9BQWYsQ0FBdUJYLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM3QjtBQUNBLFFBQU1GLHVEQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXUSxJQUFYLENBQW5COztBQUNBLE1BQUk7QUFDQSxVQUFNRyxXQUFXLEdBQUcsTUFBTUMsS0FBSyxDQUFFLGdEQUFGLENBQS9CO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLE1BQU1GLFdBQVcsQ0FBQ0csSUFBWixFQUFuQjtBQUNBZCxJQUFBQSxHQUFHLENBQUNjLElBQUosQ0FBU0QsSUFBVDtBQUNILEdBSkQsQ0FJRSxPQUFPRSxHQUFQLEVBQVk7QUFDVmYsSUFBQUEsR0FBRyxDQUFDYyxJQUFKLENBQVM7QUFBRUUsTUFBQUEsS0FBSyxFQUFFRDtBQUFULEtBQVQ7QUFDSDtBQUNKOztBQUVELGlFQUFlTCxPQUFmOzs7Ozs7Ozs7O0FDbkJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1wLXByb2plY3QvLi9MaWIvbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly9lbXAtcHJvamVjdC8uL3BhZ2VzL2FwaS9nZXRBcnRpY2xlL2luZGV4LmpzIiwid2VicGFjazovL2VtcC1wcm9qZWN0L2V4dGVybmFsIFwiY29yc1wiIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBIZWxwZXIgbWV0aG9kIHRvIHdhaXQgZm9yIGEgbWlkZGxld2FyZSB0byBleGVjdXRlIGJlZm9yZSBjb250aW51aW5nXHJcbi8vIEFuZCB0byB0aHJvdyBhbiBlcnJvciB3aGVuIGFuIGVycm9yIGhhcHBlbnMgaW4gYSBtaWRkbGV3YXJlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBmbikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBmbihyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG4iLCJpbXBvcnQgQ29ycyBmcm9tICdjb3JzJ1xyXG5pbXBvcnQgcnVuTWlkZGxld2FyZSBmcm9tICdMaWIvbWlkZGxld2FyZSdcclxuXHJcbmNvbnN0IGNvcnMgPSBDb3JzKHtcclxuICAgIG1ldGhvZHM6IFsnR0VUJ10sXHJcbn0pXHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICAvLyBSdW4gdGhlIG1pZGRsZXdhcmVcclxuICAgIGF3YWl0IHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGNvcnMpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGdldEFydGljbGVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vc3ZyLmVyYW1pdHJhLmNvbS9hcnRpY2xlP3N0YXR1cz1hY3RpdmVgKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRBcnRpY2xlcy5qc29uKClcclxuICAgICAgICByZXMuanNvbihkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmVzLmpzb24oeyBlcnJvcjogZXJyIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyJdLCJuYW1lcyI6WyJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiQ29ycyIsImNvcnMiLCJtZXRob2RzIiwiaGFuZGxlciIsImdldEFydGljbGVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==
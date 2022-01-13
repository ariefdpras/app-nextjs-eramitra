"use strict";
(() => {
var exports = {};
exports.id = "pages/api/getIndustry/[id]";
exports.ids = ["pages/api/getIndustry/[id]"];
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

/***/ "./pages/api/getIndustry/[id].js":
/*!***************************************!*\
  !*** ./pages/api/getIndustry/[id].js ***!
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
    const getIndustry = await fetch(`https://svr.eramitra.com/industry/${req.query.id}`);
    const data = await getIndustry.json();
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/getIndustry/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dldEluZHVzdHJ5L1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDQyxFQUFqQyxFQUFxQztBQUNoRCxTQUFPLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDcENILElBQUFBLEVBQUUsQ0FBQ0YsR0FBRCxFQUFNQyxHQUFOLEVBQVlLLE1BQUQsSUFBWTtBQUN6QixVQUFJQSxNQUFNLFlBQVlDLEtBQXRCLEVBQTZCO0FBQ3pCLGVBQU9GLE1BQU0sQ0FBQ0MsTUFBRCxDQUFiO0FBQ0g7O0FBRUQsYUFBT0YsT0FBTyxDQUFDRSxNQUFELENBQWQ7QUFDQyxLQU5DLENBQUY7QUFPSCxHQVJNLENBQVA7QUFTSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUNBO0FBRUEsTUFBTUcsSUFBSSxHQUFHRCwyQ0FBSSxDQUFDO0FBQ2RFLEVBQUFBLE9BQU8sRUFBRSxDQUFDLEtBQUQ7QUFESyxDQUFELENBQWpCOztBQUlBLGVBQWVDLE9BQWYsQ0FBdUJYLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM3QjtBQUNBLFFBQU1GLHVEQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXUSxJQUFYLENBQW5COztBQUNBLE1BQUk7QUFDQSxVQUFNRyxXQUFXLEdBQUcsTUFBTUMsS0FBSyxDQUFFLHFDQUFvQ2IsR0FBRyxDQUFDYyxLQUFKLENBQVVDLEVBQUcsRUFBbkQsQ0FBL0I7QUFDQSxVQUFNQyxJQUFJLEdBQUcsTUFBTUosV0FBVyxDQUFDSyxJQUFaLEVBQW5CO0FBQ0FoQixJQUFBQSxHQUFHLENBQUNnQixJQUFKLENBQVNELElBQVQ7QUFDSCxHQUpELENBSUUsT0FBT0UsR0FBUCxFQUFZO0FBQ1ZqQixJQUFBQSxHQUFHLENBQUNnQixJQUFKLENBQVM7QUFBRUUsTUFBQUEsS0FBSyxFQUFFRDtBQUFULEtBQVQ7QUFDSDtBQUNKOztBQUVELGlFQUFlUCxPQUFmOzs7Ozs7Ozs7O0FDbkJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1wLXByb2plY3QvLi9MaWIvbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly9lbXAtcHJvamVjdC8uL3BhZ2VzL2FwaS9nZXRJbmR1c3RyeS9baWRdLmpzIiwid2VicGFjazovL2VtcC1wcm9qZWN0L2V4dGVybmFsIFwiY29yc1wiIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBIZWxwZXIgbWV0aG9kIHRvIHdhaXQgZm9yIGEgbWlkZGxld2FyZSB0byBleGVjdXRlIGJlZm9yZSBjb250aW51aW5nXHJcbi8vIEFuZCB0byB0aHJvdyBhbiBlcnJvciB3aGVuIGFuIGVycm9yIGhhcHBlbnMgaW4gYSBtaWRkbGV3YXJlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBmbikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBmbihyZXEsIHJlcywgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3VsdClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG4iLCJpbXBvcnQgQ29ycyBmcm9tICdjb3JzJ1xyXG5pbXBvcnQgcnVuTWlkZGxld2FyZSBmcm9tICdMaWIvbWlkZGxld2FyZSdcclxuXHJcbmNvbnN0IGNvcnMgPSBDb3JzKHtcclxuICAgIG1ldGhvZHM6IFsnR0VUJ10sXHJcbn0pXHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICAvLyBSdW4gdGhlIG1pZGRsZXdhcmVcclxuICAgIGF3YWl0IHJ1bk1pZGRsZXdhcmUocmVxLCByZXMsIGNvcnMpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGdldEluZHVzdHJ5ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vc3ZyLmVyYW1pdHJhLmNvbS9pbmR1c3RyeS8ke3JlcS5xdWVyeS5pZH1gKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRJbmR1c3RyeS5qc29uKClcclxuICAgICAgICByZXMuanNvbihkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmVzLmpzb24oeyBlcnJvcjogZXJyIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyJdLCJuYW1lcyI6WyJydW5NaWRkbGV3YXJlIiwicmVxIiwicmVzIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIiwiQ29ycyIsImNvcnMiLCJtZXRob2RzIiwiaGFuZGxlciIsImdldEluZHVzdHJ5IiwiZmV0Y2giLCJxdWVyeSIsImlkIiwiZGF0YSIsImpzb24iLCJlcnIiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
(() => {
var exports = {};
exports.id = "pages/api/getProduct";
exports.ids = ["pages/api/getProduct"];
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

/***/ "./pages/api/getProduct/index.js":
/*!***************************************!*\
  !*** ./pages/api/getProduct/index.js ***!
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
    const getProducts = await fetch(`https://svr.eramitra.com/product?status=active&brand=${req.query.brand ? req.query.brand : ""}&industry=${req.query.industry ? req.query.industry : ""}&application=${req.query.application ? req.query.application : ""}`);
    const data = await getProducts.json();
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/getProduct/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dldFByb2R1Y3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDQyxFQUFqQyxFQUFxQztBQUNoRCxTQUFPLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDcENILElBQUFBLEVBQUUsQ0FBQ0YsR0FBRCxFQUFNQyxHQUFOLEVBQVlLLE1BQUQsSUFBWTtBQUN6QixVQUFJQSxNQUFNLFlBQVlDLEtBQXRCLEVBQTZCO0FBQ3pCLGVBQU9GLE1BQU0sQ0FBQ0MsTUFBRCxDQUFiO0FBQ0g7O0FBRUQsYUFBT0YsT0FBTyxDQUFDRSxNQUFELENBQWQ7QUFDQyxLQU5DLENBQUY7QUFPSCxHQVJNLENBQVA7QUFTSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUNBO0FBRUEsTUFBTUcsSUFBSSxHQUFHRCwyQ0FBSSxDQUFDO0FBQ2RFLEVBQUFBLE9BQU8sRUFBRSxDQUFDLEtBQUQ7QUFESyxDQUFELENBQWpCOztBQUlBLGVBQWVDLE9BQWYsQ0FBdUJYLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM3QjtBQUNBLFFBQU1GLHVEQUFhLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXUSxJQUFYLENBQW5COztBQUNBLE1BQUk7QUFDQSxVQUFNRyxXQUFXLEdBQUcsTUFBTUMsS0FBSyxDQUFFLHdEQUF1RGIsR0FBRyxDQUFDYyxLQUFKLENBQVVDLEtBQVYsR0FBa0JmLEdBQUcsQ0FBQ2MsS0FBSixDQUFVQyxLQUE1QixHQUFvQyxFQUFHLGFBQVlmLEdBQUcsQ0FBQ2MsS0FBSixDQUFVRSxRQUFWLEdBQXFCaEIsR0FBRyxDQUFDYyxLQUFKLENBQVVFLFFBQS9CLEdBQTBDLEVBQUcsZ0JBQWVoQixHQUFHLENBQUNjLEtBQUosQ0FBVUcsV0FBVixHQUF3QmpCLEdBQUcsQ0FBQ2MsS0FBSixDQUFVRyxXQUFsQyxHQUFnRCxFQUFHLEVBQTNOLENBQS9CO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLE1BQU1OLFdBQVcsQ0FBQ08sSUFBWixFQUFuQjtBQUNBbEIsSUFBQUEsR0FBRyxDQUFDa0IsSUFBSixDQUFTRCxJQUFUO0FBQ0gsR0FKRCxDQUlFLE9BQU9FLEdBQVAsRUFBWTtBQUNWbkIsSUFBQUEsR0FBRyxDQUFDa0IsSUFBSixDQUFTO0FBQUVFLE1BQUFBLEtBQUssRUFBRUQ7QUFBVCxLQUFUO0FBQ0g7QUFDSjs7QUFFRCxpRUFBZVQsT0FBZjs7Ozs7Ozs7OztBQ25CQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VtcC1wcm9qZWN0Ly4vTGliL21pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vZW1wLXByb2plY3QvLi9wYWdlcy9hcGkvZ2V0UHJvZHVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9lbXAtcHJvamVjdC9leHRlcm5hbCBcImNvcnNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gSGVscGVyIG1ldGhvZCB0byB3YWl0IGZvciBhIG1pZGRsZXdhcmUgdG8gZXhlY3V0ZSBiZWZvcmUgY29udGludWluZ1xyXG4vLyBBbmQgdG8gdGhyb3cgYW4gZXJyb3Igd2hlbiBhbiBlcnJvciBoYXBwZW5zIGluIGEgbWlkZGxld2FyZVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcnVuTWlkZGxld2FyZShyZXEsIHJlcywgZm4pIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZm4ocmVxLCByZXMsIChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChyZXN1bHQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHQpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuIiwiaW1wb3J0IENvcnMgZnJvbSAnY29ycydcclxuaW1wb3J0IHJ1bk1pZGRsZXdhcmUgZnJvbSAnTGliL21pZGRsZXdhcmUnXHJcblxyXG5jb25zdCBjb3JzID0gQ29ycyh7XHJcbiAgICBtZXRob2RzOiBbJ0dFVCddLFxyXG59KVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgLy8gUnVuIHRoZSBtaWRkbGV3YXJlXHJcbiAgICBhd2FpdCBydW5NaWRkbGV3YXJlKHJlcSwgcmVzLCBjb3JzKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBnZXRQcm9kdWN0cyA9IGF3YWl0IGZldGNoKGBodHRwczovL3N2ci5lcmFtaXRyYS5jb20vcHJvZHVjdD9zdGF0dXM9YWN0aXZlJmJyYW5kPSR7cmVxLnF1ZXJ5LmJyYW5kID8gcmVxLnF1ZXJ5LmJyYW5kIDogXCJcIn0maW5kdXN0cnk9JHtyZXEucXVlcnkuaW5kdXN0cnkgPyByZXEucXVlcnkuaW5kdXN0cnkgOiBcIlwifSZhcHBsaWNhdGlvbj0ke3JlcS5xdWVyeS5hcHBsaWNhdGlvbiA/IHJlcS5xdWVyeS5hcHBsaWNhdGlvbiA6IFwiXCJ9YClcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UHJvZHVjdHMuanNvbigpXHJcbiAgICAgICAgcmVzLmpzb24oZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3I6IGVyciB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiXSwibmFtZXMiOlsicnVuTWlkZGxld2FyZSIsInJlcSIsInJlcyIsImZuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXN1bHQiLCJFcnJvciIsIkNvcnMiLCJjb3JzIiwibWV0aG9kcyIsImhhbmRsZXIiLCJnZXRQcm9kdWN0cyIsImZldGNoIiwicXVlcnkiLCJicmFuZCIsImluZHVzdHJ5IiwiYXBwbGljYXRpb24iLCJkYXRhIiwianNvbiIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==
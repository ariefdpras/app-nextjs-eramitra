"use strict";
(() => {
var exports = {};
exports.id = 915;
exports.ids = [915];
exports.modules = {

/***/ 8060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Containers_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9861);
/* harmony import */ var Components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2641);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2820);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(479);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9080);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Home = props => {
  const {
    0: cart,
    1: setCart
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const {
    0: activeTab,
    1: setActiveTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: activeImage,
    1: setActiveImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.detail.Pictures && props.detail.Pictures[0].name);
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const breadcrumbs = [{
    title: "Products",
    url: "https://staging.eramitra.com" + "/products/"
  }, {
    title: props.detail.name,
    url: "http://google.com"
  }];
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  const addCart = () => {
    if (value > 0) {
      let data = {
        product: props.detail,
        value: value
      };
      let tempCart, tempCartIdx, tempCartItem;

      if (cart.length > 0) {
        tempCart = cart;
        tempCartIdx = tempCart.findIndex(cart => cart.product.id == props.detail.id);

        if (tempCartIdx > -1) {
          tempCartItem = tempCart[tempCartIdx];
          tempCartItem.value = tempCartItem.value + value;
        } else {
          tempCart = cart;
          tempCart.push(data);
        }

        setCart(tempCart);
        localStorage.setItem("cart", JSON.stringify(tempCart));
        alert("Successfully add to cart!");
      } else {
        tempCart = cart;
        tempCart.push(data);
        setCart(tempCart);
        localStorage.setItem("cart", JSON.stringify(tempCart));
        alert("Successfully add to cart!");
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Containers_layout__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    title: `${props.detail.name} | PT. Era Mitra Perdana`,
    applications: props.applications,
    brands: props.brands,
    industries: props.industries,
    cart: cart,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "container-inner",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: "breadcrumb-wrapper",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
            breadcrumbs: breadcrumbs,
            url: "https://staging.eramitra.com"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "product-detail-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "left-product",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("img", {
              className: "image-big",
              src: `https://svr.eramitra.com/images/${activeImage}`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: "product-image-slider",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_5___default()), _objectSpread(_objectSpread({}, settings), {}, {
                children: props.detail.Pictures && props.detail.Pictures.map((product, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("a", {
                  className: activeIndex == idx ? `product-image active` : `product-image`,
                  onClick: () => {
                    setActiveIndex(idx);
                    setActiveImage(product.name);
                  },
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                    className: `product-image-content-${idx}`
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("style", {
                    children: `

                                .product-image-slider {
                                  padding: 20px;
                                  margin: 0 20px;
                                }

                                .product-image{
                                  width: 80px;
                                  height: 80px;
                                  margin: 0 5px;
                                  cursor: pointer;
                                }

                                .active .product-image-content-${idx}{
                                  border: 1px solid #1BA58A;
                                }

                                .product-image-content-${idx} {
                                  background: url(https://svr.eramitra.com/images/${product.name});
                                  width: 80px;
                                  height: 80px;
                                  background-size: cover;
                                }

                                .slick-prev:before {
                                  font-family: 'Bahnschrift';
                                  content: '<';
                                  color: black;
                                  font-size: 20px;
                                }
                                
                                .slick-next:before {
                                  font-family: 'Bahnschrift';
                                  content: ">";
                                  color: black;
                                  font-size: 20px;
                                }

                                .product-image-slider .slick-next {
                                  right: -20px;
                                }

                                .product-image-slider .slick-prev {
                                  left: -20px;
                                  z-index: 5;
                                }

                                @media only screen and (max-width: 800px){
                                  .product-image{
                                    width: 100px;
                                    height: 100px;
                                  }
                                  .product-image-content-${idx} {
                                
                                    width: 100px;
                                    height: 100px;
                                  }
            
                                }
                                `
                  })]
                }, idx))
              }))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "right-product",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "product-detail",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h6", {
                className: "product-brand",
                children: props.detail.Brand && props.detail.Brand.name
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h4", {
                className: "product-name",
                children: props.detail.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
                className: "product-category",
                children: [props.detail.Application && props.detail.Application.name, " ", props.detail.Application && props.detail.Industry && ' - ', " ", props.detail.Industry && props.detail.Industry.name]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "price-wrapper",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h6", {
                  className: "product-price",
                  children: (0,Helpers_utils__WEBPACK_IMPORTED_MODULE_3__/* .number */ .Rx)(props.detail.price)
                }), props.detail.price == 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h6", {
                  className: "product-warning",
                  children: "CONTACT US FOR MORE DETAIL"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "cart-product-wrapper",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "product-counter",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                    className: value == 0 && "disable",
                    onClick: () => setValue(value - 1),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                      className: "btn-counter",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                        className: "material-icons",
                        children: "remove"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                    children: value
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                    onClick: () => setValue(value + 1),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                      className: "btn-counter",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                        className: "material-icons",
                        children: "add"
                      })
                    })
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                  onClick: () => addCart(),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                    className: "btn-add",
                    children: "Add to cart"
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "product-descriptions",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h6", {
                children: "Description"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                dangerouslySetInnerHTML: {
                  __html: props.detail.description
                }
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("style", {
        children: `
                .product-detail-container {
                    display: flex;
                }

                .left-product {
                    width: 420px;
                    margin-right: 54px;
                }

                .left-product .image-big {
                  width: 420px;
                  height: 420px;
                  object-fit: cover;
                }

                .right-product {
                    width: calc(100% - 420px);
                    margin-bottom: 80px;
                }

                .right-product .product-descriptions h6 {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 20px;
                  line-height: 24px;
                  padding-bottom: 21px;
                  margin: 0;
                  border-bottom: 1px solid #3F3D56;
                  color: #1BA58A;
                  text-transform: uppercase;
                }

                .right-product .product-category {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 16px;
                  line-height: 19px;
                  margin: 0 0 8px 0;
                  color: #1BA58A;
                  text-transform: uppercase;
                }

                .right-product .product-name {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 24px;
                  line-height: 29px;
                  margin: 0 0 10px 0;
                  color: #000000;
                }

                .right-product .product-brand {
                  font-family: Calibri;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 20px;
                  font-weight: 600;
                  line-height: 24px;

                  color: #000000;
                  margin: 0 0 10px 0;
                  text-transform: uppercase;
                }

                .right-product .price-wrapper {
                  margin-bottom: 24px;
                }

                .right-product .product-price {
                  font-family: Bahnschrift;
                  font-size: 24px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 29px;
                  letter-spacing: 0em;
                  text-align: left;
                  margin: 0;
                }

                .right-product .product-warning {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 22px;        
                  color: #FF0303;
                  margin: 13px 0 0 0;
                }

                .right-product .product-descriptions p {
                  font-family: Calibri;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 16px;
                  line-height: 20px;
                  margin-bottom: 0;
                  word-break: break-word;
                }

                .cart-product-wrapper {
                  margin-bottom: 60px;
                  display: flex;
                }

                .product-counter {
                  display: flex;
                  align-items: center;
                }

                .product-counter .disable {
                  pointer-events: none;
                  opacity: 0.3;
                }

                .product-counter p {
                  margin: 0 18px;
                  font-family: Bahnschrift;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 22px;
                  letter-spacing: 0em;
                  text-align: center;
                  width: 30px;
                }

                .btn-counter {
                  border: 1px solid #040404;
                  border-radius: 10px;
                  width: fit-content;
                  padding: 3px 3px 0 3px;
                  cursor: pointer;
                }

                .btn-add {
                  font-family: Bahnschrift;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: 0em;
                  text-align: left;
                  cursor: pointer;
                  padding: 6px 25px;
                  color: #FFFFFF;
                  background: #1BA58A;
                  border-radius: 20px;
                  cursor: pointer;
                  text-align: center;
                  text-transform: uppercase;
                  width: 100%;
                  margin-left: 30px;
              }

              .product-descriptions ul, .product-descriptions ol {
                margin-left: -20px !important;
              }

                @media only screen and (max-width: 800px){
               
                  .product-detail-container {
                    flex-direction: column;
                  }

                  .left-product  {
                    width: 100%;
                    margin-right: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 40px;
                  }

                  .left-product .image-big {
                    width: 265px;
                    height: 265px;
                  }

                  .right-product {
                    width: 100%;
                  }

                  .right-product .product-name {
                    margin: 0 0 5px 0;
                  }

                  .right-product .price-wrapper {
                    margin-bottom: 16px !important;
                  }

                  .cart-product-wrapper {
                    margin-bottom: 30px;
                  }
                }
              `
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("style", {
      children: `
            .container {
              width: 100vw;
              padding: 0;
            }
  
            .container-inner {
              max-width: 1120px;
              margin: 0 auto;
              height: 100%;
            }
  
            .container.banner {
              background-color: #F5FFEE;
            }

            .section-title {
              font-family: Bahnschrift;
              font-style: normal;
              font-weight: 600;
              font-size: 48px;
              color: #000000;
              margin: 0 0 24px 0;
            }

            .section-title-underline {
                font-family: Bahnschrift;
                font-style: normal;
                font-weight: normal;
                font-size: 48px;
                line-height: 58px;
                color: #000000;
                width: fit-content;
            }

            .section-title-underline:after {
                content: "";
                display: block;
                width: calc(100% - 50px);
                padding-top: 5px;
                margin-left: 3px;
                border-bottom: 3px solid #1BA58A;
            }

            .section-description {
              font-family: Calibri;
              font-style: italic;
              font-weight: normal;
              font-size: 20px;
              line-height: 24px;
              color: #666A66;
              margin: 0;
            }
          `
    })]
  });
};

async function getServerSideProps(req) {
  const getBrands = await fetch(`${"https://staging.eramitra.com"}/api/getBrands`);
  const brands = await getBrands.json();
  const getIndustry = await fetch(`${"https://staging.eramitra.com"}/api/getIndustry`);
  const industries = await getIndustry.json();
  const getApplication = await fetch(`${"https://staging.eramitra.com"}/api/getApplication`);
  const applications = await getApplication.json();
  const getProduct = await fetch(`${"https://staging.eramitra.com"}/api/getProduct/${req.query.slug}`);
  const product = await getProduct.json();
  return {
    props: {
      detail: product,
      brands: brands,
      industries: industries,
      applications: applications
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 479:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9080:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3289:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,862,641], () => (__webpack_exec__(8060)));
module.exports = __webpack_exports__;

})();
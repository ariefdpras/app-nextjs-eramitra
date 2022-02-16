"use strict";
(() => {
var exports = {};
exports.id = 222;
exports.ids = [222];
exports.modules = {

/***/ 9170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _containers_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Components_cart_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8838);
/* harmony import */ var Helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2820);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Home = props => {
  const {
    0: cart,
    1: setCart
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.cart);
  const {
    0: csData,
    1: setCsData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });
  const {
    0: total,
    1: setTotal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (cart) {
      let currentTotal = 0;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.price) {
          currentTotal = currentTotal + cart[i].product.price;
        } else {
          setTotal(0);
          break;
        }
      }

      if (currentTotal) {
        setTotal(currentTotal);
      }
    }
  }, [cart]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  });

  const setName = e => {
    setCsData(csData => _objectSpread(_objectSpread({}, csData), {}, {
      name: e.target.value
    }));
  };

  const setPhone = e => {
    setCsData(csData => _objectSpread(_objectSpread({}, csData), {}, {
      phone: e.target.value
    }));
  };

  const setEmail = e => {
    setCsData(csData => _objectSpread(_objectSpread({}, csData), {}, {
      email: e.target.value
    }));
  };

  const setCompany = e => {
    setCsData(csData => _objectSpread(_objectSpread({}, csData), {}, {
      company: e.target.value
    }));
  };

  const setMessage = e => {
    setCsData(csData => _objectSpread(_objectSpread({}, csData), {}, {
      message: e.target.value
    }));
  };

  const setAddress = e => {
    setCsData(csData => _objectSpread(_objectSpread({}, csData), {}, {
      address: e.target.value
    }));
  };

  const setMinus = id => {
    let carts = cart;
    let tempCart = carts[id];
    tempCart.value = tempCart.value - 1;

    if (tempCart.value == 0) {
      carts.splice(id, 1);
    }

    setCart(carts);
    localStorage.setItem("cart", JSON.stringify(carts));
  };

  const setPlus = id => {
    let carts = cart;
    let tempCart = carts[id];
    tempCart.value = tempCart.value + 1;
    setCart(carts);
    localStorage.setItem("cart", JSON.stringify(carts));
  };

  const emailSend = () => {
    let data = "";
    let tempCart = cart;

    for (var i = 0; i < tempCart.length; i++) {
      data = data.concat("%0d%0a - " + cart[i].product.name + "- x " + cart[i].value);
    }

    window.open(`mailto:sales@eramitra.com?subject=Reach Us Form&body=Name: ${csData.name || ''} %0d%0aPhone: ${csData.phone || ''}  %0d%0aEmail: ${csData.email || ''} %0d%0aCompany: ${csData.company || ''}%0d%0aAddres: ${csData.address || ''} %0d%0aMessage: ${csData.message || ''} %0d%0aCart: ${data || ''}`, '_blank');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_containers_layout__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    title: "Checkout Page | PT. Era Mitra Perdana",
    applications: props.applications,
    brands: props.brands,
    industries: props.industries,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: "container checkout",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container-inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "checkout-menu",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: "left-checkout",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "checkout-menu-wrapper",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
                className: "checkout-title",
                children: "Your Order"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "checkout-detail-wrapper",
                children: cart && cart.map((item, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "product-cart-wrapper",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Components_cart_Product__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
                    picture: item.product.img,
                    category: `${item.product.Application.name}`,
                    brand: item.product.Brand.name,
                    name: item.product.name,
                    price: item.product.price
                  }, idx), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: "cart-product-wrapper",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: "product-counter",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                        className: item.value == 0 && "disable",
                        onClick: () => setMinus(idx),
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                          className: "btn-counter",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                            className: "material-icons",
                            children: "remove"
                          })
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                        children: item.value
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                        onClick: () => setPlus(idx),
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                          className: "btn-counter",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                            className: "material-icons",
                            children: "add"
                          })
                        })
                      })]
                    })
                  })]
                }, idx))
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                className: "cart-total-wrapper",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "cart-total",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h6", {
                    children: "Total"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h6", {
                    children: total == 0 ? "CONTACT US" : (0,Helpers_utils__WEBPACK_IMPORTED_MODULE_3__/* .number */ .Rx)(total)
                  })]
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "right-checkout",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h4", {
              children: "Contact Information"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "checkout-contact-wrapper",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h6", {
                  children: "Name"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
                  type: "text",
                  onChange: setName
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "form-group half",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h6", {
                  children: "Email"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
                  type: "text",
                  onChange: setEmail
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "form-group half",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h6", {
                  children: "Phone"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
                  type: "text",
                  onChange: setPhone
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h6", {
                  children: "Company (optional)"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
                  type: "text",
                  onChange: setCompany
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h6", {
                  children: "Address"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
                  type: "text",
                  onChange: setAddress
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h6", {
                children: "Notes"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("textarea", {
                rows: "5",
                placeholder: "Message",
                onChange: setMessage
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                className: "btn-submit",
                onClick: () => emailSend(),
                children: "Submit"
              })]
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("style", {
          children: `
                            .checkout {
                                background: #FAFAFA;
                            }

                            .checkout-menu {
                                display: flex;
                                justify-content: space-between;
                                margin: 50px 0;
                            }

                            .left-checkout {
                                width: 400px;
                            }

                            .right-checkout {
                                width: calc(100% - 450px);
                                padding: 40px;
                                background: #FFFFFF;
                                border-radius: 20px;
                                height: fit-content;
                            }
                            
                            .checkout-contact-wrapper {
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: space-between;
                                width: 100%;
                            }

                            .checkout-menu-wrapper {
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                width: 400px;
                                padding: 40px;
                                background: #FFFFFF;
                                border-radius: 20px;
                            }

                            .checkout-title {
                                font-family: Bahnschrift;
                                font-size: 20px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 24px;
                                letter-spacing: 0em;
                                text-align: center;
                                padding-bottom: 25px;
                                margin: 0 0 18px 0;
                                border-bottom: 1px solid #000000;
                                text-transform: uppercase;
                            }

                            .checkout-total-wrapper {
                                width: 100%;
                                display: flex;
                                flex-direction: column;
                            }

                            .checkout-detail-wrapper {
                                display: flex;
                                flex-direction: column;
                                min-height: 250px;
                            }

                            .checkout-total {
                                display: flex;
                                justify-content: space-between;
                                border-top: 1px solid #000000;
                                padding-top: 20px;
                                margin-bottom: 35px;
                            }

                            .checkout-total h6 {
                                font-family: Bahnschrift;
                                font-size: 18px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 22px;
                                letter-spacing: 0em;
                                text-align: left;
                                margin: 0;
                                color: #1BA58A;
                            }

                            .checkout-menu .btn-submit {
                                font-family: Bahnschrift;
                                font-size: 18px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 22px;
                                letter-spacing: 0em;
                                padding: 10px 25px;
                                color: #FFFFFF;
                                background: #1BA58A;
                                border-radius: 10px;
                                cursor: pointer;
                                text-align: center;
                                text-transform: uppercase;
                                width: 100%;
                                margin-top: 20px;
                            }

                            .checkout-menu .product-cart-wrapper {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                margin-bottom: 24px;
                            }

                            .checkout-menu .cart-product-wrapper {
                                margin-bottom: 0 !important;
                                margin-right: 5px;
                            }


                        .checkout-detail-wrapper .cart-product-wrapper {
                            margin-bottom: 60px;
                            display: flex;
                        }
        
                        .checkout-detail-wrapper .product-counter {
                            display: flex;
                            align-items: center;
                        }
        
                        .checkout-detail-wrapper .product-counter .disable {
                            pointer-events: none;
                            opacity: 0.3;
                        }
        
                        .checkout-detail-wrapper .product-counter p {
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


                    .checkout-menu .cart-total-wrapper {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                    }

                    .checkout-menu .cart-total {
                        display: flex;
                        justify-content: space-between;
                        border-top: 1px solid #000000;
                        padding-top: 20px;
                        margin-bottom: 35px;
                    }

                    .checkout-menu .cart-total h6 {
                        font-family: Bahnschrift;
                        font-size: 18px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 22px;
                        letter-spacing: 0em;
                        text-align: left;
                        margin: 0;
                        color: #1BA58A;
                    }

                    .right-checkout h4 {
                        font-family: Bahnschrift;
                        font-size: 32px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 38px;
                        letter-spacing: 0em;
                        text-align: center;
                        margin: 0 0 40px 0;
                    }

                    .right-checkout h6 {
                        font-family: Bahnschrift;
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 24px;
                        letter-spacing: 0em;
                        text-align: left;
                        margin: 0 0 10px 0;

                    }

                    .right-checkout input {
                        border: 1px solid #DFE3E8;
                        padding: 5px 10px;
                        border-radius: 3px;
                        font-family: Bahnschrift;
                        width: 100%;
                        margin-bottom: 25px;
                    }

                    .right-checkout .form-group{
                        width: 100%;
                    }


                    .right-checkout .form-group.half {
                        width: 48%;
                    }


                    .right-checkout textarea {
                        border: 1px solid #DFE3E8;
                        padding: 5px 10px;
                        border-radius: 3px;
                        font-family: Bahnschrift;
                        width: 100%;
                    }

                        @media only screen and (max-width: 800px){
                            .checkout-menu {
                                flex-direction: column;
                            }

                            .right-checkout {
                                width: 100%;
                            }
                            .checkout-menu-wrapper {
                                width: 85vw;
                            }

                            .checkout-title {
                                padding-bottom: 12px;
                                font-family: Bahnschrift;
                                font-size: 14px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 17px;
                                letter-spacing: 0em;
                                text-align: center;
                            }

                            .checkout-total {
                                margin-bottom: 12px !important;
                                padding-top: 12px !important;
                            }

                            .checkout-total h6 {
                                font-family: Bahnschrift;
                                font-size: 14px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 17px;
                                letter-spacing: 0em;
                                text-align: left;
                            }

                            .btn-checkout {
                                font-family: Bahnschrift;
                                font-size: 12px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 14px;
                                letter-spacing: 0em;
                                text-align: center;
                                width: 100%;
                                
                            }
                        }
                        `
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("style", {
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

async function getServerSideProps() {
  const getBrands = await fetch(`${"http://localhost:3001"}/api/getBrands`);
  const brands = await getBrands.json();
  const getIndustry = await fetch(`${"http://localhost:3001"}/api/getIndustry`);
  const industries = await getIndustry.json();
  const getApplication = await fetch(`${"http://localhost:3001"}/api/getApplication`);
  const applications = await getApplication.json();
  return {
    props: {
      brands: brands,
      industries: industries,
      applications: applications
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,862], () => (__webpack_exec__(9170)));
module.exports = __webpack_exports__;

})();
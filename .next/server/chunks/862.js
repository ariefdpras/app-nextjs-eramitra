exports.id = 862;
exports.ids = [862];
exports.modules = {

/***/ 8838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2820);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





class ProductCardCart extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "product-cart",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "product-picture-wrapper",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
          className: "product-picture",
          src: props.picture
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "product-description",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
          className: "product-category",
          children: props.brand
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h6", {
          className: "product-name",
          children: [props.name, " "]
        }), props.price == 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
          className: "product-warning",
          children: "Contact us"
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
          className: "product-price",
          children: (0,Helpers_utils__WEBPACK_IMPORTED_MODULE_1__/* .number */ .Rx)(props.price)
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("style", {
        children: `
                    .product-cart {
                        display: flex;
                    }

                    .product-cart .product-picture-wrapper {
                        width: 60px;
                        height: 60px;
                        border-radius: 20px 20px 0 0;
                    }

                    .product-cart .product-picture {
                        width: 60px;
                        height: 60px;
                        object-fit: cover;
                    }

                    .product-cart .product-description {
                        margin-left: 10px;
                    }

                    .product-cart .product-category {
                        font-family: Calibri;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 8px;
                        line-height: 10px;
                        color: #1BA58A;
                        margin: 0 0 5px 0;
                    }

                    .product-cart .product-name {
                        font-family: Bahnschrift;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 14px;
                        color: #000000;
                        margin: 0 0 5px 0;
                    }

                    .product-cart .product-price {
                        font-family: Bahnschrift;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 18px;
                        letter-spacing: 0em;
                        text-align: left;                        
                        color: #000000;
                        margin: 0 0 5px 0;
                    }

                    .product-cart .product-warning {
                        font-family: Bahnschrift;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 18px;
                        letter-spacing: 0em;
                        text-align: left;

                        color: #FF0303;
                        margin: 0;
                        text-transform: uppercase;
                    }


                    @media only screen and (max-width: 800px){


                        .product-cart .product-category {
                            font-family: Bahnschrift;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 17px;
                            letter-spacing: 0em;
                            text-align: left;
                        }

                        .product-cart .product-name {
                            font-family: Bahnschrift;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 17px;
                            letter-spacing: 0em;
                            text-align: left;
                        }

                        .product-cart .product-price {
                            font-family: Bahnschrift;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 19px;
                            letter-spacing: 0em;
                            text-align: left;  
                        }

                        .product-cart .product-warning {
                            font-family: Bahnschrift;
                            font-size: 9px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: 11px;
                            letter-spacing: 0em;
                            text-align: left;
                            
                        }
                    }
                `
      })]
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCardCart);

/***/ }),

/***/ 9861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./containers/head.js





class WebHead extends (external_react_default()).Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "PT. Era Mitra Perdana"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.svg"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "title",
        content: "PT. Era Mitra Perdana"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/styles/css/slick.css"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/styles/css/slick-theme.css"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "/static/fonts/Bahnschrift.TTF",
        rel: "stylesheet"
      })]
    });
  }

}

/* harmony default export */ const head = (WebHead);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/category/CategoryMenu.js




class CategoryMenu extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "brands"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(params) {
    this.setState(state => ({
      activeTab: params
    }));
  }

  render() {
    const props = this.props;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "category-menu",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container-inner",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "category-menu-wrapper",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "left-category-menu",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              onMouseOver: () => this.handleClick("brands"),
              children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: this.state.activeTab == "brands" ? "category-side-title active" : "category-side-title",
                children: "Brands"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              onMouseOver: () => this.handleClick("industry"),
              children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: this.state.activeTab == "industry" ? "category-side-title active" : "category-side-title",
                children: "Industry"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              onMouseOver: () => this.handleClick("application"),
              children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: this.state.activeTab == "application" ? "category-side-title active" : "category-side-title",
                children: "Application"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "right-category-menu",
            children: [this.state.activeTab == "brands" && props.brands && props.brands.map((brand, idx) => /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: `${"http://staging.eramitra.com"}/products/brand/${brand.id}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "category-side-name ",
                children: brand.name
              }, idx)
            }, idx)), this.state.activeTab == "application" && props.applications && props.applications.map((app, idx) => /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: `${"http://staging.eramitra.com"}/products/application/${app.id}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "category-side-name ",
                children: app.name
              }, idx)
            }, idx)), this.state.activeTab == "industry" && props.industries && props.industries.map((ind, idx) => /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: `${"http://staging.eramitra.com"}/products/industry/${ind.id}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "category-side-name ",
                children: ind.name
              }, idx)
            }, idx))]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("style", {
        children: `
                    .category-menu {
                        z-index: 10;
                    }

                    .category-menu .container-inner {
                        padding: 0px;
                    }

                    .category-menu-wrapper {
                        display: flex;
                        width: 100%;
                        height: 450px;
                        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
                    }

                    .left-category-menu {
                        width: 300px;
                        background: #1BA58A;
                        padding: 24px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }

                    .right-category-menu {
                        width: calc(100% - 300px);
                        background: #FFFFFF;
                        padding: 24px;
                    }

                    .category-menu .category-side-title {
                        font-family: Bahnschrift;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 24px;
                        color: #FFFFFF;
                        text-transform: uppercase;
                        margin: 8px 0 8px 0;
                        width: fit-content;
                    }

                    .left-category-menu a {
                        width: fit-content;
                    }
                    .category-menu .category-side-title.active {
                        color: #FFF502;
                        cursor: default;
                    }

                    .category-menu .category-side-name {
                        font-family: Calibri;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 17px;
                        text-transform: uppercase;
                        color: #000000;
                    }

                    .category-menu .category-side-name:hover {
                        color: #1BA58A;
                    }


                @media only screen and (max-width: 800px){

                    .category-menu-wrapper {
                        width: 100%;
                        box-shadow: none;
                        height: calc(100vh - 56px);
                    }

                    .left-category-menu {
                        width: 40%;
                        justify-content: flex-start;
                    }

                    .right-category-menu {
                        width: 60%;
                    }

                    .category-menu .category-side-title {
                        font-family: Bahnschrift;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 10px;
                        color: #FFFFFF;
                        text-transform: uppercase;
                        margin: 8px 0 8px 0;
                    }

                    .category-menu .category-side-name {
                        font-family: Calibri;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 10px;
                        line-height: 12px;
                        text-transform: uppercase;
                        margin: 8px 0 8px 0;
                    }
                }
                `
      })]
    });
  }

}

/* harmony default export */ const category_CategoryMenu = (CategoryMenu);
// EXTERNAL MODULE: ./components/cart/Product.js
var Product = __webpack_require__(8838);
// EXTERNAL MODULE: ./helpers/utils.js
var utils = __webpack_require__(2820);
;// CONCATENATED MODULE: ./components/cart/Cart.js






const Cart = props => {
  const {
    0: cart,
    1: setCart
  } = (0,external_react_.useState)(props.cart);
  const {
    0: total,
    1: setTotal
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    if (cart) {
      let currentTotal = 0;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.price) {
          setTotal(0);
          break;
        } else {
          currentTotal = currentTotal + cart[i].product.price;
          setTotal(currentTotal);
        }
      }
    }
  }, [cart]);
  (0,external_react_.useEffect)(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  });

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

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "cart-menu",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "cart-menu-wrapper",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "cart-title",
        children: "Cart Detail"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "cart-detail-wrapper",
        children: props.cart && props.cart.map((item, idx) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "product-cart-wrapper",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Product/* default */.Z, {
            picture: item.product.img,
            category: `${item.product.Application.name}`,
            brand: item.product.Brand.name,
            name: item.product.name,
            price: item.product.price
          }, idx), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "cart-product-wrapper",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "product-counter",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                className: item.value == 0 && "disable",
                onClick: () => setMinus(idx),
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "btn-counter",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "material-icons",
                    children: "remove"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: item.value
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: () => setPlus(idx),
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "btn-counter",
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "material-icons",
                    children: "add"
                  })
                })
              })]
            })
          })]
        }, idx))
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "cart-total-wrapper",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "cart-total",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
            children: "Total"
          }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
            children: total == 0 ? "CONTACT US" : (0,utils/* number */.Rx)(total)
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "btn-checkout",
          href: `${"http://staging.eramitra.com"}/checkout`,
          children: "Go to checkout page"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("style", {
      children: `
                    .cart-menu {
                        z-index: 10;
                        right: 0;
                        top: 0;
                        position: fixed;
                    }

                    .cart-menu-wrapper {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        width: 484px;
                        height: 100vh;
                        padding: 40px;
                        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
                        background: #FFFFFF;
                    }

                    .cart-title {
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

                    .cart-total-wrapper {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                    }

                    .cart-detail-wrapper {
                        overflow-y: auto;
                        display: flex;
                        flex-direction: column;
                        height: 100vh;
                    }

                    .cart-total {
                        display: flex;
                        justify-content: space-between;
                        border-top: 1px solid #000000;
                        padding-top: 20px;
                        margin-bottom: 35px;
                    }

                    .cart-total h6 {
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

                    .btn-checkout {
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
                    }

                    .cart-menu .product-cart-wrapper {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 24px;
                    }

                    .cart-menu .cart-product-wrapper {
                        margin-bottom: 0 !important;
                        margin-right: 5px;
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
      

                @media only screen and (max-width: 800px){
                    .cart-menu-wrapper {
                        width: 85vw;
                    }

                    .cart-title {
                        padding-bottom: 12px;
                        font-family: Bahnschrift;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 17px;
                        letter-spacing: 0em;
                        text-align: center;
                    }

                    .cart-total {
                        margin-bottom: 12px !important;
                        padding-top: 12px !important;
                    }

                    .cart-total h6 {
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
  });
};

/* harmony default export */ const cart_Cart = (Cart);
;// CONCATENATED MODULE: ./containers/header.js








class Header extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isProduct: false,
      isSearch: false,
      isCart: false,
      search: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickProduct = this.handleClickProduct.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
    this.handleClickCart = this.handleClickCart.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  handleClick() {
    if (this.state.isToggleOn) {
      this.setState(state => ({
        isProduct: false
      }));
    }

    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  handleClickProduct() {
    this.setState(state => ({
      isProduct: !state.isProduct
    }));
  }

  handleClickSearch() {
    if (this.state.search !== "") {
      this.submitSearch();
    } else {
      this.setState(state => ({
        isSearch: !state.isSearch
      }));
    }
  }

  handleClickCart() {
    this.setState(state => ({
      isCart: !state.isCart
    }));
  }

  handleSearch(e) {
    this.setState(state => ({
      search: e.target.value
    }));

    if (e.target.value == "") {
      this.setState(state => ({
        isSearch: !state.isSearch
      }));
    }
  }

  submitSearch() {
    alert("submit");
  }

  render() {
    const props = this.props;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "navbar-header",
      children: [this.state.isToggleOn && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "sidebar mobile-only",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "logo-wrapper",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            href: `${"http://staging.eramitra.com"}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "logo",
              src: "/static/images/logo.png"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "material-icons",
            onClick: this.handleClick,
            children: "close"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "navbar-link",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `${"http://staging.eramitra.com"}/about-us`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "About Us"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: this.handleClickProduct,
            children: "Products"
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `${"http://staging.eramitra.com"}/news-info`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "News & Info"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `${"http://staging.eramitra.com"}/career`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Career"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `${"http://staging.eramitra.com"}/contact-us`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Contact Us"
            })
          })]
        })]
      }), this.state.isToggleOn && this.state.isProduct && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "sidebar product mobile-only",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "logo-wrapper",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "material-icons",
            onClick: this.handleClickProduct,
            children: "chevron_left"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: `${"http://staging.eramitra.com"}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "logo",
              src: "/static/images/logo.png"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(category_CategoryMenu, {
          brands: props.brands,
          applications: props.applications,
          industries: props.industries
        })]
      }), this.state.isToggleOn && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "sidebar-background mobile-only",
        onClick: this.handleClick
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "navbar-content-wrapper",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "navbar-inner-content-wrapper",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "logo-wrapper mobile-only",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "material-icons",
              onClick: this.handleClick,
              children: "menu"
            }), !this.state.isSearch && /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: `${"http://staging.eramitra.com"}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "logo",
                src: "/static/images/logo.png"
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "logo-wrapper desktop-only",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: `${"http://staging.eramitra.com"}`,
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "logo",
                src: "/static/images/logo.png"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "navbar-link desktop-only",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "navbar-link-wrapper",
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: `${"http://staging.eramitra.com"}/about-us`,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "About Us"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: this.handleClickProduct,
                children: "Products"
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: `${"http://staging.eramitra.com"}/news-info`,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "News & Info"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: `${"http://staging.eramitra.com"}/career`,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "Career"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: `${"http://staging.eramitra.com"}/contact-us`,
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: "Contact Us"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "separator"
              }), this.state.isSearch ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "input-search",
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  placeholder: "",
                  onChange: this.handleSearch
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "search-box",
                  onClick: this.handleClickSearch,
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "material-icons",
                    children: "search"
                  })
                })]
              }) : /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "search-header",
                onClick: this.handleClickSearch,
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "material-icons",
                  children: "search"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "cart-header",
                onClick: this.handleClickCart,
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "material-icons",
                  children: "shopping_cart"
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "navbar-link mobile-only",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "navbar-link-wrapper",
              children: [this.state.isSearch ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "input-search",
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  placeholder: "",
                  onChange: this.handleSearch
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "search-box",
                  onClick: this.handleClickSearch,
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "material-icons",
                    children: "search"
                  })
                })]
              }) : /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "search-header",
                onClick: this.handleClickSearch,
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "material-icons",
                  children: "search"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "cart-header",
                onClick: this.handleClickCart,
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "material-icons",
                  children: "shopping_cart"
                })
              })]
            })
          })]
        })
      }), this.state.isCart && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(cart_Cart, {
          cart: props.cart
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "backdrop",
          onClick: this.handleClickCart
        })]
      }), !this.state.isToggleOn && this.state.isProduct && /*#__PURE__*/jsx_runtime_.jsx(category_CategoryMenu, {
        brands: props.brands,
        applications: props.applications,
        industries: props.industries
      }), /*#__PURE__*/jsx_runtime_.jsx("style", {
        children: `
                .desktop-only {
                    display: block;
                }

                .mobile-only {
                    display: none !important;
                }
                
                .navbar-header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 200;
                    width: 100vw;
                    padding: 0;
                }

                .navbar-content-wrapper {
                    width: 100%;
                    position: relative;
                    box-shadow: 0px 4px 10px rgba(145, 158, 171, 0.1);
                    background-color: #FFF;
                }

                .navbar-inner-content-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    max-width: 1120px;
                    height: 76px;
                    margin: 0 auto;
                }

                .navbar-inner-content-wrapper .logo-wrapper {
                    display: flex;
                    align-items: center;
                }

                .navbar-inner-content-wrapper .logo {
                  height: 30px;
                  width: auto;
                }

                .navbar-link-wrapper {
                  display: flex;
                  align-items: center;
                }

                .navbar-link-wrapper a {
                  cursor: pointer;
                }

                .navbar-link a {
                    font-family: 'Bahnschrift';
                    font-weight: 400;
                    font-size: 14px;
                    margin-left: 55px;
                }

                .navbar-link a.active {
                    font-family: 'Bahnschrift';
                    font-weight: 500;
                    margin-left: 55px;
                    text-decoration: none;
                    color: #4B8343;
                }

                .cart-header, .search-header {
                  margin-left: 25px !important;
                }

                .input-search input {
                  padding: 8px 30px 8px 8px;
                }

                .search-box {
                  margin-left: -30px !important;
                }

                .input-search {
                  display: flex;
                  align-items: center;
                  margin-left: 25px;
                }

                .separator {
                  width: 2px;
                  height: 30px;
                  background: #000000;
                  margin-left: 25px;
                }
 
                .backdrop {
                  background: #000000;
                  opacity: 0.5;
                  width: 100vw;
                  height: 100vh;
                  position: fixed;
                  top: 0;
                } 

                @media only screen and (max-width: 800px){
                    .mobile-only {
                        display: block !important;
                    }

                    .desktop-only {
                      display: none !important;
                  }
                    
                    .desktop-only, .logo-wrapper.desktop-only{
                        display: none;
                    }

                    .navbar-link .cart-header {
                      margin-left: 15px !important;
                    }

                    .search-box {
                      margin-left: -30px !important;
                    }

                    .navbar-inner-content-wrapper {
                        height: 56px;
                        padding: 0 10px;
                    }
                    
                    .navbar-inner-content-wrapper .logo, .sidebar .logo {
                        height: 20px;
                        width: auto;
                        margin: 0 16px;
                    }

                    .navbar-header {
                        position: absolute;
                    }

                    .sidebar {
                        width: 90%;
                        height: 100vh;
                        background-color: white;
                        position: fixed;
                        z-index: 100;
                        top: 0;
                        left: 0;
                    }

                    .sidebar-background {
                        width: 100%;
                        height: 100%;
                        z-index: 99;
                        background-color: rgba(0, 0, 0, 0.1);
                        position: fixed;
                        top: 0;
                        left: 0;
                    }

                    .sidebar .logo-wrapper {
                        display: flex;
                        align-items: center;
                        height: 56px;
                        justify-content: space-between;
                        padding: 16px 32px 16px 14px;
                        border-bottom: 1px solid rgb(235,235,235,1);
                    }

                    .sidebar.product .logo-wrapper {
                      display: flex;
                      align-items: center;
                      height: 56px;
                      justify-content: flex-start;
                      padding: 16px 32px 16px 14px;
                      border-bottom: 1px solid rgb(235,235,235,1);
                    }

                    .sidebar .navbar-link {
                        display: flex;
                        flex-direction: column;
                    }

                    .sidebar .navbar-link a {
                        font-family: 'Bahnschrift';
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: 22px;
                        letter-spacing: 0em;
                        text-align: left;
                        margin: 32px 0 0 32px;
                    }

                }
                `
      })]
    });
  }

}

/* harmony default export */ const header = (Header);
;// CONCATENATED MODULE: ./containers/footer.js





class footer_Header extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "footer-container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "footer upper",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "footer-wrapper",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "footer-inner-content-wrapper",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "footer-left",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                children: "OUR LOCATION"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "location-group",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                  children: "Head Office - Jakarta"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: ["Ruko Buaran Persada No. 31 ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Jl. R. Soekamto Duren Sawit Jakarta 13450, Indonesia"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "icon-text",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "material-icons",
                    children: "phone"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: " +62-21-86612458 (Fax: +62-21-86612365)"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "icon-text",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "material-icons",
                    children: "mail_outline"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "sales@eramitra.com"
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "location-group",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                  children: "Branch Office - Surabaya"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "Jl. Kebon Sari V No. 7G - Surabaya"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "icon-text",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "material-icons",
                    children: "phone"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: " +62-21-86612458 (Fax: +62-21-86612365)"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "icon-text",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: "material-icons",
                    children: "mail_outline"
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: "sales@eramitra.com"
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "reach-us",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                children: "REACH US"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-reach-us",
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  placeholder: "Name"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-reach-us",
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  placeholder: "Phone Number"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-reach-us",
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  placeholder: "Email"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-reach-us",
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  placeholder: "Company"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "form-reach-us",
                children: /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                  rows: "5",
                  placeholder: "Message"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn-submit-reach",
                onClick: () => {},
                children: "Submit"
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "footer-shape",
          src: "/static/images/footer-shape.svg"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "footer bottom",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "footer-wrapper",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "footer-inner-content-wrapper",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "footer-left",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "info-wrapper",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: `${"http://staging.eramitra.com"}`,
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    className: "logo",
                    src: "/static/images/logo-white.png"
                  })
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "hyperlink-column",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col footer-link",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                  children: "Newsletter"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-newsletter",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    placeholder: "Your Email"
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "btn-subscribe",
                    onClick: () => {},
                    children: "Subscribe"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
                  children: "Follow Us"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "social-media-wrapper",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "https://www.instagram.com/byebeli/",
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      className: "logo-social",
                      src: "/static/icons/instagram.svg"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "http://line.me/R/ti/p/@ywh9023y",
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      className: "logo-social",
                      src: "/static/icons/line.svg"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "http://line.me/R/ti/p/@ywh9023y",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "material-icons white",
                      children: "mail"
                    })
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col footer-link page",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                  children: "Page"
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: `${"http://staging.eramitra.com"}/about-us`,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "About Us"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: `${"http://staging.eramitra.com"}/career`,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Career"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: `${"http://staging.eramitra.com"}/contact-us`,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Contact Us"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: `${"http://staging.eramitra.com"}/contact-us`,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: "Customer Service"
                  })
                })]
              })]
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("style", {
        children: `

                .col {
                    display: flex;
                    flex-direction: column;
                }

                .desktop-only {
                    display: block;
                }

                .mobile-only {
                    display: none;
                }
                
                .footer {
                    width: 100vw;
                    display: flex;
                    align-items: center;
                    // height: 555px;
                    // padding-bottom: 30px;
                }

                .footer.bottom {
                  background: #0B9A7E;
                  height: 373px;
                }
                
                .footer.upper {
                  background: #ECECEC;
                  height: 638px;
                  position: relative;
                }

                .footer-shape {
                  position: absolute;
                  bottom: 0;
                  right: 0;
                  z-index: 0;
                }

                .footer-wrapper {
                    padding: 0;
                    max-width: 1120px;
                    margin: 0 auto;  
                    width: 100%;
                }

                .footer-link h2 {
                  font-family: Bahnschrift;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 22px;
                  letter-spacing: 0em;
                  text-align: left;

                  color: #ffffff;
                }
                .footer-wrapper.bottom {
                  background: #0B9A7E;
                }

                .footer-inner-content-wrapper {
                    display: flex;
                    justify-content: space-between;
                }

                .footer-left {
                    display: flex;
                    flex-wrap: wrap;
                    width: 45%;
                }
                .reach-us {
                  display: inline-block;
                  min-width: 587px;
                }

                .reach-us h2 {
                  margin-bottom: 24px;
                }
                
                .form-reach-us {
                  margin-bottom: 16px;
                }

                .form-reach-us input, .form-reach-us textarea {
                  font-family: Calibri;
                  width: 100%;    
                  border: 1px solid #0E0E0E;
                  background: transparent;
                  padding: 6px 10px;
                  font-size: 16px;
                  line-height: 20px;
                  color: #757575;
                }

                .footer-container .logo {
                    width: 100%;
                    min-width: 400px;
                }
                
                .hyperlink-column {
                    display: grid;
                    grid-template-columns: 2fr 2fr;
                    grid-gap: 30px 30px;
                    width: 100%;
                }

                .info-wrapper {
                    padding-right: 55px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .footer-link.page {
                  padding-right: 20px;
                }

                .footer.upper h2 {
                  font-family: 'Bahnschrift';
                  font-style: normal;
                  font-weight: 600;
                  font-size: 24px;
                }

                .follow-us h2 {
                    font-family: 'Bahnschrift';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 30px;
                    color: #FFFFFF;
                    margin: 0 0 10px 0;
                }

                .footer-link a, .footer-link p {
                    font-family: 'Bahnschrift';
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 24px;  
                    color: #FFFFFF;
                    margin: 0;                
                }

                .footer-link.page a {
                  padding-top: 18px;   
                }

                .location-group h2 {
                  margin-bottom: 15px;
                }

                .location-group p {
                  font-family: Calibri;
                  font-style: italic;
                  font-weight: normal;
                  font-size: 16px;
                  line-height: 20px;
                }
                
                .contact-us p {
                    color: white;
                    font-size: 13px;
                    font-weight: 500;
                    font-family: Open Sans;
                    margin: 0;
                }

                .social-media-wrapper {
                    display: flex;
                }

                .social-media-wrapper .logo-social {
                    margin-right: 5px;
                }
                
                .copyright {
                    color: #4B8343;
                    display: flex;
                    justify-content: center;
                    padding-top: 10px;
                }

                .copyright span {
                    font-size: 18px;
                    line-height: 22px;
                    margin-right: 4px;
                }

                .copyright p {
                    color: #4B8343;
                    margin: 0;
                    letter-spacing: 0em;
                    text-align: left;   
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 27px;
                }

                .material-icons.white {
                  color: #FFFFFF;
                }

                
                .location-group .icon-text {
                  display: flex;
                  padding: 3px 0;
                }

                .location-group .icon-text span {
                  padding-right: 10px;
                }

                .location-group .icon-text p {
                  margin: 0px;
                }

                .btn-submit-reach {
                  font-family: Bahnschrift;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 22px;
                  letter-spacing: 0em;
                  padding: 10px 25px;
                  color: #FFFFFF;
                  background: #626262;
                  border-radius: 10px;
                  cursor: pointer;
                }

                .btn-subscribe {
                  font-family: Bahnschrift;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 22px;
                  letter-spacing: 0em;
                  padding: 10px 15px;
                  color: #FFFFFF;
                  background: #626262;
                  border-radius: 0 10px 10px 0;
                  cursor: pointer;
                  width: 100px;
                }

                .form-newsletter input {
                  font-family: Calibri;
                  background: white;
                  padding: 6px 10px;
                  border-radius: 10px 0 0 10px;
                  font-size: 16px;
                  line-height: 20px;
                  color: #757575;
                  width: calc(100% - 100px);
                  outline: none;
                  border: none;
                }


                .form-newsletter input:focus{
                  outline: none;
                }

                .form-newsletter {
                  display: flex;
                  margin-bottom: 25px;
                }

                input:focus{
                    outline: none;
                }

                textarea:focus{
                  outline: none;
                }

                @media only screen and (max-width: 800px){
                    .mobile-only {
                        display: block;
                    }
                    
                    .desktop-only {
                        display: none;
                    }

                    .footer {
                        width: 100vw;
                        height: 416px;
                        background-color: #ffffff;
                        background-image: url('static/images/footer.png');
                        background-size: 100% 100%;
                        background-position: top center;
                    }
    
                    .footer-wrapper {
                        padding: 16px;
                        max-width: 1120px;
                        margin: 0 auto;  
                    }


                    .footer-inner-content-wrapper {
                        display: flex;
                        flex-direction: column;
                        margin: 0;
                    }
                    
                    .footer-left {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        margin-top: 20px;
                    }
                    .contact-follow {
                        width: 30%;
                    }
                    
                    .footer-container .logo {
                        width: 100%;
                        min-width: 0;
                        
                    }
                    .info-wrapper {
                        width: 100%;
                        padding: 30px;
                    }
                    .info-wrapper h3 {
                        font-size: 12px;
                    }
                    .footer-link-1 h2, .footer-link-2 h2, .contact-us h2, .follow-us h2 {
                        font-size: 16px;
                        margin-bottom: 8px;
                    }
                
                    .footer-link-1 a, .footer-link-2 a {
                        font-size: 12px;
                        margin-bottom: 4px;
                    }

                    .hyperlink-column {
                        width: 100%;
                    }

                    .hyperlink-column {
                      display: flex;
                      justify-content: center;
                    }

                    .footer-link {
                      justify-content: center;
                      align-items: center;
                    }

                    .footer-link h2 {
                      font-family: Bahnschrift;
                      font-size: 12px;
                      font-style: normal;
                      font-weight: 600;
                      line-height: 14px;
                      letter-spacing: 0em;
                      text-align: center;
                      color: #FFFFFF;
                      text-transform: uppercase;
                    }

                    .footer-link-2, .follow-us {
                        width: 55%;
                    }

                    .footer-shape {
                      display: none;
                    }

                    .contact-follow {
                        width: 100%;
                        margin-left: 0px;
                        margin-top: 0px;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                    }

                    .contact-us p {
                        font-size: 10px;
                    }

                    .social-media-wrapper {
                        display: flex;
                    }


                    .copyright span {
                        font-size: 10px;
                        line-height: 12px;
                        margin-right: 4px;
                    }

                    .copyright p {
                        margin: 0;
                        font-family: Open Sans;
                        font-size: 10px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: 12px;
                        letter-spacing: 0em;
                        text-align: left;
                    }

                    .footer-link.page {
                      display: none;
                    }

                    .footer.upper h2 {
                      font-size: 12px;
                      line-height: 12px;
                      text-align: center;
                    }

                    .location-group p {
                      font-size: 9px;
                      line-height: 9px;
                      text-align: center;
                    }

                    .location-group .icon-text span {
                      font-size: 12px;
                    }

                    .location-group .icon-text {
                      justify-content: center;
                    }

                   .form-reach-us {
                     width: 100%;
                   }

                    .form-reach-us input, .form-reach-us textarea {
                      padding: 3px 10px;
                      font-size: 12px;
                      line-height: 12px;
                    }

                    .btn-submit-reach {
                      font-size: 12px;
                      line-height: 12px;
                      padding: 8px 15px;
                      border-radius: 8px;
                      width: fit-content;
                    }

                    .reach-us {
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      min-width: 0;
                      margin-top: 10px;
                    }
                    

                }
                `
      })]
    });
  }

}

/* harmony default export */ const footer = (footer_Header);
;// CONCATENATED MODULE: ./containers/layout.js






function Layout({
  children,
  title,
  brands,
  applications,
  industries,
  cart
}) {
  const {
    0: cartData,
    1: setCart
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(head, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(header, {
        cart: cart || cartData,
        brands: brands,
        applications: applications,
        industries: industries
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "margin-container"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "main-content",
        children: [children, " "]
      }), /*#__PURE__*/jsx_runtime_.jsx(footer, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("style", {
      children: `
          .container {
            width: 100vw;
            padding: 0;
          }

          .margin-container {
            margin-top: 76px;
          }
          
          .container-inner {
            max-width: 1160px;
            margin: 0 auto;
            padding: 12px 20px;
          }

          .container.banner {
            background-color: #F5FFEE;
          }
          
          @media only screen and (max-width: 800px) {
            .margin-container {
              margin-top: 56px;
            }
          }
        `
    })]
  });
}

/***/ }),

/***/ 2820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vQ": () => (/* binding */ utc_to_local_short),
/* harmony export */   "vP": () => (/* binding */ truncate_text),
/* harmony export */   "Rx": () => (/* binding */ number)
/* harmony export */ });
/* unused harmony exports moment_date, utc_to_local */
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const moment_date = ({
  date
}) => {
  const local_date = utc_to_local({
    date
  }),
        res = moment(local_date).add(7, "days").isBefore(moment()) ? moment(local_date).format("DD MMM YYYY") : moment(local_date).fromNow();
  return res;
};
const utc_to_local = params => {
  const utc = moment.utc(params.date).toDate(),
        res = moment(utc).local().format("YYYY-MM-DD HH:mm:ss");
  return res;
};
const utc_to_local_short = params => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(params).local().format("DD MMM YYYY");
};
const truncate_text = (text, maxchar) => {
  let truncated = text;

  if (truncated.length > maxchar) {
    truncated = truncated.substr(0, maxchar);
    truncated = truncated + "...";
  }

  return truncated;
};
const number = props => {
  const rp = Number(props, '');
  return Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(rp);
};

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;
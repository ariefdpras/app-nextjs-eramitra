"use strict";
(() => {
var exports = {};
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 7830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ products),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./containers/layout.js + 5 modules
var layout = __webpack_require__(9861);
// EXTERNAL MODULE: ./components/product/ProductCard.js
var ProductCard = __webpack_require__(3652);
// EXTERNAL MODULE: ./components/breadcrumb/breadcrumb.js
var breadcrumb = __webpack_require__(2641);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "react-bootstrap"
const external_react_bootstrap_namespaceObject = require("react-bootstrap");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/pagination.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class PaginationHandler extends (/* unused pure expression or super */ null && (Component)) {
  constructor(_props) {
    super(_props);

    _defineProperty(this, "pagingHandler", () => {
      let offset = parseInt(event.target.id);
      this.setState({
        active: offset
      });
      this.props.pageHandler(event.target.id - 1);
    });

    _defineProperty(this, "nextHandler", () => {
      let active = this.state.active;
      this.setState({
        active: active + 1
      });
      this.props.pageHandler(active + 1);
    });

    _defineProperty(this, "backHandler", () => {
      let active = this.state.active;
      this.setState({
        active: active - 1
      });
      this.props.pageHandler(active - 1);
    });

    _defineProperty(this, "renderPageNumbers", (pageNumbers, totalPages) => {
      let {
        active
      } = this.state;
      return /*#__PURE__*/_jsxs(Pagination, {
        children: [/*#__PURE__*/_jsx(Pagination.Prev, {
          disabled: active < 3,
          onClick: active > 3 && this.backHandler
        }), pageNumbers.map(number => {
          if (parseInt(active) > 3 && number >= parseInt(active) - 3 && number <= parseInt(active) + 3) {
            return /*#__PURE__*/_jsx(Pagination.Item, {
              id: number,
              active: number == active,
              onClick: this.pagingHandler,
              children: number
            });
          } else if (parseInt(active) < 4 && number < 8) {
            return /*#__PURE__*/_jsx(Pagination.Item, {
              id: number,
              active: number == active,
              onClick: this.pagingHandler,
              children: number
            });
          } else {
            return null;
          }
        }), /*#__PURE__*/_jsx(Pagination.Next, {
          onClick: active <= totalPages - 3 && this.nextHandler
        })]
      });
    });

    _defineProperty(this, "buildComponent", (props, state) => {
      const {
        totalPages,
        query
      } = props;
      const pageNumbers = [];

      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }

      return /*#__PURE__*/_jsx("div", {
        className: "pull-right",
        children: this.renderPageNumbers(pageNumbers, totalPages)
      });
    });

    this.state = {
      paging: {
        offset: 0,
        limit: 10
      },
      active: 0
    };
  }

  render() {
    return this.buildComponent(this.props, this.state);
  }

}
;// CONCATENATED MODULE: ./pages/products/index.js








const Home = props => {
  const breadcrumbs = [{
    title: "Products",
    url: "https://staging.eramitra.com" + "/products"
  }];
  const {
    0: isBrands,
    1: toggleBrands
  } = (0,external_react_.useState)(false);
  const {
    0: isApplication,
    1: toggleApplication
  } = (0,external_react_.useState)(false);
  const {
    0: isIndustry,
    1: toggleIndustry
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    title: "Products | PT. Era Mitra Perdana",
    applications: props.applications,
    brands: props.brands,
    industries: props.industries,
    catalogue: props.catalogue,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container-inner",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "breadcrumb-wrapper",
          children: /*#__PURE__*/jsx_runtime_.jsx(breadcrumb/* default */.Z, {
            breadcrumbs: breadcrumbs,
            url: "https://staging.eramitra.com"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "products-container",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "left-products",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "category-side-title green",
              children: "Products"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "category-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "category-side-title ",
                children: "Brands"
              }), isBrands ? /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: () => toggleBrands(false),
                className: "button-expand",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "material-icons",
                  children: "expand_less"
                })
              }) : /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: () => toggleBrands(true),
                className: "button-expand",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "material-icons",
                  children: "expand_more"
                })
              })]
            }), isBrands && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "group-list-wrapper",
              children: [" ", props.brands && props.brands.map((brand, idx) => /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: `${"https://staging.eramitra.com"}/products/brand/${brand.id}`,
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: props.detail ? props.detail.name === brand.name ? `group-list active` : `group-list` : `group-list`,
                  children: brand.name
                })
              }, idx))]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "category-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "category-side-title ",
                children: "Industry"
              }), isIndustry ? /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: () => toggleIndustry(false),
                className: "button-expand",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "material-icons",
                  children: "expand_less"
                })
              }) : /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: () => toggleIndustry(true),
                className: "button-expand",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "material-icons",
                  children: "expand_more"
                })
              })]
            }), isIndustry && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "group-list-wrapper",
              children: [" ", props.industries && props.industries.map((industry, idx) => /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: `${"https://staging.eramitra.com"}/products/industry/${industry.id}`,
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: props.detail ? props.detail.name === industry.name ? `group-list active` : `group-list` : `group-list`,
                  children: industry.name
                })
              }, idx))]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "category-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "category-side-title ",
                children: "Application"
              }), isApplication ? /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: () => toggleApplication(false),
                className: "button-expand",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "material-icons",
                  children: "expand_less"
                })
              }) : /*#__PURE__*/jsx_runtime_.jsx("a", {
                onClick: () => toggleApplication(true),
                className: "button-expand",
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "material-icons",
                  children: "expand_more"
                })
              })]
            }), isApplication && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "group-list-wrapper",
              children: [" ", props.applications && props.applications.map((application, idx) => /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: `${"https://staging.eramitra.com"}/products/application/${application.id}`,
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: props.detail ? props.detail.name === application.name ? `group-list active` : `group-list` : `group-list`,
                  children: application.name
                })
              }, idx))]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "right-products",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "banner-products",
              src: "/static/images/banner-products.svg"
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "section-title-underline",
              children: "Products"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "products-wrapper",
              children: props.products && props.products.map((product, idx) => /*#__PURE__*/jsx_runtime_.jsx(ProductCard/* default */.Z, {
                id: product.id,
                picture: product.Pictures && product.Pictures[0] && product.Pictures[0].name,
                category: `${product.Application}`,
                brand: product.Brand.name,
                name: product.name,
                price: product.price
              }, idx))
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("style", {
        children: `
                .products-container {
                    display: flex;
                }

                .left-products {
                    width: 250px;
                    margin-right: 54px;
                    margin-bottom: 50px;
                }

                .right-products {
                    width: calc(100% - 304px);
                }

                .banner-products {
                    width: 100%;
                    margin-bottom: 40px;
                }

                .category-side-title {
                    font-family: Bahnschrift;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 24px;
                    color: #000000;
                    text-transform: uppercase;
                    padding: 0 0 15px 0;
                    margin: 15px 0 0 0;
                }

                .category-group {
                  border-bottom: 1px solid #C4C4C4;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                }

                .category-group a {
                  cursor: pointer;
                }

                .category-side-title.green{
                    color: #1BA58A;
                    border-bottom: 1px solid #C4C4C4;
                }

                .products-wrapper {
                    display: grid;
                    width: 100%;
                    grid-gap: 40px;
                    grid-template-columns: repeat(3, 1fr);
                    margin-bottom: 60px;
                }

                .group-list p {
                  font-family: Calibri;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 24px;
                  letter-spacing: 0em;
                  text-align: left;
                }

                .group-list:hover {
                  color: #1BA58A;
                }

                .group-list.active {
                  font-weight: 600;
                }

                @media only screen and (max-width: 800px){
                  .left-products {
                    display: none;
                  }
  
                  .breadcrumb-wrapper {
                    display: none;
                  }
  
                  .right-products {
                    width: 100%;
                  }
  
                  .banner-products {
                    width: 100vw;
                    margin: -12px -20px 0 -20px;
                  }
  
                  .section-title-underline {
                    font-family: Bahnschrift;
                    font-size: 18px !important;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 25px !important;
                    letter-spacing: 0em;
                    text-align: left;
                  }
  
                  .section-title-underline:after {
                    padding-top: 5px !important;
                    margin-left: 1px !important;
                    width: calc(100% - 20px) !important;
                  }
  
                  .products-wrapper {
                    display: grid;
                    width: 100%;
                    grid-gap: 10px;
                    grid-template-columns: repeat(2, 1fr);
                    margin-bottom: 60px;
                  }
                }
              `
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("style", {
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
                margin-bottom: 20px;
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
  const getIndustries = await fetch(`${"https://staging.eramitra.com"}/api/getIndustry`);
  const industries = await getIndustries.json();
  const getApplication = await fetch(`${"https://staging.eramitra.com"}/api/getApplication`);
  const applications = await getApplication.json();
  const getProducts = await fetch(`${"https://staging.eramitra.com"}/api/getProduct`);
  const products = await getProducts.json();
  const getCatalogue = await fetch(`${"https://staging.eramitra.com"}/api/getCatalogue`);
  const catalogue = await getCatalogue.json();
  return {
    props: {
      products: products.data,
      totalPage: products.totalPages,
      brands: brands,
      industries: industries,
      applications: applications,
      catalogue: catalogue
    }
  };
}
/* harmony default export */ const products = (Home);

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

/***/ }),

/***/ 3289:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,862,641,652], () => (__webpack_exec__(7830)));
module.exports = __webpack_exports__;

})();
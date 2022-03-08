"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 1971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Containers_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9861);
/* harmony import */ var Components_product_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3652);
/* harmony import */ var Components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2641);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Components_article_ArticleCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4807);
/* harmony import */ var Helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2820);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const Home = props => {
  const breadcrumbs = [{
    title: "Search",
    url: "https://staging.eramitra.com" + "/products"
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Containers_layout__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    title: "Search | PT. Era Mitra Perdana",
    applications: props.applications,
    brands: props.brands,
    industries: props.industries,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "container-inner",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: "breadcrumb-wrapper",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
            breadcrumbs: breadcrumbs,
            url: "https://staging.eramitra.com"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "products-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "left-products",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h3", {
              className: "category-side-title green",
              children: "Search by"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: "group-list-wrapper",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                href: `${"https://staging.eramitra.com"}/search?name=${props.query.name}&by=product`,
                children: props.query && typeof props.query.by !== undefined ? props.query.by === "product" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("b", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                    className: "group-list",
                    children: "Product"
                  })
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                  className: "group-list",
                  children: "Product"
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                  className: "group-list",
                  children: "Product"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: "group-list-wrapper",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                href: `${"https://staging.eramitra.com"}/search?name=${props.query.name}&by=article`,
                children: props.query && typeof props.query.by !== undefined ? props.query.by === "article" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("b", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                    className: "group-list",
                    children: "Article"
                  })
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                  className: "group-list",
                  children: "Article"
                }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                  className: "group-list",
                  children: "Article"
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "right-products",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
              className: "section-title-underline",
              children: ["Search Result for: ", props.query.name]
            }), props.query && typeof props.query.by !== undefined && props.query.by === "product" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: "products-wrapper",
              children: props.search && props.search.products && props.search.products.map((product, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Components_product_ProductCard__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                id: product.id,
                picture: product.Pictures && product.Pictures[0] && product.Pictures[0].name,
                name: product.name,
                price: product.price
              }, idx))
            }), props.query && typeof props.query.by !== undefined && props.query.by === "article" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: "article-wrapper",
              children: props.search && props.search.articles && props.search.articles.map((article, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                className: "article-card-wrapper",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Components_article_ArticleCard__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                  picture: article.cover,
                  name: article.title,
                  slug: article.id,
                  date: (0,Helpers_utils__WEBPACK_IMPORTED_MODULE_5__/* .utc_to_local_short */ .vQ)(article.createdAt)
                }, idx)
              }, idx))
            })]
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("style", {
        children: `
                .products-container {
                    display: flex;
                }

                .left-products {
                    width: 250px;
                    margin-right: 54px;
                }

                .right-products {
                    width: calc(100% - 304px);
                }

                .banner-products {
                    width: 100%;
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
                .article-wrapper {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: space-between;
                  margin-bottom: 60px;
                  margin-left: calc((25% - 180px)* -0.5);
                  margin-right: calc((25% - 180px)* -0.5);
                }
    
                .article-card-wrapper {
                  display: flex;
                  justify-content: center;
                  margin-bottom: 80px;
                  flex: 0 0 25%;
                }
    

                @media only screen and (max-width: 800px){

                  .products-container {
                    flex-direction: column;
                  }
                  .left-products {
                    width: 100%;
                  }
  
                  .category-side-title {

                    font-size: 14px;
                    line-height: 16px;
                    padding: 0 0 8px 0;
                  }

                  
                    .group-list {
                      font-family: Calibri;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: 16px;
                      letter-spacing: 0em;
                      text-align: left;
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

                  .article-wrapper {
                    
                    display: grid;
                    width: 100%;
                    grid-gap: 10px;
                    grid-template-columns: repeat(2, 1fr);
                    margin: 0 0 60px 0;
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
  const getIndustries = await fetch(`${"https://staging.eramitra.com"}/api/getIndustry`);
  const industries = await getIndustries.json();
  const getApplication = await fetch(`${"https://staging.eramitra.com"}/api/getApplication`);
  const applications = await getApplication.json();
  const getSearch = await fetch(`${"https://staging.eramitra.com"}/api/searchData/${req.query.name}`);
  const search = await getSearch.json();
  return {
    props: {
      search: search,
      brands: brands,
      industries: industries,
      applications: applications,
      query: req.query
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
var __webpack_exports__ = __webpack_require__.X(0, [664,862,641,652,807], () => (__webpack_exec__(1971)));
module.exports = __webpack_exports__;

})();
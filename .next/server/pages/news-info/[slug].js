"use strict";
(() => {
var exports = {};
exports.id = 487;
exports.ids = [487];
exports.modules = {

/***/ 5197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Containers_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9861);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const Articles = props => {
  return props.article && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Containers_layout__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    title: props.article.title ? `${props.article.title} || PT. Era Mitra Perdana` : "Article || PT. Era Mitra Perdana",
    applications: props.applications,
    brands: props.brands,
    industries: props.industries,
    catalogue: props.catalogue,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "header-about",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
          className: "green-tetra-img",
          src: "/static/images/green-tetra.svg"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "header-about-wrapper",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "header-img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              src: props.article.Picture ? `https://svr.eramitra.com/images/${props.article.Picture.name}` : "/static/images/not-found.jpg"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h3", {
            className: "section-title",
            children: props.article.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "share-content",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
              children: "Share this article:"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
              onClick: () => {
                window.navigator.clipboard.writeText(`${"https://staging.eramitra.com"}/news-info/${props.query}`);
                alert("Link is copied!");
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
                className: "material-icons logo-link",
                children: "link"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
              href: `https://twitter.com/intent/tweet?url=${"https://staging.eramitra.com"}/news-info/${props.query}&text=Hi I just read this article ${props.article.title} by Era Mitra Perdana check this out!`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
                className: "logo-social logo-social-article",
                src: "/static/icons/twitter.png"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
              href: `https://www.facebook.com/sharer.php?s=100&p[url]=https%3A%2F%2Fstaging.eramitra.com%2Fnews-info%2F${props.query}&p[title]=${props.article.title}&p[summary]=Summary`,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
                className: "logo-social logo-social-article",
                src: "/static/icons/facebook.png"
              })
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("style", {
          children: `
                .header-about-wrapper {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-top: -250px;
                  padding-bottom: 30px;
                }

                .logo-link, .logo-social-article {
                  margin-right: 10px;
                  cursor: pointer;
                }

                .header-img {
                  width: 566px;
                  height: 345px;
                  border-radius: 20px;
                  margin-bottom: 70px;
                }

                .share-content {
                  display: flex;
                }

                .share-content p {
                  margin: 0 10px 0 0;
                  color: #0B9A7E;
                  font-weight: 600;
                }

                .header-img img {
                  object-fit: cover;
                  width: 566px;
                  height: 345px;
                  border-radius: 20px;
                }

                .header-about .section-title, .header-about .section-description {
                  text-align: center;
                  width: 55%;
                }

                .article-content {
                  margin-bottom: 50px;
                }

                @media only screen and (max-width: 800px){

                  .header-about-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: -50px;
                    padding-bottom: 30px;
                  }

                  .header-img {
                    width: 183px;
                    height: 111px;
                    border-radius: 10px;
                    margin-bottom: 30px;
                  }

                  .header-img img {
                    width: 183px;
                    height: 111px;
                    border-radius: 10px;
                  }
  
                }
              `
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "container-inner",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "article-content",
          dangerouslySetInnerHTML: {
            __html: props.article.content
          }
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("style", {
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

            .green-tetra-img {
              width: 100%;
            }


            @media only screen and (max-width: 800px){
              .section-title {
                font-family: Bahnschrift;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
                text-align: center;
                margin-bottom: 10px;
              }

              .share-content p {
                font-size: 14px;
                margin: 0 10px 0 0;
              }

              .section-description {
                font-family: Calibri;
                font-style: italic;
                font-weight: normal;
                font-size: 12px;
                line-height: 15px;
                text-align: center;
                color: #666A66;
              }
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
  const getArticle = await fetch(`${"https://staging.eramitra.com"}/api/getArticle/${req.query.slug}`);
  const article = await getArticle.json();
  const getCatalogue = await fetch(`${"https://staging.eramitra.com"}/api/getCatalogue`);
  const catalogue = await getCatalogue.json();
  return {
    props: {
      article: article,
      brands: brands,
      industries: industries,
      applications: applications,
      catalogue: catalogue,
      query: req.query.slug
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Articles);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,862], () => (__webpack_exec__(5197)));
module.exports = __webpack_exports__;

})();
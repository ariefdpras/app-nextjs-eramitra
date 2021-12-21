"use strict";
(() => {
var exports = {};
exports.id = 72;
exports.ids = [72];
exports.modules = {

/***/ 3322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ news_info),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./containers/layout.js + 5 modules
var layout = __webpack_require__(9861);
// EXTERNAL MODULE: ./components/section.js
var section = __webpack_require__(974);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/article/ArticleCard.js




class ArticleCard extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "article-card",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "article-picture-wrapper",
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "article-picture",
          src: `https://svr.eramitra.com/images/${props.picture}`
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "article-description",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "article-date",
          children: props.date
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
          className: "article-name",
          children: [props.name, " "]
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: `${"http://eramitra.com"}/article/${props.slug}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "btn-read-card",
            children: "Read Article"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("style", {
        children: `
                    .article-card {
                        width: 200px;
                    }

                    .article-picture-wrapper {
                        width: 100%;
                        border-radius: 20px;
                    }

                    .article-picture {
                        width: 200px;
                        height: 200px;
                        object-fit: cover;
                    }

                    .article-description {
                        margin-top: 10px;
                    }

                    .article-date {
                        font-family: Calibri;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 17px;
                        color: #C4C4C4;
                        margin: 0 0 10px 0;
                    }

                    .article-name {
                        font-family: Bahnschrift;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 22px;
                        color: #000000;
                        margin: 0 0 24px 0;
                        width: 200px;
                    }

                    .btn-read-card {
                        font-family: Bahnschrift;
                        font-size: 18px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 22px;
                        letter-spacing: 0em;
                        text-align: left;

                        width: fit-content;
                        color: #1BA58A;
                        padding: 4px 16px;
                        border: 1px solid #1BA58A;
                        border-radius: 4px;
                        margin: 0;
                    }


                    @media only screen and (max-width: 800px){

                        .article-date {
                            font-family: Calibri;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 12px;
                            line-height: 15px;
                            margin: 0 0 8px 0;
                        }

                    .article-card {
                        width: 126px;
                    }

                    .article-picture {
                        width: 126px;
                        height: 126px;
                        object-fit: cover;
                    }

                        .article-name {
                            font-family: Bahnschrift;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 17px;
                            letter-spacing: 0em;
                            text-align: left;
                            margin: 0 0 16px 0;
                            width: 126px;
                        }

                        .btn-read-card {
                            font-family: Bahnschrift;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 14px;
                            line-height: 17px;
                            /* identical to box height */

                            text-align: center;
                        }
                    }

                `
      })]
    });
  }

}

/* harmony default export */ const article_ArticleCard = (ArticleCard);
// EXTERNAL MODULE: ./helpers/utils.js
var utils = __webpack_require__(2820);
;// CONCATENATED MODULE: ./pages/news-info/index.js








const Home = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    title: "test",
    applications: props.applications,
    brands: props.brands,
    industries: props.industries,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(section/* default */.Z, {
        element_id: "news-info",
        background: "#1BA58A",
        height: "650px",
        icon: [{
          image: "shape-7.svg",
          vertical: "bottom",
          horizontal: "left"
        }],
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "news-info-wrapper",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "news-info-cover",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: `https://svr.eramitra.com/images/${props.articles[0].cover}`
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "news-info-description",
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                children: (0,utils/* utc_to_local_short */.vQ)(props.articles[0].createdAt)
              }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: props.articles[0].title
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "news-info-content",
                children: (0,utils/* truncate_text */.vP)(props.articles[0].content, 150)
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: `${"http://eramitra.com"}/article/${props.articles[0].id}`,
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "btn-read",
                  children: "Read Article"
                })
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("style", {
          children: `
                .news-info {
                  height: 100%;
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }

                .news-info-cover {
                  width: 530px;
                  height: 412px;
                  border-radius: 40px;
                  margin-right: 70px;
                }

                .news-info-cover img {
                  width: 530px;
                  height: 412px;
                  object-fit: cover;
                  border-radius: 40px;
                }

                .news-info .news-info-wrapper {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  height: 100%;
                  width: 100vw;
                  max-width: 1120px;
                }

                .news-info-description {
                  width: calc(100% - 600px);
                }
                .news-info p {
                  font-family: Calibri;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 24px;
                  letter-spacing: 0em;
                  text-align: left;
                  margin: 0 0 10px 0;
                  color: #FFFFFF;                  
                }

                .news-info h6 {
                  font-family: Bahnschrift;
                  font-size: 32px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 38px;
                  letter-spacing: 0em;
                  text-align: left;
                  color: #FFFFFF;                  
                  margin: 0 0 28px 0;
                }

                .btn-read {
                  font-family: Bahnschrift;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 22px;
                  letter-spacing: 0em;
                  padding: 10px 25px;
                  color: #FFFFFF;
                  border: 1px solid #FFFFFF;
                  border-radius: 10px;
                  cursor: pointer;
                  text-align: center;
                  text-transform: capitalize;
                  width: fit-content;
                  margin-top: 50px;
              }
              

              @media only screen and (max-width: 800px){

                .news-info-cover {
                  width: 170px;
                  height: 100px;
                  border-radius: 10px;
                  margin-right: 0;
                }

                .news-info .news-info-wrapper {
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                }

                .news-info-cover img {
                  width: 170px;
                  height: 100px;
                  border-radius: 10px;
                }

                .news-info {
                  height: 252px !important;
                }

                .news-info .icon-shape-0 {
                  width: 30% !important;
                }

                .news-info-description {
                  width: 90% !important;
                  display: flex;

                  flex-direction: column;
                  align-items: center;
                }

                .news-info p {
                  font-family: Calibri;
                  font-style: italic;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 15px;
                  /* identical to box height */
                  margin: 5px 0 0 0;
                  text-align: center;
                }

                .news-info h6 {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 19px;
                  text-align: center;
                  margin-bottom: 14px;
                }

                .container-inner {
                  padding: 0;
                }

                .news-info-content {
                  display: none;
                }

                .btn-read {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  text-align: center;
                  margin-top: 0;
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

                .article-wrapper {
                  margin: 0 !important;
                  justify-content: flex-start;
                }

                .article-card-wrapper {
                  margin-bottom: 30px !important;
                  flex: 0 0 50% !important;
                }

                .container-inner {
                  padding: 0 !important;
                }
              }
              `
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container-inner",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "section-title-underline",
          children: "Latest Articles"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "article-wrapper",
          children: props.articles && props.articles.map((article, idx) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "article-card-wrapper",
            children: /*#__PURE__*/jsx_runtime_.jsx(article_ArticleCard, {
              picture: article.cover,
              name: article.title,
              slug: article.id,
              date: (0,utils/* utc_to_local_short */.vQ)(article.createdAt)
            }, idx)
          }, idx))
        })]
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
          `
    })]
  });
};

async function getServerSideProps() {
  const getBrands = await fetch(`${"http://eramitra.com"}/api/getBrands`);
  const brands = await getBrands.json();
  const getIndustry = await fetch(`${"http://eramitra.com"}/api/getIndustry`);
  const industries = await getIndustry.json();
  const getApplication = await fetch(`${"http://eramitra.com"}/api/getApplication`);
  const applications = await getApplication.json();
  const getArticles = await fetch(`${"http://eramitra.com"}/api/getArticle`);
  const articles = await getArticles.json();
  return {
    props: {
      articles: articles,
      brands: brands,
      industries: industries,
      applications: applications
    }
  };
}
/* harmony default export */ const news_info = (Home);

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
var __webpack_exports__ = __webpack_require__.X(0, [664,862,974], () => (__webpack_exec__(3322)));
module.exports = __webpack_exports__;

})();
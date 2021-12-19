"use strict";
(() => {
var exports = {};
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 7178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ career),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./containers/layout.js + 5 modules
var layout = __webpack_require__(9861);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/card/CareerCard.js




class CareerCard extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    const props = this.props;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "career-card",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "career-card-content",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
          className: "career-title",
          children: props.title
        }), this.state.isToggleOn ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          onClick: this.handleClick,
          className: "button-expand",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Details"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "material-icons",
            children: "expand_less"
          })]
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          onClick: this.handleClick,
          className: "button-expand",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Details"
          }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "material-icons",
            children: "expand_more"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "career-border"
      }), this.state.isToggleOn && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "career-expand",
        children: props.description
      }), /*#__PURE__*/jsx_runtime_.jsx("style", {
        children: `
                        .career-card {
                          display: flex;
                          flex-direction: column;
                          margin-bottom: 16px;
                          border-radius: 8px;
                          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
                          padding: 24px 30px;
                          background: #FFFFFF;
                        }

                        .career-content {
                          height: auto !important;
                          min-height: 1000px;
                        }

                        .career-card-content {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }

                        .career-card-content .career-title {
                            font-family: Bahnschrift;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 24px;
                            line-height: 29px;
                            color: #000000;
                            letter-spacing: 0em;
                            text-align: left;
                            margin: 0;
                            padding-right: 8px;
                        }

                        .career-card .career-expand {
                            font-family: Calibri;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 18px;
                            line-height: 22px;
                            letter-spacing: 0em;
                            text-align: left;        
                            margin-top: 20px;          
                        }

                        .career-card .career-expand a {
                          text-decoration: underline;
                          color: #1BA58A;
                        }

                        .career-border {
                          height: 3px;
                          width: 86.01px;
                          background-color: #1BA58A;
                          margin-top: 8px;
                        }

                        .button-expand {
                          background-color: #1BA58A;
                          padding: 4px 12px;
                          border-radius: 10px;
                          display: flex;
                          padding: 4px 12px;
                          cursor: pointer;
                        }

                        .button-expand p {
                          font-family: Bahnschrift;
                          font-style: normal;
                          font-weight: normal;
                          font-size: 18px;
                          line-height: 24px;
                          color: #FFFFFF;
                          margin: 0;
                        }

                        .button-expand span {
                          color: #FFFFFF;
                          padding-left: 8px;
                        }

                        @media only screen and (max-width: 800px){ 
                          .career-card {
                            margin-bottom: 8px;
                            padding: 10px;
                          }

                          .career-content {
                            height: auto !important;
                            min-height: 50vh;
                          }
                          
                          .career-border {
                            margin-top: 0px !important;
                            height: 2px;
                          }

                          .career-card-content .career-title {
                            font-family: Bahnschrift;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: 14px;
                            letter-spacing: 0em;
                            text-align: left;                            
                          }

                          .career-card-content .material-icons {
                            font-size: 14px;
                            line-height: 22px;
                          }

                          .career-card .career-expand {
                            font-family: Calibri;
                            font-size: 12px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 14px;
                            letter-spacing: 0em;
                            text-align: left;  
                            padding: 6px 0px;   
                            margin-top: 10px;                         
                          }

                          .button-expand p {
                            font-family: Bahnschrift;
                            font-size: 12px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: auto;
                            letter-spacing: 0em;
                            text-align: left;

                          }
                        }
                    `
      })]
    });
  }

}

/* harmony default export */ const card_CareerCard = (CareerCard);
// EXTERNAL MODULE: ./components/section.js
var section = __webpack_require__(974);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
;// CONCATENATED MODULE: ./pages/career.js







const Home = props => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    title: "test",
    applications: props.applications,
    brands: props.brands,
    industries: props.industries,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(section/* default */.Z, {
        element_id: "career",
        background: "#1BA58A",
        height: "351px",
        icon: [{
          image: "career.svg",
          vertical: "bottom",
          horizontal: "left"
        }, {
          image: "shape-3.svg",
          vertical: "top",
          horizontal: "right"
        }],
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container-inner",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "career-wrapper",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "career-description",
              children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "section-title",
                children: "Up for a challenge? Let\u2019s join us!"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("style", {
          children: `
                .career-wrapper {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }

                
                .career-wrapper .career-description {
                  display: flex;
                  align-items: center;
                }

                .career-wrapper .section-title {
                  margin: 0;
                  max-width: 496px;
                  color: #FFFFFF !important;
                  font-weight: normal !important;
                  text-align: center;
                }

                @media only screen and (max-width: 800px){

                  .career-card-wrapper {
                    margin-top: 20px !important;
                  }
                  .career .icon-shape-0 {
                    height: 124px;
                  }
                  
                  .career .icon-shape-1 {
                    display: none;
                  }

                  .career {
                    height: 137px !important;
                  }

                  .career-wrapper .section-title {
                    font-family: Bahnschrift;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 17px;
                    letter-spacing: 0em;
                    text-align: left;
                    width: 125px;

                  }

                  .career-wrapper {
                    justify-content: center !important;
                    padding-left: 50px;
                  }
                }
                
              `
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(section/* default */.Z, {
        element_id: "career-content",
        background: "#FFFFFF",
        icon: [{
          image: "shape-2.svg",
          vertical: "top",
          horizontal: "right"
        }],
        height: "1000px",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container-inner",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "career-card-wrapper",
            children: props.careers && props.careers.map((career, idx) => /*#__PURE__*/jsx_runtime_.jsx(card_CareerCard, {
              title: career.title,
              description: career.description
            }, idx))
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("style", {
          children: `
                .career-card-wrapper {
                  margin-top: 50px;
                }


                @media only screen and (max-width: 800px){

                  .career-content .icon-shape-0 {
                    display: none;
                  }
                  
                }
              `
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
  const getCareer = await fetch(`${process.env.ROOT_DOMAIN}/api/getCareer`);
  const careers = await getCareer.json();
  const getBrands = await fetch(`${process.env.ROOT_DOMAIN}/api/getBrands`);
  const brands = await getBrands.json();
  const getIndustry = await fetch(`${process.env.ROOT_DOMAIN}/api/getIndustry`);
  const industries = await getIndustry.json();
  const getApplication = await fetch(`${process.env.ROOT_DOMAIN}/api/getApplication`);
  const applications = await getApplication.json();
  return {
    props: {
      careers: careers,
      brands: brands,
      industries: industries,
      applications: applications
    }
  };
}
/* harmony default export */ const career = (Home);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,862,974], () => (__webpack_exec__(7178)));
module.exports = __webpack_exports__;

})();
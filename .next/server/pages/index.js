"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
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
;// CONCATENATED MODULE: ./components/article/ArticleCardHome.js




class ArticleCard extends (external_react_default()).Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "article-card-home",
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
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: `${"http://localhost:3001"}/news-info/${props.slug}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
            className: "article-name",
            children: [props.name, " "]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("style", {
        children: `

                    .article-card-home {
                        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
                        border-radius: 20px;
                        height: 400px;
                        width: 200px;
                        margin: 10px;
                    }

                    .article-card-home .article-picture-wrapper {
                        width: 100%;
                        border-radius: 20px 20px 0 0;
                    }

                    .article-card-home .article-picture {
                        width: 200px;
                        height: 200px;
                        object-fit: cover;
                        border-radius: 20px 20px 0 0;
                    }

                    .article-card-home .article-description {
                        padding: 10px;
                        width: 200px;
                    }

                    .article-card-home .article-date {
                        font-family: Calibri;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 17px;
                        color: #C4C4C4;
                        margin: 0 0 10px 0;
                    }

                    .article-card-home .article-name {
                        font-family: Bahnschrift;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 22px;
                        color: #000000;
                        margin: 0 0 24px 0;
                        word-wrap: wrap;
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

                        .article-card-home .article-date {
                            font-family: Calibri;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 12px;
                            line-height: 15px;
                            margin: 0 0 8px 0;
                        }

                        .article-card-home {
                        width: 150px;
                        height: 300px;
                    }

                    .article-card-home .article-picture {
                        width: 150px;
                        height: 150px;
                        object-fit: cover;
                    }

                    
                    .article-card-home .article-description {
                        padding: 10px;
                        width: 150px;
                    }

                    .article-card-home .article-name {
                            font-family: Bahnschrift;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 17px;
                            letter-spacing: 0em;
                            text-align: left;
                            margin: 0 0 16px 0;
                        }
                    }

                `
      })]
    });
  }

}

/* harmony default export */ const ArticleCardHome = (ArticleCard);
// EXTERNAL MODULE: ./helpers/utils.js
var utils = __webpack_require__(2820);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./pages/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









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
  const settings2 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000
  };
  const settings3 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    title: "PT. Era Mitra Perdana",
    applications: props.applications,
    brands: props.brands,
    industries: props.industries,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(section/* default */.Z, {
        element_id: "banner",
        background: "#FFFFFF",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "banner-slider",
          children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings2), {}, {
            children: props.banner && props.banner.map((banner, idx) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `banner-item`,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `banner-item-content-${idx}`
              }), /*#__PURE__*/jsx_runtime_.jsx("style", {
                children: `
                      .banner-item{
                        width: 100vw;
                        height: 80vh;
                      }
                      .banner-item-content-${idx} {
                        background: url(https://svr.eramitra.com/images/${banner.Picture.name});
                        width: 100vw;
                        height: 80vh;
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

                      .banner-slider .slick-next {
                        right: 30px;
                      }

                      .banner-slider .slick-prev {
                        left: 20px;
                        z-index: 5;
                      }

                      @media only screen and (max-width: 800px){
                        .banner-item{
                          width: 100vw;
                          height: 20vh;
                        }
                        .banner-item-content-${idx} {
                          width: 100vw;
                          height: 20vh;
                        }
  
                      }
                      `
              })]
            }, idx))
          }))
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(section/* default */.Z, {
        element_id: "about-us",
        background: "#FBFBFB",
        icon: [{
          image: "shape-1.svg",
          vertical: "bottom",
          horizontal: "right"
        }, {
          image: "shape-6.svg",
          vertical: "top",
          horizontal: "left"
        }],
        height: "618px",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "about-us-wrapper",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "http://cdn.eramitra.com/images_article/original/DSC00749.jpg"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "about-us-description",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "section-title",
                children: "About Us"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "section-description",
                children: "PT. Era Mitra Perdana provides Scientific, Laboratory Equipment, and Services. We are highly experienced and a trusted partner for Government Institutions, Universities, and Industries to supply, install, and provide after sales services in the area of scientific and laboratory equipment since 1999."
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("style", {
          children: `
                .about-us-wrapper {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                }

                .about-us-wrapper img {
                  height: 345px;
                  width: auto;
                  border-radius: 20px;
                  margin-right: 75px;
                }

                .about-us .icon-shape-1 {
                  display: none;
                }

                @media only screen and (max-width: 800px){

                  .about-us-wrapper {
                    flex-direction: column;
                    justify-content: center;
                  }

                  .about-us-wrapper img {
                    height: 111px;
                    width: auto;
                    border-radius: 20px;
                    margin-right: 0;
                    margin-bottom: 17px;
                  }

                  .about-us {
                    height: 308px !important;
                  }

                  .about-us .icon-shape-1 {
                    display: block;
                  }

                  .about-us .icon-shape-0 {
                    display: none;
                  }
                }
              `
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(section/* default */.Z, {
        element_id: "what-we-do-best",
        background: "#FFFFFF",
        icon: [{
          image: "shape-2.svg",
          vertical: "top",
          horizontal: "right"
        }],
        height: "1000px",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "what-we-do-best-wrapper",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "section-title",
              children: "What We Do Best"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "section-description",
              children: "We offer the best solution for Scientific, Laboratory Equipment, and Services"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "main-content",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "card-wrapper",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/static/images/wwdb-1.svg"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    children: ["High Quality with ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Competitive Price"]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/static/images/wwdb-2.svg"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    children: ["Installation & ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Training"]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/static/images/wwdb-3.svg"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    children: ["Accessories &", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Sparepart"]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "/static/images/wwdb-4.svg"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    children: ["Maintenance & ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Contract Service"]
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "what-we-do-img",
                src: "/static/images/what-we-do-best.svg"
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("style", {
          children: `
                .what-we-do-best-wrapper {
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                }
                .what-we-do-best-wrapper .section-title {
                  text-align: center;
                }
                
                .what-we-do-best-wrapper .section-description {
                  text-align: center;
                  max-width: 741px;
                }

                .what-we-do-best-wrapper .main-content {
                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                  margin-top: 76px;
                }

                .what-we-do-best-wrapper .card-wrapper {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  padding-bottom: 20px;
                }

                .wwdb-card {
                  background: #F8F8F8;
                  border-radius: 20px;
                  padding: 17px 19px;
                  display: flex;
                  align-items: center;
                  max-width: 439px;
                  margin: 5px 0;
                }

                .wwdb-card p {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 24px;
                  line-height: 29px;
                  color: #000000;
                  margin: 0 0 0 25px;
                  padding-right: 50px;
                }

                @media only screen and (max-width: 1024px){
                  .what-we-do-img {
                    width: 60%;
                  }
                }

                @media only screen and (max-width: 800px){
                  .what-we-do-best {
                    height: 452px !important;
                  }

                  .what-we-do-best .icon-shape-0.right {
                    height: 30%;
                  }

                  .wwdb-card {
                    background: #F8F8F8;
                    border-radius: 10px;
                    padding: 8px;
                    display: flex;
                    align-items: center;
                    max-width: 217px !important;
                  }
  
                  .wwdb-card img {
                    height: 45px;
                    width: auto;
                  }

                  .wwdb-card p {
                    font-family: Bahnschrift;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 14px;
                    margin: 0 0 0 12px !important;
                    padding-right: 50px;
                  }

                  .what-we-do-img {
                    display: none;
                  }

                  .what-we-do-best-wrapper {
                    padding: 25px 0;
                  }

                  .what-we-do-best-wrapper .main-content {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    margin-top: 26px;
                    height: 100%;
                  }

                  .what-we-do-best-wrapper .card-wrapper {
                    padding-bottom: 0px;
                  }
                }
              `
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(section/* default */.Z, {
        element_id: "brands",
        background: "#FBFBFB",
        height: "263px",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "brands-wrapper",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "brands-slider desktop",
              children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
                children: props.brands && props.brands.map((brand, idx) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "brands-item",
                  children: brand.Picture && brand.Picture.name && /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: `https://svr.eramitra.com/images/${brand.Picture.name}`
                  })
                }, idx))
              }))
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "brands-slider mobile",
              children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings2), {}, {
                children: props.brands && props.brands.map((brand, idx) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "brands-item",
                  children: brand.Picture && brand.Picture.name && /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: `https://svr.eramitra.com/images/${brand.Picture.name}`
                  })
                }, idx))
              }))
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "brands-description",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "section-title",
                children: "Brands"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "section-description",
                children: "Meet our principals"
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("style", {
          children: `
                .brands-wrapper {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                }

                .brands-wrapper .section-title {
                  margin: 0;
                }
                
                .brands-wrapper .section-description {
                  max-width: 280px;
                }

                .brands-slider.desktop {
                  width: 70%;
                  margin-right: 54px;
                }

                .brands-slider.mobile {
                  display: none;
                }


                .brands-item {
                  height: 40px;
                  display: flex;
                  justify-content: center;
                }

                .brands-item img{
                  height: 40px;
                  width: auto;
                  margin: 0 20px;
                }

                
                @media only screen and (max-width: 800px){
                    .brands-wrapper {
                      flex-direction: column-reverse;
                      justify-content: center;
                    }

                    
                    .brands-slider.mobile {
                      display: block;
                      width: 100%;
                      margin-right: 0 !important;
                      padding: 0 20px;
                    }

                    .brands-slider.desktop {
                      display: none;
                    }

                    .brands-item {
                      height: 30px;
                      display: flex;
                      justify-content: center;
                    }
    
                    .brands-item img{
                      height: 30px;
                      width: auto;
                      margin: 0 20px;
                    }

                    .brands-description {
                      margin-bottom: 25px;
                    }
    
                }
              `
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(section/* default */.Z, {
        element_id: "discover",
        background: "#FFFFFF",
        height: "768px",
        icon: [{
          image: "shape-4.svg",
          vertical: "top",
          horizontal: "left"
        }],
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "discover-wrapper",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "discover-description",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "section-title",
                children: "Discover"
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "section-description",
                children: "Discover our latest news and info"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "discover-slider",
              children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings2), {}, {
                children: props.articles && props.articles.data && props.articles.data.map((article, idx) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "article-card-wrapper",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(ArticleCardHome, {
                    picture: article.Picture && article.Picture.name,
                    name: article.title,
                    slug: article.id,
                    date: (0,utils/* utc_to_local_short */.vQ)(article.createdAt)
                  }, idx), /*#__PURE__*/jsx_runtime_.jsx("style", {
                    children: `

                      .discover-slider {
                        width: calc(100% - 500px);
                      }

                      .discover-description {
                        margin-right: 30px;
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

                      .discover-slider .slick-next {
                        right: 650px;
                        top: auto;
                        bottom: 10px;
                      }

                      .discover-slider .slick-prev {
                        left: -75px;
                        z-index: 5;
                        top: auto;
                        bottom: 10px;
                      }

                      @media only screen and (max-width: 800px){
                        .discover {
                          height: auto !important;
                          padding: 100px 0;
                        }
                        .discover-slider {
                          width: 100%;
                          margin-top: 40px;
                        }
                        .discover-slider .slick-next {
                          right: 0px;
                          top: -10px;
                          bottom: 10px;
                        }
  
                        .discover-slider .slick-prev {
                          left: auto;
                          z-index: 5;
                          top: -10px;
                          right: 20px;
                          bottom: auto;
                        }
  
                        .discover-description {
                          margin-right: 0px !important;
                        }
                      }
                      `
                  })]
                }, idx))
              }))
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("style", {
          children: `
                .discover-wrapper {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                }

                .discover-wrapper .section-description {
                  max-width: 350px;
                }

                @media only screen and (max-width: 800px){
                  .discover .icon-shape-0.left {
                    width: 25%;
                  }

                  .discover-wrapper {
                    flex-direction: column;
                    justify-content: center;
                  }
                }
                
              `
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(section/* default */.Z, {
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
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "career-wrapper",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "career-description",
              children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "section-title",
                children: "Up for a challenge? Let\u2019s join us!"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "btn-wrapper",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: `${"http://localhost:3001"}/career`,
                children: "More Info"
              })
            })]
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
                }

                .career-wrapper .btn-wrapper a {
                  padding: 21px 50px;
                  background: #FFFFFF;
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 24px;
                  line-height: 29px;
                  color: #1BA58A;
                  border-radius: 20px;
                }
                

                @media only screen and (max-width: 800px){

                  .career .icon-shape-0 {
                    height: 124px;
                  }
                  
                  .career .icon-shape-1 {
                    display: none;
                  }

                  .career {
                    height: 137px !important;
                  }

                  .career-wrapper .btn-wrapper a {
                    font-size: 12px;
                    line-height: 12px;
                    padding: 8px 15px;
                    border-radius: 8px;
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
                    justify-content: flex-end !important;
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

async function getServerSideProps() {
  const getBrands = await fetch(`${"http://localhost:3001"}/api/getBrands`);
  const brands = await getBrands.json();
  const getBanner = await fetch(`${"http://localhost:3001"}/api/getBanner`);
  const banner = await getBanner.json();
  const getIndustry = await fetch(`${"http://localhost:3001"}/api/getIndustry`);
  const industries = await getIndustry.json();
  const getApplication = await fetch(`${"http://localhost:3001"}/api/getApplication`);
  const applications = await getApplication.json();
  const getArticles = await fetch(`${"http://localhost:3001"}/api/getArticle`);
  const articles = await getArticles.json();
  return {
    props: {
      articles: articles,
      banner: banner,
      brands: brands,
      industries: industries,
      applications: applications
    }
  };
}
/* harmony default export */ const pages = (Home);

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
var __webpack_exports__ = __webpack_require__.X(0, [664,862,974], () => (__webpack_exec__(8001)));
module.exports = __webpack_exports__;

})();
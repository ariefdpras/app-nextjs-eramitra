"use strict";
(() => {
var exports = {};
exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 8868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _containers_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9861);
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(974);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9080);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Home = props => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true
  };
  const settings2 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_containers_layout__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    title: "About Us | PT. Era Mitra Perdana",
    applications: props.applications,
    brands: props.brands,
    industries: props.industries,
    catalogue: props.catalogue,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "header-about",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
          className: "green-tetra-img",
          src: "/static/images/green-tetra.svg"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "header-about-wrapper",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "header-img",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
              src: "http://cdn.eramitra.com/images_article/original/DSC00749.jpg"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
            className: "section-title",
            children: "About Us"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            className: "section-description",
            children: ["PT. Era Mitra Perdana provides Scientific, Laboratory Equipment, and Services. Established in Jakarta, We are committed to provide the best service, open communication, and proactively giving suggestion and alternate solution to support our principals and customers. ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), "To be the best in Scientific and Laboratory Equipment industry, PT Era Mitra Perdana is supported by highly qualified personnel, high quality product, and optimum after sales service. We are highly experienced and a trusted partner for Government Institutions, Universities, and Industries to supply, install, and provide after sales services in the area of scientific and laboratory equipment since 1999."]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("style", {
          children: `
                .header-about-wrapper {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-top: -250px;
                  padding-bottom: 78px;
                }

                .header-img {
                  width: 566px;
                  height: 345px;
                  border-radius: 20px;
                  margin-bottom: 70px;
                }

                .header-img img {
                  object-fit: cover;
                  width: 566px;
                  height: 345px;
                  border-radius: 20px;
                }

                .header-about .section-title {
                  text-align: center;
                  width: 55%;
                  max-width: 700px;
                }
                
                .header-about .section-description {
                  text-align: center;
                  width: 55%;
                  max-width: 700px;
                  text-align: justify !important;
                }


                @media only screen and (max-width: 800px){

                  .header-about-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: -50px;
                    padding-bottom: 30px;
                  }

                  .header-about .section-description {
                    text-align: center;
                    width: 100%;
                    padding: 0 20px;
                    text-align: justify !important;
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_section__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        element_id: "vision-about",
        background: "#FBFBFB",
        height: "618px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "vision-about-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "about-us-description",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                className: "section-title",
                children: "Vision"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                className: "section-description",
                children: "To be the best and most reliable partner for our principals and clients in Scientific and Laboratory Equipment Industry."
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
              src: "/static/images/vision.svg"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("style", {
          children: `
                .vision-about-wrapper {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                }

                .vision-about-wrapper img {
                  height: 60%;
                  width: auto;
                  border-radius: 20px;
                  margin-left: 75px;
                }

                @media only screen and (max-width: 800px){
                  .vision-about {
                    height: 400px !important;
                  }

                  .vision-about-wrapper {
                    flex-direction: column-reverse;
                    justify-content: center;
                
                  }

                  .vision-about-wrapper img {
                    height: auto;
                    width: 70%;
                    margin-left: 0;
                    margin-bottom: 20px;
                  }

                }
              `
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_section__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        element_id: "mission-about",
        background: "#FFFFFF",
        icon: [{
          image: "shape-5.svg",
          vertical: "bottom",
          horizontal: "right"
        }],
        height: "618px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "mission-about-wrapper",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
              src: "/static/images/mission.svg"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "mission-description",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                className: "section-title",
                children: "Mission"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                className: "section-description",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
                  className: "section-mission",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                    children: "Provide high quality product and services with competitive price"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                    children: "Be proactive during the end-to-end process in supporting principals and clients"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                    children: "Continuously learning and sharing insights regarding Scientific and Laboratory Industry"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                    children: "Company digitalization to provide easier access for consumers"
                  })]
                })
              })]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("style", {
          children: `
                .mission-about-wrapper {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                }

                .mission-about-wrapper img {
                  height: 70%;
                  width: auto;
                  border-radius: 20px;
                  margin-right: 75px;
                }

                .section-mission {
                  margin-left: -20px;
                  text-align: justify !important;
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


                @media only screen and (max-width: 800px){

                  .mission-about {
                    height: auto !important;
                    padding: 40px 0px;
                  }

                  .mission-about-wrapper {
                    flex-direction: column;
                    justify-content: center;                
                  }

                  .mission-about-wrapper img {
                    height: auto;
                    width: 70%;
                    margin-right: 0;
                    margin-bottom: 20px;
                  }
                  .mission-about .icon-shape-0 {
                    display: none;
                  }

                  .mission-about .section-description {
                    text-align: justify;
                  }
                  .section-mission {
                    margin-left: -20px;
                  }
                }
              `
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_section__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        element_id: "values",
        background: "#FBFBFB",
        icon: [{
          image: "shape-4.svg",
          vertical: "top",
          horizontal: "left"
        }],
        height: "768px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "values-wrapper",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
              className: "section-title",
              children: "Values"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "values-card-wrapper",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "values-card",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                  className: "values-img other-perform",
                  src: "/static/images/bond.svg"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                  children: "Bond"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                  children: "We aim to be the best and most reliable partner for all stakeholders which we believe started from having a strong bond."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "values-card",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                  className: "values-img ",
                  src: "/static/images/performance.svg"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                  children: "Performance"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                  children: " We are committed to perform in the best way possible in all projects by being a proactive partner."
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "values-card",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                  className: "values-img other-perform",
                  src: "/static/images/process.svg"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h6", {
                  children: "Process"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                  children: "We believe process is an important part in all projects and are committed to be a reliable partner for our stakeholders along the process."
                })]
              })]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("style", {
          children: `
                .values-wrapper {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                }

                .values-card-wrapper {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-top: 40px;
                }

                .values-card {
                  width: 30%;
                  margin: 0 20px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                }

                .other-perform {
                  padding: 10px;
                }


                .values-card img {
                  margin-bottom: 20px;
                }

                .values-card h6 {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 24px;
                  line-height: 29px;
                  text-align: center;
                  margin: 0 0 5px 0;
                }

                .values-card p {
                  font-family: Calibri;
                  font-style: italic;
                  font-weight: normal;
                  font-size: 20px;
                  line-height: 24px;
                  text-align: center;
                  color: #666A66;
                }


                @media only screen and (max-width: 800px){
                  .values {
                    height: auto !important;
                    padding: 40px 0;
                  }

                  .values .icon-shape-0 {
                    width: 20% !important;
                  }
                  .values .section-title {
                    font-family: Bahnschrift;
                  font-size: 24px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 29px;
                  letter-spacing: 0em;
                  text-align: center;

                  }
                 .values-card-wrapper {
                   flex-direction: column;
                   margin-top: 20px;
                 }

                 .values-img {
                  width: 20%;
                  margin-bottom: 10px !important;
                }
                 .values-img.other-perform {
                   width: 30%;
                   margin-bottom: 10px !important;
                 }

                

                 .values-card {
                   width: 80%;
                   margin-bottom: 20px;
                 }

                 .values-card h6 {
                  font-family: Bahnschrift;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 19px;
                  letter-spacing: 0em;
                  text-align: center;

                 }

                 .values-card p {
                  font-family: Calibri;
                  font-size: 12px;
                  font-style: italic;
                  font-weight: 400;
                  line-height: 15px;
                  letter-spacing: 0em;
                  text-align: center;
                  margin: 0 !important;
                  
                 }

                }
              `
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_section__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        element_id: "what-we-do-best",
        background: "#FFFFFF",
        icon: [{
          image: "shape-2.svg",
          vertical: "top",
          horizontal: "right"
        }],
        height: "1000px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "what-we-do-best-wrapper",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
              className: "section-title",
              children: "What We Do Best"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
              className: "section-description",
              children: ["We offer the best solution for ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), "Scientific, Laboratory Equipment, and Services"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "main-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "card-wrapper",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: "/static/images/wwdb-1.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
                    children: ["High Quality with ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), " Competitive Price"]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: "/static/images/wwdb-2.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
                    children: ["Installation & ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), "Training"]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: "/static/images/wwdb-3.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
                    children: ["Accessories &", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), " Sparepart"]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "wwdb-card",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: "/static/images/wwdb-4.svg"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
                    children: ["Maintenance & ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), " Contract Service"]
                  })]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                className: "what-we-do-img",
                src: "/static/images/what-we-do-best.svg"
              })]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("style", {
          children: `

                .mobile-only {
                  display: none;
                }

                .desktop-only {
                  display: block;
                }

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
                  .mobile-only {
                    display: block;
                  }
                  
                  .desktop-only {
                    display: none;
                  }
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_section__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        element_id: "brands",
        background: "#FBFBFB",
        height: "263px",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "brands-wrapper",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "brands-slider desktop",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({}, settings), {}, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                  className: "brands-item",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: `https://svr.eramitra.com/images/pertamina.png`
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                  className: "brands-item",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: `https://svr.eramitra.com/images/bmkg.png`
                  })
                })]
              }))
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "brands-slider mobile",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({}, settings2), {}, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                  className: "brands-item",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: `https://svr.eramitra.com/images/pertamina.png`
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                  className: "brands-item",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                    src: `https://svr.eramitra.com/images/bmkg.png`
                  })
                })]
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "brands-description",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h3", {
                className: "section-title",
                children: "Our clients"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                className: "section-description",
                children: "Meet our clients"
              })]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("style", {
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
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("style", {
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
  const getBrands = await fetch(`${"https://staging.eramitra.com"}/api/getBrands`);
  const brands = await getBrands.json();
  const getIndustry = await fetch(`${"https://staging.eramitra.com"}/api/getIndustry`);
  const industries = await getIndustry.json();
  const getApplication = await fetch(`${"https://staging.eramitra.com"}/api/getApplication`);
  const applications = await getApplication.json();
  const getCatalogue = await fetch(`${"https://staging.eramitra.com"}/api/getCatalogue`);
  const catalogue = await getCatalogue.json();
  return {
    props: {
      brands: brands,
      industries: industries,
      applications: applications,
      catalogue: catalogue
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
var __webpack_exports__ = __webpack_require__.X(0, [664,862,974], () => (__webpack_exec__(8868)));
module.exports = __webpack_exports__;

})();
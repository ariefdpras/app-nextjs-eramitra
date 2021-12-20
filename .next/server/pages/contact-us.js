"use strict";
(() => {
var exports = {};
exports.id = 455;
exports.ids = [455];
exports.modules = {

/***/ 1868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact_us),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./containers/layout.js + 5 modules
var layout = __webpack_require__(9861);
// EXTERNAL MODULE: ./components/section.js
var section = __webpack_require__(974);
;// CONCATENATED MODULE: external "react-select"
const external_react_select_namespaceObject = require("react-select");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/contact-us.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Home = props => {
  const {
    0: TempDataForm,
    1: setDataForm
  } = (0,external_react_.useState)({
    issue: {
      value: "",
      label: ""
    },
    contact: {
      name: "",
      company: "",
      email: "",
      phone: ""
    },
    instrument: {
      name: "",
      brand: "",
      model: "",
      serial: ""
    },
    message: ""
  });
  const customStyles = {
    option: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      textTransform: "capitalize",
      maxHeight: "32px",
      fontSize: "14px",
      fontFamily: "Bahnschrift",
      color: !state.isSelected || state.isFocused ? "#000" : "#fff",
      backgroundColor: state.isFocused ? "#ace8dc;" : state.isSelected ? " #1BA58A;" : "#fff"
    }),
    menuList: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      maxHeight: "250px"
    }),
    multiValue: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      fontFamily: "Bahnschrift",
      fontSize: "12px",
      color: "black",
      borderRadius: "2px",
      padding: "1px",
      backgroundColor: "lavenderblush"
    }),
    singleValue: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      fontFamily: "Bahnschrift",
      fontSize: "14px",
      color: "black"
    }),
    NoOptionsMessage: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      fontFamily: "Bahnschrift",
      fontSize: "14px",
      color: "red"
    }),
    placeholder: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      fontFamily: "Bahnschrift",
      fontSize: "14px",
      color: "#aeaeae"
    }),
    container: (provided, state) => _objectSpread({}, provided),
    control: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      textTransform: "capitalize",
      borderRadius: "4px",
      borderColor: "#DFE3E8",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#DFE3E8"
      }
    }),
    indicatorSeparator: styles => ({
      display: "none"
    }),
    dropdownIndicator: (base, state) => _objectSpread(_objectSpread({}, base), {}, {
      transition: "all .2s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null
    })
  };

  const onChangeForm = params => {
    setDataForm(_objectSpread({}, params));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    title: "test",
    applications: props.applications,
    brands: props.brands,
    industries: props.industries,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(section/* default */.Z, {
        element_id: "contact-us",
        background: "#1BA58A",
        height: "774px",
        icon: [{
          image: "shape-7.svg",
          vertical: "bottom",
          horizontal: "left"
        }],
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container-inner",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "contact-us-wrapper",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "left-col",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: "Contact Us"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
                children: ["Any question and remarks? ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Just hit us up!"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "icon-text",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "material-icons",
                  children: "phone"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: " +62-21-86612458"
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
              className: "right-col",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                children: "Customer Service"
              }), /*#__PURE__*/jsx_runtime_.jsx((external_react_select_default()), {
                className: "issue-select",
                placeholder: "Issue",
                id: "id_issue_select",
                options: [{
                  value: "test",
                  label: "test"
                }, {
                  value: "ini",
                  label: "ini"
                }],
                onChange: e => onChangeForm(_objectSpread(_objectSpread({}, TempDataForm), {}, {
                  issue: {
                    value: e.value,
                    label: e.label
                  }
                })),
                value: TempDataForm.issue.label ? TempDataForm.issue : "",
                styles: customStyles
              }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Contact Information"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  placeholder: "Name"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  placeholder: "Company (optional)"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  placeholder: "Email"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  placeholder: "Phone"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Instrument Information"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  placeholder: "Name"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  placeholder: "Brand"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  placeholder: "Model"
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  placeholder: "Serial Number"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Message"
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                rows: "5",
                placeholder: "Message"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "btn-submit",
                href: `${"http://staging.eramitra.com"}/checkout`,
                children: "Submit"
              })]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("style", {
          children: `
                .contact-us {
                  height: 100%;
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }

                .contact-us .contact-us-wrapper {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  height: 100%;
                  width: 100vw;
                  padding: 50px;    
                  max-width: 1120px;
                }

                .contact-us .icon-text {
                  display: flex;
                  padding: 15px;
                  border: 1px solid #FFFFFF;
                  margin-top: 30px;
                }

                .contact-us .left-col p {
                  font-family: Bahnschrift;
                  font-size: 24px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 29px;
                  letter-spacing: 0em;
                  text-align: left;
                  color: #FFFFFF;                  
                }

                .contact-us .left-col h6 {
                  font-family: Calibri;
                  font-size: 24px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 29px;
                  letter-spacing: 0em;
                  text-align: left;
                  color: #FFFFFF;
                  margin: 0 0 80px 0;
                }

                .contact-us .left-col h4 {
                  font-family: Bahnschrift;
                  font-size: 72px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 86px;
                  letter-spacing: 0em;
                  text-align: left;
                  color: #FFFFFF;     
                  margin: 0 0 5px 0;             
                }

                .contact-us .icon-text span {
                  padding-right: 10px;
                  color: #FFFFFF;
                }

                .contact-us .icon-text p {
                  margin: 0px;
                }

                .contact-us .right-col {
                  width: 464px;
                  background: #FFFFFF;
                  border-radius: 10px;
                  height: 100%;
                  padding: 30px 40px;
                  display: flex;
                  flex-direction: column;
                }

                .contact-us .right-col h4 {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 32px;
                  line-height: 38px;
                  text-align: center;
                  margin: 0 0 14px 0;
                  color: #1BA58A;
                }

                .contact-us .right-col h6 {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 20px;
                  line-height: 24px;
                  margin: 27px 0 14px 0;
                  color: #1BA58A;
                }

                .contact-us .right-col .form-group {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 8px;
                }

                .contact-us .right-col input, .contact-us .right-col textarea {
                  border: 1px solid #DFE3E8;
                  padding: 5px 10px;
                  border-radius: 3px;
                  font-family: Bahnschrift;
                  width: 100%;
                }

                .contact-us .right-col textarea {
                  margin-bottom: 16px;
                }

                .btn-submit {
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
              

              @media only screen and (max-width: 800px){

                .contact-us .icon-shape-0 {
                  top: 0;
                  bottom: none;
                  width: 30%;
                }

                .contact-us .container-inner {
                  padding: 0;
                }
                .contact-us .contact-us-wrapper {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  flex-direction: column;
                  padding: 25px;
                }


                .contact-us .left-col p {
                  font-family: Bahnschrift;
                  font-size: 10px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 12px;
                  letter-spacing: 0em;
                  text-align: left;
                  color: #FFFFFF;                  
                }

                .contact-us .left-col span {
                  font-size: 10px;
                }

                .contact-us .left-col h6 {
                  font-family: Calibri;
                  font-size: 10px;
                  font-style: italic;
                  font-weight: 400;
                  line-height: 12px;
                  letter-spacing: 0em;
                  text-align: left;

                  text-align: center;
                  margin: 0;
                }

                .contact-us .left-col h4 {
                  font-family: Bahnschrift;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 22px;
                  letter-spacing: 0em;
                  text-align: left;
                  
                  text-align: center;
                  margin: 0 0 5px 0;             
                }

                .contact-us .icon-text {
                  display: flex;
                  padding: 3px;
                  border: 1px solid #FFFFFF;
                  margin-top: 10px;
                }


                .contact-us .right-col {
                  width: 100%;
                  background: #FFFFFF;
                  border-radius: 5px;
                  height: 100%;
                  padding: 20px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  margin-top: 20px;
                }

                .contact-us .right-col .issue-select {
                  width: 100%;
                }

                .contact-us .right-col h4 {
                  font-family: Bahnschrift;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 22px;
                  letter-spacing: 0em;
                  text-align: center;
                }

                .contact-us .right-col h6 {
                  font-family: Bahnschrift;
                  font-size: 12px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 14px;
                  letter-spacing: 0em;
                  text-align: left;

                }

                .btn-submit {
                
                  font-size: 12px;
                  line-height: 12px;
                  padding: 8px 15px;
                  border-radius: 8px;
                  width: fit-content;
              }
              .container-inner {
                padding: 0;
              }


              }
              `
        })]
      })
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
  const getBrands = await fetch(`${"http://staging.eramitra.com"}/api/getBrands`);
  const brands = await getBrands.json();
  const getIndustry = await fetch(`${"http://staging.eramitra.com"}/api/getIndustry`);
  const industries = await getIndustry.json();
  const getApplication = await fetch(`${"http://staging.eramitra.com"}/api/getApplication`);
  const applications = await getApplication.json();
  return {
    props: {
      brands: brands,
      industries: industries,
      applications: applications
    }
  };
}
/* harmony default export */ const contact_us = (Home);

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
var __webpack_exports__ = __webpack_require__.X(0, [664,862,974], () => (__webpack_exec__(1868)));
module.exports = __webpack_exports__;

})();
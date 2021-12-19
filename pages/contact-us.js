import Layout from "Containers/layout";
import Section from "Components/section";
import Select from "react-select";
import React, { useState } from 'react';

const Home = (props) => {

  const [TempDataForm, setDataForm] = useState({
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
  })

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      textTransform: "capitalize",
      maxHeight: "32px",
      fontSize: "14px",
      fontFamily: "Bahnschrift",
      color: !state.isSelected || state.isFocused ? "#000" : "#fff",
      backgroundColor: state.isFocused
        ? "#ace8dc;"
        : state.isSelected
        ? " #1BA58A;"
        : "#fff",
    }),
    menuList: (provided, state) => ({
      ...provided,
      maxHeight: "250px",
    }),
    multiValue: (provided, state) => ({
      ...provided,
      fontFamily: "Bahnschrift",
      fontSize: "12px",
      color: "black",
      borderRadius: "2px",
      padding: "1px",
      backgroundColor: "lavenderblush",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontFamily: "Bahnschrift",
      fontSize: "14px",
      color: "black",
    }),
    NoOptionsMessage: (provided, state) => ({
      ...provided,
      fontFamily: "Bahnschrift",
      fontSize: "14px",
      color: "red",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontFamily: "Bahnschrift",
      fontSize: "14px",
      color: "#aeaeae",
    }),
    container: (provided, state) => ({
      ...provided,
      // width: '458px',
    }),
    control: (provided, state) => ({
      ...provided,
      textTransform: "capitalize",
      borderRadius: "4px",
      borderColor: "#DFE3E8",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#DFE3E8",
      },
    }),
    indicatorSeparator: (styles) => ({ display: "none" }),
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: "all .2s ease",
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),
  };


  const onChangeForm = (params) => {
    setDataForm({ ...params });
  };

  return (
      <Layout
        title="test"
        applications={props.applications}
        brands={props.brands}
        industries={props.industries} > 
        <div className="container">
        <Section 
            element_id="contact-us" 
            background="#1BA58A"  
            height="774px"
            icon={[
              {
                image: "shape-7.svg",
                vertical: "bottom",
                horizontal: "left"
              }
            ]}  >
            <div className="container-inner">
              <div className="contact-us-wrapper">
                <div className="left-col">
                  <h4>Contact Us</h4>
                  <h6>Any question and remarks? <br></br> Just hit us up!</h6>
                  <div className="icon-text"><span className="material-icons">phone</span><p> +62-21-86612458</p></div>
                  <div className="icon-text"><span className="material-icons">mail_outline</span><p>sales@eramitra.com</p></div>
              
                </div>
                <div className="right-col">
                  <h4>Customer Service</h4>
                  <Select
                    className="issue-select"
                    placeholder="Issue"
                    id="id_issue_select"
                    options={[{ value: "test", label: "test"}, { value: "ini", label: "ini"}]}
                    onChange={(e) =>
                      onChangeForm({
                        ...TempDataForm,
                        issue: {
                          value: e.value,
                          label: e.label
                        }
                      })
                    }
                    value={TempDataForm.issue.label ? TempDataForm.issue : ""}
                    styles={customStyles}
                  />
                  <h6>Contact Information</h6>
                  <div className="form-group">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Company (optional)"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Phone"/>
                  </div>
                  <h6>Instrument Information</h6>
                  <div className="form-group">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Brand"/>
                    <input type="text" placeholder="Model"/>
                    <input type="text" placeholder="Serial Number"/>
                  </div>
                  <h6>Message</h6>
                  <textarea rows="5" placeholder="Message"/>
                  <a className="btn-submit" href={`${process.env.ROOT_DOMAIN}/checkout`}>Submit</a>
            
                </div>
              </div>
            </div>
            <style>
              {`
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
              `}
            </style>
          </Section>
          
        </div>
        <style>
          {`
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
          `}
        </style>
      </Layout>
  );
}

export async function getServerSideProps() {

  const getBrands = await fetch(`${process.env.ROOT_DOMAIN}/api/getBrands`)
  const brands = await getBrands.json()


  const getIndustry = await fetch(`${process.env.ROOT_DOMAIN}/api/getIndustry`)
  const industries = await getIndustry.json()


  const getApplication = await fetch(`${process.env.ROOT_DOMAIN}/api/getApplication`)
  const applications = await getApplication.json()

  return { props: { brands: brands, industries: industries, applications: applications }}
}

export default Home;


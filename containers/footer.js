import React from "react";
import Link from "next/link";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;

    return (
      <div className="footer-container">
        <div className="footer upper">
          <div className="footer-wrapper">
            <div className="footer-inner-content-wrapper">
              <div className="footer-left">
                <h2>OUR LOCATION</h2>
                <div className="location-group">
                  <h2>Head Office - Jakarta</h2>
                  <p>Ruko Buaran Persada No. 31 <br></br>Jl. R. Soekamto Duren Sawit Jakarta 13450, Indonesia</p>
                  <div className="icon-text"><span className="material-icons">phone</span><p> +62-21-86612458 (Fax: +62-21-86612365)</p></div>
                  <div className="icon-text"><span className="material-icons">mail_outline</span><p>sales@eramitra.com</p></div>
                </div>                
                <div className="location-group">
                  <h2>Branch Office - Surabaya</h2>
                  <p>Jl. Kebon Sari V No. 7G - Surabaya</p>
                  <div className="icon-text"><span className="material-icons">phone</span><p> +62-21-86612458 (Fax: +62-21-86612365)</p></div>
                  <div className="icon-text"><span className="material-icons">mail_outline</span><p>sales@eramitra.com</p></div>
                </div>
              </div>
              <div className="reach-us">
                 <h2>REACH US</h2>
                 <div className="form-reach-us"><input type="text" placeholder="Name"/></div>
                 <div className="form-reach-us"><input type="text" placeholder="Phone Number"/></div>
                 <div className="form-reach-us"><input type="text" placeholder="Email"/></div>
                 <div className="form-reach-us"><input type="text" placeholder="Company"/></div>
                 <div className="form-reach-us"><textarea rows="5" placeholder="Message"/></div>
                 <a className="btn-submit-reach" onClick={() => {}}>Submit</a>
              </div>
            </div>
          </div>
          <img className="footer-shape" src="/static/images/footer-shape.svg" />
        </div>
        <div className="footer bottom">
          <div className="footer-wrapper">
            <div className="footer-inner-content-wrapper">
              <div className="footer-left">
                <div className="info-wrapper">
                  <a href={`${process.env.ROOT_DOMAIN}`}>
                    <img className="logo" src="/static/images/logo-white.png" />
                  </a>
                </div>
              </div>

              <div className="hyperlink-column">
                <div className="col footer-link">
                  <h2>Newsletter</h2>
                  <div className="form-newsletter">
                    <input type="text" placeholder="Your Email"/>
                    <a className="btn-subscribe" onClick={() => {}}>Subscribe</a>
                  </div>
                  <h2>Follow Us</h2>
                  <div className="social-media-wrapper">
                    <a href="https://www.instagram.com/byebeli/">
                      <img
                        className="logo-social"
                        src="/static/icons/instagram.svg"
                      />
                    </a>
                    {/* <img className="logo-social" src="/static/icons/facebook.svg" />
                                      <img className="logo-social" src="/static/icons/linkedin.svg" /> */}
                    <a href="http://line.me/R/ti/p/@ywh9023y">
                      <img className="logo-social" src="/static/icons/line.svg" />
                    </a>
                    <a href="http://line.me/R/ti/p/@ywh9023y">
                      <span className="material-icons white">
                      mail
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col footer-link page">
                  <h2>Page</h2>
                  <Link href={`${process.env.ROOT_DOMAIN}/about-us`}>
                    <a>About Us</a>
                  </Link>
                  <Link href={`${process.env.ROOT_DOMAIN}/career`}>
                    <a>Career</a>
                  </Link>
                  <Link href={`${process.env.ROOT_DOMAIN}/contact-us`}>
                    <a>Contact Us</a>
                  </Link>
                  <Link href={`${process.env.ROOT_DOMAIN}/contact-us`}>
                    <a>Customer Service</a>
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="copyright">
              <p>copyright</p>
              <span className="material-icons">copyright</span>
              <p>forte tech 2021</p>
            </div> */}
          </div>
        </div>
        <style>
          {`

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
                `}
        </style>
      </div>
    );
  }
}

export default Header;

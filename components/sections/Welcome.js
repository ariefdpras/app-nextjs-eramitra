import React from "react";
import RentNow from "../button/RentNow";

class Welcome extends React.Component {
  //   constructor(props) {
  //     super(props)
  //   }

  render() {
    // const props = this.props

    return (
      <div className="welcome-section">
        <div className="container-inner column">
          <div className="welcome-right">
            <h3>
              Tradha Foundation adalah bagian dari Tradha Group yang didirikan
              sebagai bentuk komitmen sosial perusahaan terhadap perkembangan
              Kebumen.
            </h3>
          </div>
          <img className="welcome-left" src="/static/images/about-us.svg" />
        </div>
        <style>
          {`
                .welcome-section {
                    height: 774px;
                    background: #F5FFEE;
                }

                .welcome-left {
                    width: 45%;
                    height: 45%;
                }
                
                .welcome-right {
                    width: 62%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }

                .welcome-right h3 {
                    font-family: Poppins;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 32px;
                    line-height: 48px;
                    color: #4B8343;
                }

                .container-inner.column {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;
                }
                @media only screen and (max-width: 600px){
                    .welcome-right h3 {
                        font-family: 'Open Sans', sans-serif;
                        font-weight: 600;
                        text-align: right;
                        font-size: 20px;
                        margin-bottom: 24px;
                    }

                    .welcome-right {
                        width: 68%;
                        margin-left: -150px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                    }
                }
                `}
        </style>
      </div>
    );
  }
}

export default Welcome;

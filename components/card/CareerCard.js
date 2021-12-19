import React from 'react'

class CareerCard extends React.Component {
  constructor(props) {
    super(props)
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
    const props = this.props

    return (
            <div className="career-card">
              <div className="career-card-content">
                <h5 className="career-title">{props.title}</h5>
                { this.state.isToggleOn ? <a onClick={this.handleClick} className="button-expand"><p>Details</p><span className="material-icons">expand_less</span></a> : 
                <a onClick={this.handleClick} className="button-expand"><p>Details</p> <span className="material-icons">expand_more</span></a> }
              </div>
              
              <div className="career-border"></div>
                { this.state.isToggleOn &&
                <div className="career-expand">
                    {props.description}
                </div> }
                    
            <style>
                    {`
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
                    `}
            </style>
            </div>
      )
    }
}

export default CareerCard
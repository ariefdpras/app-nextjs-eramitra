import React from 'react'

class RentNow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props

    return (
        <a className="rent-now-button" href="https://api.whatsapp.com/send/?phone=6281337928622&text&app_absent=0">
            <div className="rent-now-inner-wrapper">
                <p>Rent Now !</p>
                <img className="logo-social" src="/static/icons/whatsapp.svg" />
            </div>
            <style>
                {`
                    .rent-now-button {
                        width: ${props.width ? props.width : '200px'};
                        height: ${props.height ? props.height : '50px'};
                    }
                    
                    .rent-now-inner-wrapper {
                        background-color: #28A745;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        align-content: center;
                        padding: 0 10px;
                        width: ${props.width ? props.width : '200px'};
                        height: ${props.height ? props.height : '50px'};
                        border-radius: 4px;
                    }

                    .rent-now-inner-wrapper p {
                        color: white;
                        font-family: Open Sans;
                        font-weight: 600;
                        font-size: 14px;
                        text-transform: uppercase;
                    }

                    @media only screen and (max-width: 800px){
                        .rent-now-inner-wrapper p {
                            font-size: 12px;
                        }
                    }
                `}
            </style>
        </a>
      )
    }
}

export default RentNow
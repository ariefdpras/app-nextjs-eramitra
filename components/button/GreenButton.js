import React from "react";

class GreenButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;

    return (
      <a className="green-button" href={props.link}>
        <div className="green-button-wrapper">
          <p>{props.text}</p>
        </div>
        <style>
          {`
                    .green-button-wrapper {
                        background: #4B8343;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-content: center;
                        width: fit-content;
                        padding: 4px 18px;
                        border-radius: 10px;
                    }

                    .green-button-wrapper p {
                        color: white;
                        font-family: Poppins;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 21px;
                        margin: 0;
                    }

                    @media only screen and (max-width: 800px){
                        .green-button-wrapper p {
                            font-size: 10px;
                        }
                    }
                `}
        </style>
      </a>
    );
  }
}

export default GreenButton;

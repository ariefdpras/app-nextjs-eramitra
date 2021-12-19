import React from 'react'

class TestimonialCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props

    return (
        <div className={`testimonial-card ${props.size ? "big" : "small"}`}>
            <img className="testimonial-picture" src={props.picture} />
            <h5>{props.name}</h5>
            <p>{props.testimonial}</p>
            <style>
                {`
                    .testimonial-card.small {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 30px 25px;
                        background: linear-gradient(180deg, #81C4E1 0%, #5294BD 100%);
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
                        border-radius: 8px;
                        width: 350px;
                        height: 150px;
                        margin: 5px;
                    }

                    .testimonial-card.big {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 30px 25px;
                        background: linear-gradient(180deg, #81C4E1 0%, #5294BD 100%);
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
                        border-radius: 8px;
                        width: 350px;
                        height: 200px;
                        margin: 5px;
                    }

                    .testimonial-picture {
                        height: 60px;
                        width: 60px;
                        margin-top: -60px;
                        border-radius: 50%;
                        filter: drop-shadow(0px 4px 10px rgba(255, 255, 255, 0.2));
                    }

                    .testimonial-card h5 {
                        font-family: Open Sans;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: 20px;
                        letter-spacing: 0em;
                        text-align: center;
                        margin: 8px 0 16px 0;
                    }

                    .testimonial-card p {
                        font-family: Open Sans;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 17px;
                        letter-spacing: 0em;
                        text-align: center;
                        color: #FFFFFF;
                        margin: 0;
                    }

                    @media only screen and (max-width: 1100px){ 
                        .testimonial-card.small {
                            width: 350px;
                            height: 180px;
                        }
    
                        .testimonial-card.big {
                            width: 330px;
                            height: 210px;
                        }
                    }
                `}
            </style>
        </div>
      )
    }
}

export default TestimonialCard
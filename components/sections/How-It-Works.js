import React from 'react'
import HowCard from '../how-it-works/How-Card'
import Title from '../Title'
class HowItWorks extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props

    return (
        <div className="how-it-works">
            <Title text={"Cara Kerja"} position={"center"} element_id={"how-title"}/>
            <div className="how-it-works-wrapper">   
                    <HowCard text={"1. Select a rental item"} picture={"/static/images/how-it-works/how-it-works-1.svg"}/>
                    <HowCard text={"2. Get it delivered to your doorstep"} picture={"/static/images/how-it-works/how-it-works-2.svg"}/>
                    <HowCard text={"3. Schedule a return at your convenience."} picture={"/static/images/how-it-works/how-it-works-3.svg"}/>
                    <style>
                    {`
                        .how-it-works{
                            width: 100vw;
                            height: 1057px;
                            background-color: #ffffff;
                            background-image: url('static/images/how-it-works.svg');
                            background-size: 100%;
                            background-position: top center;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            margin-top: -50px;
                        }

                        .how-it-works-wrapper {
                            display: flex;
                            flex-wrap: wrap;
                            align-content: center;
                            justify-content: center;
                        }

                        @media only screen and (max-width: 800px){ 
                            .how-it-works{
                                height: auto;
                                background-image: none;
                                margin-top: 40px;
                            }         

                            .how-it-works-wrapper {
                                flex-direction: column;
                            }


                        }
                    `}
                </style>
            </div>
        </div>
      )
    }
}

export default HowItWorks
import React from 'react'

class Title extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props

    return (
            <div className={props.element_id}>
                <h3 className={props.position}>{props.text}</h3>
            
            <style>
                    {`
                        .${props.element_id} .center {
                            position: relative;
                            font-family: Open Sans;
                            font-size: 70px;
                            font-style: normal;
                            font-weight: 700;
                            line-height: 95px;
                            letter-spacing: 0em;
                            text-align: center;
                            color: #6ECAE8;
    
                        }

                        .${props.element_id} .left {
                          position: relative;
                          font-family: Open Sans;
                          font-size: 70px;
                          font-style: normal;
                          font-weight: 700;
                          line-height: 95px;
                          letter-spacing: 0em;
                          text-align: left;
                          color: #6ECAE8;
                        }

                        @media only screen and (max-width: 800px){ 
                          .${props.element_id} .center, .${props.element_id} .left {
                            font-size: 25px;
                            line-height: 27px;
                          }
                        }
                    `}
                </style>
            </div>
      )
    }
}

export default Title
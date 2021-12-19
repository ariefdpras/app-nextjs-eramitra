import React from 'react'

class PopCart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props

    return (
        <div className="category-menu">
            <div className="container-inner">
            <div className="category-menu-wrapper">
            <div className="left-category-menu">
                <h3 className="category-side-title" >
                    Brands
                </h3>
                <h3 className="category-side-title ">
                    Industry
                </h3>
                <h3 className="category-side-title ">
                    Application
                </h3>
            </div>
            <div className="right-category-menu">
                
                <h3 className="category-side-name ">
                    Application
                </h3>
            </div>
            </div>
            </div>
            <style>
                {`
                    .category-menu {
                        z-index: 10;
                    }

                    .category-menu .container-inner {
                        padding: 0px;
                    }

                    .category-menu-wrapper {
                        display: flex;
                        width: 100%;
                        height: 450px;
                        
                        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
                    }

                    .left-category-menu {
                        width: 300px;
                        background: #1BA58A;
                        padding: 24px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }

                    .right-category-menu {
                        width: calc(100% - 300px);
                        background: #FFFFFF;
                        padding: 24px;
                    }

                    .category-side-title {
                        font-family: Bahnschrift;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 20px;
                        line-height: 24px;
                        color: #FFFFFF;
                        text-transform: uppercase;
                        margin: 8px 0 8px 0;
                    }

                    .category-side-title:hover {
                        color: #FFF502;
                        cursor: default;
                    }

                    .category-side-name {
                        font-family: Calibri;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 17px;
                        text-transform: uppercase;
                        color: #000000;
                    }
                `}
            </style>
        </div>
      )
    }
}

export default PopCart
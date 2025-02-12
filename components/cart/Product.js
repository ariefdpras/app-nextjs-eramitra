import React from 'react'
import { number } from 'Helpers/utils'

class ProductCardCart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props

    return (
        <div className="product-cart">
            <div className="product-picture-wrapper">
            <img className="product-picture" src={props.picture ? `https://svr.eramitra.com/images/${props.picture}` : "/static/images/not-found.jpg"} /></div>
            <div className="product-description">
                <p className="product-category">{props.brand}</p>
                <h6 className="product-name">{props.name} </h6>
                {
                    props.price == 0 ?
                    <p className="product-warning">Contact us</p> : 
                    <p className="product-price">{number(props.price)}</p>
                }
            </div>
            <style>
                {`
                    .product-cart {
                        display: flex;
                        align-items: center;
                    }

                    .product-cart .product-picture-wrapper {
                        width: 60px;
                        height: 60px;
                        border-radius: 20px 20px 0 0;
                    }

                    .product-cart .product-picture {
                        width: 60px;
                        height: 60px;
                        padding: 0;
                        object-fit: contain;
                    }

                    .product-cart .product-description {
                        margin-left: 10px;
                    }

                    .product-cart .product-category {
                        font-family: Calibri;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 10px;
                        color: #1BA58A;
                        margin: 0 0 5px 0;
                    }

                    .product-cart .product-name {
                        font-family: Bahnschrift;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 14px;
                        color: #000000;
                        margin: 0 0 5px 0;
                    }

                    .product-cart .product-price {
                        font-family: Bahnschrift;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 18px;
                        letter-spacing: 0em;
                        text-align: left;                        
                        color: #000000;
                        margin: 0 0 5px 0;
                    }

                    .product-cart .product-warning {
                        font-family: Bahnschrift;
                        font-size: 10px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 18px;
                        letter-spacing: 0em;
                        text-align: left;

                        color: #FF0303;
                        margin: 0;
                        text-transform: uppercase;
                    }


                    @media only screen and (max-width: 800px){


                        .product-cart {
                            align-items: center;
                        }
                        .product-cart .product-category {
                            font-family: Bahnschrift;
                            font-size: 12px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 14px;
                            letter-spacing: 0em;
                            text-align: left;
                        }

                        .product-cart .product-name {
                            font-family: Bahnschrift;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 14px;
                            letter-spacing: 0em;
                            text-align: left;
                        }

                        .product-cart .product-price {
                            font-family: Bahnschrift;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 19px;
                            letter-spacing: 0em;
                            text-align: left;  
                        }

                        .product-cart .product-warning {
                            font-family: Bahnschrift;
                            font-size: 9px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: 11px;
                            letter-spacing: 0em;
                            text-align: left;
                            
                        }

                        .product-cart .product-picture {
                            width: 50px;
                            height: 50px;    
                        }
                    }
                `}
            </style>
        </div>
      )
    }
}

export default ProductCardCart
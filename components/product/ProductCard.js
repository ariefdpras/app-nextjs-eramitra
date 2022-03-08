import React from 'react'
import { number } from 'Helpers/utils'

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props

    return (
        <div className="product-card">
            <a href={`${process.env.ROOT_DOMAIN}/product/${props.id}`}>
            <div className="product-picture-wrapper">
            <img className="product-picture" src={props.picture ? `https://svr.eramitra.com/images/${props.picture}` : "/static/images/not-found.jpg"} /></div>
            <div className="product-description">
                {/* <p className="product-category">{props.category}</p> */}
                <h6 className="product-name">{props.brand} - {props.name} </h6>
                <p className="product-price">{number(props.price)}</p>
                {
                    props.price == 0 && 
                    <p className="product-warning">Contact us for more detail</p>
                }
            </div>
            </a>
            <style>
                {`
                    .product-card {
                        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
                        border-radius: 20px;
                        height: 400px;
                        width: 220px;
                    }

                    .product-picture-wrapper {
                        width: 100%;
                        border-radius: 20px 20px 0 0;
                    }

                    .product-picture {
                        max-width: 220px;
                        height: 220px;
                        padding: 10px;
                        object-fit: cover;
                    }

                    .product-description {
                        padding: 16px;
                    }

                    .product-category {
                        font-family: Bahnschrift;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 17px;
                        color: #1BA58A;
                        margin: 0 0 5px 0;
                    }

                    .product-name {
                        font-family: Bahnschrift;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 22px;
                        color: #000000;
                        margin: 0 0 24px 0;
                    }

                    .product-price {
                        font-family: Bahnschrift;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 20px;
                        line-height: 24px;
                        color: #000000;
                        margin: 0 0 5px 0;
                    }

                    .product-warning {
                        font-family: Bahnschrift;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 17px;
                        color: #FF0303;
                        margin: 0;
                        text-transform: uppercase;
                    }


                    @media only screen and (max-width: 800px){

                        .product-card {
                            box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
                            border-radius: 20px;
                            height: 325px;
                            width: 150px;
                        }

                        .product-category {
                            font-family: Bahnschrift;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 17px;
                            letter-spacing: 0em;
                            text-align: left;
                        }

                        .product-picture {
                            width: 150px;
                            height: 150px;
                            object-fit: cover;
                        }
    

                        .product-name {
                            font-family: Bahnschrift;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 17px;
                            letter-spacing: 0em;
                            text-align: left;
                        }

                        .product-price {
                            font-family: Bahnschrift;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 19px;
                            letter-spacing: 0em;
                            text-align: left;  
                        }

                        .product-warning {
                            font-family: Bahnschrift;
                            font-size: 9px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: 11px;
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

export default ProductCard
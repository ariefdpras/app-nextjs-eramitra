import React, { useEffect, useState } from 'react'
import ProductCardCart from './Product'
import { number } from 'Helpers/utils'

const Cart = (props) => {

    const [cart, setCart] = useState(props.cart)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if(cart){
            let currentTotal = 0
            for(let i = 0; i < cart.length; i++) {
                if(cart[i].product.price){
                    setTotal(0)
                    break;
                } else {
                    currentTotal = currentTotal + cart[i].product.price
                    setTotal(currentTotal)
                }
            }
        }
    }, [cart])
    

    useEffect(() => {
        if(localStorage.getItem("cart")) {
            setCart(JSON.parse(localStorage.getItem("cart")))
        }
    })

    const setMinus = (id) => {
        let carts = cart
        let tempCart = carts[id]
        tempCart.value = tempCart.value - 1
        if (tempCart.value == 0) {
            carts.splice(id, 1)
        }
        setCart(carts)
        localStorage.setItem("cart", JSON.stringify(carts))
    }

    const setPlus = (id) => {
        let carts = cart
        let tempCart = carts[id]
        tempCart.value = tempCart.value + 1 
        setCart(carts)
        localStorage.setItem("cart", JSON.stringify(carts))
    }

    return (
        <div className="cart-menu">
            <div className="cart-menu-wrapper">
                <h3 className="cart-title">Cart Detail</h3>
                <div className="cart-detail-wrapper">
                    {
                        props.cart && props.cart.map((item, idx) => 
                            <div className="product-cart-wrapper" key={idx}>
                                <ProductCardCart
                                     picture={item.product.Pictures && item.product.Pictures.length > 0 && item.product.Pictures[0].name}
                                     brand={item.product.Brand.name}
                                    name={item.product.name}
                                    price={item.product.price}
                                    key={idx}
                                />   
                                <div className="cart-product-wrapper">
                                <div className="product-counter">
                                    <a className={item.value == 0 && "disable"} onClick={() => setMinus(idx)}>
                                    <div className="btn-counter">
                                        <span className="material-icons">remove</span>
                                    </div>
                                    </a>
                                    <p>{item.value}</p>
                                    <a onClick={() => setPlus(idx)}>
                                    <div className="btn-counter">
                                        <span className="material-icons">add</span>
                                    </div>
                                    </a>
                                </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="cart-total-wrapper">
                    <div className="cart-total">
                        <h6>Total</h6>
                        <h6>{total == 0 ? "CONTACT US" : number(total)}</h6>
                    </div>
                    <a className="btn-checkout" href={`${process.env.ROOT_DOMAIN}/checkout`}>Go to checkout page</a>
                </div>
            </div>
            <style>
                {`
                    .cart-menu {
                        z-index: 10;
                        right: 0;
                        top: 0;
                        position: fixed;
                    }

                    .cart-menu-wrapper {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        width: 484px;
                        height: 100vh;
                        padding: 40px;
                        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
                        background: #FFFFFF;
                    }

                    .cart-title {
                        font-family: Bahnschrift;
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 24px;
                        letter-spacing: 0em;
                        text-align: center;
                        padding-bottom: 25px;
                        margin: 0 0 18px 0;
                        border-bottom: 1px solid #000000;
                        text-transform: uppercase;
                    }

                    .cart-total-wrapper {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                    }

                    .cart-detail-wrapper {
                        overflow-y: auto;
                        display: flex;
                        flex-direction: column;
                        flex-grow: 1;
                    }

                    .cart-total {
                        display: flex;
                        justify-content: space-between;
                        border-top: 1px solid #000000;
                        padding-top: 20px;
                        margin-bottom: 35px;
                    }

                    .cart-total h6 {
                        font-family: Bahnschrift;
                        font-size: 18px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 22px;
                        letter-spacing: 0em;
                        text-align: left;
                        margin: 0;
                        color: #1BA58A;
                    }

                    .btn-checkout {
                        font-family: Bahnschrift;
                        font-size: 18px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 22px;
                        letter-spacing: 0em;
                        padding: 10px 25px;
                        color: #FFFFFF;
                        background: #1BA58A;
                        border-radius: 10px;
                        cursor: pointer;
                        text-align: center;
                        text-transform: uppercase;
                        width: 100%;
                    }

                    .cart-menu .product-cart-wrapper {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 24px;
                    }

                    .cart-menu .cart-product-wrapper {
                        margin-bottom: 0 !important;
                        margin-right: 5px;
                    }

                    .cart-product-wrapper {
                        margin-bottom: 60px;
                        display: flex;
                      }
      
                      .product-counter {
                        display: flex;
                        align-items: center;
                      }
      
                      .product-counter .disable {
                        pointer-events: none;
                        opacity: 0.3;
                      }
      
                      .product-counter p {
                        margin: 0 18px;
                        font-family: Bahnschrift;
                        font-size: 18px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 22px;
                        letter-spacing: 0em;
                        text-align: center;
                        width: 30px;
                      }
      
                      .btn-counter {
                        border: 1px solid #040404;
                        border-radius: 10px;
                        width: fit-content;
                        padding: 3px 3px 0 3px;
                        cursor: pointer;
                      }
      

                @media only screen and (max-width: 800px){

                    .cart-menu-wrapper {
                        width: 85vw;
                        padding: 40px 20px !important;
                    }

                    .cart-title {
                        padding-bottom: 12px;
                        font-family: Bahnschrift;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 17px;
                        letter-spacing: 0em;
                        text-align: center;
                    }

                    .cart-total {
                        margin-bottom: 12px !important;
                        padding-top: 12px !important;
                    }

                    .cart-total h6 {
                        font-family: Bahnschrift;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 17px;
                        letter-spacing: 0em;
                        text-align: left;
                    }

                    .btn-checkout {
                        font-family: Bahnschrift;
                        font-size: 12px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 14px;
                        letter-spacing: 0em;
                        text-align: center;
                        width: 100%;
                        
                    }

                    .product-counter p {
                        margin: 0 5px !important;
                    }
                }
                `}
            </style>
        </div>
      )
    }

export default Cart
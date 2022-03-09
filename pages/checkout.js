import Layout from "../containers/layout";
import React, { useState, useEffect } from 'react'
import ProductCardCart from "Components/cart/Product";
import { number } from "Helpers/utils";

const Home = (props) => {
  
    const [cart, setCart] = useState(props.cart) 
    const [csData, setCsData] = useState({
        
          name: "",
          company: "",
          email: "",
          phone: "",
          address: "",
        message: ""
      })
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if(cart){
            let currentTotal = 0
            for(let i = 0; i < cart.length; i++) {
                if(cart[i].product.price){
                    currentTotal = currentTotal + cart[i].product.price
                } else {
                    setTotal(0)
                    break;
                }
            }
            if(currentTotal){
                setTotal(currentTotal)
            }
        }
    }, [cart])

    useEffect(() => {
        if(localStorage.getItem("cart")) {
            setCart(JSON.parse(localStorage.getItem("cart")))
        }
    })

    
    const setName = (e) => {
        setCsData((csData) => ({
          ...csData,
          name: e.target.value
        }))
      }
  
      
      const setPhone = (e) => {
        setCsData((csData) => ({
          ...csData,
          phone: e.target.value
        }))
      }
  
  
      
      const setEmail = (e) => {
        setCsData((csData) => ({
          ...csData,
          email: e.target.value
        }))
      }
  
  
      
      const setCompany = (e) => {
        setCsData((csData) => ({
          ...csData,
          company: e.target.value
        }))
      }
  
  
      
      const setMessage = (e) => {
        setCsData((csData) => ({
          ...csData,
          message: e.target.value
        }))
      }

      const setAddress = (e) => {
        setCsData((csData) => ({
          ...csData,
          address: e.target.value
        }))
      }

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
  
    const emailSend = () => {
        let data = ""
        let tempCart = cart
        for (var i = 0; i < tempCart.length; i++) {
            data = data.concat("%0d%0a - " +cart[i].product.name + "- x " + cart[i].value);
          }
        window.open(`mailto:sales@eramitra.com?subject=Reach Us Form&body=Name: ${csData.name || ''} %0d%0aPhone: ${csData.phone || ''}  %0d%0aEmail: ${csData.email || ''} %0d%0aCompany: ${csData.company || ''}%0d%0aAddres: ${csData.address || ''} %0d%0aMessage: ${csData.message || ''} %0d%0aCart: ${data || ''}`, '_blank');
      };

    
  

  return (
      <Layout
        title="Checkout Page | PT. Era Mitra Perdana"
        applications={props.applications}
        brands={props.brands}
        industries={props.industries}
        catalogue={props.catalogue}  >     
        <div className="container checkout">
            <div className="container-inner">
                <div className="checkout-menu">
                    <div className="left-checkout">
                        <div className="checkout-menu-wrapper">
                            <h3 className="checkout-title">Your Order</h3>
                            <div className="checkout-detail-wrapper">
                                {
                                    cart && cart.map((item, idx) => 
                                        <div className="product-cart-wrapper" 
                                        key={idx}>
                                            <ProductCardCart
                                                picture={item.product.Pictures && item.product.Pictures.length > 0 && item.product.Pictures[0].path}
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
                                </div>
                        </div>
                    </div>
                    <div className="right-checkout">
                        <h4>Contact Information</h4>
                        <div className="checkout-contact-wrapper">
                        <div className="form-group">
                            <h6>Name</h6>
                            <input type="text" onChange={setName}/>
                        </div>
                        <div className="form-group half">
                            <h6>Email</h6>
                            <input type="text" onChange={setEmail}/>
                        </div>
                        <div className="form-group half">
                            <h6>Phone</h6>
                            <input type="text" onChange={setPhone}/>
                        </div>
                        <div className="form-group">
                            <h6>Company (optional)</h6>
                            <input type="text" onChange={setCompany}/>
                        </div>
                        <div className="form-group">
                            <h6>Address</h6>
                            <input type="text" onChange={setAddress}/>
                        </div>
                        <h6>Notes</h6>
                        <textarea rows="5" placeholder="Message" onChange={setMessage}/>
                        <a className="btn-submit" onClick={() => emailSend()}>Submit</a>
            
                        </div>
                    </div>
                    </div>
                    <style>
                        {`
                            .checkout {
                                background: #FAFAFA;
                            }

                            .checkout-menu {
                                display: flex;
                                justify-content: space-between;
                                margin: 50px 0;
                            }

                            .left-checkout {
                                width: 400px;
                            }

                            .right-checkout {
                                width: calc(100% - 450px);
                                padding: 40px;
                                background: #FFFFFF;
                                border-radius: 20px;
                                height: fit-content;
                            }
                            
                            .checkout-contact-wrapper {
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: space-between;
                                width: 100%;
                            }

                            .checkout-menu-wrapper {
                                display: flex;
                                flex-direction: column;
                                justify-content: space-between;
                                width: 400px;
                                padding: 40px;
                                background: #FFFFFF;
                                border-radius: 20px;
                            }

                            .checkout-title {
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

                            .checkout-total-wrapper {
                                width: 100%;
                                display: flex;
                                flex-direction: column;
                            }

                            .checkout-detail-wrapper {
                                display: flex;
                                flex-direction: column;
                                min-height: 250px;
                            }

                            .checkout-total {
                                display: flex;
                                justify-content: space-between;
                                border-top: 1px solid #000000;
                                padding-top: 20px;
                                margin-bottom: 35px;
                            }

                            .checkout-total h6 {
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

                            .checkout-menu .btn-submit {
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
                                margin-top: 20px;
                            }

                            .checkout-menu .product-cart-wrapper {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                margin-bottom: 24px;
                            }

                            .checkout-menu .cart-product-wrapper {
                                margin-bottom: 0 !important;
                                margin-right: 5px;
                            }


                        .checkout-detail-wrapper .cart-product-wrapper {
                            margin-bottom: 60px;
                            display: flex;
                        }
        
                        .checkout-detail-wrapper .product-counter {
                            display: flex;
                            align-items: center;
                        }
        
                        .checkout-detail-wrapper .product-counter .disable {
                            pointer-events: none;
                            opacity: 0.3;
                        }
        
                        .checkout-detail-wrapper .product-counter p {
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


                    .checkout-menu .cart-total-wrapper {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                    }

                    .checkout-menu .cart-total {
                        display: flex;
                        justify-content: space-between;
                        border-top: 1px solid #000000;
                        padding-top: 20px;
                        margin-bottom: 35px;
                    }

                    .checkout-menu .cart-total h6 {
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

                    .right-checkout h4 {
                        font-family: Bahnschrift;
                        font-size: 32px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 38px;
                        letter-spacing: 0em;
                        text-align: center;
                        margin: 0 0 40px 0;
                    }

                    .right-checkout h6 {
                        font-family: Bahnschrift;
                        font-size: 20px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 24px;
                        letter-spacing: 0em;
                        text-align: left;
                        margin: 0 0 10px 0;

                    }

                    .right-checkout input {
                        border: 1px solid #DFE3E8;
                        padding: 5px 10px;
                        border-radius: 3px;
                        font-family: Bahnschrift;
                        width: 100%;
                        margin-bottom: 25px;
                    }

                    .right-checkout .form-group{
                        width: 100%;
                    }


                    .right-checkout .form-group.half {
                        width: 48%;
                    }


                    .right-checkout textarea {
                        border: 1px solid #DFE3E8;
                        padding: 5px 10px;
                        border-radius: 3px;
                        font-family: Bahnschrift;
                        width: 100%;
                    }

                        @media only screen and (max-width: 800px){
                            .checkout-menu {
                                flex-direction: column;
                            }

                            .right-checkout {
                                width: 100%;
                            }
                            .checkout-menu-wrapper {
                                width: 85vw;
                            }

                            .checkout-title {
                                padding-bottom: 12px;
                                font-family: Bahnschrift;
                                font-size: 14px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 17px;
                                letter-spacing: 0em;
                                text-align: center;
                            }

                            .checkout-total {
                                margin-bottom: 12px !important;
                                padding-top: 12px !important;
                            }

                            .checkout-total h6 {
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
                        }
                        `}
                    </style>
                </div>
            </div>
        <style>
          {`
            .container {
              width: 100vw;
              padding: 0;
            }
  
            .container-inner {
              max-width: 1120px;
              margin: 0 auto;
              height: 100%;
            }
  
            .container.banner {
              background-color: #F5FFEE;
            }

            .section-title {
              font-family: Bahnschrift;
              font-style: normal;
              font-weight: 600;
              font-size: 48px;
              color: #000000;
              margin: 0 0 24px 0;
            }

            .section-description {
              font-family: Calibri;
              font-style: italic;
              font-weight: normal;
              font-size: 20px;
              line-height: 24px;
              color: #666A66;
              margin: 0;
            }
          `}
        </style>
      </Layout>
  );
}

export async function getServerSideProps() {
  const getBrands = await fetch(`${process.env.ROOT_DOMAIN}/api/getBrands`)
  const brands = await getBrands.json()


  const getIndustry = await fetch(`${process.env.ROOT_DOMAIN}/api/getIndustry`)
  const industries = await getIndustry.json()


  const getApplication = await fetch(`${process.env.ROOT_DOMAIN}/api/getApplication`)
  const applications = await getApplication.json()

  
  const getCatalogue = await fetch(`${process.env.ROOT_DOMAIN}/api/getCatalogue`)
  const catalogue = await getCatalogue.json()

  return { props: { brands: brands, industries: industries, applications: applications, catalogue: catalogue }}
}

export default Home;

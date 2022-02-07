import Layout from "Containers/layout" 
import Breadcrumb from "Components/breadcrumb/breadcrumb";
import React, { useState, useEffect } from 'react'
import { number } from "Helpers/utils";
import e from "cors";
import Slider from "react-slick";

const Home = (props) => {
  
  const [cart, setCart] = useState([])
  const [value, setValue] = useState(0)
  const [activeTab, setActiveTab] = useState('')
  const [activeImage, setActiveImage] = useState(props.detail.Pictures && props.detail.Pictures[0].name)
  const [activeIndex, setActiveIndex] = useState(0)
  
    const breadcrumbs = [
      {
        title: "Products",
        url: process.env.ROOT_DOMAIN + "/products/"
      },
      {
        title: props.detail.name,
        url: "http://google.com"
      }
    ]

    const settings = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      infinite: true,
      slidesToScroll: 1,
    };
    

    useEffect(() => {
        if(localStorage.getItem("cart")) {
            setCart(JSON.parse(localStorage.getItem("cart")))
        }
    }, [])
    
    const addCart = () => {
      if(value > 0){

        let data = {
            product: props.detail,
            value: value
        }

        let tempCart,
            tempCartIdx,
            tempCartItem

        if(cart.length > 0){
          tempCart = cart
          tempCartIdx = tempCart.findIndex((cart) => cart.product.id == props.detail.id)
          if(tempCartIdx > -1) {
            tempCartItem = tempCart[tempCartIdx]
            tempCartItem.value = tempCartItem.value + value
          } else {
            tempCart = cart
            tempCart.push(data)
          }
          setCart(tempCart)
          localStorage.setItem("cart", JSON.stringify(tempCart))
          alert("Successfully add to cart!")
        } else {
          tempCart = cart
          tempCart.push(data)
          setCart(tempCart)
          localStorage.setItem("cart", JSON.stringify(tempCart))
          alert("Successfully add to cart!")
        }
      }
    }
  
  return (
      <Layout
        title={`${props.detail.name} | PT. Era Mitra Perdana`}
        applications={props.applications}
        brands={props.brands}
        industries={props.industries} 
        cart={cart}
        >     

        <div className="container">
            <div className="container-inner">
                <div className="breadcrumb-wrapper">
                    <Breadcrumb
                        breadcrumbs={breadcrumbs}
                        url={process.env.ROOT_DOMAIN} />
                </div>
                <div className="product-detail-container">
                    <div className="left-product">
                      <img className="image-big" src={`https://svr.eramitra.com/images/${activeImage}`} />
                      <div className="product-image-slider">
                        <Slider {...settings}>
                          { props.detail.Pictures && props.detail.Pictures.map((product, idx ) =>
                          <a className={activeIndex == idx ? `product-image active`: `product-image`} key={idx} onClick={() => { setActiveIndex(idx); setActiveImage(product.name) }}>
                            <div className={`product-image-content-${idx}`}>
                            </div>
                            <style>
                              {
                                `

                                .product-image-slider {
                                  padding: 20px;
                                  margin: 0 20px;
                                }

                                .product-image{
                                  width: 80px;
                                  height: 80px;
                                  margin: 0 5px;
                                  cursor: pointer;
                                }

                                .active .product-image-content-${idx}{
                                  border: 1px solid #1BA58A;
                                }

                                .product-image-content-${idx} {
                                  background: url(https://svr.eramitra.com/images/${product.name});
                                  width: 80px;
                                  height: 80px;
                                  background-size: cover;
                                }

                                .slick-prev:before {
                                  font-family: 'Bahnschrift';
                                  content: '<';
                                  color: black;
                                  font-size: 20px;
                                }
                                
                                .slick-next:before {
                                  font-family: 'Bahnschrift';
                                  content: ">";
                                  color: black;
                                  font-size: 20px;
                                }

                                .product-image-slider .slick-next {
                                  right: -20px;
                                }

                                .product-image-slider .slick-prev {
                                  left: -20px;
                                  z-index: 5;
                                }

                                @media only screen and (max-width: 800px){
                                  .product-image{
                                    width: 100px;
                                    height: 100px;
                                  }
                                  .product-image-content-${idx} {
                                
                                    width: 100px;
                                    height: 100px;
                                  }
            
                                }
                                `
                              }
                            </style>
                          </a>)}
                        
                        </Slider>
                      </div>
                    </div>
                    <div className="right-product">
                      <div className="product-detail">
                        <h6 className="product-brand">{props.detail.Brand && props.detail.Brand.name}</h6>
                        <h4 className="product-name">{props.detail.name}</h4>
                        <p className="product-category">{props.detail.Application && props.detail.Application.name} {props.detail.Application && props.detail.Industry && ' - '} {props.detail.Industry && props.detail.Industry.name}</p>
                        
                        <div className="price-wrapper">
                          <h6 className="product-price">{number(props.detail.price)}</h6>
                          { props.detail.price == 0 && 
                          <h6 className="product-warning">CONTACT US FOR MORE DETAIL</h6>
                          }
                        </div>
                        <div className="cart-product-wrapper">
                          <div className="product-counter">
                            <a className={value == 0 && "disable"} onClick={() => setValue(value - 1)}>
                              <div className="btn-counter">
                                <span className="material-icons">remove</span>
                              </div>
                            </a>
                            <p>{value}</p>
                            <a onClick={() => setValue(value + 1)}>
                              <div className="btn-counter">
                                <span className="material-icons">add</span>
                              </div>
                            </a>
                          </div>
                          <a onClick={() => addCart()}><p className="btn-add">Add to cart</p></a> 
                        </div>
                      </div>
                      <div className="product-descriptions">
                        <h6>Description</h6>
                        <div dangerouslySetInnerHTML={{__html: props.detail.description}}></div>
                      </div>

                    </div>
                </div>
            </div>
            <style>
              {`
                .product-detail-container {
                    display: flex;
                }

                .left-product {
                    width: 420px;
                    margin-right: 54px;
                }

                .left-product .image-big {
                  width: 420px;
                  height: 420px;
                  object-fit: cover;
                }

                .right-product {
                    width: calc(100% - 420px);
                    margin-bottom: 80px;
                }

                .right-product .product-descriptions h6 {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 20px;
                  line-height: 24px;
                  padding-bottom: 21px;
                  margin: 0;
                  border-bottom: 1px solid #3F3D56;
                  color: #1BA58A;
                  text-transform: uppercase;
                }

                .right-product .product-category {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 16px;
                  line-height: 19px;
                  margin: 0 0 8px 0;
                  color: #1BA58A;
                  text-transform: uppercase;
                }

                .right-product .product-name {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: 500;
                  font-size: 24px;
                  line-height: 29px;
                  margin: 0 0 10px 0;
                  color: #000000;
                }

                .right-product .product-brand {
                  font-family: Calibri;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 20px;
                  font-weight: 600;
                  line-height: 24px;

                  color: #000000;
                  margin: 0 0 10px 0;
                  text-transform: uppercase;
                }

                .right-product .price-wrapper {
                  margin-bottom: 24px;
                }

                .right-product .product-price {
                  font-family: Bahnschrift;
                  font-size: 24px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 29px;
                  letter-spacing: 0em;
                  text-align: left;
                  margin: 0;
                }

                .right-product .product-warning {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 22px;        
                  color: #FF0303;
                  margin: 13px 0 0 0;
                }

                .right-product .product-descriptions p {
                  font-family: Calibri;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 16px;
                  line-height: 20px;
                  margin-bottom: 0;
                  word-break: break-word;
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

                .btn-add {
                  font-family: Bahnschrift;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 20px;
                  letter-spacing: 0em;
                  text-align: left;
                  cursor: pointer;
                  padding: 6px 25px;
                  color: #FFFFFF;
                  background: #1BA58A;
                  border-radius: 20px;
                  cursor: pointer;
                  text-align: center;
                  text-transform: uppercase;
                  width: 100%;
                  margin-left: 30px;
              }

              .product-descriptions ul, .product-descriptions ol {
                margin-left: -20px !important;
              }

                @media only screen and (max-width: 800px){
               
                  .product-detail-container {
                    flex-direction: column;
                  }

                  .left-product  {
                    width: 100%;
                    margin-right: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 40px;
                  }

                  .left-product .image-big {
                    width: 265px;
                    height: 265px;
                  }

                  .right-product {
                    width: 100%;
                  }

                  .right-product .product-name {
                    margin: 0 0 5px 0;
                  }

                  .right-product .price-wrapper {
                    margin-bottom: 16px !important;
                  }

                  .cart-product-wrapper {
                    margin-bottom: 30px;
                  }
                }
              `}
            </style>
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

            .section-title-underline {
                font-family: Bahnschrift;
                font-style: normal;
                font-weight: normal;
                font-size: 48px;
                line-height: 58px;
                color: #000000;
                width: fit-content;
            }

            .section-title-underline:after {
                content: "";
                display: block;
                width: calc(100% - 50px);
                padding-top: 5px;
                margin-left: 3px;
                border-bottom: 3px solid #1BA58A;
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


export async function getServerSideProps(req) {

  const getBrands = await fetch(`${process.env.ROOT_DOMAIN}/api/getBrands`)
  const brands = await getBrands.json()


  const getIndustry = await fetch(`${process.env.ROOT_DOMAIN}/api/getIndustry`)
  const industries = await getIndustry.json()


  const getApplication = await fetch(`${process.env.ROOT_DOMAIN}/api/getApplication`)
  const applications = await getApplication.json()


  const getProduct = await fetch(`${process.env.ROOT_DOMAIN}/api/getProduct/${req.query.slug}`)
  const product = await getProduct.json()


  return { props: { detail: product, brands: brands, industries: industries, applications: applications }}
}

export default Home;

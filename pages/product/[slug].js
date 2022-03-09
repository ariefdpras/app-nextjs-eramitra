import Layout from "Containers/layout" 
import Breadcrumb from "Components/breadcrumb/breadcrumb";
import React, { useState, useEffect } from 'react'
import { number } from "Helpers/utils";
import e from "cors";
import Slider from "react-slick";

const Home = (props) => {
  
  const [cart, setCart] = useState([])
  const [value, setValue] = useState(0)
  const [activeTab, setActiveTab] = useState("description")
  const [activeModal, setActiveModal] = useState(false)
  const [activeImage, setActiveImage] = useState(props.detail.Pictures && props.detail.Pictures.length > 0 && props.detail.Pictures[0].name)
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
        catalogue={props.catalogue}  
        cart={cart}
        >     

        <div className="container">
            <div className="container-inner">
                {
                  activeModal && 
                  <div className="modal-picture">
                      <div className="modal-picture-inner">
                        <div className="btn-container">
                          <div className="btn-close" onClick={() => setActiveModal(false)}><span className="material-icons">
                              close
                              </span></div>
                        </div>
                        <img className="image-big" src={`https://svr.eramitra.com/images/${activeImage}`} />
                      </div>
                  </div>
                }   
                {
                  activeModal && 
                  <div className="modal-backdrop"/>
                }
                <div className="breadcrumb-wrapper">
                    <Breadcrumb
                        breadcrumbs={breadcrumbs}
                        url={process.env.ROOT_DOMAIN} />
                </div>
                <div className="product-detail-container">
                    <div className="left-product">
                      <img className="image-big" onClick={() => setActiveModal(true)} src={`https://svr.eramitra.com/images/${activeImage}`} />
                      <div className="product-image-slider">
                        <Slider {...settings}>
                          { props.detail.Pictures && props.detail.Pictures.length > 1 && props.detail.Pictures.map((product, idx) =>
                          <a className={activeIndex == idx ? `product-image active`: `product-image`} key={idx} onClick={() => { setActiveIndex(idx); setActiveImage(product.name) }}>
                            <div className={`product-image-content-${idx}`}>
                            </div>
                            <style>
                              {
                                `

                                .product-image-slider {
                                  padding: 10px;
                                  margin: 0 10px;
                                }

                                .product-image{
                                  width: 70px;
                                  height: 70px;
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
                                    width: 70px;
                                    height: 70px;
                                  }
                                  .product-image-content-${idx} {
                                
                                    width: 70px;
                                    height: 70px;
                                  }
                                  
                                  .product-image-slider {
                                    width: 100%;
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
                        <div className="tags-wrapper">
                          { props.detail.Applications && props.detail.Applications.length > 0 && props.detail.Applications.map((app, idx) => 
                            <p className="tags" key={idx} >{ app.name }</p>
                          )}
                          { props.detail.Industries && props.detail.Industries.length > 0 && props.detail.Industries.map((app, idx) => 
                            <p className="tags" key={idx} >{ app.name }</p>
                          )}
                        </div>
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
                        <div className="product-tab">
                          <h6 className={ activeTab == "description" && "active"} onClick={() => setActiveTab("description")}>Description</h6>
                          <h6 className={ activeTab == "catalog" && "active"} onClick={() => setActiveTab("catalog")}>Catalog</h6>
                          <h6 className={ activeTab == "video" && "active"} onClick={() => setActiveTab("video")}>Video</h6>
                        </div>
                        { activeTab == "description" &&
                          <div dangerouslySetInnerHTML={{__html: props.detail.description}}></div>
                        }
                         { activeTab == "catalog" && props.detail.brochure ?
                          <div className="catalog-section">Click <a className="catalog-click" src="http://google.com">here</a> to open the brochure</div>
                          :  activeTab == "catalog" &&
                          <div className="catalog-section">No catalog(s) available</div>
                        }
                        { activeTab == "video" && props.detail.video ?
                          <div><iframe src={`https://www.youtube.com/embed/${props.video}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                          : activeTab == "video" && 
                          <div className="catalog-section">No video available</div>
                        }
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
                  cursor: pointer;
                }

                .right-product {
                    width: calc(100% - 420px);
                    margin-bottom: 80px;
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
                  font-size: 28px;
                  line-height: 32px;
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

                .product-tab {
                  display: flex;
                  border-bottom: 1px solid #a3a3a3;
                  margin-bottom: 20px;
                }

                .product-tab h6 {
                  padding: 0 20px 16px 20px;
                  font-family: Calibri;
                  font-style: normal;
                  font-weight: bold;
                  font-size: 20px;
                  line-height: 24px;
                  margin: 0;
                  color: #000000;
                  text-transform: uppercase;
                  cursor: pointer;
                }

                .product-tab .active {
                  padding: 0 20px 16px 20px;
                  font-family: Calibri;
                  font-style: normal;
                  font-weight: bold;
                  font-size: 20px;
                  line-height: 24px;
                  margin: 0;
                  border-bottom: 2px solid #1BA58A;
                  color: #1BA58A;
                  text-transform: uppercase;
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

              .tags {
                font-family: Bahnschrift;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
                letter-spacing: 0em;
                text-align: left;
                cursor: pointer;
                padding: 3px 10px;
                color: #1BA58A;
                border: 1px solid #1BA58A;
                background: #FFFFFF;
                cursor: default;
                border-radius: 20px;
                text-align: center;
                text-transform: uppercase;
                width: fit-content;
                margin: 0 5px 5px 0 !important;
            }

            .tags-wrapper {
              display: flex;
              flex-wrap: wrap;
              margin-bottom: 15px;
            }

            .catalog-click {
              text-decoration: underline;
              cursor: pointer;
              color: #1BA58A;
            }

              .product-descriptions ul, .product-descriptions ol {
                margin-left: -20px !important;
              }

              .catalog-section {
                font-family: Calibri;
                font-style: normal;
                font-size: 18px;
                line-height: 20px;
                margin: 0;
                color: #000000;
              }

              .modal-picture {
                
                width: 100vw;
                height: 100vh;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 10;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .modal-picture-inner {
                width: 800px;
                height: 600px;
                background-color: #FFFFFF;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                border-radius: 10px;
                z-index: 5;
              }

              .modal-picture-inner img {
                height: 100%;
              }

              .modal-backdrop {
                width: 100vw;
                height: 100vh;
                opacity: 0.5;
                background-color: #000000;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 1;
              }

              .modal-picture .btn-close {
                cursor: pointer;
              }

              .modal-picture .btn-container {
                display: flex;
                justify-content: flex-end;
                width: 100%;
              }

              iframe {
                width: 100%;
                height: auto;
              }
                @media only screen and (max-width: 800px){
               
                  .catalog-section {
                    font-family: Calibri;
                    font-style: normal;
                    font-size: 16px;
                    line-height: 20px;
                    margin: 0;
                    color: #000000;
                  }

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
                    font-size: 20px;
                  }

                  .right-product .product-brand {
                    margin: 0 0 5px 0;
                    font-size: 16px;
                    line-height: 20px;
                  }

                  .tags {
                    font-size: 10px;
                    line-height: 15px;
                    padding: 2px 7px;
                    margin: 0 3px 3px 0 !important;
                }

                .btn-add {
                  margin: 10px 0;
                  font-size: 14px;
                  line-height: 18px;
                }

                  .right-product .product-price {
                    font-size: 20px;
                    line-height: 24px;
                  }

                  .right-product .product-warning {
                    font-size: 16px;
                    line-height: 20px;
                    margin: 5px 0 0 0 !important;
                  }

                  .product-tab h6 {
                    font-size: 14px;
                    line-height: 18px;    
                    padding: 0 12px 8px 12px;
                  }

                  .product-tab .active {
                    font-size: 14px;
                    line-height: 18px;    
                    padding: 0 12px 8px 12px;
                  }

                  .right-product .price-wrapper {
                    margin-bottom: 16px !important;
                  }

                  .cart-product-wrapper {
                    margin-bottom: 30px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  }

                  .modal-picture-inner {
                    width: 300px;
                    height: 300px;
                    background-color: #FFFFFF;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    border-radius: 10px;
                    z-index: 5;
                  }

                  .product-tab {
                    overflow-x: auto;
                    justify-content: center;
                    margin-bottom: 20px;
                  }

                  iframe {
                    width: 100%;
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

  const getCatalogue = await fetch(`${process.env.ROOT_DOMAIN}/api/getCatalogue`)
  const catalogue = await getCatalogue.json()

  return { props: { detail: product, brands: brands, industries: industries, applications: applications, catalogue: catalogue }}
}

export default Home;

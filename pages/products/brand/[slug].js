import Layout from "Containers/layout" 
import ProductCard from "Components/product/ProductCard";
import Breadcrumb from "Components/breadcrumb/breadcrumb";
import Pagination from '@material-ui/lab/Pagination';
import React, { useState } from 'react';
import { useRouter } from 'next/router'


const Home = (props) => {
    const router = useRouter();
    const breadcrumbs = [
      {
        title: "Products",
        url: process.env.ROOT_DOMAIN + "/products"
      },
      {
        title: props.detail.name,
        url: "http://google.com"
      }
    ]
    
    const [isBrands, toggleBrands] = useState(true)
    const [isApplication, toggleApplication] = useState(false)
    const [isIndustry, toggleIndustry] = useState(false)
    const handleChange = (e, value) => {
      router.push(`${process.env.ROOT_DOMAIN}/products/brand/${props.query.slug}?page=${value}`)
      router.replace(`${process.env.ROOT_DOMAIN}/products/brand/${props.query.slug}?page=${value}`)
    };
  
  return (
      <Layout
        title={`${props.detail.name} | PT. Era Mitra Perdana`}
        applications={props.applications}
        brands={props.brands}
        industries={props.industries}
        catalogue={props.catalogue}  
        >     

        <div className="container">
            <div className="container-inner">
                <div className="breadcrumb-wrapper">
                    <Breadcrumb
                        breadcrumbs={breadcrumbs}
                        url={process.env.ROOT_DOMAIN} />
                </div>
                <div className="products-container">
                    <div className="left-products">
                        <h3 className="category-side-title green">
                            Products
                        </h3>
                        <div className="category-group">
                          <h3 className="category-side-title ">
                              Brands
                          </h3>
                          {
                            isBrands ? <a onClick={() => toggleBrands(false)} className="button-expand"><span className="material-icons">expand_less</span></a> :  <a onClick={() => toggleBrands(true)} className="button-expand"><span className="material-icons">expand_more</span></a>
                          }
                        </div>

                        {
                            isBrands && <div className="group-list-wrapper"> {props.brands && props.brands.length > 0 && props.brands.map((brand, idx) => <a 
                              key={idx} href={`${process.env.ROOT_DOMAIN}/products/brand/${brand.id}`}><p className={props.detail ? props.detail.name === brand.name ? `group-list active` : `group-list` : `group-list`}>{brand.name}</p></a>)}</div>
                          }
                        <div className="category-group">
                          <h3 className="category-side-title ">
                              Industry
                          </h3>
                          {
                            isIndustry ? <a onClick={() => toggleIndustry(false)} className="button-expand"><span className="material-icons">expand_less</span></a> :  <a onClick={() => toggleIndustry(true)} className="button-expand"><span className="material-icons">expand_more</span></a>
                          }
                        </div>

                          {
                            isIndustry && <div className="group-list-wrapper"> {props.industries && props.industries.length > 0 && props.industries.map((industry, idx) => <a  
                              key={idx} href={`${process.env.ROOT_DOMAIN}/products/industry/${industry.id}`}><p className={props.detail ? props.detail.name === industry.name ? `group-list active` : `group-list` : `group-list`}>{industry.name}</p></a>)}</div>
                          }
                        <div className="category-group">
                          <h3 className="category-side-title ">
                              Application
                          </h3>
                          {
                            isApplication ? <a onClick={() => toggleApplication(false)} className="button-expand"><span className="material-icons">expand_less</span></a> :  <a onClick={() => toggleApplication(true)} className="button-expand"><span className="material-icons">expand_more</span></a>
                          }
                        </div>
                          {
                            isApplication && <div className="group-list-wrapper"> {props.applications && props.applications.length > 0 && props.applications.map((application, idx) => <a 
                              key={idx} href={`${process.env.ROOT_DOMAIN}/products/application/${application.id}`}><p className={props.detail ? props.detail.name === application.name ? `group-list active` : `group-list` : `group-list`}>{application.name}</p></a>)}</div>
                          }
                    </div>
                    <div className="right-products">
                        <img className="banner-products" src="/static/images/banner-products.svg" />
                        <br></br>
                        <h3 className="section-title-underline">
                            { props.detail ? props.detail.name : "Products"}    
                        </h3>
                        <div className="products-wrapper">
                            { props.products && props.products.length > 0 && props.products.map((product, idx) => 
                                <ProductCard 
                                id={product.id}
                                picture={product.Pictures && product.Pictures[0] && product.Pictures[0].name}
                                category={`${product.Application ? product.Application.name : ""}`}
                                brand={product.Brand ? product.Brand.name : ""}
                                name={product.name}
                                price={product.price}
                                key={idx}/>
                            )}
                        </div>
                        
                        { props.products && props.products.length > 0 && 
                          <Pagination
                            count={props.pagination}
                            page={parseInt(props.query.page) || 1}
                            showFirstButton 
                            showLastButton
                            onChange={handleChange}
                            />
                        }
                    </div>
                </div>
            </div>
            <style>
              {`
                .products-container {
                    display: flex;
                }

                .left-products {
                    width: 250px;
                    margin-right: 54px;
                    margin-bottom: 50px;
                }

                .right-products {
                    width: calc(100% - 304px);
                    margin-bottom: 100px;
                }

                .banner-products {
                    width: 100%;
                }

                .category-side-title {
                    font-family: Bahnschrift;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 24px;
                    color: #000000;
                    text-transform: uppercase;
                    padding: 0 0 15px 0;
                    margin: 15px 0 0 0;
                }

                .category-group {
                  border-bottom: 1px solid #C4C4C4;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                }

                .category-group a {
                  cursor: pointer;
                }

                .category-side-title.green{
                    color: #1BA58A;
                    border-bottom: 1px solid #C4C4C4;
                }

                .products-wrapper {
                    display: grid;
                    width: 100%;
                    grid-gap: 40px;
                    grid-template-columns: repeat(3, 1fr);
                    margin-bottom: 60px;
                }

                .group-list p {
                  font-family: Calibri;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 24px;
                  letter-spacing: 0em;
                  text-align: left;
                }

                .group-list:hover {
                  color: #1BA58A;
                }

                .group-list.active {
                  font-weight: 600;
                }


                @media only screen and (max-width: 800px){
                  .left-products {
                    display: none;
                  }
  
                  .breadcrumb-wrapper {
                    display: none;
                  }
  
                  .right-products {
                    width: 100%;
                  }
  
                  .banner-products {
                    width: 100vw;
                    margin: -12px -20px 0 -20px;
                  }
  
                  .section-title-underline {
                    font-family: Bahnschrift;
                    font-size: 18px !important;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 25px !important;
                    letter-spacing: 0em;
                    text-align: left;
                  }
  
                  .section-title-underline:after {
                    padding-top: 5px !important;
                    margin-left: 1px !important;
                    width: calc(100% - 20px) !important;
                  }
  
                  .products-wrapper {
                    display: grid;
                    width: 100%;
                    grid-gap: 10px;
                    grid-template-columns: repeat(2, 1fr);
                    margin-bottom: 60px;
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

  const getProducts = await fetch(`${process.env.ROOT_DOMAIN}/api/getProduct?brand=${req.query.slug}&active=true&page=${req.query.page - 1 || 0}`)
  const products = await getProducts.json()

  const getBrand = await fetch(`${process.env.ROOT_DOMAIN}/api/getBrands/${req.query.slug}`)
  const brand = await getBrand.json()

  const getCatalogue = await fetch(`${process.env.ROOT_DOMAIN}/api/getCatalogue`)
  const catalogue = await getCatalogue.json()

  return { props: { detail: brand, query: req.query, products: products.data, pagination: products && products.totalPages, brands: brands, industries: industries, applications: applications, catalogue: catalogue }}
}

export default Home;

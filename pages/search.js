import Layout from "Containers/layout" 
import ProductCard from "Components/product/ProductCard";
import Breadcrumb from "Components/breadcrumb/breadcrumb";
import React, {useState} from 'react'
import ArticleCard from "Components/article/ArticleCard";
import { utc_to_local_short, truncate_text } from "Helpers/utils"

const Home = (props) => {
    const breadcrumbs = [
      {
        title: "Search",
        url: process.env.ROOT_DOMAIN + "/products"
      }
    ]
    
    
  
  return (
      <Layout
        title="Search | PT. Era Mitra Perdana"
        
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
                            Search by
                        </h3>
                            <div className="group-list-wrapper"> 
                              <a href={`${process.env.ROOT_DOMAIN}/search?name=${props.query.name}&by=product`}>
                              { props.query && typeof props.query.by !== undefined ? props.query.by === "product" ? 
                              <b><p className="group-list">Product</p></b> : <p className="group-list">Product</p> : <p className="group-list">Product</p>
                            }
                              </a>
                            </div>
                            
                            <div className="group-list-wrapper"> 
                              <a href={`${process.env.ROOT_DOMAIN}/search?name=${props.query.name}&by=article`}>
                           { props.query && typeof props.query.by !== undefined ? props.query.by === "article" ? 
                              <b><p className="group-list">Article</p></b> : <p className="group-list">Article</p> : <p className="group-list">Article</p>
                            }
                              </a>
                            </div>
                    </div>
                    <div className="right-products">
                        <br></br>
                        <h3 className="section-title-underline">
                            Search Result for: {props.query.name}
                        </h3>
                        { props.query && typeof props.query.by !== undefined && props.query.by === "product" && 
                          <div className="products-wrapper">
                              { props.search && props.search.products && props.search.products.map((product, idx) => 
                                  <ProductCard
                                  id={product.id}
                                  picture={product.Pictures && product.Pictures[0] && product.Pictures[0].name}
                                  name={product.name}
                                  price={product.price}
                                  key={idx}/>
                              )}
                          </div>
                        }
                        
                        { props.query && typeof props.query.by !== undefined && props.query.by === "article" && 
                          <div className="article-wrapper">
                                { props.search && props.search.articles && props.search.articles.map((article, idx) => 
                                    <div className="article-card-wrapper" key={idx}>
                                      <ArticleCard
                                        picture={article.cover}
                                        name={article.title}
                                        slug={article.id}
                                        date={utc_to_local_short(article.createdAt)}
                                        key={idx}/>
                                    </div>
                                )}
                          </div>
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
                .article-wrapper {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: space-between;
                  margin-bottom: 60px;
                  margin-left: calc((25% - 180px)* -0.5);
                  margin-right: calc((25% - 180px)* -0.5);
                }
    
                .article-card-wrapper {
                  display: flex;
                  justify-content: center;
                  margin-bottom: 80px;
                  flex: 0 0 25%;
                }
    

                @media only screen and (max-width: 800px){

                  .products-container {
                    flex-direction: column;
                  }
                  .left-products {
                    width: 100%;
                  }
  
                  .category-side-title {

                    font-size: 14px;
                    line-height: 16px;
                    padding: 0 0 8px 0;
                  }

                  
                    .group-list {
                      font-family: Calibri;
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: 16px;
                      letter-spacing: 0em;
                      text-align: left;
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

                  .article-wrapper {
                    
                    display: grid;
                    width: 100%;
                    grid-gap: 10px;
                    grid-template-columns: repeat(2, 1fr);
                    margin: 0 0 60px 0;
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


  const getIndustries = await fetch(`${process.env.ROOT_DOMAIN}/api/getIndustry`)
  const industries = await getIndustries.json()


  const getApplication = await fetch(`${process.env.ROOT_DOMAIN}/api/getApplication`)
  const applications = await getApplication.json()


  const getSearch = await fetch(`${process.env.ROOT_DOMAIN}/api/searchData/${req.query.name}`)
  const search = await getSearch.json()

  
  const getCatalogue = await fetch(`${process.env.ROOT_DOMAIN}/api/getCatalogue`)
  const catalogue = await getCatalogue.json()

  return { props: { search: search, brands: brands, industries: industries, applications: applications, catalogue: catalogue, query: req.query }}
}

export default Home;

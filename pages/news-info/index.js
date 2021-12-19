import Layout from "Containers/layout";
import Section from "Components/section";
import ArticleCard from "Components/article/ArticleCard";
import React, { useState } from 'react';
import { utc_to_local_short, truncate_text } from "Helpers/utils"

const Home = (props) => {


  return (
      <Layout
        title="test"
        applications={props.applications}
        brands={props.brands}
        industries={props.industries} > 
        <div className="container">
        <Section 
            element_id="news-info" 
            background="#1BA58A"  
            height="650px"
            icon={[
              {
                image: "shape-7.svg",
                vertical: "bottom",
                horizontal: "left"
              }
            ]}  >
            <div className="container-inner">
              <div className="news-info-wrapper">
                  <div className="news-info-cover">
                    <img src="http://cdn.eramitra.com/images_article/original/DSC00749.jpg" />
                  </div>
                  <div className="news-info-description">
                    <p>{utc_to_local_short(props.articles[0].createdAt)}</p>
                    <h6>{props.articles[0].title}</h6>
                    <p>{truncate_text(props.articles[0].content, 150)}</p>
                    <a href="http://localhost:3000/article/1"><div className="btn-read">Read Article</div></a>
                  </div>
             </div>
            </div>
            <style>
              {`
                .news-info {
                  height: 100%;
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }

                .news-info-cover {
                  width: 530px;
                  height: 412px;
                  border-radius: 40px;
                  margin-right: 70px;
                }

                .news-info-cover img {
                  width: 530px;
                  height: 412px;
                  object-fit: cover;
                  border-radius: 40px;
                }

                .news-info .news-info-wrapper {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  height: 100%;
                  width: 100vw;
                  max-width: 1120px;
                }

                .news-info-description {
                  width: calc(100% - 600px);
                }
                .news-info p {
                  font-family: Calibri;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 24px;
                  letter-spacing: 0em;
                  text-align: left;
                  margin: 0 0 10px 0;
                  color: #FFFFFF;                  
                }

                .news-info h6 {
                  font-family: Bahnschrift;
                  font-size: 32px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 38px;
                  letter-spacing: 0em;
                  text-align: left;
                  color: #FFFFFF;                  
                  margin: 0 0 28px 0;
                }

                .btn-read {
                  font-family: Bahnschrift;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 22px;
                  letter-spacing: 0em;
                  padding: 10px 25px;
                  color: #FFFFFF;
                  border: 1px solid #FFFFFF;
                  border-radius: 10px;
                  cursor: pointer;
                  text-align: center;
                  text-transform: capitalize;
                  width: fit-content;
                  margin-top: 50px;
              }
              

              @media only screen and (max-width: 800px){

                .contact-us .icon-shape-0 {
                  top: 0;
                  bottom: none;
                  width: 30%;
                }

                .contact-us .container-inner {
                  padding: 0;
                }

                .contact-us .contact-us-wrapper {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  flex-direction: column;
                  padding: 25px;
                }


                .contact-us p {
                  font-family: Bahnschrift;
                  font-size: 10px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 12px;
                  letter-spacing: 0em;
                  text-align: left;
                  color: #FFFFFF;                  
                }

                .contact-us h6 {
                  font-family: Calibri;
                  font-size: 10px;
                  font-style: italic;
                  font-weight: 400;
                  line-height: 12px;
                  letter-spacing: 0em;
                  text-align: left;

                  text-align: center;
                  margin: 0;
                }

                .contact-us h4 {
                  font-family: Bahnschrift;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 22px;
                  letter-spacing: 0em;
                  text-align: left;
                  
                  text-align: center;
                  margin: 0 0 5px 0;             
                }

                .btn-submit {
                
                  font-size: 12px;
                  line-height: 12px;
                  padding: 8px 15px;
                  border-radius: 8px;
                  width: fit-content;
              }
              .container-inner {
                padding: 0;
              }


              }
              `}
            </style>
          </Section>
          <div className="container-inner">
            <h3 className="section-title-underline">
              Latest Articles
            </h3>
            <div className="article-wrapper">
                { props.articles && props.articles.map((article, idx) => 
                    <div className="article-card-wrapper" key={idx}>
                      <ArticleCard
                        picture={article.img}
                        name={article.title}
                        slug={article.id}
                        date={utc_to_local_short(article.createdAt)}
                        key={idx}/>
                    </div>
                )}
            </div>
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
              flex: 1 0 25%;
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

  const getArticles = await fetch(`${process.env.ROOT_DOMAIN}/api/getArticle`)
  const articles = await getArticles.json()


  return { props: { articles: articles, brands: brands, industries: industries, applications: applications }}
}

export default Home;


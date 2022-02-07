import Layout from "Containers/layout";
import Section from "Components/section";
import ArticleCard from "Components/article/ArticleCard";
import React, { useState } from 'react';
import { utc_to_local_short, truncate_text } from "Helpers/utils"

const Home = (props) => {


  return (
      <Layout
        title="News &amp; Info | PT. Era Mitra Perdana"
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
                    <img src={props.articles.data[0] ? typeof props.articles.data[0].cover !== "undefined" ? `https://svr.eramitra.com/images/${props.articles.data[0].Picture && props.articles.data[0].Picture.name}` : "http://cdn.eramitra.com/images_article/original/DSC00749.jpg" : "http://cdn.eramitra.com/images_article/original/DSC00749.jpg" } />
                  </div>
                  <div className="news-info-description">
                    <p>{utc_to_local_short(props.articles.data[0].createdAt)}</p>
                    <h6>{props.articles.data[0].title}</h6>
                    <p className="news-info-content">{truncate_text(props.articles.data[0].content, 150)}</p>
                    <a href={`${process.env.ROOT_DOMAIN}/news-info/${props.articles.data[0].id}`}><div className="btn-read">Read Article</div></a>
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

                .news-info .section-title-underline {
                  margin-left: 20px;
                }
                
                .news-info-cover {
                  width: 170px;
                  height: 100px;
                  border-radius: 10px;
                  margin-right: 0;
                }

                .news-info .news-info-wrapper {
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                }

                .news-info-cover img {
                  width: 170px;
                  height: 100px;
                  border-radius: 10px;
                }

                .news-info {
                  height: 252px !important;
                }

                .news-info .icon-shape-0 {
                  width: 30% !important;
                }

                .news-info-description {
                  width: 90% !important;
                  display: flex;

                  flex-direction: column;
                  align-items: center;
                }

                .news-info p {
                  font-family: Calibri;
                  font-style: italic;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 15px;
                  /* identical to box height */
                  margin: 5px 0 0 0;
                  text-align: center;
                }

                .news-info h6 {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 19px;
                  text-align: center;
                  margin-bottom: 14px;
                }

                .container-inner {
                  padding: 0;
                }

                .news-info-content {
                  display: none;
                }

                .btn-read {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 12px;
                  line-height: 14px;
                  text-align: center;
                  margin-top: 0;
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

                .article-wrapper {
                  margin: 0 !important;
                  justify-content: flex-start;
                }

                .article-card-wrapper {
                  margin-bottom: 30px !important;
                  flex: 0 0 50% !important;
                }

                .container-inner {
                  padding: 0 !important;
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
                { props.articles && props.articles.data && props.articles.data.map((article, idx) => 
                    <div className="article-card-wrapper" key={idx}>
                      <ArticleCard
                        picture={article.Picture && article.Picture.name}
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
              flex: 0 0 25%;
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


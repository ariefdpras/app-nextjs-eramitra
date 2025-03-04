import Layout from "../containers/layout";
import Section from "../components/section";
import ArticleCard from "Components/article/ArticleCardHome";
import { utc_to_local_short, truncate_text } from "Helpers/utils";
import Slider from "react-slick";

const Home = (props) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const settings2 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const settings3 = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <Layout
      title="PT. Era Mitra Perdana"
      applications={props.applications}
      brands={props.brands}
      industries={props.industries}
      catalogue={props.catalogue}
    >
      <div className="container">
        <Section element_id="banner" background="#FFFFFF">
          <div className="banner-slider">
            <Slider {...settings2}>
              {props.banner &&
                props.banner.length > 0 &&
                props.banner.map((banner, idx) => (
                  <div className={`banner-item`} key={idx}>
                    <div className={`banner-item-content-${idx}`}>
                      <img
                        src={`https://svr.eramitra.com/images/${banner.Picture.name}`}
                      />
                    </div>
                    <style>
                      {`
                      .banner-item{
                       width: 100%;
                       height: 100%;
                      }
                      .banner-item-content-${idx} {
                        width: 100%;
                        height: 100%;
                      }

                      .banner-item-content-${idx} img {
                        width: 100vw;
                        height: 100%;
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

                      .banner-slider .slick-next {
                        right: 30px;
                      }

                      .banner-slider .slick-prev {
                        left: 20px;
                        z-index: 5;
                      }

                      @media only screen and (max-width: 800px){
                        .banner-item{
                          width: 100vw;
                          height: 100%;
                        }
                        .banner-item-content-${idx} {
                          width: 100vw;
                          height: 100%;
                        }
  
                      }
                      `}
                    </style>
                  </div>
                ))}
            </Slider>
          </div>
        </Section>
        <Section
          element_id="about-us"
          background="#FBFBFB"
          icon={[
            {
              image: "shape-1.svg",
              vertical: "bottom",
              horizontal: "right",
            },
            {
              image: "shape-6.svg",
              vertical: "top",
              horizontal: "left",
            },
          ]}
          height="618px"
        >
          <div className="container-inner">
            <div className="about-us-wrapper">
              <img src="http://cdn.eramitra.com/images_article/original/DSC00749.jpg" />
              <div className="about-us-description">
                <h3 className="section-title">About Us</h3>
                <p className="section-description">
                  PT. Era Mitra Perdana provides Scientific, Laboratory
                  Equipment, and Services. We are highly experienced and a
                  trusted partner for Government Institutions, Universities, and
                  Industries to supply, install, and provide after sales
                  services in the area of scientific and laboratory equipment
                  since 1999.
                </p>
              </div>
            </div>
          </div>
          <style>
            {`
                .about-us-wrapper {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                }

                .about-us-wrapper img {
                  height: 345px;
                  width: auto;
                  border-radius: 20px;
                  margin-right: 75px;
                }

                .about-us-wrapper .section-description {
                  text-align: justify !important;
                }

                .about-us .icon-shape-1 {
                  display: none;
                }

                @media only screen and (max-width: 800px){

                  .about-us-wrapper {
                    flex-direction: column;
                    justify-content: center;
                  }

                  .about-us-wrapper img {
                    height: 111px;
                    width: auto;
                    border-radius: 20px;
                    margin-right: 0;
                    margin-bottom: 17px;
                  }

                  .about-us {
                    height: 308px !important;
                  }

                  .about-us .icon-shape-1 {
                    display: block;
                  }

                  .about-us .icon-shape-0 {
                    display: none;
                  }
                }
              `}
          </style>
        </Section>

        <Section
          element_id="what-we-do-best"
          background="#FFFFFF"
          icon={[
            {
              image: "shape-2.svg",
              vertical: "top",
              horizontal: "right",
            },
          ]}
          height="1000px"
        >
          <div className="container-inner">
            <div className="what-we-do-best-wrapper">
              <h3 className="section-title">What We Do Best</h3>
              <p className="section-description">
                We offer the best solution for <br></br>Scientific, Laboratory
                Equipment, and Services
              </p>

              <div className="main-content">
                <div className="card-wrapper">
                  <div className="wwdb-card">
                    <img src="/static/images/wwdb-1.svg" />
                    <p>
                      High Quality with <br></br> Competitive Price
                    </p>
                  </div>
                  <div className="wwdb-card">
                    <img src="/static/images/wwdb-2.svg" />
                    <p>
                      Installation &amp; <br></br>Training
                    </p>
                  </div>
                  <div className="wwdb-card">
                    <img src="/static/images/wwdb-3.svg" />
                    <p>
                      Accessories &amp;<br></br> Sparepart
                    </p>
                  </div>
                  <div className="wwdb-card">
                    <img src="/static/images/wwdb-4.svg" />
                    <p>
                      Maintenance &amp; <br></br> Contract Service
                    </p>
                  </div>
                </div>
                <img
                  className="what-we-do-img"
                  src="/static/images/what-we-do-best.svg"
                />
              </div>
            </div>
          </div>
          <style>
            {`
                .what-we-do-best-wrapper {
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                }
                .what-we-do-best-wrapper .section-title {
                  text-align: center;
                }
                
                .what-we-do-best-wrapper .section-description {
                  text-align: center;
                  max-width: 741px;
                }

                .what-we-do-best-wrapper .main-content {
                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                  margin-top: 76px;
                }

                .what-we-do-best-wrapper .card-wrapper {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  padding-bottom: 20px;
                }

                .wwdb-card {
                  background: #F8F8F8;
                  border-radius: 20px;
                  padding: 17px 19px;
                  display: flex;
                  align-items: center;
                  max-width: 439px;
                  margin: 5px 0;
                }

                .wwdb-card p {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 24px;
                  line-height: 29px;
                  color: #000000;
                  margin: 0 0 0 25px;
                  padding-right: 50px;
                }

                @media only screen and (max-width: 1024px){
                  .what-we-do-img {
                    width: 60%;
                  }
                }

                @media only screen and (max-width: 800px){
                  .what-we-do-best {
                    height: 452px !important;
                  }

                  .what-we-do-best .icon-shape-0.right {
                    height: 30%;
                  }

                  .wwdb-card {
                    background: #F8F8F8;
                    border-radius: 10px;
                    padding: 8px;
                    display: flex;
                    align-items: center;
                    max-width: 217px !important;
                  }
  
                  .wwdb-card img {
                    height: 45px;
                    width: auto;
                  }

                  .wwdb-card p {
                    font-family: Bahnschrift;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 14px;
                    margin: 0 0 0 12px !important;
                    padding-right: 50px;
                  }

                  .what-we-do-img {
                    display: none;
                  }

                  .what-we-do-best-wrapper {
                    padding: 25px 0;
                  }

                  .what-we-do-best-wrapper .main-content {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    margin-top: 26px;
                    height: 100%;
                  }

                  .what-we-do-best-wrapper .card-wrapper {
                    padding-bottom: 0px;
                  }
                }
              `}
          </style>
        </Section>

        <Section element_id="brands" background="#FBFBFB" height="263px">
          <div className="container-inner">
            <div className="brands-wrapper">
              <div className="brands-slider desktop">
                <Slider {...settings}>
                  {props.brands &&
                    props.brands.length > 0 &&
                    props.brands.map((brand, idx) => (
                      <div className="brands-item" key={idx}>
                        {brand.Picture && brand.Picture.name && (
                          <img
                            src={`https://svr.eramitra.com/images/${brand.Picture.name}`}
                          />
                        )}
                      </div>
                    ))}
                </Slider>
              </div>

              <div className="brands-slider mobile">
                <Slider {...settings2}>
                  {props.brands &&
                    props.brands.length > 0 &&
                    props.brands.map((brand, idx) => (
                      <div className="brands-item" key={idx}>
                        {brand.Picture && brand.Picture.name && (
                          <img
                            src={`https://svr.eramitra.com/images/${brand.Picture.name}`}
                          />
                        )}
                      </div>
                    ))}
                </Slider>
              </div>
              <div className="brands-description">
                <h3 className="section-title">Brands</h3>
                <p className="section-description">Meet our Principals</p>
              </div>
            </div>
          </div>
          <style>
            {`
                .brands-wrapper {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                }

                .brands-wrapper .section-title {
                  margin: 0;
                }
                
                .brands-wrapper .section-description {
                  max-width: 280px;
                }

                .brands-slider.desktop {
                  width: 70%;
                  margin-right: 54px;
                }

                .brands-slider.mobile {
                  display: none;
                }


                .brands-item {
                  height: 40px;
                  display: flex;
                  justify-content: center;
                }

                .brands-item img{
                  height: 40px;
                  width: auto;
                  margin: 0 20px;
                }

                
                @media only screen and (max-width: 800px){
                    .brands-wrapper {
                      flex-direction: column-reverse;
                      justify-content: center;
                    }

                    
                    .brands-slider.mobile {
                      display: block;
                      width: 100%;
                      margin-right: 0 !important;
                      padding: 0 20px;
                    }

                    .brands-slider.desktop {
                      display: none;
                    }

                    .brands-item {
                      height: 30px;
                      display: flex;
                      justify-content: center;
                    }
    
                    .brands-item img{
                      height: 30px;
                      width: auto;
                      margin: 0 20px;
                    }

                    .brands-description {
                      margin-bottom: 25px;
                    }
    
                }
              `}
          </style>
        </Section>
        <Section
          element_id="discover"
          background="#FFFFFF"
          height="768px"
          icon={[
            {
              image: "shape-4.svg",
              vertical: "top",
              horizontal: "left",
            },
          ]}
        >
          <div className="container-inner">
            <div className="discover-wrapper">
              <div className="discover-description">
                <h3 className="section-title">Discover</h3>
                <p className="section-description">
                  Discover our latest news and info
                </p>
              </div>
              <div className="discover-slider">
                <Slider {...settings2}>
                  {props.articles &&
                    props.articles.data &&
                    props.articles.data.length > 0 &&
                    props.articles.data.map((article, idx) => (
                      <div className="article-card-wrapper" key={idx}>
                        <ArticleCard
                          picture={article.Picture && article.Picture.name}
                          name={article.title}
                          slug={article.id}
                          date={utc_to_local_short(article.createdAt)}
                          key={idx}
                        />
                        <style>
                          {`

                      .discover-slider {
                        width: calc(100% - 500px);
                      }

                      .discover-description {
                        margin-right: 30px;
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

                      .discover-slider .slick-next {
                        right: 650px;
                        top: auto;
                        bottom: 10px;
                      }

                      .discover-slider .slick-prev {
                        left: -75px;
                        z-index: 5;
                        top: auto;
                        bottom: 10px;
                      }

                      .discover-wrapper {
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                      }
      
                      .discover-wrapper .section-description {
                        max-width: 350px;
                      }
                      

                      @media only screen and (max-width: 800px){
                        .discover {
                          height: auto !important;
                          padding: 40px 0 40px 0;
                        }
                        .discover-slider {
                          width: 100%;
                          margin-top: 40px;
                        }
                        .discover-slider .slick-next {
                          right: 0px;
                          top: -10px;
                          bottom: 10px;
                        }
  
                        .discover-slider .slick-prev {
                          left: auto;
                          z-index: 5;
                          top: -10px;
                          right: 20px;
                          bottom: auto;
                        }
  
                        .discover-description {
                          margin-right: 0px !important;
                        }

                        .discover .icon-shape-0.left {
                          width: 15%;
                        }
      
                        .discover-wrapper {
                          flex-direction: column;
                          justify-content: center;
                        }
                      }
                      `}
                        </style>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </Section>
        <Section
          element_id="career"
          background="#1BA58A"
          height="351px"
          icon={[
            {
              image: "career.svg",
              vertical: "bottom",
              horizontal: "left",
            },
            {
              image: "shape-3.svg",
              vertical: "top",
              horizontal: "right",
            },
          ]}
        >
          <div className="container-inner">
            <div className="career-wrapper">
              <div className="career-description">
                <h3 className="section-title">
                  Up for a challenge? Let’s join us!
                </h3>
              </div>
              <div className="btn-wrapper">
                <a href={`${process.env.ROOT_DOMAIN}/career`}>More Info</a>
              </div>
            </div>
          </div>
          <style>
            {`
                .career-wrapper {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }

                
                .career-wrapper .career-description {
                  display: flex;
                  align-items: center;
                }

                .career-wrapper .section-title {
                  margin: 0;
                  max-width: 496px;
                  color: #FFFFFF !important;
                  font-weight: normal !important;
                }

                .career-wrapper .btn-wrapper a {
                  padding: 21px 50px;
                  background: #FFFFFF;
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 24px;
                  line-height: 29px;
                  color: #1BA58A;
                  border-radius: 20px;
                }
                

                @media only screen and (max-width: 800px){

                  .career .icon-shape-0 {
                    height: 124px;
                  }
                  
                  .career .icon-shape-1 {
                    display: none;
                  }

                  .career {
                    height: 137px !important;
                  }

                  .career-wrapper .btn-wrapper a {
                    font-size: 12px;
                    line-height: 12px;
                    padding: 8px 15px;
                    border-radius: 8px;
                  }

                  .career-wrapper .section-title {
                    font-family: Bahnschrift;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 17px;
                    letter-spacing: 0em;
                    text-align: left;
                    width: 125px;

                  }

                  .career-wrapper {
                    justify-content: flex-end !important;
                  }
                }
              `}
          </style>
        </Section>
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
              font-size: 24px;
              line-height: 28px;
              color: #666A66;
              margin: 0;
            }

            
            @media only screen and (max-width: 800px){
              .section-title {
                font-family: Bahnschrift;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
                text-align: center;
                margin-bottom: 10px;
              }

              .section-description {
                font-family: Calibri;
                font-style: italic;
                font-weight: normal;
                font-size: 12px;
                line-height: 15px;
                text-align: center;
                color: #666A66;
              }
            }
          `}
      </style>
    </Layout>
  );
};

export async function getServerSideProps() {
  const getBrands = await fetch(`${process.env.ROOT_DOMAIN}/api/getBrands`);
  const brands = await getBrands.json();

  const getBanner = await fetch(`${process.env.ROOT_DOMAIN}/api/getBanner`);
  const banner = await getBanner.json();

  const getIndustry = await fetch(`${process.env.ROOT_DOMAIN}/api/getIndustry`);
  const industries = await getIndustry.json();

  const getApplication = await fetch(
    `${process.env.ROOT_DOMAIN}/api/getApplication`
  );
  const applications = await getApplication.json();

  const getArticles = await fetch(`${process.env.ROOT_DOMAIN}/api/getArticle`);
  const articles = await getArticles.json();

  const getCatalogue = await fetch(
    `${process.env.ROOT_DOMAIN}/api/getCatalogue`
  );
  const catalogue = await getCatalogue.json();

  return {
    props: {
      articles: articles,
      banner: banner,
      brands: brands,
      industries: industries,
      applications: applications,
      catalogue: catalogue,
    },
  };
}

export default Home;

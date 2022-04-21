import Layout from "Containers/layout";

const Articles = (props) => {

  return (
    props.article && 
      <Layout
        title={props.article.title ? `${props.article.title} || PT. Era Mitra Perdana` : "Article || PT. Era Mitra Perdana"}
        applications={props.applications}
        brands={props.brands}
        industries={props.industries}
        catalogue={props.catalogue} >      
        <div className="container">
          <div className="header-about">
            <img className="green-tetra-img" src="/static/images/green-tetra.svg" />
            <div className="header-about-wrapper">
              <div className="header-img">
                <img src={props.article.Picture ? `https://svr.eramitra.com/images/${props.article.Picture.name}` : "/static/images/not-found.jpg" } />
              </div>
              <h3 className="section-title">{props.article.title}</h3>  
              <div className="share-content">
                  <p>Share this article:</p>
                    <a onClick={() => { window.navigator.clipboard.writeText(`${process.env.ROOT_DOMAIN}/news-info/${props.query}`); alert("Link is copied!")}}>
                      <span className="material-icons logo-link">
                      link
                      </span>
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=${process.env.ROOT_DOMAIN}/news-info/${props.query}&text=Hi I just read this article ${props.article.title} by Era Mitra Perdana check this out!`}>
                      <img className="logo-social logo-social-article" src="/static/icons/twitter.png" />
                    </a>
                    <a href={`https://www.facebook.com/sharer.php?s=100&p[url]=https%3A%2F%2Fstaging.eramitra.com%2Fnews-info%2F${props.query}&p[title]=${props.article.title}&p[summary]=Summary`}>
                      <img className="logo-social logo-social-article" src="/static/icons/facebook.png" />
                    </a>
              </div>
            </div>
            <style>
              {`
                .header-about-wrapper {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-top: -250px;
                  padding-bottom: 30px;
                }

                .logo-link, .logo-social-article {
                  margin-right: 10px;
                  cursor: pointer;
                }

                .header-img {
                  width: 566px;
                  height: 345px;
                  border-radius: 20px;
                  margin-bottom: 70px;
                }

                .share-content {
                  display: flex;
                }

                .share-content p {
                  margin: 0 10px 0 0;
                  color: #0B9A7E;
                  font-weight: 600;
                }

                .header-img img {
                  object-fit: cover;
                  width: 566px;
                  height: 345px;
                  border-radius: 20px;
                }

                .header-about .section-title, .header-about .section-description {
                  text-align: center;
                  width: 55%;
                }

                .article-content {
                  margin-bottom: 50px;
                }

                @media only screen and (max-width: 800px){

                  .header-about-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: -50px;
                    padding-bottom: 30px;
                  }

                  .header-img {
                    width: 183px;
                    height: 111px;
                    border-radius: 10px;
                    margin-bottom: 30px;
                  }

                  .header-img img {
                    width: 183px;
                    height: 111px;
                    border-radius: 10px;
                  }
  
                }
              `}
            </style>
          </div>

          <div className="container-inner">
            
              <div className="article-content" dangerouslySetInnerHTML={{__html: props.article.content}}></div>
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

            .article-content {
              word-wrap: break-word;
            }
            .green-tetra-img {
              width: 100%;
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

              .share-content p {
                font-size: 14px;
                margin: 0 10px 0 0;
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
}

export async function getServerSideProps(req) {

  const getBrands = await fetch(`${process.env.ROOT_DOMAIN}/api/getBrands`)
  const brands = await getBrands.json()


  const getIndustry = await fetch(`${process.env.ROOT_DOMAIN}/api/getIndustry`)
  const industries = await getIndustry.json()


  const getApplication = await fetch(`${process.env.ROOT_DOMAIN}/api/getApplication`)
  const applications = await getApplication.json()

  
  const getArticle = await fetch(`${process.env.ROOT_DOMAIN}/api/getArticle/${req.query.slug}`)
  const article = await getArticle.json()

  
  const getCatalogue = await fetch(`${process.env.ROOT_DOMAIN}/api/getCatalogue`)
  const catalogue = await getCatalogue.json()

  return { props: { article: article, brands: brands, industries: industries, applications: applications, catalogue: catalogue, query: req.query.slug }}
}

export default Articles;

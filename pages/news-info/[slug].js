import Layout from "Containers/layout";

const Articles = (props) => {
  
	const settings = {
		dots: true,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
    variableWidth: true
	};

  return (
      <Layout
        title="test"
        applications={props.applications}
        brands={props.brands}
        industries={props.industries} >      
        <div className="container">
          <div className="header-about">
            <img className="green-tetra-img" src="/static/images/green-tetra.svg" />
            <div className="header-about-wrapper">
              <div className="header-img">
                <img src="http://cdn.eramitra.com/images_article/original/DSC00749.jpg" />
              </div>
              <h3 className="section-title">About Us</h3>
              <p className="section-description">PT.	Era	Mitra	Perdana	provides	Scientific,	Laboratory	
              Equipment,	and	Services. We	are	highly	experienced	and	a	trusted	partner	for	
              Government	Institutions,	Universities,	and	Industries	to	
              supply,	install,	and	provide	after	sales	services	in	the	area	
              of	scientific	and	laboratory	equipment	since	1999.</p>
            </div>
            <style>
              {`
                .header-about-wrapper {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-top: -250px;
                  padding-bottom: 78px;
                }

                .header-img {
                  width: 566px;
                  height: 345px;
                  border-radius: 20px;
                  margin-bottom: 70px;
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

export async function getServerSideProps() {

  const getBrands = await fetch(`${process.env.ROOT_DOMAIN}/api/getBrands`)
  const brands = await getBrands.json()


  const getIndustry = await fetch(`${process.env.ROOT_DOMAIN}/api/getIndustry`)
  const industries = await getIndustry.json()


  const getApplication = await fetch(`${process.env.ROOT_DOMAIN}/api/getApplication`)
  const applications = await getApplication.json()

  return { props: { brands: brands, industries: industries, applications: applications }}
}

export default Articles;

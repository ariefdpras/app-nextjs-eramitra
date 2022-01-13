import Layout from "../containers/layout";
import CareerCard from "../components/card/CareerCard";
import Section from "../components/section";
import Slider from "react-slick";

const Home = (props) => {
  
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
        title="Career | PT. Era Mitra Perdana"
        applications={props.applications}
        brands={props.brands}
        industries={props.industries}>     
        <div className="container">
        <Section 
            element_id="career" 
            background="#1BA58A"  
            height="351px"
            icon={[
              {
                image: "career.svg",
                vertical: "bottom",
                horizontal: "left"
              },
              {
                image: "shape-3.svg",
                vertical: "top",
                horizontal: "right"
              }
            ]}  >
            <div className="container-inner">
              <div className="career-wrapper">
                <div className="career-description">
                  <h3 className="section-title">Up for a challenge? 
                    Let’s join us!</h3>
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
                  text-align: center;
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
                    justify-content: center !important;
                    padding-left: 50px;
                  }
                }
                
              `}
            </style>
          </Section>
          
          <Section 
            element_id="career-content" 
            background="#FFFFFF" 
            icon={[
              {
                image: "shape-2.svg",
                vertical: "top",
                horizontal: "right"
              }
            ]} 
            height="1000px" >
            <div className="container-inner">
              <div className="career-card-wrapper">
                {
                  props.careers && props.careers.map((career, idx) => 
                  <CareerCard 
                     key={idx} title={career.title} description={career.description} />)
                }
              </div>
            </div>
            <style>
              {`
                .career-card-wrapper {
                  margin-top: 50px;
                  margin-bottom: 100px;
                }

                @media only screen and (max-width: 800px){

                  .career-content .icon-shape-0 {
                    display: none;
                  } 
                  
                  .career-card-wrapper {
                      margin-top: 20px !important;
                      margin-bottom: 40px !important;
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
  const getCareer = await fetch(`${process.env.ROOT_DOMAIN}/api/getCareer`)
  const careers = await getCareer.json()

  const getBrands = await fetch(`${process.env.ROOT_DOMAIN}/api/getBrands`)
  const brands = await getBrands.json()


  const getIndustry = await fetch(`${process.env.ROOT_DOMAIN}/api/getIndustry`)
  const industries = await getIndustry.json()


  const getApplication = await fetch(`${process.env.ROOT_DOMAIN}/api/getApplication`)
  const applications = await getApplication.json()

  return { props: { careers: careers, brands: brands, industries: industries, applications: applications }}
}

export default Home;

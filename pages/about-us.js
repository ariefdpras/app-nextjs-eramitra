import Layout from "../containers/layout";
import Section from "../components/section";
import Slider from "react-slick";

const Home = (props) => {
 
  const settings = {
		dots: true,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
    variableWidth: true,
    centerMode: true
    
	};

  const settings2 = {
		dots: true,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
    variableWidth: true,
    centerMode: true
	};

  return (
      <Layout
        title="About Us | PT. Era Mitra Perdana"
        applications={props.applications}
        brands={props.brands}
        industries={props.industries}
        catalogue={props.catalogue}   >      
        <div className="container">
          <div className="header-about">
            <img className="green-tetra-img" src="/static/images/green-tetra.svg" />
            <div className="header-about-wrapper">
              <div className="header-img">
                <img src="http://cdn.eramitra.com/images_article/original/DSC00749.jpg" />
              </div>
              <h3 className="section-title">About Us</h3>
              <p className="section-description">PT.	Era	Mitra	Perdana	provides	Scientific,	Laboratory	Equipment,	and	Services.	Established	in	Jakarta,	
We	are	committed	to	provide	the	best	service,	open	communication,	and	proactively	giving	suggestion	
and	alternate	solution	to	support	our	principals	and	customers.	<br></br><br></br>
To	be	the	best	in	Scientific	and	Laboratory	Equipment	industry,	PT	Era	Mitra	Perdana	is	supported	by	
highly	qualified	personnel,	high	quality	product,	and	optimum	after	sales	service.	
We	are	highly	experienced	and	a	trusted	partner	for	Government	Institutions,	Universities,	and	
Industries	to	supply,	install,	and	provide	after	sales	services	in	the	area	of	scientific	and	laboratory	
equipment	since	1999.</p>
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

                .header-about .section-title {
                  text-align: center;
                  width: 55%;
                  max-width: 700px;
                }
                
                .header-about .section-description {
                  text-align: center;
                  width: 55%;
                  max-width: 700px;
                  text-align: justify !important;
                }


                @media only screen and (max-width: 800px){

                  .header-about-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: -50px;
                    padding-bottom: 30px;
                  }

                  .header-about .section-description {
                    text-align: center;
                    width: 100%;
                    padding: 0 20px;
                    text-align: justify !important;
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
          <Section 
            element_id="vision-about" 
            background="#FBFBFB"  
            height="618px" >
            <div className="container-inner">
              <div className="vision-about-wrapper">
                <div className="about-us-description">
                  <h3 className="section-title">Vision</h3>
                  <p className="section-description">To	be	the	best	and	most	reliable	partner	for	our	principals	and	clients	in	Scientific	and	Laboratory	
Equipment	Industry.</p>
                </div>
                <img src="/static/images/vision.svg" />
              </div>
            </div>
            <style>
              {`
                .vision-about-wrapper {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                }

                .vision-about-wrapper img {
                  height: 60%;
                  width: auto;
                  border-radius: 20px;
                  margin-left: 75px;
                }

                @media only screen and (max-width: 800px){
                  .vision-about {
                    height: 400px !important;
                  }

                  .vision-about-wrapper {
                    flex-direction: column-reverse;
                    justify-content: center;
                
                  }

                  .vision-about-wrapper img {
                    height: auto;
                    width: 70%;
                    margin-left: 0;
                    margin-bottom: 20px;
                  }

                }
              `}
            </style>
          </Section>

          <Section 
            element_id="mission-about" 
            background="#FFFFFF" 
            icon={[
              {
                image: "shape-5.svg",
                vertical: "bottom",
                horizontal: "right"
              }
            ]} 
            height="618px" >
            <div className="container-inner">
              <div className="mission-about-wrapper">
                <img src="/static/images/mission.svg" />
                <div className="mission-description">
                  <h3 className="section-title">Mission</h3>
                  <p className="section-description">
                    <ul className="section-mission">
                        <li>Provide	high	quality	product	and	services	with	competitive	price</li>
                        <li>Be	proactive	during	the	end-to-end	process	in	supporting	principals	and	clients</li>
                        <li>Continuously	learning	and	sharing	insights	regarding	Indonesian	Scientific	and	Laboratory Industry</li>
                        <li>Company	digitalization	to	provide	easier	access	for	consumers</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <style>
              {`
                .mission-about-wrapper {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                }

                .mission-about-wrapper img {
                  height: 70%;
                  width: auto;
                  border-radius: 20px;
                  margin-right: 75px;
                }

                .section-mission {
                  margin-left: -20px;
                  text-align: justify !important;
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


                @media only screen and (max-width: 800px){

                  .mission-about {
                    height: auto !important;
                    padding: 40px 0px;
                  }

                  .mission-about-wrapper {
                    flex-direction: column;
                    justify-content: center;                
                  }

                  .mission-about-wrapper img {
                    height: auto;
                    width: 70%;
                    margin-right: 0;
                    margin-bottom: 20px;
                  }
                  .mission-about .icon-shape-0 {
                    display: none;
                  }

                  .mission-about .section-description {
                    text-align: justify;
                  }
                  .section-mission {
                    margin-left: -20px;
                  }
                }
              `}
            </style>
          </Section>
          
          
          <Section 
            element_id="values" 
            background="#FBFBFB" 
            icon={[
              {
                image: "shape-4.svg",
                vertical: "top",
                horizontal: "left"
              }
            ]} 
            height="768px" >
            <div className="container-inner">
              <div className="values-wrapper">
                <h3 className="section-title">Values</h3>
                <div className="values-card-wrapper">
                  <div className="values-card">
                    <img className="values-img other-perform" src="/static/images/bond.svg"/>
                    <h6>Bond</h6>
                    <p>We	aim	to	be	the	best	and	most	reliable	partner	for	all	stakeholders	which	we	believe	started	
from	having	a	strong	bond.</p>
                  </div>
                  <div className="values-card">
                    <img className="values-img " src="/static/images/performance.svg"/>
                    <h6>Performance</h6>
                    <p>	We	are	committed	to	perform	in	the	best	way	possible	in	all	projects	by	being	a	
proactive	partner.</p>
                  </div>
                  <div className="values-card">
                    <img className="values-img other-perform" src="/static/images/process.svg"/>
                    <h6>Process</h6>
                    <p>We	believe	process	is	an	important	part	in	all	projects	and	are	committed	to	be	a	reliable	
partner	for	our	stakeholders	along	the	process.
</p>
                  </div>
                </div>
              </div>
            </div>
            <style>
              {`
                .values-wrapper {
                  height: 100%;
                  display: flex;
                  align-items: center;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                }

                .values-card-wrapper {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-top: 40px;
                }

                .values-card {
                  width: 30%;
                  margin: 0 20px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                }

                .other-perform {
                  padding: 10px;
                }


                .values-card img {
                  margin-bottom: 20px;
                }

                .values-card h6 {
                  font-family: Bahnschrift;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 24px;
                  line-height: 29px;
                  text-align: center;
                  margin: 0 0 5px 0;
                }

                .values-card p {
                  font-family: Calibri;
                  font-style: italic;
                  font-weight: normal;
                  font-size: 20px;
                  line-height: 24px;
                  text-align: center;
                  color: #666A66;
                }


                @media only screen and (max-width: 800px){
                  .values {
                    height: auto !important;
                    padding: 40px 0;
                  }

                  .values .icon-shape-0 {
                    width: 20% !important;
                  }
                  .values .section-title {
                    font-family: Bahnschrift;
                  font-size: 24px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 29px;
                  letter-spacing: 0em;
                  text-align: center;

                  }
                 .values-card-wrapper {
                   flex-direction: column;
                   margin-top: 20px;
                 }

                 .values-img {
                  width: 20%;
                  margin-bottom: 10px !important;
                }
                 .values-img.other-perform {
                   width: 30%;
                   margin-bottom: 10px !important;
                 }

                

                 .values-card {
                   width: 80%;
                   margin-bottom: 20px;
                 }

                 .values-card h6 {
                  font-family: Bahnschrift;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 19px;
                  letter-spacing: 0em;
                  text-align: center;

                 }

                 .values-card p {
                  font-family: Calibri;
                  font-size: 12px;
                  font-style: italic;
                  font-weight: 400;
                  line-height: 15px;
                  letter-spacing: 0em;
                  text-align: center;
                  margin: 0 !important;
                  
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
                horizontal: "right"
              }
            ]} 
            height="1000px" >
            <div className="container-inner">
              <div className="what-we-do-best-wrapper">
                  <h3 className="section-title">What We Do Best</h3>
                  <p className="section-description desktop-only">We offer the best solution for Scientific, Laboratory Equipment, and Services</p>
                  <p className="section-description mobile-only">We offer the best solution for Scientific, <br></br> Laboratory Equipment, and Services</p>
                      
                  <div className="main-content">
                    <div className="card-wrapper">
                      <div className="wwdb-card">
                        <img src="/static/images/wwdb-1.svg" />
                        <p>High Quality with <br></br> Competitive Price</p>
                      </div>
                      <div className="wwdb-card">
                        <img src="/static/images/wwdb-2.svg" />
                        <p>Installation &amp; <br></br>Training</p>
                      </div>
                      <div className="wwdb-card">
                        <img src="/static/images/wwdb-3.svg" />
                        <p>Accessories &amp;<br></br> Sparepart</p>
                      </div>
                      <div className="wwdb-card">
                        <img src="/static/images/wwdb-4.svg" />
                        <p>Maintenance &amp; <br></br> Contract Service</p>
                      </div>
                    </div>
                    <img className="what-we-do-img" src="/static/images/what-we-do-best.svg" />
                  </div>
              </div>
            </div>
            <style>
              {`

                .mobile-only {
                  display: none;
                }

                .desktop-only {
                  display: block;
                }

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
                  .mobile-only {
                    display: block;
                  }
                  
                  .desktop-only {
                    display: none;
                  }
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

        
          <Section 
            element_id="brands" 
            background="#FBFBFB"  
            height="263px" >
            <div className="container-inner">
              <div className="brands-wrapper">
                
                <div className="brands-slider desktop">
                  <Slider {...settings}>
                      <div className="brands-item">
                        <img src={`https://svr.eramitra.com/images/pertamina.png`} />
                      </div>
                      <div className="brands-item">
                        <img src={`https://svr.eramitra.com/images/bmkg.png`} />
                      </div>
                  </Slider>
                </div>

                <div className="brands-slider mobile">
                  <Slider {...settings2}>
                 
                  <div className="brands-item">
                        <img src={`https://svr.eramitra.com/images/pertamina.png`} />
                      </div>
                      <div className="brands-item">
                        <img src={`https://svr.eramitra.com/images/bmkg.png`} />
                      </div>
                  </Slider>
                </div>
                <div className="brands-description">
                  <h3 className="section-title">Our clients</h3>
                  <p className="section-description">Meet our clients</p>
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

  
  const getCatalogue = await fetch(`${process.env.ROOT_DOMAIN}/api/getCatalogue`)
  const catalogue = await getCatalogue.json()

  return { props: { brands: brands, industries: industries, applications: applications, catalogue: catalogue }}
}

export default Home;

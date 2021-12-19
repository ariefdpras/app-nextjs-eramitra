import React from 'react'
import Title from '../Title'
import TestimonialCard from '../testimonial/TestimonialCard'
import Slider from "react-slick";
class Testimonial extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props
    const setting_slider = {
      arrows: true,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
    }

    return (
        <div className="testimonial-section" id="testimonial">
            <Title text={"Testimonial"} position={"center"} element_id={"testimonial"}/>
            <br></br>
            <div className="testimonial-wrapper desktop-only">
                <TestimonialCard picture={"/static/images/avatar/ava-girl.svg"} size={0} name={"Josephine"} testimonial={"Pertama kali sewa di byebeli, dan bagus kok kameranya,pelayananya garibet juga kalo mau sewa disini. Pokoknya good lah"} />
                <TestimonialCard picture={"/static/images/avatar/ava-boy.svg"} size={1} name={"John"} testimonial={"Saya sudah sering sewa kamera disini pelayanannya bagus dan fast respon"} />
                <TestimonialCard picture={"/static/images/avatar/ava-girl.svg"} size={0} name={"Rose"} testimonial={"Oke banget. 9/10"} />
            </div>
            <div className="testimonial-slider mobile-only">
              <div className="testimonial-slider-wrapper">
                <Slider {...setting_slider} >
                  <div className="testimonial-slider-item">
                    <TestimonialCard picture={"/static/images/avatar/ava-girl.svg"} size={0} name={"Josephine"} testimonial={"Pertama kali sewa di byebeli, dan bagus kok kameranya,pelayananya garibet juga kalo mau sewa disini. Pokoknya good lah"} />
                  </div>  
                  <div className="testimonial-slider-item">
                    <TestimonialCard picture={"/static/images/avatar/ava-boy.svg"} size={0} name={"John"} testimonial={"Saya sudah sering sewa kamera disini pelayanannya bagus dan fast respon "} />
                  </div>      
                  <div className="testimonial-slider-item">
                    <TestimonialCard picture={"/static/images/avatar/ava-girl.svg"} size={0} name={"Rose"} testimonial={"Oke banget. 9/10"} />
                  </div> 
                </Slider>
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
                        
                        .testimonial-wrapper.desktop-only {
                          display: flex !important;
                        }

                        .testimonial-section {
                            height: 500px;
                            display: flex !important;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            background-color: #ffffff;
                            background-image: url('static/images/testimonials.svg');
                            background-position: center center;
                            background-repeat: no-repeat;
                            background-size: 100% auto;
                            margin-top: 200px;
                        }

                        .testimonial-slider {
                          display: block;    
                          width: 100%;
                        }

                        .testimonial-slider-item {
                          padding: 20px 5px 5px 5px;
                        }

                        .testimonial-wrapper {
                            max-width: 1120px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }

                        .testimonial-slider .slick-slide {
                          outline: none !important;
                        }

                        .testimonial-slider .slick-prev,
                        .testimonial-slider .slick-next
                        {
                          color: #FFFFFF !important;
                          -webkit-transform: translate(0, -50%);
                          -ms-transform: translate(0, -50%);
                          transform: translate(0, -30%);
                        }

                        .testimonial-slider .slick-prev:before,
                        .testimonial-slider .slick-next:before
                        {
                          color: #FFFFFF !important;
                        }

                        .testimonial-slider .slick-prev
                        {
                            left: 15px;
                            z-index: 2;
                        }
                        .testimonial-slider [dir='rtl'] .slick-prev
                        {
                            right: -15px;
                            left: auto;
                        }
                        .testimonial-slider .slick-prev:before
                        {
                          content: '❮';
                        }
                        .testimonial-slider [dir='rtl'] .slick-prev:before
                        {
                          content: '❯';
                        }

                        .testimonial-slider .slick-next
                        {
                            right: 15px;
                        }

                        .testimonial-slider [dir='rtl'] .slick-next
                        {
                            right: auto;
                            left: -15px;
                        }
                        .testimonial-slider .slick-next:before
                        {
                          content: '❯';
                        }
                        .testimonial-slider [dir='rtl'] .slick-next:before
                        {
                          content: '❮';
                        }

                        @media only screen and (max-width: 800px){ 
 

                          .mobile-only {
                            display: block;
                          }
                        
                          .desktop-only {
                              display: none;
                          }
                          
                          .testimonial-wrapper.desktop-only {
                            display: none !important;
                          }

                          .testimonial-section {
                            background-image: none;
                            height: 100%;
                            margin-top: 40px;
                          }
                        }
                    `}
                </style>
        </div>
      )
    }
}

export default Testimonial
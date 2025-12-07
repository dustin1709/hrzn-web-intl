import React, { useRef } from 'react';
import Slider from 'react-slick';
import parse from 'html-react-parser';
import { Link } from 'react-router';

const FeaturedTour1 = () => {

      const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      };       

      const tourContent = [
        {img:'/assets/img/feature/01.jpg', location:'Hy Lạp', title:'Hy Lạp'},                  
        {img:'/assets/img/feature/02.jpg', location:'Hoa Kỳ', title:'Hoa Kỳ'},                  
        {img:'/assets/img/feature/03.jpg', location:'Thổ Nhĩ Kỳ', title:'Thổ Nhĩ Kỳ'},                  
        {img:'/assets/img/feature/04.jpg', location:'Síp', title:'Đảo Síp'},
        {img:'/assets/img/feature/skn.jpg', location:'St. Kitts & Nevis', title:'Saint Kitts & Nevis'}                             
      ]; 


    return (
        <section className="featured-tour-section section-padding section-bg">
            
            <div className="array-button">
                <button onClick={previous} className="array-prev"><img src="/assets/img/offer/chervon-right.png" alt="img" /></button>
                <button onClick={next} className="array-next"><img src="/assets/img/icon/39.svg" alt="img" /></button>
            </div>
            <div className="container">
                <div className="section-title">
                    <span className="sub-title wow fadeInUp">
                        Định cư
                    </span>
                    <h2 className="wow fadeInUp wow" data-wow-delay=".5s">
                        Các chương trình định cư phổ biến
                    </h2>
                </div>
                <p className="wow fadeInUp wow" data-wow-delay=".7s">
                Các chương trình định cư phổ biến mang đến lộ trình rõ ràng, thủ tục minh bạch và cơ hội phù hợp cho gia đình, nhà đầu tư và chuyên gia muốn xây dựng cuộc sống tại các quốc gia phát triển. 
                </p>
                <div className="swiper tour-slider">
                    <div className="swiper-wrapper cs_slider_gap_301">
                    <Slider ref={sliderRef} {...settings}>
                    {tourContent.map((item, i) => (
                        <div key={i} className="swiper-slide">
                            <div className="feature-tour-items">
                                <div className="feature-tour-image">
                                    <img src={item.img} alt="img" />
                                    <ul className="location">
                                        <li>
                                        <i className="bi bi-geo-alt-fill"></i>
                                            {item.location}
                                        </li>
                                    </ul>
                                </div>
                                <div className="feature-tour-content">
                                    <h4>
                                        <Link to="/tour/tour-details">
                                        {parse(item.title)}
                                        </Link>
                                    </h4>
                                    <h5>
                                    Liên hệ tư vấn
                                    </h5>
                                    <Link to="/tour/tour-details" className="icon">
                                    <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    </Slider>                         
                    </div>
                </div>
            </div>
         </section>
    );
};

export default FeaturedTour1;
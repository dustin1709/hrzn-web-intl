import React from 'react';
import { Link } from 'react-router';

const About2 = () => {
    return (
<section className="about-section section-padding fix" id="about">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src="/assets/img/about/03.jpg" alt="img" className="wow img-custom-anim-left" />
                                <div className="about-image-2">
                                    <img src="/assets/img/about/05.jpg" alt="img" className="wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                                    <div className="plane-shape">
                                        <img src="/assets/img/about/plane-shape2.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        Giới thiệu về công ty
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                                        Luôn nỗ lực chinh phục những giá trị tốt nhất
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".5s">
                                    Là đơn vị tư vấn di trú sở hữu kinh nghiệm chuyên sâu và hiểu biết thực tiễn, Horizon mang đến giải pháp tối ưu, quy trình minh bạch và trải nghiệm đồng hành đáng tin cậy cho từng hồ sơ.
                                </p>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".3s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <img src="/assets/img/check.png" alt="img" />
                                        </div>
                                        <div className="content summary">
                                            <h5>
                                                Uy tín
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Đồng hành cùng các đối tác toàn cầu hàng đầu
                                        </p>
                                    </div>
                                </div>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".3s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <img src="/assets/img/check.png" alt="img" />
                                        </div>
                                        <div className="content summary">
                                            <h5>
                                                Chuyên môn
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Đội ngũ dày dặn kinh nghiệm
                                        </p>
                                    </div>
                                </div>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".5s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <img src="/assets/img/check.png" alt="img" />
                                        </div>
                                        <div className="content summary">
                                            <h5>
                                                Hỗ trợ 24/7
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Đồng hành cùng khách hàng 24/7, mọi lúc mọi nơi
                                        </p>
                                    </div>
                                </div>
                                <Link to="/contact" className="theme-btn wow fadeInUp wow" data-wow-delay=".7s">Liên hệ tư vấn 1:1<i className="bi bi-arrow-right"></i></Link>
                                <div>
                                <h1 style={{fontSize: '10%', color: '#fcfdff'}}>Định cư Horizon</h1>
                                <h1 style={{fontSize: '10%', color: '#fcfdff'}}>Horizon Immigration</h1>
                                <h1 style={{fontSize: '10%', color: '#fcfdff'}}>Horizon Di Trú</h1>
                                <h1 style={{fontSize: '10%', color: '#fcfdff'}}>Di Trú Horizon</h1>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;
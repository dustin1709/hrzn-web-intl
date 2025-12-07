import React, { useEffect } from 'react';
import { Link } from 'react-router';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Footer1 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <footer className="footer-section fix bg-cover" data-background="/assets/img/footer/footer-bg.jpg">
            <div className="container">
                <div className="footer-widget-wrapper-new">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-8 col-sm-6 wow fadeInUp wow" data-wow-delay=".2s">
                            <div className="single-widget-items text-center">
                                <div className="widget-head">
                                    <a href="#">
                                        <img src="/assets/img/logo/white-logo.svg" alt="img" />
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <h3>Đăng ký Bản tin</h3>
                                    <p style={{padding: "2%"}}>Cập nhật thông tin mới nhất về chính sách và xu hướng định cư ngay hôm nay!</p>
                                    <div className="footer-input">
                                        <input type="email" id="email2" placeholder="Email" />
                                        <button className="newsletter-btn theme-btn" type="submit">
                                            Đăng ký <i className="bi bi-arrow-right"></i>
                                        </button>
                                    </div>
                                    <div className="social-icon d-flex align-items-center justify-content-center">
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter-x"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 ps-lg-5 wow fadeInUp wow" data-wow-delay=".4s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Giới thiệu</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <Link to="/">
                                            Trang chủ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/news">
                                            Bản tin 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/binhluan">
                                            Bình luận 
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-lg-5 wow fadeInUp wow" data-wow-delay=".6s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Dịch vụ</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                    <Link to="/tour/tour-details">
                                            Định cư Hoa Kỳ  
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/tour/tour-details">
                                            Golden Visa Hy Lạp
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/tour/tour-details">
                                            Thường trú nhân Síp
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/tour/tour-details">
                                            Thổ Nhĩ Kỳ
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/tour/tour-details">
                                            Caribe
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-xl-5 wow fadeInUp wow" data-wow-delay=".6s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Thông tin liên hệ</h4>
                                </div>
                                <div className="contact-info">
                                    <div className="contact-items">
                                        <div className="content">
                                            <h6>
                                                207A Nguyễn Văn Thủ, Phường Tân Định,
                                                TP Hồ Chí Minh, Việt Nam
                                            </h6>
                                            <h6>
                                                35 Lê Văn Lương, Phường Thanh Xuân,
                                                Hà Nội, Việt Nam
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="contact-items">
                                        <div className="content">
                                         <h6>
                                             <a href="mailto:info@touron.com">tuvan@horizonimmi.com</a> 
                                         </h6>
                                      </div>
                                    </div>
                                    <div className="contact-items">
                                       <div className="content">
                                           <h6>
                                               <a href="tel:+84796177999">+84 79 617 7999</a> <br/>
                                           </h6>
                                       </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-wrapper">
                        <p className="wow fadeInUp" data-wow-delay=".3s">
                            Copyright © Công ty TNHH Đầu Tư Quốc Tế Horizon
                        </p>
                        <ul className="bottom-list wow fadeInUp" data-wow-delay=".5s">
                            <li>Điều khoản</li>
                            <li>Chính sách bảo mật</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer1;
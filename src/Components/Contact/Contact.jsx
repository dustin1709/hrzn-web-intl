import React from 'react';

const Contact = () => {
    return (
        <div>
            
         <section className="contact-us-section fix section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="contact-us-main">
                            <div className="contact-box-items" style={{height: '320px'}}>
                                <div className="icon">
                                    <img src="/assets/img/icon/18.svg" alt="img" />
                                </div>
                                <div className="content">
                                    <h3>
                                        Địa chỉ
                                    </h3>
                                    <p style={{fontSize: '90%'}}>
                                        207A Nguyễn Văn Thủ, Tân Định, TP Hồ Chí Minh 700000 <br />
                                        35 Lê Văn Lương, Thanh Xuân, Hà Nội 100000
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="contact-us-main style-2">
                            <div className="contact-box-items" style={{height: '320px'}}>
                                <div className="icon">
                                    <img src="/assets/img/icon/19.svg" alt="img" />
                                </div>
                                <div className="content">
                                    <h3>
                                        <a href="mailto:tuvan@horizonimmi.com" style={{fontSize: '80%'}}>tuvan@horizonimmi.com</a>
                                    </h3>
                                    <p style={{fontSize: '90%'}}>
                                    Đội ngũ Horizon sẽ trân trọng tiếp nhận và phản hồi trong thời gian sớm nhất.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="contact-us-main">
                            <div className="contact-box-items" style={{height: '320px'}}>
                                <div className="icon">
                                    <img src="/assets/img/icon/20.svg" alt="img" />
                                </div>
                                <div className="content">
                                    <h3>
                                        <a href="tel:+84796177999">+84 79 617 7999</a>
                                    </h3>
                                    <p style={{fontSize: '90%'}}>
                                    Quý khách có thể liên hệ trực tiếp qua đường dây hỗ trợ để được phục vụ nhanh chóng và tận tâm bởi đội ngũ Horizon.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>           

          <section className="contact-us-section-2 section-bg-2 fix">
            <div className="container">
                <div className="contact-us-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="contact-us-contact">
                                <div className="section-title">
                                    <span className="sub-title text-white wow fadeInUp">
                                        Đăng ký tư vấn
                                    </span>
                                </div>
                                <div className="comment-form-wrap">
                                    <form action="#" id="contact-form" method="POST">
                                        <div className="row g-4">
                                            <div className="col-lg-6">
                                                <div className="form-clt">
                                                    <input type="text" name="name" id="name" placeholder="Tên" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-clt">
                                                    <input type="text" name="email" id="email4" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-clt">
                                                   <input type="text" name="subject" id="name" placeholder="Chủ đề" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-clt">
                                                    <textarea name="message" id="message" placeholder="Nhu cầu khách hàng"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <button type="submit" className="theme-btn" style={{backgroundColor: '#94890c'}}>
                                                    Gửi
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="map-area">
                                <div className="google-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.995496530247!2d105.79927551010809!3d21.00314048857867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9f543a5139%3A0xe4bcbda75f6e055a!2zMzUgxJAuIEzDqiBWxINuIEzGsMahbmcsIE5ow6JuIENow61uaCwgVGhhbmggWHXDom4sIEjDoCBO4buZaSwgVmlldG5hbQ!5e1!3m2!1sen!2s!4v1765128353743!5m2!1sen!2s"loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>           
        </div>
    );
};

export default Contact;
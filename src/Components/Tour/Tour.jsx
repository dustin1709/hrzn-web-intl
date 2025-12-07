import React from 'react';
import { Link } from 'react-router';

const Tour = () => {

    const destinationContent = [
        {img:'/assets/img/destination/usa.jpg', location:'Hoa Kỳ', title:'Khám phá và tìm hiểu nước Mỹ', day:'14'},      
        {img:'/assets/img/destination/greece.jpg', location:'Hy Lạp', title:'Trải nghiệm cuộc sống tại Hy Lạp',  day:'14'},      
        {img:'/assets/img/destination/turkey.jpg', location:'Thổ Nhĩ Kỳ', title:'Khám phá và tìm hiểu đất nước Thổ Nhĩ Kỳ', rating:'4.7', day:'8'},      
        {img:'/assets/img/destination/cyprus.jpg', location:'Đảo Síp (Cyprus)', title:'Khám phá cuộc sống tại đảo Síp', day:'14'},      
        {img:'/assets/img/destination/caribe.jpg', location:'Các đảo Caribe', title:'Tour các đảo Caribe', day:'10'},      
        {img:'/assets/img/destination/malta.jpg', location:'Malta', title:'Khám phá và trải nghiệm tại Malta', day:'10'},          
      ]; 


    return (
<section className="tour-section section-padding fix">
            <div className="container custom-container">
                <div className="tour-destination-wrapper">
                    <div className="row g-4">
                        <h1 style={{paddingLeft: '5.5%', paddingRight: '5.5%'}}>Chương trình tour Horizon</h1>
                        <p style={{paddingLeft: '5.5%', paddingRight: '5.5%'}}>
                            Chương trình tour được xây dựng dành riêng cho Quý Nhà Đầu Tư, nhằm mang đến trải nghiệm chân thực về nhịp sống, môi trường và văn hoá địa phương, giúp nhà đầu tư và gia đình có góc nhìn toàn diện và xác thực trước khi đưa ra các quyết định liên quan đến kế hoạch định cư. 
                            <br />
                            Đây không phải hành trình nghỉ dưỡng hay giải trí, mà là cơ hội để Quý Nhà Đầu Tư tiếp cận đời sống thường nhật, đánh giá khu vực sinh sống tiềm năng và chuẩn bị những bước đi chiến lược cho tương lai.
                        </p>
                        <div style={{padding: '4.5%'}}>
                            <div className="row g-4">
                            {destinationContent.map((item, i) => (
                                <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp wow" data-wow-delay=".3s">
                                    <div style={{height: '500px'}} className="destination-card-items mt-0">
                                        <div className="destination-image">
                                        <img style={{height: '252px'}} src={item.img} alt="img" />
                                        </div>
                                        <div className="destination-content">
                                            <ul className="meta">
                                                <li>
                                                <i className="bi bi-geo-alt"></i>
                                                    {item.location}
                                                </li>
                                            </ul>
                                            <h5>
                                            <Link to="/tour/tour-details">
                                                {item.title}
                                                </Link>
                                            </h5>
                                            <ul className="info">
                                                <li>
                                                <i className="bi bi-clock"></i>
                                                    {item.day}
                                                </li>
                                            </ul>
                                            <div className="price">
                                                <Link to="/contact" className="theme-btn style-2">Liên hệ<i className="bi bi-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}

                            </div>
                            <div className="page-nav-wrap text-center">
                                <ul>
                                    <li><a className="page-numbers" href="#"><i className="bi bi-arrow-left"></i></a></li>
                                    <li><a className="page-numbers" href="#">01</a></li>
                                    <li><a className="page-numbers" href="#">02</a></li>
                                    <li><a className="page-numbers" href="#">03</a></li>
                                    <li><a className="page-numbers" href="#"><i className="bi bi-arrow-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tour;
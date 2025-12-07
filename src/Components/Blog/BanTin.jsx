import React from 'react';
import { Link } from 'react-router';
// Update các tin tức mới nhất tại trang này ngoài trang chủ ra. Tại Trang chủ update ở file: Blog/BanTinTomTat
const Blog4 = () => {

    const blogContent = [
        {img:'/assets/img/news/greece.jpg', title:'Hy Lạp giới thiệu chương trình Startup Golden Visa', date: '06/12/2025'},
        {img:'/assets/img/news/greece.jpg', title:'Hy Lạp được bầu chọn điểm nghỉ hưu Top 1 Thế Giới', date: '04/12/2025'},
        {img:'/assets/img/news/usa.jpg', title:'Thượng nghị sĩ Hoa Kỳ đề xuất bỏ song tịch', date: '02/12/2025'},
        {img:'/assets/img/news/athens.jpg', title:'Lượng nhà đầu tư Thổ Nhĩ Kỳ và Israel tăng đột biến tại Hy Lạp Q4 2025', date: '12/11/2025'},
      ];

    return (
        <section className="news-section section-padding fix">
            <div className="container">
                <div className="row g-4">
                {blogContent.map((item, i) => (
                    <div key={i} className="col-xl-4 col-md-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-card-items-3 style-4">
                            <div className="news-image">
                            <img src={item.img} alt="img" />
                            </div>
                            <div className="news-content">
                                <ul className="post-meta">
                                    <li className="post">{item.date}</li>
                                </ul>
                                <h4>
                                <Link to="/blog/blog-details">
                                    {item.title}
                                    </Link>
                                </h4>
                                <Link to="/blog/blog-details" className="link-btn">Chi tiết <i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    ))}
 

                </div>
            </div>
        </section>

    );
};

export default Blog4;
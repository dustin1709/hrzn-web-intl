import React from 'react';
import { Link } from 'react-router';

const Blog2 = () => {

    const blogContent = [
        {img:'/assets/img/news/04.jpg', title:'Hy Lạp được bình chọn điểm nghỉ hưu số 1 cho người Mỹ', date: '04/12/2025'},
        {img:'/assets/img/news/05.jpg', title:'Thượng nghị sĩ Mỹ đề xuất bỏ quyền công dân kép', date: '02/12/2025'},
      ];

    return (
<section className="news-section-2 section-padding fix">
            <div className="container-fluid">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">
                        Bản tin
                    </span>
                    <h2 className="wow fadeInUp wow" data-wow-delay=".2s">
                        chính sách và xu hướng mới nhất
                    </h2>
                </div>
                <div className="row">
                {blogContent.map((item, i) => (
                    <div key={i} className="col-xxl-3 col-xl-4 col-md-6 col-lg-6 wow fadeInUp wow" data-wow-delay=".2s">
                        <div className="news-card-items-2">
                            <div className="news-image">
                                <img src={item.img} alt="img" />
                            </div>
                            <div className="news-content">
                                <ul className="post-meta">
                                    <li>
                                    <i className="bi bi-calendar"></i>
                                         {item.date}
                                    </li>
                                </ul>
                                <h4>
                                <Link to="/blog/blog-details">
                                    {item.title}
                                    </Link>
                                </h4>
                                <div className="news-info">
                                    <Link to="/blog/blog-details" className="link-btn style-2">Read More <i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}

                    
                </div>
            </div>
        </section>
    );
};

export default Blog2;
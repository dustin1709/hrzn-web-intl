import React from 'react';
import { Link } from 'react-router';

const BlogSidebar = () => {

        const blogContent = [
        {
            date: '08/12/2025', img:'/assets/img/articles/01.png', 
            title:'So sánh chương trình định cư Hy Lạp & Hoa Kỳ: Lựa chọn nào phù hợp cho Nhà Đầu Tư?', 
            content:'Trong bối cảnh các chương trình đầu tư định cư toàn cầu ngày càng cạnh tranh, Hy Lạp (Golden Visa) và Hoa Kỳ (EB-5) là hai lựa chọn tiêu biểu nhưng phục vụ hai mục tiêu hoàn toàn khác nhau. Dưới đây là phân tích chuyên sâu giúp Quý Nhà Đầu Tư định hình phương án tối ưu cho gia đình và kế hoạch quốc tế hoá tài sản.'
        },
      ];

    return (
        <section className="news-classNameic-section- section-padding fix">
            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-lg-8">
                        <div className="news-standard-wrapper">
                            {blogContent.map((item, i) => (
                            <div key={i} className="news-standard-items">
                                <div className="news-thumb">
                                    <img src={item.img} alt="img" />
                                    <div className="post">
                                        <h3>
                                            {item.date}
                                        </h3>
                                    </div>
                                </div>
                                <div className="news-content">
                                    <ul>
                                        <li>
                                            <i className="bi bi-person"></i>
                                            By admin
                                        </li>
                                    </ul>
                                    <h3>
                                       <Link to="/blog/blog-details">{item.title}</Link>
                                    </h3>
                                    <p>
                                       {item.content}
                                    </p>
                                    <Link to="/blog/blog-details" className="theme-btn">Chi tiết <i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                            ))}

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
                    <div className="col-12 col-lg-4">
                        <div className="main-sideber">
                            
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Chủ đề</h4>
                                </div>
                                <div className="news-widget-categories">
                                    <ul>
                                        <li><a href="#">Mỹ</a></li>
                                        <li><a href="#">Hy Lạp</a></li>
                                        <li><a href="#">EU</a></li>
                                        <li><a href="#">Thổ Nhĩ Kỳ</a></li>
                                        <li><a href="#">Síp</a></li>
                                        <li><a href="#">Canada</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <div className="wid-title">
                                    <h4>Các bài viết mới nhất</h4>
                                </div>
                                <div className="recent-post-area">
                                {blogContent.map((item, i) => (
                                <div key={i} className="recent-items">
                                    <div className="recent-thumb">
                                            <img src={item.img} style={{width: '78px'}} alt="img" />
                                    </div>
                                    <div className="recent-content">
                                            <ul>
                                                <li>
                                                    <i className="bi bi-calendar-check"></i>
                                                    {item.date}
                                                </li>
                                            </ul>
                                            <h6>
                                                {item.title}
                                            </h6>
                                    </div>
                                </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSidebar;
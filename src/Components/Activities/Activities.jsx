import React from 'react';
import { Link } from 'react-router';

const Activities = () => {

    const eventList = [
        {img:'/assets/img/events/handshake.jpg', title:'Hợp tác thúc đẩy', date:'08/12/2025'},
        
      ];

    return (
        <section className="activities-section fix section-padding">
            <div className="container">
                <div className="row g-4">
                <div className="news-standard-wrapper">
                            {eventList.map((item, i) => (
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
                                    <h3>
                                       {item.title}
                                    </h3>
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
            </div>
         </section>
    );
};

export default Activities;
import React, { useEffect, useState } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const HeroBanner2 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);    

        const [isActive, setIsActive] = useState('tour');

    return (
<section className="hero-section-2">
            <div className="hero-2 bg-cover" data-background="/assets/img/hero/hero2.jpg">
                <div className="container custom-container-3">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <div className="sub-title wow fadeInUp">
                                    "Navigate Your Next Horizons"
                                </div>
                                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                    Kiến tạo tương lai <br/>
                                     <span id="text-glow" style={{color: "#EFE8AB", fontFamily: "Arial, sans-serif"}}>KHÔNG BIÊN GIỚI</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner2;
import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import About2 from '../Components/About/About2';
const AboutPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
                Title="About Us"
            ></BreadCumb>
            <About2></About2>
        </div>
    );
};

export default AboutPage;
import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import About2 from '../Components/About/About2';
import Choose1 from '../Components/Choose/Choose1';
import Team1 from '../Components/Team/Team1';

const AboutPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/breadcrumb/breadcrumb.jpg"
                Title="About Us"
            ></BreadCumb>
            <About2></About2>
            <Choose1></Choose1>
            <Team1></Team1>
        </div>
    );
};

export default AboutPage;
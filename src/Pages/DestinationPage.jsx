import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Destination4 from '../Components/Destination/DinhcuGeneral';

const DestinationPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb/dinhcu.jpg"
                Title="Các chương trình định cư"
            ></BreadCumb>
             <Destination4></Destination4>
        </div>
    );
};

export default DestinationPage;
import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Blog4 from '../Components/Blog/BanTin';

const BlogGrid = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb/breadcrumb.png"
                Title="Tin tức mới nhất"
            ></BreadCumb> 
            <Blog4></Blog4>          
        </div>
    );
};

export default BlogGrid;
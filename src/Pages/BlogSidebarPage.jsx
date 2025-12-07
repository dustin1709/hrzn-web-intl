import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import BlogSidebar from '../Components/BlogSidebar/Binhluan';

const BlogSidebarPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb/analyze.jpg"
                Title="Phân tích chuyên sâu"
            ></BreadCumb> 
            <BlogSidebar></BlogSidebar>          
        </div>
    );
};

export default BlogSidebarPage;
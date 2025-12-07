import React from 'react';
import { Link } from 'react-router';

const Destination4 = () => {

    const destinationContent = [
        {name: 'usa', img:'/assets/img/destination/usa.jpg', title:'Hoa Kỳ (EB-5)', desc: 'Chương trình định cư bằng đầu tư nổi tiếng nhất của Mỹ, yêu cầu đầu tư vào dự án tạo tối thiểu 10 việc làm. Mức đầu tư thường được áp dụng là khoảng 800.000 USD tại khu vực ưu tiên. Sau khi hồ sơ được chấp thuận, nhà đầu tư và gia đình nhận thẻ xanh, có quyền sống – học tập – làm việc tự do tại Mỹ và có thể xin quốc tịch sau khoảng 5 năm cư trú.'},      
        {name: 'greece', img:'/assets/img/destination/greece.jpg', title:'Hy Lạp (Golden Visa)', desc: 'Chương trình cấp quyền cư trú châu Âu thông qua đầu tư bất động sản tối thiểu khoảng 250.000 EUR. Nhà đầu tư nhận quyền cư trú dài hạn và tự do đi lại khối Schengen. Tuy nhiên, chương trình không cấp quốc tịch ngay; để xin nhập tịch cần đáp ứng thời gian cư trú liên tục và các yêu cầu khác.'},      
        {name: 'cyprus', img:'/assets/img/destination/cyprus.jpg', title:'Síp (Cyprus Residency)', desc: 'Chương trình nhập tịch bằng đầu tư trước đây yêu cầu mức vốn rất cao đã thay đổi; hiện vẫn còn các lựa chọn liên quan đến quyền cư trú dài hạn thông qua đầu tư bất động sản hoặc doanh nghiệp. Nhà đầu tư nhận quyền cư trú tại Síp và có thể xin quốc tịch sau khi đáp ứng thời gian cư trú thực tế trong nhiều năm, tùy theo quy định cập nhật.'},      
        {name: 'turkey', img:'/assets/img/destination/turkey.jpg', title: 'Thổ Nhĩ Kỳ (Citizenship by Investment)', desc: 'Một trong những chương trình nhập tịch nhanh nhất hiện nay. Nhà đầu tư có thể mua bất động sản trị giá tối thiểu khoảng 400.000 USD và giữ trong 3 năm để xin quốc tịch. Quy trình xét duyệt thường chỉ mất vài tháng, phù hợp với những ai muốn “hộ chiếu thứ hai” nhanh và mức đầu tư vừa phải.'},           
        {name: 'malta', img:'/assets/img/destination/malta.jpg', title: 'Malta Permanent Residence Programme (MPRP)', desc: 'Nhà đầu tư mua bất động sản hoặc thuê nhà + đóng góp kinh tế để được quyền cư trú lâu dài. Gia đình đi kèm cũng được hưởng quyền lợi. Mức đầu tư/thuê: mua bất động sản khoảng €375.000 hoặc thuê tối thiểu €14.000/năm; cần có tài sản cá nhân và đóng góp nhà nước theo quy định.'},           
        {name: 'caribe', img:'/assets/img/destination/caribe.jpg', title:'Caribe (Caribbean CBI)', desc: 'Bao gồm các quốc gia như Dominica, Grenada, Antigua & Barbuda, Saint Kitts & Nevis, Saint Lucia. Nhà đầu tư có thể nhận quốc tịch hợp pháp thông qua đóng góp tài chính hoặc mua bất động sản, với mức đầu tư phổ biến từ khoảng 200.000 USD. Thời gian xử lý nhanh (4–6 tháng), không yêu cầu cư trú, quyền đi lại quốc tế rộng và nhiều ưu đãi về thuế, phù hợp với người muốn hộ chiếu thứ hai nhanh và linh hoạt.'},      
        {name: 'canada', img:'/assets/img/destination/canada.jpg', title:'Canada (Startup Visa)', desc:'Chương trình dành cho doanh nhân có ý tưởng đổi mới. Ứng viên cần được tổ chức được chỉ định tại Canada chấp thuận và cấp Letter of Support. Khi đáp ứng điều kiện, nhà đầu tư và gia đình được cấp thường trú nhân. Không yêu cầu mức vốn cố định quá cao; phù hợp những ai có năng lực khởi nghiệp thực tế và muốn định cư lâu dài.'},      
        {name: 'newzealand', img:'/assets/img/destination/newzealand.jpg', title:'New Zealand (Active Investor Plus / Business Investor Visa)', desc:'Chương trình yêu cầu đầu tư từ khoảng 5–15 triệu NZD tùy hạng mục (hoặc mua – vận hành doanh nghiệp với chương trình Business Investor). Nhà đầu tư và gia đình được quyền cư trú, sau thời gian duy trì đầu tư và cư trú theo quy định có thể xin thường trú và sau đó xin quốc tịch. New Zealand nổi tiếng với môi trường sống an toàn, ổn định và chất lượng cao.'},       
      ]; 

    return (
        <section className="popular-destination-section section-padding pb-0">
            <div className="container">
                <h1>Tổng quan các chương trình định cư</h1>
                <div style={{clear: 'both', padding: '2.5%'}}></div>
                <div className="row g-4">
                {destinationContent.map((item, i) => (
                    <div id={item.name} key={i} className="wow fadeInUp wow" data-wow-delay=".2s">
                        <div className="grid-dinhcu">
                            <div className='ctr-img'>
                                <img src={item.img} alt="img" />
                            </div>
                            <div style={{padding: '1%'}}>
                                <h5>
                                    <Link to="/tour/tour-details">
                                    {item.title}
                                    </Link>
                                </h5>
                                <div className="price">
                                    <h6>{item.desc}</h6>
                                    <div style={{clear: 'both', padding: '2%'}}></div>
                                    <Link to="/tour/tour-details" className="theme-btn style-2">Chi tiết<i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div style={{clear: 'both', padding: '1%'}}></div>
                    </div>
                    ))}
                </div>
            </div>
            <div style={{clear: 'both', padding: '5%'}}></div>
        </section>

    );
};

export default Destination4;
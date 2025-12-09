import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Choose2 = () => {

            useEffect(() => {
                loadBackgroudImages();
            }, []);

    return (
        <section className="choose-us-section section-padding bg-cover fix" data-background="/assets/img/choose-us-bg-2.jpg" id="customerexp" >
            <div className="container">
                <div className="choose-us-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-xl-7 col-lg-6">
                            <div className="choose-us-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        Ưu tiên hàng đầu của chúng tôi
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                                        Trải nghiệm khách hàng
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".3s">
                                Horizon không chỉ là đơn vị tư vấn di trú—đó là người đồng hành đã từng trải qua hành trình định cư như chính nhà đầu tư. Với kinh nghiệm thực tế và sự thấu hiểu sâu sắc, Horizon mang đến những chia sẻ chân thực, giải pháp phù hợp và đặc biệt là sự hỗ trợ về mặt tâm lý trong suốt quá trình chuẩn bị sang môi trường sống mới.
                                <br />
                                Nhà đầu tư chọn Horizon vì ở đây, mỗi quyết định đều dựa trên trải nghiệm thật, mỗi hỗ trợ đều xuất phát từ sự đồng cảm, và mỗi hồ sơ đều được dẫn dắt bằng sự an tâm.
                                <br />
                                Horizon – đồng hành bằng kinh nghiệm, dẫn lối bằng sự thấu hiểu. 
                                </p>
                                <div className="choose-us-area">
                                    <div className="choose-us-items wow fadeInUp wow" data-wow-delay=".3s">
                                        <h3 className="number">
                                            1
                                        </h3>
                                        <div className="content">
                                            <h4>
                                            Tư vấn minh bạch và thực tế
                                            </h4>
                                            <p style={{width: '85%'}}>
                                            Mỗi nhà đầu tư được cung cấp thông tin đầy đủ về chương trình định cư, chi phí, thời gian và các rủi ro tiềm ẩn. Horizon cam kết không hứa hẹn quá mức mà dựa trên kinh nghiệm thực tế đã trải qua.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="choose-us-items wow fadeInUp wow" data-wow-delay=".5s">
                                        <h3 className="number">
                                            2
                                        </h3>
                                        <div className="content">
                                            <h4>
                                            Hỗ trợ toàn diện về thủ tục và hồ sơ
                                            </h4>
                                            <p style={{width: '85%'}}>
                                            Horizon hướng dẫn từng bước chuẩn bị hồ sơ, đảm bảo mọi giấy tờ, quy trình đều minh bạch và đúng chuẩn. Sự chuẩn bị kỹ càng giúp nhà đầu tư giảm áp lực và tránh sai sót không đáng có.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="choose-us-items wow fadeInUp wow" data-wow-delay=".5s">
                                        <h3 className="number">
                                            3
                                        </h3>
                                        <div className="content">
                                            <h4>
                                            Đồng hành và hỗ trợ tâm lý
                                            </h4>
                                            <p style={{width: '85%'}}>
                                            Nhà đầu tư được hỗ trợ nhiệt tình chu đáo về mặt tâm lý — từ việc thích nghi với môi trường mới, giải đáp thắc mắc lo lắng, đến việc xây dựng kế hoạch ổn định tại nước định cư. 
                                            <br />
                                            Horizon cam kết đồng hành, tạo sự an tâm xuyên suốt hành trình.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 wow fadeInUp wow" data-wow-delay=".3s">
                            <div className="choose-us-thumb">
                                <img src="/assets/img/choose-us-bg.png" alt="img" className="wow img-custom-anim-left" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose2;
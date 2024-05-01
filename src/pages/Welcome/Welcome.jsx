import ContentSection from './ContentSection';
import { Link } from 'react-router-dom';
import './welcome.css';
import React from 'react';
import Section_Img1 from '../../assets/images/section1.jpg';
import Section_Img3 from '../../assets/images/tv.png';
import Section_Img4 from '../../assets/images/kid.png';
import ContentVideo from './ContentVideo';
import video1 from '../../assets/images/video-tv-0819.mp4'
import video2 from '../../assets/images/video-devices-vn.mp4'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
    const navigate = useNavigate()
    const linkStyle = {
        textDecoration: "none",
    };

    return (
        <div className='welcome-container'>
            <div className='container'>
                <div className='header'>
                    <h1>NETFLIX</h1>
                    <button
                        onClick={() =>{navigate('/login')}}
                    >
                        <p>Đăng nhập</p>
                    </button>
                </div>
                <div className='main'>
                    <h1>Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác</h1>
                    <p>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</p>
                    <p>Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.</p>
                    <div className='user-start'>
                        <div className='input-box'>
                            <label>Địa chỉ email</label>
                            <input type='text' />
                        </div>
                        <button>
                            <Link to="/" style={linkStyle}><Link />
                                <p>Bắt đầu</p>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <ContentVideo
                title={"Thưởng thức trên TV của bạn"}
                mediavideo={video1}
                content={"Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác."}
                image={Section_Img3}
            />
            <ContentSection
                title={"Tải xuống nội dung để xem ngoại tuyến"}
                content={"Lưu lại những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem."}
                image={Section_Img1}
            />
            <ContentVideo
                title={"Xem ở mọi nơi"}
                mediavideo={video2}
                content={"Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV."}
                image={Section_Img3}
            />
            <ContentSection
                title={"Tạo hồ sơ cho trẻ em"}
                content={"Đưa các em vào những cuộc phiêu lưu với nhân vật được yêu thích trong một không gian riêng. Tính năng này đi kèm miễn phí với tư cách thành viên của bạn."}
                image={Section_Img4}
            />
            <Footer />
        </div>
    );
}

export default Welcome;
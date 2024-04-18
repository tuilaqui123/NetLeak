import './slide.css'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import m1 from '../../assets/movies/1.jpg'
import m2 from '../../assets/movies/2.jpg'
import m3 from '../../assets/movies/3.jpg'
import m4 from '../../assets/movies/4.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import HoverSlide from './HoverSlide/HoverSlide';

const Slide = ({ title }) => {
    var windowWidth = window.innerWidth / 260;

    const linkStyle = {
        textDecoration: "none",
    };

    return (
        <div className='slide-containerr'>
            <p>{title}</p>
            <Swiper
                slidesPerView={windowWidth}
                spaceBetween={30}
                freeMode={true}

                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link to="/movie/:id" style={linkStyle}>
                        <img
                            src={m1}
                            alt='movie'
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={m1}
                        alt='movie'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={m1}
                        alt='movie'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={m1}
                        alt='movie'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slide;

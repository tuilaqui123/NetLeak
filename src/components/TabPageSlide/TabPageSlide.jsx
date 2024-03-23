import React from 'react'
import './TabPageSlide.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import m1 from '../../assets/movies/1.jpg'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

export default function TabPageSlide({title}) {

    // var windowWidth = window.innerWidth / 260;

    const linkStyle = {
        textDecoration: "none",
    };

    return (
        <div className='slide-container'>
            <p>{title}</p>
            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <Link to="/movie/:id" style={linkStyle}>
                        <img
                            src={m1}
                            alt='movie'
                        />
                    </Link>
                    <p className='film-name'>Violet Evergarden</p>


                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/movie/:id" style={linkStyle}>
                        <img
                            src={m1}
                            alt='movie'
                        />
                    </Link>
                    <p className='film-name'>Violet Evergarden</p>


                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/movie/:id" style={linkStyle}>
                        <img
                            src={m1}
                            alt='movie'
                        />
                    </Link>
                    <p className='film-name'>Violet Evergarden</p>


                </SwiperSlide>

                <SwiperSlide>
                    <Link to="/movie/:id" style={linkStyle}>
                        <img
                            src={m1}
                            alt='movie'
                        />
                    </Link>
                    <p className='film-name'>Violet Evergarden</p>


                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/movie/:id" style={linkStyle}>
                        <img
                            src={m1}
                            alt='movie'
                        />
                    </Link>
                    <p className='film-name'>Violet Evergarden</p>


                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={m1}
                        alt='movie'
                    />
                                        <p className='film-name'>Violet Evergarden</p>

                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={m1}
                        alt='movie'
                    />
                                        <p className='film-name'>Violet Evergarden</p>

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

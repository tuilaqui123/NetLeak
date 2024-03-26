import React from "react";
import "./TopSlide.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import m1 from "../../assets/movies/1.jpg";
import n1 from "../../assets/NumberRanking/1.png";
import n2 from "../../assets/NumberRanking/2.png";

import n3 from "../../assets/NumberRanking/3.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

export default function TopSlide() {
  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <div className="slide-container">
      <p className="topslide-title">Thịnh hành</p>

      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <img src={n1} className="number"></img>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/movie/:id" style={linkStyle}>
            <img src={m1} alt="movie" />
          </Link>
          <p className="film-name">Violet Evergarden</p>
        </SwiperSlide>
        <SwiperSlide>
         
            <img src={n2} alt="movie" />
      
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/movie/:id" style={linkStyle}>
            <img src={m1} alt="movie" />
          </Link>
          <p className="film-name">Violet Evergarden</p>
        </SwiperSlide>
        <SwiperSlide>
          
            <img src={n3} alt="movie" />
         
        </SwiperSlide>
        <SwiperSlide>
          <img src={m1} alt="movie" />
          <p className="film-name">Violet Evergarden</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={m1} alt="movie" />
          <p className="film-name">Violet Evergarden</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={m1} alt="movie" />
          <p className="film-name">Violet Evergarden</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

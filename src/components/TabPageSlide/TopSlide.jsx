import React, { useEffect, useState } from "react";
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
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup để tránh leak memory
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <div className="slide-container">
      <p className="topslide-title">Thịnh hành</p>

      <Swiper
        slidesPerView={width/ 300}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
          <SwiperSlide className="swiper-Slide">
            <img src={n1} className="number"></img>
          </SwiperSlide>
          <SwiperSlide className="swiper-Slide">
            <Link to="/movie/:id" style={linkStyle}  onClick={() => window.scrollTo(0, 0)}>
              <img src={m1} alt="movie" />
            </Link>
            <p className="film-name">Violet Evergarden</p>
          </SwiperSlide>
          <SwiperSlide className="swiper-Slide">
            <img src={n2} alt="movie" className="number" />
          </SwiperSlide>

          <SwiperSlide className="swiper-Slide">
            <Link to="/movie/:id" style={linkStyle}  onClick={() => window.scrollTo(0, 0)}>
              <img src={m1} alt="movie" />
            </Link>
            <p className="film-name">Violet Evergarden</p>
          </SwiperSlide>
          <SwiperSlide className="swiper-Slide">
            <img src={n3} alt="movie" className="number " />
          </SwiperSlide>
          <SwiperSlide className="swiper-Slide">
          <Link to="/movie/:id" style={linkStyle}  onClick={() => window.scrollTo(0, 0)}>
            <img src={m1} alt="movie" />
            <p className="film-name">Violet Evergarden</p>
            </Link>
          </SwiperSlide>

        <SwiperSlide className="swiper-Slide">
        <Link to="/movie/:id" style={linkStyle}  onClick={() => window.scrollTo(0, 0)}>
          <img src={m1} alt="movie" />
          <p className="film-name">Violet Evergarden</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="swiper-Slide">
        <Link to="/movie/:id" style={linkStyle}  onClick={() => window.scrollTo(0, 0)}>
          <img src={m1} alt="movie" />
          <p className="film-name">Violet Evergarden</p>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import "./TabPageSlide.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useBeforeUnload } from "react-router-dom";
import m1 from "../../assets/movies/1.jpg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";



export default function TabPageSlide({ key, title, setGenre }) {
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
      <p
        className=" Genre-title font-bold text-white text-l mb-2 ml-2 hover:text-green-500 cursor-pointer display: inline-block border-b-4 border-[#de6262] "
        onClick={() => setGenre(title)}
      >
        {title}
      </p>

      <Swiper
        slidesPerView={width / 260}
        spaceBetween={30}
        freeMode={true}
        modules={[Navigation, Pagination, FreeMode]}

        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link
            to="/movie/:id"
            style={linkStyle}
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={m1} alt="movie" />
          </Link>
          <p className="film-name">Violet Evergarden</p>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/movie/:id"
            style={linkStyle}
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={m1} alt="movie" />
          </Link>
          <p className="film-name">Violet Evergarden</p>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/movie/:id"
            style={linkStyle}
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={m1} alt="movie" />
          </Link>
          <p className="film-name">Violet Evergarden</p>
        </SwiperSlide>

        <SwiperSlide>
          <Link
            to="/movie/:id"
            style={linkStyle}
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={m1} alt="movie" />
          </Link>
          <p className="film-name">Violet Evergarden</p>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/movie/:id"
            style={linkStyle}
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={m1} alt="movie" />
          </Link>
          <p className="film-name">Violet Evergarden</p>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/movie/:id"
            style={linkStyle}
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={m1} alt="movie" />
          </Link>
          <p className="film-name">Violet Evergarden</p>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/movie/:id"
            style={linkStyle}
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={m1} alt="movie" />
          </Link>
          <p className="film-name">Violet Evergarden</p>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/movie/:id"
            style={linkStyle}
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={m1} alt="movie" />
          </Link>
          <p className="film-name">Violet Evergarden</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

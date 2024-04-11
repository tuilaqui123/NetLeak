/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import m1 from "../../../assets/movies/1.jpg";
import m2 from "../../../assets/images/thumbnail.jpg";
import { Link } from "react-router-dom";
import "./GenreSlide.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPlus,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
export default function GenreSlide({ Genre }) {
  const times = new Array(23).fill(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  let hoverTimeout;

  const handleMouseEnter = (index) => {
    const gridContainer = document.querySelector(".grid-container");
    const rowElements = gridContainer.children;
    const firstRowElement = rowElements[0];
    const numberOfColumns = Math.floor(
      gridContainer.offsetWidth / firstRowElement.offsetWidth
    );

    // Kiểm tra số lượng phần tử trong hàng
    // alert(numberOfColumns);
    if (numberOfColumns < 5) {
      // chuyển tới phim thẳng luôn
      window.location.href = "/movie/:id";
      return;
    } else {
      hoverTimeout = setTimeout(() => {
        setHoveredIndex(index);
      }, 0);
    }
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setHoveredIndex(-1);
  };
  const handleIconClick = (event) => {
    event.stopPropagation(); // Ngăn chặn sự kiện lan sang phần tử cha
    handleMouseLeave(); // Gọi handleMouseLeave khi click vào icon Xmark
  };

  return (
    <div>
      <p className="genre-title"> {Genre}</p>
      <div className="grid-container">
        {/* <div className="image-container"> */}
        {times.map((_, index) => (
          <div
            className={`card ${index === hoveredIndex ? "hovered" : ""}`}
            onClick={() => handleMouseEnter(index)}
          >
            <div className="image-container">
              {index === hoveredIndex ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="cancel-icon"
                  onClick={handleIconClick}
                />
              ) : (
                ""
              )}
              <div className="image-overlay"></div>
              <img
                key={index}
                src={index === hoveredIndex ? m2 : m1}
                alt={`Ảnh ${index + 1}`}
              />
            </div>
            <p className="film-title">Violet Evergarden</p>
            {index === hoveredIndex ? (
              <div className="flim-description">
                <div className="flex flex-row mb-2 rating-container ml-2 ">
                  <Link to="/movie/:id">
                    <p className="font-black text-white text-sm mb-2 ml-2 hover:text-green-500 cursor-pointer">
                      Violet Evergarden{" "}
                    </p>
                  </Link>

                  <button className="rounded-full bg-green-500 text-white px-4 py-2 ml-auto hover:filter hover:brightness-110 transition duration-300">
                    <FontAwesomeIcon icon={faPlay} className="icon" />
                    {/* <p className='text-white  text-xs'>Phát</p> */}
                  </button>
                  <button className="rounded-full bg-gray-500 text-white px-4 py-2 ml-2 hover:filter hover:brightness-110 transition duration-300">
                    <FontAwesomeIcon icon={faPlus} className="icon" />
                    {/* <p className='text-white  text-xs'>Danh sách</p> */}
                  </button>
                </div>
                <ul className="flex flex-row mb-2 rating-container ml-2">
                  <li className="text-white font-medium">18+</li>
                  <li className="ml-3 mr-3 text-white">|</li>
                  <li className="text-white font-medium">2023</li>
                  <li className="ml-3 mr-3 text-white">|</li>
                  <li className="text-green-500 font-medium rating">
                    9.6
                    <FontAwesomeIcon
                      icon={faStar}
                      className="ml-1 text-green-500"
                    />
                  </li>
                </ul>
                <ul className="flex flex-row mb-2 movie-tag ml-2">
                  <li className="text-white text-xs mr-3 bg-gray-700 p-1 pl-3 pr-3 cursor-pointer rounded-md">
                    Anime
                  </li>
                  <li className="text-white text-xs mr-3 bg-gray-700 p-1 pl-3 pr-3  cursor-pointer rounded-md">
                    Anime
                  </li>
                  <li className="text-white text-xs mr-3 bg-gray-700 p-1 pl-3 pr-3  cursor-pointer rounded-md">
                    Anime
                  </li>
                </ul>
                <p className="text-white mb-10 text-xs ml-2 mr-2 mx-2 ">
                  Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách
                  hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai
                  thác mỏ và các loài động vật trong rừng.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

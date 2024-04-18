/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import m1 from "../../../assets/movies/1.jpg";
import m2 from "../../../assets/images/thumbnail.jpg";
import "./GenreSlide.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import HoverSlide from "./HoverSlide";
export default function GenreSlide({ Genre, setGerne }) {
  const times = new Array(23).fill(null);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
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
    if (numberOfColumns < 5 && hoveredIndex == -1) {
      // chuyển tới phim thẳng luôn
      setGerne('');
      window.scrollTo(0, 0);
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

  document.addEventListener("click", (e) => {
    if (hoveredIndex != -1) {
      console.log("click", e.target);
      const hoveredCard = document.querySelector(".card.hovered");

      if (!hoveredCard.contains(e.target)) {
        console.log("hovered");
        e.stopPropagation();
        handleMouseLeave();
      }
    }
  });

  return (
    <div>
      <p className="genre-title "> {Genre}</p>

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
            {index === hoveredIndex ? <HoverSlide setGenre={setGerne} /> : ""}
          </div>
        ))}
      </div>
    </div>
  );
}

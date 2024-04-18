/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import m1 from "../../../assets/movies/1.jpg";
import m2 from "../../../assets/images/thumbnail.jpg";
import "./GenreSlide.scss";
export default function GenreSlide({ Genre }) {
  const times = new Array(23).fill(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <p className="genre-title"> {Genre}</p>
      <div className="grid-container">
        {/* <div className="image-container"> */}
        {times.map((_, index) => (
          <div
            className={`card ${index === hoveredIndex ? "hovered" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              key={index}
              src={index === hoveredIndex ? m2 : m1}
              alt={`Ảnh ${index + 1}`}
            />
            <p className="film-title">Violet Evergarden</p>
            {index === hoveredIndex ? (<div className="flim-description" >
              <p> Đây là mô tả của Bộ phim vvvvvvvvvvvvv</p>
            </div>): ""}
            
          </div>
        ))}
      </div>
    </div>
  );
}

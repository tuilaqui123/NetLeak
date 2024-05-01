/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function HistorySlide({ movies }) {
  //   const movies= data;

  const [hoveredIndex, setHoveredIndex] = useState(-1);
  let hoverTimeout;

  const handleIconClick = (event) => {
    event.stopPropagation(); // Ngăn chặn sự kiện lan sang phần tử cha
    handleMouseLeave(); // Gọi handleMouseLeave khi click vào icon Xmark
  };

  return (
    <div>
      <div className="z-10 grid-container">
        {/* <div className="image-container"> */}

        {movies.map((movie, index) => {
          return (
            <div
            //   className={`listcard ${
            //     index === hoveredIndex ? "hovered" : ""
            //   } relative`}
            >
              <div className=" mb-0">
                {/* {index === hoveredIndex ? (
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="cancel-icon"
                    onClick={handleIconClick}
                  />
                ) : (
                  ""
                )} */}

                {index !== hoveredIndex ? (
                  <img
                    key={index}
                    src={movie.image.poster}
                    alt={`Ảnh ${index + 1}`}
                    className="h-[300px]"
                  />
                ) : (
                  <img
                    key={index}
                    src={movie.image.banner}
                    alt={`Ảnh ${index + 1}`}
                  />
                )}
              </div>
              {/* <div className="flex flex-row">
              <p className="w-4/5 film-title text- absolute text-black bottom-0 left-0  mt-10 line-clamp-2 truncate">
                {" "}
                {movie.title}
              </p>
              <div className="w-1/5">Xóa</div>
                </div>
              <div className="text-white bg-slate-400">Xóa</div> */}
              <div className="flex flex-row content-between">
                <div className=" w-4/5 flex items-center ">
                  <p className="py-5 text-black font-bold line-clamp-2 truncate">
                    {movie.title}
                  </p>
                </div>

                <div className="w-1/5 flex items-center justify-end">
                  <div className="w-[30px] h-[30px] cursor-pointer flex items-center justify-center rounded-md hover:bg-red-600 duration-150 east-out group">
                    <i className="fa-solid fa-trash text-[20px]  text-gray-600 group-hover:text-white duration-150 east-out"></i>
                  </div>
                </div>
              </div>
              {/* {index === hoveredIndex ? (
                <img src={item?.image.poster} className="h-[300px]" />
              ) : (
                ""
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}


import { Link } from "react-router-dom";
import "./GenreSlide.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPlus,
  faStar,
 
} from "@fortawesome/free-solid-svg-icons";
export default function HoverSlide({setGenre}) {
  const handleClick = ()=>{
    setGenre('');
    window.scrollTo(0, 0);

  }
  return (
    <>
     <div className="flim-description">
                <div className="flex flex-row mb-2 rating-container ml-2 pr-2 ">
                  <Link to="/movie/:id" onClick={handleClick}>
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
                <p className="text-white text-xs pl-2 pr-2 pb-2  bg-black rounded-[10px] text-justify">
                  Bị trúng lời nguyền chết chóc, vị hoàng tử lên đường tìm cách
                  hóa giải, để rồi rơi vào cuộc chiến giữa một thị trấn khai
                  thác mỏ và các loài động vật trong rừng. nidddddddddddd ddd ddddddddddddd ddddd ddddddd ddd ddddddddddddddd dddddddd dddddddddđ
                </p>
              </div>
    </>
  )
}

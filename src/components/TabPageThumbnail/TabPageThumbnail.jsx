
import "./TabPageThumbnail.scss";
import { useContext, useEffect, useState } from "react";
import N from "../../assets/images/N-logo.png";
import top10 from "../../assets/images/top10.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,

  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
const TabPageThumbnail = ({ Genre, setGenre, selectedGenre, setSelectedGenre }) => {
  const [showFilmContent, setShowFilmContent] = useState(true);
  const {genres} = useContext(AppContext)
  const handleChange = (e) => {
    const id=e.target.value;
    console.log(id);
    if(id == '')
    {
      setGenre('');
      setSelectedGenre(e.target.value)
     
      return;
    }

    setSelectedGenre(e.target.value)
    genres.map(genre => {
      if(genre._id == id)
      {
        setGenre(genre)
      }
    })
    
  };
  

  useEffect(() => {
    const handleResize = () => {
      // Kiểm tra độ rộng của màn hình và ẩn hiện Film-content dựa trên điều kiện
      if (window.innerWidth <= 1400) {
        setShowFilmContent(false);
      } else {
        setShowFilmContent(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="thumbnail-container">
      <div className="image-overlay"></div>
      {/* <video autoPlay controls="false"  className='thumb-pic'>
        <source src={thumb_vid} type="video/mp4"  className='thumb-pic'/>
        Your browser does not support the video tag.
      </video> */}


      <ReactPlayer
        url="https://www.youtube.com/watch?v=mLW35YMzELE" // đổi thumb-video tại đây
        className="thumb-pic"
        playing={true}
        loop={true}
        controls={false}
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: { modestbranding: "1", showinfo: "0", title: "0" },
          },
        }}
      />


      <div className="thumbnail-content">
        <div className="tab-title-container">
          <p className="tab-title">Anime</p>
          <select
            className="genre-selector capitalize"
            value={selectedGenre}
            onChange={handleChange}
          >
            <option value=''>Thể loại</option>
            {genres.map ((genre) =>{
              return (
                <option className=" capitalize" value={genre._id} key={genre._id}> {genre.title} </option>
              )
            })}
        
          </select>
        </div>

        {showFilmContent && (
          <div className="Film-content">
            <div className="title">
              <div className="tag">
                <img src={N} alt="N-logo" />
                <p>SERIAL</p>
              </div>
              <h1>VIOLET EVERGARDEN</h1>
            </div>
            <div className="ranking">
              <img src={top10} alt="top10" />
              <p>#1 DANH SÁCH THỊNH HÀNH</p>
            </div>
            <div className="access">
              <button className="play">
                <FontAwesomeIcon icon={faPlay} className="icon" />
                <p>Phát</p>
              </button>
              <button className="playlist">
                <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                <p>Thông tin thêm</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabPageThumbnail;

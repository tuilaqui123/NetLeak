import Navbar from "../../components/Navbar/Navbar";
import "./MyList.scss";
import React, { useContext, useEffect, useState } from "react";
import MyListSlide from "../../components/MyListSlide/MyListSlide";
import { AppContext } from "../../context/AppContext";

const TabPage = () => {
  const { genres } = useContext(AppContext);
  const [myList, setMyList] = useState(genres[0].movies); // list
  const [recommend, setRecommend] = useState(genres[1].movies); // đề xuất

  useEffect(() => {
    console.log("genre", genres[0]);
  }, []);
  return (
    <div className="mylist-container">
      <Navbar />
      <div className="movies-slide">
        <MyListSlide movies={myList} title="Danh sách phim của tôi" />
      </div>
      <div className="movies-slide">
        <MyListSlide movies={recommend} title="Đề xuất" />
      </div>
    </div>
  );
};

export default TabPage;

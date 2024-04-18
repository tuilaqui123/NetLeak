import "./User.css";
import React, { useState, useEffect, useRef } from "react";
import {
  CloseOutlined,
  UserOutlined,
  HistoryOutlined,
  WalletOutlined,
  CalendarOutlined,
  LogoutOutlined,
  MenuOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import Modal from "./Modal";
import DropDown from "./DropDown";
import SideBar from "./SideBar";

const History = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const Menu = ["Tài khoản", "Đăng xuất"];
  const menuRef = useRef();
  const avatarRef = useRef();
  function toggleUserDropdown() {
    setUserDropdown(!userDropdown);
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== avatarRef.current) {
      setUserDropdown(false);
    }
  });
  return (
    <div className="user-container ">
      <div className="header">
        <h1>Netflix</h1>
        <div className="relative">
          <div
            ref={avatarRef}
            className="flex flex-row items-center cursor-pointer"
            onClick={() => setUserDropdown(!userDropdown)}
          >
            <img
              src="src\assets\images\actor.jpg"
              className="rounded-full w-10 h-10 border-2"
            />
            <CaretDownOutlined className="ml-1" />
          </div>
          <DropDown ref={menuRef} isVisible={userDropdown} object={Menu} />
        </div>
      </div>
      <div className="flex-row flex">
        <SideBar />
        <div className="w-full">
          <div className="flex-col ">
            <h1 className="p-7 text-2xl font-semibold">Tài Khoản</h1>
            <div class="flex-col ">
              <div className="py-3 pl-7 font-semibold text-[20px] ">
                Phim đã xem
              </div>
              <div className="mt-3 flex rounded-md px-7 py-7 bg-white outline outline-1 outline-gray-300 justify-between items-center mr-20 ml-7">
                <span className="font-semibold text-[18px]">One Punch Man</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;

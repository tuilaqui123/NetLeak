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
function SideBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    const active = "p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-black";
    const hover = "hover:bg-[#bbbbbb] text-black";
    const inActive = "bg-blue-500 text-white";
    const Hover = ({isActive})=>
    isActive ? `${active} ${inActive}` : `${active} ${hover}`;
  return (
    <div>
    <div className={`${!isSidebarOpen ? 'left-[0px]' : 'left-[-300px]'} absolute text-xl top-[7px] left-6`}>
        <MenuOutlined onClick={() => toggleSidebar()} />
    </div>
    {/* ${isSidebarOpen ? 'left-[0px]' : 'left-[-300px]'} */}
    {isSidebarOpen && (
    <div className={`sidebar  relative  h-screen lg:left-0 p-2  w-[300px] overflow-y-auto text-center`}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Link />
            <div className="m-2.5 flex items-center cursor-pointer mt-6 w-[150px]">
              <ArrowLeftOutlined />
              <span className="ml-4 text-[14px] font-semibold">
                Quay về trang chủ
              </span>
            </div>
          </Link>

          <div className="text-black text-xl">
            <div className="p-2.5 mt-4 flex items-center cursor-pointer">
              <img
                src="src\assets\images\actor.jpg"
                className=" w-12 h-12 border-2"
              />
              <h1 className="font-semibold text-[15px] ml-3">Quang Minh</h1>
              <CloseOutlined
                className="ml-20 cursor-pointer lg:hidden"
                onClick={() => toggleSidebar()}
              />
            </div>
            <hr className="  my-5" />
          </div>

          <NavLink to="/user"  className={Hover}>
            <UserOutlined />
            <span className="text-[15px] ml-4 font-semibold">Tài Khoản</span>
          </NavLink>

          <NavLink to="/history" className={Hover}>
            <HistoryOutlined />
            <span className="text-[15px] ml-4 font-semibold">Lịch sử xem</span>
          </NavLink>

          <NavLink className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#bbbbbb] text-black">
            <WalletOutlined />
            <span className="text-[15px] ml-4 font-semibold">
              Phương thức thanh toán
            </span>
          </NavLink>

          <NavLink className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#bbbbbb] text-black">
            <CalendarOutlined />
            <span className="text-[15px] ml-4 font-semibold">
              Gia hạn dịch vụ
            </span>
          </NavLink>

          <hr className=" my-5" />

          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#bbbbbb] text-black">
            <LogoutOutlined />
            <span className="text-[15px] ml-4 font-semibold">Đăng xuất</span>
          </div>
        </div>)}
        </div>
  )
}

export default SideBar
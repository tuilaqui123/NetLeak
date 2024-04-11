import "./User.css";
import React, { useState } from "react";
import {
  CloseOutlined,
  UserOutlined,
  HistoryOutlined,
  WalletOutlined,
  CalendarOutlined,
  LogoutOutlined,
  MenuOutlined,
  CaretDownOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Link, NavLink } from 'react-router-dom';
import Modal from "./Modal";

const User = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  function toogleUserDropdown() {
    setUserDropdown(!userDropdown)
};

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="user-container ">
      <div className="header">
        <h1>Netflix</h1>
        <div className="flex flex-row items-center cursor-pointer">
          <img
            src="src\assets\images\actor.jpg"
            className="rounded-full w-10 h-10 border-2"
          />
          <CaretDownOutlined className="ml-1" />
        </div>
      </div>
      <div className="flex-row flex">
        {/* <span className="relative text-black text-4xl  cursor-pointer" onClick={()=>{toggleSidebar()}}>
        <MenuOutlined classID="px-2 rounded-md" />
        </span> */}
        <div className="sidebar ${isSidebarOpen ? 'left-[0px]' : 'left-[-300px]'} relative  h-screen lg:left-0 p-2  w-[300px] overflow-y-auto text-center">

        <Link to="/" style={{textDecoration: "none"}}><Link />  
        <div className="m-2.5 flex items-center cursor-pointer mt-6 w-[150px]">
            <ArrowLeftOutlined />
              <span className="ml-4 text-[14px] font-semibold">Quay về trang chủ</span>
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

          

          <NavLink className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-[#bbbbbb] hover:bg-[#bbbbbb] text-black">
            <UserOutlined />
            <span className="text-[15px] ml-4 font-semibold">Tài Khoản</span>
          </NavLink>

          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#bbbbbb] text-black">
            <HistoryOutlined />
            <span className="text-[15px] ml-4 font-semibold">Lịch sử xem</span>
          </div>

          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#bbbbbb] text-black">
            <WalletOutlined />
            <span className="text-[15px] ml-4 font-semibold">
              Phương thức thanh toán
            </span>
          </div>

          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#bbbbbb] text-black">
            <CalendarOutlined />
            <span className="text-[15px] ml-4 font-semibold">
              Gia hạn dịch vụ
            </span>
          </div>

          <hr className=" my-5" />

          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#bbbbbb] text-black">
            <LogoutOutlined />
            <span className="text-[15px] ml-4 font-semibold">Đăng xuất</span>
          </div>
        </div>
        <div className="w-full">
          <div className="flex-col ">
            
            <h1 className="p-7 text-2xl font-semibold">Tài Khoản</h1>
            <div class="flex-col ">
              <div className="py-3 pl-7 font-semibold text-[20px] ">
                Thông tin cá nhân
              </div>
              <div className="mt-3 flex rounded-md px-7 py-7 bg-white outline outline-1 outline-gray-300 justify-between items-center mr-20 ml-7">
                <div className="flex-col">
                  <span className="font-semibold text-[18px]">Ngô Võ Quang Minh</span>
                  <div className="flex-row mt-5 items-center ">
                    <span>Giới tính: </span>
                    <span className="font-semibold">Nam</span>
                    <span className="border-l border-gray-200 pl-10 ml-10 "></span>
                    <span>Ngày Sinh: </span>
                    <span className="font-semibold">03/01/2003</span>
                    <span className="border-l border-gray-200 pl-10 ml-10 "></span>
                    <span>UID: </span>
                    <span className="font-semibold">123456789</span>
                  </div>
                </div>
                <span className="font-semibold cursor-pointer" onClick={()=>setShowModal(true)}>Chỉnh sửa</span>
              </div>
              <div className="py-3 pl-7 font-semibold text-[20px] mt-3 ">
                Tài khoản và bảo mật
              </div>
              <div className="mt-3 flex flex-col rounded-md outline outline-1 outline-gray-300 px-7 py-7 bg-white mr-20 ml-7">
                
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="mr-3">Email </span>
                      <span className="font-semibold">sleeperminnie@gmail.com</span>
                    </div>
                    <span className="font-semibold cursor-pointer">Chỉnh sửa</span>
                  </div>
                  <hr className="border-gray-200 my-5"></hr>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="mr-3">Số điện thoại </span>
                      <span className="font-semibold">0354568446</span>
                    </div>
                    <span className="font-semibold cursor-pointer">Chỉnh sửa</span>
                  </div>
                  <hr className="border-gray-200 my-5"></hr>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="mr-3">Mật Khẩu </span>
                      <span className="font-semibold">*********</span>
                    </div>
                    <span className="font-semibold cursor-pointer">Chỉnh sửa</span>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={()=>setShowModal(false)} />
    </div>
  );
};

export default User;

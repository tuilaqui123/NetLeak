import "./User.css";
import React, { useState, useEffect, useRef, useContext } from "react";
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
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const User = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sexSelected, setSexSelected] = useState("");
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState([]);
  const Menu = ["Tài khoản", "Đăng xuất"];
  const menuRef = useRef();
  const avatarRef = useRef();

  
  

  const fetchUser = async () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjM3MTJiZGJjODRjNzZmYjkwMWI4OSIsImVtYWlsIjoidHJhbm5odXRwaGF0dHZAZ21haWwuY29tIiwiaWF0IjoxNzE0NTU5MjIzLCJleHAiOjE3MTQ1NzcyMjN9.FtVTFHNdxiKBcoVRUuKURb4CYumqPpS2ScC0P61tjn0";
  const decoded = jwtDecode(token).id;
  console.log("decode:", decoded);
    setUserId(decoded);
    try {
      const response = await axios.get(`http://localhost:8081/v1/api/admin/users/${decoded}`);
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
}

useEffect(() => {
  fetchUser()
}, [])

  function toggleUserDropdown() {
    setUserDropdown(!userDropdown);
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Kiểm tra nếu model đang được tắt
    if (!showModal1) {
      // Đặt lại giá trị của isDropDownOpened thành false
      setIsDropdownOpen(false);
      setSexSelected("");
    }
  }, [showModal1]);

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== avatarRef.current) {
      setUserDropdown(false);
    }
  });



  return (
    <div className="user-container">
      <div className="header">
        <h1>Netflix</h1>
        <div className="relative">
          <div
            ref={avatarRef}
            className="flex flex-row items-center cursor-pointer"
            onClick={() => setUserDropdown(!userDropdown)}
          >
            <img
              src="src\assets\images\netflix_avatar.png"
              className="rounded-full w-10 h-10 border-2"
            />
            <CaretDownOutlined className="ml-2" />
          </div>
          <DropDown ref={menuRef} isVisible={userDropdown} object={Menu} />
        </div>
      </div>
      <div className="flex-row flex">
        <SideBar className="z-50"/>
        <div className="w-full">
          <div className="flex-col ">
            <h1 className="p-7 text-2xl font-semibold">Tài Khoản</h1>
            <div className="flex-col ">
              <div className="py-3 pl-7 font-semibold text-[20px] ">
                Thông tin cá nhân
              </div>
              <div className="mt-3 flex rounded-md px-7 py-7 bg-white outline outline-1 outline-gray-300 justify-between items-center mr-20 ml-7">
                <div className="flex-col">
                  <span className="font-semibold text-[18px]">
                  {user?.name}
                  </span>
                  {/* md:block */}
                  <div className="flex flex-col mt-5  md:flex-row md:items-center">
                    <div>
                      <span>Giới tính: </span>
                      <span className="font-semibold">{user?.sexuality}</span>
                    </div>
                    {/* <div className="text-gray-300 ml-10 mr-10">|</div> */}
                    <div className="hidden md:block ml-10 pl-10 border-l border-gray-300 h-[20px]"></div>
                    {/* <span>Ngày Sinh: </span>
                    <span className="font-semibold">03/01/2003</span>
                    <span className="border-l border-gray-200 pl-10 ml-10 "></span> */}
                    <div className="mt-2 md:mt-0">
                      <span>UID: </span>
                      <span className="font-semibold">{user?._id}</span>
                    </div>
                  </div>
                </div>
                <span
                  className="font-semibold cursor-pointer"
                  onClick={() => setShowModal1(true)}
                >
                  Chỉnh sửa
                </span>
              </div>
              <div className="py-3 pl-7 font-semibold text-[20px] mt-3 ">
                Tài khoản và bảo mật
              </div>
              <div className="mt-3 mb-10 flex flex-col rounded-md outline outline-1 outline-gray-300 px-7 py-7 bg-white mr-20 ml-7">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="mr-3">Email </span>
                    <span className="font-semibold">
                    {user?.email}
                    </span>
                  </div>
                  <span
                    className="font-semibold cursor-pointer"
                    onClick={() => setShowModal2(true)}
                  >
                    Chỉnh sửa
                  </span>
                </div>
                <hr className="border-gray-200 my-5"></hr>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="mr-3">Số điện thoại </span>
                    <span className="font-semibold">{user?.phone}</span>
                  </div>
                  <span
                    className="font-semibold cursor-pointer"
                    onClick={() => setShowModal3(true)}
                  >
                    Chỉnh sửa
                  </span>
                </div>
                <hr className="border-gray-200 my-5"></hr>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="mr-3">Mật Khẩu </span>
                    <span className="font-semibold">*********</span>
                  </div>
                  <span
                    className="font-semibold cursor-pointer"
                    onClick={() => setShowModal4(true)}
                  >
                    Chỉnh sửa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isVisible={showModal1} onClose={() => setShowModal1(false)}>
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Chỉnh sửa thông tin cá nhân
          </h3>
          <div className="space-y-6" action="#">
            <div>
              <label
                for="email"
                className="block mb-2 text-s font-medium text-gray-900"
              >
                Họ và tên
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Nhập tên của bạn"
                className="bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />

              <label
                for="email"
                className="block mb-2 mt-4 text-s font-medium text-gray-900"
              >
                Giới tính
              </label>
              <div className="dropdown min-w-2 relative">
                <div
                  className={`select p-2.5 border-[1px] ${
                    isDropdownOpen ? "border-blue-500" : "border-gray-300"
                  } hover:border-blue-500 rounded-lg flex justify-between items-center cursor-pointer`}
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                >
                  {sexSelected ? sexSelected : "Giới tính"}
                  {isDropdownOpen ? <CaretUpOutlined /> : <CaretDownOutlined />}
                </div>
                {isDropdownOpen && (
                  <ul className="dropdown-menu p-2.5 w-full border-[1px] rounded-lg absolute top-[50px] bg-white shadow-gray-700 shadow-md duration-200">
                    <li
                      className="hover:text-blue-500 cursor-pointer"
                      onClick={() => {
                        setSexSelected("Nam");
                        setIsDropdownOpen(false);
                      }}
                    >
                      Nam
                    </li>
                    <li
                      className="hover:text-blue-500 cursor-pointer mt-2"
                      onClick={() => {
                        setSexSelected("Nữ");
                        setIsDropdownOpen(false);
                      }}
                    >
                      Nữ
                    </li>
                  </ul>
                )}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg p-2.5 mt-7 focus:ring-blue-500 focus:border-blue-500"
              >
                Gửi
              </button>
              <button
                type="button"
                className="w-full text-blue-700 bg-white border-blue-700 border-[1px] hover:bg-blue-100  rounded-lg p-2.5 mt-4 focus:ring-blue-500 focus:border-blue-700"
                onClick={() => setShowModal1(false)}
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Chỉnh sửa Email
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label
                for="email"
                className="block mb-2 text-s font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Nhập email của bạn"
                className="bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg p-2.5 mt-7 focus:ring-blue-500 focus:border-blue-500"
              >
                Gửi
              </button>
              <button
                type="button"
                className="w-full text-blue-700 bg-white border-blue-700 border-[1px] hover:bg-blue-100  rounded-lg p-2.5 mt-4 focus:ring-blue-500 focus:border-blue-700"
                onClick={() => setShowModal2(false)}
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Chỉnh sửa số điện thoại
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label
                for="email"
                className="block mb-2 text-s font-medium text-gray-900"
              >
                Số điện thoại
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Nhập số điện thoại"
                className="bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg p-2.5 mt-7 focus:ring-blue-500 focus:border-blue-500"
              >
                Gửi
              </button>
              <button
                type="button"
                className="w-full text-blue-700 bg-white border-blue-700 border-[1px] hover:bg-blue-100  rounded-lg p-2.5 mt-4 focus:ring-blue-500 focus:border-blue-700"
                onClick={() => setShowModal3(false)}
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}>
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Đổi mật khẩu
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label
                for="password"
                className="block mb-2 text-s font-medium text-gray-900"
              >
                Mật khẩu cũ
              </label>
              <input
                type="password"
                name="email"
                id="email"
                placeholder="Nhập mật khẩu cũ"
                className="bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <label
                for="password"
                className="block mb-2 mt-4 text-s font-medium text-gray-900"
              >
                Mật khẩu mới
              </label>
              <input
                type="password"
                name="email"
                id="email"
                placeholder="Nhập mật khẩu mới"
                className="bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg p-2.5 mt-7 focus:ring-blue-500 focus:border-blue-500"
              >
                Gửi
              </button>
              <button
                type="button"
                className="w-full text-blue-700 bg-white border-blue-700 border-[1px] hover:bg-blue-100  rounded-lg p-2.5 mt-4 focus:ring-blue-500 focus:border-blue-700"
                onClick={() => setShowModal4(false)}
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default User;

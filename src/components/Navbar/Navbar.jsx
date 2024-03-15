import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './navbar.css'
import React, { useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import image from '../../assets/movies/1.jpg'
import Noti from './Noti';

const Navbar = () => {

    const [noti, setNoti] = useState(false)

    function toogleNoti() {
        setNoti(!noti)
    }

    const linkStyle = {
        textDecoration: "none",
    };


    return (
        <div className='navbar-container'>
            <ul>
                <li>
                    <h2>NETFLIX</h2>
                </li>
                <li>
                    <Link to="/" style={linkStyle}><Link />
                        <p>Trang chủ</p>
                    </Link>
                </li>
                <li>
                    <Link to="/tab/ok" style={linkStyle}><Link />
                        <p>TV Shows</p>
                    </Link>
                </li>
                <li>
                    <p>Phim</p>
                </li>
                <li>
                    <p>Mới và hot</p>
                </li>
                <li>
                    <p>Thể loại</p>
                </li>
                <li>
                    <p>Danh sách</p>
                </li>
            </ul>
            <div className='access'>
                <div className='icon-button'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                    <FontAwesomeIcon icon={faBell} className='icon' onClick={toogleNoti} />
                    <FontAwesomeIcon icon={faUser} className='icon' />
                </div>
                {noti && (
                    <div className='noti-container'>
                        <div className='noti-access'>
                            <h3>THÔNG BÁO</h3>
                            <p>Đánh dấu tất cả</p>
                        </div>
                        <p>Mới cập nhật</p>
                        <Noti />
                        <Noti />
                        <Noti />
                        <p>Trước đó</p>
                        <Noti />
                        <Noti />
                        <Noti />
                        <Noti />
                        <Noti />
                        <Noti />
                        <Noti />
                        <Noti />
                    </div>
                )}
            </div>

        </div>
    );
}

export default Navbar;
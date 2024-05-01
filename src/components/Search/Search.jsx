
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import MovieCard from './MovieCard.jsx';

import DropdownCheckbox from './DropDown.jsx';
import DropdownRadio from './DropDownRadio.jsx';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
// import SortByRating from './SortByRating.jsx';
import "../../hideScrollbar.css"
// import required modules



const Search = () => {

    const genreList = [
        { id: 'Comedy', label: 'Hài hước' },
        { id: 'Shounen', label: 'Shounen' },
        { id: 'Shoujo', label: 'Shoujo' },
        { id: 'Josei', label: 'Josei' },
        { id: 'Isekai', label: 'Chuyển sinh' },
        { id: 'Slice of life', label: 'Đời thường' },
        { id: 'Fantasy', label: 'Kỳ ảo' },
        { id: 'Romance', label: 'Lãng mạn' },
        { id: 'Horror', label: 'Kinh dị' }
    ];

    const type = [
        { id: 'Series', label: 'Series' },
        { id: 'Movie', label: 'Movie' },
    ];

    const rating = [

        { id: 'ASC', label: 'Tăng dần' },
        { id: 'DESC', label: 'Giảm dần' },

    ]

    return (
        <div className="bg-[#3e3e3e] w-full h-auto flex justify-center pb-[20vh] overflow-hidden">
            <div className='w-11/12'>

                <nav className=" flex lg:flex-row md:flex-col p-3 text-center border-bottom">
                    <div className="flex md:w-full lg:w-1/6 col-lg justify-center items-center">
                        <p className="text-3xl font-bold text-[#ff0000] cursor-pointer">
                            NETFLIX
                        </p>
                    </div>

                    <div className="lg:w-1/2 md:w-full md:mt-3 flex flex-row justify-center shadow-md rounded-lg gap-5 ">

                        <form className='lg:w-11/12 md:w-3/5'>

                            <input className='lg:pl-3 md:p-2 w-full h-full outline-none rounded-md italic text-white bg-white'
                                type="text"
                                placeholder='Tìm kiếm'
                            />
                        </form>

                        <button className='w-1/12 bg-[#ff0000] rounded-md '>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='icon text-white' />
                        </button>

                    </div>
                    <div className='lg:ml-5 lg:w-2/5 md:w-full md:ml-0 md:mt-2 flex flex-row relative items-center hidden'>
                        <ul className='w-full flex md:flex-row text-white justify-between md:item-center'>
                            <li>
                                <a href="#" className='cursor-pointer hover:text-red-500 '>TV Shows</a>
                            </li>
                            <li>
                                <a href="#" className='cursor-pointer hover:text-red-500 '>Phim</a>
                            </li>
                            <li>
                                <a href="#" className='cursor-pointer hover:text-red-500 '>Mới và hot</a>
                            </li>
                            <li>
                                <a href="#" className='cursor-pointer hover:text-red-500 '>Thể loại</a>
                            </li>
                            <li>
                                <a href="#" className='cursor-pointer hover:text-red-500 '>TV Shows</a>
                            </li>
                            <li>
                                <a href="#" className='cursor-pointer hover:text-red-500 '>Danh sách</a>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faBell} className='cursor-pointer hover:text-red-500' />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faUser} className='cursor-pointer hover:text-red-500' />
                            </li>

                        </ul>


                    </div>
                </nav>

                <div className='flex flex-col h-full'>
                    <div className='w-3/4 flex flex-row pl-10 h-1/6'>
                        <div className='w-5/6 content-center'>
                            <p className='text-white text-lg'>Kết quả tìm kiếm cho:</p>
                        </div>
                        {/* <SortByRating dropdownName={"Sắp xếp theo đánh giá"} options={rating}/> */}
                        <div>

                        </div>

                    </div>
                    <div className='w-full flex flex-row gap-3'>
                        <div className='w-3/4 flex flex-col'>
                            <div className='w-full h-screen grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 md:gap-2 sm:grid-cols-1 gap-10 pb-10 overflow-y-scroll scrollable-div'>
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                                <MovieCard />
                            </div>
                        </div>
                        <div className='flex flex-col items-center w-1/4  content-center px-7 gap-5'>
                            <div className='border-b-2 pb-2'>
                                <p className='text-red-500 font-bold text-xl text-center'>
                                    Bộ lọc phim
                                </p>
                            </div>
                            <DropdownCheckbox dropdownName="Thể loại" options={genreList} />
                            <DropdownRadio dropdownName="Loại" options={type} />

                            <button className="w-3/4 rounded-md bg-[#c5c5c5] border group border-[#ff0000] px-3 py-3 text-sm font-medium text-gray-700 hover:bg-[#ff0000]">
                                <p className="group-hover:text-white text-black">Xoá bộ lọc</p>
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
};
export default Search;


import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar/Navbar.jsx';

import moviesData from './Data';
import MovieCard from './MovieCard.jsx';

import DropdownCheckbox from './DropDown.jsx';


// import required modules



const Search = () => {

    const genreList = [
        { id: 1, label: 'Hài hước' },
        { id: 2, label: 'Kinh dị' },
        { id: 3, label: 'Lãng mạn' },
      ];

      const type = [
        { id: 1, label: 'Series' },
        { id: 2, label: 'Movie' },
      ];


    return (
        <div className="w-full h-auto flex justify-center pb-[10vh]">
            <div className='w-11/12'>

                <div className="border border-red-500 flex flex-row p-3 text-center border-bottom">
                        <div className="w-1/5 col-lg">
                            <p className="text-4xl font-bold text-red-500">
                                NETFLIX
                            </p>
                        </div>

                        <div className="w-2/5 flex flex-row justify-between shadow-md border-2 boder-grey-200 rounded-lg ">

                            <form className='w-11/12 h-full'>

                                    <input className='pl-3 w-full h-full outline-none rounded-md italic text-white bg-neutral-700'
                                        type="text"
                                        placeholder='Tìm kiếm'
                                    />
                            </form>

                            <button className='w-1/12 justify-center'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'  />
                            </button>

                        </div>
                </div>
                <div className='w-full flex flex-row  border border-green-500 p-3 gap-3'>
                    <div className='w-3/4 flex flex-col'>
                        <div className=''>
                            <p className='text-white'>Kết quả tìm kiếm cho:</p>
                        </div>
                    <div className='p-5 w-full h-screen border mt-5 grid grid-cols-5 gap-5'>

                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />
                        <MovieCard />

                    </div>
                    </div>
                    <div className='flex flex-col w-1/4 border border-red-500'>
                        <div className='w-full'>
                        <DropdownCheckbox dropdownName="Thể loại" options={genreList} />
                        </div>
                        <div className='w-full'>
                        <DropdownCheckbox dropdownName="Loại" options={type} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};
export default Search;
